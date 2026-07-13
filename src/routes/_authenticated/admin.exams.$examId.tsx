import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  Loader2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BadgeCheck,
  FileText,
  ExternalLink,
} from "lucide-react";
import { AdminShell } from "@/components/AdminShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QuestionEditor, type EditableQuestion } from "@/components/admin/QuestionEditor";
import { PdfImport } from "@/components/admin/PdfImport";
import { ExamConfigForm } from "@/components/admin/ExamConfigForm";
import { getExamAdmin, updateExam, deleteQuestion, bulkValidateClean } from "@/lib/admin.functions";
import { t } from "@/lib/i18n";
import { toast } from "sonner";
import type { ExamWarning } from "@/lib/exam-validation";

export const Route = createFileRoute("/_authenticated/admin/exams/$examId")({
  component: ExamEditor,
});

function ExamEditor() {
  const { examId } = useParams({ from: "/_authenticated/admin/exams/$examId" });
  const qc = useQueryClient();
  const [editing, setEditing] = useState<EditableQuestion | null>(null);
  const [creatingQ, setCreatingQ] = useState(false);
  const [previewPage, setPreviewPage] = useState<number | null>(null);
  const [tab, setTab] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["admin-exam", examId],
    queryFn: () => getExamAdmin({ data: { id: examId } }),
  });

  const refresh = () => qc.invalidateQueries({ queryKey: ["admin-exam", examId] });

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

  const exam = data.exam;
  const documents = data.documents ?? [];
  const questionsDoc = documents.find((d) => d.kind === "questions" && d.url) ?? null;
  const errors = data.warnings.filter((w) => w.severity === "error");
  const warns = data.warnings.filter((w) => w.severity === "warning");
  const nextPosition = (data.questions.reduce((m, q) => Math.max(m, q.position), 0) || 0) + 1;

  const openSourcePage = (page: number | null) => {
    if (!questionsDoc) {
      toast.error(t.admin.source.noDocument);
      return;
    }
    if (!page) {
      toast.error(t.admin.source.noPage);
      return;
    }
    window.open(`${questionsDoc.url}#page=${page}`, "_blank", "noopener");
  };

  const runBulkValidate = async () => {
    if (!confirm(t.admin.bulk.validateCleanConfirm)) return;
    try {
      const res = await bulkValidateClean({ data: { examId } });
      if (res.validated === 0) toast.info(t.admin.bulk.none);
      else toast.success(t.admin.bulk.validated.replace("{n}", String(res.validated)));
      refresh();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    }
  };

  const closeDialog = () => {
    setCreatingQ(false);
    setEditing(null);
    setPreviewPage(null);
  };

  return (
    <AdminShell>
      <div className="mb-4">
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link to="/admin/exams">
            <ArrowLeft className="h-4 w-4" /> {t.admin.exams}
          </Link>
        </Button>
      </div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-3xl font-bold text-foreground">{exam.title}</h1>
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

      <WarningsPanel errors={errors} warns={warns} />

      <div className="mt-4">
        <PublicationChecklist checklist={data.checklist} />
      </div>

      <Tabs
        value={tab ?? (data.questions.length === 0 ? "pdf" : "questions")}
        onValueChange={setTab}
        className="mt-6"
      >
        <TabsList>
          <TabsTrigger value="questions">{t.admin.question.title}</TabsTrigger>
          <TabsTrigger value="config">{t.admin.exam.configTitle}</TabsTrigger>
          <TabsTrigger value="pdf">{t.admin.pdf.title}</TabsTrigger>
          <TabsTrigger value="source">{t.admin.source.preview}</TabsTrigger>
          <TabsTrigger value="preview">{t.admin.exam.preview}</TabsTrigger>
        </TabsList>

        <TabsContent value="questions" className="mt-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              {data.questions.length} / {exam.total_questions} {t.common.questions}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" onClick={runBulkValidate} className="gap-2">
                <BadgeCheck className="h-4 w-4" /> {t.admin.bulk.validateClean}
              </Button>
              <Button onClick={() => setCreatingQ(true)} className="gap-2">
                <Plus className="h-4 w-4" /> {t.admin.question.add}
              </Button>
            </div>
          </div>
          {data.questions.length === 0 ? (
            <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground">
              {t.admin.question.empty}
            </div>
          ) : (
            <div className="space-y-2">
              {data.questions.map((q) => {
                const qErrors = data.warnings.filter((w) => w.position === q.position);
                return (
                  <div
                    key={q.id}
                    className="flex items-start justify-between gap-3 rounded-xl border bg-card p-4"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-foreground">Q{q.position}</span>
                        <Badge variant="outline" className="text-xs">
                          {q.k_level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Ch. {q.chapter}
                        </Badge>
                        <Badge
                          variant={q.validation_status === "validated" ? "default" : "secondary"}
                          className={
                            q.validation_status === "validated"
                              ? "bg-success text-success-foreground text-xs"
                              : "text-xs"
                          }
                        >
                          {q.validation_status === "validated"
                            ? t.admin.question.markValidated
                            : t.admin.question.markDraft}
                        </Badge>
                        {q.source_page && (
                          <Badge variant="outline" className="text-xs">
                            {t.admin.source.page} {q.source_page}
                          </Badge>
                        )}
                        {qErrors.some((w) => w.severity === "error") && (
                          <Badge variant="destructive" className="text-xs gap-1">
                            <AlertTriangle className="h-3 w-3" />{" "}
                            {qErrors.filter((w) => w.severity === "error").length}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {q.text || "—"}
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      {questionsDoc && q.source_page && (
                        <Button
                          variant="ghost"
                          size="icon"
                          title={t.admin.source.jump}
                          onClick={() => openSourcePage(q.source_page)}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setPreviewPage(q.source_page ?? null);
                          setEditing(q);
                        }}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={async () => {
                          if (!confirm(t.admin.question.deleteConfirm)) return;
                          await deleteQuestion({ data: { id: q.id } });
                          toast.success("Question supprimée");
                          refresh();
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="config" className="mt-4">
          <div className="max-w-2xl rounded-2xl border bg-card p-6">
            <ExamConfigForm
              initial={exam}
              submitLabel={t.common.save}
              onSubmit={async (config) => {
                try {
                  await updateExam({ data: { id: examId, ...config } });
                  toast.success(t.admin.exam.savedConfig);
                  refresh();
                } catch (e) {
                  toast.error(e instanceof Error ? e.message : "Erreur");
                }
              }}
            />
          </div>
        </TabsContent>

        <TabsContent value="pdf" className="mt-4">
          <PdfImport
            examId={examId}
            onImported={refresh}
            onReviewDrafts={() => {
              refresh();
              setTab("questions");
            }}
          />
        </TabsContent>

        <TabsContent value="source" className="mt-4">
          {questionsDoc ? (
            <div className="overflow-hidden rounded-2xl border bg-card">
              <iframe
                title={t.admin.source.preview}
                src={questionsDoc.url}
                className="h-[80vh] w-full"
              />
            </div>
          ) : (
            <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground">
              {t.admin.source.noDocument}
            </div>
          )}
        </TabsContent>

        <TabsContent value="preview" className="mt-4">
          <ExamPreview questions={data.questions} />
        </TabsContent>
      </Tabs>

      <Dialog
        open={creatingQ || !!editing}
        onOpenChange={(o) => {
          if (!o) closeDialog();
        }}
      >
        <DialogContent
          className={
            questionsDoc
              ? "max-h-[92vh] max-w-6xl overflow-y-auto"
              : "max-h-[92vh] max-w-2xl overflow-y-auto"
          }
        >
          <DialogHeader>
            <DialogTitle>{editing ? t.admin.exam.edit : t.admin.question.add}</DialogTitle>
          </DialogHeader>
          <div className={questionsDoc ? "grid gap-6 lg:grid-cols-2" : ""}>
            <QuestionEditor
              examId={examId}
              question={editing}
              nextPosition={nextPosition}
              onSourcePageChange={setPreviewPage}
              onSaved={() => {
                closeDialog();
                refresh();
              }}
              onCancel={closeDialog}
            />
            {questionsDoc && (
              <div className="hidden lg:block">
                <div className="sticky top-0">
                  <p className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                    <FileText className="h-4 w-4" /> {t.admin.source.preview}
                    {previewPage ? ` — ${t.admin.source.page} ${previewPage}` : ""}
                  </p>
                  <iframe
                    key={previewPage ?? "none"}
                    title={t.admin.source.preview}
                    src={previewPage ? `${questionsDoc.url}#page=${previewPage}` : questionsDoc.url}
                    className="h-[70vh] w-full rounded-xl border"
                  />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </AdminShell>
  );
}

function PublicationChecklist({
  checklist,
}: {
  checklist: { code: string; ok: boolean; detail?: number }[];
}) {
  const c = t.admin.checklist;
  const allOk = checklist.every((i) => i.ok);
  const labelFor = (code: string): string => (c as Record<string, string>)[code] ?? code;
  const failFor = (item: { code: string; detail?: number }): string => {
    const key = `${item.code}Fail`;
    const msg = (c as Record<string, string>)[key];
    return msg ? msg.replace("{n}", String(item.detail ?? 0)) : "";
  };
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <BadgeCheck className={`h-5 w-5 ${allOk ? "text-success" : "text-muted-foreground"}`} />
        <h2 className="font-display text-lg font-semibold text-foreground">{c.title}</h2>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">{c.subtitle}</p>
      <ul className="space-y-2">
        {checklist.map((item) => (
          <li key={item.code} className="flex items-start gap-2 text-sm">
            {item.ok ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            ) : (
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            )}
            <span className={item.ok ? "text-foreground" : "text-destructive"}>
              {labelFor(item.code)}
              {!item.ok && failFor(item) ? ` — ${failFor(item)}` : ""}
            </span>
          </li>
        ))}
      </ul>
      {allOk && (
        <p className="mt-4 flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 p-3 text-sm text-success">
          <CheckCircle2 className="h-4 w-4" /> {c.ready}
        </p>
      )}
    </div>
  );
}

type QuestionPreviewType = Awaited<ReturnType<typeof getExamAdmin>>["questions"];

function WarningsPanel({ errors, warns }: { errors: ExamWarning[]; warns: ExamWarning[] }) {
  if (errors.length === 0 && warns.length === 0) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-success">
        <CheckCircle2 className="h-4 w-4" /> {t.admin.warnings.none}
      </div>
    );
  }
  return (
    <div className="space-y-2 rounded-xl border bg-card p-4">
      <p className="font-semibold text-foreground">
        {t.admin.warnings.title} — {errors.length} {t.admin.warnings.errors}, {warns.length}{" "}
        {t.admin.warnings.warnings}
      </p>
      <ul className="space-y-1 text-sm">
        {errors.map((w, i) => (
          <li key={`e${i}`} className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            {w.position ? `Q${w.position} : ` : ""}
            {w.message}
          </li>
        ))}
        {warns.map((w, i) => (
          <li key={`w${i}`} className="flex items-center gap-2 text-muted-foreground">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            {w.position ? `Q${w.position} : ` : ""}
            {w.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExamPreview({ questions }: { questions: QuestionPreviewType }) {
  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground">
        {t.admin.question.empty}
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <div key={q.id} className="rounded-2xl border bg-card p-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Q{q.position}</span>
            <Badge variant="outline" className="text-xs">
              {q.k_level}
            </Badge>
            <Badge variant="outline" className="text-xs">
              Ch. {q.chapter}
            </Badge>
            <span>
              · {q.points} pt ·{" "}
              {q.type === "multi" ? t.admin.question.multi : t.admin.question.single}
            </span>
          </div>
          <p className="font-medium text-foreground">{q.text}</p>
          <ul className="mt-3 space-y-1.5">
            {q.options.map((o) => {
              const correct = q.correct_option_ids.includes(o.id);
              return (
                <li
                  key={o.id}
                  className={`flex items-start gap-2 rounded-lg px-3 py-2 text-sm ${correct ? "bg-success/10 text-success" : "bg-muted/40 text-foreground"}`}
                >
                  <span className="font-semibold">{o.label}.</span>
                  <span>{o.text}</span>
                  {correct && <CheckCircle2 className="ml-auto h-4 w-4" />}
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
  );
}
