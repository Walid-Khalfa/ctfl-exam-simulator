import { createMockSupabaseClient } from "../integrations/supabase/mock-client";
import { finalizeAttempt } from "../lib/exam.server";
import { ENSEMBLE_E_EXAM, ENSEMBLE_E_QUESTIONS, ENSEMBLE_E_OPTIONS, ENSEMBLE_E_SOLUTIONS } from "../integrations/supabase/seed-ensemble-e";

async function runQATestExam5() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log("=================================================================");
  console.log("🔍 QA TEST REPORT: EXAM 5 (ENSEMBLE E) INTEGRITY & GRADING");
  console.log("=================================================================");
  
  const db = createMockSupabaseClient() as any;
  const userId = "qa-student-tester-uuid";
  const attemptId = "qa-test-attempt-exam5";
  
  // 1. Clean up old test data
  try {
    await db.from("attempt_answers").delete().eq("attempt_id", attemptId);
    await db.from("attempts").delete().eq("id", attemptId);
  } catch (e) {}
  
  // 2. Create the attempt
  console.log("\n[QA Step 1] Creating a new attempt for Exam 5...");
  await db.from("attempts").insert({
    id: attemptId,
    user_id: userId,
    exam_id: ENSEMBLE_E_EXAM.id,
    started_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 3600 * 1000).toISOString(),
    status: "in_progress",
  });
  console.log(`✅ Attempt created successfully. ID: ${attemptId}`);

  // 3. Submit correct answers based on the seed
  console.log("\n[QA Step 2] Submitting perfect answers for all 40 questions...");
  for (const sol of ENSEMBLE_E_SOLUTIONS) {
    await db.from("attempt_answers").insert({
      id: `ans-${attemptId}-${sol.question_id}`,
      attempt_id: attemptId,
      question_id: sol.question_id,
      selected_option_ids: sol.correct_option_ids,
      marked_for_review: false,
    });
  }
  console.log("✅ All answers submitted.");

  // 4. Run the grading finalization (finalizeAttempt)
  console.log("\n[QA Step 3] Running grading finalization...");
  const gradeResult = await finalizeAttempt(attemptId, userId, "submitted");
  console.log(`Score: ${gradeResult.score} / ${gradeResult.maxScore} (${gradeResult.percentage}%)`);
  console.log(`Passed: ${gradeResult.passed}`);
  
  if (gradeResult.score !== 40) {
    console.error(`❌ QA ERROR: Score is ${gradeResult.score}/40, expected 40/40!`);
    process.exit(1);
  }
  console.log("✅ Score calculation is CORRECT (40/40 achieved).");

  // 5. Emulate `getAttemptState` logic directly to verify correction screen data
  console.log("\n[QA Step 4] Simulating correction UI review state queries (getAttemptState logic)...");
  
  const { data: questions, error: qErr } = await db
    .from("questions")
    .select("id, position, chapter, k_level, type, points, learning_objective, text")
    .eq("exam_id", ENSEMBLE_E_EXAM.id)
    .order("position", { ascending: true });
    
  if (qErr) {
    console.error("Error querying questions:", qErr);
    process.exit(1);
  }
  
  const qIds = (questions ?? []).map((q: any) => q.id);
  
  const { data: options, error: optErr } = await db
    .from("question_options")
    .select("id, question_id, position, label, text")
    .in("question_id", qIds)
    .order("position", { ascending: true });
    
  if (optErr) {
    console.error("Error querying options:", optErr);
    process.exit(1);
  }
  
  const { data: answers, error: ansErr } = await db
    .from("attempt_answers")
    .select("question_id, selected_option_ids, is_correct")
    .eq("attempt_id", attemptId);
    
  if (ansErr) {
    console.error("Error querying answers:", ansErr);
    process.exit(1);
  }
  
  const { data: solutions, error: solErr } = await db
    .from("question_solutions")
    .select("question_id, correct_option_ids, explanation")
    .in("question_id", qIds);
    
  if (solErr) {
    console.error("Error querying solutions:", solErr);
    process.exit(1);
  }
  
  const ansMap = new Map((answers ?? []).map((a: any) => [a.question_id, a]));
  const solMap = new Map((solutions ?? []).map((s: any) => [s.question_id, s]));
  
  const questionsState = (questions ?? []).map((q: any) => {
    const sol = solMap.get(q.id);
    const ans = ansMap.get(q.id);
    return {
      ...q,
      options: (options ?? []).filter((o: any) => o.question_id === q.id),
      selectedOptionIds: ans?.selected_option_ids ?? [],
      isCorrect: ans?.is_correct === true,
      correctOptionIds: sol?.correct_option_ids ?? [],
      explanation: sol?.explanation ?? "",
    };
  });
  
  console.log(`✅ Review state compiled. Total questions: ${questionsState.length}`);
  
  if (questionsState.length !== 40) {
    console.error(`❌ QA ERROR: Review state has ${questionsState.length} questions, expected 40!`);
    process.exit(1);
  }
  
  console.log("\n[QA Step 5] Verifying detailed question correction states...");
  let errorsCount = 0;
  
  const optionsMap = new Map(ENSEMBLE_E_OPTIONS.map(o => [o.id, o]));
  
  for (const q of questionsState) {
    const qNum = q.position;
    
    // Check if options are loaded
    if (!q.options || q.options.length === 0) {
      console.error(`❌ Q${qNum} (${q.id}): Options are missing in review state!`);
      errorsCount++;
      continue;
    }
    
    // Check if selected options match correct options
    const selectedLabels = q.selectedOptionIds.map(id => optionsMap.get(id)?.label).join(", ");
    const correctLabels = q.correctOptionIds.map(id => optionsMap.get(id)?.label).join(", ");
    
    if (!q.isCorrect) {
      console.error(`❌ Q${qNum} (${q.id}): Marked INCORRECT, but correct answers were submitted!`);
      errorsCount++;
    }
    
    // Check if explanation is present
    if (!q.explanation || q.explanation.trim() === "") {
      console.error(`❌ Q${qNum} (${q.id}): Explanation/Rationale is missing!`);
      errorsCount++;
    }
    
    console.log(`   - Q${qNum}: Selected [${selectedLabels}] | Correct [${correctLabels}] | isCorrect: ${q.isCorrect} | Explanation: OK (${q.explanation.substring(0, 50)}...)`);
  }
  
  console.log("\n=================================================================");
  if (errorsCount === 0) {
    console.log("🎉 QA STATUS: 100% SUCCESS! GRADING AND CORRECTION UI ARE CORRECT!");
    console.log("=================================================================");
    process.exit(0);
  } else {
    console.error(`❌ QA STATUS: FAILED! Found ${errorsCount} errors.`);
    console.log("=================================================================");
    process.exit(1);
  }
}

runQATestExam5().catch(err => {
  console.error("QA Test script crashed:", err);
  process.exit(1);
});
