import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAttemptReviewAdmin } from "@/lib/admin.functions";
import { FormattedQuestionText } from "@/components/FormattedQuestionText";
import { formatSeconds } from "@/lib/format";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/admin/results/$attemptId")({
  component: AdminAttemptReview,
});

function AdminAttemptReview() {
  const { attemptId } = useParams({ from: "/_authenticated/admin/results/$attemptId" });
  const { data, isLoading } = useQuery({
    queryKey: ["admin-attempt", attemptId],
    queryFn: () => getAttemptReviewAdmin({ data: { attemptId } }),
  });

  if (isLoading || !data) {
    return (
      <AdminShell>
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      </AdminShell>
    );
  }

  const a = data.attempt;
  return (
    <AdminShell>
      <div className="mb-4">
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link to="/admin/results">
            <ArrowLeft className="h-4 w-4" /> {t.admin.results}
          </Link>
        </Button>
      </div>

      <div className="mb-6 rounded-2xl border bg-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">{data.studentName}</h1>
            <p className="text-sm text-muted-foreground">{data.exam?.title}</p>
          </div>
          <Badge
            variant={a.passed ? "default" : "destructive"}
            className={a.passed ? "bg-success text-success-foreground" : ""}
          >
            {a.passed ? t.admin.review.passed : t.admin.review.failed}
          </Badge>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 text-sm">
          <Stat label={t.admin.review.score} value={`${a.score}/${a.max_score}`} />
          <Stat label={t.admin.review.percentage} value={`${a.percentage}%`} />
          <Stat
            label={t.admin.review.timeUsed}
            value={a.time_used_seconds != null ? formatSeconds(a.time_used_seconds) : "—"}
          />
          <Stat
            label={t.admin.review.date}
            value={a.submitted_at ? new Date(a.submitted_at).toLocaleDateString("fr-FR") : "—"}
          />
        </div>
      </div>

      <section className="mb-6 rounded-2xl border bg-card p-6">
        <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
          {t.results.byChapter}
        </h2>
        <div className="space-y-3">
          {data.byChapter.map((c) => {
            const pct = c.total > 0 ? Math.round((c.correct / c.total) * 100) : 0;
            return (
              <div key={c.chapter}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-foreground">
                    {t.results.chapter} {c.chapter} — {t.chapters[c.chapter]}
                  </span>
                  <span className="text-muted-foreground">
                    {c.correct}/{c.total}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="space-y-4">
        {data.questions.map((q) => (
          <div key={q.id} className="rounded-2xl border bg-card p-5">
            <div className="mb-2 flex items-center gap-2 text-sm">
              <span className="font-semibold text-foreground">Q{q.position}</span>
              {q.is_correct ? (
                <Badge className="gap-1 bg-success text-success-foreground">
                  <CheckCircle2 className="h-3 w-3" /> {t.correction.correct}
                </Badge>
              ) : (
                <Badge variant="destructive" className="gap-1">
                  <XCircle className="h-3 w-3" /> {t.correction.incorrect}
                </Badge>
              )}
            </div>
            <div className="font-medium text-foreground">
              <FormattedQuestionText text={q.text} />
            </div>
            <ul className="mt-3 space-y-1.5">
              {q.options.map((o) => {
                const correct = q.correct_option_ids.includes(o.id);
                const selected = q.selected_option_ids.includes(o.id);
                return (
                  <li
                    key={o.id}
                    className={`flex items-start gap-2 rounded-lg px-3 py-2 text-sm ${correct ? "bg-success/10 text-success" : selected ? "bg-destructive/10 text-destructive" : "bg-muted/40 text-foreground"}`}
                  >
                    <span className="font-semibold">{o.label}.</span>
                    <span>{o.text}</span>
                    {selected && (
                      <span className="ml-auto text-xs">({t.correction.yourAnswer})</span>
                    )}
                  </li>
                );
              })}
            </ul>
            {q.explanation && (
              <p className="mt-3 rounded-lg bg-muted/40 p-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t.correction.explanation} : </span>
                {q.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
    </AdminShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted/40 p-3">
      <p className="font-semibold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
