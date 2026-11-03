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
 *   --backup <path>     save the current documents to <path> before writing
 *   --rollback <path>   restore the documents saved in <path>
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
          "  --backup <path>       export the current documents before writing",
          "  --rollback <path>     restore the documents exported in <path>",
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
    };
  } finally {
    await server.close();
  }
}

async function firestoreConfig() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  if (!projectId) return null;
  return {
    projectId,
    appId: process.env.FIREBASE_APP_ID ?? "migration-script",
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? `${projectId}.firebaseapp.com`,
    databaseId: process.env.FIREBASE_DATABASE_ID,
  };
}

async function openFirestore() {
  const config = await firestoreConfig();
  if (!config) return null;
  const { initializeApp, getApps, getApp } = await import("firebase/app");
  const { getFirestore, doc, getDoc, setDoc, deleteDoc } = await import("firebase/firestore");
  const app = getApps().length > 0 ? getApp() : initializeApp(config);
  const db = config.databaseId ? getFirestore(app, config.databaseId) : getFirestore(app);
  return { db, doc, getDoc, setDoc, deleteDoc };
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
  const { db, doc, setDoc, deleteDoc } = store;
  let restored = 0;
  let removed = 0;
  for (const table of TABLES) {
    const entries = backup.tables[table] ?? [];
    for (const entry of entries) {
      const ref = doc(db, table, entry.id);
      if (entry.exists) {
        await setDoc(ref, entry.data);
        restored += 1;
      } else {
        await deleteDoc(ref);
        removed += 1;
      }
    }
  }
  console.log(`Rollback complete: ${restored} document(s) restored, ${removed} removed.`);
}

function planChanges(table, payloadRecords, currentDocs) {
  const changes = [];
  for (const record of payloadRecords) {
    const id = idOf(table, record);
    const fields = englishFields(table, record);
    if (Object.keys(fields).length === 0) continue;
    const existing = currentDocs.get(id);
    const patch = {};
    for (const [key, value] of Object.entries(fields)) {
      if (JSON.stringify(existing?.[key]) !== JSON.stringify(value)) patch[key] = value;
    }
    if (Object.keys(patch).length > 0) changes.push({ id, patch });
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
    const changes = planChanges(table, payload[table], await readCurrentDocs(store, table, ids));
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

  if (args.backup) {
    const backup = { generatedAt: new Date().toISOString(), tables: {} };
    for (const table of TABLES) {
      backup.tables[table] = [];
      for (const change of plans[table]) {
        const snapshot = await store.getDoc(store.doc(store.db, table, change.id));
        backup.tables[table].push({
          id: change.id,
          exists: snapshot.exists(),
          data: snapshot.exists() ? snapshot.data() : null,
        });
      }
    }
    const target = isAbsolute(args.backup) ? args.backup : resolve(process.cwd(), args.backup);
    writeFileSync(target, JSON.stringify(backup, null, 2));
    console.log(`\nBackup written to ${target}`);
  }

  for (const table of TABLES) {
    for (const change of plans[table]) {
      await store.setDoc(store.doc(store.db, table, change.id), change.patch, { merge: true });
    }
  }
  console.log(
    `\nApplied ${totalChanges} document update(s). Attempts and results were not touched.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
