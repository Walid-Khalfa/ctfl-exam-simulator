// Server-only exam logic. This file is blocked from the client bundle by its
// *.server.ts filename, so it may import the service-role admin client and read
// the server-only question_solutions table.
import { arraysEqualAsSets } from "@/lib/format";

type AdminClient = Awaited<typeof import("@/integrations/supabase/client.server")>["supabaseAdmin"];

async function admin(): Promise<AdminClient> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  return supabaseAdmin;
}

/**
 * Score and finalize an attempt using the server-only solutions table.
 * Idempotent: if the attempt is already finalized it just returns as-is.
 * `reason` distinguishes a manual submit from a timer expiry.
 */
export async function finalizeAttempt(
  attemptId: string,
  userId: string,
  reason: "submitted" | "expired",
) {
  const db = await admin();

  const { data: attempt, error: aErr } = await db
    .from("attempts")
    .select("id, user_id, exam_id, status, started_at, expires_at")
    .eq("id", attemptId)
    .maybeSingle();
  if (aErr) throw aErr;
  if (!attempt) throw new Error("Attempt not found");
  if (attempt.user_id !== userId) throw new Error("Forbidden");

  // Already finalized — nothing to do.
  if (attempt.status !== "in_progress") return { ok: true, alreadyFinalized: true };

  const { data: exam } = await db
    .from("exams")
    .select("id, points_per_question, passing_threshold")
    .eq("id", attempt.exam_id)
    .single();

  const { data: questions } = await db
    .from("questions")
    .select("id, points")
    .eq("exam_id", attempt.exam_id);

  const { data: solutions } = await db
    .from("question_solutions")
    .select("question_id, correct_option_ids")
    .in(
      "question_id",
      (questions ?? []).map((q) => q.id),
    );

  const { data: answers } = await db
    .from("attempt_answers")
    .select("id, question_id, selected_option_ids")
    .eq("attempt_id", attemptId);

  const solMap = new Map((solutions ?? []).map((s) => [s.question_id, s.correct_option_ids]));
  const ansMap = new Map((answers ?? []).map((a) => [a.question_id, a]));

  let score = 0;
  let maxScore = 0;
  const answerUpdates: { id: string; is_correct: boolean }[] = [];

  for (const q of questions ?? []) {
    const pts = q.points ?? exam?.points_per_question ?? 1;
    maxScore += pts;
    const correct = solMap.get(q.id) ?? [];
    const ans = ansMap.get(q.id);
    const selected = ans?.selected_option_ids ?? [];
    const isCorrect = selected.length > 0 && arraysEqualAsSets(selected, correct);
    if (isCorrect) score += pts;
    if (ans) answerUpdates.push({ id: ans.id, is_correct: isCorrect });
  }

  for (const u of answerUpdates) {
    await db.from("attempt_answers").update({ is_correct: u.is_correct }).eq("id", u.id);
  }

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 10000) / 100 : 0;
  const passed = percentage >= (exam?.passing_threshold ?? 65);
  const now = new Date();
  const timeUsed = Math.max(
    0,
    Math.floor((now.getTime() - new Date(attempt.started_at).getTime()) / 1000),
  );

  const { error: uErr } = await db
    .from("attempts")
    .update({
      status: reason,
      score,
      max_score: maxScore,
      percentage,
      passed,
      submitted_at: now.toISOString(),
      time_used_seconds: timeUsed,
    })
    .eq("id", attemptId)
    .eq("status", "in_progress");
  if (uErr) throw uErr;

  await db.from("attempt_events").insert({
    attempt_id: attemptId,
    type: reason === "expired" ? "auto_submit" : "submit",
    payload: { score, maxScore, percentage, passed },
  });

  return { ok: true, score, maxScore, percentage, passed };
}

/** Finalize if the server clock says the attempt has expired. */
export async function finalizeIfExpired(
  attemptId: string,
  userId: string,
  expiresAt: string,
  status: string,
) {
  if (status === "in_progress" && new Date(expiresAt).getTime() <= Date.now()) {
    await finalizeAttempt(attemptId, userId, "expired");
    return true;
  }
  return false;
}
