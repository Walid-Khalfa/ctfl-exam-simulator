/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import { createMockSupabaseClient } from "../integrations/supabase/mock-client";
import { finalizeAttempt } from "../lib/exam.server";

// Import all seeds
import {
  ENSEMBLE_A_EXAM,
  ENSEMBLE_A_QUESTIONS,
  ENSEMBLE_A_SOLUTIONS,
} from "../integrations/supabase/seed-ensemble-a";
import {
  ENSEMBLE_B_EXAM,
  ENSEMBLE_B_QUESTIONS,
  ENSEMBLE_B_SOLUTIONS,
} from "../integrations/supabase/seed-ensemble-b";
import {
  ENSEMBLE_C_EXAM,
  ENSEMBLE_C_QUESTIONS,
  ENSEMBLE_C_SOLUTIONS,
} from "../integrations/supabase/seed-ensemble-c";
import {
  ENSEMBLE_D_EXAM,
  ENSEMBLE_D_QUESTIONS,
  ENSEMBLE_D_SOLUTIONS,
} from "../integrations/supabase/seed-ensemble-d";
import {
  ENSEMBLE_E_EXAM,
  ENSEMBLE_E_QUESTIONS,
  ENSEMBLE_E_SOLUTIONS,
} from "../integrations/supabase/seed-ensemble-e";
import {
  ENSEMBLE_F_EXAM,
  ENSEMBLE_F_QUESTIONS,
  ENSEMBLE_F_SOLUTIONS,
} from "../integrations/supabase/seed-ensemble-f";

const exams = [
  {
    name: "Ensemble A (Exam 1)",
    exam: ENSEMBLE_A_EXAM,
    questions: ENSEMBLE_A_QUESTIONS,
    solutions: ENSEMBLE_A_SOLUTIONS,
  },
  {
    name: "Ensemble B (Exam 2)",
    exam: ENSEMBLE_B_EXAM,
    questions: ENSEMBLE_B_QUESTIONS,
    solutions: ENSEMBLE_B_SOLUTIONS,
  },
  {
    name: "Ensemble C (Exam 3)",
    exam: ENSEMBLE_C_EXAM,
    questions: ENSEMBLE_C_QUESTIONS,
    solutions: ENSEMBLE_C_SOLUTIONS,
  },
  {
    name: "Ensemble D (Exam 4)",
    exam: ENSEMBLE_D_EXAM,
    questions: ENSEMBLE_D_QUESTIONS,
    solutions: ENSEMBLE_D_SOLUTIONS,
  },
  {
    name: "Ensemble E (Exam 5)",
    exam: ENSEMBLE_E_EXAM,
    questions: ENSEMBLE_E_QUESTIONS,
    solutions: ENSEMBLE_E_SOLUTIONS,
  },
  {
    name: "Ensemble F (Exam 6)",
    exam: ENSEMBLE_F_EXAM,
    questions: ENSEMBLE_F_QUESTIONS,
    solutions: ENSEMBLE_F_SOLUTIONS,
  },
];

async function runGradingTestForAll() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log("🚀 Starting grading and seeding verification for all 6 exams...");

  const db = createMockSupabaseClient() as any;
  const userId = "qa-verification-student-uuid";
  const resultsTable: Array<{ Exam: string; Questions: number; Score: string; Status: string }> =
    [];

  let allPassed = true;

  for (const ex of exams) {
    console.log(`\n-----------------------------------------`);
    console.log(`📝 Testing ${ex.name}...`);
    const attemptId = `qa-attempt-${ex.exam.id}`;

    // 1. Delete any existing attempt answers and attempts with this ID to make test clean
    try {
      await db.from("attempt_answers").delete().eq("attempt_id", attemptId);
      await db.from("attempts").delete().eq("id", attemptId);
    } catch (e) {}

    // 2. Insert the new attempt
    await db.from("attempts").insert({
      id: attemptId,
      user_id: userId,
      exam_id: ex.exam.id,
      started_at: new Date().toISOString(),
      expires_at: new Date(Date.now() + 3600 * 1000).toISOString(),
      status: "in_progress",
    });

    // 3. Answer every question with the CORRECT answers
    console.log(`   Submitting correct answers for ${ex.questions.length} questions...`);
    for (const sol of ex.solutions) {
      await db.from("attempt_answers").insert({
        id: `ans-${attemptId}-${sol.question_id}`,
        attempt_id: attemptId,
        question_id: sol.question_id,
        selected_option_ids: sol.correct_option_ids,
        marked_for_review: false,
      });
    }

    // 4. Finalize and grade
    console.log(`   Grading attempt...`);
    const res = await finalizeAttempt(attemptId, userId, "submitted");

    const expectedScore = ex.questions.length; // 1 point per question
    const scoreText = `${res.score} / ${res.maxScore}`;
    const success = res.score === expectedScore;

    if (success) {
      console.log(`   ✅ Passed! Perfect score achieved: ${scoreText}`);
      resultsTable.push({
        Exam: ex.name,
        Questions: expectedScore,
        Score: scoreText,
        Status: "✅ PASS",
      });
    } else {
      console.error(`   ❌ Failed! Score is ${scoreText} but expected ${expectedScore}`);
      resultsTable.push({
        Exam: ex.name,
        Questions: expectedScore,
        Score: scoreText,
        Status: "❌ FAIL",
      });
      allPassed = false;
    }
  }

  console.log(`\n======================================================`);
  console.log(`📊 FINAL SIMULATION RESULTS`);
  console.log(`======================================================`);
  console.table(resultsTable);

  if (allPassed) {
    console.log(`\n🎉 SUCCESS! All 6 exams pass with 100% scores when choosing correct answers.`);
    process.exit(0);
  } else {
    console.error(`\n❌ FAILURE: Some exams did not achieve perfect scores.`);
    process.exit(1);
  }
}

runGradingTestForAll().catch((err) => {
  console.error("Test execution crashed:", err);
  process.exit(1);
});
