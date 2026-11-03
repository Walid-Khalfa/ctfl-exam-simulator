import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getCorrection } from "@/lib/exam.functions";
import { cn } from "@/lib/utils";
import { useLocale } from "@/hooks/useLocale";
import { FormattedQuestionText } from "@/components/FormattedQuestionText";
import { TranslationMissingNotice } from "@/components/TranslationMissingNotice";
import {
  localizeExplanation,
  localizeQuestionText,
  localizeRationale,
} from "@/lib/content-localization";

export const Route = createFileRoute("/_authenticated/review/$attemptId")({
  component: ReviewPage,
});

function ReviewPage() {
  const { t, locale } = useLocale();
  const { attemptId } = Route.useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["correction", attemptId],
    queryFn: () => getCorrection({ data: { attemptId } }),
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

  return (
    <AppShell>
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold text-foreground">{t.correction.title}</h1>
          <Button asChild variant="outline" size="sm">
            <Link to="/results/$attemptId" params={{ attemptId }} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t.common.back}
            </Link>
          </Button>
        </div>

        <div className="space-y-5">
          {data.questions.map((q, idx) => {
            const questionText = localizeQuestionText(q, locale);
            const explanation = localizeExplanation(q, locale);
            const rationales = (q as { option_rationales?: Record<string, string> })
              .option_rationales;
            const rationalesEn = (q as { option_rationales_en?: Record<string, string> })
              .option_rationales_en;
            return (
              <div key={q.id} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.exam.question} {idx + 1}
                  </span>
                  <Badge
                    className={cn(
                      q.isCorrect
                        ? "bg-success text-success-foreground"
                        : "bg-destructive text-destructive-foreground",
                    )}
                  >
                    {q.isCorrect ? t.correction.correct : t.correction.incorrect}
                  </Badge>
                </div>
                <div className="mt-3 text-base font-semibold leading-relaxed text-foreground">
                  <div lang={locale}>
                    <FormattedQuestionText text={questionText.text} />
                  </div>
                  {questionText.translationMissing && <TranslationMissingNotice className="mt-3" />}
                </div>

                <div className="mt-4 space-y-2" lang={locale}>
                  {q.options.map((opt) => {
                    const isCorrect = q.correctOptionIds.includes(opt.id);
                    const isSelected = q.selectedOptionIds.includes(opt.id);
                    const optionText = localizeQuestionText(opt, locale);
                    const rationale = localizeRationale(
                      rationales?.[opt.id],
                      rationalesEn?.[opt.id],
                      locale,
                    );
                    return (
                      <div
                        key={opt.id}
                        className={cn(
                          "flex items-start gap-3 rounded-xl border p-3 text-sm",
                          isCorrect
                            ? "border-success/50 bg-success/5"
                            : isSelected
                              ? "border-destructive/50 bg-destructive/5"
                              : "border-border",
                        )}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold text-muted-foreground">
                          {opt.label}
                        </span>
                        <span className="flex-1 text-foreground">
                          {optionText.text}
                          {optionText.translationMissing && (
                            <TranslationMissingNotice inline className="ml-2" />
                          )}
                          {rationale.text && (
                            <span className="mt-1 block text-xs text-muted-foreground">
                              {rationale.text}
                              {rationale.translationMissing && (
                                <TranslationMissingNotice inline className="ml-2" />
                              )}
                            </span>
                          )}
                        </span>
                        {isCorrect && <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />}
                        {!isCorrect && isSelected && (
                          <XCircle className="h-4 w-4 shrink-0 text-destructive" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {q.selectedOptionIds.length === 0 && (
                  <p className="mt-3 text-xs italic text-muted-foreground">
                    {t.correction.noAnswer}
                  </p>
                )}

                {explanation.text && (
                  <div className="mt-4 rounded-xl bg-muted/50 p-4" lang={locale}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t.correction.explanation}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {explanation.text}
                    </p>
                    {explanation.translationMissing && (
                      <TranslationMissingNotice className="mt-2" />
                    )}
                  </div>
                )}

                <p className="mt-3 text-xs text-muted-foreground">
                  {t.correction.learningObjective}: {q.learning_objective} · {q.k_level} ·{" "}
                  {t.results.chapter} {q.chapter}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
