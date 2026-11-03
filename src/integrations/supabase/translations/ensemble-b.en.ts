// ISTQB Foundation Level v4.0 - Ensemble B (v1.3.3) - English translations
// Source of truth for the English content of Ensemble B. Records are merged by
// stable ID at read time (see src/lib/content-translations.ts). French source
// text remains in seed-ensemble-b.ts and is never modified here.
// Terminology follows the official ISTQB CTFL v4.0 syllabus.

export const ENSEMBLE_B_EXAM_EN = {
  title_en: "ISTQB CTFL v4.0 Sample Exam — SET B (v1.3.3)",
  description_en:
    "Official ISTQB Foundation Level v4.0 practice exam (Set B, v1.3.3, GTB edition). Includes 40 questions covering the entire syllabus with explanations and justifications of the official answers.",
};

export const ENSEMBLE_B_QUESTIONS_EN: Record<string, string> = {
  "eb-q1":
    "Which of the following statements BEST describes why testing is necessary in the software development lifecycle?",
  "eb-q2": "What is the difference between testing and quality assurance?",
  "eb-q3":
    "A tester has been testing software applications on mobile devices for 5 years. During this extended period, the tester has not modified the existing test cases nor created new test cases. With new versions of the mobile platform, more failures have been reported by users. Which testing principle did the tester not take into account?",
  "eb-q4":
    "Consider the following testware:\n\n- Test charter no. 04.018 | Session duration: 1h\n- Explore: the registration page\n- With: various sets of incorrect inputs\n- To discover: errors in the registration process with incorrect inputs\n\nIn which testing activity is this testware created?",
  "eb-q5":
    "Which of the following will have the MOST impact on how testing is performed for a given test object?",
  "eb-q6":
    "Consider the following testing activities:\n1. Select regression tests\n2. Evaluate the completeness of test execution\n3. Identify which user stories have open defect reports\n4. Evaluate whether the number of tests for each requirement is consistent with the product risk level\n\nConsider the following ways in which traceability can help testing:\nA. Improve the understanding of test progress reports to include the status of test basis items\nB. Make testing activities auditable\nC. Provide information to evaluate the quality of the process\nD. Analyze the impact of changes\n\nWhich of the following statements BEST matches the testing activity to the way traceability can help that activity?",
  "eb-q7":
    "You are part of a test team involved in the development of a helicopter control system. Recently, an experienced helicopter pilot has been hired as a tester for the test team.\n\nWhat positive effects are the new tester's general skills LIKELY to have on the test team?",
  "eb-q8": "Which of the following is an advantage of the whole-team approach?",
  "eb-q9":
    "Which of the following statements about the choice of software development lifecycle (SDLC) and its relationship with testing is CORRECT?",
  "eb-q10":
    "Which of the following is a good testing practice that applies to all software development lifecycles?",
  "eb-q11": "Which of the following is an example of a 'test-first' development approach?",
  "eb-q12": "Which of the following statements about DevOps is CORRECT?",
  "eb-q13": "Which of the following is MOST likely to be executed as part of system testing?",
  "eb-q14": "Which of the following decisions should NOT trigger maintenance testing?",
  "eb-q15": "Which of the following statements BEST describes the use of static testing?",
  "eb-q16":
    "Which of the following is an advantage of early and frequent feedback from stakeholders?",
  "eb-q17":
    "Given the following task descriptions from the review process:\n1. The quality characteristics to be evaluated and the exit criteria are defined.\n2. Everyone has access to the work product.\n3. Anomalies are identified in the work product.\n4. Anomalies are analysed and discussed.\n\nAnd the following review activities:\nA. Individual review\nB. Review initiation\nC. Planning\nD. Communication and analysis\n\nWhich task-to-activity assignment is CORRECT?",
  "eb-q18":
    "The generic review process recognizes the following roles, among others:\n1. Scribe\n2. Review leader\n3. Facilitator\n4. Manager\n\nIn the context of reviews, these roles may take on the following responsibilities:\nA. Ensures the smooth running of review meetings and the establishment of a safe review environment\nB. Records review information, such as decisions and new anomalies found during the review meeting\nC. Decides what is to be reviewed and provides resources, such as personnel and time for the review\nD. Takes overall responsibility for the review, such as organizing when and where the review will take place\n\nWhich of the following role-to-responsibility assignments is correct?",
  "eb-q19":
    "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
  "eb-q20":
    "Customers of the 'TestWash' car wash chain have loyalty cards showing the number of washes previously purchased. The initial value is 0. After entering the car wash, the system increments the number on the card by one. This value represents the number of the current wash. The system decides the discount level the customer is entitled to based on this number.\n\nFor every tenth wash, the system grants a 10% discount, and for every twentieth wash, the system grants an additional 40% discount (i.e. a total of 50% discount).\n\nWhich of the following input data sets (understood as the number of the current wash) achieves the highest equivalence partition coverage?",
  "eb-q21":
    "A wine storage system uses a control device to measure the temperature (T) of the wine cellar (measured in °C, rounded to the nearest degree) and alerts the user if the optimal temperature is exceeded or not reached:\n\n• If 11 <= T <= 13, the system reports: 'optimal temperature'\n• If T < 11, the system reports: 'The temperature is too low!'\n• If T > 13, the system reports: 'The temperature is too high!'\n\nYou apply three-value boundary value analysis to verify the expected behaviour of the controller. The test input is a temperature provided by the device in °C.\n\nWhich test inputs achieve 100% coverage?",
  "eb-q22":
    "The following decision table contains the rules for determining the risk of atherosclerosis based on the patient's measured cholesterol value and blood pressure.\n\nConditions:\n- Cholesterol (mg/dl): <=124 (Rules 1 & 2) | 125–200 (Rules 3 & 4) | >=201 (Rule 5)\n- Blood pressure (mm Hg): <=140 (Rule 1 & 3) | >140 (Rule 2 & 4) | - (Rule 5)\n\nActions:\n- Risk level: very low (Rule 1) | low (Rule 2) | medium (Rule 3) | high (Rule 4) | very high (Rule 5)\n\nYou have designed the test cases with the following input data:\n- TC1: Cholesterol = 125 mg/dl, Blood pressure = 141 mm Hg\n- TC2: Cholesterol = 200 mg/dl, Blood pressure = 201 mm Hg\n- TC3: Cholesterol = 124 mg/dl, Blood pressure = 201 mm Hg\n- TC4: Cholesterol = 109 mg/dl, Blood pressure = 200 mm Hg\n- TC5: Cholesterol = 201 mg/dl, Blood pressure = 140 mm Hg\n\nWhat is the decision table coverage achieved by these test cases?",
  "eb-q23":
    "Given the state transition diagram of a battery charger, with the states: Standby, Off, Maintenance charging, Low, Charging, High.\n\nWhich of the following test cases includes both valid and invalid transitions?",
  "eb-q24":
    "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage.\n\nBased on the above information, which of the following statements must be true?",
  "eb-q25":
    "Consider the branch coverage metric defined by BCov = (X / Y) * 100 %.\n\nWhat do X and Y represent in this formula?",
  "eb-q26":
    "Which of the following statements provides the BEST justification for using exploratory testing?",
  "eb-q27":
    "Which of the following is the BEST example of a test condition when using checklist-based testing?",
  "eb-q28":
    "Consider the following acceptance criteria for a user story written from the perspective of an online shop owner:\n\n- Given the user is logged in and on the home page:\n- When the user clicks the 'Add an item' button,\n- Then the 'Create an item' form should appear,\n- And the user should be able to enter a name and a price for the new item.\n\nIn which format are these acceptance criteria written?",
  "eb-q29":
    "Please consider the following user story:\n'As a coach of a football team, I want to be able to retrieve the eligibility list for a match day in DFBNET in order to assign the squad for the next match day.'\n\nWhich test case is BEST suited to the Acceptance Test-Driven Development (ATDD) of this user story?",
  "eb-q30":
    "Your team follows a process that uses a continuous integration and delivery (CI/CD) pipeline with a shift-left approach. The first three steps of this process are:\n(1) Develop and deploy the code\n(2) Commit the code to a version control system and merge it into the 'test' branch\n(3) Perform component testing on the committed code\n\nWhich of the following criteria is BEST suited as an entry criterion for step (2) of this pipeline?",
  "eb-q31":
    "You want to estimate the testing effort for a new project using ratio-based estimation. You calculate the testing effort / development effort ratio using average data for the development and testing effort of four historical projects similar to the new one. The table below shows this historical data:\n\n- Project P1 | Development effort: $800,000 | Testing effort: $40,000\n- Project P2 | Development effort: $1,200,000 | Testing effort: $130,000\n- Project P3 | Development effort: $600,000 | Testing effort: $70,000\n- Project P4 | Development effort: $1,000,000 | Testing effort: $120,000\n\nThe estimated development effort for the new project is $800,000. What is your estimate of the testing effort for this project?",
  "eb-q32":
    "You have been asked to establish an optimal, risk-based execution sequence for the following test cases, which have already been prioritized and examined for potential dependencies:\n\n- T1 | Priority: 3 | Depends on: -\n- T2 | Priority: 1 | Depends on: T1\n- T3 | Priority: 3 | Depends on: T2\n- T4 | Priority: 3 | Depends on: T2\n- T5 | Priority: 1 | Depends on: T3\n- T6 | Priority: 2 | Depends on: T4\n\nPriority 1 is more urgent than priority 2, and so on.\n\nWhich of the following test sequences takes into account the dependencies and priorities mentioned above?",
  "eb-q33":
    "According to the test quadrants model, which of the following is assigned to quadrant Q1 ('technology-facing' and 'supporting the team')?",
  "eb-q34":
    "In the context of risk management, identify the statement that does NOT accurately describe the relationship between product risk and test planning?",
  "eb-q35": "Which of the following is a product quality metric?",
  "eb-q36":
    "Imagine you are part of an agile team based in North America. Your team develops a product for a client located in Europe. The team follows the DevOps approach and uses a continuous integration/continuous delivery pipeline for development.\n\nConsidering the geographical distance and the agile nature of the project, which of the following communication methods would be LEAST effective for conveying test progress to the client?",
  "eb-q37":
    "Which of the following BEST describes how configuration management (CM) supports testing?",
  "eb-q38":
    "You are testing a sorting function that takes a list of numbers as input and returns the same numbers sorted in ascending order.\n\nThe test execution log is as follows:\n- Environment configuration: build 2.002.2182 of the sorting function, test case set: TCS-3, number of test cases: 5\n- Execution ID: 736\n- Start: 12:43:21.003\n- 12:43:21.003: Executing TC1. Input: 3. Output: 3. Result: passed\n- 12:43:21.003: Executing TC2. Input: 3, 11, 6, 5. Output: 3, 5, 6, 11. Result: passed\n- 12:43:21.004: Executing TC3. Input: 8, 7, 3, 7, 1. Output: 1, 3, 7, 8. Result: failed\n- 12:43:21.005: Executing TC4. Input: -2, -2, -2, -3, -3. Output: -3, -2. Result: failed\n- 12:43:21.005: Executing TC5. Input: 0, -2, 0, 3, 4, 4. Output: -2, 0, 3, 4. Result: failed\n- End: 12:43:21.005\n- Total cycle time: 0:00:00.002\n\nWhich of the following statements provides the BEST description of the failure to use in a defect report?",
  "eb-q39":
    "Consider the following descriptions:\n1. Support for workflow tracking\n2. Facilitate communication\n3. Virtual machines\n4. Support for evaluating reviews\n\nAnd the following testing tool categories:\nA. Static testing tools\nB. Tools supporting scalability and standardization of deployment\nC. DevOps tools\nD. Collaboration tools\n\nWhich of the following statements BEST matches the descriptions and the tool categories?",
  "eb-q40": "Which of the following is MOST likely to apply to test automation?",
};

export const ENSEMBLE_B_OPTIONS_EN: Record<string, string> = {
  "eb-q1-a": "Dynamic testing is the only way to evaluate the quality of a test object.",
  "eb-q1-b": "Testing guarantees that users understand and apprehend the developers' needs.",
  "eb-q1-c": "Testing is performed exclusively to comply with regulatory standards.",
  "eb-q1-d": "Testing helps identify defects, which improves the quality of the test object.",
  "eb-q2-a":
    "Testing is a preventive, process-oriented approach, while quality assurance is a corrective, product-oriented approach.",
  "eb-q2-b":
    "Quality assurance is process-oriented and aims to improve the process, while testing aims at appropriate quality through product-oriented measures.",
  "eb-q2-c": "Testing and quality assurance are identical and can be used synonymously.",
  "eb-q2-d":
    "Quality assurance refers only to the testing process, while testing encompasses the entire development process.",
  "eb-q3-a": "Testing is context dependent",
  "eb-q3-b": "Exhaustive testing is impossible",
  "eb-q3-c": "Tests wear out",
  "eb-q3-d": "Defect clustering",
  "eb-q4-a": "Test planning",
  "eb-q4-b": "Test monitoring and control",
  "eb-q4-c": "Test analysis",
  "eb-q4-d": "Test design",
  "eb-q5-a": "The average level of experience of the organization's marketing team.",
  "eb-q5-b": "The fact that users know that a new system is being developed for them.",
  "eb-q5-c": "The number of years of testing experience of the test team members.",
  "eb-q5-d": "The organizational structure of the users of the application to be developed.",
  "eb-q6-a": "1D, 2B, 3C, 4A",
  "eb-q6-b": "1B, 2D, 3A, 4C",
  "eb-q6-c": "1D, 2C, 3A, 4B",
  "eb-q6-d": "1D, 2B, 3A, 4C",
  "eb-q7-a":
    "Applying three-value boundary value analysis for more thorough test design during system testing.",
  "eb-q7-b": "Inconsistencies and ambiguities in technical requirements are effectively revealed.",
  "eb-q7-c": "Using a tool to automate state transition testing.",
  // Source anomaly (not fixed here): the seed stores this option as "eb-7-d"
  // instead of "eb-q7-d". The id is stable and referenced by attempts, so it is
  // translated as-is and reported in the bilingual coverage notes.
  "eb-7-d":
    "Test results are communicated to developers in a more constructive and defensive manner.",
  "eb-q7-d":
    "Test results are communicated to developers in a more constructive and defensive manner.",
  "eb-q8-a": "It allows team members to take on any role at any time.",
  "eb-q8-b": "Only one team is needed to support the entire development project.",
  "eb-q8-c":
    "Testers can work in isolation without distracting developers or business representatives with testing-specific information.",
  "eb-q8-d": "It generates a team synergy that benefits the entire project.",
  "eb-q9-a":
    "If agile software development is used, system test automation replaces the need for regression testing.",
  "eb-q9-b":
    "If a sequential development model is used, then dynamic testing is generally performed at a later stage of the lifecycle.",
  "eb-q9-c":
    "If an iterative development model is used, then component testing is generally performed manually by developers.",
  "eb-q9-d":
    "If an incremental development model is used, then static testing is performed in the early increments and dynamic testing in the later increments.",
  "eb-q10-a": "Testers should review the work products as part of the following development phase.",
  "eb-q10-b":
    "Testers should review the work products of a software development activity as soon as drafts are available.",
  "eb-q10-c":
    "Testers should only review the work products of a software development activity as part of the test analysis and design activities.",
  "eb-q10-d":
    "Testers should review the work products immediately after they are released for use.",
  "eb-q11-a": "Test-Driven Development (TDD)",
  "eb-q11-b": "Coverage-Driven Development (CDD)",
  "eb-q11-c": "Quality-Driven Development (QDD)",
  "eb-q11-d": "Feature-Driven Development (FDD)",
  "eb-q12-a":
    "To speed up deliveries, continuous integration is used to encourage developers to commit code quickly without needing to complete component testing.",
  "eb-q12-b":
    "To be able to update and deliver systems more quickly, automated regression tests are needed to reduce the risk of regression.",
  "eb-q12-c":
    "To treat developers and operations fairly, testers will allocate more effort to delivery-to-operations testing using a shift-right approach.",
  "eb-q12-d":
    "To create increased synergy between testers, developers and operations, testing must become fully automated with no manual testing.",
  "eb-q13-a":
    "End-to-end security testing of a credit management system by an independent test team.",
  "eb-q13-b":
    "Testing the interaction of a currency exchange system with an external banking system or with an external bank's system.",
  "eb-q13-c": "Beta testing of a learning system by the trainers of training organizations.",
  "eb-q13-d":
    "Testing the interactions between the user interface and the database of a human resources system.",
  "eb-q14-a": "The decision to test the maintainability of the software.",
  "eb-q14-b": "The decision to test the system after a migration to a new operating platform.",
  "eb-q14-c": "The decision to test the recoverability of archived data after decommissioning.",
  "eb-q14-d": "The decision to test after applying a 'hotfix' to the production release.",
  "eb-q15-a": "Static testing can discover defects that cannot be found by dynamic testing.",
  "eb-q15-b":
    "Defects in the code can be found more effectively by dynamic testing than by static testing.",
  "eb-q15-c": "Static testing can only be performed at a late stage of the SDLC.",
  "eb-q15-d":
    "To make static testing as effective as possible, as few stakeholders as possible should be involved.",
  "eb-q16-a": "Managers know which developers are the least productive at an early stage.",
  "eb-q16-b": "It allows project managers to reduce their interactions with stakeholders.",
  "eb-q16-c": "It facilitates early communication of potential quality problems.",
  "eb-q16-d": "End users better understand why the application deployment is delayed.",
  "eb-q17-a": "1B, 2C, 3D, 4A",
  "eb-q17-b": "1B, 2D, 3C, 4A",
  "eb-q17-c": "1C, 2A, 3B, 4D",
  "eb-q17-d": "1C, 2B, 3A, 4D",
  "eb-q18-a": "1A, 2B, 3D, 4C",
  "eb-q18-b": "1A, 2C, 3B, 4D",
  "eb-q18-c": "1B, 2D, 3A, 4C",
  "eb-q18-d": "1B, 2D, 3C, 4A",
  "eb-q19-a":
    "In decision table testing, test cases are derived from the decision statements in the code. In branch testing, test cases are derived from knowledge of the control flow of the test object.",
  "eb-q19-b":
    "In decision table testing, test cases are derived from the specification that describes the business logic. In branch testing, test cases are based on the anticipation of potential defects in the source code.",
  "eb-q19-c":
    "In decision table testing, test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.",
  "eb-q19-d":
    "In decision table testing, test cases are independent of how the software is implemented. In branch testing, test cases can only be created after the design or implementation of the code.",
  "eb-q20-a": "19, 20, 30",
  "eb-q20-b": "11, 12, 20",
  "eb-q20-c": "1, 10, 50",
  "eb-q20-d": "10, 29, 30, 31",
  "eb-q21-a": "11, 12, 13",
  "eb-q21-b": "9, 13, 15",
  "eb-q21-c": "9, 10, 11, 12, 13, 14, 15",
  "eb-q21-d": "10, 11, 12, 13, 14",
  "eb-q22-a": "40 %",
  "eb-q22-b": "60 %",
  "eb-q22-c": "80 %",
  "eb-q22-d": "100 %",
  "eb-q23-a": "Start → Standby → Off → Standby → Maintenance charging → Standby",
  "eb-q23-b": "Start → Standby → Maintenance charging → Charging → High → Charging",
  "eb-q23-c": "Start → Standby → Maintenance charging → Charging → Low → Charging",
  "eb-q23-d": "Start → Standby → Off → Standby → Charging → Low → Charging",
  "eb-q24-a": "The test suite consisting of tests T1 and T2 achieves 105% statement coverage.",
  "eb-q24-b": "There is at least one statement that must have been executed by both T1 and T2.",
  "eb-q24-c": "At least 5% of the statements in the code under test are not executable.",
  "eb-q24-d": "The test suite consisting of tests T1 and T2 achieves full branch coverage.",
  "eb-q25-a":
    "X = number of decision outcomes exercised by the test cases, Y = total number of decision outcomes in the code",
  "eb-q25-b":
    "X = number of conditional branches exercised by the test cases, Y = total number of branches in the code",
  "eb-q25-c":
    "X = number of branches exercised by the test cases, Y = total number of branches in the code",
  "eb-q25-d":
    "X = number of conditional branches exercised by the test cases, Y = total number of decision outcomes in the code",
  "eb-q26-a": "The existing test strategy requires testers to use black-box test techniques.",
  "eb-q26-b": "The specification is written in a formal language that can be processed by a tool.",
  "eb-q26-c": "The testers are members of an agile team and have good programming skills.",
  "eb-q26-d": "The testers are experienced in the business domain and have good analytical skills.",
  "eb-q27-a": '"The developer made a mistake when implementing the code."',
  "eb-q27-b": '"The statement coverage achieved exceeds 85%."',
  "eb-q27-c":
    '"The program functions correctly with respect to the functional and non-functional requirements."',
  "eb-q27-d": '"The error messages are written in a language that the user can understand."',
  "eb-q28-a": "Rule-oriented",
  "eb-q28-b": "Scenario-oriented",
  "eb-q28-c": "Product-oriented",
  "eb-q28-d": "Process-oriented",
  "eb-q29-a":
    "Log in as a coach in DFBNET; select the upcoming match days for my team; download the eligibility lists.",
  "eb-q29-b":
    "GIVEN I am logged in as a coach in DFBNET with my coach ID, AND GIVEN I have selected the next match day, WHEN I select 'load the eligibility list', THEN a list of players eligible for the next match day is displayed to me.",
  "eb-q29-c":
    "Log in as a team manager; select the next match day; load the eligibility list; remove the players who are not eligible to play.",
  "eb-q29-d":
    "GIVEN I have selected the upcoming match days for my team, WHEN I select a match day, AND WHEN I load the eligibility list for that match day, THEN all players eligible for that match day must be displayed to me.",
  "eb-q30-a":
    "Static analysis reports no defects or warnings of high severity for the committed code.",
  "eb-q30-b":
    "Version control reports no conflicts during compilation and integration of the code into the 'test' branch.",
  "eb-q30-c": "The component tests are compiled and ready to be executed in the 'test' branch.",
  "eb-q30-d": "The statement coverage of the component tests is at least 80%.",
  "eb-q31-a": "$40,000",
  "eb-q31-b": "$80,000",
  "eb-q31-c": "$81,250",
  "eb-q31-d": "$82,500",
  "eb-q32-a": "T1 → T2 → T4 → T5 → T3 → T6",
  "eb-q32-b": "T1 → T2 → T3 → T4 → T5 → T6",
  "eb-q32-c": "T1 → T2 → T4 → T3 → T5 → T6",
  "eb-q32-d": "T1 → T2 → T3 → T5 → T4 → T6",
  "eb-q33-a": "Usability testing",
  "eb-q33-b": "Smoke testing",
  "eb-q33-c": "User acceptance testing",
  "eb-q33-d": "Component integration testing",
  "eb-q34-a":
    "The potential impact of IT security vulnerabilities was assessed as significantly high, which led to an increase in the exit criterion for IT security testing to 99 successful test cases.",
  "eb-q34-b":
    "The required quality of the network module is ambiguous, which leads to additional risk analyses being performed in this area.",
  "eb-q34-c":
    "Users reported problems with the user interface of the existing system, which led to additional usability testing being planned for the new system.",
  "eb-q34-d":
    "The page loading time is crucial to the success of the new website, therefore a performance testing expert is integrated into the project.",
  "eb-q35-a": "Mean time to failure",
  "eb-q35-b": "Number of defects found",
  "eb-q35-c": "Requirements coverage",
  "eb-q35-d": "Defect density",
  "eb-q36-a": "Face-to-face meetings",
  "eb-q36-b": "Interactive dashboards",
  "eb-q36-c": "Email updates",
  "eb-q36-d": "Video conferencing",
  "eb-q37-a":
    "By using the environment version number, the configuration management tool can retrieve the version numbers of the libraries, stubs and drivers used in that environment.",
  "eb-q37-b":
    "Changing baselines can be flexibly and pragmatically supported by using configuration management tools, if testers consider it necessary due to unexpected events during test execution.",
  "eb-q37-c":
    "Configuration management supports the traceability of test scripts and test cases. Test results, on the other hand, are managed by defect management.",
  "eb-q37-d":
    "In configuration management, complex configuration items are synthesized by a baseline. To establish this as a baseline, testers can no longer return to a baseline prior to that point in time.",
  "eb-q38-a": "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.",
  "eb-q38-b": "The system appears to ignore duplicates when sorting. Reference: TC3, TC4, TC5.",
  "eb-q38-c": "The system fails to sort negative numbers. Reference: TC4, TC5.",
  "eb-q38-d": "TC3, TC4 and TC5 contain defects (duplicate input data) and must be corrected.",
  "eb-q39-a": "1A, 2B, 3C, 4D",
  "eb-q39-b": "1B, 2D, 3C, 4A",
  "eb-q39-c": "1C, 2D, 3B, 4A",
  "eb-q39-d": "1D, 2C, 3A, 4B",
  "eb-q40-a": "Test automation allows more complex coverage criteria to be measured.",
  "eb-q40-b": "Test automation transfers part of the testing responsibility to the tool vendor.",
  "eb-q40-c":
    "Test automation eliminates the need for critical thinking when analyzing test results.",
  "eb-q40-d":
    "Test automation generates system-level test cases from an analysis of the program code.",
};

export const ENSEMBLE_B_SOLUTIONS_EN: Record<string, string> = {
  "eb-q1":
    "CORRECT – Testing identifies defects which can then be fixed by debugging, which indirectly helps improve the quality of the test object (Syllabus CTFL v4.0, section 1.2.1).",
  "eb-q2":
    "CORRECT – Quality assurance is process-oriented and preventive, while testing is a form of product-oriented, corrective quality control (Syllabus CTFL v4.0, section 1.2.2).",
  "eb-q3":
    "CORRECT – The principle 'Tests wear out' (the pesticide paradox) states that repeating the same tests eventually stops finding new defects. Existing tests must be reviewed and modified to remain effective (Syllabus CTFL v4.0, section 1.3).",
  "eb-q4":
    "CORRECT – A test charter is a work product designed and used in exploratory testing, which is part of the test design activity as it specifies the objectives and approach of a test session (Syllabus CTFL v4.0, section 1.4.3).",
  "eb-q5":
    "CORRECT – The skills and experience of the test team have a direct impact on how tests are designed and executed (Syllabus CTFL v4.0, section 1.4.2).",
  "eb-q6":
    "CORRECT – Traceability helps to: select regression tests by analyzing the impact of changes (1D), evaluate the completeness of execution by making it auditable (2B), identify open defects on user stories to improve the readability of status reports (3A), and evaluate risk coverage to measure process quality (4C) (Syllabus CTFL v4.0, section 1.4.4).",
  "eb-q7":
    "CORRECT – Domain knowledge (such as that of a pilot testing a control system) allows a better understanding of business needs and the effective detection of inconsistencies or ambiguities in the requirement specifications (Syllabus CTFL v4.0, section 1.5.1).",
  "eb-q8":
    "CORRECT – The whole-team approach leverages the diversity of everyone's skills to create a collaborative dynamic and a synergy beneficial to the entire project (Syllabus CTFL v4.0, section 1.5.2).",
  "eb-q9":
    "CORRECT – In a sequential model (such as the V-model), executable code is only available late, which means dynamic testing usually starts later in the lifecycle (Syllabus CTFL v4.0, section 2.1.1).",
  "eb-q10":
    "CORRECT – Reviewing work products (static analysis) as soon as drafts are available enables effective shift-left, reducing defects upstream and avoiding knock-on errors (Syllabus CTFL v4.0, section 2.1.2).",
  "eb-q11":
    "CORRECT – TDD (Test-Driven Development) is the most famous example of an approach where automated unit tests are written before writing the corresponding functional code (Syllabus CTFL v4.0, section 2.1.3).",
  "eb-q12":
    "CORRECT – DevOps relies heavily on automation of the delivery chain, notably automated regression tests, in order to deliver more frequently safely and without regressions (Syllabus CTFL v4.0, section 2.1.4).",
  "eb-q13":
    "CORRECT – System tests evaluate the overall behavior of the complete system. End-to-end security testing by an independent test team typically falls into this category (Syllabus CTFL v4.0, section 2.2.1).",
  "eb-q14":
    "CORRECT – Maintainability is a quality characteristic that does not depend on executing the code of a modified system (it is rather tested by static analysis), so it is not a direct trigger of maintenance testing (Syllabus CTFL v4.0, section 2.3.1).",
  "eb-q15":
    "CORRECT – Static testing (reviews and static code analysis) does not execute the code and can detect defects (e.g. requirement inconsistencies, unused variables) that are impossible or very difficult to isolate by dynamic testing (Syllabus CTFL v4.0, section 3.1.2).",
  "eb-q16":
    "CORRECT – Frequent and early feedback from stakeholders allows misunderstandings to be identified as early as possible and potential quality problems to be communicated early (Syllabus CTFL v4.0, section 3.2.1).",
  "eb-q17":
    "CORRECT – The exact matching is: defining criteria and characteristics is done in planning (1C); giving access to the work product is done during review initiation (2B); identifying anomalies is done by individual review (3A); and their analysis/discussion is done during the communication and analysis activity (4D) (Syllabus CTFL v4.0, section 3.2.2).",
  "eb-q18":
    "CORRECT – The scribe records the information and anomalies found (1B); the review leader takes overall responsibility and organization (2D); the facilitator ensures the smooth running of the meeting and a safe climate (3A); and the manager decides what is reviewed and provides resources (4C) (Syllabus CTFL v4.0, section 3.2.3).",
  "eb-q19":
    "CORRECT – Decision table testing is a black-box technique, so its tests are independent of the implementation. Branch testing is a white-box technique, its tests can only be created once the code structure is available (Syllabus CTFL v4.0, section 4.1.1).",
  "eb-q20":
    "CORRECT – 19 covers the 'no discount' equivalence class, 20 covers the '50% discount' class (20th wash), and 30 covers the '10% discount' class (30th wash). This set thus covers all three valid equivalence classes (Syllabus CTFL v4.0, section 4.2.1).",
  "eb-q21":
    "CORRECT – In three-value boundary value analysis, for each boundary (11 and 13), we test the value itself and its two immediate neighbours. The boundaries are 11 and 13. The neighbours of 11 are 10 and 12. The neighbours of 13 are 12 and 14. We must also include out-of-boundary values (9 and 15). Thus, the complete set is: 9, 10, 11, 12, 13, 14, 15 (Syllabus CTFL v4.0, section 4.2.2).",
  "eb-q22":
    "CORRECT – There are 5 business rules (columns). Let's analyze the test cases:\n- TC1 & TC2 cover Rule 4 (Cholesterol 125-200, Blood pressure >140)\n- TC3 & TC4 cover Rule 2 (Cholesterol <=124, Blood pressure >140)\n- TC5 covers Rule 5 (Cholesterol >=201, blood pressure ignored)\nThese 5 test cases therefore cover 3 of the 5 existing rules (Rule 2, 4 and 5), giving a coverage of (3/5) * 100% = 60% (Syllabus CTFL v4.0, section 4.2.3).",
  "eb-q23":
    "CORRECT – In test case d), the transition from 'Standby' to 'Charging' does not exist in the state diagram (you must first go through Maintenance charging or another transition). It is therefore invalid, while the other transitions in this path are valid (Syllabus CTFL v4.0, section 4.2.4).",
  "eb-q24":
    "CORRECT – If the sets of statements executed by T1 and T2 were disjoint, the combined coverage would be 40% + 65% = 105%, which is mathematically impossible. There must therefore be an intersection of at least 5% of statements executed by both tests (Syllabus CTFL v4.0, section 4.3.1).",
  "eb-q25":
    "CORRECT – Branch coverage (BCov) is measured by dividing the number of branches exercised (X) by the total number of branches in the code (Y), expressed as a percentage (Syllabus CTFL v4.0, section 4.3.2).",
  "eb-q26":
    "CORRECT – Exploratory testing is all the more effective and powerful when testers have good knowledge of the application (business) domain and strong analytical skills to guide their exploration (Syllabus CTFL v4.0, section 4.4.2).",
  "eb-q27":
    "CORRECT – A test condition must be specific and unambiguously testable by a human based on understandable criteria. Checking that error messages are understandable to the user is an excellent example (Syllabus CTFL v4.0, section 4.4.3).",
  "eb-q28":
    "CORRECT – The GIVEN / WHEN / THEN format is the classic scenario-oriented (Behavior-Driven Development / BDD) description structure for specifying acceptance criteria (Syllabus CTFL v4.0, section 4.5.2).",
  "eb-q29":
    "CORRECT – Option b) precisely describes the usage scenario expected by the user story by defining the preconditions (logged-in role, match selected), the loading action and the expected result (eligibility displayed) (Syllabus CTFL v4.0, section 4.5.3).",
  "eb-q30":
    "CORRECT – In a shift-left CI/CD pipeline, running static analysis and ensuring it reports no major anomalies before committing and merging the code is the ideal entry criterion (Syllabus CTFL v4.0, section 5.1.3).",
  "eb-q31":
    "CORRECT – Let's calculate the average historical effort ratio:\n- Sum of development efforts = 800k + 1200k + 600k + 1000k = $3,600,000\n- Sum of testing efforts = 40k + 130k + 70k + 120k = $360,000\n- Average test/development ratio = 360k / 3600k = 10%.\nFor a new development effort estimated at $800,000, the estimated testing effort is therefore 10% * $800,000 = $80,000 (Syllabus CTFL v4.0, section 5.1.4).",
  "eb-q32":
    "CORRECT – Test T1 must be executed first because T2 depends on it. T2 is then executed. Once T2 is done, T3 and T4 become available. Since T5 depends on T3 and is very urgent (priority 1), we execute T3 then T5 immediately. Next, we execute T4 then T6 (priority 2). The optimal order is therefore: T1 → T2 → T3 → T5 → T4 → T6 (Syllabus CTFL v4.0, section 5.1.5).",
  "eb-q33":
    "CORRECT – Quadrant Q1 is technology-facing and supports the development team. Unit (component) tests and component integration tests are part of it (Syllabus CTFL v4.0, section 5.1.7).",
  "eb-q34":
    "CORRECT – Performing additional risk analyses because the specification is ambiguous is a risk analysis activity, not a control or mitigation activity resulting from test planning (Syllabus CTFL v4.0, section 5.2.4).",
  "eb-q35":
    "CORRECT – Mean time to failure (MTTF) measures reliability, which is a product quality characteristic, so it is a product quality metric (Syllabus CTFL v4.0, section 5.3.1).",
  "eb-q36":
    "CORRECT – Due to the geographical distance and the significant time difference between North America and Europe, organizing physical face-to-face meetings is the least realistic and least effective method (Syllabus CTFL v4.0, section 5.3.3).",
  "eb-q37":
    "CORRECT – For a complex configuration item (such as the test environment), configuration management identifies its components (libraries, stubs, drivers) and their versions to ensure its integrity and traceability (Syllabus CTFL v4.0, section 5.4.1).",
  "eb-q38":
    "CORRECT – Test cases TC3 (contains a duplicate 7), TC4 (contains duplicates -2 and -3) and TC5 (contains duplicates 0 and 4) all fail, while TC1 and TC2 (no duplicates) pass. The observed behavior shows that the sorting function ignores or removes duplicates from its output, which is the best factual description of the failure (Syllabus CTFL v4.0, section 5.5.1).",
  "eb-q39":
    "CORRECT – Workflow tracking corresponds to DevOps tools (1C); facilitating communication corresponds to collaboration tools (2D); virtual machines correspond to scalability and standardization tools (3B); and evaluating reviews corresponds to static testing tools (4A) (Syllabus CTFL v4.0, section 6.1.1).",
  "eb-q40":
    "CORRECT – One of the great advantages of automation is the ability to measure complex coverage metrics (such as statement or branch coverage) that would be impossible or extremely tedious for a human to evaluate manually (Syllabus CTFL v4.0, section 6.2.1).",
};
