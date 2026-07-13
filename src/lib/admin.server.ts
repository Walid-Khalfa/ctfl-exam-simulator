// Server-only admin helpers. Blocked from the client bundle by the *.server.ts
// filename, so it may hold the AI gateway logic and service-role access.
import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export interface ExtractedQuestion {
  number: number | null;
  text: string;
  type: "single" | "multi";
  answers_required: number;
  chapter: number | null;
  k_level: "K1" | "K2" | "K3" | null;
  learning_objective: string;
  points: number;
  source_page: number | null;
  options: { label: string; text: string; rationale?: string }[];
  correct_labels: string[];
  explanation: string;
  has_visual: boolean;
}

export interface AnswerKeyEntry {
  number: number;
  correct_labels: string[];
  explanation: string;
}

const QUESTIONS_INSTRUCTIONS = `Tu es un assistant expert de l'examen ISTQB CTFL v4.0.
On te fournit un PDF de questions à choix multiple.
Extrait TOUTES les questions de manière structurée, avec leurs options A à E.

Réponds UNIQUEMENT avec un objet JSON de la forme:
{"questions":[{
  "number": <numéro de la question, entier>,
  "text": "<énoncé complet de la question>",
  "type": "single" | "multi",
  "answers_required": <nombre de réponses attendues, 1 pour single>,
  "chapter": <1-6, chapitre du syllabus CTFL v4.0 ou null>,
  "k_level": "K1" | "K2" | "K3" | null,
  "learning_objective": "<objectif d'apprentissage, ex: FL-1.1.1, ou ''>",
  "points": <points, 1 par défaut>,
  "source_page": <numéro de page du PDF où la question apparaît>,
  "options": [{"label":"A","text":"..."},{"label":"B","text":"..."}, ...],
  "correct_labels": ["A"],
  "explanation": "<explication si présente dans ce PDF, sinon ''>",
  "has_visual": <true si la question contient un tableau, un schéma ou une image>
}]}

Règles importantes:
- Extrais TOUTES les options présentes (A, B, C, D, et E si elle existe). Conserve exactement les libellés.
- Ne mets "correct_labels" que si la bonne réponse est explicitement indiquée dans CE PDF ; sinon laisse [].
- N'invente jamais une réponse correcte.
- Renseigne toujours "source_page".
- Ne renvoie rien d'autre que le JSON.`;

const ANSWER_KEY_INSTRUCTIONS = `Tu es un assistant expert de l'examen ISTQB CTFL v4.0.
On te fournit un PDF de corrigé (clé de réponses) pour un examen à choix multiple.
Il peut contenir des lignes comme "1: C", "1) C", "1. C, D", "Question 1 : C", "1 - C".
Extrais TOUTES les correspondances numéro de question -> bonne(s) réponse(s).

Réponds UNIQUEMENT avec un objet JSON de la forme:
{"answers":[{
  "number": <numéro de la question, entier>,
  "correct_labels": ["C"] ou ["B","D"] pour plusieurs bonnes réponses,
  "explanation": "<explication associée si présente, sinon ''>"
}]}

Règles importantes:
- "1:C" signifie que la bonne réponse de la question 1 est l'option C -> {"number":1,"correct_labels":["C"]}.
- Conserve les libellés d'options en majuscules (A, B, C, D, E).
- Si plusieurs options sont correctes, liste-les toutes.
- N'invente jamais une réponse : n'inclus que ce qui figure dans le PDF.
- Ne renvoie rien d'autre que le JSON.`;

function fileParts(bytes: Uint8Array, filename: string) {
  const b64 = Buffer.from(bytes).toString("base64");
  return {
    type: "file" as const,
    file: { filename, file_data: `data:application/pdf;base64,${b64}` },
  };
}

async function callGateway(content: unknown[]): Promise<string> {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) throw new Error("Clé AI manquante côté serveur");

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [{ role: "user", content }],
      response_format: { type: "json_object" },
    }),
  });

  if (res.status === 429) throw new Error("Limite de requêtes AI atteinte. Réessayez plus tard.");
  if (res.status === 402)
    throw new Error("Crédits AI épuisés. Ajoutez des crédits à l'espace de travail.");
  if (!res.ok) throw new Error(`Échec de l'extraction AI (${res.status})`);

  const json = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  let raw = (json.choices?.[0]?.message?.content ?? "").trim();
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) raw = fenced[1].trim();
  return raw;
}

function normLabels(labels: unknown): string[] {
  if (!Array.isArray(labels)) return [];
  return labels.map((l) => String(l).trim().toUpperCase()).filter((l) => /^[A-E]$/.test(l));
}

export async function extractQuestionsFromPdf(
  questionsPdf: Uint8Array,
): Promise<ExtractedQuestion[]> {
  const content: unknown[] = [
    { type: "text", text: QUESTIONS_INSTRUCTIONS },
    { type: "text", text: "PDF des questions :" },
    fileParts(questionsPdf, "questions.pdf"),
  ];

  const raw = await callGateway(content);
  let parsed: { questions?: ExtractedQuestion[] };
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("La réponse de l'IA n'a pas pu être analysée.");
  }
  const list = Array.isArray(parsed.questions) ? parsed.questions : [];
  return list.map((q, i) => ({
    number: q.number ?? i + 1,
    text: q.text ?? "",
    type: q.type === "multi" ? "multi" : "single",
    answers_required: Math.max(1, q.answers_required ?? (q.type === "multi" ? 2 : 1)),
    chapter: q.chapter ?? null,
    k_level: q.k_level ?? null,
    learning_objective: q.learning_objective ?? "",
    points: q.points ?? 1,
    source_page: q.source_page ?? null,
    options: Array.isArray(q.options)
      ? q.options.map((o) => ({
          label: String(o.label ?? "")
            .trim()
            .toUpperCase(),
          text: o.text ?? "",
          rationale: o.rationale ?? "",
        }))
      : [],
    correct_labels: normLabels(q.correct_labels),
    explanation: q.explanation ?? "",
    has_visual: q.has_visual === true,
  }));
}

// Parse the answers PDF independently into a number -> answer-key map.
export async function extractAnswerKeyFromPdf(
  answersPdf: Uint8Array,
): Promise<Map<number, AnswerKeyEntry>> {
  const content: unknown[] = [
    { type: "text", text: ANSWER_KEY_INSTRUCTIONS },
    { type: "text", text: "PDF du corrigé :" },
    fileParts(answersPdf, "answers.pdf"),
  ];

  const raw = await callGateway(content);
  let parsed: { answers?: { number?: number; correct_labels?: string[]; explanation?: string }[] };
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("Le corrigé n'a pas pu être analysé.");
  }
  const list = Array.isArray(parsed.answers) ? parsed.answers : [];
  const map = new Map<number, AnswerKeyEntry>();
  for (const a of list) {
    const num = typeof a.number === "number" ? a.number : parseInt(String(a.number), 10);
    if (!Number.isFinite(num)) continue;
    const labels = normLabels(a.correct_labels);
    // Keep first occurrence; duplicates are surfaced as warnings during matching.
    if (!map.has(num)) {
      map.set(num, { number: num, correct_labels: labels, explanation: a.explanation ?? "" });
    } else {
      const existing = map.get(num)!;
      existing.correct_labels = Array.from(new Set([...existing.correct_labels, ...labels]));
    }
  }
  return map;
}

// Shared extraction pipeline: downloads both PDFs, parses them independently,
// matches answers to questions by number, and inserts draft questions + solutions.
// `supabase` is the RLS-scoped client from the request context.
export async function runExtractionPipeline(
  supabase: SupabaseClient<Database>,
  examId: string,
  questionsPath: string,
  answersPath: string | null | undefined,
) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const qDl = await supabaseAdmin.storage.from("exam-documents").download(questionsPath);
  if (qDl.error || !qDl.data) throw new Error("Impossible de lire le PDF des questions");
  const qBytes = new Uint8Array(await qDl.data.arrayBuffer());

  const extracted = await extractQuestionsFromPdf(qBytes);

  let answerKey = new Map<number, AnswerKeyEntry>();
  if (answersPath) {
    const aDl = await supabaseAdmin.storage.from("exam-documents").download(answersPath);
    if (!aDl.error && aDl.data) {
      const aBytes = new Uint8Array(await aDl.data.arrayBuffer());
      answerKey = await extractAnswerKeyFromPdf(aBytes);
    }
  }

  const numberCounts = new Map<number, number>();
  for (const q of extracted) {
    if (typeof q.number === "number") {
      numberCounts.set(q.number, (numberCounts.get(q.number) ?? 0) + 1);
    }
  }

  const { data: existing } = await supabase
    .from("questions")
    .select("position")
    .eq("exam_id", examId)
    .order("position", { ascending: false })
    .limit(1);
  let pos = (existing?.[0]?.position ?? 0) + 1;

  let inserted = 0;
  const flagged: number[] = [];
  const unmatchedKeys: number[] = [];
  let withWarnings = 0;
  let blockingErrors = 0;
  let validCount = 0;
  const usedKeys = new Set<number>();

  for (const q of extracted) {
    const chapter = q.chapter && q.chapter >= 1 && q.chapter <= 6 ? q.chapter : 1;
    const kLevel = q.k_level ?? "K1";
    const qNumber = q.number ?? pos;

    const key = typeof q.number === "number" ? answerKey.get(q.number) : undefined;
    let matchedLabels = key ? key.correct_labels : q.correct_labels;
    if (key) usedKeys.add(q.number as number);
    const explanation = key?.explanation || q.explanation || "";

    const optionLabels = new Set(
      q.options.map((o, i) => (o.label || String.fromCharCode(65 + i)).toUpperCase()),
    );
    const missingLabels = matchedLabels.filter((l) => !optionLabels.has(l));
    matchedLabels = matchedLabels.filter((l) => optionLabels.has(l));

    const { data: newQ, error: qErr } = await supabase
      .from("questions")
      .insert({
        exam_id: examId,
        position: q.number ?? pos,
        text: q.text,
        type: q.type,
        answers_required: q.answers_required,
        points: q.points,
        chapter,
        k_level: kLevel,
        learning_objective: q.learning_objective,
        source_page: q.source_page,
        validation_status: "draft",
      })
      .select("id")
      .single();
    if (qErr) continue;
    pos++;

    const optionRows = q.options.map((o, i) => ({
      question_id: newQ.id,
      position: i,
      label: o.label || String.fromCharCode(65 + i),
      text: o.text,
    }));
    const { data: insertedOptions } = optionRows.length
      ? await supabase.from("question_options").insert(optionRows).select("id, label")
      : { data: [] as { id: string; label: string }[] };
    const labelToId = new Map(
      (insertedOptions ?? []).map((o) => [String(o.label).toUpperCase(), o.id]),
    );
    const correctIds = matchedLabels.map((l) => labelToId.get(l)).filter(Boolean) as string[];

    const answersRequired = Math.max(1, correctIds.length || q.answers_required);
    const resolvedType = correctIds.length > 1 ? "multi" : q.type;
    if (correctIds.length > 0) {
      await supabase
        .from("questions")
        .update({ answers_required: answersRequired, type: resolvedType })
        .eq("id", newQ.id);
    }

    const rationalesById: Record<string, string> = {};
    for (const o of q.options) {
      const id = labelToId.get((o.label || "").toUpperCase()) as string | undefined;
      if (id && o.rationale) rationalesById[id] = o.rationale;
    }
    await supabase.from("question_solutions").insert({
      question_id: newQ.id,
      correct_option_ids: correctIds,
      explanation,
      option_rationales: rationalesById,
    });
    inserted++;

    const missingText = !q.text || q.text.trim() === "";
    const tooFewOptions = q.options.filter((o) => (o.text ?? "").trim() !== "").length < 2;
    const noCorrect = correctIds.length === 0;
    const duplicateNumber = (numberCounts.get(qNumber) ?? 0) > 1;
    const missingOption = missingLabels.length > 0;

    const isBlocking = missingText || tooFewOptions || noCorrect;
    const isWarning =
      duplicateNumber ||
      missingOption ||
      q.has_visual ||
      (resolvedType === "multi" && correctIds.length !== answersRequired);
    if (noCorrect) unmatchedKeys.push(qNumber);
    if (isBlocking) blockingErrors++;
    else if (isWarning) withWarnings++;
    else validCount++;
    if (isBlocking || isWarning) flagged.push(qNumber);
  }

  const orphanKeys = Array.from(answerKey.keys()).filter((n) => !usedKeys.has(n));

  return {
    inserted,
    total: extracted.length,
    flagged,
    summary: {
      detected: extracted.length,
      validated: validCount,
      warnings: withWarnings,
      blocking: blockingErrors,
      unmatchedKeys,
      orphanKeys,
      answerKeyCount: answerKey.size,
    },
  };
}
