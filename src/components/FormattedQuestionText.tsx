import React from "react";

interface FormattedQuestionTextProps {
  text: string;
  className?: string;
}

export function FormattedQuestionText({ text, className = "" }: FormattedQuestionTextProps) {
  if (!text) return null;

  const lines = text.split("\n");
  const blocks: Array<{ type: "text"; content: string } | { type: "table"; rows: string[][] }> = [];

  let currentTable: string[][] | null = null;
  let currentTextLines: string[] = [];

  const flushText = () => {
    if (currentTextLines.length > 0) {
      blocks.push({ type: "text", content: currentTextLines.join("\n") });
      currentTextLines = [];
    }
  };

  const flushTable = () => {
    if (currentTable) {
      blocks.push({ type: "table", rows: currentTable });
      currentTable = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isTableLine = line.includes("|") && line.split("|").length > 2; // At least 2 pipes to be a table row

    if (isTableLine) {
      flushText();
      const cells = line.split("|").map((cell) => cell.trim());
      if (!currentTable) {
        currentTable = [];
      }
      currentTable.push(cells);
    } else {
      flushTable();
      currentTextLines.push(line);
    }
  }
  flushText();
  flushTable();

  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, idx) => {
        if (block.type === "text") {
          return (
            <div key={idx} className="whitespace-pre-line leading-relaxed">
              {block.content.split("\n\n").map((para, pIdx) => {
                if (!para.trim()) return null;
                return (
                  <p key={pIdx} className="mt-2 first:mt-0">
                    {para}
                  </p>
                );
              })}
            </div>
          );
        } else {
          const [header, ...rows] = block.rows;
          return (
            <div
              key={idx}
              className="my-4 overflow-x-auto rounded-xl border border-border shadow-sm"
            >
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-muted/60 border-b border-border">
                    {header.map((cell, cIdx) => (
                      <th
                        key={cIdx}
                        className="px-4 py-3 font-semibold text-foreground border-r border-border last:border-r-0"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-muted/20 transition-colors odd:bg-card even:bg-muted/10"
                    >
                      {row.map((cell, cIdx) => {
                        const cellUpper = cell.toUpperCase();
                        const isOui = cellUpper === "OUI" || cellUpper === "YES";
                        const isNon = cellUpper === "NON" || cellUpper === "NO";
                        return (
                          <td
                            key={cIdx}
                            className={`px-4 py-3 border-r border-border last:border-r-0 ${
                              isOui
                                ? "font-semibold text-emerald-600 dark:text-emerald-400"
                                : isNon
                                  ? "font-semibold text-rose-500 dark:text-rose-400"
                                  : "text-foreground"
                            }`}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      })}
    </div>
  );
}
