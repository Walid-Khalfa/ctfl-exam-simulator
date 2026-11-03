import { expect, it } from "vitest";
import { englishFieldsToAdd } from "@/lib/bilingual-fields";
import {
  firestoreConfig,
  planChanges,
  rollbackFields,
} from "../../scripts/migrate-bilingual-content.mjs";
it("requires an explicit database and API key for a remote target", async () => {
  await expect(firestoreConfig({ FIREBASE_PROJECT_ID: "project" })).rejects.toThrow(
    "FIREBASE_DATABASE_ID",
  );
  const config = await firestoreConfig({
    FIREBASE_PROJECT_ID: "project",
    FIREBASE_DATABASE_ID: "named-db",
    FIREBASE_API_KEY: "test-key",
  });
  expect(config?.databaseId).toBe("named-db");
});
it("refuses missing target documents instead of creating English-only rows", () => {
  expect(() =>
    planChanges(
      "questions",
      [{ id: "q", text: "FR", text_en: "EN" }],
      new Map(),
      englishFieldsToAdd,
    ),
  ).toThrow("Missing document");
});
it("plans only missing English fields and becomes idempotent after applying them", () => {
  const seed = { id: "q", text: "FR", text_en: "EN", points: 1 };
  const existing = { id: "q", text: "FR", points: 3 };
  const [change] = planChanges("questions", [seed], new Map([["q", existing]]), englishFieldsToAdd);
  expect(change.patch).toEqual({ text_en: "EN" });
  expect(
    planChanges(
      "questions",
      [seed],
      new Map([["q", { ...existing, ...change.patch }]]),
      englishFieldsToAdd,
    ),
  ).toEqual([]);
});
it("does not attach a stale seed translation to instructor-edited French", () => {
  expect(
    englishFieldsToAdd("questions", { text: "Seed FR", text_en: "Seed EN" }, { text: "Edited FR" }),
  ).toEqual({});
});
it("keeps reviewed English rationale entries while filling missing ones", () => {
  const seed = {
    explanation: "FR",
    explanation_en: "EN",
    option_rationales: { a: "FR A", b: "FR B" },
    option_rationales_en: { a: "EN A", b: "EN B" },
  };
  expect(
    englishFieldsToAdd("question_solutions", seed, {
      explanation: "FR",
      option_rationales: seed.option_rationales,
      option_rationales_en: { a: "Reviewed A" },
    }),
  ).toEqual({ explanation_en: "EN", option_rationales_en: { a: "Reviewed A", b: "EN B" } });
});
it("rolls back English fields only and preserves later French and status edits", () => {
  const current = { title: "Later French edit", status: "archived", title_en: "EN" };
  const patch = rollbackFields(
    current,
    { id: "ex", before: {}, applied: { title_en: "EN" } },
    () => "DELETE_FIELD",
  );
  expect(patch).toEqual({ title_en: "DELETE_FIELD" });
  expect(current.title).toBe("Later French edit");
  expect(current.status).toBe("archived");
});
it("refuses rollback when English was edited after migration", () => {
  expect(() =>
    rollbackFields(
      { text_en: "Reviewed EN" },
      { id: "q", before: {}, applied: { text_en: "Seed EN" } },
      () => null,
    ),
  ).toThrow("changed since migration");
});

it("fails migration validation when edited French needs a new reviewed translation", () => {
  expect(() =>
    planChanges(
      "questions",
      [{ id: "q", text: "Seed FR", text_en: "Seed EN" }],
      new Map([["q", { text: "Edited FR" }]]),
      englishFieldsToAdd,
    ),
  ).toThrow("Source content differs");
});

it("allows rollback to resume when a field is already restored or was never written", () => {
  expect(
    rollbackFields({}, { id: "q", before: {}, applied: { text_en: "EN" } }, () => null),
  ).toEqual({});
});
