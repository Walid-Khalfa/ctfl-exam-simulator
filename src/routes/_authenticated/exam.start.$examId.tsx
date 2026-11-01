import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/AppShell";
import { startAttempt } from "@/lib/exam.functions";
import { useLocale } from "@/hooks/useLocale";

export const Route = createFileRoute("/_authenticated/exam/start/$examId")({
  component: StartExamPage,
});

function StartExamPage() {
  const { t, tr } = useLocale();
  const { examId } = Route.useParams();
  const navigate = useNavigate();
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    startAttempt({ data: { examId } })
      .then((res) => {
        navigate({ to: "/exam/$attemptId", params: { attemptId: res.attemptId }, replace: true });
      })
      .catch((err) => {
        toast.error(
          err instanceof Error ? tr(err.message) : tr("Impossible de démarrer l'examen."),
        );
        navigate({ to: "/dashboard", replace: true });
      });
  }, [examId, navigate, tr]);

  return (
    <AppShell>
      <div className="flex items-center justify-center py-24 text-muted-foreground">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        {t.common.loading}
      </div>
    </AppShell>
  );
}
