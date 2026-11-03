import type { Locale } from "./locale";

// Bilingual content resolution.
//
// French is the source language and is always complete. English content lives in
// the same records under suffixed fields (`text_en`, `title_en`, …), so switching
// language never mutates an attempt, never creates one and never hits the network.
//
// When an English string is missing we fall back to French and report
// `translationMissing: true` so the UI can show an explicit indicator instead of
// silently hiding the gap.

export type LocalizedText = {
  text: string;
  /** True when English was requested but only French is available. */
  translationMissing: boolean;
};

export type BilingualRecord = {
  text?: string | null;
  text_en?: string | null;
  title?: string | null;
  title_en?: string | null;
  description?: string | null;
  description_en?: string | null;
  explanation?: string | null;
  explanation_en?: string | null;
  language?: string | null;
};

function clean(value: string | null | undefined): string {
  return typeof value === "string" ? value : "";
}

/** Resolve a single string pair according to the active locale. */
export function localizeText(
  french: string | null | undefined,
  english: string | null | undefined,
  locale: Locale,
): LocalizedText {
  const fr = clean(french);
  if (locale !== "en") return { text: fr, translationMissing: false };
  const en = clean(english);
  if (en.trim().length > 0) return { text: en, translationMissing: false };
  return { text: fr, translationMissing: fr.trim().length > 0 };
}

/** Localized question or answer-option text. */
export function localizeQuestionText(record: BilingualRecord, locale: Locale): LocalizedText {
  return localizeText(record.text, record.text_en, locale);
}

/** Localized exam title. */
export function localizeExamTitle(record: BilingualRecord, locale: Locale): LocalizedText {
  return localizeText(record.title, record.title_en, locale);
}

/** Localized exam description. */
export function localizeExamDescription(record: BilingualRecord, locale: Locale): LocalizedText {
  return localizeText(record.description, record.description_en, locale);
}

/** Localized explanation of a solution row. */
export function localizeExplanation(record: BilingualRecord, locale: Locale): LocalizedText {
  return localizeText(record.explanation, record.explanation_en, locale);
}

/** Localized per-option justification, when the exam provides them. */
export function localizeRationale(
  french: string | null | undefined,
  english: string | null | undefined,
  locale: Locale,
): LocalizedText {
  return localizeText(french, english, locale);
}

/** True when the record carries English content for the requested field. */
export function hasEnglishContent(
  record: BilingualRecord,
  field: "text" | "title" | "description" = "text",
): boolean {
  const value = record[`${field}_en` as keyof BilingualRecord];
  return typeof value === "string" && value.trim().length > 0;
}

/**
 * The languages an exam can actually be taken in.
 *
 * A seeded exam carries `title_en`: it is bilingual. An exam created by the
 * instructor with a single content language keeps its `language` field, which
 * remains the only language available until a translation is stored.
 */
export function examLocales(record: BilingualRecord): Locale[] {
  if (hasEnglishContent(record, "title")) return ["fr", "en"];
  const source = (record.language ?? "fr").trim().toLowerCase().split(/[-_]/)[0];
  return source === "en" ? ["en"] : ["fr"];
}

/** True when the exam can be taken in the given language. */
export function examSupportsLocale(record: BilingualRecord, locale: Locale): boolean {
  const locales = examLocales(record);
  if (locales.length > 1) return true;
  return locales.includes(locale);
}

/** Short label used in badges and filters. */
export function examLanguageLabel(record: BilingualRecord): string {
  const locales = examLocales(record);
  if (locales.length > 1) return "Français / English";
  return locales[0] === "en" ? "English" : "Français";
}
