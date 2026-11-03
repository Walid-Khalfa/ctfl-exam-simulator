// ISTQB Foundation Level v4.0 - Ensemble F (v1.1) - English translations
// Source of truth for the English content of Ensemble F. Records are merged by
// stable ID at read time (see src/lib/content-translations.ts). French source
// text remains in seed-ensemble-f.ts and is never modified here.
// Terminology follows the official ISTQB CTFL v4.0 syllabus.

export const ENSEMBLE_F_EXAM_EN = {
  title_en: "ISTQB CTFL v4.0 Sample Exam — SET F (v1.1)",
  description_en:
    "Official ISTQB Foundation Level v4.0 practice exam (Set F, v1.1, GTB edition). Includes 40 unique questions with detailed explanations.",
};

export const ENSEMBLE_F_QUESTIONS_EN: Record<string, string> = {
  "ef-q1": "Which of the following statements does NOT describe a typical testing objective?",
  "ef-q2":
    "A phone ringing in a neighbouring office distracts a software developer, causing them to code the logic that checks the upper limit of an input variable incorrectly. Later, during system testing, a tester notices that this input field accepts invalid input values. Which of the following terms accurately describes the incorrectly coded upper limit check in this scenario?",
  "ef-q3":
    'Which of the following actions takes place during the "Test analysis" activity of the test process?',
  "ef-q4":
    "Generally, according to the Pareto principle, an above-average number of defects is often found in a few areas of a system. The corresponding failures often make the system unusable. Which of the following testing principles describes this?",
  "ef-q5":
    "Which of the following general skills is particularly important for communicating discovered failures to the relevant developers?",
  "ef-q6":
    "Match the correct description of A to D: A. A set of test cases or test scripts to be executed in a particular test cycle. B. A sequence of instructions for the execution of a test. C. Contains the expected results. D. The documentation of an objective and agenda for a test session. — to its corresponding test work product 1 to 4: 1. test suite, 2. test case, 3. test script, 4. test charter.",
  "ef-q7":
    "Which of the following is the BEST example of how traceability between the test basis, testware, test results and defects supports testing?",
  "ef-q8": "Which of the following statements is an advantage of the whole-team approach?",
  "ef-q9":
    "You work as a tester in a team that follows a sequential software development lifecycle (SDLC). How does the choice of this software development lifecycle model affect the timing of testing?",
  "ef-q10":
    "Which of the following is a good testing practice that applies to all software development lifecycles (SDLC)?",
  "ef-q11":
    "Which of the following test-first approaches uses the given/when/then format to express the desired response of an application?",
  "ef-q12": "Which of the following are benefits of DevOps?",
  "ef-q13":
    'You work as a tester on a mobile food ordering application project. A high-priority customer requirement states: "The order must be processed in less than 10 seconds 95% of the time." You created a set of test cases in which a number of random orders were placed, the processing time measured, and the test results checked against the requirements. What type of testing did you perform?',
  "ef-q14":
    "Which of the following statements about confirmation testing and regression testing is CORRECT?",
  "ef-q15":
    "Which of the following items in the list of work products can NOT be checked with a static testing technique?",
  "ef-q16":
    "Which of the following statements applies to the differences between static testing and dynamic testing?",
  "ef-q17": "Which of the following statements about formal reviews (e.g., inspections) is TRUE?",
  "ef-q18": "Which task can management assume during a formal review (e.g., inspection)?",
  "ef-q19":
    "Which of the following statements describes an advantage of black-box testing over white-box testing?",
  "ef-q20":
    "A fitness application measures the number of steps taken daily and provides feedback to motivate the user to stay fit. The feedback for the different step counts should be as follows: • Up to and including 1000: Couch Potato! • More than 1000, up to and including 2000: Get Moving! • More than 2000, up to and including 4000: On the Right Track! • More than 4000, up to and including 6000: Well Done! • More than 6000: Super! Which of the following groups of test input values would provide the HIGHEST equivalence partition coverage?",
  "ef-q21":
    "You are testing a system that calculates the final grade for course participants. The final grade is determined based on the total number of points between 0 and 100, according to the following rules: • 0 - 50 points: failed • 51 - 70 points: sufficient • 71 - 90 points: good • 91 - 100 points: very good. You have prepared the following set of test cases: TF1: 91 (very good), TF2: 50 (failed), TF3: 70 (sufficient), TF4: 100 (very good), TF5: 90 (good), TF6: 0 (failed). Given these test cases, what percentage of coverage is achieved when using 2-value boundary value analysis?",
  "ef-q22":
    "You are testing a new customer relationship management system for a daily bicycle rental company. The system requirements are as follows: • Anyone can rent a bicycle, but only members receive a 20% discount. • However, if the return deadline is missed, the discount can no longer be claimed. • After 15 rentals, members receive a free T-shirt. A tester designs the following decision table to test the requirements (T=true, F=false, X=execute the action): Conditions: is a member [T T T T F F F F], Return deadline missed [T F T F T F F T], 15th rental [F F T T F F T T]. Actions: 20% discount [ - X - X - - - - ], Free T-shirt [ - - X X - - - X ]. Which rule (combination of conditions and actions) does not meet the above requirements?",
  "ef-q23":
    "You are testing a system whose lifecycle is modelled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state. [INIT] --(run)--> [IN OPERATION], [INIT] --(test)--> [DEBUG MODE], [DEBUG MODE] --(error)--> [IN OPERATION], [DEBUG MODE] --(done)--> [OFF], [IN OPERATION] --(pause)--> [ON HOLD], [IN OPERATION] --(done)--> [OFF], [ON HOLD] --(resume)--> [IN OPERATION]. What is the MINIMUM number of test cases to achieve 100% valid transition coverage (0-switch coverage)?",
  "ef-q24": "Your test suite achieves 100% statement coverage. What does this mean?",
  "ef-q25": "Which of the following statements about branch testing is CORRECT?",
  "ef-q26": "What is the purpose of a test charter in session-based exploratory testing?",
  "ef-q27":
    "Which of the following statements is PROBABLY the greatest advantage of checklist-based testing?",
  "ef-q28":
    "Which of the following statements does NOT describe the collaborative approach to writing user stories?",
  "ef-q29":
    "You are using acceptance test-driven development and designing test cases based on the following user story: As a regular user or a special user, I want to be able to use my electronic floor card to access specific floors. Acceptance criteria: AC1: Regular users have access to floors 1 to 3; AC2: Floor 4 is only accessible to special users; AC3: Special users have all the access rights of regular users. Which test case is MOST reasonable for testing AC3?",
  "ef-q30":
    'Consider the following statement from a test plan: "The correct functioning of the components is verified using component tests and component integration tests. Evidence must be provided that 100% branch coverage is achieved for each component classified as critical." To which part of the test plan does this definition belong?',
  "ef-q31":
    "Given the following user story: “As a chairman, none of the data I upload should be visible to any other user of the system, so that no confidential information can be viewed.” During the first planning poker session, the following effort estimates were provided based on risk, effort and the appropriate test scope: Customers: 5, Developers: 5, Testers: 20. What is the BEST outcome following this planning session?",
  "ef-q32": "Which of the following statements is true about the testing pyramid?",
  "ef-q33":
    "The priorities and dependencies of the following test cases are given: TC1 (Priority: High, Technical dependency on: TC4), TC2 (Low), TC3 (High, Logical dependency on: TC4), TC4 (Medium), TC5 (Low, Logical dependency on: TC2), TC6 (Medium, Technical dependency on: TC5). Which of the following test execution plans BEST addresses priorities, technical and logical dependencies?",
  "ef-q34":
    'Which of the following test types belongs to quadrant Q2 — "Business-oriented, team support" in the testing quadrant model?',
  "ef-q35": "Which of the following statements represents a project risk?",
  "ef-q36":
    'You work as a project manager on an internal banking software project. In order to avoid rework and excessive "detect/fix/retest" cycles, a rigid process was introduced (bug fix, peer review, test in dev by the original tester, daily installation in test, then re-test). Nevertheless, a large number of defects confirmed as fixed in dev fail post-deployment tests in test, causing additional work. Having complete confidence in your testers, which of the following is most likely the part of the process that should be checked next?',
  "ef-q37":
    "Which of the following statements in a weekly test progress report is NOT relevant to stakeholders with regard to test monitoring and test control?",
  "ef-q38":
    'After executing a set of test cases, a colleague created a bug report (ID, Title, Author, Object: build v00812, Env: cfg_full_02, Case: sys_128, Description: empty name login error displays "incorrect password" instead of "The name must not be empty", Severity: low, Priority: medium, Status: new). Which of the following improvement suggestions would you MOST like to give your colleague?',
  "ef-q39":
    "Which of the following test tools is most useful for reporting the number of defects in the test object?",
  "ef-q40": "Which of the following statements is a potential benefit of test automation?",
};

export const ENSEMBLE_F_OPTIONS_EN: Record<string, string> = {
  "ef-q1-a": "Detecting defects and triggering failures",
  "ef-q1-b": "Building confidence in the quality level of the test object",
  "ef-q1-c": "Reducing the risk of an inadequate test environment",
  "ef-q1-d": "Meeting contractual, legal or regulatory requirements",
  "ef-q2-a": "root cause",
  "ef-q2-b": "failure",
  "ef-q2-c": "error",
  "ef-q2-d": "defect",
  "ef-q3-a": "Identifying the required infrastructure and tools",
  "ef-q3-b": "Creating test suites based on the test script",
  "ef-q3-c": 'Analysing "lessons learned" for process improvement',
  "ef-q3-d": "Evaluating the test basis in terms of testability",
  "ef-q4-a": "Testing is context-dependent.",
  "ef-q4-b": "Defects cluster together.",
  "ef-q4-c": "Tests wear out.",
  "ef-q4-d": "Absence-of-defects fallacy.",
  "ef-q5-a": "Testing knowledge",
  "ef-q5-b": "Critical thinking",
  "ef-q5-c": "Care",
  "ef-q5-d": "Communication skills",
  "ef-q6-a": "1A, 2C, 3B, 4D",
  "ef-q6-b": "1D, 2B, 3A, 4C",
  "ef-q6-c": "1A, 2C, 3D, 4B",
  "ef-q6-d": "1D, 2C, 3B, 4A",
  "ef-q7-a":
    "Performing an impact analysis provides information about the quality of the system under test.",
  "ef-q7-b":
    "Analysing the traceability between test cases and test results provides information about the completeness of the test cases.",
  "ef-q7-c":
    "Analysing traceability by conducting an impact analysis helps select appropriate test cases for regression testing.",
  "ef-q7-d":
    "Analysing the traceability between requirements and test cases helps analyse residual risks.",
  "ef-q8-a": "Each team member can take whichever task they want.",
  "ef-q8-b": "Each team member is responsible for quality.",
  "ef-q8-c": "Each team member works separately on their own task.",
  "ef-q8-d": "Each team member has a fixed role and a defined responsibility.",
  "ef-q9-a":
    "Dynamic testing (unit tests) cannot be performed in the early phases of the software development lifecycle.",
  "ef-q9-b":
    "Static testing cannot be performed in the early phases of this software development lifecycle.",
  "ef-q9-c":
    "Test planning cannot be performed in the early phases of this software development lifecycle.",
  "ef-q9-d":
    "Acceptance testing can be performed in the early phases of this software development lifecycle.",
  "ef-q10-a":
    "Testers should accompany developers, especially in software development, for activities that have no associated testing activities.",
  "ef-q10-b":
    "Testers should define different test objectives for each test level in order to tailor the scope and depth of testing.",
  "ef-q10-c":
    "Testers should only start test analysis and test design once the requirements and specifications are fully implemented.",
  "ef-q10-d": "Testers should not review work products in order to focus on test execution.",
  "ef-q11-a": "Test-Driven Development (TDD)",
  "ef-q11-b": "Acceptance Test-Driven Development (ATDD)",
  "ef-q11-c": "Behavior-Driven Development (BDD)",
  "ef-q11-d": "Continuous Integration / Continuous Delivery (CI/CD)",
  "ef-q12-a": "Faster product release and reduced time to market",
  "ef-q12-b": "Fast feedback by focusing exclusively on functional testing",
  "ef-q12-c": "Shift-Left can minimise the number of regression tests",
  "ef-q12-d": "Effective implementation of the test automation framework.",
  "ef-q13-a":
    "Functional, because the test cases cover the user's business requirements for the system.",
  "ef-q13-b": "Non-functional, because the test cases measure the performance of the system.",
  "ef-q13-c": "Exploratory, because the exact processing time was not defined.",
  "ef-q13-d":
    "Structural, because we need to know the internal structure of the program to measure order processing time.",
  "ef-q14-a":
    "Regression tests increase in number as the project progresses, while the number of confirmation tests decreases as the project progresses.",
  "ef-q14-b":
    "Regression tests are created and executed when the test object is fixed, while confirmation tests are executed whenever the test object is enhanced.",
  "ef-q14-c":
    "Regression testing is concerned with verifying that the environment's operation remains unchanged, while confirmation testing is concerned with changes made to the test object.",
  "ef-q14-d":
    "Regression testing is concerned with possible unintended side effects in unchanged code, while confirmation testing is concerned with the positive effects of corrective changes.",
  "ef-q15-a": "Test cases and executable test scripts",
  "ef-q15-b": "Requirements specification and acceptance criteria",
  "ef-q15-c": "Third-party proprietary executable code",
  "ef-q15-d": "Project documentation and models",
  "ef-q16-a": "During static testing, failures are found",
  "ef-q16-b": "Static testing measures inadequate software performance",
  "ef-q16-c": "The sole objective of static testing is to detect defects as early as possible",
  "ef-q16-d":
    "A lack of coverage of critical security requirements can be revealed during static testing",
  "ef-q17-a": "Technical review is led by the author",
  "ef-q17-b":
    "The review process consists of several activities, such as planning, communication and analysis, debugging and reporting.",
  "ef-q17-c": "The work products to be reviewed are distributed during the review meeting.",
  "ef-q17-d":
    "Defects found during the review are not reported since they will be found during dynamic testing anyway.",
  "ef-q18-a": "Performing post-review rework on a review object, if necessary",
  "ef-q18-b": "Deciding what should be reviewed",
  "ef-q18-c": "Ensuring review meetings run smoothly and, if necessary, acting as mediator",
  "ef-q18-d": "Recording review information such as review decisions",
  "ef-q19-a":
    "Black-box testing techniques can verify the internal structure and processing of the test object.",
  "ef-q19-b":
    "Black-box testing techniques can be created independently of the software implementation.",
  "ef-q19-c":
    "Black-box testing techniques make the best use of testers' knowledge and experience.",
  "ef-q19-d":
    "Black-box testing techniques can be executed without adjustment even if the required behaviour of the test object has changed.",
  "ef-q20-a": "0, 1000, 2000, 3000, 4000",
  "ef-q20-b": "1000, 2001, 4000, 4001, 6000",
  "ef-q20-c": "123, 2345, 3456, 4567, 5678",
  "ef-q20-d": "666, 999, 2222, 5555, 6666",
  "ef-q21-a": "60%",
  "ef-q21-b": "75%",
  "ef-q21-c": "33.3%",
  "ef-q21-d": "100%",
  "ef-q22-a": "R4",
  "ef-q22-b": "R2",
  "ef-q22-c": "R6",
  "ef-q22-d": "R8",
  "ef-q23-a": "2",
  "ef-q23-b": "3",
  "ef-q23-c": "4",
  "ef-q23-d": "7",
  "ef-q24-a": "Every statement selected in the code has been executed at least once.",
  "ef-q24-b":
    "Any test suite containing more test cases than your test suite also achieves 100% statement coverage.",
  "ef-q24-c": "Every branch in the code has been executed at least once.",
  "ef-q24-d": "Every combination of input values in the code has been tested.",
  "ef-q25-a":
    "If a program contains only unconditional control transitions, 100% coverage can be achieved without having to execute a single test case.",
  "ef-q25-b":
    "When a branch is executed with a test case, all the defects it contains are revealed.",
  "ef-q25-c": "If 100% statement coverage is achieved, then 100% branch coverage is also achieved.",
  "ef-q25-d":
    "If 100% branch coverage is achieved, then all the decision outcomes of every conditional control transition in the code are executed.",
  "ef-q26-a": "The test charter specifies the test objectives for the test session.",
  "ef-q26-b": "The test charter documents the steps taken and the findings made.",
  "ef-q26-c": "The test charter is often formulated as questions.",
  "ef-q26-d": "The test charter evaluates the test results after the test session.",
  "ef-q27-a": "It enables a high degree of test repeatability.",
  "ef-q27-b": "It provides a structured approach to testing without requiring detailed test cases.",
  "ef-q27-c": "It covers all the requirements for the test object.",
  "ef-q27-d": "It supports both functional and non-functional testing.",
  "ef-q28-a": "User stories include technical, development and testing aspects.",
  "ef-q28-b":
    "User stories are created by business representatives, developers and testers together.",
  "ef-q28-c":
    "Acceptance criteria for user stories must be created specifically by testers to ensure test independence.",
  "ef-q28-d":
    "User stories are created during a sprint or iteration so as to be independent, negotiable, valuable, estimable, small and testable.",
  "ef-q29-a": "Check that a regular user can access floors 1 and 3.",
  "ef-q29-b": "Check that a regular user cannot access floor 4.",
  "ef-q29-c": "Check that a special user can access floor 5.",
  "ef-q29-d": "Check that a special user can access floors 1, 2 and 3.",
  "ef-q30-a": "Test environment",
  "ef-q30-b": "Risk register",
  "ef-q30-c": "Test context",
  "ef-q30-d": "Test approach",
  "ef-q31-a":
    "Since the customers' and developers' estimates agree, the team can assume they are correct. The planning poker for this user story ends.",
  "ef-q31-b":
    "The team discusses together the reasons why consensus on the estimates was not reached. Another round of planning poker follows.",
  "ef-q31-c":
    "Since the customer ultimately receives the system, their estimate is crucial in such conflicts. Planning poker ends.",
  "ef-q31-d":
    "Planning poker continues until all estimates from the involved stakeholders have exactly the same value.",
  "ef-q32-a":
    "The testing pyramid focuses on a small number of tests at the lower level of the testing pyramid.",
  "ef-q32-b": "The closer you get to the top of the pyramid, the less granular the test is.",
  "ef-q32-c":
    "The testing pyramid comprises exactly 3 test levels and always includes unit tests, integration tests and end-to-end tests.",
  "ef-q32-d":
    "High-level end-to-end tests are user-friendly and therefore generally faster than tests at the lower levels.",
  "ef-q33-a": "TC1 – TC3 – TC4 – TC6 – TC2 – TC5",
  "ef-q33-b": "TC4 – TC3 – TC1 – TC2 – TC5 – TC6",
  "ef-q33-c": "TC4 – TC1 – TC3 – TC5 – TC6 – TC2",
  "ef-q33-d": "TC4 – TC2 – TC5 – TC1 – TC3 – TC6",
  "ef-q34-a": "Component integration testing",
  "ef-q34-b": "User story-based testing",
  "ef-q34-c": "Non-functional testing",
  "ef-q34-d": "Exploratory testing",
  "ef-q35-a": "Management transfers two experienced testers to another project",
  "ef-q35-b": "The system does not comply with functional safety standards",
  "ef-q35-c": "The system's response time exceeds user requirements",
  "ef-q35-d": "People with disabilities have difficulty using the system.",
  "ef-q36-a": "The activity of developers who may not have tested the fix sufficiently at step b.",
  "ef-q36-b": "The activity of testers who may not be clear about what to test at step e.",
  "ef-q36-c":
    "Configuration management, which may not maintain the integrity of the product at step d.",
  "ef-q36-d": "The activity of developers who may not fix the errors correctly at step a.",
  "ef-q37-a": "Test environment downtime during the reporting period increased by 20% to 25 hours.",
  "ef-q37-b":
    "The time needed to produce coverage metric statistics was reduced by 35% to 72 minutes during the reporting period.",
  "ef-q37-c":
    "Test case execution is currently 6 days behind schedule because many failures are being detected and there are problems with the test environment.",
  "ef-q37-d":
    "New product risks have been derived from the test execution results, which still need to be assessed.",
  "ef-q38-a": "The title does not correctly describe the content.",
  "ef-q38-b": "Severity and priority should be the same, since the former determines the latter.",
  "ef-q38-c": 'You have not observed this defect yet. Therefore, the status is not "new".',
  "ef-q38-d": "The following entry is missing: Defect report date: 19.12.2023",
  "ef-q39-a": "Management tool",
  "ef-q39-b": "Static testing tool",
  "ef-q39-c": "Test coverage tool",
  "ef-q39-d": "Tool to support scalability",
  "ef-q40-a":
    "Test automation enables objective evaluation and delivery of measures that are too complicated for humans to derive.",
  "ef-q40-b":
    "For test automation, you can estimate very precisely the effort required for introduction, maintenance and training.",
  "ef-q40-c":
    "Test automation increases confidence in test results because it eliminates human critical thinking.",
  "ef-q40-d":
    "Test automation always complies with regulatory requirements and security standards.",
};

export const ENSEMBLE_F_EXPLANATIONS_EN: Record<string, string> = {
  "ef-q1":
    "Reducing the risk of an inadequate test environment is not a listed testing objective. An objective is rather to provide sufficient information to reduce the risk of inadequate software quality. (Syllabus Section 1.1.1)",
  "ef-q2":
    "The problem in the code is a defect (bug). The developer's distraction is the root cause, the developer's mistaken thinking is the error, and the system accepting invalid values at runtime is a failure. (Syllabus Section 1.2.3)",
  "ef-q3":
    "Test analysis consists of analysing the test basis to identify testable features and evaluate its testability. (Syllabus Section 1.4.1)",
  "ef-q4":
    "The defect clustering principle (Pareto) states that a small number of modules usually contain the majority of defects. (Syllabus Section 1.3.1)",
  "ef-q5":
    "Communication skills are essential to collaborate constructively with developers and give them factual, neutral feedback on the defects found. (Syllabus Section 1.5.1)",
  "ef-q6":
    "1 maps to A (test suite = set of test cases or scripts). 2 maps to C (test case = contains expected results). 3 maps to B (script = sequence of instructions). 4 maps to D (charter = objectives of an exploratory session). (Syllabus Section 1.4.3)",
  "ef-q7":
    "Analysing traceability and impact of changes helps determine which parts of the code are affected and therefore select the relevant regression test cases. (Syllabus Section 1.4.4)",
  "ef-q8":
    "The whole-team approach promotes shared responsibility for quality, where the entire team collaborates to achieve quality objectives. (Syllabus Section 1.5.2)",
  "ef-q9":
    "In a sequential model, executable code is produced late. Consequently, dynamic testing cannot take place before the coding phases, unlike static testing. (Syllabus Section 2.1.1)",
  "ef-q10":
    "A fundamental good practice is to assign distinct, specific objectives to each test level (component, integration, system, acceptance) to ensure testing complementarity. (Syllabus Section 2.1.2)",
  "ef-q11":
    "BDD (Behavior-Driven Development) uses scenarios written with the Given-When-Then structure to specify the expected behaviour of an application. (Syllabus Section 2.1.3)",
  "ef-q12":
    "DevOps synergy enables stronger collaboration to deliver stable increments much more frequently and quickly to the market. (Syllabus Section 2.1.4)",
  "ef-q13":
    "Performance testing (measuring response time) evaluates the non-functional behaviour of the system under given loads/constraints. (Syllabus Section 2.2.2)",
  "ef-q14":
    "Regression testing verifies that changes have not introduced unintended side effects in unchanged code. Confirmation testing (re-test) ensures that the original defect has been fixed. (Syllabus Section 2.2.3)",
  "ef-q15":
    "Static testing requires being able to analyse or read the work product (source code, documents). A third party's compiled executable code without access to the source cannot be examined statically; it can only be tested dynamically. (Syllabus Section 3.1.1)",
  "ef-q16":
    "Static testing (such as requirements reviews) can identify gaps or a lack of coverage of security requirements in the test basis before any code is even written. (Syllabus Section 3.1.3)",
  "ef-q17":
    "The structured formal review process includes several sequenced activities: planning, initiation, individual review, communication and analysis, remediation and reporting. (Syllabus Section 3.2.2)",
  "ef-q18":
    "The management role decides what should be reviewed, allocates time and resources, and ensures objectives are met. (Syllabus Section 3.2.3)",
  "ef-q19":
    "Black-box testing focuses on behavioural specifications, which allows it to be designed very early, independently of code structure or implementation choices. (Syllabus Section 4.1.1)",
  "ef-q20":
    "The valid equivalence partitions are: 1) [0, 1000], 2) [1001, 2000], 3) [2001, 4000], 4) [4001, 6000], 5) [6001, MaxInt]. Group d) {666 (partition 1), 999 (partition 1), 2222 (partition 3), 5555 (partition 4), 6666 (partition 5)} covers 4 distinct partitions out of 5 (80% coverage), which is the maximum offered. (Syllabus Section 4.2.1)",
  "ef-q21":
    "The point boundaries are 0, 50, 51, 70, 71, 90, 91, 100. The 10 boundary values theoretically required by 2-value analysis are {-1, 0, 50, 51, 70, 71, 90, 91, 100, 101}. The test cases cover {0, 50, 70, 90, 91, 100}. That is 6 out of the 10 possible values, i.e. 60% coverage. (Syllabus Section 4.2.2)",
  "ef-q22":
    "Rule R8 describes a non-member (is a member = F) who receives a free T-shirt on their 15th rental. Yet the rule clearly states that only members receive a free T-shirt after 15 rentals. R8 wrongly grants a T-shirt to a non-member. (Syllabus Section 4.2.3)",
  "ef-q23":
    "To cover the 7 valid transitions from the INIT state to the OFF state, at least 3 paths are required: TF1 (INIT -> test -> DEBUG -> done -> OFF), TF2 (INIT -> run -> IN OPERATION -> done -> OFF) and TF3 (INIT -> test -> DEBUG -> error -> IN OPERATION -> pause -> ON HOLD -> resume -> IN OPERATION -> done -> OFF). (Syllabus Section 4.2.4)",
  "ef-q24":
    "100% statement coverage guarantees that every executable statement line in the source code has been traversed at least once when the test suite is executed. (Syllabus Section 4.3.1)",
  "ef-q25":
    "Achieving 100% branch coverage means that every decision point (conditional) in the source code has taken all its possible outcomes (true and false for an IF) at least once. (Syllabus Section 4.3.2)",
  "ef-q26":
    "The test charter is the guiding document of an exploratory test session. It sets the general objectives and delimits the tester's exploration scope. (Syllabus Section 4.4.2)",
  "ef-q27":
    "The syllabus emphasises that checklists are very versatile and can effectively support various types of testing (functional and non-functional). (Syllabus Section 4.4.3)",
  "ef-q28":
    "In a collaborative approach (Three Amigos model), the story's acceptance criteria are co-written as a group by the business representative, the developer and the tester, and not in isolation by the tester. (Syllabus Section 4.5.1)",
  "ef-q29":
    "AC3 states that special users have all the access rights of regular users (who have access to floors 1 to 3 per AC1). To validate AC3, the most relevant test case is to check that the special user can indeed access floors 1, 2 and 3. (Syllabus Section 4.5.3)",
  "ef-q30":
    "The test approach describes the overall test strategy, including the test levels to apply, the test types, and the coverage criteria required for each level. (Syllabus Section 5.1.1)",
  "ef-q31":
    "Planning poker relies on reaching consensus. When there is a large estimation gap (testers estimate 20 because of the high security risks, while developers/customers estimate 5), the team must discuss the reasons for this gap before re-voting. (Syllabus Section 5.1.4)",
  "ef-q32":
    "According to the testing pyramid, the tests at the base (unit tests) are very numerous, isolated and extremely granular. The closer you move to the top (system tests, end-to-end tests), the less granular the tests are (they test large integrated complex flows). (Syllabus Section 5.1.6)",
  "ef-q33":
    "Dependencies: TC1 depends on TC4 (technical) and TC3 depends on TC4 (logical), so TC4 is executed before TC1 and TC3. Furthermore, TC5 depends on TC2 (logical) and TC6 depends on TC5 (technical), so the order is TC2 -> TC5 -> TC6. To prioritise the high priority {TC1, TC3}, you must start with TC4 -> TC3 -> TC1 or TC4 -> TC1 -> TC3, followed by the chain TC2 -> TC5 -> TC6. (Syllabus Section 5.1.5)",
  "ef-q34":
    "Quadrant Q2 corresponds to 'Business-oriented, team support' tests, which includes testing based on user stories, prototypes and functional scenarios. (Syllabus Section 5.1.7)",
  "ef-q35":
    "A project risk relates to project management, resources, schedules or contractual relationships. Losing experienced testers is a typical project risk. Options b, c and d are product risks. (Syllabus Section 5.2.2)",
  "ef-q36":
    "Configuration management is responsible for the integrity and baseline of deliverables when deploying from one environment to another. If a fix successfully tested in dev (c) systematically fails after installation in test (d/e), this strongly suggests a configuration management problem. (Syllabus Section 5.4.1)",
  "ef-q37":
    "Test monitoring and control focus on product quality, coverage, schedule adherence and test obstacles. The internal engineering effort required to generate the reports provides no value or relevance to stakeholders regarding quality or progress. (Syllabus Section 5.3.2)",
  "ef-q38":
    "According to the ISTQB standard, a formal defect report must include the date the defect was observed, for historical traceability and cycle time analysis. (Syllabus Section 5.5.1)",
  "ef-q39":
    "Management tools (in particular defect management or ALM tools) allow anomaly metrics, bug status and fix rates to be tracked and reported. (Syllabus Section 6.1.1)",
  "ef-q40":
    "One of the key benefits of automation is to provide objective structural coverage measures and evaluations, and to perform complex calculations far more precisely and quickly than a human. (Syllabus Section 6.2.1)",
};

export const ENSEMBLE_F_RATIONALES_EN: Record<string, string> = {
  "ef-q1-a": "False. This is a typical testing objective.",
  "ef-q1-b": "False. This is a typical testing objective.",
  "ef-q1-c": "Correct. This is not a typical objective listed in the syllabus.",
  "ef-q1-d": "False. This is a typical testing objective.",
  "ef-q2-a": "False. The distraction is the root cause.",
  "ef-q2-b": "False. The acceptance of invalid inputs observed at runtime is a failure.",
  "ef-q2-c": "False. The error is the human action or mistaken thinking.",
  "ef-q2-d": "Correct. The imperfection or anomaly present in the code is a defect.",
  "ef-q3-a": "False. Part of the Test Design phase.",
  "ef-q3-b": "False. Part of the Test Implementation phase.",
  "ef-q3-c": "False. Part of Test Completion.",
  "ef-q3-d":
    "Correct. Evaluating the test basis to determine its testability is a Test Analysis task.",
  "ef-q4-a": "False. This principle states that testing is context-dependent.",
  "ef-q4-b": "Correct. The Pareto principle states that defects cluster together.",
  "ef-q4-c": "False. This principle relates to the pesticide paradox.",
  "ef-q4-d": "False. This principle states that the absence of defects is an illusion.",
  "ef-q5-a": "False. Helps with overall design but not specifically with communication.",
  "ef-q5-b": "False. Helps design good test cases.",
  "ef-q5-c": "False. Helps detect complex defects.",
  "ef-q5-d": "Correct. Communication skills are key to effectively reporting failures.",
  "ef-q6-a": "Correct. Matches the official definitions exactly.",
  "ef-q6-b": "False. Incorrect association.",
  "ef-q6-c": "False. Incorrect association.",
  "ef-q6-d": "False. Incorrect association.",
  "ef-q7-a": "False. Impact analysis shows the affected parts, not directly overall quality.",
  "ef-q7-b": "False. This relates more to coverage.",
  "ef-q7-c":
    "Correct. Conducting an impact analysis allows regression tests to be selected intelligently.",
  "ef-q7-d": "False. Residual risk analysis relies on traceability of test results.",
  "ef-q8-a": "False. Members take tasks according to their skills.",
  "ef-q8-b": "Correct. The main asset is shared collective responsibility for quality.",
  "ef-q8-c": "False. The team works in close collaboration.",
  "ef-q8-d": "False. Roles and responsibilities are flexible.",
  "ef-q9-a":
    "Correct. Without executable code, dynamic testing is impossible early in the project.",
  "ef-q9-b": "False. Static reviews can start very early.",
  "ef-q9-c": "False. Test planning is done upfront.",
  "ef-q9-d": "False. Dynamic acceptance testing requires a working product, available late.",
  "ef-q10-a": "False. Every development activity must have a corresponding testing activity.",
  "ef-q10-b":
    "Correct. Defining clear, distinct objectives for each level avoids unnecessary duplication.",
  "ef-q10-c": "False. Design should start as soon as draft specifications are available.",
  "ef-q10-d": "False. Static reviews allow defects to be prevented very early.",
  "ef-q11-a": "False. TDD uses code-based unit tests.",
  "ef-q11-b": "False. ATDD uses acceptance criteria in a variable format.",
  "ef-q11-c": "Correct. This is the signature structural format of BDD (Given/When/Then).",
  "ef-q11-d": "False. CI/CD is a set of integration/delivery practices.",
  "ef-q12-a": "Correct. This is the major operational benefit of DevOps.",
  "ef-q12-b": "False. DevOps emphasises overall quality, including non-functional aspects.",
  "ef-q12-c":
    "False. Shift-Left reduces the risk of introducing defects but does not reduce the need for regression.",
  "ef-q12-d":
    "False. Implementing automation requires maintenance effort and is not a direct benefit in itself.",
  "ef-q13-a":
    "False. Even though the requirement comes from the business, it concerns performance (the how) rather than functionality (the what).",
  "ef-q13-b":
    "Correct. This is a typical performance test, which is part of non-functional testing.",
  "ef-q13-c": "False. Exploratory testing is done without rigid pre-designed test cases.",
  "ef-q13-d": "False. Performance tests are black-box (without knowledge of internal structure).",
  "ef-q14-a": "False. The absolute evolution of confirmation tests cannot be predicted.",
  "ef-q14-b": "False. It is the opposite (confirmation for fixes, regression for non-regression).",
  "ef-q14-c": "False. Both types of testing concern the test object itself.",
  "ef-q14-d":
    "Correct. Regression testing aims to detect unintended regressions, and confirmation testing verifies fixes.",
  "ef-q15-a": "False. Test cases can be reviewed or analysed statically.",
  "ef-q15-b": "False. Specifications and acceptance criteria are perfect targets.",
  "ef-q15-c":
    "Correct. A closed proprietary compiled binary offers no readable source code, preventing any static analysis.",
  "ef-q15-d": "False. Project models and documentation are perfectly suited to reviews.",
  "ef-q16-a": "False. Static testing finds defects, while dynamic testing reveals failures.",
  "ef-q16-b": "False. Measuring inadequate performance requires executing the code (dynamic).",
  "ef-q16-c": "False. Although it is a major objective, it is not the only one.",
  "ef-q16-d":
    "Correct. A traceability gap or a missing security requirement can easily be detected by static testing.",
  "ef-q17-a": "False. The technical review is led by a trained moderator.",
  "ef-q17-b": "Correct. These are indeed the standard main steps of a formal review process.",
  "ef-q17-c":
    "False. Deliverables must be distributed well before the meeting for individual review.",
  "ef-q17-d": "False. Reporting all discovered defects is mandatory.",
  "ef-q18-a": "False. Post-review rework is the responsibility of the author.",
  "ef-q18-b": "Correct. Management decides what to review.",
  "ef-q18-c": "False. This is the facilitator's task of running the sessions.",
  "ef-q18-d": "False. Recording decisions is the scribe's role.",
  "ef-q19-a": "False. This is the definition of white-box techniques.",
  "ef-q19-b":
    "Correct. As it does not need access to the source code, this test case can be created independently and early.",
  "ef-q19-c": "False. This is the strength of experience-based techniques.",
  "ef-q19-d": "False. If the specification changes, black-box test cases must be adjusted.",
  "ef-q20-a": "False. Covers only 3 partitions out of 5 (60% coverage).",
  "ef-q20-b": "False. Covers only 3 partitions out of 5 (60% coverage).",
  "ef-q20-c": "False. Covers only 3 partitions out of 5 (60% coverage).",
  "ef-q20-d":
    "Correct. Offers the highest coverage (80%) by testing 4 distinct equivalence partitions.",
  "ef-q21-a": "Correct. 6 boundary values out of the 10 theoretical ones are covered, i.e. 60%.",
  "ef-q21-b": "False. Incorrect calculation.",
  "ef-q21-c": "False. Incorrect calculation.",
  "ef-q21-d": "False. Crucial boundaries (-1, 51, 71, 101) are not tested.",
  "ef-q22-a": "False. R4 is valid per the requirements.",
  "ef-q22-b": "False. R2 is valid per the requirements.",
  "ef-q22-c": "False. R6 is valid per the requirements.",
  "ef-q22-d":
    "Correct. R8 directly contradicts the requirements by granting a free T-shirt to a non-member.",
  "ef-q23-a": "False. Two cases cannot cover all the error, hold and exit paths.",
  "ef-q23-b":
    "Correct. Three well-designed test cases are enough for 100% valid transition coverage.",
  "ef-q23-c": "False. Four cases achieve coverage but that is not the required minimum.",
  "ef-q23-d": "False. Corresponds to the total number of valid transitions.",
  "ef-q24-a": "Correct. This is the official definition of statement coverage.",
  "ef-q24-b": "False. Having more test cases does not guarantee better structural coverage.",
  "ef-q24-c": "False. Does not imply branch coverage.",
  "ef-q24-d": "False. Refers to exhaustive testing, which is impractical.",
  "ef-q25-a": "False. At least one test case must be executed.",
  "ef-q25-b": "False. Executing a branch does not reveal all possible bugs.",
  "ef-q25-c": "False. Statement coverage does not imply branch coverage.",
  "ef-q25-d":
    "Correct. Requires executing all decision outcomes of every conditional control transition.",
  "ef-q26-a": "Correct. This is the fundamental role of a test charter.",
  "ef-q26-b": "False. Steps and results are recorded in the session log, not the charter.",
  "ef-q26-c": "False. It is formulated as themes or objectives, not only as questions.",
  "ef-q26-d": "False. Results are discussed during the debriefing meeting.",
  "ef-q27-a":
    "False. Checklists leave room for interpretation, which reduces strict repeatability.",
  "ef-q27-b":
    "False. It does not require detailed cases, but the question asks for the most distinctive advantage across test types.",
  "ef-q27-c": "False. A checklist can be incomplete or outdated.",
  "ef-q27-d":
    "Correct. Checklists support a wide range of test types (functional and non-functional).",
  "ef-q28-a": "False. This is true; a collaborative story integrates all these perspectives.",
  "ef-q28-b": "False. This is true; it is the very essence of the collaborative approach.",
  "ef-q28-c":
    "Correct. This statement is false (acceptance criteria must be built by three, not in isolation).",
  "ef-q28-d": "False. This is true; it describes the INVEST acronym.",
  "ef-q29-a": "False. Validates AC1, not AC3.",
  "ef-q29-b": "False. Validates AC2 indirectly, not AC3.",
  "ef-q29-c": "False. Floor 5 is not described in the acceptance criteria.",
  "ef-q29-d":
    "Correct. Directly verifies the special user's access to floors 1, 2 and 3 in accordance with AC3.",
  "ef-q30-a": "False. Concerns the hardware or software resources required to test.",
  "ef-q30-b": "False. Concerns the identification and management of project/product risks.",
  "ef-q30-c": "False. Presents the business drivers and the product.",
  "ef-q30-d":
    "Correct. Defining the test levels used and their coverage criteria falls under the test approach.",
  "ef-q31-a": "False. Ignoring the testers' high estimate would neglect major risks.",
  "ef-q31-b":
    "Correct. This is the standard approach: discuss the extreme estimates and then re-vote.",
  "ef-q31-c":
    "False. The customer's or PO's estimate is not more crucial than the technical team's.",
  "ef-q31-d": "False. It is not mandatory to reach an absolutely identical value indefinitely.",
  "ef-q32-a": "False. It is the opposite: the base contains a large number of granular tests.",
  "ef-q32-b": "Correct. The closer you get to the top, the less granular the test level.",
  "ef-q32-c": "False. The number and naming of test layers vary across projects.",
  "ef-q32-d": "False. End-to-end tests are generally the slowest and most complex.",
  "ef-q33-a": "False. Violates TC1's dependency, which requires TC4.",
  "ef-q33-b":
    "Correct. Strictly respects all technical and logical dependencies while prioritising high priority.",
  "ef-q33-c": "False. TC5 executes before TC2, which violates its dependency.",
  "ef-q33-d":
    "False. Unnecessarily delays execution of high-priority tests after low-priority cases.",
  "ef-q34-a": "False. Belongs to quadrant Q1 (technology-oriented, team support).",
  "ef-q34-b": "Correct. User story-based testing falls in quadrant Q2.",
  "ef-q34-c": "False. Belongs to quadrant Q4 (technology-oriented, critiques the product).",
  "ef-q34-d": "False. Belongs to quadrant Q3 (business-oriented, critiques the product).",
  "ef-q35-a": "Correct. Concerns human resources and project organisation (project risk).",
  "ef-q35-b": "False. Concerns a quality defect of the final product (product risk).",
  "ef-q35-c": "False. Concerns a performance failure of the product (product risk).",
  "ef-q35-d": "False. Concerns an accessibility defect of the product (product risk).",
  "ef-q36-a":
    "False. The fix was proven functional at step c, so the origin of the error is later.",
  "ef-q36-b": "False. The text explicitly rules out errors or omissions by the testers.",
  "ef-q36-c":
    "Correct. It is the fundamental role of configuration management to ensure that what was developed and validated in dev is exactly what is installed in test.",
  "ef-q36-d": "False. The fix was proven functional at step c.",
  "ef-q37-a": "False. Test environment outages are critical obstacles to report.",
  "ef-q37-b":
    "Correct. Optimising internal computation time provides no value to stakeholders regarding quality or progress.",
  "ef-q37-c": "False. Being behind schedule is essential steering information.",
  "ef-q37-d": "False. Identifying new product risks is crucial for guiding release decisions.",
  "ef-q38-a": "False. The title correctly describes the anomaly.",
  "ef-q38-b": "False. Technical severity and business priority are conceptually different.",
  "ef-q38-c": "False. 'New' is the correct initial status for a bug that has just been submitted.",
  "ef-q38-d":
    "Correct. The observation or report creation date was omitted, which is information required by ISTQB.",
  "ef-q39-a":
    "Correct. Defect/test management tools are designed to catalogue, track and report defect status.",
  "ef-q39-b":
    "False. Static testing tools analyse code or documentation to identify defects but do not manage global reporting.",
  "ef-q39-c": "False. Coverage tools measure the portion of code tested.",
  "ef-q39-d": "False. Scalability tools support the technical sizing of tests.",
  "ef-q40-a":
    "Correct. Automation provides total objectivity and reliable execution measures that cannot be derived manually.",
  "ef-q40-b":
    "False. Estimating automation effort (especially maintenance) is notoriously difficult and complex.",
  "ef-q40-c":
    "False. The absence of human critical thinking is a major risk of automation, not a benefit.",
  "ef-q40-d": "False. Automation does not by itself ensure regulatory compliance automatically.",
};
