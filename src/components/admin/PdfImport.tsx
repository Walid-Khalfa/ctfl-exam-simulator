import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
import {
  Loader2,
  Upload,
  FileText,
  Info,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  KeyRound,
  RotateCcw,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { recordDocument, extractDraftQuestions, resetAndReExtract } from "@/lib/admin.functions";
import { t } from "@/lib/i18n";
import { toast } from "sonner";

type ImportSummary = {
  detected: number;
  validated: number;
  warnings: number;
  blocking: number;
  unmatchedKeys: number[];
  orphanKeys?: number[];
  answerKeyCount?: number;
};

export function PdfImport({
  examId,
  onImported,
  onReviewDrafts,
}: {
  examId: string;
  onImported: () => void;
  onReviewDrafts?: () => void;
}) {
  const [questionsPath, setQuestionsPath] = useState<string | null>(null);
  const [answersPath, setAnswersPath] = useState<string | null>(null);
  const [uploading, setUploading] = useState<"questions" | "answers" | null>(null);
  const [extracting, setExtracting] = useState(false);
  const [summary, setSummary] = useState<ImportSummary | null>(null);

  const upload = async (file: File, kind: "questions" | "answers") => {
    setUploading(kind);
    try {
      const path = `${examId}/${kind}-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const { error } = await supabase.storage.from("exam-documents").upload(path, file, {
        contentType: "application/pdf",
        upsert: false,
      });
      if (error) throw error;
      await recordDocument({ data: { examId, kind, storagePath: path } });
      if (kind === "questions") setQuestionsPath(path);
      else setAnswersPath(path);
      toast.success(`${t.admin.pdf.uploaded} : ${file.name}`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur de téléversement");
    } finally {
      setUploading(null);
    }
  };

  const extract = async () => {
    if (!questionsPath) return;
    setExtracting(true);
    setSummary(null);
    try {
      const res = await extractDraftQuestions({
        data: { examId, questionsPath, answersPath },
      });
      setSummary(res.summary);
      toast.success(`${res.inserted} ${t.admin.pdf.extractDone}`);
      onImported();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Échec de l'extraction");
    } finally {
      setExtracting(false);
    }
  };

  const reset = async () => {
    setExtracting(true);
    setSummary(null);
    try {
      const res = await resetAndReExtract({ data: { examId } });
      setSummary(res.summary);
      toast.success(
        `${res.deleted} ${t.admin.pdf.resetDeleted} · ${res.inserted} ${t.admin.pdf.extractDone}`,
      );
      onImported();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Échec de la réinitialisation");
    } finally {
      setExtracting(false);
    }
  };

  return (
    <div className="space-y-5">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          {t.admin.pdf.privacy} {t.admin.pdf.noAutoPublish}
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 sm:grid-cols-2">
        <UploadSlot
          label={t.admin.pdf.questionsPdf}
          path={questionsPath}
          loading={uploading === "questions"}
          onFile={(f) => upload(f, "questions")}
        />
        <UploadSlot
          label={t.admin.pdf.answersPdf}
          path={answersPath}
          loading={uploading === "answers"}
          onFile={(f) => upload(f, "answers")}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={extract} disabled={!questionsPath || extracting} className="gap-2">
          {extracting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="h-4 w-4" />
          )}
          {t.admin.pdf.extract}
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" disabled={extracting} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              {t.admin.pdf.reset}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t.admin.pdf.resetTitle}</AlertDialogTitle>
              <AlertDialogDescription>{t.admin.pdf.resetConfirm}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{t.admin.pdf.resetCancel}</AlertDialogCancel>
              <AlertDialogAction onClick={reset}>{t.admin.pdf.resetAction}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      {extracting && <p className="text-sm text-muted-foreground">{t.admin.pdf.extracting}</p>}

      {summary && <ImportSummaryCard summary={summary} onReviewDrafts={onReviewDrafts} />}
    </div>
  );
}

function ImportSummaryCard({
  summary,
  onReviewDrafts,
}: {
  summary: ImportSummary;
  onReviewDrafts?: () => void;
}) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
        {t.admin.importSummary.title}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat
          icon={FileText}
          label={t.admin.importSummary.detected}
          value={summary.detected}
          tone="default"
        />
        <Stat
          icon={CheckCircle2}
          label={t.admin.importSummary.validated}
          value={summary.validated}
          tone="success"
        />
        <Stat
          icon={AlertTriangle}
          label={t.admin.importSummary.warnings}
          value={summary.warnings}
          tone="warning"
        />
        <Stat
          icon={XCircle}
          label={t.admin.importSummary.blocking}
          value={summary.blocking}
          tone="danger"
        />
      </div>
      <div className="mt-4 rounded-xl border bg-muted/40 p-4">
        {typeof summary.answerKeyCount === "number" && (
          <p className="mb-2 text-sm text-foreground">
            {t.admin.importSummary.answerKeyCount} : {summary.answerKeyCount}
          </p>
        )}
        <p className="flex items-center gap-2 text-sm font-medium text-foreground">
          <KeyRound className="h-4 w-4" />
          {t.admin.importSummary.unmatched} : {summary.unmatchedKeys.length}
        </p>
        {summary.unmatchedKeys.length > 0 && (
          <>
            <p className="mt-1 text-xs text-muted-foreground">
              {t.admin.importSummary.unmatchedHint}
            </p>
            <p className="mt-2 text-sm text-destructive">Q{summary.unmatchedKeys.join(", Q")}</p>
          </>
        )}
        {summary.orphanKeys && summary.orphanKeys.length > 0 && (
          <>
            <p className="mt-3 text-xs text-muted-foreground">{t.admin.importSummary.orphanHint}</p>
            <p className="mt-1 text-sm text-warning">Q{summary.orphanKeys.join(", Q")}</p>
          </>
        )}
      </div>
      {onReviewDrafts && (
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">{t.admin.importSummary.reviewHint}</p>
          <Button onClick={onReviewDrafts} className="gap-2 self-start">
            <CheckCircle2 className="h-4 w-4" />
            {t.admin.importSummary.reviewDrafts}
          </Button>
        </div>
      )}
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof FileText;
  label: string;
  value: number;
  tone: "default" | "success" | "warning" | "danger";
}) {
  const toneClass =
    tone === "success"
      ? "text-success"
      : tone === "warning"
        ? "text-warning"
        : tone === "danger"
          ? "text-destructive"
          : "text-primary";
  return (
    <div className="rounded-xl border bg-background p-4 text-center">
      <Icon className={`mx-auto h-5 w-5 ${toneClass}`} />
      <p className="mt-2 font-display text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function UploadSlot({
  label,
  path,
  loading,
  onFile,
}: {
  label: string;
  path: string | null;
  loading: boolean;
  onFile: (f: File) => void;
}) {
  return (
    <div className="rounded-2xl border bg-card p-4">
      <Label className="mb-2 block">{label}</Label>
      {path ? (
        <p className="flex items-center gap-2 text-sm text-success">
          <FileText className="h-4 w-4" /> {t.admin.pdf.uploaded}
        </p>
      ) : (
        <div className="flex items-center gap-2">
          <Input
            type="file"
            accept="application/pdf"
            disabled={loading}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
            }}
          />
          {loading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
          {!loading && <Upload className="h-4 w-4 text-muted-foreground" />}
        </div>
      )}
    </div>
  );
}
