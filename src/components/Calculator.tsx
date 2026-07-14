import { useState, useEffect } from "react";
import { X, Delete, History, RotateCcw } from "lucide-react";

interface CalculatorProps {
  onClose: () => void;
}

export function Calculator({ onClose }: CalculatorProps) {
  const [display, setDisplay] = useState<string>("0");
  const [expression, setExpression] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [shouldReset, setShouldReset] = useState<boolean>(false);

  // Handle keyboard inputs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (/[0-9]/.test(key)) {
        handleNumber(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        handleOperator(key);
      } else if (key === "." || key === ",") {
        handleDecimal();
      } else if (key === "Enter" || key === "=") {
        e.preventDefault();
        handleEvaluate();
      } else if (key === "Backspace") {
        handleBackspace();
      } else if (key === "Escape" || key === "c" || key === "C") {
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [display, expression, shouldReset]);

  const handleNumber = (num: string) => {
    if (display === "0" || shouldReset) {
      setDisplay(num);
      setShouldReset(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleDecimal = () => {
    if (shouldReset) {
      setDisplay("0.");
      setShouldReset(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (op: string) => {
    setShouldReset(false);
    // Use the evaluated display if we just computed something
    const currentVal = display;

    // Convert visually appealing operators back to code equivalents if needed
    const lastChar = expression.trim().slice(-1);
    const isLastCharOperator = ["+", "-", "*", "/"].includes(lastChar);

    if (isLastCharOperator && display === "0") {
      // Just change operator
      setExpression(expression.trim().slice(0, -1) + op + " ");
    } else {
      setExpression(expression + " " + currentVal + " " + op);
      setDisplay("0");
    }
  };

  const handleBackspace = () => {
    if (shouldReset) {
      handleClear();
      return;
    }
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setExpression("");
    setShouldReset(false);
  };

  const safeEval = (expr: string): number => {
    // Sanitize and safely compute the math expression without using dangerous eval() directly on raw user strings.
    // Since we control inputs strictly via regex or state, we can tokenise.
    const sanitized = expr.replace(/[^0-9+\-*/().\s]/g, "");
    try {
      // Safe execution of mathematical expressions
      const fn = new Function(`return (${sanitized})`);
      const result = fn();
      if (typeof result === "number" && !isNaN(result) && isFinite(result)) {
        return result;
      }
      throw new Error("Invalid result");
    } catch {
      throw new Error("Error");
    }
  };

  const handleEvaluate = () => {
    if (!expression && !shouldReset) return;

    const fullExpression = expression + " " + display;
    try {
      const result = safeEval(fullExpression);

      // Format result nicely
      const formattedResult = Number(result.toFixed(8)).toString(); // Removes trailing zeros, max 8 decimal places

      const historyItem = `${fullExpression.trim()} = ${formattedResult}`;
      setHistory((prev) => [historyItem, ...prev].slice(0, 10)); // Keep last 10 entries

      setDisplay(formattedResult);
      setExpression("");
      setShouldReset(true);
    } catch {
      setDisplay("Error");
      setExpression("");
      setShouldReset(true);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-card text-card-foreground">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-2.5 bg-muted/40">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-tight">Calculatrice</span>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_150px] divide-y md:divide-y-0 md:divide-x flex-1 overflow-hidden h-[360px] md:h-[280px]">
        {/* Calculator Body */}
        <div className="flex flex-col p-4 justify-between h-full">
          {/* Display screen */}
          <div className="rounded-xl bg-muted/50 p-3 text-right font-mono select-all mb-3 border border-border/50">
            <div className="h-5 text-xs text-muted-foreground truncate" title={expression}>
              {expression || "\u00A0"}
            </div>
            <div className="text-xl md:text-2xl font-bold tracking-tight text-foreground truncate mt-1">
              {display}
            </div>
          </div>

          {/* Grid buttons */}
          <div className="grid grid-cols-4 gap-1.5">
            <button
              onClick={handleClear}
              className="h-10 md:h-9 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 text-xs font-semibold transition-colors"
            >
              C
            </button>
            <button
              onClick={() => handleOperator("/")}
              className="h-10 md:h-9 rounded-lg bg-muted text-foreground hover:bg-muted/80 text-sm font-semibold transition-colors"
            >
              ÷
            </button>
            <button
              onClick={() => handleOperator("*")}
              className="h-10 md:h-9 rounded-lg bg-muted text-foreground hover:bg-muted/80 text-sm font-semibold transition-colors"
            >
              ×
            </button>
            <button
              onClick={handleBackspace}
              className="h-10 md:h-9 rounded-lg bg-muted text-foreground hover:bg-muted/80 flex items-center justify-center transition-colors"
              aria-label="Retour"
            >
              <Delete className="h-4 w-4 text-muted-foreground" />
            </button>

            {[7, 8, 9].map((n) => (
              <button
                key={n}
                onClick={() => handleNumber(n.toString())}
                className="h-10 md:h-9 rounded-lg bg-background border border-border hover:bg-muted/50 text-sm font-medium transition-colors"
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => handleOperator("-")}
              className="h-10 md:h-9 rounded-lg bg-muted text-foreground hover:bg-muted/80 text-sm font-semibold transition-colors"
            >
              -
            </button>

            {[4, 5, 6].map((n) => (
              <button
                key={n}
                onClick={() => handleNumber(n.toString())}
                className="h-10 md:h-9 rounded-lg bg-background border border-border hover:bg-muted/50 text-sm font-medium transition-colors"
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => handleOperator("+")}
              className="h-10 md:h-9 rounded-lg bg-muted text-foreground hover:bg-muted/80 text-sm font-semibold transition-colors"
            >
              +
            </button>

            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => handleNumber(n.toString())}
                className="h-10 md:h-9 rounded-lg bg-background border border-border hover:bg-muted/50 text-sm font-medium transition-colors"
              >
                {n}
              </button>
            ))}
            <button
              onClick={handleEvaluate}
              className="row-span-2 h-[86px] md:h-[78px] rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold transition-colors flex items-center justify-center"
            >
              =
            </button>

            <button
              onClick={() => handleNumber("0")}
              className="col-span-2 h-10 md:h-9 rounded-lg bg-background border border-border hover:bg-muted/50 text-sm font-medium transition-colors"
            >
              0
            </button>
            <button
              onClick={handleDecimal}
              className="h-10 md:h-9 rounded-lg bg-background border border-border hover:bg-muted/50 text-sm font-medium transition-colors"
            >
              .
            </button>
          </div>
        </div>

        {/* Calculator History Sidebar */}
        <div className="flex flex-col p-3 h-full overflow-hidden bg-muted/10">
          <div className="flex items-center justify-between mb-2 pb-1 border-b">
            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
              <History className="h-3 w-3" /> Historique
            </span>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="text-[10px] text-muted-foreground hover:text-destructive flex items-center gap-0.5"
                title="Effacer l'historique"
              >
                <RotateCcw className="h-2.5 w-2.5" />
              </button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 text-right scrollbar-thin">
            {history.length === 0 ? (
              <div className="text-[11px] text-muted-foreground/60 text-center py-8">
                Aucun calcul
              </div>
            ) : (
              history.map((item, index) => {
                const parts = item.split("=");
                return (
                  <div
                    key={index}
                    onClick={() => {
                      const resVal = parts[1]?.trim();
                      if (resVal && resVal !== "Error") {
                        setDisplay(resVal);
                        setShouldReset(true);
                      }
                    }}
                    className="group cursor-pointer rounded p-1 hover:bg-muted text-[10px] transition-colors leading-normal"
                  >
                    <div className="text-muted-foreground/80 group-hover:text-foreground truncate font-mono">
                      {parts[0]}
                    </div>
                    <div className="font-semibold text-foreground font-mono">= {parts[1]}</div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
