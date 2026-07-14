import { useState, useEffect, useRef } from "react";
import { X, Copy, Download, Trash2, Check, FileText } from "lucide-react";
import { toast } from "sonner";

interface NotepadProps {
  attemptId?: string;
  onClose: () => void;
}

export function Notepad({ attemptId, onClose }: NotepadProps) {
  const storageKey = attemptId ? `exam-notes-${attemptId}` : "exam-notes-general";
  const [notes, setNotes] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load notes on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setNotes(saved);
    }
  }, [storageKey]);

  // Handle auto-saving to localStorage with a debounce
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNotes(value);
    setIsSaving(true);

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      localStorage.setItem(storageKey, value);
      setIsSaving(false);
    }, 800);
  };

  // Clean up timer
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(notes);
      setIsCopied(true);
      toast.success("Notes copiées dans le presse-papiers !");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Échec de la copie.");
    }
  };

  const handleDownload = () => {
    if (!notes.trim()) {
      toast.error("Le bloc-notes est vide !");
      return;
    }
    const blob = new Blob([notes], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `notes-examen-${attemptId || "simulation"}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Notes téléchargées !");
  };

  const handleClear = () => {
    if (!notes.trim()) return;
    if (confirm("Voulez-vous vraiment effacer toutes vos notes ?")) {
      setNotes("");
      localStorage.setItem(storageKey, "");
      toast.success("Notes effacées !");
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-card text-card-foreground">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-2.5 bg-muted/40">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold tracking-tight">Bloc-notes</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-muted-foreground/70 select-none">
            {isSaving ? "Enregistrement..." : "Enregistré localement"}
          </span>
          <button
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Editor & Actions */}
      <div className="flex flex-col flex-1 p-3 gap-2 overflow-hidden">
        <textarea
          value={notes}
          onChange={handleNotesChange}
          placeholder="Saisissez vos notes, calculs intermédiaires ou remarques ici... Elles sont enregistrées automatiquement."
          className="flex-1 w-full min-h-[140px] resize-none rounded-xl border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary font-sans leading-relaxed scrollbar-thin"
        />

        {/* Action buttons */}
        <div className="flex items-center justify-between border-t pt-2 mt-1">
          <button
            onClick={handleClear}
            disabled={!notes.trim()}
            className="rounded-lg p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-muted-foreground transition-colors"
            title="Effacer tout"
          >
            <Trash2 className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium hover:bg-muted transition-colors text-foreground"
              title="Copier les notes"
            >
              {isCopied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  <span>Copié</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Copier</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-lg bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              title="Télécharger en fichier .txt"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Télécharger</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
