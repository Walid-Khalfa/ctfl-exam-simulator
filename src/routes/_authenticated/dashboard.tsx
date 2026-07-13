import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Clock, FileText, Award, Loader2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { listDashboard } from "@/lib/exam.functions";
import { bootstrapAvailable } from "@/lib/admin.functions";
import { useAuth } from "@/hooks/useAuth";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();

  // First-admin onboarding: when no admin exists yet, route the user to the
  // dedicated setup page instead of showing the student dashboard.
  const { data: boot } = useQuery({
    queryKey: ["bootstrap-available"],
    queryFn: () => bootstrapAvailable(),
    enabled: !loading && role !== "admin",
  });

  useEffect(() => {
    if (!loading && role !== "admin" && boot?.available) {
      navigate({ to: "/setup/first-admin", replace: true });
    }
  }, [loading, role, boot, navigate]);

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => listDashboard(),
  });

  const name = (user?.user_metadata?.full_name as string) || user?.email?.split("@")[0] || "";

  return (
    <AppShell>
      <div className="mb-8">
        <p className="text-sm text-muted-foreground">
          {t.dashboard.welcome}
          {name ? `, ${name}` : ""}
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold text-foreground">
          {t.dashboard.subtitle}
        </h1>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground">
          {t.dashboard.noExams}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {data.map((item) => (
            <ExamCard key={item.exam.id} item={item} />
          ))}
        </div>
      )}
    </AppShell>
  );
}

function ExamCard({ item }: { item: Awaited<ReturnType<typeof listDashboard>>[number] }) {
  const { exam, inProgressAttemptId, lastFinishedAttemptId, bestPercentage, attemptsUsed } = item;

  return (
    <div className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-display text-lg font-semibold text-foreground">{exam.title}</h2>
        {inProgressAttemptId ? (
          <Badge variant="secondary" className="shrink-0">
            {t.dashboard.inProgress}
          </Badge>
        ) : bestPercentage != null ? (
          <Badge className="shrink-0 bg-success text-success-foreground">
            {t.dashboard.completed}
          </Badge>
        ) : (
          <Badge variant="outline" className="shrink-0">
            {t.dashboard.notStarted}
          </Badge>
        )}
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{exam.description}</p>

      <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
        <Stat icon={FileText} label={t.common.questions} value={`${exam.total_questions}`} />
        <Stat
          icon={Clock}
          label={t.dashboard.duration}
          value={`${exam.duration_minutes} ${t.common.minutes}`}
        />
        <Stat
          icon={Award}
          label={t.dashboard.bestScore}
          value={bestPercentage != null ? `${bestPercentage}%` : "—"}
        />
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        {t.dashboard.attemptsUsed}: {attemptsUsed}
        {exam.attempts_allowed != null
          ? ` / ${exam.attempts_allowed}`
          : ` (${t.dashboard.unlimited})`}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {inProgressAttemptId ? (
          <Button asChild>
            <Link to="/exam/$attemptId" params={{ attemptId: inProgressAttemptId }}>
              {t.dashboard.resume}
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link to="/exam/start/$examId" params={{ examId: exam.id }}>
              {t.dashboard.start}
            </Link>
          </Button>
        )}
        {lastFinishedAttemptId && (
          <Button asChild variant="outline">
            <Link to="/results/$attemptId" params={{ attemptId: lastFinishedAttemptId }}>
              {t.dashboard.review}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted/50 p-3">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <p className="mt-1.5 font-semibold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
