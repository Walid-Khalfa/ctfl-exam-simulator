import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { fr, type Dict } from "@/lib/i18n";
import { en } from "@/lib/i18n.en";
import { translateText } from "@/lib/ui-translations";
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  dateLocale,
  parseLocale,
  type Locale,
} from "@/lib/locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
  tr: (text: string) => string;
  dateLocale: string;
}
const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: fr,
  tr: (text) => text,
  dateLocale: "fr-FR",
});

// The server and the initial hydration render both use French. Browser preferences
// are loaded after hydration, and never stored in a process-wide mutable singleton.
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>(DEFAULT_LOCALE);
  useEffect(() => {
    try {
      updateLocale(parseLocale(localStorage.getItem(LOCALE_STORAGE_KEY)));
    } catch {
      /* Storage may be blocked. */
    }
    const sync = (event: StorageEvent) => {
      if (event.key === LOCALE_STORAGE_KEY || event.key === null)
        updateLocale(parseLocale(event.newValue));
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title =
      locale === "en"
        ? "CTFL Exam Simulator — ISTQB CTFL v4.0 Preparation"
        : "CTFL Exam Simulator — Préparation ISTQB CTFL v4.0";
  }, [locale]);
  const tr = useCallback((text: string) => translateText(text, locale), [locale]);
  const setLocale = (next: Locale) => {
    updateLocale(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* Keep in-memory preference. */
    }
  };
  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
        t: locale === "en" ? en : fr,
        tr,
        dateLocale: dateLocale(locale),
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
export function useLocale() {
  return useContext(LocaleContext);
}
