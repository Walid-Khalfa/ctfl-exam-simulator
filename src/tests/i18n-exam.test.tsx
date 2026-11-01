import type { ComponentType } from "react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LocaleProvider } from "@/hooks/useLocale";

const mocks = vi.hoisted(() => ({
  navigate: vi.fn(),
  save: vi.fn().mockResolvedValue({ ok: true }),
  submit: vi.fn().mockResolvedValue({ ok: true }),
  data: {
    finalized: false,
    attemptId: "attempt-1",
    examId: "exam-fr",
    exam: { title: "Examen français", language: "fr" },
    remainingSeconds: 1200,
    answers: [],
    questions: [1, 2].map((n) => ({
      id: `q${n}`,
      text: `Énoncé original ${n}`,
      position: n,
      type: "single",
      chapter: 1,
      k_level: "K1",
      options: [{ id: `q${n}-a`, label: "A", text: `Réponse ${n}` }],
    })),
  },
}));
vi.mock("@tanstack/react-router", () => ({
  createFileRoute: () => (options: object) => ({
    ...options,
    useParams: () => ({ attemptId: "attempt-1" }),
  }),
  useNavigate: () => mocks.navigate,
}));
vi.mock("@tanstack/react-query", () => ({
  useQuery: () => ({ data: mocks.data, isLoading: false, isError: false }),
}));
vi.mock("@/lib/exam.functions", () => ({
  getAttemptState: vi.fn(),
  saveAnswer: mocks.save,
  submitAttempt: mocks.submit,
}));
import { Route } from "@/routes/_authenticated/exam.$attemptId";
const Exam = (Route as unknown as { component: ComponentType }).component;
beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
  mocks.save.mockClear();
  mocks.submit.mockClear();
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
it("switches language without losing selected answers, flags, current question, notes or countdown", async () => {
  render(
    <LocaleProvider>
      <Exam />
    </LocaleProvider>,
  );
  fireEvent.click(screen.getByRole("button", { name: /Réponse 1/ }));
  fireEvent.click(screen.getByRole("button", { name: "Marquer pour révision" }));
  fireEvent.click(screen.getByRole("button", { name: "Bloc-notes" }));
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "My notes" } });
  await act(async () => {
    vi.advanceTimersByTime(1000);
  });
  expect(screen.getByText("19:59")).toBeTruthy();
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "en" } });
  expect(screen.getByRole("button", { name: "Next" })).toBeTruthy();
  expect(screen.getByRole("button", { name: /Réponse 1/ }).getAttribute("aria-pressed")).toBe(
    "true",
  );
  expect(screen.getByRole("button", { name: "Marked" })).toBeTruthy();
  expect((screen.getByRole("textbox") as HTMLTextAreaElement).value).toBe("My notes");
  expect(screen.getByText("19:59")).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  expect(screen.getByText("Énoncé original 2")).toBeTruthy();
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "fr" } });
  expect(screen.getByText("Énoncé original 2")).toBeTruthy();
  expect(mocks.save).toHaveBeenLastCalledWith({
    data: {
      attemptId: "attempt-1",
      questionId: "q1",
      selectedOptionIds: ["q1-a"],
      markedForReview: true,
    },
  });
  expect(mocks.submit).not.toHaveBeenCalled();
});
