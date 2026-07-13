import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Clock, Loader2, Check, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { getAttemptState, saveAnswer, submitAttempt } from "@/lib/exam.functions";
import { formatSeconds } from "@/lib/format";
import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/exam/$attemptId")({
  component: ExamPage,
});

type LocalAnswer = { selected: string[]; marked: boolean };

function ExamPage() {
  const { attemptId } = Route.useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["attempt-state", attemptId],
    queryFn: () => getAttemptState({ data: { attemptId } }),
    refetchOnWindowFocus: false,
  });

  const [answers, setAnswers] = useState<Record<string, LocalAnswer>>({});
  const answersRef = useRef<Record<string, LocalAnswer>>({});
  const [current, setCurrent] = useState(0);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">("idle");
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const pending = useRef<Record<string, LocalAnswer>>({});
  const warned = useRef<Set<number>>(new Set());
  const submitting = useRef(false);

  // Hydrate local state from the server once loaded.
  useEffect(() => {
    if (!data) return;
    if (data.finalized) {
      navigate({ to: "/results/$attemptId", params: { attemptId }, replace: true });
      return;
    }
    const init: Record<string, LocalAnswer> = {};
    for (const a of data.answers) {
      init[a.question_id] = {
        selected: a.selected_option_ids ?? [],
        marked: a.marked_for_review ?? false,
      };
    }
    answersRef.current = init;
    setAnswers(init);
    setRemaining(data.remainingSeconds);
  }, [data, attemptId, navigate]);

  const doSubmit = useCallback(
    async (auto: boolean) => {
      if (submitting.current) return;
      submitting.current = true;
      try {
        // Flush any pending debounced saves before submitting.
        for (const id of Object.values(timers.current)) clearTimeout(id);
        const flushes = Object.entries(pending.current).map(([questionId, ans]) =>
          saveAnswer({
            data: {
              attemptId,
              questionId,
              selectedOptionIds: ans.selected,
              markedForReview: ans.marked,
            },
          }).catch(() => undefined),
        );
        pending.current = {};
        await Promise.all(flushes);
        await submitAttempt({ data: { attemptId } });
        if (auto) toast.info(t.exam.autoSubmitted);
        navigate({ to: "/results/$attemptId", params: { attemptId }, replace: true });
      } catch {
        submitting.current = false;
        toast.error("Échec de la soumission. Réessayez.");
      }
    },
    [attemptId, navigate],
  );

  // Server-authoritative countdown (seeded from server remaining seconds).
  useEffect(() => {
    if (remaining == null) return;
    if (remaining <= 0) {
      void doSubmit(true);
      return;
    }
    const id = setTimeout(() => setRemaining((r) => (r == null ? r : r - 1)), 1000);
    return () => clearTimeout(id);
  }, [remaining, doSubmit]);

  // Time warnings.
  useEffect(() => {
    if (remaining == null) return;
    const checks: [number, string][] = [
      [900, t.exam.warning15],
      [300, t.exam.warning5],
      [60, t.exam.warning1],
    ];
    for (const [threshold, msg] of checks) {
      if (remaining <= threshold && remaining > threshold - 2 && !warned.current.has(threshold)) {
        warned.current.add(threshold);
        toast.warning(msg);
      }
    }
  }, [remaining]);

  const questions = useMemo(() => data?.questions ?? [], [data?.questions]);

  const persist = useCallback(
    (questionId: string, next: LocalAnswer) => {
      setSaveState("saving");
      pending.current[questionId] = next;
      clearTimeout(timers.current[questionId]);
      timers.current[questionId] = setTimeout(async () => {
        try {
          const res = await saveAnswer({
            data: {
              attemptId,
              questionId,
              selectedOptionIds: next.selected,
              markedForReview: next.marked,
            },
          });
          delete pending.current[questionId];
          if ((res as { expired?: boolean }).expired) {
            void doSubmit(true);
            return;
          }
          setSaveState("saved");
          setTimeout(() => setSaveState("idle"), 1200);
        } catch {
          setSaveState("idle");
        }
      }, 600);
    },
    [attemptId, doSubmit],
  );

  const toggleOption = (questionId: string, optionId: string, type: "single" | "multi") => {
    const currentAns = answersRef.current[questionId] ?? { selected: [], marked: false };
    let selected: string[];
    if (type === "single") {
      selected = [optionId];
    } else {
      selected = currentAns.selected.includes(optionId)
        ? currentAns.selected.filter((id) => id !== optionId)
        : [...currentAns.selected, optionId];
    }
    const next = { ...currentAns, selected };
    answersRef.current = { ...answersRef.current, [questionId]: next };
    setAnswers(answersRef.current);
    persist(questionId, next);
  };

  const toggleMark = (questionId: string) => {
    const currentAns = answersRef.current[questionId] ?? { selected: [], marked: false };
    const next = { ...currentAns, marked: !currentAns.marked };
    answersRef.current = { ...answersRef.current, [questionId]: next };
    setAnswers(answersRef.current);
    persist(questionId, next);
  };

  const answeredCount = useMemo(
    () => questions.filter((q) => (answers[q.id]?.selected.length ?? 0) > 0).length,
    [questions, answers],
  );

  if (isLoading || !data || remaining == null) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        {t.common.loading}
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        Une erreur est survenue.
      </div>
    );
  }

  const q = questions[current];
  const qAnswer = answers[q.id] ?? { selected: [], marked: false };
  const lowTime = remaining <= 300;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Fixed distraction-minimal header */}
      <header className="sticky top-0 z-30 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{data.exam?.title}</p>
            <p className="text-xs text-muted-foreground">
              {answeredCount}/{questions.length} {t.exam.answered.toLowerCase()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">
              {saveState === "saving" ? t.exam.saving : saveState === "saved" ? t.exam.saved : ""}
            </span>
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm font-semibold tabular-nums",
                lowTime ? "bg-destructive/10 text-destructive" : "bg-muted text-foreground",
              )}
              aria-live="polite"
            >
              <Clock className="h-4 w-4" />
              {formatSeconds(remaining)}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-5xl flex-1 gap-6 px-4 py-6 lg:grid-cols-[1fr_260px]">
        {/* Question */}
        <div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-muted-foreground">
                {t.exam.question} {current + 1} {t.exam.of} {questions.length}
              </span>
              <Badge variant={q.type === "multi" ? "secondary" : "outline"}>
                {q.type === "multi" ? t.exam.multi : t.exam.single}
              </Badge>
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-relaxed text-foreground">{q.text}</h2>

            <div className="mt-5 space-y-3" role="group" aria-label={t.exam.question}>
              {q.options.map((opt) => {
                const selected = qAnswer.selected.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleOption(q.id, opt.id, q.type)}
                    aria-pressed={selected}
                    className={cn(
                      "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors",
                      selected
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border bg-background hover:bg-accent/40",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center text-xs font-semibold",
                        q.type === "single" ? "rounded-full" : "rounded-md",
                        selected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {selected ? <Check className="h-4 w-4" /> : opt.label}
                    </span>
                    <span className="text-sm text-foreground">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between border-t pt-4">
              <Button
                variant={qAnswer.marked ? "secondary" : "ghost"}
                size="sm"
                onClick={() => toggleMark(q.id)}
                className="gap-2"
              >
                <Flag className={cn("h-4 w-4", qAnswer.marked && "fill-current")} />
                {qAnswer.marked ? t.exam.marked : t.exam.markReview}
              </Button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              {t.exam.previous}
            </Button>
            {current < questions.length - 1 ? (
              <Button
                onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
                className="gap-2"
              >
                {t.exam.next}
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <SubmitButton onConfirm={() => doSubmit(false)} />
            )}
          </div>
        </div>

        {/* Navigator */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <p className="mb-3 text-sm font-semibold text-foreground">{t.exam.navigator}</p>
            <div className="grid grid-cols-6 gap-2 lg:grid-cols-5">
              {questions.map((question, idx) => {
                const a = answers[question.id];
                const isAnswered = (a?.selected.length ?? 0) > 0;
                const isMarked = a?.marked;
                const isCurrent = idx === current;
                return (
                  <button
                    key={question.id}
                    onClick={() => setCurrent(idx)}
                    aria-label={`${t.exam.question} ${idx + 1}`}
                    className={cn(
                      "relative flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors",
                      isCurrent && "ring-2 ring-primary ring-offset-1 ring-offset-background",
                      isAnswered
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:bg-accent/40",
                    )}
                  >
                    {idx + 1}
                    {isMarked && (
                      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-warning" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 space-y-2 border-t pt-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground">{t.exam.legend}</p>
              <LegendRow className="border-primary bg-primary/10" label={t.exam.answered} />
              <LegendRow className="border-border bg-background" label={t.exam.unanswered} />
              <div className="flex items-center gap-2">
                <span className="relative flex h-4 w-4 items-center justify-center rounded border border-border">
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-warning" />
                </span>
                {t.exam.marked}
              </div>
            </div>

            <div className="mt-4 border-t pt-3">
              <SubmitButton onConfirm={() => doSubmit(false)} fullWidth />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function LegendRow({ className, label }: { className: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("h-4 w-4 rounded border", className)} />
      {label}
    </div>
  );
}

function SubmitButton({ onConfirm, fullWidth }: { onConfirm: () => void; fullWidth?: boolean }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={fullWidth ? "w-full" : undefined}>{t.exam.submit}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t.exam.submitTitle}</AlertDialogTitle>
          <AlertDialogDescription>{t.exam.submitBody}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t.common.cancel}</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>{t.exam.submitConfirm}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
