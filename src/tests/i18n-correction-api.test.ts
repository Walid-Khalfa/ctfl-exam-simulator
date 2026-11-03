import { expect, it, vi } from "vitest";
import { localizeExplanation } from "@/lib/content-localization";
const mocks = vi.hoisted(() => {
  const rows: Record<string, object[]> = {
    attempts: [{ id: "attempt", exam_id: "exam", user_id: "u", status: "submitted" }],
    questions: [{ id: "q", text: "Question FR", text_en: "Question EN" }],
    question_options: [{ id: "a", question_id: "q", text: "Réponse", text_en: "Answer" }],
    attempt_answers: [],
    question_solutions: [
      {
        question_id: "q",
        correct_option_ids: ["a"],
        explanation: "Explication",
        explanation_en: "English explanation",
        option_rationales_en: { a: "English rationale" },
      },
    ],
  };
  const client = {
    from(table: string) {
      const b = {
        select: vi.fn(() => b),
        eq: () => b,
        in: () => b,
        order: () => b,
        maybeSingle: async () => ({ data: rows[table][0] }),
        then: (resolve: (value: { data: object[] }) => unknown) =>
          Promise.resolve({ data: rows[table] }).then(resolve),
      };
      return b;
    },
  };
  return { client };
});
vi.mock("@tanstack/react-start", () => ({
  createServerFn: () => {
    const b = { middleware: () => b, validator: () => b, handler: (f: unknown) => f };
    return b;
  },
}));
vi.mock("@/integrations/supabase/auth-middleware", () => ({ requireSupabaseAuth: {} }));
vi.mock("@/integrations/supabase/client.server", () => ({ supabaseAdmin: mocks.client }));
import { getCorrection } from "@/lib/exam.functions";
it("passes persisted English explanations through the real correction handler to localization", async () => {
  const handler = getCorrection as unknown as (arg: unknown) => Promise<{
    questions: { explanation: string; explanation_en: string; correctOptionIds: string[] }[];
  }>;
  const result = await handler({
    data: { attemptId: "attempt" },
    context: { supabase: mocks.client, userId: "u" },
  });
  expect(localizeExplanation(result.questions[0], "en")).toEqual({
    text: "English explanation",
    translationMissing: false,
  });
  expect(localizeExplanation(result.questions[0], "fr").text).toBe("Explication");
  expect(result.questions[0].correctOptionIds).toEqual(["a"]);
});
