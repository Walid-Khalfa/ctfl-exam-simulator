// Client-safe pure validation helpers shared by the admin editor UI and the
// server publish gate. No server-only imports here.

export type WarnSeverity = "error" | "warning";

export interface ExamWarning {
  position?: number;
  code: string;
  message: string;
  severity: WarnSeverity;
}

export interface ValidatableQuestion {
  position: number;
  text: string;
  type: "single" | "multi";
  answers_required: number;
  validation_status: string;
  options: { id?: string; label: string; text: string }[];
  correct_option_ids: string[];
  has_visual?: boolean;
}

export interface ValidatableExam {
  total_questions: number;
  questions: ValidatableQuestion[];
}

export function computeExamWarnings(exam: ValidatableExam): ExamWarning[] {
  const warnings: ExamWarning[] = [];
  const seenNumbers = new Map<number, number>();

  for (const q of exam.questions) {
    const p = q.position;
    if (!q.text || q.text.trim() === "") {
      warnings.push({
        position: p,
        code: "missing_text",
        message: "Énoncé manquant",
        severity: "error",
      });
    }
    if (q.options.filter((o) => o.text.trim() !== "").length < 2) {
      warnings.push({
        position: p,
        code: "missing_options",
        message: "Options de réponse insuffisantes",
        severity: "error",
      });
    }
    if (q.correct_option_ids.length === 0) {
      warnings.push({
        position: p,
        code: "missing_correct",
        message: "Aucune bonne réponse définie",
        severity: "error",
      });
    }
    if (
      q.type === "multi" &&
      q.correct_option_ids.length > 0 &&
      q.correct_option_ids.length !== q.answers_required
    ) {
      warnings.push({
        position: p,
        code: "multi_count_mismatch",
        message: `Question à choix multiple : ${q.answers_required} réponse(s) attendue(s) mais ${q.correct_option_ids.length} définie(s)`,
        severity: "warning",
      });
    }
    if (q.has_visual) {
      warnings.push({
        position: p,
        code: "visual",
        message: "Contient un tableau/schéma : une image doit peut-être être ajoutée",
        severity: "warning",
      });
    }
    if (q.validation_status !== "validated") {
      warnings.push({
        position: p,
        code: "unvalidated",
        message: "En attente de validation par l'instructeur",
        severity: "warning",
      });
    }
    seenNumbers.set(p, (seenNumbers.get(p) ?? 0) + 1);
  }

  for (const [num, count] of seenNumbers) {
    if (count > 1) {
      warnings.push({
        position: num,
        code: "duplicate_number",
        message: `Numéro de question dupliqué (${num})`,
        severity: "error",
      });
    }
  }

  if (exam.questions.length !== exam.total_questions) {
    warnings.push({
      code: "count_mismatch",
      message: `L'examen contient ${exam.questions.length} question(s) au lieu de ${exam.total_questions}`,
      severity: "warning",
    });
  }

  return warnings;
}

export function hasBlockingErrors(warnings: ExamWarning[]): boolean {
  return warnings.some((w) => w.severity === "error");
}

export const REQUIRED_QUESTION_COUNT = 40;

export interface ChecklistItem {
  code: string;
  ok: boolean;
  detail?: number;
}

export interface PublicationChecklistInput {
  duration_minutes: number;
  passing_threshold: number;
  questions: {
    type: "single" | "multi";
    answers_required: number;
    correct_option_ids: string[];
    validation_status: string;
  }[];
}

// Final publication checklist: exactly 40 questions, no missing correct answers,
// valid selection counts, duration configured, passing threshold configured.
export function computePublicationChecklist(input: PublicationChecklistInput): ChecklistItem[] {
  const qs = input.questions;
  const missingCorrect = qs.filter((q) => (q.correct_option_ids?.length ?? 0) === 0).length;
  const invalidSelection = qs.filter((q) => {
    const n = q.correct_option_ids?.length ?? 0;
    if (n === 0) return false; // counted separately as missing
    if (q.type === "single") return n !== 1;
    return n !== q.answers_required;
  }).length;
  const notValidated = qs.filter((q) => q.validation_status !== "validated").length;

  return [
    { code: "exactCount", ok: qs.length === REQUIRED_QUESTION_COUNT, detail: qs.length },
    { code: "noMissingCorrect", ok: missingCorrect === 0, detail: missingCorrect },
    { code: "validSelection", ok: invalidSelection === 0, detail: invalidSelection },
    { code: "allValidated", ok: notValidated === 0, detail: notValidated },
    { code: "durationConfigured", ok: (input.duration_minutes ?? 0) > 0 },
    { code: "thresholdConfigured", ok: (input.passing_threshold ?? 0) > 0 },
  ];
}

export function checklistPasses(items: ChecklistItem[]): boolean {
  return items.every((i) => i.ok);
}
