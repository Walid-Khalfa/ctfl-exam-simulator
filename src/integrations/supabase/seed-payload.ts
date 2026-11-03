// Bilingual seed payload: the French seed records enriched with their English
// translation. This is the single source used by the app (Firestore seeding /
// localStorage cache) and by scripts/migrate-bilingual-content.mjs.
import {
  ENSEMBLE_A_EXAM,
  ENSEMBLE_A_QUESTIONS,
  ENSEMBLE_A_OPTIONS,
  ENSEMBLE_A_SOLUTIONS,
} from "./seed-ensemble-a";
import {
  ENSEMBLE_B_EXAM,
  ENSEMBLE_B_QUESTIONS,
  ENSEMBLE_B_OPTIONS,
  ENSEMBLE_B_SOLUTIONS,
} from "./seed-ensemble-b";
import {
  ENSEMBLE_C_EXAM,
  ENSEMBLE_C_QUESTIONS,
  ENSEMBLE_C_OPTIONS,
  ENSEMBLE_C_SOLUTIONS,
} from "./seed-ensemble-c";
import {
  ENSEMBLE_D_EXAM,
  ENSEMBLE_D_QUESTIONS,
  ENSEMBLE_D_OPTIONS,
  ENSEMBLE_D_SOLUTIONS,
} from "./seed-ensemble-d";
import {
  ENSEMBLE_E_EXAM,
  ENSEMBLE_E_QUESTIONS,
  ENSEMBLE_E_OPTIONS,
  ENSEMBLE_E_SOLUTIONS,
} from "./seed-ensemble-e";
import {
  ENSEMBLE_F_EXAM,
  ENSEMBLE_F_QUESTIONS,
  ENSEMBLE_F_OPTIONS,
  ENSEMBLE_F_SOLUTIONS,
} from "./seed-ensemble-f";
import {
  translationCoverage,
  withEnglishExam,
  withEnglishOption,
  withEnglishQuestion,
  withEnglishSolution,
} from "./translations";

export const SEED_EXAMS = [
  ENSEMBLE_A_EXAM,
  ENSEMBLE_B_EXAM,
  ENSEMBLE_C_EXAM,
  ENSEMBLE_D_EXAM,
  ENSEMBLE_E_EXAM,
  ENSEMBLE_F_EXAM,
].map(withEnglishExam);

export const SEED_QUESTIONS = [
  ...ENSEMBLE_A_QUESTIONS,
  ...ENSEMBLE_B_QUESTIONS,
  ...ENSEMBLE_C_QUESTIONS,
  ...ENSEMBLE_D_QUESTIONS,
  ...ENSEMBLE_E_QUESTIONS,
  ...ENSEMBLE_F_QUESTIONS,
].map(withEnglishQuestion);

export const SEED_OPTIONS = [
  ...ENSEMBLE_A_OPTIONS,
  ...ENSEMBLE_B_OPTIONS,
  ...ENSEMBLE_C_OPTIONS,
  ...ENSEMBLE_D_OPTIONS,
  ...ENSEMBLE_E_OPTIONS,
  ...ENSEMBLE_F_OPTIONS,
].map(withEnglishOption);

export const SEED_SOLUTIONS = [
  ...ENSEMBLE_A_SOLUTIONS,
  ...ENSEMBLE_B_SOLUTIONS,
  ...ENSEMBLE_C_SOLUTIONS,
  ...ENSEMBLE_D_SOLUTIONS,
  ...ENSEMBLE_E_SOLUTIONS,
  ...ENSEMBLE_F_SOLUTIONS,
].map(withEnglishSolution);

/** Per-exam translation coverage, computed from the seeds themselves. */
export const SEED_COVERAGE = translationCoverage(
  SEED_EXAMS,
  SEED_QUESTIONS,
  SEED_OPTIONS,
  SEED_SOLUTIONS,
);

export { englishFieldsToAdd } from "../../lib/bilingual-fields";
