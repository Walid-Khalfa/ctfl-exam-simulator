import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// ---------- Dashboard ----------
export const listDashboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const { data: exams, error: eErr } = await supabase
      .from("exams")
      .select(
        "id, title, description, language, duration_minutes, total_questions, passing_threshold, attempts_allowed, status",
      )
      .eq("status", "published")
      .order("created_at", { ascending: true });
    if (eErr) throw eErr;

    const { data: attempts } = await supabase
      .from("attempts")
      .select("id, exam_id, status, percentage, passed, started_at, submitted_at")
      .eq("user_id", userId)
      .order("started_at", { ascending: false });

    const byExam = new Map<string, typeof attempts>();
    for (const a of attempts ?? []) {
      const list = byExam.get(a.exam_id) ?? [];
      list.push(a);
      byExam.set(a.exam_id, list);
    }

    return (exams ?? []).map((exam) => {
      const list = byExam.get(exam.id) ?? [];
      const inProgress = list.find((a) => a.status === "in_progress");
      const finished = list.filter((a) => a.status !== "in_progress");
      const best = finished.reduce<number | null>(
        (acc, a) =>
          a.percentage != null && (acc == null || a.percentage > acc) ? a.percentage : acc,
        null,
      );
      const lastFinished = finished[0] ?? null;
      return {
        exam,
        attemptsUsed: list.length,
        inProgressAttemptId: inProgress?.id ?? null,
        lastFinishedAttemptId: lastFinished?.id ?? null,
        bestPercentage: best,
      };
    });
  });

// ---------- Start / resume ----------
export const startAttempt = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { examId: string }) => z.object({ examId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: exam, error: eErr } = await supabase
      .from("exams")
      .select("id, duration_minutes, attempts_allowed, status")
      .eq("id", data.examId)
      .maybeSingle();
    if (eErr) throw eErr;
    if (!exam || exam.status !== "published") throw new Error("Examen indisponible");

    const { data: existing } = await supabase
      .from("attempts")
      .select("id, status, expires_at")
      .eq("user_id", userId)
      .eq("exam_id", data.examId);

    const active = (existing ?? []).find(
      (a) => a.status === "in_progress" && new Date(a.expires_at).getTime() > Date.now(),
    );
    if (active) return { attemptId: active.id };

    const finishedCount = (existing ?? []).filter((a) => a.status !== "in_progress").length;
    if (exam.attempts_allowed != null && finishedCount >= exam.attempts_allowed) {
      throw new Error("Nombre maximum de tentatives atteint");
    }

    const now = new Date();
    const expires = new Date(now.getTime() + exam.duration_minutes * 60 * 1000);
    const { data: created, error: cErr } = await supabase
      .from("attempts")
      .insert({
        user_id: userId,
        exam_id: data.examId,
        started_at: now.toISOString(),
        expires_at: expires.toISOString(),
        status: "in_progress",
      })
      .select("id")
      .single();
    if (cErr) throw cErr;

    await supabase
      .from("attempt_events")
      .insert({ attempt_id: created.id, type: "start", payload: {} });

    return { attemptId: created.id };
  });

// ---------- Live attempt state (NO solutions) ----------
export const getAttemptState = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((d: { attemptId: string }) => z.object({ attemptId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: attempt, error } = await supabase
      .from("attempts")
      .select("id, exam_id, status, started_at, expires_at, user_id")
      .eq("id", data.attemptId)
      .maybeSingle();
    if (error) throw error;
    if (!attempt) throw new Error("Tentative introuvable");

    // Auto-finalize on server clock if expired.
    const { finalizeIfExpired } = await import("@/lib/exam.server");
    const expiredNow = await finalizeIfExpired(
      attempt.id,
      userId,
      attempt.expires_at,
      attempt.status,
    );

    const finalized = expiredNow || attempt.status !== "in_progress";

    const { data: exam } = await supabase
      .from("exams")
      .select("id, title, duration_minutes, total_questions, passing_threshold")
      .eq("id", attempt.exam_id)
      .single();

    const { data: questions } = await supabase
      .from("questions")
      .select("id, position, chapter, k_level, type, points, learning_objective, text")
      .eq("exam_id", attempt.exam_id)
      .order("position", { ascending: true });

    const { data: options } = await supabase
      .from("question_options")
      .select("id, question_id, position, label, text")
      .in(
        "question_id",
        (questions ?? []).map((q) => q.id),
      )
      .order("position", { ascending: true });

    const { data: answers } = await supabase
      .from("attempt_answers")
      .select("question_id, selected_option_ids, marked_for_review")
      .eq("attempt_id", attempt.id);

    const remainingSeconds = Math.max(
      0,
      Math.floor((new Date(attempt.expires_at).getTime() - Date.now()) / 1000),
    );

    return {
      finalized,
      attemptId: attempt.id,
      examId: attempt.exam_id,
      exam,
      remainingSeconds,
      questions: (questions ?? []).map((q) => ({
        ...q,
        options: (options ?? []).filter((o) => o.question_id === q.id),
      })),
      answers: answers ?? [],
    };
  });

// ---------- Autosave ----------
export const saveAnswer = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    (d: {
      attemptId: string;
      questionId: string;
      selectedOptionIds: string[];
      markedForReview: boolean;
    }) =>
      z
        .object({
          attemptId: z.string(),
          questionId: z.string(),
          selectedOptionIds: z.array(z.string()),
          markedForReview: z.boolean(),
        })
        .parse(d),
  )
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: attempt } = await supabase
      .from("attempts")
      .select("id, status, expires_at, user_id")
      .eq("id", data.attemptId)
      .maybeSingle();
    if (!attempt || attempt.user_id !== userId) throw new Error("Forbidden");
    if (attempt.status !== "in_progress" || new Date(attempt.expires_at).getTime() <= Date.now()) {
      return { ok: false, expired: true };
    }

    const { data: existing } = await supabase
      .from("attempt_answers")
      .select("id")
      .eq("attempt_id", data.attemptId)
      .eq("question_id", data.questionId)
      .maybeSingle();

    if (existing) {
      await supabase
        .from("attempt_answers")
        .update({
          selected_option_ids: data.selectedOptionIds,
          marked_for_review: data.markedForReview,
        })
        .eq("id", existing.id);
    } else {
      await supabase.from("attempt_answers").insert({
        attempt_id: data.attemptId,
        question_id: data.questionId,
        selected_option_ids: data.selectedOptionIds,
        marked_for_review: data.markedForReview,
      });
    }

    return { ok: true };
  });

// ---------- Submit ----------
export const submitAttempt = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((d: { attemptId: string }) => z.object({ attemptId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { finalizeAttempt } = await import("@/lib/exam.server");
    await finalizeAttempt(data.attemptId, context.userId, "submitted");
    return { ok: true };
  });

// ---------- Results ----------
export const getResults = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((d: { attemptId: string }) => z.object({ attemptId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: attempt } = await supabase
      .from("attempts")
      .select(
        "id, exam_id, status, score, max_score, percentage, passed, time_used_seconds, user_id",
      )
      .eq("id", data.attemptId)
      .maybeSingle();
    if (!attempt || attempt.user_id !== userId) throw new Error("Forbidden");
    if (attempt.status === "in_progress") throw new Error("Examen non soumis");

    const { data: exam } = await supabase
      .from("exams")
      .select("id, title, passing_threshold, total_questions")
      .eq("id", attempt.exam_id)
      .single();

    const { data: questions } = await supabase
      .from("questions")
      .select("id, chapter, k_level")
      .eq("exam_id", attempt.exam_id);

    const { data: answers } = await supabase
      .from("attempt_answers")
      .select("question_id, is_correct")
      .eq("attempt_id", attempt.id);

    const correctByQ = new Map((answers ?? []).map((a) => [a.question_id, a.is_correct === true]));

    const chapterStats: Record<number, { correct: number; total: number }> = {};
    const levelStats: Record<string, { correct: number; total: number }> = {};
    let correctCount = 0;
    for (const q of questions ?? []) {
      const ok = correctByQ.get(q.id) === true;
      if (ok) correctCount++;
      chapterStats[q.chapter] ??= { correct: 0, total: 0 };
      chapterStats[q.chapter].total++;
      if (ok) chapterStats[q.chapter].correct++;
      levelStats[q.k_level] ??= { correct: 0, total: 0 };
      levelStats[q.k_level].total++;
      if (ok) levelStats[q.k_level].correct++;
    }

    return {
      attempt,
      exam,
      correctCount,
      totalQuestions: (questions ?? []).length,
      chapterStats,
      levelStats,
    };
  });

// ---------- Secure correction (solutions revealed only post-submit) ----------
export const getCorrection = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((d: { attemptId: string }) => z.object({ attemptId: z.string() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: attempt } = await supabase
      .from("attempts")
      .select("id, exam_id, status, user_id")
      .eq("id", data.attemptId)
      .maybeSingle();
    if (!attempt || attempt.user_id !== userId) throw new Error("Forbidden");
    if (attempt.status === "in_progress")
      throw new Error("La correction est indisponible avant la soumission");

    const { data: questions } = await supabase
      .from("questions")
      .select("id, position, chapter, k_level, type, learning_objective, text")
      .eq("exam_id", attempt.exam_id)
      .order("position", { ascending: true });

    const qIds = (questions ?? []).map((q) => q.id);

    const { data: options } = await supabase
      .from("question_options")
      .select("id, question_id, position, label, text")
      .in("question_id", qIds)
      .order("position", { ascending: true });

    const { data: answers } = await supabase
      .from("attempt_answers")
      .select("question_id, selected_option_ids, is_correct")
      .eq("attempt_id", attempt.id);

    // Solutions live in the server-only table → read with the admin client.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: solutions } = await supabaseAdmin
      .from("question_solutions")
      .select("question_id, correct_option_ids, explanation")
      .in("question_id", qIds);

    const ansMap = new Map((answers ?? []).map((a) => [a.question_id, a]));
    const solMap = new Map((solutions ?? []).map((s) => [s.question_id, s]));

    return {
      questions: (questions ?? []).map((q) => {
        const sol = solMap.get(q.id);
        const ans = ansMap.get(q.id);
        return {
          ...q,
          options: (options ?? []).filter((o) => o.question_id === q.id),
          selectedOptionIds: ans?.selected_option_ids ?? [],
          isCorrect: ans?.is_correct === true,
          correctOptionIds: sol?.correct_option_ids ?? [],
          explanation: sol?.explanation ?? "",
        };
      }),
    };
  });
