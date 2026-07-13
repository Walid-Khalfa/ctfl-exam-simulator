import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Trash2, Plus } from "lucide-react";
import { upsertQuestion } from "@/lib/admin.functions";
import { t } from "@/lib/i18n";
import { toast } from "sonner";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

export interface EditableQuestion {
  id?: string;
  position: number;
  text: string;
  type: "single" | "multi";
  answers_required: number;
  points: number;
  chapter: number;
  k_level: "K1" | "K2" | "K3";
  learning_objective: string;
  source_page: number | null;
  validation_status: "draft" | "validated";
  explanation: string;
  options: { id?: string; label: string; text: string }[];
  correct_option_ids?: string[];
  option_rationales?: Record<string, string>;
  // labels of currently-correct options (derived from ids)
  correct_labels?: string[];
}

export function QuestionEditor({
  examId,
  question,
  nextPosition,
  onSaved,
  onCancel,
  onSourcePageChange,
}: {
  examId: string;
  question: EditableQuestion | null;
  nextPosition: number;
  onSaved: () => void;
  onCancel: () => void;
  onSourcePageChange?: (page: number | null) => void;
}) {
  const [form, setForm] = useState<EditableQuestion>(
    question ?? {
      position: nextPosition,
      text: "",
      type: "single",
      answers_required: 1,
      points: 1,
      chapter: 1,
      k_level: "K1",
      learning_objective: "",
      source_page: null,
      validation_status: "draft",
      explanation: "",
      options: [
        { label: "A", text: "" },
        { label: "B", text: "" },
        { label: "C", text: "" },
        { label: "D", text: "" },
      ],
    },
  );
  // correct labels + rationales by label for editing
  const initialCorrect =
    question?.correct_labels ??
    (question?.correct_option_ids && question.options
      ? question.options
          .filter((o) => o.id && question.correct_option_ids!.includes(o.id))
          .map((o) => o.label)
      : []);
  const initialRationales: Record<string, string> = {};
  if (question?.option_rationales && question.options) {
    for (const o of question.options) {
      if (o.id && question.option_rationales[o.id])
        initialRationales[o.label] = question.option_rationales[o.id];
    }
  }
  const [correct, setCorrect] = useState<string[]>(initialCorrect);
  const [rationales, setRationales] = useState<Record<string, string>>(initialRationales);
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof EditableQuestion>(k: K, v: EditableQuestion[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const setOptionText = (i: number, text: string) =>
    setForm((f) => ({
      ...f,
      options: f.options.map((o, idx) => (idx === i ? { ...o, text } : o)),
    }));

  const addOption = () => {
    if (form.options.length >= 5) return;
    setForm((f) => ({
      ...f,
      options: [...f.options, { label: OPTION_LABELS[f.options.length], text: "" }],
    }));
  };
  const removeOption = (i: number) => {
    const label = form.options[i].label;
    setForm((f) => ({
      ...f,
      options: f.options
        .filter((_, idx) => idx !== i)
        .map((o, idx) => ({ ...o, label: OPTION_LABELS[idx] })),
    }));
    setCorrect((c) => c.filter((l) => l !== label));
  };

  const toggleCorrect = (label: string) => {
    if (form.type === "single") {
      setCorrect([label]);
    } else {
      setCorrect((c) => (c.includes(label) ? c.filter((l) => l !== label) : [...c, label]));
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await upsertQuestion({
        data: {
          id: form.id,
          examId,
          position: form.position,
          text: form.text,
          type: form.type,
          answers_required: form.type === "single" ? 1 : form.answers_required,
          points: form.points,
          chapter: form.chapter,
          k_level: form.k_level,
          learning_objective: form.learning_objective,
          source_page: form.source_page,
          validation_status: form.validation_status,
          explanation: form.explanation,
          options: form.options,
          correct_labels: correct,
          option_rationales: rationales,
        },
      });
      toast.success("Question enregistrée");
      onSaved();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erreur");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label>{t.admin.question.number}</Label>
          <Input
            type="number"
            min={1}
            value={form.position}
            onChange={(e) => set("position", Number(e.target.value))}
          />
        </div>
        <div>
          <Label>{t.admin.question.points}</Label>
          <Input
            type="number"
            min={1}
            value={form.points}
            onChange={(e) => set("points", Number(e.target.value))}
          />
        </div>
        <div>
          <Label>{t.admin.question.sourcePage}</Label>
          <Input
            type="number"
            value={form.source_page ?? ""}
            onChange={(e) => {
              const v = e.target.value === "" ? null : Number(e.target.value);
              set("source_page", v);
              onSourcePageChange?.(v);
            }}
          />
        </div>
      </div>

      <div>
        <Label>{t.admin.question.text}</Label>
        <Textarea rows={3} value={form.text} onChange={(e) => set("text", e.target.value)} />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div>
          <Label>{t.admin.question.type}</Label>
          <Select value={form.type} onValueChange={(v) => set("type", v as "single" | "multi")}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">{t.admin.question.single}</SelectItem>
              <SelectItem value="multi">{t.admin.question.multi}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {form.type === "multi" && (
          <div>
            <Label>{t.admin.question.answersRequired}</Label>
            <Input
              type="number"
              min={1}
              max={5}
              value={form.answers_required}
              onChange={(e) => set("answers_required", Number(e.target.value))}
            />
          </div>
        )}
        <div>
          <Label>{t.admin.question.chapter}</Label>
          <Select value={String(form.chapter)} onValueChange={(v) => set("chapter", Number(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((c) => (
                <SelectItem key={c} value={String(c)}>
                  {c} — {t.chapters[c]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>{t.admin.question.kLevel}</Label>
          <Select
            value={form.k_level}
            onValueChange={(v) => set("k_level", v as "K1" | "K2" | "K3")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["K1", "K2", "K3"].map((k) => (
                <SelectItem key={k} value={k}>
                  {k}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>{t.admin.question.objective}</Label>
        <Input
          value={form.learning_objective}
          onChange={(e) => set("learning_objective", e.target.value)}
          placeholder="FL-1.1.1"
        />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <Label>{t.admin.question.options}</Label>
          {form.options.length < 5 && (
            <Button type="button" variant="outline" size="sm" onClick={addOption} className="gap-1">
              <Plus className="h-3.5 w-3.5" /> {OPTION_LABELS[form.options.length]}
            </Button>
          )}
        </div>
        <div className="space-y-2">
          {form.options.map((o, i) => (
            <div key={o.label} className="space-y-1 rounded-lg border p-2">
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1.5 text-sm font-medium">
                  <Checkbox
                    checked={correct.includes(o.label)}
                    onCheckedChange={() => toggleCorrect(o.label)}
                  />
                  {o.label}
                </label>
                <Input
                  value={o.text}
                  onChange={(e) => setOptionText(i, e.target.value)}
                  placeholder={`Option ${o.label}`}
                />
                {form.options.length > 2 && (
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeOption(i)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
              <Input
                value={rationales[o.label] ?? ""}
                onChange={(e) => setRationales((r) => ({ ...r, [o.label]: e.target.value }))}
                placeholder={t.admin.question.optionRationale}
                className="text-xs"
              />
            </div>
          ))}
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {t.admin.question.correct} : {correct.join(", ") || "—"}
        </p>
      </div>

      <div>
        <Label>{t.admin.question.explanation}</Label>
        <Textarea
          rows={3}
          value={form.explanation}
          onChange={(e) => set("explanation", e.target.value)}
        />
      </div>

      <div>
        <Label>{t.admin.question.validationStatus}</Label>
        <Select
          value={form.validation_status}
          onValueChange={(v) => set("validation_status", v as "draft" | "validated")}
        >
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">{t.admin.question.markDraft}</SelectItem>
            <SelectItem value="validated">{t.admin.question.markValidated}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        <Button onClick={handleSave} disabled={saving} className="gap-2">
          {saving && <Loader2 className="h-4 w-4 animate-spin" />}
          {t.admin.question.save}
        </Button>
        <Button variant="outline" onClick={onCancel}>
          {t.common.cancel}
        </Button>
      </div>
    </div>
  );
}
