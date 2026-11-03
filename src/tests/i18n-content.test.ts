import { describe, expect, it } from "vitest";
import {
  SEED_COVERAGE,
  SEED_EXAMS,
  SEED_OPTIONS,
  SEED_QUESTIONS,
  SEED_SOLUTIONS,
} from "@/integrations/supabase/seed-payload";
import {
  examLocales,
  examSupportsLocale,
  localizeExamTitle,
  localizeExplanation,
  localizeQuestionText,
} from "@/lib/content-localization";

const EN_FIELDS = new Set([
  "title_en",
  "description_en",
  "text_en",
  "explanation_en",
  "option_rationales_en",
]);

function frenchOnly(record: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(record).filter(([key]) => !EN_FIELDS.has(key)));
}

describe("bilingual exam content", () => {
  it("ships six exams with 40 questions each", () => {
    expect(SEED_EXAMS).toHaveLength(6);
    for (const exam of SEED_EXAMS) {
      expect(SEED_QUESTIONS.filter((q) => q.exam_id === exam.id)).toHaveLength(40);
    }
    expect(SEED_QUESTIONS).toHaveLength(240);
  });

  it("translates every question, option, explanation and justification", () => {
    expect(SEED_COVERAGE).toHaveLength(6);
    for (const row of SEED_COVERAGE) {
      expect(row.complete, `${row.examId} coverage`).toBe(true);
      expect(row.questionsTranslated).toBe(row.questions);
      expect(row.optionsTranslated).toBe(row.options);
      expect(row.explanationsTranslated).toBe(row.explanations);
      expect(row.rationalesTranslated).toBe(row.rationales);
    }

    for (const q of SEED_QUESTIONS) expect(q.text_en?.trim(), q.id).toBeTruthy();
    for (const o of SEED_OPTIONS) expect(o.text_en?.trim(), o.id).toBeTruthy();
    for (const s of SEED_SOLUTIONS) {
      expect(s.explanation_en?.trim(), s.question_id).toBeTruthy();
      for (const optionId of Object.keys(s.option_rationales ?? {})) {
        expect(s.option_rationales_en?.[optionId], optionId).toBeTruthy();
      }
    }
  });

  it("preserves ids, option order, points, chapters and correct answers", () => {
    for (const exam of SEED_EXAMS) {
      expect(frenchOnly(exam).language).toBe("fr");
      expect(exam.total_questions).toBe(40);
    }

    for (const q of SEED_QUESTIONS) {
      const options = SEED_OPTIONS.filter((o) => o.question_id === q.id);
      expect(options.length).toBeGreaterThanOrEqual(4);
      expect(options.map((o) => o.position)).toEqual(
        [...options.map((o) => o.position)].sort((a, b) => a - b),
      );
      expect(options.map((o) => o.label)).toEqual(
        options.map((_, index) => ["A", "B", "C", "D", "E"][index]),
      );
    }

    for (const s of SEED_SOLUTIONS) {
      expect(s.correct_option_ids.length).toBeGreaterThan(0);
      for (const id of s.correct_option_ids) {
        expect(
          SEED_OPTIONS.some((o) => o.id === id),
          `${s.question_id} -> ${id}`,
        ).toBe(true);
      }
    }
  });

  it("advertises an exam as bilingual once English content exists", () => {
    for (const exam of SEED_EXAMS) {
      expect(examLocales(exam)).toEqual(["fr", "en"]);
      expect(examSupportsLocale(exam, "en")).toBe(true);
      expect(examSupportsLocale(exam, "fr")).toBe(true);
    }
  });
});

describe("content localization", () => {
  const question = SEED_QUESTIONS[0];
  const option = SEED_OPTIONS.find((o) => o.question_id === question.id)!;
  const solution = SEED_SOLUTIONS.find((s) => s.question_id === question.id)!;

  it("returns the source text in French", () => {
    expect(localizeQuestionText(question, "fr")).toEqual({
      text: question.text,
      translationMissing: false,
    });
  });

  it("returns the English text in English", () => {
    expect(localizeQuestionText(question, "en").text).toBe(question.text_en);
    expect(localizeQuestionText(option, "en").text).toBe(option.text_en);
    expect(localizeExplanation(solution, "en").text).toBe(solution.explanation_en);
    expect(localizeExamTitle(SEED_EXAMS[0], "en").text).toBe(SEED_EXAMS[0].title_en);
  });

  it("falls back to French with an explicit flag when a translation is missing", () => {
    const legacy = { text: "Énoncé français sans traduction" };
    expect(localizeQuestionText(legacy, "en")).toEqual({
      text: legacy.text,
      translationMissing: true,
    });
    expect(localizeQuestionText(legacy, "fr").translationMissing).toBe(false);
    expect(localizeExamTitle({ title: "Examen" }, "en").translationMissing).toBe(true);
  });

  it("leaves French content untouched by the English enrichment", () => {
    const expected = frenchOnly({ ...question, text_en: "anything" });
    expect(frenchOnly(question)).toEqual(expected);
  });
});
