import { t } from "@/lib/i18n";

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-sm font-medium text-foreground">{t.attribution}</p>
        <p className="mt-3 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          {t.disclaimer}
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.appName}
        </p>
      </div>
    </footer>
  );
}
