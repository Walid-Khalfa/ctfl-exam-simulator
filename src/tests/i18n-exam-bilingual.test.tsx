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
    examId: "ctfl-exam-v4-ensemble-a-2026",
    exam: {
      id: "ctfl-exam-v4-ensemble-a-2026",
      title: "Examen Échantillon CTFL v4.0 — ENSEMBLE A",
      title_en: "ISTQB CTFL v4.0 Sample Exam — SET A",
      language: "fr",
    },
    remainingSeconds: 1200,
    answers: [],
    questions: [
      {
        id: "ea-q1",
        text: "Laquelle des affirmations suivantes décrit un objectif de test typique ?",
        text_en: "Which of the following statements describes a typical testing objective?",
        position: 1,
        type: "single",
        chapter: 1,
        k_level: "K1",
        options: [
          {
            id: "ea-q1-a",
            label: "A",
            text: "Trouver des défauts",
            text_en: "Finding defects",
          },
          {
            id: "ea-q1-b",
            label: "B",
            text: "Prouver l'absence de défauts",
            text_en: "Proving the absence of defects",
          },
        ],
      },
    ],
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

it("shows the English question, options and exam title after switching, keeping answers and flags", async () => {
  render(
    <LocaleProvider>
      <Exam />
    </LocaleProvider>,
  );

  // French content is the default.
  expect(screen.getByText(/décrit un objectif de test typique/)).toBeTruthy();
  expect(screen.getByText("Trouver des défauts")).toBeTruthy();

  fireEvent.click(screen.getByRole("button", { name: /Trouver des défauts/ }));
  fireEvent.click(screen.getByRole("button", { name: "Marquer pour révision" }));
  await act(async () => {
    vi.advanceTimersByTime(1000);
  });
  expect(screen.getByText("19:59")).toBeTruthy();

  fireEvent.change(screen.getByRole("combobox"), { target: { value: "en" } });

  // Translated pedagogical content, not just the interface.
  expect(screen.getByText(/describes a typical testing objective/)).toBeTruthy();
  expect(screen.getByText("Finding defects")).toBeTruthy();
  expect(screen.getByText("ISTQB CTFL v4.0 Sample Exam — SET A")).toBeTruthy();

  // Attempt state survives the language change.
  expect(screen.getByRole("button", { name: /Finding defects/ }).getAttribute("aria-pressed")).toBe(
    "true",
  );
  expect(screen.getByRole("button", { name: "Marked" })).toBeTruthy();
  expect(screen.getByText("19:59")).toBeTruthy();

  // No fallback indicator since every element is translated.
  expect(screen.queryByText(/English translation unavailable/)).toBeNull();

  expect(mocks.submit).not.toHaveBeenCalled();
});
