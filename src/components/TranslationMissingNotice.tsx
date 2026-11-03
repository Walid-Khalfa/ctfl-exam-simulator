import { Languages } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { cn } from "@/lib/utils";

/**
 * Explicit indicator shown when English is requested but only the French source
 * text is available. Never hides the gap behind a silent fallback.
 */
export function TranslationMissingNotice({
  className,
  inline = false,
}: {
  className?: string;
  inline?: boolean;
}) {
  const { t } = useLocale();
  if (inline) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-md bg-warning/10 px-1.5 py-0.5 text-[11px] font-medium text-warning",
          className,
        )}
        title={t.exam.translationMissing}
      >
        <Languages className="h-3 w-3" aria-hidden="true" />
        FR
      </span>
    );
  }
  return (
    <p
      className={cn(
        "flex items-start gap-2 rounded-lg bg-warning/10 px-3 py-2 text-xs text-warning",
        className,
      )}
      role="status"
    >
      <Languages className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {t.exam.translationMissing}
    </p>
  );
}
