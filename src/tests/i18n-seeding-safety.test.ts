import { beforeEach, expect, it, vi } from "vitest";
const state = vi.hoisted(() => {
  const seed = {
    exams: [{ id: "ex", title: "Titre FR", title_en: "Title EN", status: "published" }],
    questions: [{ id: "q", exam_id: "ex", text: "Question FR", text_en: "Question EN" }],
    question_options: [{ id: "o", question_id: "q", text: "Option FR", text_en: "Option EN" }],
    question_solutions: [
      {
        question_id: "q",
        explanation: "Solution FR",
        explanation_en: "Solution EN",
        correct_option_ids: ["o"],
      },
    ],
  };
  return { seed, docs: {} as Record<string, Record<string, unknown>>, writes: [] as string[] };
});
vi.mock("firebase/app", () => ({
  initializeApp: () => ({}),
  getApps: () => [],
  getApp: () => ({}),
}));
vi.mock("firebase/auth", () => ({ getAuth: () => ({}), onAuthStateChanged: () => {} }));
vi.mock("@/integrations/supabase/seed-payload", () => ({
  SEED_EXAMS: state.seed.exams,
  SEED_QUESTIONS: state.seed.questions,
  SEED_OPTIONS: state.seed.question_options,
  SEED_SOLUTIONS: state.seed.question_solutions,
}));
vi.mock("firebase/firestore", () => {
  const getDoc = async (key: string) => ({
    exists: () => key in state.docs,
    data: () => state.docs[key],
  });
  return {
    getFirestore: () => ({}),
    doc: (_db: unknown, table: string, id: string) => `${table}/${id}`,
    collection: (_db: unknown, table: string) => table,
    query: (q: string) => q,
    where: () => {},
    orderBy: () => {},
    limit: () => {},
    getDoc,
    getDocs: async (table: string) => ({
      forEach: (fn: (value: unknown) => void) => {
        for (const [key, row] of Object.entries(state.docs))
          if (key.startsWith(`${table}/`)) fn({ id: key.split("/")[1], data: () => row });
      },
    }),
    setDoc: vi.fn(),
    deleteDoc: vi.fn(),
    runTransaction: async (_db: unknown, fn: (tx: unknown) => Promise<void>) =>
      fn({
        get: getDoc,
        update: (key: string, patch: object) => {
          state.writes.push(key);
          state.docs[key] = { ...state.docs[key], ...patch };
        },
        set: (key: string, row: Record<string, unknown>) => {
          state.writes.push(key);
          state.docs[key] = { ...row };
        },
      }),
  };
});
beforeEach(() => {
  vi.resetModules();
  localStorage.clear();
  state.docs = {};
  state.writes = [];
  for (const [table, rows] of Object.entries(state.seed))
    for (const row of rows) {
      const r = row as unknown as Record<string, unknown>;
      state.docs[`${table}/${r.id ?? r.question_id}`] = Object.fromEntries(
        Object.entries(r).filter(([key]) => !key.endsWith("_en")),
      );
    }
});
async function readExams() {
  const { createMockSupabaseClient } = await import("@/integrations/supabase/mock-client");
  await createMockSupabaseClient().from("exams").select();
}
it("adds missing English without overwriting archived status, edited questions or reviewed translations", async () => {
  state.docs["exams/ex"].status = "archived";
  state.docs["questions/q"].text = "Instructor correction";
  state.docs["question_options/o"].text_en = "Reviewed English";
  await readExams();
  expect(state.docs["exams/ex"].status).toBe("archived");
  expect(state.docs["exams/ex"].title_en).toBe("Title EN");
  expect(state.docs["questions/q"]).toEqual({
    id: "q",
    exam_id: "ex",
    text: "Instructor correction",
  });
  expect(state.docs["question_options/o"].text_en).toBe("Reviewed English");
  expect(state.docs["question_solutions/q"].correct_option_ids).toEqual(["o"]);
  const count = state.writes.length;
  await readExams();
  expect(state.writes).toHaveLength(count);
});
it("does not recreate deleted children of an existing exam", async () => {
  delete state.docs["questions/q"];
  await readExams();
  expect(state.docs["questions/q"]).toBeUndefined();
});
it("initializes a genuinely new exam with complete records", async () => {
  state.docs = {};
  await readExams();
  expect(state.docs["questions/q"].exam_id).toBe("ex");
  expect(state.docs["questions/q"].text).toBe("Question FR");
  expect(state.docs["questions/q"].text_en).toBe("Question EN");
  expect(state.writes).toHaveLength(4);
});
