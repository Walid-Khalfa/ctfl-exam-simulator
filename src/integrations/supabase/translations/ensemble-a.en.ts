// ISTQB Foundation Level v4.0 - Ensemble A (v2.3) - English translations
// Source of truth for the English content of Ensemble A. Records are merged by
// stable ID at read time (see src/lib/content-translations.ts). French source
// text remains in seed-ensemble-a.ts and is never modified here.
// Terminology follows the official ISTQB CTFL v4.0 syllabus.

export const ENSEMBLE_A_EXAM_EN = {
  title_en: "ISTQB CTFL v4.0 Sample Exam — SET A (v2.3)",
  description_en:
    "Official ISTQB Foundation Level v4.0 practice exam (Set A, v2.3, GTB edition). Includes 40 single-choice questions covering the 6 chapters of the syllabus with detailed explanations and justifications of the official answers.",
};

export const ENSEMBLE_A_QUESTIONS_EN: Record<string, string> = {
  "ea-q1": "Which of the following statements describes a feasible testing objective?",
  "ea-q2": "What is the main difference between testing and debugging?",
  "ea-q3":
    "You are part of a team testing a new system. You have noticed that no changes have been made to the existing regression test cases for several iterations and that no new defects have been discovered by the regression testing. Your manager is happy, but you are not. Which testing principle BEST explains your skepticism in this situation?",
  "ea-q4":
    "You are working in a team that develops a mobile app for ordering food. During the current iteration, the team has decided to implement the payment feature. Which of the following activities is part of test analysis?",
  "ea-q5":
    "Which of the following statements BEST describes how value is added by establishing and maintaining traceability between the test basis and testware?",
  "ea-q6":
    "Which of the following statements BEST describes the differences between the test roles?",
  "ea-q7": "Which of the following BEST explains an advantage of test independence?",
  "ea-q8":
    "How does the whole-team approach manifest itself in the interactions between testers and business representatives?",
  "ea-q9":
    "Which of the following statements BEST describes a good testing practice that applies to all software development lifecycles?",
  "ea-q10":
    "Which of the following statements BEST describes the Acceptance Test-Driven Development (ATDD) approach?",
  "ea-q11": "Which of the following options is NOT an example of the shift-left approach?",
  "ea-q12":
    "Which of the following arguments would you use to convince your manager to hold retrospectives at the end of each release cycle?",
  "ea-q13":
    "Which types of defects (1-4) are MOST likely to be found at which test levels (A-D)?\n1. Defects where the system behavior deviates from the user's business needs.\n2. Defects in the communication between components.\n3. Defects in an isolated component.\n4. Defects in the overall system behavior when implementing a user story.\n\nA. Component testing\nB. Component integration testing\nC. System testing\nD. Acceptance testing",
  "ea-q14":
    "Your organization's testing strategy suggests that, once a system is scheduled for retirement, data migration to a new system must be tested. As part of which testing activity is this testing MOST likely to be performed?",
  "ea-q15": "Which of the following is NOT an advantage of static testing?",
  "ea-q16":
    "Which of the following constitutes an advantage of early and frequent feedback from stakeholders?",
  "ea-q17":
    "The reviews in your organization have the following characteristics:\n• The main objective is to communicate or train reviewers.\n• The meeting is led by the author of the work product.\n• Individual preparation is performed by the reviewers before the meeting.\n• A review report may be produced.\n\nWhich of the following review types is MOST likely to be used?",
  "ea-q18": "Which of these statements is NOT a factor contributing to successful reviews?",
  "ea-q19": "Which of the following is a characteristic of experience-based test techniques?",
  "ea-q20":
    "You are testing the software of a US self-service gasoline pump. After lifting the nozzle and selecting the desired fuel type, the customer enters the desired amount of fuel in gallons using a keypad. The input field allows numeric values with one decimal place. Between 0.1 and 50.0 gallons can be dispensed per fill. Which of the following answers represents a minimum set of input values that covers all valid and invalid equivalence partitions for the fuel amount?",
  "ea-q21":
    "You are testing an e-commerce system that sells bulk food items such as spices, flour and other items. The units in which items are sold are either grams or kilograms. Regardless of the units, the minimum valid order quantity is 0.5 units and the maximum valid order quantity is 25.0 units. The order quantity can be incremented in 0.1 units. Which of the following answers contains exactly the minimum set of input values that fully covers the two-value boundary value analysis coverage items for the order quantity?",
  "ea-q22":
    "New employees of a company can agree on individual goals with their managers and supervisors, the achievement of which is linked to their bonus. However, this bonus is only paid to them if they have been employed by the company for more than one year.\n\nThis situation can be illustrated in a decision table:\nTest Case ID | T1 | T2 | T3 | T4 | T5\nCondition1 (Employed longer than a year?) | YES | NO | NO | YES | NO\nCondition2 (Goal agreed?) | NO | NO | YES | YES | YES\nCondition3 (Goal achieved?) | NO | NO | YES | YES | NO\nAction (Pay bonus?) | NO | NO | NO | YES | NO\n\nWhich of the following test cases describes a valid and feasible condition combination with a technically correct expected action that is missing from the decision table above?",
  "ea-q23":
    "Which of the following statements about the state transition diagram and the test case table below is true?\n\nState transition diagram:\n- TV Off (S1) -> RC pressed -> TV Standby (S2)\n- TV Standby (S2) -> RC released -> TV Off (S1)\n- TV Standby (S2) -> RC pressed -> TV Playing (S3)\n- TV Playing (S3) -> RC released -> TV Standby (S2)\n- TV Playing (S3) -> Power Off -> TV Off (S1)\n\nTest case table:\nTest case 1: Initial state S1, Input 'Power on', Final state S2\nTest case 2: Initial state S2, Input 'Power off', Final state S1\nTest case 3: Initial state S2, Input 'RC pressed', Final state S3\nTest case 4: Initial state S3, Input 'RC released', Final state S2\nTest case 5: Initial state S3, Input 'Power off', Final state S1",
  "ea-q24": "Which of the following describes statement coverage?",
  "ea-q25": "Which of the following statements is NOT true for white-box testing?",
  "ea-q26": "Which of the following options BEST describes the concept behind error guessing?",
  "ea-q27":
    "In your project, the launch of a brand-new application has been delayed and test execution started late, but you have very detailed knowledge of the domain and good analytical skills. The complete specification of requirements has not yet been provided to you, and management asks you to present initial test results. Which test technique is BETTER suited to this situation?",
  "ea-q28":
    "Which of the following activities describes the BEST way to formulate acceptance criteria for a given user story?",
  "ea-q29":
    "Your team follows the Acceptance Test-Driven Development (ATDD) approach and analyzes the following user story to create test cases:\n\n'As a registered customer, I want to be able to view my previous orders on the company website in order to keep an overview of my purchases.'\n\nYour team identifies the following list of test cases. Which test case is not relevant to this user story?",
  "ea-q30": "How do testers create value for iteration planning?",
  "ea-q31": "Which of the following options names an exit criterion for testing a system?",
  "ea-q32":
    "Your team uses the three-point estimation technique to estimate the testing effort for a new high-risk feature. The following estimates have been made:\n• most optimistic estimate: 2 person-hours\n• most likely estimate: 11 person-hours\n• most pessimistic estimate: 14 person-hours\n\nWhat is the final estimate?",
  "ea-q33":
    "You are testing a mobile app that allows users to find a nearby restaurant offering the type of food they want. Consider the following list of test cases, priorities (a smaller number means a higher priority) and dependencies:\n\n- TC 001 | Select the food type | Priority: 3 | Dependency: None\n- TC 002 | Select the restaurant | Priority: 2 | Dependency: TC 001\n- TC 003 | Get directions | Priority: 1 | Dependency: TC 002\n- TC 004 | Call the restaurant | Priority: 2 | Dependency: TC 002\n- TC 005 | Make a reservation | Priority: 3 | Dependency: TC 002\n\nWhich of the following test cases should be executed third?",
  "ea-q34":
    "Consider the following tests (1-4) and test quadrants (A-D):\n1. Usability testing\n2. Component testing\n3. Functional testing\n4. Reliability testing\n\nA. Test quadrant Q1: technology-oriented, supporting the team\nB. Test quadrant Q2: business-oriented, supporting the team\nC. Test quadrant Q3: business-oriented, critical evaluation of the product\nD. Test quadrant Q4: technology-oriented, critical evaluation of the product\n\nHow can the above test types/test levels be assigned to the test quadrants?",
  "ea-q35":
    "During a risk analysis, the following risk was identified and evaluated:\n• Risk: The response time of search results is too long\n• Risk probability: medium; risk impact: high\n• Risk response: an independent test team performs performance testing during system testing; a selected sample of end users performs alpha and beta acceptance testing before release.\n\nWhat actions were proposed above to address the identified risk?",
  "ea-q36":
    "Which of the following statements about the purpose and content of test reports is true?",
  "ea-q37":
    "You need to update one of the automated test scripts to comply with a new requirement. Which process dictates that a new version of the test script must be added to the test repository?",
  "ea-q38":
    "In your role as project manager, you have received the following defect report from the developers stating that the described anomaly is not reproducible.\n\nThe application crashes.\nID 713-20230401 2022-mai-03 – John Doe – Rejected\nSeverity: high; Priority: high\n\n'The application crashes after entering 'Test input: $ä' in the Name field of the new user creation screen. I tried logging out and logging back in with the test account admin01 test_, same problem. I tried with other test administrator accounts, same problem. No defect message received; the log (see attachment) contains a fatal defect message. Based on test case TC-1305, the application should accept the provided input and create the user. Please resolve this issue with high priority as this functionality is linked to REQ-0012, which is an important new functional requirement.'\n\nWhat important information is MISSING in this test report that would have been useful for the developers?",
  "ea-q39": "Which testing activities does a test data preparation tool support?",
  "ea-q40": "Which of the following represents a possible risk of test automation?",
};

export const ENSEMBLE_A_OPTIONS_EN: Record<string, string> = {
  "ea-q1-a": "It can be proven that the system under test has no more defects.",
  "ea-q1-b":
    "It can be proven that there will be no failures after the system is put into production.",
  "ea-q1-c":
    "The risk level of the test object is reduced and confidence in the quality level is built up.",
  "ea-q1-d": "A control can determine that all combinations of input values have been tested.",
  "ea-q2-a":
    "Testing can trigger failures or find defects, while debugging analyses the causes of a failure and eliminates the defects.",
  "ea-q2-b": "Testing verifies requirements, while debugging verifies the design.",
  "ea-q2-c":
    "Testing is the process of executing the software, while debugging is the process of analyzing the software.",
  "ea-q2-d":
    "Testing is the process of preventing defects, while debugging is the process of removing defects.",
  "ea-q3-a": "Older tests become less effective.",
  "ea-q3-b": "Absence of errors is a fallacy.",
  "ea-q3-c": "Defects cluster.",
  "ea-q3-d": "Exhaustive testing is impossible.",
  "ea-q4-a":
    "Estimate the effort to test the integration of the mobile app with the payment service.",
  "ea-q4-b": "Decide whether to test the ability to split payments among several users.",
  "ea-q4-c":
    "Use boundary value analysis (BVA) to derive test data for test cases that verify correct handling of the payment amount for the minimum allowed payment amount.",
  "ea-q4-d":
    "Analyze the difference between the actual result and the expected result after executing a test case.",
  "ea-q5-a":
    "Maintenance testing can be fully automated based on the changes made to the original requirements.",
  "ea-q5-b":
    "The measurement of achieving the targeted coverage can be determined more efficiently.",
  "ea-q5-c":
    "The test management role can determine which testers have found the defects with the highest severity.",
  "ea-q5-d":
    "Code areas that may be affected by the side effects of a change can be targeted through regression testing.",
  "ea-q6-a":
    "The tester role executes test cases, the test management role plans and monitors test activities and reports deviations to all testers.",
  "ea-q6-b":
    "The tester role performs test analysis and test design activities, creates and executes test cases, and the test management role coordinates test resources and reports to stakeholders.",
  "ea-q6-c":
    "The tester role determines which tests to automate and prioritizes test cases, and the test management role analyzes risks and prioritizes tests.",
  "ea-q6-d":
    "The tester role performs static and dynamic component testing, and the test management role performs system testing and acceptance testing.",
  "ea-q7-a":
    "Using an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team.",
  "ea-q7-b":
    "If a test team external to the organization is used, then the external team will be less easily influenced by the delivery concerns of project management and must adhere to strict delivery deadlines.",
  "ea-q7-c":
    "An independent test team can work separately from the developers, without needing to be distracted by project requirement changes, and can restrict communication with developers to defect reports through the defect management system.",
  "ea-q7-d":
    "When specifications contain ambiguities and inconsistencies, assumptions are made by developers according to their interpretation, and an independent test team can be useful to challenge these assumptions and interpretations.",
  "ea-q8-a":
    "Business representatives decide in collaboration with project management on test automation approaches.",
  "ea-q8-b": "Testers help business representatives define the test strategy.",
  "ea-q8-c": "Business representatives are not part of the whole-team approach.",
  "ea-q8-d": "Testers help business representatives to create appropriate acceptance tests.",
  "ea-q9-a": "Tests should only be performed once development is complete.",
  "ea-q9-b": "Tests must be performed under the direction of development.",
  "ea-q9-c": "Tests should start early in the development process.",
  "ea-q9-d": "Tests should be performed in a development test environment.",
  "ea-q10-a":
    "In ATDD, acceptance criteria are generally created using the GIVEN/WHEN/THEN format.",
  "ea-q10-b":
    "In ATDD, developer-facing tests are written first, then the code is written to satisfy those tests, then the tests and code are refactored.",
  "ea-q10-c": "In ATDD, tests are derived from acceptance criteria as part of the system design.",
  "ea-q10-d":
    "In ATDD, acceptance tests are derived only after the implementation of implemented system functions to confirm the implemented behavior.",
  "ea-q11-a": "Review user requirements before they are formally accepted by stakeholders.",
  "ea-q11-b": "Create component test cases before programming the associated code.",
  "ea-q11-c": "Execute a performance efficiency test for a component during testing.",
  "ea-q11-d": "Start executing non-functional tests during system level testing.",
  "ea-q12-a":
    "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes.",
  "ea-q12-b":
    "Holding regular retrospectives will allow the organization to save money because end user representatives do not provide immediate feedback on the product.",
  "ea-q12-c":
    "Weaknesses in processes identified during the retrospective can be analyzed during the retrospective and turned into improvement actions for the organization's continuous process improvement program.",
  "ea-q12-d":
    "Retrospectives allow the team to congratulate and motivate each other, which can increase morale and productivity.",
  "ea-q13-a": "1D, 2B, 3A, 4C",
  "ea-q13-b": "1D, 2B, 3C, 4A",
  "ea-q13-c": "1B, 2A, 3D, 4C",
  "ea-q13-d": "1C, 2A, 3B, 4D",
  "ea-q14-a": "Maintenance testing",
  "ea-q14-b": "Regression testing",
  "ea-q14-c": "Component testing",
  "ea-q14-d": "Component integration testing",
  "ea-q15-a":
    "Evaluating and remediating anomalies discovered by static analysis can take a significant amount of time and resources.",
  "ea-q15-b":
    "Correcting defects found during static testing is generally much less costly than correcting defects found during dynamic testing.",
  "ea-q15-c":
    "Finding coding defects that might not have been identified solely by performing dynamic testing.",
  "ea-q15-d": "Detecting gaps and inconsistencies in requirements.",
  "ea-q16-a": "It improves the testing process for future projects.",
  "ea-q16-b": "It forces customers to prioritize their requirements based on agreed risks.",
  "ea-q16-c": "It is the only way to measure the quality of changes.",
  "ea-q16-d": "It helps to avoid misunderstandings about requirements.",
  "ea-q17-a": "Informal review",
  "ea-q17-b": "Walkthrough",
  "ea-q17-c": "Technical review",
  "ea-q17-d": "Inspection",
  "ea-q18-a": "Participants must spend adequate time on the review.",
  "ea-q18-b":
    "It is recommended to split large work products into small parts so that reviewers do not lose sight of them.",
  "ea-q18-c": "Establish clear objectives and measurable exit criteria for the review.",
  "ea-q18-d": "Management of personal involvement in communicating the findings.",
  "ea-q19-a": "Test cases are created on the basis of detailed design information.",
  "ea-q19-b": "The number of interfaces tested is used to measure coverage.",
  "ea-q19-c":
    "The techniques rely heavily on the tester's knowledge of the software and the business domain.",
  "ea-q19-d": "Test cases are used to identify deviations from requirements.",
  "ea-q20-a": "0.0; 20.0; 60.0",
  "ea-q20-b": "0.0; 0.1; 50.0",
  "ea-q20-c": "0.0; 0.1; 50.0; 70.0",
  "ea-q20-d": "-0.1; 0.0; 0.1; 49.9; 50.0; 50.1",
  "ea-q21-a": "0.3 ; 24.9 ; 25.2",
  "ea-q21-b": "0.4 ; 0.5 ; 0.6 ; 24.9 ; 25.0 ; 25.1",
  "ea-q21-c": "0.4 ; 0.5 ; 25.0 ; 25.1",
  "ea-q21-d": "0.5 ; 0.6 ; 24.9 ; 25.0",
  "ea-q22-a": "Condition1 = YES, Condition2 = NO, Condition3 = YES, Action = NO",
  "ea-q22-b": "Condition1 = YES, Condition2 = YES, Condition3 = NO, Action = YES",
  "ea-q22-c": "Condition1 = NO, Condition2 = NO, Condition3 = YES, Action = NO",
  "ea-q22-d": "Condition1 = YES, Condition2 = YES, Condition3 = NO, Action = NO",
  "ea-q23-a":
    "The test cases attempt to execute all valid and invalid transitions, reaching 100% coverage of all transitions.",
  "ea-q23-b":
    "The test cases execute all valid transitions in the state transition diagram. This achieves 100% 0-switch coverage.",
  "ea-q23-c":
    "The test cases only execute a limited number of the valid transitions in the diagram. Therefore, the 0-switch coverage is less than 100%.",
  "ea-q23-d":
    "Test case 2 is not required for 100% 0-switch coverage, since state S1 is already covered by test case 5.",
  "ea-q24-a": "It is a metric to calculate and measure the percentage of test cases executed.",
  "ea-q24-b":
    "It is a metric that indicates the percentage of statements in the code that have been executed by test cases.",
  "ea-q24-c":
    "It is a metric to measure the number of statements in the code executed by test cases that have not revealed a failure.",
  "ea-q24-d":
    "It is a metric that provides a true/false confirmation that all statements are covered by executed test cases.",
  "ea-q25-a":
    "White-box testing is testing based on the analysis of the internal structure of a component or system.",
  "ea-q25-b":
    "White-box test coverage metrics can help identify additional tests to increase coverage.",
  "ea-q25-c":
    "White-box testing techniques can be used in addition to black-box testing to increase confidence in the code.",
  "ea-q25-d":
    "White-box testing is particularly well suited to identifying completely missing requirements.",
  "ea-q26-a":
    "Error guessing involves using your knowledge and experience of past defects and failures, as well as the typical mistakes made by developers.",
  "ea-q26-b":
    "Error guessing involves using your personal development experience and the mistakes you have previously made as a developer.",
  "ea-q26-c":
    "Error guessing requires you to imagine that you are the user of the test object and to guess the mistakes the user might make when interacting with it.",
  "ea-q26-d":
    "Error guessing requires you, as a tester, to reproduce the development tasks so that the defects and failures a developer might make can be identified.",
  "ea-q27-a": "Checklist-based testing",
  "ea-q27-b": "Error guessing",
  "ea-q27-c": "Exploratory testing",
  "ea-q27-d": "Statement testing",
  "ea-q28-a": "Conduct retrospectives to determine the actual needs of stakeholders.",
  "ea-q28-b": "Use the GIVEN/WHEN/THEN format to describe an example test condition.",
  "ea-q28-c":
    "Use verbal communication to reduce the risk of others misunderstanding the acceptance criteria.",
  "ea-q28-d":
    "Document the risks related to a given user story in a test plan to facilitate risk-based testing.",
  "ea-q29-a":
    "Input: The customer logs into their account on the website and clicks the 'View Order History' button. Expected output: The system displays a list of all of the customer's previous orders, including the date, order number and total cost.",
  "ea-q29-b":
    "Input: The logged-in customer clicks on an order in their order list. Expected output: The system displays the individually purchased items with the price and quantity.",
  "ea-q29-c":
    "Input: The logged-in customer opens the order history. Expected output: The system displays the orders in a traceable order with date, order number and total cost.",
  "ea-q29-d":
    "Input: A newly registered customer logs in and places a first order. Expected output: The system accepts the order and stores the associated data.",
  "ea-q30-a": "Testers determine the priority of user stories to be developed.",
  "ea-q30-b": "Testers focus only on refining the functional aspects of the system under test.",
  "ea-q30-c": "Testers participate in risk analysis and determine the testability of user stories.",
  "ea-q30-d":
    "Testers facilitate the deployment of high-quality software through early test design during release planning.",
  "ea-q31-a": "The test environment is ready for use.",
  "ea-q31-b": "The tester can log in to the test object.",
  "ea-q31-c": "The agreed target value for defect density is reached.",
  "ea-q31-d": "Requirements have been translated into the GIVEN/WHEN/THEN format.",
  "ea-q32-a": "9 person-hours",
  "ea-q32-b": "10 person-hours",
  "ea-q32-c": "11 person-hours",
  "ea-q32-d": "14 person-hours",
  "ea-q33-a": "TC 003",
  "ea-q33-b": "TC 005",
  "ea-q33-c": "TC 002",
  "ea-q33-d": "TC 001",
  "ea-q34-a": "1C, 2A, 3B, 4D",
  "ea-q34-b": "1D, 2A, 3C, 4B",
  "ea-q34-c": "1C, 2B, 3D, 4A",
  "ea-q34-d": "1D, 2B, 3C, 4A",
  "ea-q35-a": "Risk acceptance",
  "ea-q35-b": "Contingency plan",
  "ea-q35-c": "Risk mitigation",
  "ea-q35-d": "Risk transfer",
  "ea-q36-a":
    "Test completion reports are prepared and distributed regularly to keep stakeholders informed of progress.",
  "ea-q36-b":
    "A test progress report contains the final assessment of testing and the product quality based on the exit criteria.",
  "ea-q36-c":
    "A test completion report is created when a test level has been completed and builds on test progress reports and additional data.",
  "ea-q36-d":
    "Test progress reports are created during test completion to demonstrate that the exit criteria have been met.",
  "ea-q37-a": "Traceability management",
  "ea-q37-b": "Maintenance testing",
  "ea-q37-c": "Configuration management",
  "ea-q37-d": "Requirements management",
  "ea-q38-a": "Expected result and actual result",
  "ea-q38-b": "References and defect status",
  "ea-q38-c": "Test environment and test object (incl. version)",
  "ea-q38-d": "Priority and severity",
  "ea-q39-a": "Test monitoring and control",
  "ea-q39-b": "Test analysis and design",
  "ea-q39-c": "Test design and implementation",
  "ea-q39-d": "Test completion",
  "ea-q40-a": "Unknown side effects may occur during operational use.",
  "ea-q40-b": "There may be unrealistic expectations about the capability of a tool.",
  "ea-q40-c": "Testing tools are generally not sufficiently reliable.",
  "ea-q40-d": "The time available for manual testing may be reduced in the long term.",
};

export const ENSEMBLE_A_SOLUTIONS_EN: Record<string, string> = {
  "ea-q1":
    "CORRECT – Testing can help find defects, reduce the risk of inadequate software quality, and build confidence in the quality of the test object (cf. Syllabus CTFL V4.0.2, Section 1.1.1, 4th and 8th bullets).",
  "ea-q2":
    "CORRECT – Testing and debugging are separate activities. Testing can trigger failures or find defects. Debugging includes, in particular, reproducing a failure, searching for and analysing the responsible defects, then removing them (cf. Syllabus CTFL V4.0.2, Section 1.1.2).",
  "ea-q3":
    'CORRECT – This principle means that if the same tests are repeated again and again, eventually those tests no longer find any new defects. This can explain why the unchanged regression tests did not reveal any new defects. (cf. Syllabus V4.0.2, Section 1.3, bullet 5 "Tests wear out").',
  "ea-q4":
    "CORRECT – This is an example of defining test conditions, which is part of test analysis (cf. syllabus V4.0.2; Section 1.4.1, test analysis part).",
  "ea-q5":
    "CORRECT – If test cases are linked to requirements, the addition of a new test case (with traceability) can determine whether previously uncovered requirements or parts of requirements are covered by the new test case (see Syllabus CTFL V4.0.2, Section 1.4.4, 1st bullet).",
  "ea-q6":
    "CORRECT – because this meaningfully describes the main tasks of each role in testing. The tester role executes test cases, creates and designs test cases, performs test analysis and design activities, and reports defects; the test management role coordinates test resources and reports to stakeholders (see Syllabus CTFL V4.0.2, Section 1.4.5, 2nd + 3rd paragraphs).",
  "ea-q7":
    "CORRECT – Specifications are never perfect, which means that assumptions will have to be made by the developer. An independent tester is useful in this respect as they can challenge and verify the assumptions and subsequent interpretation made by the developer (cf. Syllabus CTFL, Section 1.5.3, para. 3, last sentence).",
  "ea-q8":
    "CORRECT – Testers will work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help create appropriate acceptance tests (see Syllabus V4.0.2, Section 1.5.2; Paragraph 3).",
  "ea-q9":
    "CORRECT – Tests should start early in the development process to detect defects as early as possible and minimize the cost of fixing defects (cf. Syllabus CTFL V4.0.2, Section 2.1.2, 3rd bullet of the list, and Section 1.3).",
  "ea-q10":
    "CORRECT – In Acceptance Test-Driven Development (ATDD), tests are derived and created from acceptance criteria as part of the system design (cf. Syllabus CTFL V4.0.2, Section 2.1.3, 2nd approach listed, 1st bullet).",
  "ea-q11":
    "CORRECT – Early non-functional testing is an example of the shift-left approach, but starting the execution of non-functional tests late during system level testing is not a shift-left approach (Syllabus CTFL v4.0.2, Section 2.1.5, 5th bullet).",
  "ea-q12":
    "CORRECT – Regularly held retrospectives, when appropriate follow-up activities take place, are essential to the continuous improvement of development and testing (cf. Syllabus ISTQB® Foundation Level v4.0.2, Section 2.1.6, 2nd paragraph, 2nd sentence).",
  "ea-q13":
    "CORRECT – The test basis for acceptance testing is the user's business needs (1D). Communication between components is tested during component integration testing (2B). Defects in an isolated component can be detected during component testing (3A). User stories or system requirements are used for system testing to test the overall behavior (4C) (cf. Syllabus CTFL v4.0.2, Section 2.2.1).",
  "ea-q14":
    "CORRECT – When a system is retired, this may require data migration testing, which is a form of maintenance testing (Syllabus v4.0.2, Section 2.3, bullets 2 and 3).",
  "ea-q15":
    "CORRECT – This statement does not describe a benefit of static testing, but a possible effort involved in evaluating and managing anomalies detected by static analysis (cf. Syllabus CTFL v4.0.2, Section 3.1.2).",
  "ea-q16":
    "CORRECT – Early and frequent feedback allows potential quality problems, such as misunderstood requirements, to be identified at an early stage (see ISTQB® Foundation Level Syllabus V4.0.2, Section 3.2.1, 1st paragraph).",
  "ea-q17":
    "CORRECT – The main purpose (communicating or training) fits a walkthrough. In addition, the meeting is led by the author, which is a typical characteristic of a walkthrough (cf. Syllabus CTFL v4.0.2, Section 3.2.4).",
  "ea-q18":
    "CORRECT – The syllabus mentions management support for the review process, but it does not identify management's personal involvement in communicating the findings as a success factor (Syllabus CTFL V4.0.2, Section 3.2.5, 6th bullet of the list and Section 3.2.3, 1st bullet of the list).",
  "ea-q19":
    "CORRECT – Experience-based techniques rely on the tester's knowledge and experience of the software, its environment, the likely defects and the distribution of those defects (cf. Syllabus ISTQB® Foundation Level V4.0.2, Section 4.1).",
  "ea-q20":
    "CORRECT – There are three relevant equivalence partitions: less than 0.1 gallon (< 0.1, e.g. 0.0), valid from 0.1 to 50.0 gallons (e.g. 20.0) and more than 50.0 gallons (> 50.0, e.g. 60.0). Option a) covers exactly these three partitions in a minimal way (see Syllabus CTFL V4.0.2, Section 4.2.1, 5th paragraph).",
  "ea-q21":
    "CORRECT – Two-value boundary value analysis defines testing on the boundary value and its immediate neighbour of the adjacent class. Thus, for the lower boundary 0.5, we test 0.5 and 0.4; for the upper boundary 25.0, we test 25.0 and 25.1 (see Syllabus CTFL V4.0.2, Section 4.2.2, 4th paragraph).",
  "ea-q22":
    "CORRECT – Test case d) describes the technically correct situation in which not meeting the agreed goal (Condition3 = NO) results in the bonus not being paid (Action = NO) even though the employee has been with the company for more than a year (Condition1 = YES) (see Syllabus CTFL V4.0.2, Section 4.2.3, 2nd paragraph).",
  "ea-q23":
    "CORRECT – The proposed test cases cover exactly all five possible valid transitions in the given state transition diagram (S1-> S2, S2-> S1, S2-> S3, S3-> S2, S3-> S1), thereby achieving 0-switch coverage (cf. Syllabus ISTQB® CTFL V4.0.2, Section 4.2.4).",
  "ea-q24":
    "CORRECT – Statement coverage measures the percentage of code statements that have been executed by the set of test cases (see Syllabus CTFL v4.0.2, Section 4.3.1, Paragraph 1).",
  "ea-q25":
    "CORRECT – White-box techniques are based on the existing internal structure of the code. If a requirement has not been implemented at all (missing feature), white-box testing cannot detect the complete absence of that code structure (cf. Syllabus CTFL V4.0.2, Section 4.3.3, 1st paragraph, last sentence).",
  "ea-q26":
    "CORRECT – The basic concept of error guessing is that the tester tries to guess which mistakes a developer might have made and which defects might be present in the test object, based on past experience (cf. Syllabus CTFL V4.0.2, Section 4.4.1, 1st paragraph).",
  "ea-q27":
    "CORRECT – Exploratory testing is particularly useful when few specifications are available and/or the testing schedule is tight (Syllabus CTFL V4.0.2, Section 4.4.2, 3rd paragraph, 1st sentence).",
  "ea-q28":
    "CORRECT – It is a standard method for documenting acceptance criteria for a user story (see Syllabus CTFL V4.0.2, Section 4.5.2, 3rd paragraph, 1st bullet).",
  "ea-q29":
    "CORRECT – This test case is not relevant to this user story because it tests placing a new order, whereas the user story is only concerned with viewing previous orders (see Syllabus CTFL V4.0.2, Section 4.5.3).",
  "ea-q30":
    "CORRECT – According to the syllabus, participating in risk analysis and determining the testability of user stories is one of the ways in which testers add value to iteration planning (see Syllabus ISTQB® Foundation Level V4.0.2, Section 5.1.2, 3rd paragraph, 2nd sentence).",
  "ea-q31":
    "CORRECT – The agreed defect density is a depth-of-testing measure that serves as an exit criterion (cf. Syllabus CTFL V4.0.2; Section 5.1.3, 3rd paragraph).",
  "ea-q32":
    "CORRECT – In three-point estimation: E = (optimistic + 4 * likely + pessimistic) / 6. Thus, E = (2 + 4 * 11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 (cf. Syllabus CTFL ISTQB® V4.0.2, Section 5.1.4).",
  "ea-q33":
    "CORRECT – TC 001 must be executed first, followed by TC 002 on which the others depend. Among the dependent test cases, TC 003 has the highest priority (value 1), so it is executed third (cf. Syllabus ISTQB® CTFL V4.0.2, Section 5.1.5).",
  "ea-q34":
    "CORRECT – Usability testing is assigned to quadrant Q3 (1C), component testing to quadrant Q1 (2A), functional testing to quadrant Q2 (3B), and reliability testing to quadrant Q4 (4D) (cf. Syllabus CTFL ISTQB® V4.0.2, Section 5.1.7).",
  "ea-q35":
    "CORRECT – The proposed actions are concrete testing measures aimed at reducing the probability that the risk will occur or minimizing its consequences, which corresponds to risk mitigation (cf. CTFL Syllabus V4.0.2, Section 5.2.4, last paragraph, bulleted list).",
  "ea-q36":
    "CORRECT – Test completion reports are created and distributed when substantially similar tasks have been completed (level, iteration, project, etc.) and build on previous test progress reports (cf. Syllabus CTFL V4.0.2, Section 5.3.2, paragraph 1, last sentence, and paragraph 3).",
  "ea-q37":
    "CORRECT – To support testing, configuration management involves version control of all test items (see Syllabus CTFL V4.0.2, Section 5.4, 4th paragraph, 1st sentence).",
  "ea-q38":
    "CORRECT – We do not know in which test environment the defect was found, nor which test object or application (and which exact version) is involved, which is essential to reproduce the bug (see Syllabus ISTQB® Foundation Level V4.0.2, Section 5.5, 3rd paragraph, 3rd bullet).",
  "ea-q39":
    "CORRECT – Test design and implementation tools facilitate the creation of test cases, test data and test executions (cf. CTFL Syllabus V4.0.2, Section 6.1, 3rd bullet).",
  "ea-q40":
    "CORRECT – The unrealistic expectation is that, in some cases, management believes that introducing a testing tool will solve all problems (cf. Syllabus CTFL V4.0.2, Section 6.2, 3rd paragraph, 1st bullet).",
};
