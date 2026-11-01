import type { ComponentType, ReactNode } from "react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LocaleProvider } from "@/hooks/useLocale";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ExamConfigForm } from "@/components/admin/ExamConfigForm";

vi.mock("@tanstack/react-router", () => ({
  createFileRoute: () => (options: object) => options,
  useNavigate: () => vi.fn(),
  Link: ({ children }: { children: ReactNode }) => <a>{children}</a>,
}));
vi.mock("@/hooks/useAuth", () => ({
  useAuth: () => ({ user: { email: "student@example.test" }, role: "student", loading: false }),
}));
vi.mock("@/components/AppShell", () => ({
  AppShell: ({ children }: { children: ReactNode }) => <main>{children}</main>,
}));
vi.mock("@/lib/exam.functions", () => ({ listDashboard: vi.fn() }));
vi.mock("@tanstack/react-query", () => ({
  useQuery: () => ({
    isLoading: false,
    data: ["fr", "en"].map((language) => ({
      exam: {
        id: language,
        title: `Exam ${language}`,
        language,
        description: `Source content ${language}`,
        duration_minutes: 60,
        total_questions: 40,
      },
      inProgressAttemptId: null,
      lastFinishedAttemptId: null,
      bestPercentage: null,
      attemptsUsed: 0,
    })),
  }),
}));
import { Route } from "@/routes/_authenticated/dashboard";
const Dashboard = (Route as unknown as { component: ComponentType }).component;
beforeEach(() => {
  localStorage.clear();
});
afterEach(cleanup);
it("filters by actual exam content language independently of the interface preference", () => {
  render(
    <LocaleProvider>
      <LanguageSwitcher />
      <Dashboard />
    </LocaleProvider>,
  );
  expect(screen.getByText("Exam fr")).toBeTruthy();
  expect(screen.getByText("Exam en")).toBeTruthy();
  fireEvent.change(screen.getByLabelText("Langue de l’examen"), { target: { value: "en" } });
  expect(screen.queryByText("Exam fr")).toBeNull();
  expect(screen.getByText("Exam en")).toBeTruthy();
  fireEvent.change(screen.getByLabelText("Langue de l’interface"), { target: { value: "en" } });
  expect(screen.getByText("Your practice exams")).toBeTruthy();
  expect(screen.getByText("Exam en")).toBeTruthy();
  expect(screen.queryByText("Exam fr")).toBeNull();
  fireEvent.change(screen.getByLabelText("Exam language"), { target: { value: "fr" } });
  expect(screen.getByText("Exam fr")).toBeTruthy();
  expect(screen.getByText("Source content fr")).toBeTruthy();
});
it("allows the instructor to save an English content language without rewriting content", () => {
  const save = vi.fn();
  render(
    <LocaleProvider>
      <LanguageSwitcher />
      <ExamConfigForm
        initial={{ title: "Original title", description: "Original description" }}
        onSubmit={save}
        submitLabel="Save"
      />
    </LocaleProvider>,
  );
  fireEvent.change(screen.getByLabelText("Langue"), { target: { value: "en" } });
  fireEvent.change(screen.getByLabelText("Langue de l’interface"), { target: { value: "en" } });
  fireEvent.click(screen.getByRole("button", { name: "Save" }));
  expect(save).toHaveBeenCalledWith(
    expect.objectContaining({
      language: "en",
      title: "Original title",
      description: "Original description",
      total_questions: 40,
      passing_threshold: 65,
    }),
  );
});
