import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Copy, Trash2, Pencil, Loader2, Archive } from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExamConfigForm, type ExamConfig } from "@/components/admin/ExamConfigForm";
import {
  listExamsAdmin,
  createExam,
  duplicateExam,
  deleteExam,
  setExamStatus,
} from "@/lib/admin.functions";
import { t } from "@/lib/i18n";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/exams/")({
  component: AdminExams,
});

function AdminExams() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [busy, setBusy] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["admin-exams"],
    queryFn: () => listExamsAdmin(),
  });

  const refresh = () => qc.invalidateQueries({ queryKey: ["admin-exams"] });

  const handleCreate = async (config: ExamConfig) => {
    setBusy(true);
    try {
      const { id } = await createExam({ data: config });
      toast.success(t.admin.exam.savedConfig);
      setCreating(false);
      navigate({ to: "/admin/exams/$examId", params: { examId: id } });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AdminShell>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl font-bold text-foreground">{t.admin.exams}</h1>
        <Button onClick={() => setCreating(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          {t.admin.exam.newExam}
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t.common.loading}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground">
          {t.admin.stats.noData}
        </div>
      ) : (
        <div className="space-y-3">
          {data.map((exam) => (
            <div
              key={exam.id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-card p-5 shadow-sm"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    {exam.title}
                  </h2>
                  <Badge
                    variant={exam.status === "published" ? "default" : "secondary"}
                    className={
                      exam.status === "published"
                        ? "bg-success text-success-foreground"
                        : exam.status === "archived"
                          ? "bg-muted text-muted-foreground"
                          : ""
                    }
                  >
                    {exam.status === "published"
                      ? t.admin.exam.published
                      : exam.status === "archived"
                        ? t.admin.archive.archived
                        : t.admin.exam.draft}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {exam.questionCount} {t.common.questions} ({exam.validatedCount} validées) ·{" "}
                  {exam.duration_minutes} min · {exam.passing_threshold}%
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link to="/admin/exams/$examId" params={{ examId: exam.id }}>
                    <Pencil className="h-3.5 w-3.5" /> {t.admin.exam.edit}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1"
                  onClick={async () => {
                    await duplicateExam({ data: { id: exam.id } });
                    toast.success("Examen dupliqué");
                    refresh();
                  }}
                >
                  <Copy className="h-3.5 w-3.5" /> {t.admin.exam.duplicate}
                </Button>
                {exam.status === "published" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={async () => {
                      await setExamStatus({ data: { id: exam.id, status: "draft" } });
                      toast.success("Examen dépublié");
                      refresh();
                    }}
                  >
                    {t.admin.exam.unpublish}
                  </Button>
                ) : exam.status === "archived" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={async () => {
                      await setExamStatus({ data: { id: exam.id, status: "draft" } });
                      toast.success(t.admin.archive.restored);
                      refresh();
                    }}
                  >
                    {t.admin.archive.restore}
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    onClick={async () => {
                      if (!confirm(t.admin.exam.publishConfirm)) return;
                      try {
                        await setExamStatus({ data: { id: exam.id, status: "published" } });
                        toast.success("Examen publié");
                        refresh();
                      } catch (e) {
                        toast.error(e instanceof Error ? e.message : t.admin.exam.publishBlocked);
                      }
                    }}
                  >
                    {t.admin.exam.publish}
                  </Button>
                )}
                {exam.status !== "archived" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1"
                    onClick={async () => {
                      if (!confirm(t.admin.archive.archiveConfirm)) return;
                      await setExamStatus({ data: { id: exam.id, status: "archived" } });
                      toast.success(t.admin.archive.archivedToast);
                      refresh();
                    }}
                  >
                    <Archive className="h-3.5 w-3.5" /> {t.admin.archive.archive}
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-destructive"
                  onClick={async () => {
                    if (!confirm(t.admin.exam.deleteConfirm)) return;
                    const res = await deleteExam({ data: { id: exam.id } });
                    toast.success(res.archived ? t.admin.archive.blockedDelete : "Examen supprimé");
                    refresh();
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" /> {t.admin.exam.delete}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={creating} onOpenChange={setCreating}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{t.admin.exam.newExam}</DialogTitle>
          </DialogHeader>
          <ExamConfigForm
            onSubmit={handleCreate}
            submitting={busy}
            submitLabel={t.admin.exam.create}
          />
        </DialogContent>
      </Dialog>
    </AdminShell>
  );
}
