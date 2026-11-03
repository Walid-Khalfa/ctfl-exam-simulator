// ISTQB Foundation Level v4.0 - Ensemble C (v1.0.0) - English translations
// Source of truth for the English content of Ensemble C. Records are merged by
// stable ID at read time (see src/lib/content-translations.ts). French source
// text remains in seed-ensemble-c.ts and is never modified here.
// Terminology follows the official ISTQB CTFL v4.0 syllabus.

export const ENSEMBLE_C_EXAM_EN = {
  title_en: "ISTQB CTFL v4.0 Sample Exam — SET C (v1.0.0)",
  description_en:
    "Official ISTQB Foundation Level v4.0 practice exam (Set C, v1.0.0, GTB edition). Includes 40 unique questions covering all syllabus chapters with explanations and justifications of the official answers.",
};

export const ENSEMBLE_C_QUESTIONS_EN: Record<string, string> = {
  "ec-q1": "Which of the following BEST describes a fundamental objective of software testing?",
  "ec-q2":
    "Why is it important to integrate testing activities throughout the software development lifecycle (SDLC)?",
  "ec-q3": "How does quality control (software testing) differ from quality assurance (QA)?",
  "ec-q4":
    "A financial application has been tested intensively using the same test suite for several months. Although the system receives regular updates, these tests detect no new defects. Which testing principle BEST applies here?",
  "ec-q5":
    "In the ISTQB testing process, which activity involves identifying the testable characteristics of a test object and defining the associated test conditions?",
  "ec-q6":
    "How does maintaining bidirectional traceability between the test basis and test cases help the test team?",
  "ec-q7":
    "When reporting defects to developers, which tester attitude BEST fosters constructive collaboration?",
  "ec-q8": "What does the Whole-Team Approach advocate in an agile project?",
  "ec-q9":
    "In a sequential development model (such as the V-model), how are testing levels generally organized?",
  "ec-q10":
    "Which of the following is a good testing practice that applies to ALL software development lifecycles?",
  "ec-q11": "What is the main characteristic of Behavior-Driven Development (BDD)?",
  "ec-q12": "What is the main impact of a DevOps approach on testing activities?",
  "ec-q13":
    "Which testing level focuses on the interactions between software components and external systems?",
  "ec-q14": "Which of the following is an example of a trigger for maintenance testing?",
  "ec-q15": "Which of the following can be examined using static testing?",
  "ec-q16": "What is one of the major advantages of static testing over dynamic testing?",
  "ec-q17":
    "In what logical order are the activities of a formal review process generally performed?",
  "ec-q18":
    "Which role in a formal review is responsible for leading the meeting, ensuring the objectives are met and keeping the review constructive?",
  "ec-q19": "What is the main characteristic of experience-based testing techniques?",
  "ec-q20":
    "An input field accepts a postal code consisting of 5 digits only (from 00000 to 99999). Postal codes containing letters or symbols are not valid.\n\nUsing equivalence partitioning, which of the following represents a minimal set of values to test both the valid and invalid partitions?",
  "ec-q21":
    "A car insurance pricing system applies a loyalty discount based on the driver's age:\n• Under 25: no discount (T < 25)\n• From 25 to 65 inclusive: 15% discount (25 <= T <= 65)\n• Over 65: 20% discount (T > 65)\n\nUsing two-value boundary value analysis, which age values must be tested to validate the boundaries?",
  "ec-q22":
    "Consider the validation system of a bank loan:\n• If the client has a good credit history AND a stable income, the loan is automatically approved.\n• If the client has a good credit history but an unstable income, the loan requires collateral.\n• If the client has a bad credit history, the loan is immediately rejected, regardless of income.\n\nHow many columns (rules) does the simplified and complete decision table contain for this system?",
  "ec-q23":
    "A smart lock system presents the following states: Locked, Unlocked, Alarm.\n• From the Locked state: a valid badge moves to the Unlocked state. 3 consecutive invalid badges trigger the Alarm state.\n• From the Unlocked state: a manual closing moves back to the Locked state.\n• From the Alarm state: an admin code moves back to the Locked state.\n\nWhat is the minimum number of transitions required to achieve full coverage of valid transitions (0-switch transition coverage) starting from the initial Locked state?",
  "ec-q24": "Which of the following statements about statement coverage is correct?",
  "ec-q25":
    "If a tester achieves 100% branch coverage, what is the logical consequence for statement coverage of the same code?",
  "ec-q26": "How do testers apply the error guessing technique?",
  "ec-q27": "In which situation is exploratory testing most appropriate and beneficial?",
  "ec-q28":
    "When writing test cases based on user stories, how do acceptance criteria help the tester?",
  "ec-q29":
    "Consider the following user story:\n'As a customer, I want to add items to my shopping cart so that I can purchase them together.'\n\nAcceptance criteria specify:\n1. The cart must update the total number of items.\n2. The total price must be updated correctly.\n3. A confirmation message must be displayed for each addition.\n\nWhich test case is LEAST relevant for testing this user story?",
  "ec-q30":
    "How does the test team most effectively collaborate with developers and the Product Owner when planning iterations?",
  "ec-q31":
    "Which of the following represents a typical entry criterion for the system testing level?",
  "ec-q32":
    "You must estimate the testing effort for a project using metric-based estimation from previous projects. In a similar project, total development effort was 120 person-days, and testing effort was 40 person-days (a 1:3 ratio).\n\nIf the development of the new project is estimated at 180 person-days, what is the estimated testing effort required according to this ratio?",
  "ec-q33":
    "You have 5 test cases (TC1 to TC5) with the following priorities (1 being highest) and dependencies:\n• TC1: Priority 3, no dependency.\n• TC2: Priority 1, depends on TC1.\n• TC3: Priority 2, depends on TC2.\n• TC4: Priority 1, depends on TC1.\n• TC5: Priority 3, depends on TC3.\n\nWhat is the optimal execution sequence that respects the dependencies while prioritizing the most critical test cases?",
  "ec-q34":
    "According to Brian Marick's test quadrant model, which quadrant do performance, load and security tests (technology-facing and critically evaluating the product) belong to?",
  "ec-q35":
    "If a product risk analysis reveals a high risk of data loss on unexpected user disconnection, which testing action should be prioritized?",
  "ec-q36":
    "Which metric is most appropriate for assessing the progress and status of test implementation?",
  "ec-q37": "How does configuration management support software testing activities?",
  "ec-q38":
    "A tester writes the following defect report:\n'The system crashes.\nSeverity: High.\nDescription: When I click the order confirmation button, the application freezes for 30 seconds and then closes abruptly. I used the test account 'Client01'. No error message appears.'\n\nWhich essential information is MISSING from this report for a developer to efficiently diagnose and fix the defect?",
  "ec-q39":
    "Among the following tool categories, which is primarily designed to support evaluating work product quality without executing the code (static testing)?",
  "ec-q40": "What is one of the major risks associated with test automation?",
};

export const ENSEMBLE_C_OPTIONS_EN: Record<string, string> = {
  "ec-q1-a": "Prove that there are no more hidden defects in the software.",
  "ec-q1-b": "Evaluate work products to verify they meet the specified requirements.",
  "ec-q1-c": "Maximize the project duration to ensure all the code is written.",
  "ec-q1-d": "Give developers exclusive responsibility for final quality.",
  "ec-q2-a": "Ensure the code is fully automated from day one.",
  "ec-q2-b": "Detect and fix defects as early as possible, thereby reducing costs and risks.",
  "ec-q2-c": "Completely eliminate the need for user acceptance testing.",
  "ec-q2-d": "Exhaustively prove the legal compliance of the source code.",
  "ec-q3-a":
    "Testing focuses on improving overall processes, while QA focuses only on executing the code.",
  "ec-q3-b":
    "Testing is a product-oriented activity that evaluates quality, while QA is a process-oriented activity aimed at preventing defects.",
  "ec-q3-c": "Testing guarantees 100% coverage, while QA takes care of resource management.",
  "ec-q3-d":
    "There is no difference; the two terms are strictly synonymous in software engineering.",
  "ec-q4-a": "Absence of errors is an illusion.",
  "ec-q4-b": "Tests wear out (the pesticide paradox).",
  "ec-q4-c": "Defects cluster.",
  "ec-q4-d": "Exhaustive testing is impossible.",
  "ec-q5-a": "Test analysis.",
  "ec-q5-b": "Test design.",
  "ec-q5-c": "Test implementation.",
  "ec-q5-d": "Test execution.",
  "ec-q6-a": "It guarantees the application will be free of defects.",
  "ec-q6-b": "It helps assess the impact of changes and measure requirements coverage by tests.",
  "ec-q6-c": "It avoids having to run regression tests.",
  "ec-q6-d": "It replaces the need to write acceptance criteria.",
  "ec-q7-a": "Insist that the developer's mistake is basic and avoidable.",
  "ec-q7-b":
    "Present the facts in a neutral, objective and factual manner, without value judgments.",
  "ec-q7-c": "Wait until the end of the test phase to submit all defects at once.",
  "ec-q7-d": "Let the project manager act as the sole intermediary to avoid any direct contact.",
  "ec-q8-a":
    "That all team members (including developers and business representatives) share responsibility for quality and testing.",
  "ec-q8-b": "That the test team works in isolation, independently, without interference.",
  "ec-q8-c": "That the Product Owner writes all of the automated test cases.",
  "ec-q8-d": "That the number of developers is strictly equal to the number of testers.",
  "ec-q9-a":
    "All tests are grouped together and executed in a single final phase just before going live.",
  "ec-q9-b": "Each testing level is mapped to a corresponding specific development phase.",
  "ec-q9-c": "Component testing is omitted in favor of system testing.",
  "ec-q9-d": "They are planned in a purely ad-hoc manner, based on daily customer feedback.",
  "ec-q10-a": "Let developers perform all system testing themselves.",
  "ec-q10-b":
    "Start testing activities (such as reviewing requirements) as early as possible in the SDLC.",
  "ec-q10-c": "Run only automated tests to eliminate any human error.",
  "ec-q10-d": "Wait until the architecture is finalized before writing the first test cases.",
  "ec-q11-a":
    "It uses acceptance criteria written in a structured Given-When-Then format shared by the whole team.",
  "ec-q11-b": "It requires testers to write unit test code before the developers.",
  "ec-q11-c": "It completely eliminates the use of automated testing tools.",
  "ec-q11-d": "It focuses exclusively on measuring branch coverage.",
  "ec-q12-a": "It increases the separation between developers and testers.",
  "ec-q12-b":
    "It promotes rapid and continuous feedback through continuous integration (CI) and continuous delivery (CD).",
  "ec-q12-c": "It replaces all manual testing with artificial intelligence.",
  "ec-q12-d": "It removes the need for test planning.",
  "ec-q13-a": "Component (unit) testing.",
  "ec-q13-b": "Integration testing.",
  "ec-q13-c": "System testing.",
  "ec-q13-d": "User acceptance testing.",
  "ec-q14-a": "The hiring of a new developer on the team.",
  "ec-q14-b": "A modification or fix to a feature in production.",
  "ec-q14-c": "Writing a new user story for a future release.",
  "ec-q14-d": "A retrospective analysis meeting after an iteration.",
  "ec-q15-a": "Only the compiled code executed on the test environment.",
  "ec-q15-b":
    "Practically any written work product, including specifications, source code and test cases.",
  "ec-q15-c": "Only the graphical user interface.",
  "ec-q15-d": "Exclusively legal contracts with customers.",
  "ec-q16-a": "They run much faster in the production environment.",
  "ec-q16-b":
    "They detect defects early before the software is executed, making them cheaper to fix.",
  "ec-q16-c": "They accurately measure the system's load performance.",
  "ec-q16-d": "They necessarily require the use of a complete test environment.",
  "ec-q17-a": "Individual preparation -> Meeting -> Planning -> Fixing.",
  "ec-q17-b":
    "Planning -> Kickoff -> Individual preparation -> Communication and analysis of anomalies -> Fixing and follow-up.",
  "ec-q17-c": "Meeting -> Fixing -> Closure -> Kickoff.",
  "ec-q17-d": "Kickoff -> Meeting -> Recording -> Planning.",
  "ec-q18-a": "The author.",
  "ec-q18-b": "The facilitator (or moderator).",
  "ec-q18-c": "The scribe.",
  "ec-q18-d": "The reviewer.",
  "ec-q19-a": "Test cases are systematically derived from UML structure diagrams.",
  "ec-q19-b":
    "Tests leverage testers' domain knowledge, experience and intuition to identify defects.",
  "ec-q19-c": "They strictly measure the percentage of code line coverage.",
  "ec-q19-d": "They require a highly formalized, mathematical requirements specification.",
  "ec-q20-a": "12345 (valid), 1234 (invalid), 123456 (invalid), '95A12' (invalid).",
  "ec-q20-b": "12345, 99999, 00000.",
  "ec-q20-c": "12345 (valid), 67890 (valid).",
  "ec-q20-d": "All possible combinations of valid codes.",
  "ec-q21-a": "24, 25, 65, 66.",
  "ec-q21-b": "11, 13, 14.",
  "ec-q21-c": "25, 65.",
  "ec-q21-d": "23, 24, 25, 26, 64, 65, 66, 67.",
  "ec-q22-a": "8 columns.",
  "ec-q22-b": "3 columns (due to merging the cases where the credit history is bad).",
  "ec-q22-c": "4 columns.",
  "ec-q22-d": "2 columns.",
  "ec-q23-a": "2 transitions.",
  "ec-q23-b": "4 transitions (Valid badge -> Manual closing -> 3 invalid badges -> Admin code).",
  "ec-q23-c": "6 transitions.",
  "ec-q23-d": "3 transitions.",
  "ec-q24-a": "It guarantees no infinite loop will occur in the code.",
  "ec-q24-b":
    "It evaluates the percentage of executable statements actually exercised by the tests.",
  "ec-q24-c": "100% statement coverage ensures the detection of all logic defects.",
  "ec-q24-d": "It only applies to database execution.",
  "ec-q25-a": "Statement coverage will also necessarily be 100%.",
  "ec-q25-b": "Statement coverage will be at most 50%.",
  "ec-q25-c": "There is no relationship; the two coverages are completely independent.",
  "ec-q25-d": "Statement coverage will be at least 65%.",
  "ec-q26-a": "By asking end users to guess how to use the application.",
  "ec-q26-b":
    "By drawing on past knowledge, lists of common errors and typical anomaly types to enumerate potential defects.",
  "ec-q26-c": "By running tests generated randomly by an automated tool.",
  "ec-q26-d": "By guessing which lines of code contain the most complex variables.",
  "ec-q27-a":
    "When very detailed and formal specifications are available from the start of the project.",
  "ec-q27-b":
    "Under strong time pressure, with insufficient specifications, or to complement other formal techniques.",
  "ec-q27-c": "To replace all automated regression testing.",
  "ec-q27-d": "Only during unit testing performed by developers.",
  "ec-q28-a":
    "They serve as the direct basis for defining the story's acceptance conditions and test cases.",
  "ec-q28-b": "They allow the application code to be generated automatically.",
  "ec-q28-c": "They avoid having to validate the story with the Product Owner.",
  "ec-q28-d": "They determine the task distribution within the development team.",
  "ec-q29-a": "Add a €15 book, verify the cart contains 1 item and the total price shows €15.",
  "ec-q29-b":
    "Verify the user can change their preferred payment method in their profile settings.",
  "ec-q29-c": "Add an item, verify an 'Item added to cart' confirmation message appears on screen.",
  "ec-q29-d": "Add two different items and verify the total equals the sum of the two prices.",
  "ec-q30-a":
    "By estimating the complexity of the user stories and defining the effort required to test them.",
  "ec-q30-b": "By requiring all user stories to be fully tested before the iteration begins.",
  "ec-q30-c": "By unilaterally setting the team's development velocity.",
  "ec-q30-d": "By forbidding the inclusion of any non-functional requirement.",
  "ec-q31-a": "The final report of user acceptance testing results.",
  "ec-q31-b":
    "The availability of a configured system-level test environment, and code components that have passed integration testing.",
  "ec-q31-c": "Fixing 100% of the minor defects found by acceptance testing.",
  "ec-q31-d": "Signing of the final contract by end users.",
  "ec-q32-a": "40 person-days.",
  "ec-q32-b": "60 person-days (applying the 1:3 ratio to 180 person-days).",
  "ec-q32-c": "120 person-days.",
  "ec-q32-d": "180 person-days.",
  "ec-q33-a": "TC2 -> TC4 -> TC3 -> TC1 -> TC5.",
  "ec-q33-b":
    "TC1 -> TC4 -> TC2 -> TC3 -> TC5 (Since TC1 has no dependency and is required for TC4 and TC2, and TC2 is required for TC3 which is required for TC5).",
  "ec-q33-c": "TC1 -> TC2 -> TC3 -> TC4 -> TC5.",
  "ec-q33-d": "TC5 -> TC3 -> TC2 -> TC4 -> TC1.",
  "ec-q34-a": "Quadrant Q1.",
  "ec-q34-b": "Quadrant Q2.",
  "ec-q34-c": "Quadrant Q3.",
  "ec-q34-d": "Quadrant Q4 (Technology-facing, critiquing the product).",
  "ec-q35-a": "Defer security testing to a later iteration.",
  "ec-q35-b":
    "Design and execute test cases simulating a network or power outage during an active transfer to validate data recovery.",
  "ec-q35-c":
    "Ask the Product Owner to modify the requirements to avoid having to handle this case.",
  "ec-q35-d": "Focus only on homepage performance testing.",
  "ec-q36-a": "The total number of lines of code written.",
  "ec-q36-b": "The percentage of test cases written and validated out of the planned total.",
  "ec-q36-c": "The number of meetings held by the test team.",
  "ec-q36-d": "The budget spent so far.",
  "ec-q37-a": "By defining testers' salary increases.",
  "ec-q37-b":
    "By ensuring all test items (code, requirements, test cases, automated scripts) are identified, versioned and uniquely, consistently traced.",
  "ec-q37-c": "By managing the purchase of physical equipment for the team.",
  "ec-q37-d": "By dictating the team's start and end times of day.",
  "ec-q38-a": "The name of the tester who found the defect.",
  "ec-q38-b":
    "The detailed steps to reproduce the anomaly, including the exact input data and the application version.",
  "ec-q38-c": "The estimated cost of fixing the defect.",
  "ec-q38-d": "The tester's personal opinion on the developer's overall work quality.",
  "ec-q39-a": "Performance testing tools.",
  "ec-q39-b": "Static code analysis tools (linters, static security analyzers).",
  "ec-q39-c": "Test execution management tools.",
  "ec-q39-d": "Environment emulation tools.",
  "ec-q40-a":
    "Expecting unrealistic short-term productivity and effort savings (underestimated initial and maintenance costs).",
  "ec-q40-b": "Total inability to integrate it with CI/CD pipelines.",
  "ec-q40-c": "Mandatory increase in the number of defects introduced in production.",
  "ec-q40-d": "Complete removal of professional interest for developers.",
};

export const ENSEMBLE_C_EXPLANATIONS_EN: Record<string, string> = {
  "ec-q1":
    "Evaluating work products to ensure they meet requirements is a fundamental testing objective (Syllabus v4.0, Section 1.1.1). Proving the complete absence of defects is impossible (Principle 2).",
  "ec-q2":
    "Integrating testing early in the SDLC (shift-left approach) detects defects at lower cost before they propagate and become more expensive to fix (Syllabus v4.0, Section 1.2.1 and 2.1.2).",
  "ec-q3":
    "Testing is product-oriented (evaluating the quality of the test object), while quality assurance is process-oriented (establishing robust development processes to prevent defects) (Syllabus v4.0, Section 1.2.2).",
  "ec-q4":
    "The principle 'tests wear out' (the pesticide paradox) states that if the same tests are repeated indefinitely, they will eventually stop finding new defects because the system has become immune to those tests. They must be updated regularly (Syllabus v4.0, Section 1.3.1).",
  "ec-q5":
    "Test analysis consists of analyzing the test basis to identify testable characteristics and define the associated test conditions. Test design then translates these conditions into test cases (Syllabus v4.0, Section 1.4.1).",
  "ec-q6":
    "Bidirectional traceability allows evaluating requirements coverage (knowing whether all requirements are covered by tests) and performing effective impact analysis when a requirement changes (Syllabus v4.0, Section 1.4.4).",
  "ec-q7":
    "Effective, constructive communication requires being objective, factual and neutral. Focus should be on improving product quality without criticizing people (Syllabus v4.0, Section 1.5.1).",
  "ec-q8":
    "The Whole-Team Approach states that quality and testing are the responsibility of every member of the project team, not just designated testers (Syllabus v4.0, Section 1.5.2).",
  "ec-q9":
    "In a V-model, each testing level (Component, Integration, System, Acceptance) maps directly to a development phase (Specification, Design, Coding) (Syllabus v4.0, Section 2.1.1).",
  "ec-q10":
    "Testing as early as possible (shift-left) is a universal golden rule that applies to all software development lifecycles (Syllabus v4.0, Section 2.1.2).",
  "ec-q11":
    "BDD expresses requirements in terms of expected system behaviors described through a readable, structured format (Given / When / Then), fostering shared understanding between PO, developers and testers (Syllabus v4.0, Section 2.1.3).",
  "ec-q12":
    "DevOps breaks down silos between dev and ops by relying on continuous automation (CI/CD) to provide rapid, frequent feedback on the quality of every code delivery (Syllabus v4.0, Section 2.1.4).",
  "ec-q13":
    "Integration testing focuses on evaluating the interfaces and interactions between modules, subsystems or with external systems (Syllabus v4.0, Section 2.2.1).",
  "ec-q14":
    "Maintenance testing is triggered by a change to a system already deployed in production (bug fix, added improvement), a migration to a new platform, or the complete removal of a feature (Syllabus v4.0, Section 2.3.1).",
  "ec-q15":
    "Practically all written work products can undergo static testing (without execution): requirements specifications, test plans, user guides, source code, etc. (Syllabus v4.0, Section 3.1.1).",
  "ec-q16":
    "Because they apply to design, architecture and code documents before execution, static tests identify defects at the source, preventing late propagation and drastically reducing total fix cost (Syllabus v4.0, Section 3.1.2).",
  "ec-q17":
    "The ISTQB formal review process follows this logical order: Planning, Kickoff, Individual preparation, Communication and analysis of anomalies, then Fixing and follow-up (Syllabus v4.0, Section 3.2.1).",
  "ec-q18":
    "The facilitator (or moderator) runs and leads the review meeting, keeps to the schedule and ensures a healthy, productive discussion environment (Syllabus v4.0, Section 3.2.2).",
  "ec-q19":
    "Experience-based techniques rely on the tester's skills, historical know-how and intuition to design scenarios targeting the system's usual vulnerabilities (Syllabus v4.0, Section 4.1.1).",
  "ec-q20":
    "The equivalence partitions here are:\n1. Valid partition: 5 digits only (e.g. 12345).\n2. Invalid partition (too short): fewer than 5 characters (e.g. 1234).\n3. Invalid partition (too long): more than 5 characters (e.g. 123456).\n4. Invalid partition (unauthorized characters): contains letters or symbols (e.g. '95A12').\nOption A covers these four equivalences in a minimal and complete way (Syllabus v4.0, Section 4.2.1).",
  "ec-q21":
    "For two-value boundary value analysis, we test the boundary value itself and its immediate neighbor outside the boundary:\n• For boundary 25: the values are 25 (valid discount) and 24 (no discount).\n• For boundary 65: the values are 65 (valid discount) and 66 (no 15% discount / valid 20% discount).\nThe minimum required values to test are therefore 24, 25, 65, 66 (Syllabus v4.0, Section 4.2.2).",
  "ec-q22":
    "The simplified decision table contains the following rules:\n• Rule 1: Good credit history (Yes) AND stable income (Yes) -> Automatic approval.\n• Rule 2: Good credit history (Yes) AND stable income (No) -> Collateral required.\n• Rule 3: Bad credit history (No) -> Immediate rejection (income no longer matters, hence a merged column).\nThe simplified table therefore contains 3 columns (Syllabus v4.0, Section 4.2.3).",
  "ec-q23":
    "From the initial Locked state, we must cover the following valid transitions:\n1. Locked -> Unlocked (valid badge)\n2. Unlocked -> Locked (manual closing)\n3. Locked -> Alarm (3 invalid badges)\n4. Alarm -> Locked (admin code)\nThe minimal test path covering these 4 transitions requires a valid badge, a manual closing, 3 invalid attempts to trigger the alarm, then entering the admin code. This represents 4 distinct test transitions (Syllabus v4.0, Section 4.2.4).",
  "ec-q24":
    "Statement coverage measures the proportion of executable statements actually executed by the test suite relative to the total number of statements in the code (Syllabus v4.0, Section 4.3.1).",
  "ec-q25":
    "Achieving 100% branch coverage guarantees that all possible decisions were taken, and therefore logically all executable statements inside those branches. The reverse is not true (Syllabus v4.0, Section 4.3.2).",
  "ec-q26":
    "Error guessing relies on the test engineer's past experience to anticipate human errors, defects and typical failures in similar contexts (Syllabus v4.0, Section 4.4.1).",
  "ec-q27":
    "Exploratory tests are particularly useful when time is short, specifications are sparse, or to complement more structured, formal tests by discovering unforeseen cases (Syllabus v4.0, Section 4.4.2).",
  "ec-q28":
    "Acceptance criteria define the conditions the product must meet to be accepted by the PO. They therefore serve as the direct basis for designing acceptance scenarios and test cases (Syllabus v4.0, Section 4.5.1).",
  "ec-q29":
    "Changing the user's payment profile has no direct functional link with adding items to a cart as described in the User Story (Syllabus v4.0, Section 4.5.3).",
  "ec-q30":
    "During iteration planning, testers add value by assessing story testability, estimating the effort required to test them and helping to clearly define acceptance scenarios (Syllabus v4.0, Section 5.1.2).",
  "ec-q31":
    "Entry criteria define the conditions required to start a testing level. Having a working environment and code modules validated at lower levels is a typical entry criterion (Syllabus v4.0, Section 5.1.3).",
  "ec-q32":
    "With the historical ratio of 1:3 (40 testing days for 120 development days), for a new project estimated at 180 development days, the estimated testing effort is 180 / 3 = 60 person-days (Syllabus v4.0, Section 5.1.4).",
  "ec-q33":
    "To run TC2 or TC4 (priority 1), we must first run their dependency TC1 (priority 3). So TC1 goes first. Next, we run the priority 1 cases (TC4 and TC2). Finally, TC2 unblocks TC3 (priority 2), which unblocks TC5 (priority 3). The optimal sequence is therefore TC1 -> TC4 -> TC2 -> TC3 -> TC5 (Syllabus v4.0, Section 5.1.5).",
  "ec-q34":
    "Quadrant Q4 of Brian Marick's model groups non-functional tests (performance, security, robustness) that are technology-facing and critically evaluate the product (Syllabus v4.0, Section 5.1.7).",
  "ec-q35":
    "To mitigate a product risk identified as high (data loss on outage), the test plan must prioritize executing robustness scenarios that precisely reproduce these failure conditions to ensure the system maintains its integrity (Syllabus v4.0, Section 5.2.4).",
  "ec-q36":
    "To track the status of test implementation (or preparation), measuring the percentage of test cases written, reviewed and committed against the estimated target is the ideal tracking metric (Syllabus v4.0, Section 5.3.2).",
  "ec-q37":
    "Configuration management guarantees the traceability and integrity of all software artifacts (requirements, code, test cases, defects) by ensuring they are versioned uniquely and consistently (Syllabus v4.0, Section 5.4.1).",
  "ec-q38":
    "A useful defect report must contain the precise step-by-step instructions to reproduce the bug, the test data entered, the application version and expected vs. actual behaviors (Syllabus v4.0, Section 5.5.1).",
  "ec-q39":
    "Static code analysis tools analyze source code or other written artifacts without executing the program to find syntax errors, standard violations or security flaws (Syllabus v4.0, Section 6.1.1).",
  "ec-q40":
    "A major risk of test automation is having unrealistic short-term expectations, ignoring the significant effort required to set up, maintain and update test scripts whenever functionality changes (Syllabus v4.0, Section 6.2.1).",
};

// Per-option rationales (justifications shown for each answer option).
export const ENSEMBLE_C_RATIONALES_EN: Record<string, string> = {
  "ec-q1-a":
    "False. Testing principle 2 states that proving the complete absence of defects is impossible.",
  "ec-q1-b":
    "Correct. This is one of the typical testing objectives: evaluating work products to verify they meet the requirements.",
  "ec-q1-c": "False. Maximizing a project's duration is never an objective.",
  "ec-q1-d": "False. Quality is a shared responsibility, especially with the whole-team approach.",
  "ec-q2-a": "False. Full automation from the start is neither realistic nor mandatory.",
  "ec-q2-b":
    "Correct. The earlier a defect is detected, the cheaper it is to fix, reducing overall project risk.",
  "ec-q2-c": "False. Acceptance testing remains essential to validate fit with user needs.",
  "ec-q2-d": "False. Exhaustive testing is impossible.",
  "ec-q3-a":
    "False. It is the other way around: QA is process-oriented and testing is product-focused.",
  "ec-q3-b":
    "Correct. Testing (QC) evaluates the product, while QA improves the process to prevent defects.",
  "ec-q3-c": "False. Neither of them guarantees 100% coverage.",
  "ec-q3-d": "False. They are different concepts, although related.",
  "ec-q4-a":
    "False. The absence-of-errors illusion concerns the false belief that a defect-free system meets real needs.",
  "ec-q4-b": "Correct. This scenario exactly describes the pesticide paradox (tests wear out).",
  "ec-q4-c":
    "False. Defect clustering states that a small portion of modules contains the majority of defects.",
  "ec-q4-d":
    "False. Exhaustive testing being impossible indicates that testing everything is not feasible.",
  "ec-q5-a": "Correct. This is the exact definition of the test analysis activity.",
  "ec-q5-b":
    "False. Test design is responsible for writing and elaborating scenarios and test cases.",
  "ec-q5-c": "False. Implementation prepares test scripts and test suites.",
  "ec-q5-d": "False. Execution runs the tests and compares actual results to expected results.",
  "ec-q6-a": "False. No traceability guarantees the complete absence of defects.",
  "ec-q6-b":
    "Correct. Impact analysis and coverage measurement are the direct benefits of traceability.",
  "ec-q6-c": "False. Regression testing remains essential.",
  "ec-q6-d": "False. Acceptance criteria remain necessary.",
  "ec-q7-a": "False. Such statements harm the working relationship and team climate.",
  "ec-q7-b":
    "Correct. Being objective, factual and neutral is the best way to collaborate healthily.",
  "ec-q7-c": "False. Defects must be communicated as soon as possible.",
  "ec-q7-d": "False. Direct, open communication within the team is strongly encouraged.",
  "ec-q8-a": "Correct. Everyone on the team shares responsibility for quality.",
  "ec-q8-b": "False. It is the opposite of isolating the test team.",
  "ec-q8-c": "False. Test automation requires diverse technical skills, not just the PO.",
  "ec-q8-d": "False. There is no strict numeric parity rule.",
  "ec-q9-a":
    "False. That is the 'Big Bang' approach or poorly executed cascade, not the recommended V-model structure.",
  "ec-q9-b":
    "Correct. This is the characteristic of the V-model where each level echoes a development phase.",
  "ec-q9-c": "False. Component testing is essential to the V-model.",
  "ec-q9-d": "False. That is rather the hallmark of extreme ad-hoc methods.",
  "ec-q10-a": "False. Developers lack independence for system testing.",
  "ec-q10-b": "Correct. Starting testing early is an excellent practice common to all SDLCs.",
  "ec-q10-c": "False. Experience-based manual tests remain essential.",
  "ec-q10-d":
    "False. You can and should design and review documents (static tests) before the final architecture.",
  "ec-q11-a": "Correct. This is the typical BDD Given-When-Then structure.",
  "ec-q11-b": "False. That is rather the description of TDD (Test-Driven Development).",
  "ec-q11-c": "False. BDD relies heavily on automating these scenarios.",
  "ec-q11-d": "False. That corresponds to structural (white-box) coverage criteria.",
  "ec-q12-a": "False. DevOps reduces separation and encourages collaboration.",
  "ec-q12-b": "Correct. Rapid, continuous feedback via CI/CD is the major impact.",
  "ec-q12-c": "False. Manual testing retains its full value.",
  "ec-q12-d": "False. Planning remains essential.",
  "ec-q13-a": "False. Component testing focuses on individual functions or classes in isolation.",
  "ec-q13-b":
    "Correct. Integration testing specifically validates interactions between components or systems.",
  "ec-q13-c": "False. System testing evaluates the end-to-end behavior of the complete product.",
  "ec-q13-d": "False. Acceptance testing validates fit with final business needs.",
  "ec-q14-a": "False. That is an HR event with no impact on production code.",
  "ec-q14-b": "Correct. Any change to an existing operational system requires maintenance testing.",
  "ec-q14-c":
    "False. That is part of planned new features, not maintenance of the existing system.",
  "ec-q14-d": "False. That is an organizational event.",
  "ec-q15-a": "False. Compiled, executed code falls under dynamic testing.",
  "ec-q15-b": "Correct. Any written document is eligible for reviews or static analysis.",
  "ec-q15-c": "False. The executed graphical interface is tested dynamically.",
  "ec-q15-d": "False. Too restrictive, although possible.",
  "ec-q16-a": "False. They do not run in production because they are performed upstream.",
  "ec-q16-b": "Correct. Early defect detection is the main economic gain of static testing.",
  "ec-q16-c": "False. Performance testing requires dynamic, executing tests.",
  "ec-q16-d": "False. On the contrary, they require no execution environment.",
  "ec-q17-a": "False. Planning must always come first.",
  "ec-q17-b": "Correct. This is the prescribed chronological order of review activities.",
  "ec-q17-c": "False. Individual preparation is missing or out of order.",
  "ec-q17-d": "False. Incoherent order.",
  "ec-q18-a": "False. The author is the person who created the work product under review.",
  "ec-q18-b": "Correct. Ensuring the review runs smoothly is the facilitation role.",
  "ec-q18-c": "False. The scribe notes anomalies and decisions during the meeting.",
  "ec-q18-d": "False. Reviewers perform the individual evaluation of the document.",
  "ec-q19-a": "False. That describes a structural (white-box) approach.",
  "ec-q19-b": "Correct. That is the very essence of experience-based testing.",
  "ec-q19-c": "False. That corresponds to structural white-box criteria.",
  "ec-q19-d": "False. That is rather the domain of specification-based techniques.",
  "ec-q20-a":
    "Correct. This set optimally covers the valid class and the three main invalid classes.",
  "ec-q20-b": "False. All these values are valid; the invalid classes are not tested.",
  "ec-q20-c": "False. Only valid values.",
  "ec-q20-d": "False. Not applicable (exhaustive testing is impossible).",
  "ec-q21-a":
    "Correct. These are the boundary values and their out-of-boundary neighbors for two-value analysis.",
  "ec-q21-b": "False. Does not match the defined boundaries (25 and 65) at all.",
  "ec-q21-c": "False. These are only the boundary values without their outer neighbors.",
  "ec-q21-d":
    "False. This corresponds to three-value analysis (boundary value, lower neighbor, upper neighbor).",
  "ec-q22-a": "False. That is far too many for 2 simple binary conditions.",
  "ec-q22-b":
    "Correct. The full unsimplified table would have 4 columns, but simplifies to 3 because if the credit history is bad, income does not matter.",
  "ec-q22-c":
    "False. That is the full unsimplified table, but 'simplified and complete' calls for merging redundant cases.",
  "ec-q22-d": "False. Insufficient to cover stable/unstable income behaviors.",
  "ec-q23-a": "False. Insufficient to traverse all the described states.",
  "ec-q23-b": "Correct. There are exactly 4 unique transitions to test to cover the full cycle.",
  "ec-q23-c": "False. Too high; some transitions would be duplicated.",
  "ec-q23-d": "False. Does not cover all 4 described cases.",
  "ec-q24-a": "False. It cannot guarantee the absence of infinite loops.",
  "ec-q24-b": "Correct. This is the mathematical definition of statement coverage.",
  "ec-q24-c":
    "False. 100% coverage does not guarantee absence of logic errors or untested branches.",
  "ec-q24-d": "False. It applies to programming software code.",
  "ec-q25-a": "Correct. Branch coverage is a stronger criterion that includes statement coverage.",
  "ec-q25-b": "False. It will necessarily be higher, namely 100%.",
  "ec-q25-c": "False. They are closely linked hierarchically.",
  "ec-q25-d": "False. It will be strictly equal to 100%.",
  "ec-q26-a": "False. It is not the end user's behavior that is 'guessed' this way.",
  "ec-q26-b": "Correct. This is the approach based on catalogs of known defects and experience.",
  "ec-q26-c": "False. That describes random testing (fuzzing).",
  "ec-q26-d": "False. Code complexity metrics are not part of this technique.",
  "ec-q27-a":
    "False. If the specifications are very detailed, formal black-box tests take priority.",
  "ec-q27-b": "Correct. This is the typical and recommended use case for exploratory testing.",
  "ec-q27-c": "False. They do not replace essential automated regression testing.",
  "ec-q27-d": "False. They apply to all levels, not just unit testing.",
  "ec-q28-a": "Correct. This is the fundamental role of acceptance criteria for the tester.",
  "ec-q28-b": "False. They do not automatically generate application code.",
  "ec-q28-c": "False. Final validation with the PO remains imperative.",
  "ec-q28-d": "False. Organizing task distribution is the development team's role.",
  "ec-q29-a": "False. This is an extremely relevant basic test case for verifying the cart.",
  "ec-q29-b": "Correct. This test case is off-topic relative to the described cart functionality.",
  "ec-q29-c": "False. Very relevant because it validates acceptance criterion #3.",
  "ec-q29-d": "False. Very relevant because it validates the summation calculation.",
  "ec-q30-a":
    "Correct. Estimation and testability assessment are the tester's main contribution in iteration meetings.",
  "ec-q30-b": "False. Tests are executed during the iteration, not before.",
  "ec-q30-c": "False. Team velocity is estimated collectively.",
  "ec-q30-d": "False. Non-functional requirements are equally prioritized.",
  "ec-q31-a": "False. That is an output deliverable of acceptance testing.",
  "ec-q31-b":
    "Correct. The presence of the environment and validated code is the entry criterion par excellence.",
  "ec-q31-c": "False. That is an exit criterion or a closure condition.",
  "ec-q31-d": "False. Business event.",
  "ec-q32-a": "False. That is the historical effort, without scaling to the new project.",
  "ec-q32-b":
    "Correct. 60 person-days is the strict application of the historical productivity ratio.",
  "ec-q32-c": "False. Miscalculation.",
  "ec-q32-d": "False. That is development effort, not testing effort.",
  "ec-q33-a": "False. TC2 and TC4 depend on TC1; they cannot start before TC1.",
  "ec-q33-b":
    "Correct. This sequence perfectly respects priorities while unblocking technical dependencies smoothly.",
  "ec-q33-c": "False. Does not prioritize priority 1 case TC4 over priority 2 case TC3.",
  "ec-q33-d": "False. Reversed sequence violating all dependencies.",
  "ec-q34-a": "False. Q1 contains automated unit and integration tests (supporting the team).",
  "ec-q34-b": "False. Q2 groups functional tests and usage scenarios (supporting the team).",
  "ec-q34-c": "False. Q3 contains user acceptance tests and usability testing.",
  "ec-q34-d":
    "Correct. Quadrant Q4 is dedicated to non-functional quality characteristics (performance, security).",
  "ec-q35-a": "False. Deferring a high risk is a major project management anti-pattern.",
  "ec-q35-b":
    "Correct. Designing and running tests specifically targeting robustness against this outage is the best response to the risk.",
  "ec-q35-c": "False. You cannot simply remove technically critical behaviors.",
  "ec-q35-d": "False. Homepage performance does not cover transaction integrity risk.",
  "ec-q36-a": "False. That is a development metric.",
  "ec-q36-b": "Correct. This metric exactly measures progress in the test implementation phase.",
  "ec-q36-c": "False. The number of meetings does not reflect test quality or progress at all.",
  "ec-q36-d": "False. That is an overall financial metric.",
  "ec-q37-a": "False. That is the role of human resources or management.",
  "ec-q37-b":
    "Correct. That is the primary purpose of configuration management: ensuring versioning and integrity of artifacts.",
  "ec-q37-c": "False. Belongs to purchasing or logistics.",
  "ec-q37-d": "False. Belongs to team management.",
  "ec-q38-a":
    "False. The name is often filled in automatically and does not help reproduce the bug.",
  "ec-q38-b": "Correct. Detailed reproduction steps are the most critical element missing here.",
  "ec-q38-c": "False. Cost estimation is done by management or the tech lead.",
  "ec-q38-d": "False. Subjective personal opinions have no place in a defect report.",
  "ec-q39-a": "False. Performance tools actively execute the software (dynamic testing).",
  "ec-q39-b": "Correct. Static analysis tools check code without dynamic execution.",
  "ec-q39-c": "False. They manage the execution of scenarios.",
  "ec-q39-d": "False. They simulate execution configurations.",
  "ec-q40-a":
    "Correct. Underestimating maintenance effort and overestimating immediate gains is the classic automation risk.",
  "ec-q40-b": "False. Automated tests integrate very well with CI/CD.",
  "ec-q40-c": "False. Automation aims precisely to reduce escaped defects.",
  "ec-q40-d": "False. Subjective, unfounded claim.",
};
