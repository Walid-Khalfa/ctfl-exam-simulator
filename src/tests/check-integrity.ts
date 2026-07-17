import { ENSEMBLE_A_EXAM, ENSEMBLE_A_QUESTIONS, ENSEMBLE_A_OPTIONS, ENSEMBLE_A_SOLUTIONS } from "../integrations/supabase/seed-ensemble-a";
import { ENSEMBLE_B_EXAM, ENSEMBLE_B_QUESTIONS, ENSEMBLE_B_OPTIONS, ENSEMBLE_B_SOLUTIONS } from "../integrations/supabase/seed-ensemble-b";
import { ENSEMBLE_C_EXAM, ENSEMBLE_C_QUESTIONS, ENSEMBLE_C_OPTIONS, ENSEMBLE_C_SOLUTIONS } from "../integrations/supabase/seed-ensemble-c";
import { ENSEMBLE_D_EXAM, ENSEMBLE_D_QUESTIONS, ENSEMBLE_D_OPTIONS, ENSEMBLE_D_SOLUTIONS } from "../integrations/supabase/seed-ensemble-d";
import { ENSEMBLE_E_EXAM, ENSEMBLE_E_QUESTIONS, ENSEMBLE_E_OPTIONS, ENSEMBLE_E_SOLUTIONS } from "../integrations/supabase/seed-ensemble-e";
import { ENSEMBLE_F_EXAM, ENSEMBLE_F_QUESTIONS, ENSEMBLE_F_OPTIONS, ENSEMBLE_F_SOLUTIONS } from "../integrations/supabase/seed-ensemble-f";

const exams = [
  { name: "Ensemble A", exam: ENSEMBLE_A_EXAM, questions: ENSEMBLE_A_QUESTIONS, options: ENSEMBLE_A_OPTIONS, solutions: ENSEMBLE_A_SOLUTIONS },
  { name: "Ensemble B", exam: ENSEMBLE_B_EXAM, questions: ENSEMBLE_B_QUESTIONS, options: ENSEMBLE_B_OPTIONS, solutions: ENSEMBLE_B_SOLUTIONS },
  { name: "Ensemble C", exam: ENSEMBLE_C_EXAM, questions: ENSEMBLE_C_QUESTIONS, options: ENSEMBLE_C_OPTIONS, solutions: ENSEMBLE_C_SOLUTIONS },
  { name: "Ensemble D", exam: ENSEMBLE_D_EXAM, questions: ENSEMBLE_D_QUESTIONS, options: ENSEMBLE_D_OPTIONS, solutions: ENSEMBLE_D_SOLUTIONS },
  { name: "Ensemble E", exam: ENSEMBLE_E_EXAM, questions: ENSEMBLE_E_QUESTIONS, options: ENSEMBLE_E_OPTIONS, solutions: ENSEMBLE_E_SOLUTIONS },
  { name: "Ensemble F", exam: ENSEMBLE_F_EXAM, questions: ENSEMBLE_F_QUESTIONS, options: ENSEMBLE_F_OPTIONS, solutions: ENSEMBLE_F_SOLUTIONS },
];

for (const ex of exams) {
  console.log(`=== Integrity Check for ${ex.name} ===`);
  
  // Check duplicates
  const qIds = new Set();
  const duplicateQs = [];
  for (const q of ex.questions) {
    if (qIds.has(q.id)) duplicateQs.push(q.id);
    qIds.add(q.id);
  }
  if (duplicateQs.length > 0) {
    console.error(`  ❌ Duplicate Question IDs: ${JSON.stringify(duplicateQs)}`);
  }
  
  const optIds = new Set();
  const duplicateOpts = [];
  for (const o of ex.options) {
    if (optIds.has(o.id)) duplicateOpts.push(o.id);
    optIds.add(o.id);
  }
  if (duplicateOpts.length > 0) {
    console.error(`  ❌ Duplicate Option IDs: ${JSON.stringify(duplicateOpts)}`);
  }
  
  const solIds = new Set();
  const duplicateSols = [];
  for (const s of ex.solutions) {
    if (solIds.has(s.question_id)) duplicateSols.push(s.question_id);
    solIds.add(s.question_id);
  }
  if (duplicateSols.length > 0) {
    console.error(`  ❌ Duplicate Solution IDs (question_id): ${JSON.stringify(duplicateSols)}`);
  }
  
  // Check counts & links
  console.log(`  Questions: ${ex.questions.length}, Options: ${ex.options.length}, Solutions: ${ex.solutions.length}`);
  
  // Check if every question has exactly 4 options
  for (const q of ex.questions) {
    const qOpts = ex.options.filter(o => o.question_id === q.id);
    if (qOpts.length !== 4) {
      console.warn(`  ⚠️ Question ${q.id} has ${qOpts.length} options (expected 4)`);
    }
  }

  // Check if every question has a solution
  for (const q of ex.questions) {
    const sol = ex.solutions.find(s => s.question_id === q.id);
    if (!sol) {
      console.error(`  ❌ Question ${q.id} has NO solution!`);
    }
  }

  // Check if every solution has a question
  for (const s of ex.solutions) {
    const q = ex.questions.find(q => q.id === s.question_id);
    if (!q) {
      console.error(`  ❌ Solution references question_id ${s.question_id} which does not exist in questions!`);
    }
  }

  console.log("");
}
