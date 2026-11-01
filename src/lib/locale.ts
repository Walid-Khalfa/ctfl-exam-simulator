export type Locale = "fr" | "en";
export const LOCALE_STORAGE_KEY = "ctfl-locale";
export const DEFAULT_LOCALE: Locale = "fr";
export function parseLocale(value: string | null | undefined): Locale {
  return value === "en" ? "en" : DEFAULT_LOCALE;
}
export function dateLocale(locale: Locale): string {
  return locale === "en" ? "en-GB" : "fr-FR";
}
export function examLanguage(value: string | null | undefined): string {
  return value?.trim().toLowerCase().split(/[-_]/)[0] || "fr";
}
