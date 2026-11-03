#!/usr/bin/env node
/**
 * Bilingual content migration for the CTFL exam simulator.
 *
 * The French content lives in the seed files and is the source of truth. The
 * English translation is stored on the very same Firestore documents under
 * suffixed fields (`title_en`, `description_en`, `text_en`, `explanation_en`,
 * `option_rationales_en`).
 *
 * Guarantees:
 *  - non-destructive: only the `*_en` fields are written, nothing else is touched
 *  - idempotent: running it twice produces no change the second time
 *  - stable ids: documents are addressed by their stable id, never by position
 *  - attempts, answers, results and statistics are never read or written
 *
 * Usage:
 *   node scripts/migrate-bilingual-content.mjs                  # simulation (default)
 *   node scripts/migrate-bilingual-content.mjs --check          # simulation + exit 1 if incomplete
 *   node scripts/migrate-bilingual-content.mjs --apply --backup backup.json
 *   node scripts/migrate-bilingual-content.mjs --rollback backup.json
 *
 * Options:
 *   --apply             write the English fields to Firestore
 *   --dry-run           explicit simulation (default)
 *   --backup <path>     save English fields and target metadata before writing
 *   --rollback <path>   restore only changed English fields from <path>
 *   --check             exit with status 1 when a translation is missing
 *   --verbose           list every document that would change
 */
import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, isAbsolute } from "node:path";

const TABLES = ["exams", "questions", "question_options", "question_solutions"];

function parseArgs(argv) {
  const args = { apply: false, check: false, verbose: false, backup: null, rollback: null };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--apply") args.apply = true;
    else if (arg === "--dry-run") args.apply = false;
    else if (arg === "--check") args.check = true;
    else if (arg === "--verbose") args.verbose = true;
    else if (arg === "--backup") args.backup = argv[++i] ?? null;
    else if (arg === "--rollback") args.rollback = argv[++i] ?? null;
    else if (arg === "--help" || arg === "-h") {
      console.log(
        [
          "Usage: node scripts/migrate-bilingual-content.mjs [options]",
          "",
          "  --dry-run (default)   simulate, print what would change",
          "  --apply               write the English fields to Firestore",
          "  --backup <path>       export English fields before writing",
          "  --rollback <path>     restore English fields exported in <path>",
          "  --check               exit 1 when a translation is missing",
          "  --verbose             list every modified document",
        ].join("\n"),
      );
      process.exit(0);
    } else {
      console.error(`Unknown option: ${arg}`);
      process.exit(2);
    }
  }
  return args;
}

function englishFields(table, record) {
  const fields = {};
  if (table === "exams") {
    if (record.title_en !== undefined) fields.title_en = record.title_en;
    if (record.description_en !== undefined) fields.description_en = record.description_en;
  } else if (table === "question_solutions") {
    if (record.explanation_en !== undefined) fields.explanation_en = record.explanation_en;
    if (record.option_rationales_en !== undefined) {
      fields.option_rationales_en = record.option_rationales_en;
    }
  } else if (record.text_en !== undefined) {
    fields.text_en = record.text_en;
  }
  return fields;
}

function idOf(table, record) {
  return table === "question_solutions" ? record.question_id : record.id;
}

/** Loads the enriched seed payload through Vite so the TS sources stay canonical. */
async function loadPayload() {
  const { createServer } = await import("vite");
  const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const server = await createServer({
    root,
    configFile: false,
    logLevel: "error",
    server: { middlewareMode: true },
    appType: "custom",
  });
  try {
    const module = await server.ssrLoadModule("/src/integrations/supabase/seed-payload.ts");
    return {
      exams: module.SEED_EXAMS,
      questions: module.SEED_QUESTIONS,
      question_options: module.SEED_OPTIONS,
      question_solutions: module.SEED_SOLUTIONS,
      coverage: module.SEED_COVERAGE,
      englishFieldsToAdd: module.englishFieldsToAdd,
    };
  } finally {
    await server.close();
  }
}

export async function firestoreConfig(env = process.env) {
  const projectId = env.FIREBASE_PROJECT_ID;
  if (!projectId) return null;
  if (!env.FIREBASE_DATABASE_ID || !env.FIREBASE_API_KEY) {
    throw new Error(
      "FIREBASE_DATABASE_ID and FIREBASE_API_KEY are required with FIREBASE_PROJECT_ID; no default database fallback is allowed.",
    );
  }
  return {
    projectId,
    appId: env.FIREBASE_APP_ID ?? "migration-script",
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN ?? `${projectId}.firebaseapp.com`,
    databaseId: env.FIREBASE_DATABASE_ID,
  };
}

async function openFirestore() {
  const config = await firestoreConfig();
  if (!config) return null;
  const { initializeApp } = await import("firebase/app");
  const { getFirestore, doc, getDoc, runTransaction, deleteField } =
    await import("firebase/firestore");
  const app = initializeApp(config, `bilingual-migration-${Date.now()}`);
  const db = getFirestore(app, config.databaseId);
  return { db, doc, getDoc, runTransaction, deleteField, config };
}

function readBackup(path) {
  const raw = readFileSync(resolve(process.cwd(), path), "utf8");
  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== "object" || !parsed.tables) {
    throw new Error("Invalid backup file: missing `tables`.");
  }
  return parsed;
}

async function rollback(path) {
  const backup = readBackup(path);
  const store = await openFirestore();
  if (!store) {
    console.error("FIREBASE_PROJECT_ID is required to roll back against Firestore.");
    process.exit(2);
  }
  const { db, doc, runTransaction, deleteField, config } = store;
  if (
    backup.version !== 2 ||
    backup.projectId !== config.projectId ||
    backup.databaseId !== config.databaseId
  ) {
    throw new Error("Backup format or target mismatch. Refusing a whole-document rollback.");
  }
  let restored = 0;
  for (const table of TABLES) {
    for (const entry of backup.tables[table] ?? []) {
      const ref = doc(db, table, entry.id);
      await runTransaction(db, async (transaction) => {
        const snapshot = await transaction.get(ref);
        if (!snapshot.exists()) throw new Error(`Rollback document missing: ${table}/${entry.id}`);
        const current = snapshot.data();
        const patch = rollbackFields(current, entry, deleteField);
        if (Object.keys(patch).length) transaction.update(ref, patch);
      });
      restored += 1;
    }
  }
  console.log(`Rollback complete: English fields restored on ${restored} document(s).`);
}

export function rollbackFields(current, entry, deleteField) {
  const patch = {};
  for (const [key, applied] of Object.entries(entry.applied)) {
    if (
      !["title_en", "description_en", "text_en", "explanation_en", "option_rationales_en"].includes(
        key,
      )
    )
      throw new Error("Invalid backup field");
    if (JSON.stringify(current[key]) === JSON.stringify(entry.before[key])) continue;
    if (JSON.stringify(current[key]) !== JSON.stringify(applied))
      throw new Error(`English content changed since migration: ${entry.id}/${key}`);
    patch[key] = Object.hasOwn(entry.before, key) ? entry.before[key] : deleteField();
  }
  return patch;
}

export function planChanges(table, payloadRecords, currentDocs, patchFor) {
  const changes = [];
  for (const record of payloadRecords) {
    const id = idOf(table, record);
    const existing = currentDocs.get(id);
    if (!existing)
      throw new Error(
        `Missing document ${table}/${id}; migration refuses to create partial documents. Verify the target database.`,
      );
    const patch = patchFor(table, record, existing);
    const after = { ...existing, ...patch };
    for (const [key, expected] of Object.entries(englishFields(table, record))) {
      const complete =
        key === "option_rationales_en"
          ? Object.keys(expected).every(
              (id) => typeof after[key]?.[id] === "string" && after[key][id].trim(),
            )
          : typeof after[key] === "string" && after[key].trim();
      if (!complete)
        throw new Error(
          `Source content differs at ${table}/${id}/${key}; supply a reviewed translation instead of applying stale seed content.`,
        );
    }
    if (Object.keys(patch).length)
      changes.push({ id, patch, before: englishFields(table, existing), source: record });
  }
  return changes;
}
// Documents are addressed by their stable ids coming from the payload, so one get
// per document is enough (no collection scan).
async function readCurrentDocs(store, table, ids) {
  const docs = new Map();
  if (!store) return docs;
  for (const id of ids) {
    const snapshot = await store.getDoc(store.doc(store.db, table, id));
    if (snapshot.exists()) docs.set(id, snapshot.data());
  }
  return docs;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.rollback) {
    await rollback(args.rollback);
    return;
  }

  const payload = await loadPayload();
  if (!payload) throw new Error("Unable to load the bilingual seed payload.");

  const coverage = payload.coverage;
  const incomplete = coverage.filter((row) => !row.complete);

  console.log("Translation coverage (per exam):");
  console.log(
    "  exam                                   questions   options   explanations   rationales",
  );
  for (const row of coverage) {
    const cell = (a, b) => `${a}/${b}`.padEnd(9);
    console.log(
      `  ${row.examId.padEnd(38)} ${cell(row.questionsTranslated, row.questions)} ${cell(
        row.optionsTranslated,
        row.options,
      )} ${cell(row.explanationsTranslated, row.explanations)} ${cell(
        row.rationalesTranslated,
        row.rationales,
      )}`,
    );
  }
  const totals = coverage.reduce(
    (acc, row) => ({
      questions: acc.questions + row.questionsTranslated,
      options: acc.options + row.optionsTranslated,
      explanations: acc.explanations + row.explanationsTranslated,
      rationales: acc.rationales + row.rationalesTranslated,
    }),
    { questions: 0, options: 0, explanations: 0, rationales: 0 },
  );
  console.log(
    `  TOTAL: ${totals.questions} question(s), ${totals.options} option(s), ` +
      `${totals.explanations} explanation(s), ${totals.rationales} rationale(s).`,
  );

  const store = await openFirestore();
  if (!store) {
    if (args.apply) throw new Error("FIREBASE_PROJECT_ID is required to apply a migration.");
    console.log(
      "\nNo Firestore credentials (FIREBASE_PROJECT_ID) — simulation limited to the bundled payload.",
    );
    if (args.check && incomplete.length > 0) process.exit(1);
    return;
  }

  const plans = {};
  let totalChanges = 0;
  for (const table of TABLES) {
    const ids = payload[table].map((record) => idOf(table, record));
    const changes = planChanges(
      table,
      payload[table],
      await readCurrentDocs(store, table, ids),
      payload.englishFieldsToAdd,
    );
    plans[table] = changes;
    totalChanges += changes.length;
    console.log(`\n${table}: ${changes.length} document(s) to update.`);
    if (args.verbose) {
      for (const change of changes) {
        console.log(`  - ${change.id}: ${Object.keys(change.patch).join(", ")}`);
      }
    }
  }

  if (!args.apply) {
    console.log("\nSimulation only. Re-run with --apply to write these changes.");
    if (args.check && (incomplete.length > 0 || totalChanges > 0)) process.exit(1);
    return;
  }

  if (!args.backup) throw new Error("--backup <path> is required with --apply.");
  if (incomplete.length) throw new Error("Incomplete translation payload; refusing to apply.");
  if (args.backup) {
    const backup = {
      version: 2,
      projectId: store.config.projectId,
      databaseId: store.config.databaseId,
      generatedAt: new Date().toISOString(),
      tables: {},
    };
    for (const table of TABLES) {
      backup.tables[table] = [];
      for (const change of plans[table]) {
        backup.tables[table].push({ id: change.id, before: change.before, applied: change.patch });
      }
    }
    const target = isAbsolute(args.backup) ? args.backup : resolve(process.cwd(), args.backup);
    writeFileSync(target, JSON.stringify(backup, null, 2), { flag: "wx", mode: 0o600 });
    console.log(`\nBackup written to ${target}`);
  }

  for (const table of TABLES) {
    for (const change of plans[table]) {
      const ref = store.doc(store.db, table, change.id);
      await store.runTransaction(store.db, async (transaction) => {
        const snapshot = await transaction.get(ref);
        if (!snapshot.exists()) throw new Error(`Document disappeared: ${table}/${change.id}`);
        const current = snapshot.data();
        const patch = payload.englishFieldsToAdd(table, change.source, current);
        if (
          JSON.stringify(patch) !== JSON.stringify(change.patch) ||
          JSON.stringify(englishFields(table, current)) !== JSON.stringify(change.before)
        ) {
          throw new Error(
            `Document changed after planning: ${table}/${change.id}; run a fresh simulation.`,
          );
        }
        transaction.update(ref, patch);
      });
    }
  }
  console.log(
    `\nApplied ${totalChanges} document update(s). Attempts and results were not touched.`,
  );
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
