import { Languages } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { parseLocale } from "@/lib/locale";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <label className="inline-flex shrink-0 items-center gap-1 rounded-md border bg-background px-2 py-1.5 text-sm">
      <Languages className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
      <select
        aria-label={locale === "fr" ? "Langue de l’interface" : "Interface language"}
        value={locale}
        onChange={(event) => setLocale(parseLocale(event.target.value))}
        className="max-w-24 bg-transparent text-foreground focus-visible:outline-primary"
      >
        <option value="fr" lang="fr">
          Français
        </option>
        <option value="en" lang="en">
          English
        </option>
      </select>
    </label>
  );
}
