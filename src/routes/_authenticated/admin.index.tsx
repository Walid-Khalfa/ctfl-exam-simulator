import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Users,
  FileCheck,
  FileEdit,
  ClipboardCheck,
  Percent,
  Award,
  Timer,
  Loader2,
} from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { Badge } from "@/components/ui/badge";
import { adminStats } from "@/lib/admin.functions";
import { formatSeconds } from "@/lib/format";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { data, isLoading } = useQuery({ queryKey: ["admin-stats"], queryFn: () => adminStats() });

  return (
    <AdminShell>
      <h1 className="mb-6 font-display text-3xl font-bold text-foreground">{t.admin.dashboard}</h1>
      {isLoading || !data ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi icon={Users} label={t.admin.stats.students} value={`${data.studentCount}`} />
            <Kpi
              icon={FileCheck}
              label={t.admin.stats.published}
              value={`${data.publishedExams}`}
            />
            <Kpi icon={FileEdit} label={t.admin.stats.drafts} value={`${data.draftExams}`} />
            <Kpi
              icon={ClipboardCheck}
              label={t.admin.stats.completed}
              value={`${data.completedAttempts}`}
            />
            <Kpi icon={Award} label={t.admin.stats.avgScore} value={`${data.avgScore}%`} />
            <Kpi icon={Percent} label={t.admin.stats.passRate} value={`${data.passRate}%`} />
            <Kpi
              icon={Timer}
              label={t.admin.stats.avgTime}
              value={formatSeconds(data.avgTimeSeconds)}
            />
          </div>

          <Section title={t.admin.stats.byExam}>
            {data.byExam.length === 0 ? (
              <Empty />
            ) : (
              <div className="space-y-2">
                {data.byExam.map((e) => (
                  <div
                    key={e.examId}
                    className="flex items-center justify-between rounded-lg bg-muted/40 px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-foreground">{e.title}</span>
                    <span className="text-muted-foreground">
                      {e.attempts} tentatives · {e.avgScore}% · {e.passRate}% réussite
                    </span>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <div className="grid gap-6 lg:grid-cols-2">
            <Section title={t.admin.stats.byChapter}>
              {data.byChapter.length === 0 ? (
                <Empty />
              ) : (
                <div className="space-y-3">
                  {data.byChapter.map((c) => {
                    const pct = c.total > 0 ? Math.round((c.correct / c.total) * 100) : 0;
                    return (
                      <div key={c.chapter}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-foreground">
                            {t.results.chapter} {c.chapter} — {t.chapters[c.chapter]}
                          </span>
                          <span className="text-muted-foreground">{pct}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </Section>

            <Section title={t.admin.stats.mostMissed}>
              {data.mostMissed.length === 0 ? (
                <Empty />
              ) : (
                <ol className="space-y-2 text-sm">
                  {data.mostMissed.map((q) => (
                    <li key={q.questionId} className="flex items-start justify-between gap-3">
                      <span className="text-foreground">{q.text}…</span>
                      <Badge variant="destructive" className="shrink-0">
                        {q.missRate}%
                      </Badge>
                    </li>
                  ))}
                </ol>
              )}
            </Section>
          </div>

          <Section title={t.admin.stats.recent}>
            {data.recentAttempts.length === 0 ? (
              <Empty />
            ) : (
              <div className="space-y-2">
                {data.recentAttempts.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center justify-between rounded-lg bg-muted/40 px-4 py-3 text-sm"
                  >
                    <div>
                      <span className="font-medium text-foreground">{a.studentName}</span>
                      <span className="text-muted-foreground"> — {a.examTitle}</span>
                    </div>
                    <Badge
                      className={a.passed ? "bg-success text-success-foreground" : ""}
                      variant={a.passed ? "default" : "destructive"}
                    >
                      {a.percentage}%
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </Section>
        </div>
      )}
    </AdminShell>
  );
}

function Kpi({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-3 font-display text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <h2 className="mb-4 font-display text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function Empty() {
  return <p className="text-sm text-muted-foreground">{t.admin.stats.noData}</p>;
}
