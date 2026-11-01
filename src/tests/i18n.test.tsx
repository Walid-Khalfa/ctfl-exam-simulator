import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { LocaleProvider, useLocale } from "@/hooks/useLocale";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { fr } from "@/lib/i18n";
import { en } from "@/lib/i18n.en";
import { LOCALE_STORAGE_KEY, parseLocale, examLanguage } from "@/lib/locale";
import { translateText } from "@/lib/ui-translations";

function Probe() {
  const { t, dateLocale } = useLocale();
  return (
    <>
      <LanguageSwitcher />
      <p>{t.auth.loginTitle}</p>
      <output>{dateLocale}</output>
    </>
  );
}
function entries(value: object, prefix = ""): [string, string][] {
  return Object.entries(value).flatMap(([key, val]) =>
    typeof val === "string"
      ? [[prefix + key, val] as [string, string]]
      : entries(val, `${prefix}${key}.`),
  );
}
beforeEach(() => {
  localStorage.clear();
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
describe("locale", () => {
  it("has a complete English dictionary with identical interpolation placeholders", () => {
    const a = entries(fr),
      b = entries(en);
    expect(b.map(([key]) => key)).toEqual(a.map(([key]) => key));
    for (let i = 0; i < a.length; i++) {
      expect(b[i][1].trim()).not.toBe("");
      expect(b[i][1].match(/\{\w+\}/g)).toEqual(a[i][1].match(/\{\w+\}/g));
    }
  });
  it("defaults to French and handles unsupported locale values", () => {
    expect(parseLocale("de")).toBe("fr");
    expect(parseLocale(null)).toBe("fr");
    expect(parseLocale("en")).toBe("en");
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    expect(screen.getByText("Connexion")).toBeTruthy();
  });
  it("changes labels, date locale and document language, and persists across remount", () => {
    const view = render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "en" } });
    expect(screen.getByText("Sign in")).toBeTruthy();
    expect(screen.getByText("en-GB")).toBeTruthy();
    expect(document.documentElement.lang).toBe("en");
    expect(localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("en");
    view.unmount();
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    expect(screen.getByText("Sign in")).toBeTruthy();
  });
  it("does not read browser storage during SSR or leak an English preference into another render", () => {
    localStorage.setItem(LOCALE_STORAGE_KEY, "en");
    const read = vi.spyOn(Storage.prototype, "getItem");
    const first = renderToString(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    expect(read).not.toHaveBeenCalled();
    expect(first).toContain("Connexion");
    expect(
      renderToString(
        <LocaleProvider>
          <Probe />
        </LocaleProvider>,
      ),
    ).toBe(first);
  });
  it("works when browser storage is unavailable", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "en" } });
    expect(screen.getByText("Sign in")).toBeTruthy();
  });
  it("synchronises language changes in another tab", () => {
    render(
      <LocaleProvider>
        <Probe />
      </LocaleProvider>,
    );
    act(() =>
      window.dispatchEvent(
        new StorageEvent("storage", { key: LOCALE_STORAGE_KEY, newValue: "en" }),
      ),
    );
    expect(screen.getByText("Sign in")).toBeTruthy();
  });
  it("preserves content and unknown server messages instead of fabricating translations", () => {
    expect(translateText("My authored question", "en")).toBe("My authored question");
    expect(translateText("Examen indisponible", "en")).toBe("Exam unavailable");
    expect(examLanguage("en-GB")).toBe("en");
    expect(examLanguage(null)).toBe("fr");
  });
});
