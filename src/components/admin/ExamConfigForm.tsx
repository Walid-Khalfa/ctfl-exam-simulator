import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { t } from "@/lib/i18n";

export interface ExamConfig {
  title: string;
  description: string;
  language: string;
  duration_minutes: number;
  total_questions: number;
  passing_threshold: number;
  points_per_question: number;
  attempts_allowed: number | null;
}

const defaults: ExamConfig = {
  title: "",
  description: "",
  language: "fr",
  duration_minutes: 60,
  total_questions: 40,
  passing_threshold: 65,
  points_per_question: 1,
  attempts_allowed: null,
};

export function ExamConfigForm({
  initial,
  onSubmit,
  submitting,
  submitLabel,
}: {
  initial?: Partial<ExamConfig>;
  onSubmit: (config: ExamConfig) => void;
  submitting?: boolean;
  submitLabel: string;
}) {
  const [form, setForm] = useState<ExamConfig>({ ...defaults, ...initial });

  const set = <K extends keyof ExamConfig>(key: K, value: ExamConfig[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <div>
        <Label htmlFor="title">{t.admin.exam.title}</Label>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => set("title", e.target.value)}
          required
          maxLength={200}
        />
      </div>
      <div>
        <Label htmlFor="desc">{t.admin.exam.description}</Label>
        <Textarea
          id="desc"
          value={form.description}
          onChange={(e) => set("description", e.target.value)}
          maxLength={2000}
          rows={2}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="lang">{t.admin.exam.language}</Label>
          <Input
            id="lang"
            value={form.language}
            onChange={(e) => set("language", e.target.value)}
            maxLength={10}
          />
        </div>
        <div>
          <Label htmlFor="dur">{t.admin.exam.duration}</Label>
          <Input
            id="dur"
            type="number"
            min={1}
            max={600}
            value={form.duration_minutes}
            onChange={(e) => set("duration_minutes", Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="tq">{t.admin.exam.totalQuestions}</Label>
          <Input
            id="tq"
            type="number"
            min={1}
            max={200}
            value={form.total_questions}
            onChange={(e) => set("total_questions", Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="th">{t.admin.exam.threshold}</Label>
          <Input
            id="th"
            type="number"
            min={0}
            max={100}
            value={form.passing_threshold}
            onChange={(e) => set("passing_threshold", Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="pp">{t.admin.exam.pointsPer}</Label>
          <Input
            id="pp"
            type="number"
            min={1}
            max={100}
            value={form.points_per_question}
            onChange={(e) => set("points_per_question", Number(e.target.value))}
          />
        </div>
        <div>
          <Label htmlFor="at">{t.admin.exam.attempts}</Label>
          <Input
            id="at"
            type="number"
            min={1}
            max={100}
            placeholder={t.admin.exam.attemptsHint}
            value={form.attempts_allowed ?? ""}
            onChange={(e) =>
              set("attempts_allowed", e.target.value === "" ? null : Number(e.target.value))
            }
          />
        </div>
      </div>
      <Button type="submit" disabled={submitting} className="w-full gap-2">
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitLabel}
      </Button>
    </form>
  );
}
