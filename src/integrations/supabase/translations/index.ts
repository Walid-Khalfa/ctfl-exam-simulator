// Aggregates the per-ensemble English translations and exposes idempotent helpers
// that add the English content to a French seed record.
//
// The English content is stored on the same records as the French source, under
// suffixed fields (`text_en`, `title_en`, `description_en`, `explanation_en`,
// `option_rationales_en`). Identifiers, points, chapters, K-levels, learning
// objectives, option order and correct answers are never touched.
import {
  ENSEMBLE_A_EXAM_EN,
  ENSEMBLE_A_QUESTIONS_EN,
  ENSEMBLE_A_OPTIONS_EN,
  ENSEMBLE_A_SOLUTIONS_EN,
} from "./ensemble-a.en";
import {
  ENSEMBLE_B_EXAM_EN,
  ENSEMBLE_B_QUESTIONS_EN,
  ENSEMBLE_B_OPTIONS_EN,
  ENSEMBLE_B_SOLUTIONS_EN,
} from "./ensemble-b.en";
import {
  ENSEMBLE_C_EXAM_EN,
  ENSEMBLE_C_QUESTIONS_EN,
  ENSEMBLE_C_OPTIONS_EN,
  ENSEMBLE_C_EXPLANATIONS_EN,
  ENSEMBLE_C_RATIONALES_EN,
} from "./ensemble-c.en";
import {
  ENSEMBLE_D_EXAM_EN,
  ENSEMBLE_D_QUESTIONS_EN,
  ENSEMBLE_D_OPTIONS_EN,
  ENSEMBLE_D_EXPLANATIONS_EN,
  ENSEMBLE_D_RATIONALES_EN,
} from "./ensemble-d.en";
import {
  ENSEMBLE_E_EXAM_EN,
  ENSEMBLE_E_QUESTIONS_EN,
  ENSEMBLE_E_OPTIONS_EN,
  ENSEMBLE_E_EXPLANATIONS_EN,
  ENSEMBLE_E_RATIONALES_EN,
} from "./ensemble-e.en";
import {
  ENSEMBLE_F_EXAM_EN,
  ENSEMBLE_F_QUESTIONS_EN,
  ENSEMBLE_F_OPTIONS_EN,
  ENSEMBLE_F_EXPLANATIONS_EN,
  ENSEMBLE_F_RATIONALES_EN,
} from "./ensemble-f.en";

export type ExamEnglish = { title_en: string; description_en: string };

/** English exam metadata keyed by the stable exam id. */
export const EXAM_EN_BY_ID: Record<string, ExamEnglish> = {
  "ctfl-exam-v4-ensemble-a-2026": ENSEMBLE_A_EXAM_EN,
  "ctfl-exam-v4-ensemble-b-2026": ENSEMBLE_B_EXAM_EN,
  "ctfl-exam-v4-ensemble-c-2026": ENSEMBLE_C_EXAM_EN,
  "ctfl-exam-v4-ensemble-d-2026": ENSEMBLE_D_EXAM_EN,
  "ctfl-exam-v4-ensemble-e-2026": ENSEMBLE_E_EXAM_EN,
  "ctfl-exam-v4-ensemble-f-2026": ENSEMBLE_F_EXAM_EN,
};

function merge(...maps: Record<string, string>[]): Record<string, string> {
  return Object.assign({}, ...maps);
}

/** English question texts keyed by stable question id. */
export const QUESTION_EN: Record<string, string> = merge(
  ENSEMBLE_A_QUESTIONS_EN,
  ENSEMBLE_B_QUESTIONS_EN,
  ENSEMBLE_C_QUESTIONS_EN,
  ENSEMBLE_D_QUESTIONS_EN,
  ENSEMBLE_E_QUESTIONS_EN,
  ENSEMBLE_F_QUESTIONS_EN,
);

/** English answer option texts keyed by stable option id. */
export const OPTION_EN: Record<string, string> = merge(
  ENSEMBLE_A_OPTIONS_EN,
  ENSEMBLE_B_OPTIONS_EN,
  ENSEMBLE_C_OPTIONS_EN,
  ENSEMBLE_D_OPTIONS_EN,
  ENSEMBLE_E_OPTIONS_EN,
  ENSEMBLE_F_OPTIONS_EN,
);

/** English explanations keyed by stable question id. */
export const EXPLANATION_EN: Record<string, string> = merge(
  ENSEMBLE_A_SOLUTIONS_EN,
  ENSEMBLE_B_SOLUTIONS_EN,
  ENSEMBLE_C_EXPLANATIONS_EN,
  ENSEMBLE_D_EXPLANATIONS_EN,
  ENSEMBLE_E_EXPLANATIONS_EN,
  ENSEMBLE_F_EXPLANATIONS_EN,
);

/** English per-option justifications keyed by stable option id. */
export const RATIONALE_EN: Record<string, string> = merge(
  ENSEMBLE_C_RATIONALES_EN,
  ENSEMBLE_D_RATIONALES_EN,
  ENSEMBLE_E_RATIONALES_EN,
  ENSEMBLE_F_RATIONALES_EN,
);

type WithId = { id: string };
type QuestionLike = WithId & { text?: string };
type OptionLike = WithId & { text?: string };
type SolutionLike = {
  question_id: string;
  explanation?: string;
  option_rationales?: Record<string, string> | null;
};

/** Adds `title_en` / `description_en` to an exam record. Pure and idempotent. */
export function withEnglishExam<T extends WithId>(exam: T): T & Partial<ExamEnglish> {
  const en = EXAM_EN_BY_ID[exam.id];
  return en ? { ...exam, ...en } : exam;
}

/** Adds `text_en` to a question record. Pure and idempotent. */
export function withEnglishQuestion<T extends QuestionLike>(question: T): T & { text_en?: string } {
  const text = QUESTION_EN[question.id];
  return text ? { ...question, text_en: text } : question;
}

/** Adds `text_en` to an answer option record. Pure and idempotent. */
export function withEnglishOption<T extends OptionLike>(option: T): T & { text_en?: string } {
  const text = OPTION_EN[option.id];
  return text ? { ...option, text_en: text } : option;
}

/**
 * Adds `explanation_en` and `option_rationales_en` to a solution record.
 * Pure and idempotent; French text and the correct option ids are preserved.
 */
export function withEnglishSolution<T extends SolutionLike>(
  solution: T,
): T & { explanation_en?: string; option_rationales_en?: Record<string, string> } {
  const explanation = EXPLANATION_EN[solution.question_id];
  const source = solution.option_rationales ?? {};
  const rationales: Record<string, string> = {};
  for (const optionId of Object.keys(source)) {
    const translated = RATIONALE_EN[optionId];
    if (translated) rationales[optionId] = translated;
  }
  const next: T & { explanation_en?: string; option_rationales_en?: Record<string, string> } = {
    ...solution,
  };
  if (explanation) next.explanation_en = explanation;
  if (Object.keys(rationales).length > 0) next.option_rationales_en = rationales;
  return next;
}

export type CoverageReport = {
  examId: string;
  questions: number;
  questionsTranslated: number;
  options: number;
  optionsTranslated: number;
  explanations: number;
  explanationsTranslated: number;
  rationales: number;
  rationalesTranslated: number;
  complete: boolean;
};

/** Per-exam coverage of the English translation, computed from the seeds. */
export function translationCoverage(
  exams: { id: string }[],
  questions: { id: string; exam_id: string; text?: string }[],
  options: { id: string; question_id: string }[],
  solutions: {
    question_id: string;
    explanation?: string;
    option_rationales?: Record<string, string> | null;
  }[],
): CoverageReport[] {
  return exams.map((exam) => {
    const examQuestions = questions.filter((q) => q.exam_id === exam.id);
    const questionIds = new Set(examQuestions.map((q) => q.id));
    const examOptions = options.filter((o) => questionIds.has(o.question_id));
    const examSolutions = solutions.filter((s) => questionIds.has(s.question_id));
    const rationaleIds = examSolutions.flatMap((s) => Object.keys(s.option_rationales ?? {}));

    const questionsTranslated = examQuestions.filter((q) => Boolean(QUESTION_EN[q.id])).length;
    const optionsTranslated = examOptions.filter((o) => Boolean(OPTION_EN[o.id])).length;
    const explanationsTranslated = examSolutions.filter((s) =>
      Boolean(EXPLANATION_EN[s.question_id]),
    ).length;
    const rationalesTranslated = rationaleIds.filter((id) => Boolean(RATIONALE_EN[id])).length;

    return {
      examId: exam.id,
      questions: examQuestions.length,
      questionsTranslated,
      options: examOptions.length,
      optionsTranslated,
      explanations: examSolutions.length,
      explanationsTranslated,
      rationales: rationaleIds.length,
      rationalesTranslated,
      complete:
        Boolean(EXAM_EN_BY_ID[exam.id]) &&
        questionsTranslated === examQuestions.length &&
        optionsTranslated === examOptions.length &&
        explanationsTranslated === examSolutions.length &&
        rationalesTranslated === rationaleIds.length,
    };
  });
}
