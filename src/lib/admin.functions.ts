import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  computeExamWarnings,
  hasBlockingErrors,
  computePublicationChecklist,
  checklistPasses,
} from "@/lib/exam-validation";
import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

type Ctx = { supabase: SupabaseClient<Database>; userId: string };

async function assertAdmin(context: Ctx) {
  const { data, error } = await context.supabase.rpc("has_role", {
    _user_id: context.userId,
    _role: "admin",
  });
  if (error) throw error;
  if (data !== true) throw new Error("Accès réservé aux instructeurs");
}

async function actorName(context: Ctx): Promise<string> {
  const { data } = await context.supabase
    .from("profiles")
    .select("full_name")
    .eq("id", context.userId)
    .maybeSingle();
  return data?.full_name || "—";
}

// Records a sensitive admin action in the audit log (visible in the admin journal).
async function writeAudit(
  supabaseAny: SupabaseClient<Database>,
  entry: {
    actor_id: string;
    actor_name: string;
    action: string;
    target_type?: string;
    target_id?: string | null;
    details?: Record<string, unknown>;
  },
) {
  await supabaseAny.from("audit_log").insert({
    actor_id: entry.actor_id,
    actor_name: entry.actor_name,
    action: entry.action,
    target_type: entry.target_type ?? null,
    target_id: entry.target_id ?? null,
    details: entry.details ?? {},
  });
}

// ---------- Bootstrap: first-admin claim ----------
// Grants the admin role only when NO admin exists yet (the instructor sets up
// the platform), or when the caller is already an admin. Public users can never
// self-assign admin once a first admin is in place.
export const claimInstructorRole = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: admins, error } = await supabaseAdmin
      .from("user_roles")
      .select("user_id")
      .eq("role", "admin")
      .limit(1);
    if (error) throw error;

    const callerIsAdmin = (admins ?? []).some((a) => a.user_id === context.userId);
    if ((admins?.length ?? 0) > 0 && !callerIsAdmin) {
      throw new Error("Un instructeur existe déjà. Contactez-le pour obtenir l'accès.");
    }

    await supabaseAdmin
      .from("user_roles")
      .upsert({ user_id: context.userId, role: "admin" }, { onConflict: "user_id,role" });

    // Audit: record the first-admin claim so it is visible in the journal.
    const name = await actorName(context);
    await writeAudit(supabaseAdmin, {
      actor_id: context.userId,
      actor_name: name,
      action: "claim_admin",
      target_type: "user",
      target_id: context.userId,
    });

    return { ok: true };
  });

// ---------- Audit log listing (admin) ----------
export const listAuditLog = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { data } = await context.supabase
      .from("audit_log")
      .select("id, actor_name, action, target_type, target_id, details, created_at")
      .order("created_at", { ascending: false })
      .limit(200);
    return data ?? [];
  });

// Whether a first-admin bootstrap is still available (no admin exists yet).
export const bootstrapAvailable = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    return { available: false };
  });

// ---------- Admin dashboard stats ----------
export const adminStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabase } = context;

    const { count: studentCount } = await supabase
      .from("user_roles")
      .select("user_id", { count: "exact", head: true })
      .eq("role", "student");

    const { data: exams } = await supabase.from("exams").select("id, title, status");
    const published = (exams ?? []).filter((e) => e.status === "published").length;
    const drafts = (exams ?? []).filter((e) => e.status === "draft").length;

    const { data: attempts } = await supabase
      .from("attempts")
      .select("id, exam_id, status, percentage, passed, time_used_seconds")
      .neq("status", "in_progress");

    const completed = (attempts ?? []).length;
    const avgScore =
      completed > 0
        ? Math.round(
            ((attempts ?? []).reduce((s: number, a) => s + (a.percentage ?? 0), 0) / completed) *
              10,
          ) / 10
        : 0;
    const passRate =
      completed > 0
        ? Math.round(((attempts ?? []).filter((a) => a.passed).length / completed) * 1000) / 10
        : 0;
    const avgTime =
      completed > 0
        ? Math.round(
            (attempts ?? []).reduce((s: number, a) => s + (a.time_used_seconds ?? 0), 0) /
              completed,
          )
        : 0;

    // Performance by exam
    const examTitle = new Map((exams ?? []).map((e) => [e.id, e.title]));
    const byExamMap = new Map<
      string,
      { title: string; count: number; sum: number; passed: number }
    >();
    for (const a of attempts ?? []) {
      const cur = byExamMap.get(a.exam_id) ?? {
        title: (examTitle.get(a.exam_id) as string) ?? "—",
        count: 0,
        sum: 0,
        passed: 0,
      };
      cur.count++;
      cur.sum += a.percentage ?? 0;
      if (a.passed) cur.passed++;
      byExamMap.set(a.exam_id, cur);
    }
    const byExam = [...byExamMap.entries()].map(([id, v]) => ({
      examId: id,
      title: v.title,
      attempts: v.count,
      avgScore: v.count > 0 ? Math.round((v.sum / v.count) * 10) / 10 : 0,
      passRate: v.count > 0 ? Math.round((v.passed / v.count) * 1000) / 10 : 0,
    }));

    // Performance by chapter + most missed questions
    const attemptIds = (attempts ?? []).map((a) => a.id);
    let byChapter: { chapter: number; correct: number; total: number }[] = [];
    let mostMissed: { questionId: string; text: string; missRate: number; attempts: number }[] = [];
    if (attemptIds.length > 0) {
      const { data: ans } = await supabase
        .from("attempt_answers")
        .select("question_id, is_correct")
        .in("attempt_id", attemptIds);
      const qIds = [...new Set((ans ?? []).map((a) => a.question_id))];
      const { data: qs } = await supabase
        .from("questions")
        .select("id, chapter, text")
        .in("id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
      const qMeta = new Map((qs ?? []).map((q) => [q.id, q]));

      const chap: Record<number, { correct: number; total: number }> = {};
      const perQ: Record<string, { correct: number; total: number }> = {};
      for (const a of ans ?? []) {
        const meta = qMeta.get(a.question_id);
        const ch = meta?.chapter ?? 0;
        chap[ch] ??= { correct: 0, total: 0 };
        chap[ch].total++;
        if (a.is_correct) chap[ch].correct++;
        perQ[a.question_id] ??= { correct: 0, total: 0 };
        perQ[a.question_id].total++;
        if (a.is_correct) perQ[a.question_id].correct++;
      }
      byChapter = Object.entries(chap)
        .map(([c, v]) => ({ chapter: Number(c), correct: v.correct, total: v.total }))
        .sort((a, b) => a.chapter - b.chapter);
      mostMissed = Object.entries(perQ)
        .map(([id, v]) => ({
          questionId: id,
          text: (qMeta.get(id)?.text ?? "").slice(0, 120),
          missRate: v.total > 0 ? Math.round(((v.total - v.correct) / v.total) * 1000) / 10 : 0,
          attempts: v.total,
        }))
        .filter((q) => q.attempts >= 1)
        .sort((a, b) => b.missRate - a.missRate)
        .slice(0, 8);
    }

    // Recent attempts
    const { data: recent } = await supabase
      .from("attempts")
      .select("id, user_id, exam_id, percentage, passed, submitted_at, status")
      .neq("status", "in_progress")
      .order("submitted_at", { ascending: false })
      .limit(10);
    const userIds = [...new Set((recent ?? []).map((a) => a.user_id))];
    const { data: profs } = await supabase
      .from("profiles")
      .select("id, full_name")
      .in("id", userIds.length ? userIds : ["00000000-0000-0000-0000-000000000000"]);
    const nameMap = new Map((profs ?? []).map((p) => [p.id, p.full_name]));
    const recentAttempts = (recent ?? []).map((a) => ({
      id: a.id,
      studentName: (nameMap.get(a.user_id) as string) || "—",
      examTitle: (examTitle.get(a.exam_id) as string) ?? "—",
      percentage: a.percentage,
      passed: a.passed,
      submittedAt: a.submitted_at,
    }));

    return {
      studentCount: studentCount ?? 0,
      publishedExams: published,
      draftExams: drafts,
      completedAttempts: completed,
      avgScore,
      passRate,
      avgTimeSeconds: avgTime,
      byExam,
      byChapter,
      mostMissed,
      recentAttempts,
    };
  });

// ---------- Exam list ----------
export const listExamsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabase } = context;
    const { data: exams } = await supabase
      .from("exams")
      .select(
        "id, title, language, duration_minutes, total_questions, passing_threshold, attempts_allowed, status, updated_at",
      )
      .order("updated_at", { ascending: false });
    const ids = (exams ?? []).map((e) => e.id);
    const { data: qs } = await supabase
      .from("questions")
      .select("id, exam_id, validation_status")
      .in("exam_id", ids.length ? ids : ["00000000-0000-0000-0000-000000000000"]);
    const counts = new Map<string, { total: number; validated: number }>();
    for (const q of qs ?? []) {
      const c = counts.get(q.exam_id) ?? { total: 0, validated: 0 };
      c.total++;
      if (q.validation_status === "validated") c.validated++;
      counts.set(q.exam_id, c);
    }
    return (exams ?? []).map((e) => ({
      ...e,
      questionCount: counts.get(e.id)?.total ?? 0,
      validatedCount: counts.get(e.id)?.validated ?? 0,
    }));
  });

const examConfigSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional().default(""),
  language: z.string().min(2).max(10).default("fr"),
  duration_minutes: z.number().int().min(1).max(600),
  total_questions: z.number().int().min(1).max(200),
  passing_threshold: z.number().int().min(0).max(100),
  points_per_question: z.number().int().min(1).max(100).default(1),
  attempts_allowed: z.number().int().min(1).max(100).nullable().optional(),
});

export const createExam = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: unknown) => examConfigSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { data: created, error } = await context.supabase
      .from("exams")
      .insert({ ...data, status: "draft", created_by: context.userId })
      .select("id")
      .single();
    if (error) throw error;
    return { id: created.id };
  });

export const updateExam = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: unknown) => examConfigSchema.extend({ id: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { id, ...rest } = data;
    const { error } = await context.supabase.from("exams").update(rest).eq("id", id);
    if (error) throw error;
    return { ok: true };
  });

export const deleteExam = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { id: string }) => z.object({ id: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase } = context;

    // Block hard-delete when attempts exist; archive instead to preserve history.
    const { count } = await supabase
      .from("attempts")
      .select("id", { count: "exact", head: true })
      .eq("exam_id", data.id);
    if ((count ?? 0) > 0) {
      const { error: aErr } = await supabase
        .from("exams")
        .update({ status: "archived" })
        .eq("id", data.id);
      if (aErr) throw aErr;
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await writeAudit(supabaseAdmin, {
        actor_id: context.userId,
        actor_name: await actorName(context),
        action: "archive_exam",
        target_type: "exam",
        target_id: data.id,
        details: { reason: "delete_with_attempts", attempts: count },
      });
      return { ok: true, archived: true };
    }

    const { error } = await supabase.from("exams").delete().eq("id", data.id);
    if (error) throw error;
    return { ok: true, archived: false };
  });

export const setExamStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { id: string; status: "draft" | "published" | "archived" }) =>
    z.object({ id: z.string(), status: z.enum(["draft", "published", "archived"]) }).parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    if (data.status === "published") {
      const warnings = await examWarnings(context, data.id);
      if (hasBlockingErrors(warnings)) {
        throw new Error(
          "Publication impossible : corrigez les erreurs bloquantes avant de publier.",
        );
      }
      const checklist = await examChecklist(context, data.id);
      if (!checklistPasses(checklist)) {
        throw new Error(
          "Publication impossible : la liste de contrôle n'est pas entièrement validée.",
        );
      }
    }
    const { error } = await context.supabase
      .from("exams")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw error;

    const auditAction =
      data.status === "published"
        ? "publish_exam"
        : data.status === "archived"
          ? "archive_exam"
          : "unpublish_exam";
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await writeAudit(supabaseAdmin, {
      actor_id: context.userId,
      actor_name: await actorName(context),
      action: auditAction,
      target_type: "exam",
      target_id: data.id,
    });
    return { ok: true };
  });

export const duplicateExam = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { id: string }) => z.object({ id: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase, userId } = context;
    const { data: examRow } = await supabase.from("exams").select("*").eq("id", data.id).single();
    const exam = examRow;
    if (!exam) throw new Error("Examen introuvable");
    const { id, created_at, updated_at, ...examRest } = exam;
    const { data: newExamRow, error: eErr } = await supabase
      .from("exams")
      .insert({ ...examRest, title: `${exam.title} (copie)`, status: "draft", created_by: userId })
      .select("id")
      .single();
    if (eErr) throw eErr;
    const newExam = newExamRow;

    const { data: questions } = await supabase.from("questions").select("*").eq("exam_id", data.id);
    for (const q of questions ?? []) {
      const { data: opts } = await supabase
        .from("question_options")
        .select("*")
        .eq("question_id", q.id);
      const { data: solRow } = await supabase
        .from("question_solutions")
        .select("*")
        .eq("question_id", q.id)
        .maybeSingle();
      const sol = solRow;
      const { id: qid, created_at: qc, updated_at: qu, exam_id, source_document_id, ...qRest } = q;
      const { data: newQRow } = await supabase
        .from("questions")
        .insert({ ...qRest, exam_id: newExam.id })
        .select("id")
        .single();
      const newQ = newQRow;
      const labelToNewId = new Map<string, string>();
      for (const o of opts ?? []) {
        const { id: oid, created_at: oc, question_id, ...oRest } = o;
        const { data: newORow } = await supabase
          .from("question_options")
          .insert({ ...oRest, question_id: newQ.id })
          .select("id")
          .single();
        const newO = newORow;
        labelToNewId.set(o.label, newO.id);
        // map old id -> new id for solution remap
        labelToNewId.set(o.id, newO.id);
      }
      if (sol) {
        const newCorrect = (sol.correct_option_ids ?? [])
          .map((oldId: string) => labelToNewId.get(oldId))
          .filter((x: string | undefined): x is string => Boolean(x));
        await supabase.from("question_solutions").insert({
          question_id: newQ.id,
          correct_option_ids: newCorrect,
          explanation: sol.explanation ?? "",
          option_rationales: sol.option_rationales ?? {},
        });
      }
    }

    return { id: newExam.id };
  });

// ---------- Exam editor: full read incl. solutions (admin-only) ----------
export const getExamAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((d: { id: string }) => z.object({ id: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase } = context;
    const { data: examRow } = await supabase.from("exams").select("*").eq("id", data.id).single();
    const exam = examRow;
    if (!exam) throw new Error("Examen introuvable");
    const { data: questions } = await supabase
      .from("questions")
      .select("*")
      .eq("exam_id", data.id)
      .order("position", { ascending: true });
    const qIds = (questions ?? []).map((q) => q.id);
    const { data: options } = await supabase
      .from("question_options")
      .select("*")
      .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"])
      .order("position", { ascending: true });
    const { data: solutions } = await supabase
      .from("question_solutions")
      .select("*")
      .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
    const { data: documents } = await supabase
      .from("exam_documents")
      .select("id, kind, storage_path, page_count, created_at")
      .eq("exam_id", data.id)
      .order("created_at", { ascending: false });
    const solMap = new Map((solutions ?? []).map((s) => [s.question_id, s]));

    const fullQuestions = (questions ?? []).map((q) => {
      const sol = solMap.get(q.id);
      return {
        ...q,
        options: (options ?? []).filter((o) => o.question_id === q.id),
        correct_option_ids: sol?.correct_option_ids ?? [],
        explanation: sol?.explanation ?? "",
        option_rationales: sol?.option_rationales ?? {},
      };
    });

    const warnings = computeExamWarnings({
      total_questions: exam.total_questions,
      questions: fullQuestions.map((q) => ({
        position: q.position,
        text: q.text,
        type: q.type,
        answers_required: q.answers_required,
        validation_status: q.validation_status,
        options: q.options,
        correct_option_ids: q.correct_option_ids,
      })),
    });

    const checklist = computePublicationChecklist({
      duration_minutes: exam.duration_minutes,
      passing_threshold: exam.passing_threshold,
      questions: fullQuestions.map((q) => ({
        type: q.type,
        answers_required: q.answers_required,
        correct_option_ids: q.correct_option_ids,
        validation_status: q.validation_status,
      })),
    });

    // Signed URLs for source PDFs so the editor can preview them side-by-side.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const docsWithUrls = await Promise.all(
      (documents ?? []).map(async (d) => {
        const { data: signed } = await supabaseAdmin.storage
          .from("exam-documents")
          .createSignedUrl(d.storage_path, 3600);
        return { ...d, url: signed?.signedUrl ?? null };
      }),
    );

    return { exam, questions: fullQuestions, documents: docsWithUrls, warnings, checklist };
  });

// helper to compute warnings server-side for the publish gate
async function examWarnings(context: Ctx, examId: string) {
  const { supabase } = context;
  const { data: exam } = await supabase
    .from("exams")
    .select("total_questions")
    .eq("id", examId)
    .single();
  const { data: questions } = await supabase.from("questions").select("*").eq("exam_id", examId);
  const qIds = (questions ?? []).map((q) => q.id);
  const { data: options } = await supabase
    .from("question_options")
    .select("*")
    .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
  const { data: solutions } = await supabase
    .from("question_solutions")
    .select("question_id, correct_option_ids")
    .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
  const solMap = new Map((solutions ?? []).map((s) => [s.question_id, s.correct_option_ids]));
  return computeExamWarnings({
    total_questions: exam.total_questions,
    questions: (questions ?? []).map((q) => ({
      position: q.position,
      text: q.text,
      type: q.type,
      answers_required: q.answers_required,
      validation_status: q.validation_status,
      options: (options ?? []).filter((o) => o.question_id === q.id),
      correct_option_ids: solMap.get(q.id) ?? [],
    })),
  });
}

// helper to compute the publication checklist server-side for the publish gate
async function examChecklist(context: Ctx, examId: string) {
  const { supabase } = context;
  const { data: exam } = await supabase
    .from("exams")
    .select("duration_minutes, passing_threshold")
    .eq("id", examId)
    .single();
  const { data: questions } = await supabase
    .from("questions")
    .select("id, type, answers_required, validation_status")
    .eq("exam_id", examId);
  const qIds = (questions ?? []).map((q) => q.id);
  const { data: solutions } = await supabase
    .from("question_solutions")
    .select("question_id, correct_option_ids")
    .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
  const solMap = new Map((solutions ?? []).map((s) => [s.question_id, s.correct_option_ids]));
  return computePublicationChecklist({
    duration_minutes: exam.duration_minutes,
    passing_threshold: exam.passing_threshold,
    questions: (questions ?? []).map((q) => ({
      type: q.type,
      answers_required: q.answers_required,
      correct_option_ids: solMap.get(q.id) ?? [],
      validation_status: q.validation_status,
    })),
  });
}

// ---------- Question upsert (question + options + solution) ----------
const questionSchema = z.object({
  id: z.string().optional(),
  examId: z.string(),
  position: z.number().int().min(1),
  text: z.string().max(4000),
  type: z.enum(["single", "multi"]),
  answers_required: z.number().int().min(1).max(5),
  points: z.number().int().min(1).max(100),
  chapter: z.number().int().min(1).max(6),
  k_level: z.enum(["K1", "K2", "K3"]),
  learning_objective: z.string().max(200),
  source_page: z.number().int().nullable().optional(),
  source_document_id: z.string().nullable().optional(),
  validation_status: z.enum(["draft", "validated"]),
  explanation: z.string().max(4000),
  options: z
    .array(z.object({ label: z.string().min(1).max(2), text: z.string().max(1000) }))
    .min(1)
    .max(5),
  correct_labels: z.array(z.string()),
  option_rationales: z.record(z.string(), z.string()).optional().default({}),
});

export const upsertQuestion = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: unknown) => questionSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase } = context;

    const qFields = {
      exam_id: data.examId,
      position: data.position,
      text: data.text,
      type: data.type,
      answers_required: data.answers_required,
      points: data.points,
      chapter: data.chapter,
      k_level: data.k_level,
      learning_objective: data.learning_objective,
      source_page: data.source_page ?? null,
      source_document_id: data.source_document_id ?? null,
      validation_status: data.validation_status,
    };

    let questionId = data.id;
    if (questionId) {
      const { error } = await supabase.from("questions").update(qFields).eq("id", questionId);
      if (error) throw error;
    } else {
      const { data: created, error } = await supabase
        .from("questions")
        .insert(qFields)
        .select("id")
        .single();
      if (error) throw error;
      questionId = created.id;
    }

    // Replace options
    await supabase.from("question_options").delete().eq("question_id", questionId);
    const optionRows = data.options.map((o, i) => ({
      question_id: questionId,
      position: i,
      label: o.label,
      text: o.text,
    }));
    const { data: insertedOptions, error: oErr } = await supabase
      .from("question_options")
      .insert(optionRows)
      .select("id, label");
    if (oErr) throw oErr;

    const labelToId = new Map((insertedOptions ?? []).map((o) => [o.label, o.id]));
    const correctIds = data.correct_labels.map((l) => labelToId.get(l)).filter(Boolean) as string[];
    const rationalesById: Record<string, string> = {};
    for (const [label, text] of Object.entries(data.option_rationales ?? {})) {
      const id = labelToId.get(label);
      if (id) rationalesById[id] = text;
    }

    const { error: sErr } = await supabase.from("question_solutions").upsert(
      {
        question_id: questionId,
        correct_option_ids: correctIds,
        explanation: data.explanation,
        option_rationales: rationalesById,
      },
      { onConflict: "question_id" },
    );
    if (sErr) throw sErr;

    return { id: questionId };
  });

export const deleteQuestion = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { id: string }) => z.object({ id: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { error } = await context.supabase.from("questions").delete().eq("id", data.id);
    if (error) throw error;
    return { ok: true };
  });

// ---------- Documents ----------
export const recordDocument = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { examId: string; kind: "questions" | "answers"; storagePath: string }) =>
    z
      .object({
        examId: z.string(),
        kind: z.enum(["questions", "answers"]),
        storagePath: z.string().min(1),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { data: doc, error } = await context.supabase
      .from("exam_documents")
      .insert({ exam_id: data.examId, kind: data.kind, storage_path: data.storagePath })
      .select("id")
      .single();
    if (error) throw error;
    return { id: doc.id };
  });

// ---------- AI extraction into draft questions ----------
export const extractDraftQuestions = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { examId: string; questionsPath: string; answersPath?: string | null }) =>
    z
      .object({
        examId: z.string(),
        questionsPath: z.string().min(1),
        answersPath: z.string().nullable().optional(),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { runExtractionPipeline } = await import("@/lib/admin.server");
    return runExtractionPipeline(
      context.supabase,
      data.examId,
      data.questionsPath,
      data.answersPath,
    );
  });

// ---------- Reset extracted drafts and re-run extraction ----------
export const resetAndReExtract = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { examId: string }) => z.object({ examId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase } = context;

    // Only delete draft questions — validated questions and the uploaded PDFs
    // are preserved. question_options / question_solutions cascade on delete.
    const { data: drafts, error: draftErr } = await supabase
      .from("questions")
      .select("id")
      .eq("exam_id", data.examId)
      .eq("validation_status", "draft");
    if (draftErr) throw draftErr;
    const draftIds = (drafts ?? []).map((q) => q.id);
    if (draftIds.length > 0) {
      const { error: delErr } = await supabase.from("questions").delete().in("id", draftIds);
      if (delErr) throw delErr;
    }

    // Find the most recent uploaded questions + answers PDFs (preserved).
    const { data: documents } = await supabase
      .from("exam_documents")
      .select("kind, storage_path, created_at")
      .eq("exam_id", data.examId)
      .order("created_at", { ascending: false });
    const questionsDoc = (documents ?? []).find((d) => d.kind === "questions");
    const answersDoc = (documents ?? []).find((d) => d.kind === "answers");
    if (!questionsDoc) throw new Error("Aucun PDF de questions n'a été téléversé pour cet examen.");

    const { runExtractionPipeline } = await import("@/lib/admin.server");
    const result = await runExtractionPipeline(
      supabase,
      data.examId,
      questionsDoc.storage_path,
      answersDoc?.storage_path ?? null,
    );
    return { ...result, deleted: draftIds.length };
  });

// ---------- Bulk validation: validate questions with no warnings ----------
export const bulkValidateClean = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { examId: string }) => z.object({ examId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase } = context;
    const { data: examRow } = await supabase
      .from("exams")
      .select("total_questions")
      .eq("id", data.examId)
      .single();
    const { data: questions } = await supabase
      .from("questions")
      .select("*")
      .eq("exam_id", data.examId)
      .order("position", { ascending: true });
    const qIds = (questions ?? []).map((q) => q.id);
    const { data: options } = await supabase
      .from("question_options")
      .select("*")
      .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
    const { data: solutions } = await supabase
      .from("question_solutions")
      .select("question_id, correct_option_ids")
      .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
    const solMap = new Map((solutions ?? []).map((s) => [s.question_id, s.correct_option_ids]));

    // Per-question warnings: a question is "clean" when it produces no warning
    // or error other than the "unvalidated" status itself.
    const toValidate: string[] = [];
    for (const q of questions ?? []) {
      const warnings = computeExamWarnings({
        total_questions: examRow?.total_questions ?? (questions ?? []).length,
        questions: [
          {
            position: q.position,
            text: q.text,
            type: q.type,
            answers_required: q.answers_required,
            validation_status: q.validation_status,
            options: (options ?? []).filter((o) => o.question_id === q.id),
            correct_option_ids: solMap.get(q.id) ?? [],
          },
        ],
      });
      const relevant = warnings.filter(
        (w) => w.code !== "unvalidated" && w.code !== "count_mismatch",
      );
      if (relevant.length === 0 && q.validation_status !== "validated") {
        toValidate.push(q.id);
      }
    }

    if (toValidate.length > 0) {
      await supabase
        .from("questions")
        .update({ validation_status: "validated" })
        .in("id", toValidate);
    }
    return { validated: toValidate.length };
  });

// ---------- Student results monitoring ----------
export const listStudentResults = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context);
    const { supabase } = context;
    const { data: attempts } = await supabase
      .from("attempts")
      .select(
        "id, user_id, exam_id, status, score, max_score, percentage, passed, time_used_seconds, submitted_at",
      )
      .neq("status", "in_progress")
      .order("submitted_at", { ascending: false })
      .limit(500);
    const userIds = [...new Set((attempts ?? []).map((a) => a.user_id))];
    const examIds = [...new Set((attempts ?? []).map((a) => a.exam_id))];
    const { data: profs } = await supabase
      .from("profiles")
      .select("id, full_name")
      .in("id", userIds.length ? userIds : ["00000000-0000-0000-0000-000000000000"]);
    const { data: exams } = await supabase
      .from("exams")
      .select("id, title")
      .in("id", examIds.length ? examIds : ["00000000-0000-0000-0000-000000000000"]);
    const nameMap = new Map((profs ?? []).map((p) => [p.id, p.full_name]));
    const titleMap = new Map((exams ?? []).map((e) => [e.id, e.title]));
    return (attempts ?? []).map((a) => ({
      id: a.id,
      studentName: (nameMap.get(a.user_id) as string) || "—",
      examTitle: (titleMap.get(a.exam_id) as string) || "—",
      status: a.status,
      score: a.score,
      maxScore: a.max_score,
      percentage: a.percentage,
      passed: a.passed,
      timeUsedSeconds: a.time_used_seconds,
      submittedAt: a.submitted_at,
    }));
  });

// ---------- Admin: full attempt review (with solutions) ----------
export const getAttemptReviewAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((d: { attemptId: string }) => z.object({ attemptId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabase } = context;
    const { data: attemptRow } = await supabase
      .from("attempts")
      .select(
        "id, user_id, exam_id, score, max_score, percentage, passed, time_used_seconds, submitted_at, status",
      )
      .eq("id", data.attemptId)
      .single();
    const attempt = attemptRow;
    if (!attempt) throw new Error("Tentative introuvable");
    const { data: prof } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", attempt.user_id)
      .maybeSingle();
    const { data: exam } = await supabase
      .from("exams")
      .select("id, title, passing_threshold")
      .eq("id", attempt.exam_id)
      .single();
    const { data: questions } = await supabase
      .from("questions")
      .select("id, position, text, type, chapter, k_level, learning_objective")
      .eq("exam_id", attempt.exam_id)
      .order("position", { ascending: true });
    const qIds = (questions ?? []).map((q) => q.id);
    const { data: options } = await supabase
      .from("question_options")
      .select("id, question_id, label, text, position")
      .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"])
      .order("position", { ascending: true });
    const { data: solutions } = await supabase
      .from("question_solutions")
      .select("question_id, correct_option_ids, explanation")
      .in("question_id", qIds.length ? qIds : ["00000000-0000-0000-0000-000000000000"]);
    const { data: answers } = await supabase
      .from("attempt_answers")
      .select("question_id, selected_option_ids, is_correct")
      .eq("attempt_id", data.attemptId);
    const solMap = new Map((solutions ?? []).map((s) => [s.question_id, s]));
    const ansMap = new Map((answers ?? []).map((a) => [a.question_id, a]));

    // chapter breakdown
    const chap: Record<number, { correct: number; total: number }> = {};
    for (const q of questions ?? []) {
      const a = ansMap.get(q.id);
      chap[q.chapter] ??= { correct: 0, total: 0 };
      chap[q.chapter].total++;
      if (a?.is_correct) chap[q.chapter].correct++;
    }

    return {
      attempt,
      studentName: prof?.full_name || "—",
      exam,
      byChapter: Object.entries(chap)
        .map(([c, v]) => ({ chapter: Number(c), ...v }))
        .sort((a, b) => a.chapter - b.chapter),
      questions: (questions ?? []).map((q) => {
        const sol = solMap.get(q.id);
        const ans = ansMap.get(q.id);
        return {
          ...q,
          options: (options ?? []).filter((o) => o.question_id === q.id),
          correct_option_ids: sol?.correct_option_ids ?? [],
          explanation: sol?.explanation ?? "",
          selected_option_ids: ans?.selected_option_ids ?? [],
          is_correct: ans?.is_correct ?? false,
        };
      }),
    };
  });

// ---------- Signed URL for uploaded document / asset (admin preview) ----------
export const getDocumentUrl = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { bucket: string; path: string }) =>
    z
      .object({ bucket: z.enum(["exam-documents", "question-assets"]), path: z.string().min(1) })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: signed, error } = await supabaseAdmin.storage
      .from(data.bucket)
      .createSignedUrl(data.path, 3600);
    if (error) throw error;
    return { url: signed.signedUrl };
  });
