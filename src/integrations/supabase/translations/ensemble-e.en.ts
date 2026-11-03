// ISTQB Foundation Level v4.0 - Ensemble E (v1.3.0) - English translations
// Source of truth for the English content of Ensemble E. Records are merged by
// stable ID at read time (see src/lib/content-translations.ts). French source
// text remains in seed-ensemble-e.ts and is never modified here.
// Terminology follows the official ISTQB CTFL v4.0 syllabus.

export const ENSEMBLE_E_EXAM_EN = {
  title_en: "ISTQB CTFL v4.0 Sample Exam — SET E (v1.3.0)",
  description_en:
    "ISTQB Foundation Level v4.0 practice exam (Set E, v1.3.0, GTB edition). Includes 40 unique questions covering all syllabus chapters with careful English translations and justifications of the official answers.",
};

export const ENSEMBLE_E_QUESTIONS_EN: Record<string, string> = {
  "ee-q1": "Which of the following statements describes a typical testing objective?",
  "ee-q2":
    "Which of the following statements BEST describes the difference between testing and debugging?",
  "ee-q3":
    "A Product Owner claims that your role as a tester in an Agile team is to find all the bugs before the end of each iteration. Which of the following testing principles could be used to counter this (false) claim?",
  "ee-q4":
    "Which of the following is an example of a task that can be performed as part of test implementation in the testing process?",
  "ee-q5":
    "Which of the following statements is an example of a technical factor that influences the testing process?",
  "ee-q6":
    "Which of the following statements BEST describes the differences between the test management role and the tester role?",
  "ee-q7":
    "During the discussion of a user story in an agile project, as a tester you identify a contradiction in the interpretation of the acceptance criteria between the Product Owner and the development team. You raise this contradiction. Which of the following options describes an advantage of test independence that becomes apparent in this situation?",
  "ee-q8":
    "Which of the following options BEST describes the responsibilities arising from the agile Whole-Team approach?",
  "ee-q9":
    "Which of the following statements describes a good testing practice applicable to all software development lifecycles (SDLC)?",
  "ee-q10":
    "Which of the development approaches described below does NOT define testing as a driver of software development?",
  "ee-q11":
    "Which of the following statements BEST describes the Shift-Left approach in the context of software development lifecycle (SDLC) testing?",
  "ee-q12":
    "As a tester on a project following an iterative and incremental development model, which of the following statements should you take into account to optimally integrate testing activities?",
  "ee-q13":
    "A test case has the following characteristics:\n- It is based on interface specifications.\n- The focus is on finding failures in the interaction between components.\n- Both functional and structural tests are applied.\n\nAt which testing level is this test case MOST LIKELY to be executed?",
  "ee-q14": "Which of the following is NOT a trigger for maintenance and maintenance testing?",
  "ee-q15": "Which of the following statements is MOST true about static testing?",
  "ee-q16":
    "Which of the following statements does NOT describe an advantage of early and frequent feedback from stakeholders?",
  "ee-q17":
    "Which of the review types listed below is BEST suited when the review must be conducted in accordance with the full generic review process and for the purpose of finding as many anomalies as possible?",
  "ee-q18":
    "During a period of intense overtime, a large system architecture specification is sent to various project participants, accompanied by supplementary information and the announcement of a technical review in three days. This review was not originally planned. No adjustment is made regarding the tasks already assigned to the participants who are to act as reviewers. Based on the information provided, which review success factor is missing, based solely on the information given?",
  "ee-q19":
    "Before an iteration planning meeting, you analyze a User Story and its acceptance criteria. From this, you derive the corresponding test cases to apply the early testing principle. Which testing approach or technique are you using?",
  "ee-q20":
    "A daily radiation recorder for plants produces a sunshine score based on a combination of the number of hours of exposure (less than 3 hours, 3 to 6 hours, or more than 6 hours) and the average sun intensity (very low, low, medium, high).\n\nGiven the existing test cases:\n- T1: 1.5 hours, very low intensity, Score 10\n- T2: 7.0 hours, medium intensity, Score 60\n- T3: 0.5 hours, very low intensity, Score 10\n\nWhat is the minimum number of additional test cases needed to ensure complete coverage of ALL valid input equivalence partitions?",
  "ee-q21":
    "A home automation application measures the average temperature of the house over the previous week and provides feedback to occupants on their eco-responsibility.\n\nThe feedback for the different average temperature ranges (to the nearest degree Celsius) is:\n- Up to 10°C: Icy Cool!\n- 11°C to 15°C: Chilled Out!\n- 16°C to 19°C: Cool Man!\n- 20°C to 22°C: Too Warm!\n- Above 22°C: Hot & Sweaty!\n\nUsing Boundary Value Analysis (Min and Max values only), which of the following sets of test inputs provides the highest level of boundary coverage?",
  "ee-q22":
    "A speeding fine calculation system is specified with the following decision table:\n\n- Conditions:\n  - Speed > 50 (R1=Yes, R2=Yes, R3=No, R4=No)\n  - School Zone (R1=Yes, R2=No, R3=Yes, R4=No)\n- Actions:\n  - €250 fine (R2=X)\n  - License suspension (R1=X)\n\nBased on the provided decision table and existing test cases:\n- TC1: Speed = 65, School Zone = Yes\n- TC2: Speed = 45, School Zone = Yes\n- TC3: Speed = 50, School Zone = No\n- TC4: Speed = 49, School Zone = No\n\nWhich rule of the decision table is not yet covered by a test case?",
  "ee-q23":
    'Consider a state transition diagram for an automated fuel pump (bank card only).\nWe want to develop the minimum number of tests to cover every transition in the diagram. Each test must start in the initial state "Waiting for customer" and end when a transition returns to that initial state.\n\nHow many test cases do you need?',
  "ee-q24": "Which of the following descriptions of statement coverage applies?",
  "ee-q25":
    "Which of the following statements represents a value-added benefit of white-box testing?",
  "ee-q26":
    "You are testing a mobile banking application. You run a test suite evaluating each screen and field using a collection of user interface heuristics from a popular book, aimed at maximizing the ergonomics, usability and accessibility of mobile applications.\n\nWhich testing technique BEST characterizes this approach?",
  "ee-q27": "In which of the following situations is exploratory testing BEST suited?",
  "ee-q28":
    'An agile development team formulates the following user story: "As a user, I want the volume of the electronic timer\'s alarm to be adjustable so that I can always hear it."\n\nWhich of the following acceptance criteria is BEST suited from a testing perspective for designing clear acceptance tests?',
  "ee-q29":
    'Consider the following user story:\n"As a system administrator, I want to be able to monitor server performance to ensure the system runs efficiently."\n\nWhich test case is BEST suited for Acceptance Test-Driven Development (ATDD) of this user story?',
  "ee-q30":
    "Which of the following activities do testers perform during release planning in an agile project?",
  "ee-q31":
    'Here are examples of entry criteria and exit criteria for a system test:\n\n1. The planned test budget of 400 hours for the system test is exhausted.\n2. More than 95% of the planned test cases have been executed.\n3. The test environment for performance testing is designed, installed and verified.\n4. No priority 1 defects and a maximum of 4 priority 2 defects are open.\n5. The design specification has been reviewed and approved through a technical review.\n6. Unit testing of the "tax rate" and "total price" components is complete and approved.\n\nWhich combination BEST categorizes these examples as entry and exit criteria?',
  "ee-q32":
    "You want to estimate the testing effort for a new project using three-point estimation. The experts have provided you with the following values: the most optimistic estimate (a) is 300 person-days, the most likely estimate (m) is 400 person-days, and the most pessimistic estimate (b) is 500 person-days.\n\nHow do you estimate the testing effort for this project?",
  "ee-q33":
    "You are asked to establish an optimal risk-based execution sequence for the following test cases, which have been prioritized and analyzed for their dependencies:\n\n- T7: Priority 2, depends on - (none)\n- T8: Priority 1, depends on T7\n- T9: Priority 3, depends on T8\n- T10: Priority 3, depends on T8\n- T11: Priority 1, depends on T9\n- T12: Priority 2, depends on T10\n\nWhich sequence correctly takes into account the priorities and dependencies?",
  "ee-q34": "Which of the following statements illustrates the benefit of the test quadrants?",
  "ee-q35":
    "Which of the following statements about controlling product risks in the context of risk mitigation does NOT apply?",
  "ee-q36":
    "In a regulatory project that is already behind schedule, stakeholders ask to be informed daily of the test status.\n\nWhat is the MOST EFFECTIVE way to communicate this test status when stakeholders cannot coordinate directly due to geographical and time constraints?",
  "ee-q37":
    "Which of the following statements describes how configuration management can support testing activities?",
  "ee-q38":
    "You are testing a new version of the software of a coffee machine capable of preparing different beverages spread across four categories: coffee amount, sugar, milk, and coffee flavor.\nThe categories are:\n- Coffee amount (small, medium, large),\n- Sugar (none, 1 unit, 2 units, 3 units, 4 units),\n- Milk (yes or no),\n- Coffee flavor (no syrup, caramel, hazelnut, vanilla).\n\nYou write a defect report containing the following information:\n- Title: Coffee temperature too low.\n- Quick summary: When selecting a coffee with milk, the beverage temperature is too low (below 40°C).\n- Expected result: The coffee temperature must comply with the standard (approximately 75°C).\n- Impact severity: Moderate\n- Priority: Normal\n\nWhat relevant information have you forgotten in the defect report above?",
  "ee-q39":
    "Given the following testing activities:\n1. Performance measurements and IT security checks\n2. Test automation\n3. Test activity management\n4. Test design and implementation\n\nand the testing tools:\nA. Test execution tools.\nB. Testing tools for non-functional tests.\nC. Test case and test data preparation tools.\nD. Defect management tools.\n\nWhich association of tools to activities is BEST?",
  "ee-q40":
    "Which of the following statements BEST describes the potential benefit of using automated test execution tools?",
};

export const ENSEMBLE_E_OPTIONS_EN: Record<string, string> = {
  "ee-q1-a":
    "Testing starts shortly before delivery of the test object to find defects that would prevent acceptance.",
  "ee-q1-b": "A validation that the test object works as intended by the various stakeholders.",
  "ee-q1-c": "A demonstration that all defects have been identified.",
  "ee-q1-d": "A demonstration that remaining defects will have no negative impact.",
  "ee-q2-a":
    "Testing identifies the cause of defects. Debugging analyzes defects and suggests preventive measures.",
  "ee-q2-b":
    "Dynamic testing reveals failures caused by defects. Debugging analyzes and resolves the associated defect.",
  "ee-q2-c":
    "Testing eliminates failures, while debugging eliminates the defects that cause the failures.",
  "ee-q2-d": "Dynamic testing prevents the cause of failures. Debugging eliminates failures.",
  "ee-q3-a": "Defect clustering",
  "ee-q3-b": "Tests show the presence of defects (not their absence)",
  "ee-q3-c": "Absence-of-errors fallacy",
  "ee-q3-d": "Root cause analysis",
  "ee-q4-a": "Analyze a defect",
  "ee-q4-b": "Design test data",
  "ee-q4-c": "Assign a version to a test item",
  "ee-q4-d": "Write a user story",
  "ee-q5-a": "The software is a web application that must run on different browsers.",
  "ee-q5-b":
    "The software is intended for a financial services provider with strict security requirements.",
  "ee-q5-c":
    "The software is developed using an agile methodology that requires short iterations and frequent deliveries.",
  "ee-q5-d": "The software is tested by a team with varied skills and experience.",
  "ee-q6-a":
    "The test management role focuses primarily on test analysis, design, implementation and execution activities, while the tester role takes overall responsibility for the testing process, the test team and the management of testing activities.",
  "ee-q6-b":
    "The test management role and the tester role are identical and can be performed by the same person simultaneously.",
  "ee-q6-c":
    "The test management role takes overall responsibility for the testing process, the test team and the management of testing activities, while the tester role focuses primarily on test analysis, design, implementation and execution activities.",
  "ee-q6-d":
    "The test management role and the tester role have no specific tasks and can vary depending on the context.",
  "ee-q7-a": "Testers can recognize different types of failures and conditions.",
  "ee-q7-b": "Testers can assume primary responsibility for quality.",
  "ee-q7-c":
    "Developers can be confident that testers will guarantee the expected quality of work results.",
  "ee-q7-d": "Testers can question the assumptions made by stakeholders.",
  "ee-q8-a":
    "Testers are responsible for developing unit tests and hand them over to developers for execution.",
  "ee-q8-b":
    "Business representatives are tasked with selecting the tools the development team must use.",
  "ee-q8-c":
    "Testers must create test cases in collaboration with business representatives and the development team.",
  "ee-q8-d":
    "Developers must test non-functional requirements (performance, usability, security, etc.).",
  "ee-q9-a":
    "Testing activities for a testing phase start during the corresponding development phase.",
  "ee-q9-b":
    "A testing phase in the software lifecycle starts when the previous testing phase is complete.",
  "ee-q9-c": "Testing is considered a separate phase. It starts when development is complete.",
  "ee-q9-d": "Testing is added to development as an increment.",
  "ee-q10-a": "Tests are written first. Then the code is written.",
  "ee-q10-b": "Test cases drive the coding.",
  "ee-q10-c": "The desired behavior of an application is defined by test cases.",
  "ee-q10-d": "Tests are derived from acceptance criteria and partially automated.",
  "ee-q11-a":
    "Testing activities start as early as possible in the SDLC and are carried out in parallel with development activities.",
  "ee-q11-b":
    "Testing activities start as late as possible in the SDLC and are carried out after development activities.",
  "ee-q11-c":
    "Testing activities start in the middle of the SDLC and are carried out in parallel with development activities.",
  "ee-q11-d":
    "Testing activities are spread across several phases of the SDLC and carried out in each phase based on the product's maturity level.",
  "ee-q12-a":
    "You plan testing as a single activity once all product increments have been implemented.",
  "ee-q12-b":
    "Static testing should only take place at the component testing level to find code-related defects as early as possible.",
  "ee-q12-c":
    "Since fast feedback on the quality of an increment is important, testers should ideally perform regression testing manually.",
  "ee-q12-d":
    "Due to the delivery of new increments throughout the iterations, it is important to build comprehensive regression tests.",
  "ee-q13-a": "Component Integration Test",
  "ee-q13-b": "Acceptance Test",
  "ee-q13-c": "System Test",
  "ee-q13-d": "Component Test",
  "ee-q14-a": "Decommissioning of a system.",
  "ee-q14-b": "Corrective changes or emergency hotfixes.",
  "ee-q14-c": "Upgrades or migrations of the operating environment.",
  "ee-q14-d": "Implementation of new features during initial development.",
  "ee-q15-a": "Static testing is a cost-effective means of detecting defects.",
  "ee-q15-b": "Static testing makes dynamic testing less difficult.",
  "ee-q15-c": "Static testing can find run-time problems early in the lifecycle.",
  "ee-q15-d":
    "When testing safety-critical systems, static testing has less value because dynamic testing finds defects better.",
  "ee-q16-a": "Frequent feedback helps understand and implement requirement changes earlier.",
  "ee-q16-b": "Frequent feedback helps the development team better understand what it is building.",
  "ee-q16-c":
    "Frequent feedback helps the development team focus on the features that deliver the most value.",
  "ee-q16-d": "Frequent feedback can lead to misunderstandings about requirements.",
  "ee-q17-a": "Informal Review",
  "ee-q17-b": "Technical Review",
  "ee-q17-c": "Inspection",
  "ee-q17-d": "Walkthrough",
  "ee-q18-a": "The choice of an appropriate review type.",
  "ee-q18-b": "Sufficient time for preparation.",
  "ee-q18-c": "The definition of clear objectives and measurable exit criteria.",
  "ee-q18-d": "A well-facilitated review session.",
  "ee-q19-a": "White-Box Testing",
  "ee-q19-b": "Black-Box Testing",
  "ee-q19-c": "Experience-Based Testing",
  "ee-q19-d": "Error Guessing",
  "ee-q20-a": "1",
  "ee-q20-b": "2",
  "ee-q20-c": "3",
  "ee-q20-d": "4",
  "ee-q21-a": "0°C, 11°C, 20°C, 22°C, 23°C",
  "ee-q21-b": "9°C, 15°C, 19°C, 23°C, 100°C",
  "ee-q21-c": "10°C, 16°C, 19°C, 22°C, 23°C",
  "ee-q21-d": "14°C, 15°C, 18°C, 19°C, 21°C, 22°C",
  "ee-q22-a": "Rule 4",
  "ee-q22-b": "Rule 1",
  "ee-q22-c": "Rule 2",
  "ee-q22-d": "Rule 3",
  "ee-q23-a": "4",
  "ee-q23-b": "7",
  "ee-q23-c": "1",
  "ee-q23-d": "Infinite",
  "ee-q24-a":
    "Statement coverage is a measure of the number of lines of source code (excluding comments) executed during testing.",
  "ee-q24-b":
    "Statement coverage is a measure of the percentage of source code statements executed during testing.",
  "ee-q24-c":
    "Statement coverage is a measure of the percentage of lines of source code (excluding comments) executed during testing.",
  "ee-q24-d":
    "Statement coverage is a measure of the number of source code statements executed during testing.",
  "ee-q25-a": "White-box tests can provide coverage metrics, such as statement coverage.",
  "ee-q25-b": "White-box tests can verify whether the code meets the acceptance criteria.",
  "ee-q25-c": "White-box tests can test compatibility with other systems.",
  "ee-q25-d": "White-box tests can discover all defects in the code.",
  "ee-q26-a": "Decision Table Testing",
  "ee-q26-b": "Exploratory Testing",
  "ee-q26-c": "Checklist-based Testing",
  "ee-q26-d": "Error Guessing",
  "ee-q27-a": "When time pressure demands accelerating tests that have already been specified.",
  "ee-q27-b": "When the system is developed incrementally and no test charter is available.",
  "ee-q27-c":
    "When testers with sufficient knowledge of similar applications and technologies are available.",
  "ee-q27-d": "When a detailed system specification is available for test analysis and design.",
  "ee-q28-a":
    "The volume is easy for everyone to adjust, that is, the adjustment buttons are an appropriate size.",
  "ee-q28-b": "The tester can clearly hear the alarm tone even at the lowest level.",
  "ee-q28-c": "The volume can be adjusted within a range of 40 to 80 decibels.",
  "ee-q28-d": "The volume adjustment works correctly on the best-selling models of this timer.",
  "ee-q29-a":
    'GIVEN: I am logged in as a system administrator; WHEN I select "Check server performance"; THEN I am shown an overview...',
  "ee-q29-b":
    'GIVEN: I am logged in as a user; WHEN I select "Check server performance"; THEN I am shown an overview...',
  "ee-q29-c":
    'GIVEN: I am logged in as a system administrator; WHEN I select "Perform performance test"; THEN a performance test is performed...',
  "ee-q29-d":
    'GIVEN: I am logged in as a system administrator; WHEN I select "Check server performance" after performing test...',
  "ee-q30-a":
    "Testers identify and refine the functional and non-functional aspects of the test object.",
  "ee-q30-b": "Testers support deriving tasks from user stories.",
  "ee-q30-c": "Testers participate in the detailed risk analysis of user stories.",
  "ee-q30-d":
    "Testers help create user stories, evaluate their testability and define their acceptance criteria.",
  "ee-q31-a": "Entry criteria: 5, 6; Exit criteria: 1, 2, 3, 4",
  "ee-q31-b": "Entry criteria: 2, 3, 4; Exit criteria: 1, 5, 6",
  "ee-q31-c": "Entry criteria: 1, 3; Exit criteria: 2, 4, 5, 6",
  "ee-q31-d": "Entry criteria: 3, 5, 6; Exit criteria: 1, 2, 4",
  "ee-q32-a": "350 person-days",
  "ee-q32-b": "420 person-days",
  "ee-q32-c": "400±33 person-days",
  "ee-q32-d": "450 person-days",
  "ee-q33-a": "T7 -> T8 -> T10 -> T11 -> T9 -> T12",
  "ee-q33-b": "T7 -> T8 -> T9 -> T10 -> T11 -> T12",
  "ee-q33-c": "T7 -> T8 -> T10 -> T9 -> T11 -> T12",
  "ee-q33-d": "T7 -> T8 -> T9 -> T11 -> T10 -> T12",
  "ee-q34-a":
    "The tester can refer to the respective quadrants when selecting testing types, so that all stakeholders better understand the purpose of testing.",
  "ee-q34-b":
    "The tester can use the testing types described by the quadrants as a coverage metric; the more tests from each quadrant are executed, the higher the coverage.",
  "ee-q34-c":
    "The team must plan approximately the same number of test cases for each quadrant to ensure all testing levels and types are equally considered.",
  "ee-q34-d":
    "The tester can use the test quadrants for risk analysis; the lower levels of the quadrants representing a lower risk for the customer.",
  "ee-q35-a":
    "The complexity of the database module was judged high, therefore additional test cases were created for this module.",
  "ee-q35-b":
    "The user interface requirements are unclear, therefore a user experience expert is brought into the project.",
  "ee-q35-c":
    "System performance is crucial to the success of the project, therefore code reviews are skipped to save time.",
  "ee-q35-d":
    "The system must have high availability, therefore additional load tests are performed.",
  "ee-q36-a":
    "Formal communication means (e.g., formal reports, emails) should be used to ensure important information reaches the recipients.",
  "ee-q36-b":
    "Communication should take place via a chat group to ensure all team members are informed as quickly as possible.",
  "ee-q36-c":
    "Relevant stakeholders should be verbally informed of the test status in order to convey key information directly.",
  "ee-q36-d":
    "Test status must be communicated during daily coordination meetings via video conference, with the participation of stakeholders from all relevant time zones.",
  "ee-q37-a":
    "A tester records the progress made during the testing day in a test management tool.",
  "ee-q37-b":
    "A tester stores test data for data-driven execution in a database and ensures it is read at execution time.",
  "ee-q37-c":
    "A tester uses a spreadsheet to formalize the business rules of a system under test in the form of decision tables.",
  "ee-q37-d":
    "A tester automatically restores the test assets corresponding to an older version of a product in order to perform maintenance testing on that version.",
  "ee-q38-a": "The actual test result.",
  "ee-q38-b": "Identification of the version of the software tested.",
  "ee-q38-c": "Ideas for improving the test case.",
  "ee-q38-d": "The overall quality of the product tested.",
  "ee-q39-a": "1 – D, 2 – C, 3 – B, 4 – A",
  "ee-q39-b": "1 – B, 2 – A, 3 – C, 4 – D",
  "ee-q39-c": "1 – B, 2 – A, 3 – D, 4 – C",
  "ee-q39-d": "1 – A, 2 – B, 3 – D, 4 – C",
  "ee-q40-a":
    "Implementing regression tests is simpler because they can be written directly with a test script.",
  "ee-q40-b": "The automation tool enables a more efficient evaluation of the test object.",
  "ee-q40-c": "Using a testing tool when manual tests are more appropriate.",
  "ee-q40-d":
    "Regression tests can be executed faster, thereby providing faster feedback to the team.",
};

export const ENSEMBLE_E_EXPLANATIONS_EN: Record<string, string> = {
  "ee-q1":
    "A validation that the test object works as intended by the various stakeholders is a typical testing objective. (Syllabus Section 1.1.1)",
  "ee-q2":
    "Dynamic testing reveals failures caused by defects. Debugging analyzes and resolves the associated defect. (Syllabus Section 1.1.2)",
  "ee-q3":
    "Tests show the presence of defects but cannot prove their absence. The impossibility of exhaustive testing makes wanting to 'catch all the bugs' illusory. (Syllabus Section 1.3)",
  "ee-q4":
    "Creating or designing test data is a key task of test implementation. (Syllabus Section 1.4.1)",
  "ee-q5":
    "Technical factors include the type of software, the product architecture and the technologies used (such as cross-browser compatibility). (Syllabus Section 1.4.2)",
  "ee-q6":
    "Test management steers the overall process and team, while the tester role performs test design, analysis and execution tasks. (Syllabus Section 1.4.5)",
  "ee-q7":
    "One of the key advantages of independence is the ability to question and challenge stakeholders' assumptions and statements. (Syllabus Section 1.5.3)",
  "ee-q8":
    "In the whole-team approach, collaboration is essential: testers work hand in hand with the business and dev teams to design and refine tests. (Syllabus Section 1.5.2)",
  "ee-q9":
    "For every development activity, there must be a corresponding testing activity, and test analysis/design must start as early as possible. (Syllabus Section 2.1.2)",
  "ee-q10":
    "Deriving tests from acceptance criteria after the fact or simply automating them does not make it a test-first (Test-First/Test-Driven) approach where tests actively guide the writing of code. (Syllabus Section 2.1.3)",
  "ee-q11":
    "Shift-Left consists of integrating testing activities from the beginning of the SDLC, rather than pushing them to the end, in order to detect defects as early as possible. (Syllabus Section 2.1.5)",
  "ee-q12":
    "In an iterative-incremental model, each new increment is added to the existing product, which increases regression risk and requires robust regression tests. (Syllabus Section 2.1.1)",
  "ee-q13":
    "Component integration testing focuses on the interfaces and interactions between the components of a system. (Syllabus Section 2.2.1)",
  "ee-q14":
    "Implementing new features within an active development project does not fall under maintenance, while decommissioning, emergency fixes and environment migrations are typical triggers. (Syllabus Section 2.3.1)",
  "ee-q15":
    "Detecting defects early through static testing (reviews, static analysis) is much cheaper to fix than discovering them later through dynamic testing. (Syllabus Section 3.1.2)",
  "ee-q16":
    "Early and frequent feedback prevents misunderstandings rather than causing them. Option d) is therefore incorrect as an advantage (it denies the described benefit). (Syllabus Section 3.2.1)",
  "ee-q17":
    "Inspection is the most formal review type, based on the full generic process, with the primary objective of maximum anomaly detection. (Syllabus Section 3.2.4)",
  "ee-q18":
    "Participants are already working overtime and their tasks were not reduced to free up time for preparing the large review. (Syllabus Section 3.2.5)",
  "ee-q19":
    "Deriving test cases from functional specifications or a user story's acceptance criteria (without knowledge of the internal code) is black-box testing. (Syllabus Section 4.1.1)",
  "ee-q20":
    "All remaining partitions can be covered by adding only 2 well-targeted test cases. (Syllabus Section 4.2.1)",
  "ee-q21":
    "Option c) contains 5 boundary values out of the 8 existing ones, offering the highest coverage. (Syllabus Section 4.2.2)",
  "ee-q22":
    "Rule 2 corresponds to inputs [Speed > 50 = Yes] and [School Zone = No]. None of the existing test cases provides a speed above 50 combined with the absence of a school zone. (Syllabus Section 4.2.3)",
  "ee-q23":
    "There are four main branches returning to the initial state (Waiting for customer). So 4 tests suffice. (Syllabus Section 4.2.4)",
  "ee-q24":
    "Statement coverage measures the percentage of executable statements executed relative to the total number of statements in the source code. (Syllabus Section 4.3.1)",
  "ee-q25":
    "White-box tests allow calculating structural coverage metrics using the source code. (Syllabus Section 4.3.3)",
  "ee-q26":
    "Systematic evaluation based on predefined criteria, empirical rules or heuristics corresponds to checklist-based testing. (Syllabus Section 4.4.3)",
  "ee-q27":
    "Exploratory testing is particularly effective when testers are experienced and have solid business/domain knowledge. (Syllabus Section 4.4.2)",
  "ee-q28":
    "A good acceptance criterion must be objectively measurable and testable. Defining a range of 40 to 80 decibels provides an objective value. (Syllabus Section 4.5.2)",
  "ee-q29":
    "Test case c) includes both the required role (system administrator) and the specific action of the user story. (Syllabus Section 4.5.3)",
  "ee-q30":
    "During release planning, testers collaborate on writing testable user stories and defining clear acceptance criteria. (Syllabus Section 5.1.2)",
  "ee-q31":
    "Entry criteria require the environment (3), the approved specification (5) and the approved unit test (6). Exit criteria include the budget (1), execution (2) and defects (4). Option d) is correct. (Syllabus Section 5.1.3)",
  "ee-q32":
    "Application of the classic PERT formula: E = (a + 4m + b) / 6 = 400. Standard deviation SD = (b - a) / 6 = 33. (Syllabus Section 5.1.4)",
  "ee-q33":
    "T7 -> T8 -> T9 -> T11 -> T10 -> T12 allows releasing and executing the urgent priority 1 (T11) as early as possible, respecting the dependencies. (Syllabus Section 5.1.5)",
  "ee-q34":
    "The test quadrants provide an excellent means of structuring and explaining testing to all stakeholders. (Syllabus Section 5.1.7)",
  "ee-q35":
    "Skipping code reviews on the grounds that performance is critical is an absurd decision that considerably increases risks. (Syllabus Section 5.2.4)",
  "ee-q36":
    "For geographically and temporally distributed teams, formal, asynchronous written communication is essential to keep a reliable record. (Syllabus Section 5.3.3)",
  "ee-q37":
    "Configuration management allows versioning and maintaining the integrity of all deliverables and test assets. (Syllabus Section 5.4.1)",
  "ee-q38":
    "The exact version of the test object under examination is essential information to enable developers to fix the problem against the correct code base. (Syllabus Section 5.5.1)",
  "ee-q39":
    "The correct association is [1 - B, 2 - A, 3 - D, 4 - C], i.e. option c). (Syllabus Section 6.1.1)",
  "ee-q40":
    "One of the major advantages of regression test automation is the considerable time saving during execution, providing fast feedback to the team. (Syllabus Section 6.2.1)",
};

// Per-option rationales (justifications shown for each answer option).
export const ENSEMBLE_E_RATIONALES_EN: Record<string, string> = {
  "ee-q1-a":
    "False. Starting testing just before the release is neither good practice nor a classic testing objective.",
  "ee-q1-b": "Correct. Validating against stakeholder needs is a fundamental goal.",
  "ee-q1-c":
    "False. Proving that all defects have been identified is impossible according to the fundamental principles.",
  "ee-q1-d":
    "False. Determining the absence of negative impact assumes all defects have been found, which contradicts principle 2.",
  "ee-q2-a":
    "False. Testing itself does not identify the cause of a defect; that is the role of debugging.",
  "ee-q2-b":
    "Correct. Dynamic testing highlights failures; debugging finds the cause and fixes it.",
  "ee-q2-c": "False. Testing does not fix or eliminate failures by itself.",
  "ee-q2-d": "False. Dynamic testing does not prevent defects but demonstrates their presence.",
  "ee-q3-a":
    "False. Defect clustering explains that the majority of defects reside in a small number of modules.",
  "ee-q3-b":
    "Correct. This principle states that total absence of defects cannot be proven, even after rigorous testing.",
  "ee-q3-c":
    "False. The absence-of-errors fallacy means that fixing bugs does not guarantee success if the product does not meet needs.",
  "ee-q3-d": "False. Root cause analysis is not an ISTQB testing principle.",
  "ee-q4-a": "False. Analyzing a defect is a debugging task.",
  "ee-q4-b":
    "Correct. Designing and creating the data needed for execution is part of implementation.",
  "ee-q4-c": "False. Managing versions of test items falls under configuration management.",
  "ee-q4-d":
    "False. Writing user stories falls under requirements engineering or the Product Owner.",
  "ee-q5-a":
    "Correct. The cross-browser constraint is a purely technical environment and architecture factor.",
  "ee-q5-b": "False. That is a regulatory/contractual constraint (organizational factor).",
  "ee-q5-c": "False. That is a factor related to the software development lifecycle model (SDLC).",
  "ee-q5-d": "False. That is a factor related to people and the team.",
  "ee-q6-a": "False. This option exactly reverses the tester and test manager roles.",
  "ee-q6-b":
    "False. Although one person may take on both, their respective responsibilities remain fundamentally distinct.",
  "ee-q6-c":
    "Correct. Perfectly describes the split between steering on one side and design/execution on the other.",
  "ee-q6-d": "False. Both roles have clear assignments specified by the syllabus.",
  "ee-q7-a":
    "False. Although this is a general advantage, it is not what specifically applies in this acceptance criteria contradiction situation.",
  "ee-q7-b": "False. Testers must not take exclusive responsibility for quality.",
  "ee-q7-c":
    "False. That is a potential disadvantage if developers abdicate quality responsibility by relying too much on testers.",
  "ee-q7-d":
    "Correct. As an independent third party, the tester provides a critical eye and questions interpretation biases.",
  "ee-q8-a": "False. Unit testing is the responsibility of developers.",
  "ee-q8-b":
    "False. That is a collective team or architecture decision, not one of an isolated business role.",
  "ee-q8-c": "Correct. The Whole-Team approach promotes collaborative co-design of test cases.",
  "ee-q8-d":
    "False. Non-functional testing often requires specific testing skills shared across the whole team.",
  "ee-q9-a":
    "Correct. Starting testing early (analysis, design) in parallel with development is a golden rule of testing.",
  "ee-q9-b":
    "False. That describes a strictly sequential model not applicable to agile or iterative approaches.",
  "ee-q9-c": "False. Isolating testing after development is a classic anti-pattern.",
  "ee-q9-d":
    "False. Testing is not an isolated increment, but is integrated within each increment.",
  "ee-q10-a": "False. Writing tests before the code is the very definition of test-first.",
  "ee-q10-b": "False. That is the essence of TDD (Test-Driven Development).",
  "ee-q10-c": "False. Defining expected behavior using test cases is the BDD/ATDD approach.",
  "ee-q10-d":
    "Correct. This approach is purely reactive and does not use testing as a driver of prior design or development.",
  "ee-q11-a":
    "Correct. Starting as early as possible and testing continuously and in parallel defines Shift-Left.",
  "ee-q11-b": "False. That is the opposite of Shift-Left (the traditional late approach).",
  "ee-q11-c": "False. Starting mid-cycle is too late to be called Shift-Left.",
  "ee-q11-d":
    "False. Describes the general distribution of testing but not the specific Shift-Left concept.",
  "ee-q12-a":
    "False. That is a misinterpretation of the waterfall cycle applied to incremental development.",
  "ee-q12-b":
    "False. Static testing must be performed at all testing levels, not just on components.",
  "ee-q12-c":
    "False. Repeated manual regression tests each iteration soon become too slow; they must be automated.",
  "ee-q12-d":
    "Correct. Regression is the major risk in incremental development; a robust regression harness is essential.",
  "ee-q13-a":
    "Correct. Interfaces between components and detecting interaction errors are the core of component integration.",
  "ee-q13-b": "False. Acceptance focuses on overall usability and business validation.",
  "ee-q13-c": "False. System testing validates the end-to-end behavior of the complete system.",
  "ee-q13-d": "False. Unit/component testing tests modules in isolation.",
  "ee-q14-a": "False. Decommissioning requires data migration or archiving tests (maintenance).",
  "ee-q14-b": "False. Fixing bugs in production is a classic case of corrective maintenance.",
  "ee-q14-c":
    "False. Migrating or upgrading the OS or infrastructure triggers maintenance non-regression tests.",
  "ee-q14-d":
    "Correct. Initial feature implementation is part of the active development cycle, not maintenance of an existing operational system.",
  "ee-q15-a": "Correct. This is one of the major recognized economic benefits of static testing.",
  "ee-q15-b":
    "False. Dynamic testing remains difficult and necessary because it looks for different types of errors.",
  "ee-q15-c":
    "False. Finding run-time problems requires executing the code, hence dynamic testing.",
  "ee-q15-d":
    "False. Static testing has immense value for critical systems to identify fatal design defects before any coding.",
  "ee-q16-a": "False. That is a real advantage for adapting specifications in time.",
  "ee-q16-b": "False. That is a real advantage allowing developers to aim correctly.",
  "ee-q16-c": "False. That is a real advantage for prioritizing high-value features.",
  "ee-q16-d":
    "Correct. That is a non-existent disadvantage/risk; on the contrary, continuous feedback eliminates ambiguities.",
  "ee-q17-a": "False. The informal review follows no structured process and is informal.",
  "ee-q17-b":
    "False. The technical review aims above all at consensus and technical decision-making.",
  "ee-q17-c":
    "Correct. Inspection is the ultimate anomaly detection tool in an extremely structured, formal way.",
  "ee-q17-d": "False. The walkthrough mainly serves to explain the product and train participants.",
  "ee-q18-a": "False. The technical review is perfectly suited to a complex architecture document.",
  "ee-q18-b":
    "Correct. Without dedicated time or reduced workload, participants cannot prepare properly.",
  "ee-q18-c":
    "False. One cannot deduce from the statement that objectives or criteria were absent from the supplementary documents.",
  "ee-q18-d": "False. Nothing suggests the session will be poorly facilitated or poorly managed.",
  "ee-q19-a":
    "False. White-box requires analyzing the internal structure of the code, unavailable before development.",
  "ee-q19-b": "Correct. Analysis of expected behavior from the outside = black-box.",
  "ee-q19-c":
    "False. Although experience helps, the statement describes derivation based on written requirements (black-box).",
  "ee-q19-d": "False. Error guessing is based on intuition about historical failures.",
  "ee-q20-a":
    "False. 1 case would not be enough to cover both the [3 to 6] hours partition and the two missing intensities [Low, High].",
  "ee-q20-b":
    "Correct. We design 2 tests: one with H in [3 to 6] and 'Low' intensity, and another with 'High' intensity. All valid partitions will thus be covered.",
  "ee-q20-c": "False. 3 test cases would work but that is not the mathematical minimum required.",
  "ee-q20-d": "False. Too high.",
  "ee-q21-a": "False. Only covers 4 valid boundaries: 11, 20, 22 and 23.",
  "ee-q21-b":
    "False. Only covers 3 valid boundaries: 15, 19 and 23 (100 and 9 are not direct feedback transition boundaries).",
  "ee-q21-c": "Correct. Covers 10, 16, 19, 22, 23 (5 boundaries covered).",
  "ee-q21-d": "False. Only covers 3 valid boundaries: 15, 19, 22.",
  "ee-q22-a": "False. Covered by TC3 and TC4.",
  "ee-q22-b": "False. Covered by TC1.",
  "ee-q22-c": "Correct. No test case covers speed > 50 and school zone = No.",
  "ee-q22-d": "False. Covered by TC2.",
  "ee-q23-a":
    "Correct. 4 distinct scenarios allow traversing every transition of the diagram at least once.",
  "ee-q23-b": "False. Too high, we would create redundant loops.",
  "ee-q23-c":
    "False. Too low; a single scenario cannot cover everything because some paths lead to failures or mutually exclusive cancellations.",
  "ee-q23-d": "False. We are looking for the finite minimum of tests.",
  "ee-q24-a":
    "False. Coverage is not the absolute number of lines executed, but a relative percentage.",
  "ee-q24-b": "Correct. This is the official definition of a statement coverage rate.",
  "ee-q24-c":
    "False. Counting physical lines of code is unreliable due to formatting (multiple statements per line or vice versa).",
  "ee-q24-d": "False. That is an absolute value, not a proportion.",
  "ee-q25-a": "Correct. This is the major asset of white-box testing.",
  "ee-q25-b": "False. Validating acceptance criteria is the strength of black-box testing.",
  "ee-q25-c":
    "False. System compatibility is rather validated from the outside through black-box integration tests.",
  "ee-q25-d": "False. No technique can guarantee discovering 100% of defects.",
  "ee-q26-a": "False. No combined conditions/actions here.",
  "ee-q26-b":
    "False. The tests are not designed freely on the fly, but framed by a rigid list of heuristics.",
  "ee-q26-c":
    "Correct. The book's usability criteria form the checklist serving as the testing basis.",
  "ee-q26-d": "False. Does not rely on failure intuition but on a formal list of heuristics.",
  "ee-q27-a":
    "False. Exploratory testing does not serve to speed up already-written tests but to design new ones.",
  "ee-q27-b": "False. You always need a minimal charter in exploratory testing.",
  "ee-q27-c":
    "Correct. Testers' business and technical knowledge is the catalyst for exploratory testing success.",
  "ee-q27-d":
    "False. If the specifications are exhaustive, systematic black-box techniques are preferable.",
  "ee-q28-a": "False. 'Appropriate size' is subjective and not strictly testable.",
  "ee-q28-b":
    "False. 'Hearing clearly' depends on the tester's individual hearing, so it is subjective.",
  "ee-q28-c": "Correct. Decibels are physically measurable, making the criterion fully objective.",
  "ee-q28-d": "False. 'Work correctly' is too vague and does not define precise behavior.",
  "ee-q29-a":
    "False. Less complete because it limits itself to 'checking' passively without executing a performance test.",
  "ee-q29-b":
    "False. The user role is not the right one (the story asks for a system administrator).",
  "ee-q29-c":
    "Correct. Conforms to the standard Gherkin format and tests the key action for the admin.",
  "ee-q29-d": "False. Confusing structure that does not respect the initial criteria.",
  "ee-q30-a": "False. That is part of the general analysis during iteration planning.",
  "ee-q30-b": "False. Deriving test tasks from stories happens in iteration planning.",
  "ee-q30-c": "False. Detailed per-story risk analysis belongs to the iteration.",
  "ee-q30-d": "Correct. Defining release stories and their testability is a release planning task.",
  "ee-q31-a": "False. Misclassifies the environment (3) as an exit criterion.",
  "ee-q31-b": "False. Reverses the logic by putting execution (2) as an entry criterion.",
  "ee-q31-c": "False. Classifies the exhausted budget (1) as an entry criterion, which is absurd.",
  "ee-q31-d": "Correct. The essential entry criteria are 3, 5, 6. The exit criteria are 1, 2, 4.",
  "ee-q32-a": "False. Result of an incorrect average.",
  "ee-q32-b": "False. Miscalculation.",
  "ee-q32-c": "Correct. The expected average effort is 400 with a standard deviation of 33.",
  "ee-q32-d": "False. Simple arithmetic mean excluding optimism.",
  "ee-q33-a": "False. T11 executes before T9, on which it depends, violating the dependency.",
  "ee-q33-b": "False. T10 executes before T11, delaying the execution of priority 1.",
  "ee-q33-c": "False. Also delays T11 by interleaving T10.",
  "ee-q33-d":
    "Correct. Respects all dependencies and ideally prioritizes releasing the critical task T11.",
  "ee-q34-a": "Correct. This is one of the major communication benefits.",
  "ee-q34-b": "False. The quadrants do not serve as a coverage metric.",
  "ee-q34-c": "False. There is no need to have the same number of test cases in each quadrant.",
  "ee-q34-d": "False. The quadrants do not measure customer risk levels.",
  "ee-q35-a":
    "False. That is a classic mitigation measure to design more tests on the complex module.",
  "ee-q35-b": "False. That is a mitigation measure to bring in an expert to clarify fuzzy needs.",
  "ee-q35-c":
    "Correct. Not doing code reviews is absolute nonsense and mitigates nothing; quite the opposite.",
  "ee-q35-d":
    "False. That is a perfect mitigation measure to add load tests if availability is required.",
  "ee-q36-a":
    "Correct. Formal, written channels resolve the asynchronous constraints of time zone differences.",
  "ee-q36-b":
    "False. Instant messaging (chat) channels generate too much noise and offline confusion.",
  "ee-q36-c":
    "False. Direct verbal communication cannot be coordinated daily because of the time difference.",
  "ee-q36-d":
    "False. Forcing daily video conferences with people whose sleep schedules overlap is inefficient and complex.",
  "ee-q37-a": "False. Managing daily progress belongs to test monitoring and control.",
  "ee-q37-b": "False. Test data management is part of implementation.",
  "ee-q37-c": "False. Formalizing requirements into decision tables is part of analysis.",
  "ee-q37-d":
    "Correct. Allows freezing and faithfully restoring an assembly state (baseline) for maintenance testing.",
  "ee-q38-a": "False. The actual result is provided ('coffee temperature below 40°C').",
  "ee-q38-b":
    "Correct. The version of the software tested was forgotten, which is a serious fault.",
  "ee-q38-c": "False. Improving the scenario is not required information in a defect report.",
  "ee-q38-d":
    "False. Evaluating the overall quality of the object has no place in an individual bug report.",
  "ee-q39-a": "False. Mis-associates security (1) with defect management (D).",
  "ee-q39-b": "False. Mis-associates activity management (3) with preparation tools (C).",
  "ee-q39-c": "Correct. Perfectly respects the ISTQB tool definitions.",
  "ee-q39-d": "False. Mis-associates performance (1) with execution tools (A).",
  "ee-q40-a":
    "False. Writing automation test scripts is generally more complex than specifying manual tests.",
  "ee-q40-b":
    "False. Tool evaluation is not necessarily 'more efficient', but more objective and faster.",
  "ee-q40-c": "False. That is a major risk of automating unsuitable tests.",
  "ee-q40-d": "Correct. Speeding up non-regression execution is the primary purpose of automation.",
};
