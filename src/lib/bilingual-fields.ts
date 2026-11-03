/* eslint-disable @typescript-eslint/no-explicit-any */
/** Fill only missing translations whose French source still matches the seed. */
export function englishFieldsToAdd(table: string, seed: any, current: any) {
  const pairs =
    table === "exams"
      ? [
          ["title", "title_en"],
          ["description", "description_en"],
        ]
      : table === "question_solutions"
        ? [["explanation", "explanation_en"]]
        : [["text", "text_en"]];
  const patch: Record<string, unknown> = {};
  for (const [fr, en] of pairs) {
    if (
      current[fr] === seed[fr] &&
      typeof seed[en] === "string" &&
      seed[en].trim() &&
      !(typeof current[en] === "string" && current[en].trim())
    )
      patch[en] = seed[en];
  }
  if (table === "question_solutions") {
    const rationales = { ...(current.option_rationales_en ?? {}) };
    let changed = false;
    for (const [id, text] of Object.entries(seed.option_rationales_en ?? {})) {
      if (
        current.option_rationales?.[id] === seed.option_rationales?.[id] &&
        !(typeof rationales[id] === "string" && rationales[id].trim())
      ) {
        rationales[id] = text;
        changed = true;
      }
    }
    if (changed) patch.option_rationales_en = rationales;
  }
  return patch;
}
