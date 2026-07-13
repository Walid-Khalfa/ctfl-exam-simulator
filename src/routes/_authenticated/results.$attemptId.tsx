import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getResults } from "@/lib/exam.functions";
import { formatSeconds } from "@/lib/format";
import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/results/$attemptId")({
  component: ResultsPage,
});

function ResultsPage() {
  const { attemptId } = Route.useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["results", attemptId],
    queryFn: () => getResults({ data: { attemptId } }),
  });

  if (isLoading || !data) {
    return (
      <AppShell>
        <div className="flex items-center justify-center py-24 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      </AppShell>
    );
  }

  const { attempt, exam, correctCount, totalQuestions, chapterStats, levelStats } = data;
  const passed = attempt.passed === true;
  const pct = attempt.percentage ?? 0;

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <div
          className={cn(
            "rounded-2xl border p-8 text-center shadow-sm",
            passed ? "bg-success/5 border-success/30" : "bg-destructive/5 border-destructive/30",
          )}
        >
          {passed ? (
            <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
          ) : (
            <XCircle className="mx-auto h-14 w-14 text-destructive" />
          )}
          <h1 className="mt-4 font-display text-3xl font-bold text-foreground">
            {passed ? t.results.passed : t.results.failed}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">{exam?.title}</p>
          <p className="mt-6 text-5xl font-bold text-foreground">{pct}%</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.results.threshold}: {exam?.passing_threshold}%
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <Metric label={t.results.correctAnswers} value={`${correctCount}/${totalQuestions}`} />
            <Metric label={t.results.yourScore} value={`${attempt.score}/${attempt.max_score}`} />
            <Metric
              label={t.results.timeUsed}
              value={formatSeconds(attempt.time_used_seconds ?? 0)}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <StatBlock title={t.results.byChapter}>
            {Object.entries(chapterStats)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([ch, s]) => (
                <StatRow
                  key={ch}
                  label={`${t.results.chapter} ${ch} — ${t.chapters[Number(ch)] ?? ""}`}
                  correct={s.correct}
                  total={s.total}
                />
              ))}
          </StatBlock>
          <StatBlock title={t.results.byLevel}>
            {Object.entries(levelStats)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([lvl, s]) => (
                <StatRow key={lvl} label={lvl} correct={s.correct} total={s.total} />
              ))}
          </StatBlock>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link to="/review/$attemptId" params={{ attemptId }} className="gap-2">
              {t.results.viewCorrection}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/dashboard">{t.results.backToDashboard}</Link>
          </Button>
        </div>
      </div>
    </AppShell>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function StatBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <h2 className="mb-4 font-display text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function StatRow({ label, correct, total }: { label: string; correct: number; total: number }) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-foreground">{label}</span>
        <span className="font-medium text-muted-foreground">
          {correct}/{total}
        </span>
      </div>
      <Progress value={pct} />
    </div>
  );
}
