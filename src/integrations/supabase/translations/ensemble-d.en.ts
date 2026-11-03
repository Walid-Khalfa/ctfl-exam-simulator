// ISTQB Foundation Level v4.0 - Ensemble D (v1.5.0) - English translations
// Source of truth for the English content of Ensemble D. Records are merged by
// stable ID at read time (see src/lib/content-translations.ts). French source
// text remains in seed-ensemble-d.ts and is never modified here.
// Terminology follows the official ISTQB CTFL v4.0 syllabus.

export const ENSEMBLE_D_EXAM_EN = {
  title_en: "ISTQB CTFL v4.0 Sample Exam — SET D (v1.5.0)",
  description_en:
    "Official ISTQB Foundation Level v4.0 practice exam (Set D, v1.5.0, GTB edition). Includes 40 unique questions covering all syllabus chapters with explanations and justifications of the official answers.",
};

export const ENSEMBLE_D_QUESTIONS_EN: Record<string, string> = {
  "ed-q1": "Which of the following is a typical testing objective?",
  "ed-q2":
    "A designer documents a design for a user interface that does not properly meet the needs of disabled users because the designer is tired. The programmer implements the user interface according to the design, but, since he is working under intense time pressure, he does not include proper exception handling in his program code for the bonus calculations. When the operational system is used, some disabled users complain about the interface and the company is subsequently fined by the competent regulatory authority. No one notices that the bonus calculations are sometimes incorrect.\n\nWhich of the following statements is CORRECT?",
  "ed-q3":
    "Testers use test conditions to generate test cases and execute tests. While the test conditions remain the same, the test cases vary each time.\n\nWhich 'testing principle' is addressed through the variation of test cases?",
  "ed-q4":
    "Given the following testing tasks:\n1. Derive test cases from test conditions.\n2. Identify reusable testware.\n3. Organize test cases into test procedures.\n4. Evaluate the test basis and the test object.\n\nAnd the following testing activities:\nA. Test analysis\nB. Test design\nC. Test implementation\nD. Test completion\n\nWhich of the following BEST matches the tasks and activities?",
  "ed-q5":
    "Which of the following BEST shows the testware produced as a result of test implementation?",
  "ed-q6":
    "Which of the following is MOST likely to describe a task performed by someone in a test management role?",
  "ed-q7": "Which of the following is an advantage of the whole-team approach?",
  "ed-q8":
    "Which advantages and disadvantages of test independence are TWO likely to be considered advantages?\n\nPlease select TWO options!",
  "ed-q9":
    "Which of the following is a good testing practice that applies to all software development lifecycles?",
  "ed-q10": "Which of the following is an example of a test-first development approach?",
  "ed-q11":
    "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
  "ed-q12": "Which of the following BEST describes retrospectives?",
  "ed-q13":
    "Which of the following tests is MOST likely to be performed as part of functional testing?",
  "ed-q14":
    "Which of the following is MOST likely to be a trigger leading to maintenance testing of a currency exchange system?",
  "ed-q15": "Which of the following CANNOT be examined by static testing?",
  "ed-q16": "Which of the following statements about the value of static testing is CORRECT?",
  "ed-q17":
    "Given the following descriptions of review activities:\n\n- Detected anomalies are examined, and determinations are made regarding their status, ownership, and any further action needed.\n1. Issues are recorded, and all necessary updates are addressed before the work product is accepted.\n2. Reviewers use techniques to formulate suggestions and questions about the work product and to spot anomalies.\n3. The review objective and its schedule are established to ensure a targeted and effective review.\n4. Participants are provided access to the item under review.\n\nWhich of the following options represents the CORRECT sequence of review process activities corresponding to the descriptions?",
  "ed-q18":
    "Which participant in the review process is responsible for ensuring review meetings run effectively and that everyone can express their opinions freely?",
  "ed-q19":
    "You are performing system testing of an e-commerce web application and you receive the following requirement:\n\nREQ 05-017. If the total cost of purchases exceeds $100, the customer receives a 5% discount on future purchases. Otherwise, the customer receives no discount.\n\nWhich testing techniques will be MOST useful for designing test cases based on this requirement?",
  "ed-q20":
    'The cinema ticket sales system calculates the discount type based on the customer\'s year of birth (BY) and the current year (CY) as follows:\n\nLet D be the difference between CY and BY, that is, D = CY – BY\n• If D < 0, print the error message "year of birth cannot be greater than the current year"\n• If 0 ≤ D < 18, apply the student discount\n• If 18 ≤ D < 65, apply no discount\n• If D ≥ 65, apply the senior discount\n\nYour test suite already contains two test cases:\n• BY = 1990, CY = 2020, expected result: no discount\n• BY = 2030, CY = 2029, expected result: print the error message\n\nWhich of the following test data sets should be added to achieve full valid equivalence partition coverage for the discount type?\n\nPlease select TWO options!',
  "ed-q21":
    'You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in whole degrees Celsius) as input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message "temperature OK". For lower temperatures, the system displays "temperature too low" and for higher temperatures, "temperature too high".\n\nUsing two-value boundary value analysis, which of the following sets of test inputs offers the highest level of boundary value coverage?',
  "ed-q22":
    "You are designing test cases based on the following decision table:\n\n- R1: Age 0-18, Exp -, Registered NO -> Cat A\n- R2: Age 19-65, Exp 0-4, Registered NO -> Cat A\n- R3: Age 19-65, Exp >4, Registered NO -> Cat B\n- R4: Age >65, Exp -, Registered NO -> Cat B\n- R5: Age 0-18, Exp -, Registered YES -> Cat B\n- R6: Age 19-65, Exp -, Registered YES -> Cat D\n- R7: Age >65, Exp -, Registered YES -> Cat C\n\nSo far, you have designed the following test cases:\n• TC1: 19-year-old male, not registered, no experience; expected result: category A\n• TC2: 65-year-old female, not registered, 5 years of experience; expected result: category B\n• TC3: 66-year-old male, registered, no experience; expected result: category C\n• TC4: 65-year-old female, registered, 4 years of experience; expected result: category D\n\nWhich of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?",
  "ed-q23":
    "You apply state transition testing to the hotel room booking system modeled by the following state transition table, which has 4 states and 5 different events:\n\n- S1: Request | Valid events: Available (S2), Unavailable (S3)\n- S2: Confirmed | Valid events: Change Room (S1), Cancel (S4), Pay (S4)\n- S3: Waiting list | Valid events: Available (S2), Cancel (S4)\n- S4: End | No events\n\nAssuming all test cases start in the 'Request' state, which of the following test cases, expressed as sequences of events, achieves the highest coverage of valid transitions?",
  "ed-q24":
    "Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage.\n\nWhich of the following statements is CORRECT?",
  "ed-q25":
    "Why do white-box tests facilitate defect detection even when the software specification is vague, outdated or incomplete?",
  "ed-q26": "Which of the following is NOT anticipated by the tester when applying error guessing?",
  "ed-q27": "Which of the following statements is true about exploratory testing?",
  "ed-q28":
    "Which collaborative user story writing practice enables the team to reach a shared understanding of what must be delivered?",
  "ed-q29":
    "You have just started designing test cases for the following user story.\n\nAs a customer, I want to be able to filter search results by price range, so that I can more easily find products within my budget.\n\nAcceptance criteria:\n1. The filter must work for all versions of the application from version 3.0\n2. The filter must allow the customer to set a price range with a minimum price and a maximum price\n3. Search results must update dynamically when the customer adjusts the price range filter.\n\nIn all test cases, the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110.\n\nWhich of the following is the BEST example of a test case for this user story?",
  "ed-q30":
    "Which of the following BEST defines exit criteria in a test project?\n\nPlease select TWO options!",
  "ed-q31":
    "The team wants to estimate the time needed for a tester to execute four test cases for a software component. The team has collected the following measurements of the effort used to execute a single test case:\n• Most favorable scenario: 1 hour\n• Most unfavorable scenario: 8 hours\n• Most likely scenario: 3 hours\n\nGiven that the three-point estimation technique is used, what is the final estimate of the time needed to execute all four test cases?",
  "ed-q32":
    'The table shows the traceability matrix of test cases to requirements. "X" means a given test case covers the corresponding requirement.\n\n- TC1: covers Requirement 1, Requirement 3, Requirement 4, Requirement 7 (4 requirements)\n- TC2: covers Requirement 1, Requirement 5, Requirement 7 (3 requirements)\n- TC3: covers Requirement 5, Requirement 6 (2 requirements)\n- TC4: covers Requirement 2 (1 requirement)\n\nYou want to prioritize the test cases using the additional coverage prioritization technique. You execute the four test cases.\n\nWhich test case must be executed last?',
  "ed-q33": "How can the test quadrants be beneficial to testing?",
  "ed-q34":
    "For a given risk, its risk level is $1,000 and its risk probability is estimated at 50%.\n\nWhat is the risk impact?",
  "ed-q35": "Which of the following are product risks?\n\nPlease select TWO options!",
  "ed-q36": "Which of the following is NOT a valid objective for a test report?",
  "ed-q37":
    "A user reported a software failure. A support team engineer asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that constituted that version. This then allowed a developer to perform an analysis, find the defect and fix it.\n\nWhich of the following enabled the team to carry out the above activity?",
  "ed-q38":
    'Consider the following defect report for a Book Lending System.\n\n- Defect ID: 001\n- Title: Unable to return a book\n- Severity: High\n- Priority: [not specified]\n- Environment: Windows 11, Google Chrome\n\nDescription: When attempting to return a book using the book return feature, the system does not record the return and the book remains borrowed by the user.\n\nSteps to reproduce: Log in to the Book Lending System as a user who has borrowed a book. Click the "Return book" button for the borrowed book. The system does not record the return and the book remains borrowed.\n\nExpected result: The book should be returned and should no longer appear as borrowed by the user.\n\nActual result: The book remains borrowed by the user and is not recorded as returned in the system.\n\nAttachments: [empty list]\n\nWhich of the following is MOST likely to help the developer quickly reproduce the failure?',
  "ed-q39":
    "Which tools from a category are MOST likely to facilitate test execution?\n\nPlease select TWO options!",
  "ed-q40": "Which of the following is MOST likely to be a risk of test automation?",
};

export const ENSEMBLE_D_OPTIONS_EN: Record<string, string> = {
  "ed-q1-a": "Identify and fix defects in the test object.",
  "ed-q1-b": "Maintain effective communication with developers.",
  "ed-q1-c": "Validate that legal requirements have been met.",
  "ed-q1-d": "Build confidence in the quality of the test object.",
  "ed-q2-a": "The incorrect bonus calculation is a defect that occurs occasionally.",
  "ed-q2-b": "The fine received for not accommodating some disabled users is a failure.",
  "ed-q2-c": "The programmer working under severe time pressure is a root cause.",
  "ed-q2-d": "The user interface design contains a failure caused directly by the designer.",
  "ed-q3-a": "Tests wear out.",
  "ed-q3-b": "False assumption of absence of defects.",
  "ed-q3-c": "Early testing saves time and money.",
  "ed-q3-d": "Defects cluster.",
  "ed-q4-a": "1B, 2A, 3D, 4C",
  "ed-q4-b": "1B, 2D, 3C, 4A",
  "ed-q4-c": "1C, 2A, 3B, 4D",
  "ed-q4-d": "1C, 2D, 3A, 4B",
  "ed-q5-a": "Test completion report",
  "ed-q5-b": "Data kept in a database used for test inputs and expected results.",
  "ed-q5-c": "The list of items needed to build the test environment.",
  "ed-q5-d": "Test cases",
  "ed-q6-a": "Evaluate the test basis and the test object.",
  "ed-q6-b": "Define the test environment requirements.",
  "ed-q6-c": "Evaluate the testability of the test object.",
  "ed-q6-d": "Create a test completion report.",
  "ed-q7-a": "Improved communication among team members.",
  "ed-q7-b": "Reduced individual responsibility for quality.",
  "ed-q7-c": "Faster deployment of deliverables to end users.",
  "ed-q7-d": "Reduced collaboration with external business users.",
  "ed-q8-a": "Testers work in a different location from developers.",
  "ed-q8-b": "Testers question the assumptions programmers make when writing the code.",
  "ed-q8-c": "A conflictual dynamic has been established between testers and developers.",
  "ed-q8-d":
    "Developers have convinced themselves that testers are primarily responsible for quality.",
  "ed-q8-e": "Testers have different biases from developers.",
  "ed-q9-a": "Each testing level has specific and distinct testing objectives.",
  "ed-q9-b":
    "Implementation and execution of tests for a given testing level should start during the corresponding development phase.",
  "ed-q9-c":
    "Testers should start test design as soon as drafts of the relevant work products become available.",
  "ed-q9-d": "Every dynamic testing activity has a corresponding static testing activity.",
  "ed-q10-a": "Behavior-Driven Development",
  "ed-q10-b": "Test-Level-Driven Development",
  "ed-q10-c": "Function-Driven Development",
  "ed-q10-d": "Performance-Driven Development",
  "ed-q11-a": "Ensuring non-functional quality characteristics are not overlooked.",
  "ed-q11-b": "Managing constantly evolving test environments.",
  "ed-q11-c": "The need for more manual testers with appropriate experience.",
  "ed-q11-d": "Setting up test automation within the delivery pipeline.",
  "ed-q12-a":
    "Retrospectives allow team members to identify other team members who did not fully contribute to achieving the quality required by the whole-team approach.",
  "ed-q12-b":
    "Retrospectives give testers the opportunity to identify the activities that succeeded so that they are kept when potential improvements are made in the future.",
  "ed-q12-c":
    "Retrospectives are places where agile team members are allowed to express their concerns about direction and customers in a blame-free environment.",
  "ed-q12-d":
    "Retrospectives offer agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration.",
  "ed-q13-a":
    "The test verifies that the sorting function places the items of the list or array in ascending order.",
  "ed-q13-b":
    "The test checks whether the sorting function completes the sort in less than one second from the start.",
  "ed-q13-c":
    "The test checks how easily the sorting function can be modified to switch from ascending to descending order.",
  "ed-q13-d":
    "The test verifies that the sorting function still works correctly when moved from a 32-bit to a 64-bit architecture.",
  "ed-q14-a":
    "Developers reported that changing the currency exchange system was difficult and testers decided to verify whether this was true.",
  "ed-q14-b":
    "The refund option of the currency exchange system was removed because it did not always refund the correct amount to customers.",
  "ed-q14-c":
    "The agile team started developing a user story that adds a new customer loyalty feature to the currency exchange system.",
  "ed-q14-d":
    "The language support option of the currency exchange system was used to enable both English and local language currency transactions.",
  "ed-q15-a": "Contract",
  "ed-q15-b": "Test plan",
  "ed-q15-c": "encrypted code",
  "ed-q15-d": "test charter",
  "ed-q16-a":
    "The types of defects found by static testing are different from the types of defects that can be found by dynamic testing",
  "ed-q16-b":
    "Dynamic testing can detect the types of defects that can be found by static testing plus some additional types of defects",
  "ed-q16-c":
    "Dynamic testing can identify some of the defects that can be found by static testing, but not all.",
  "ed-q16-d":
    "Static testing can identify the types of defects that can be found by dynamic testing, as well as some additional types of defects.",
  "ed-q17-a": "4 – 3 – 5 – 2 – 1",
  "ed-q17-b": "4 – 5 – 3 – 1 – 2",
  "ed-q17-c": "5 – 4 – 1 – 3 – 2",
  "ed-q17-d": "5 – 4 – 3 – 2 – 1",
  "ed-q18-a": "Manager",
  "ed-q18-b": "moderator",
  "ed-q18-c": "Chairperson",
  "ed-q18-d": "Review Leader",
  "ed-q19-a": "White-box testing techniques.",
  "ed-q19-b": "Black-box testing techniques.",
  "ed-q19-c": "Experience-based testing techniques.",
  "ed-q19-d": "Risk-based testing techniques.",
  "ed-q20-a": "BY = 2001, CY = 2065",
  "ed-q20-b": "BY = 1900, CY = 1965",
  "ed-q20-c": "BY = 1965, CY = 1900",
  "ed-q20-d": "BY = 2011, CY = 2029",
  "ed-q20-e": "BY = 2000, CY = 2000",
  "ed-q21-a": "–1, 3",
  "ed-q21-b": "0, 2",
  "ed-q21-c": "–1, 0, 2, 3",
  "ed-q21-d": "–2, 0, 2, 4",
  "ed-q22-a": "66-year-old male, not registered, no experience; Expected result: category B.",
  "ed-q22-b":
    "55-year-old female, not registered, 2 years of experience; Expected result: category A.",
  "ed-q22-c": "19-year-old female, registered, 5 years of experience; expected result: category D.",
  "ed-q22-d": "No additional test case can increase the decision table coverage already achieved.",
  "ed-q23-a": "Unavailable, Available, Change Room, Unavailable, Cancel",
  "ed-q23-b": "Available, Change Room, Unavailable, Available, Pay",
  "ed-q23-c": "Available, Change Room, Available, Change Room, Unavailable",
  "ed-q23-d": "Unavailable, Cancel, Change Room, Available, Pay",
  "ed-q24-a": "Running S will reveal all possible failures in P.",
  "ed-q24-b": "S achieves 100% branch coverage for P.",
  "ed-q24-c":
    "Each executable statement in P containing a defect has been executed at least once during the execution of S.",
  "ed-q24-d":
    "After removing one test case from S, the two remaining test cases will still be able to achieve 100% statement coverage.",
  "ed-q25-a":
    "Test cases are designed based on the structure of the test object rather than the specification.",
  "ed-q25-b":
    "For each white-box testing technique, coverage can be well defined and easily measured.",
  "ed-q25-c":
    "White-box testing techniques are very well designed to detect omissions in requirements.",
  "ed-q25-d":
    "White-box testing techniques can be used in both static testing and dynamic testing.",
  "ed-q26-a": "The developer misunderstood the formula in the user story for calculating interest.",
  "ed-q26-b":
    'The developer wrote "FA = A*(1+IR^N)" instead of "FA = A*(1+IR)^N" in the source code.',
  "ed-q26-c": "The developer missed the seminar on compound interest legislation.",
  "ed-q26-d": "The precision of the interest calculated by the system is not accurate enough.",
  "ed-q27-a": "Test cases are designed before the exploratory testing session begins.",
  "ed-q27-b": "The tester can perform test execution but cannot perform test design.",
  "ed-q27-c": "Exploratory testing results are good indicators of the number of remaining defects.",
  "ed-q27-d": "During exploratory testing, the tester can use black-box testing techniques.",
  "ed-q28-a":
    "Poker planning, so that a team can reach consensus on the effort required to implement a user story.",
  "ed-q28-b":
    "Review, so that a team can detect inconsistencies and contradictions in a user story.",
  "ed-q28-c":
    "Iteration planning, so that the user stories with the greatest business value for a customer can be prioritized for implementation.",
  "ed-q28-d": "Conversation, so that team members can understand how the software will be used.",
  "ed-q29-a":
    "Enter the web page and set the filter to display prices between $90 and $100. Expected result: the results show only product A. Set the maximum price to $110. Expected result: the results now include both products A and B.",
  "ed-q29-b":
    "Enter the web page. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, priced at $120. Refresh the customer's page. Expected result: the default maximum price changes to $120.",
  "ed-q29-c":
    "Enter the web page and set the filter to display prices between $110 and $115. Expected result: the results show both products A and B. Change the currency from USD to EUR. Expected result: the filter range correctly changes to EUR values, according to the current exchange rate.",
  "ed-q29-d":
    "Enter the web page with three different browsers: Edge, Chrome and Opera. In each browser, set the filter between $90 and $110. Expected result: the results include both products A and B and the layout of the results is the same in all three browsers.",
  "ed-q30-a": "The budget is approved.",
  "ed-q30-b": "The budget expires.",
  "ed-q30-c": "The test basis is available.",
  "ed-q30-d": "The test cases have achieved at least 80% statement coverage.",
  "ed-q30-e": "All test analysts are ISTQB Foundation Level certified.",
  "ed-q31-a": "14 hours",
  "ed-q31-b": "3.5 hours",
  "ed-q31-c": "16 hours",
  "ed-q31-d": "12 hours",
  "ed-q32-a": "TC1",
  "ed-q32-b": "TC2",
  "ed-q32-c": "TC3",
  "ed-q32-d": "TC4",
  "ed-q33-a":
    "They help in test planning by dividing the test process into four steps, corresponding to the four basic testing levels: component, integration, system, and acceptance testing.",
  "ed-q33-b":
    "They help assess high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage).",
  "ed-q33-c":
    "They help non-technical stakeholders understand the different types of testing and that some testing types are more relevant to certain testing levels than others.",
  "ed-q33-d":
    "They help agile teams develop a communication strategy based on classifying people according to four basic psychological types, and modeling the relationships between them.",
  "ed-q34-a": "$500",
  "ed-q34-b": "$2,000",
  "ed-q34-c": "$50,000",
  "ed-q34-d": "$200",
  "ed-q35-a": "Scope creep",
  "ed-q35-b": "Poor architecture",
  "ed-q35-c": "Cost reduction",
  "ed-q35-d": "Poor tooling support",
  "ed-q35-e": "Excessive response time",
  "ed-q36-a": "Tracking test progress and identifying areas needing additional attention.",
  "ed-q36-b":
    "Provide information on the tests executed, their results and any problems or defects found.",
  "ed-q36-c": "Provide information on each defect, such as the steps to reproduce it.",
  "ed-q36-d": "Provide information on the tests planned for the next period.",
  "ed-q37-a": "Risk management",
  "ed-q37-b": "Test monitoring and control",
  "ed-q37-c": "Whole-team approach",
  "ed-q37-d": "Configuration management",
  "ed-q38-a":
    'Add information about the users and books involved in the problem to the "Description" section.',
  "ed-q38-b": 'Complete the missing value for the "Priority" field.',
  "ed-q38-c":
    'Add memory dumps and database snapshots taken after each step described in the "Steps to reproduce" section to the "Attachments" section.',
  "ed-q38-d":
    "Repeat the same test case for different environments and write defect reports for each of them separately.",
  "ed-q39-a": "Collaboration Tools",
  "ed-q39-b": "DevOps Tools",
  "ed-q39-c": "Management Tools",
  "ed-q39-d": "Non-functional testing tools",
  "ed-q39-e": "Test design and implementation tools",
  "ed-q40-a": "Detection of additional high-severity defects.",
  "ed-q40-b": "Providing measurements that are too complicated for humans to derive.",
  "ed-q40-c": "Incompatibility with the development platform.",
  "ed-q40-d": "Considerably reduced test execution times.",
};

export const ENSEMBLE_D_EXPLANATIONS_EN: Record<string, string> = {
  "ed-q1":
    "Building confidence in the quality of the test object is achieved by executing successful tests (Syllabus Section 1.1.1).",
  "ed-q2":
    "The error is made by the programmer due to intense time pressure, which represents the root cause of the defect (Syllabus Section 1.2.3).",
  "ed-q3":
    "The principle that tests wear out concerns the idea that repeating the same tests yields no new defects (Syllabus Section 1.3.1).",
  "ed-q4":
    "Test design derives the cases (1B), test completion identifies reusable items (2D), test implementation organizes them into procedures (3C), test analysis evaluates the basis (4A). (Syllabus Section 1.4.1).",
  "ed-q5":
    "Test data kept in a database is part of the deliverables of test implementation (Syllabus Section 1.4.3).",
  "ed-q6":
    "Creating a test completion report is a typical task associated with the test management role (Syllabus Section 1.4.5).",
  "ed-q7":
    "The whole-team approach fosters strong communication and a shared view of quality (Syllabus Section 1.5.2).",
  "ed-q8":
    "Testers question assumptions (b) and have different cognitive biases from developers (e), which are two key advantages of test independence (Syllabus Section 1.5.3).",
  "ed-q9":
    "Each testing level must have specific objectives to avoid needless duplication (Syllabus Section 2.1.2).",
  "ed-q10":
    "BDD (Behavior-Driven Development) is a classic test-first approach (Syllabus Section 2.1.3).",
  "ed-q11":
    "Automating and integrating tests into the CI/CD delivery pipeline represents a major DevOps challenge (Syllabus Section 2.1.4).",
  "ed-q12":
    "Retrospectives allow discussing what went well in order to keep it and identify areas for improvement (Syllabus Section 2.1.6).",
  "ed-q13":
    "Verifying the correct functional behavior (ascending sort) is functional testing par excellence (Syllabus Section 2.2.2).",
  "ed-q14":
    "Removing a faulty behavior requires a code change, triggering maintenance testing (Syllabus Section 2.3.1).",
  "ed-q15":
    "Encrypted code cannot be read by humans or by conventional static analysis tools (Syllabus Section 3.1.1).",
  "ed-q16":
    "Dynamic testing can detect failures, some of whose underlying defects could also have been found statically, but not all (such as design incompatibility issues or dead code) (Syllabus Section 3.1.2).",
  "ed-q17":
    "The ISO 20246 sequence is: Planning (4) -> Initiation (5) -> Individual review (3) -> Communication and analysis (1) -> Rework and report (2). That is 4-5-3-1-2 (Syllabus Section 3.2.2).",
  "ed-q18":
    "The moderator ensures the review meeting runs smoothly and that everyone can speak freely (Syllabus Section 3.2.3).",
  "ed-q19":
    "Since we rely solely on a behavioral specification without looking at the code, black-box techniques are required (Syllabus Section 4.1.1).",
  "ed-q20":
    "To cover all valid classes (D<0, 0<=D<18, 18<=D<65, D>=65), we need to add D=65 (b: 1965-1900) and D=0 (e: 2000-2000) to the existing tests (D=30 and D=-1) (Syllabus Section 4.2.1).",
  "ed-q21":
    "Two-value boundary analysis for the range [0, 2] requires testing -1, 0 and 2, 3 to cover all boundaries (Syllabus Section 4.2.2).",
  "ed-q22":
    "The condition (Age > 65, Registered NO) corresponds to rule R4, which is not covered by any of the test cases TC1 to TC4 (Syllabus Section 4.2.3).",
  "ed-q23":
    "Sequence (b) activates 5 valid transitions of the state machine starting from 'Request' (Syllabus Section 4.2.4).",
  "ed-q24":
    "100% statement coverage means every executable statement has been exercised at least once during testing (Syllabus Section 4.3.1).",
  "ed-q25":
    "White-box testing looks at the structure of the code rather than its textual description, thereby getting around outdated specs (Syllabus Section 4.3.3).",
  "ed-q26":
    "Missing a seminar is a distant organizational cause, not a direct technical error identifiable through error guessing (Syllabus Section 4.4.1).",
  "ed-q27":
    "The exploratory tester is free to apply any technique (such as black-box) to design tests on the fly (Syllabus Section 4.4.2).",
  "ed-q28":
    "Direct conversation allows exchanging and building a shared understanding of user stories (Syllabus Section 4.5.1).",
  "ed-q29":
    "Case (a) optimally tests the selection and dynamic refresh of results (criteria 2 and 3) (Syllabus Section 4.5.3).",
  "ed-q30":
    "Budget expiration (b) and statement coverage (d) are typical exit criteria (Syllabus Section 5.1.3).",
  "ed-q31":
    "Three-point estimation gives E = (1 + 4*3 + 8)/6 = 3.5h per test case. For 4 test cases, we get 3.5 * 4 = 14 hours (Syllabus Section 5.1.4).",
  "ed-q32":
    "TC1 goes first (4 requirements), then TC3 (covers Req5 and Req6), then TC4 (covers Req2). TC2 adds no further coverage and therefore goes last (Syllabus Section 5.1.5).",
  "ed-q33":
    "Test quadrants classify testing types to help stakeholders understand their objectives (Syllabus Section 5.1.7).",
  "ed-q34":
    "Risk level = Probability * Impact. So Impact = Risk level / Probability = 1000 / 0.50 = $2,000 (Syllabus Section 5.2.1).",
  "ed-q35":
    "Poor architecture (b) and slow response times (e) are risks directly related to the test object itself (product risks) (Syllabus Section 5.2.2).",
  "ed-q36":
    "Detailing the steps to reproduce a bug is the objective of a defect report, not of a overall test summary report (Syllabus Section 5.3.2).",
  "ed-q37":
    "Configuration management uniquely records versions and allows recreating the exact assembly state of the files (Syllabus Section 5.4.1).",
  "ed-q38":
    "Providing concrete test inputs (which books, which user) allows the bug to be reproduced quickly (Syllabus Section 5.5.1).",
  "ed-q39":
    "DevOps tools (such as CI/CD) and non-functional testing tools (such as load injectors) directly execute tests (Syllabus Section 6.1.1).",
  "ed-q40":
    "Incompatibility with the development platform is a classic technical risk of automation (Syllabus Section 6.2.1).",
};

// Per-option rationales (justifications shown for each answer option).
export const ENSEMBLE_D_RATIONALES_EN: Record<string, string> = {
  "ed-q1-a": "False. Identification is a task, but fixing defects is debugging, not testing.",
  "ed-q1-b":
    "False. Maintaining communication is a good means of team collaboration, not the objective of testing.",
  "ed-q1-c":
    "False. Validating that legal requirements are met falls under general regulatory validation/verification, not a basic testing objective.",
  "ed-q1-d": "Correct. Building confidence comes directly from successful tests.",
  "ed-q2-a":
    "False. That is a potential system failure, not directly a defect occurring occasionally.",
  "ed-q2-b":
    "False. The fine is a regulatory/financial consequence, not a failure of the software system itself.",
  "ed-q2-c": "Correct. Intense time pressure is the root cause of the error made.",
  "ed-q2-d": "False. The design contains a defect, not a failure.",
  "ed-q3-a": "Correct. This is the principle of tests wearing out (the pesticide paradox).",
  "ed-q3-b": "False. The false assumption of absence of defects concerns fit with user needs.",
  "ed-q3-c": "False. Early testing aims to reduce costs by starting early.",
  "ed-q3-d": "False. Defect clustering concerns the concentration of defects in certain modules.",
  "ed-q4-a": "False. Incorrect match.",
  "ed-q4-b":
    "Correct. Perfect match between testing activities and their associated deliverables/tasks.",
  "ed-q4-c": "False. Incorrect match.",
  "ed-q4-d": "False. Incorrect match.",
  "ed-q5-a": "False. The test completion report is produced during the test completion phase.",
  "ed-q5-b":
    "Correct. The test data required for inputs/outputs is generated during implementation.",
  "ed-q5-c": "False. The environment item list comes from the design phase.",
  "ed-q5-d": "False. Test cases are a product of the test design phase.",
  "ed-q6-a": "False. Technical task performed by the tester during analysis.",
  "ed-q6-b": "False. Technical design task generally performed by the tester.",
  "ed-q6-c": "False. Evaluating testability is a test analysis task performed by the tester.",
  "ed-q6-d":
    "Correct. Writing the test completion/closure report is the responsibility of test management.",
  "ed-q7-a": "Correct. It strongly fosters team communication.",
  "ed-q7-b":
    "False. It increases collective responsibility rather than reducing individual responsibility.",
  "ed-q7-c": "False. It focuses on quality, not directly on increasing raw delivery speed.",
  "ed-q7-d": "False. It encourages stronger collaboration with business stakeholders.",
  "ed-q8-a": "False. Working separately physically harms communication and is a disadvantage.",
  "ed-q8-b": "Correct. Neutrally questioning specifications is a direct advantage of independence.",
  "ed-q8-c": "False. A conflictual relationship is a major disadvantage.",
  "ed-q8-d": "False. If developers leave quality to testers, that is a harmful effect.",
  "ed-q8-e":
    "Correct. Having a different cognitive bias from the code's author allows finding more errors.",
  "ed-q9-a": "Correct. This is one of the essential principles of a good multi-level test plan.",
  "ed-q9-b":
    "False. Implementation/execution depends on code maturity, not necessarily aligned to the same phase.",
  "ed-q9-c": "False. Designing on unstable drafts wastes effort when changes occur.",
  "ed-q9-d":
    "False. There is no absolute symmetry or direct equivalent for all dynamic activities.",
  "ed-q10-a": "Correct. BDD designs scenarios/tests before the code.",
  "ed-q10-b": "False. This is not an existing or recognized test-first model.",
  "ed-q10-c": "False. Function-driven development is based on classical functional writing.",
  "ed-q10-d": "False. This is not a test-first approach.",
  "ed-q11-a": "False. DevOps actually improves the visibility of these non-functional aspects.",
  "ed-q11-b": "False. Automated environments tend to stabilize rather in DevOps.",
  "ed-q11-c": "False. DevOps rather reduces purely manual effort thanks to overall automation.",
  "ed-q11-d":
    "Correct. Setting up and maintaining this automated testing factory is a constant technical challenge.",
  "ed-q12-a": "False. Identifying culprits or pointing fingers harms team cohesion.",
  "ed-q12-b":
    "Correct. This is the very essence of continuous process improvement through the retrospective.",
  "ed-q12-c":
    "False. Retrospectives are not a place for reproach or criticism of management or customers.",
  "ed-q12-d": "False. The iteration planning meeting manages future planning.",
  "ed-q13-a": "Correct. This validates the business function itself.",
  "ed-q13-b": "False. That is an efficiency or performance test (non-functional).",
  "ed-q13-c": "False. That is a maintainability test (non-functional).",
  "ed-q13-d": "False. That is a portability test (non-functional).",
  "ed-q14-a":
    "False. That corresponds to a maintainability/analyzability test, not maintenance testing.",
  "ed-q14-b":
    "Correct. Removing or modifying a feature requires maintenance testing of the existing system.",
  "ed-q14-c":
    "False. Adding a new feature involves development testing (functional and regression).",
  "ed-q14-d":
    "False. Configuring a parameter is not a major structural change requiring software maintenance in the strict sense.",
  "ed-q15-a": "False. A contract can certainly be statically reviewed by proofreading.",
  "ed-q15-b": "False. A test plan is very commonly subject to static reviews.",
  "ed-q15-c":
    "Correct. If encrypted, static testing is impossible because its content is unreadable.",
  "ed-q15-d": "False. A test charter is a text document that is statically reviewed.",
  "ed-q16-a": "False. There is a significant overlap of defect types identifiable by both methods.",
  "ed-q16-b":
    "False. Some defects such as dead code or standard violations can only be found statically.",
  "ed-q16-c": "Correct. There is partial but not total overlap.",
  "ed-q16-d":
    "False. Static testing cannot detect dynamic failures related to complex real-time execution.",
  "ed-q17-a": "False. Incorrect sequence.",
  "ed-q17-b": "Correct. Perfectly follows the sequential steps of the review process.",
  "ed-q17-c": "False. Incorrect sequence.",
  "ed-q17-d": "False. Incorrect sequence.",
  "ed-q18-a": "False. The manager allocates resources and decides what to inspect.",
  "ed-q18-b":
    "Correct. This is the definition of the moderator role: ensuring a supportive, structured environment.",
  "ed-q18-c": "False. This is not a standard defined role of the ISTQB review process.",
  "ed-q18-d": "False. The review leader organizes and pilots the process overall.",
  "ed-q19-a": "False. Concerns internal structure and code, which are absent from the requirement.",
  "ed-q19-b": "Correct. Allows deriving use cases from the specified inputs/outputs.",
  "ed-q19-c":
    "False. Empirical technique, less rigorous than black-box for precise business rules.",
  "ed-q19-d": "False. That is a prioritization strategy, not a test case design technique.",
  "ed-q20-a": "False. Gives D=64, which is already covered by the [18-65[ class.",
  "ed-q20-b": "Correct. Gives D=65, covering the senior class.",
  "ed-q20-c": "False. Gives D=-65, already covered by the D<0 error class.",
  "ed-q20-d": "False. Gives D=18, already covered by the [18-65[ class.",
  "ed-q20-e": "Correct. Gives D=0, covering the student class.",
  "ed-q21-a": "False. Does not cover the inner boundary values 0 and 2.",
  "ed-q21-b": "False. Does not cover the outer boundary values -1 and 3.",
  "ed-q21-c": "Correct. Exhaustively covers all 4 two-value boundaries.",
  "ed-q21-d": "False. Uses values too far from the immediate boundaries.",
  "ed-q22-a": "Correct. Adding this test case covers rule R4, which was left uncovered.",
  "ed-q22-b": "False. Corresponds to rule R2, already covered by test case TC1.",
  "ed-q22-c": "False. Corresponds to rule R6, already covered by test case TC4.",
  "ed-q22-d": "False. Coverage is only 4 rules out of 7, so it can certainly be increased.",
  "ed-q23-a":
    "False. Only covers 4 transitions because the double pass through 'Unavailable' is redundant.",
  "ed-q23-b": "Correct. This is the most complete sequence covering 5 valid transitions.",
  "ed-q23-c": "False. Limited to 3 unique transitions.",
  "ed-q23-d":
    "False. Impossible sequence because after 'Cancel' you are in the final 'End' state and can no longer change rooms.",
  "ed-q24-a":
    "False. Executing a line does not imply surfacing all possible failures (e.g., data-dependent division by zero).",
  "ed-q24-b": "False. Statement coverage does not ensure branch coverage.",
  "ed-q24-c":
    "Correct. Every statement potentially containing a defect has necessarily been executed at least once.",
  "ed-q24-d": "False. Removing a test can drop coverage below 100%.",
  "ed-q25-a": "Correct. The design source is the code itself, not the paper requirements.",
  "ed-q25-b":
    "False. Although the metric is precise, that is not what solves the problem of vague specs.",
  "ed-q25-c": "False. White-box cannot find functions omitted if they are never coded at all.",
  "ed-q25-d": "False. That is off-topic regarding the issue of vague specifications.",
  "ed-q26-a": "False. That is a typical misunderstanding error anticipated by the tester.",
  "ed-q26-b": "False. That is a typo (code defect) classically looked for.",
  "ed-q26-c":
    "Correct. Noting that a developer missed a seminar is not within the scope of error guessing.",
  "ed-q26-d": "False. That is a classic functional failure the tester anticipates.",
  "ed-q27-a":
    "False. Tests are designed, executed and documented simultaneously during the session.",
  "ed-q27-b": "False. The tester actively designs tests throughout the session.",
  "ed-q27-c": "False. Results do not reliably predict the number of remaining anomalies.",
  "ed-q27-d":
    "Correct. Using equivalence partitions or other black-box techniques is common in exploratory testing.",
  "ed-q28-a": "False. Poker planning is used to estimate complexity/effort, not to clarify need.",
  "ed-q28-b":
    "False. Reviews examine documents but do not replace synchronous collaborative discussion.",
  "ed-q28-c":
    "False. Planning prioritizes tasks but does not deepen the functional need from a usage perspective.",
  "ed-q28-d": "Correct. Face-to-face or virtual conversation is the key to a shared view.",
  "ed-q29-a":
    "Correct. This is a perfect acceptance test verifying dynamic updating when the filter is adjusted.",
  "ed-q29-b":
    "False. Tests the default value and adding a product, which are not mentioned in the criteria.",
  "ed-q29-c": "False. Tests multi-currency behavior, outside the scope of the user story.",
  "ed-q29-d": "False. Tests multi-browser compatibility, not requested here.",
  "ed-q30-a": "False. That is an entry criterion for starting the project or the tests.",
  "ed-q30-b": "Correct. Exhaustion of financial resources forces test exit.",
  "ed-q30-c": "False. Availability of the basis is a fundamental entry criterion.",
  "ed-q30-d":
    "Correct. Achieving a minimum level of code or specification coverage is a standard exit criterion.",
  "ed-q30-e": "False. Having trained testers is an entry criterion for team skills.",
  "ed-q31-a": "Correct. Strict application of the weighted formula.",
  "ed-q31-b": "False. That is the effort estimate for a single test case.",
  "ed-q31-c": "False. Miscalculation that does not respect the coefficients.",
  "ed-q31-d": "False. Corresponds to a simple arithmetic mean without proper weighting.",
  "ed-q32-a": "False. TC1 must go first because it covers the most requirements.",
  "ed-q32-b": "Correct. TC2 adds no additional coverage at this stage of testing.",
  "ed-q32-c": "False. TC3 brings strong additional coverage and goes in second position.",
  "ed-q32-d": "False. TC4 brings the last uncovered requirement (Req2) and goes in third position.",
  "ed-q33-a":
    "False. The quadrants do not describe the sequential steps or levels of the test cycle.",
  "ed-q33-b": "False. The quadrants neither measure nor calculate coverage.",
  "ed-q33-c": "Correct. It is an excellent pedagogical communication tool for stakeholders.",
  "ed-q33-d": "False. The quadrants have nothing to do with team psychological profiles.",
  "ed-q34-a": "False. Result of an erroneous multiplication.",
  "ed-q34-b": "Correct. Exact mathematical calculation of the financial impact.",
  "ed-q34-c": "False. Miscalculation.",
  "ed-q34-d": "False. Miscalculation.",
  "ed-q35-a": "False. Scope creep is a project risk related to management and schedules.",
  "ed-q35-b": "Correct. Affects the maintainability and stability of the application.",
  "ed-q35-c": "False. Budget reduction is a financial project risk.",
  "ed-q35-d": "False. A tooling problem is an organizational technical project risk.",
  "ed-q35-e": "Correct. Threatens the usability and performance of the final product.",
  "ed-q36-a": "False. That is one of the primary transparency goals of a progress report.",
  "ed-q36-b": "False. Summarizing results is part of the required content of the report.",
  "ed-q36-c": "Correct. A test report gives an overall summary; defect reports handle bug details.",
  "ed-q36-d": "False. Outlining next steps is a classic decision-support element.",
  "ed-q37-a": "False. Risk management identifies and monitors project threats.",
  "ed-q37-b": "False. Monitoring controls test progress against the plan.",
  "ed-q37-c": "False. The whole-team approach is an agile organization principle.",
  "ed-q37-d":
    "Correct. Ensuring build integrity and versioning is the core of configuration management.",
  "ed-q38-a": "Correct. Real input data was sorely missing to replay the failure.",
  "ed-q38-b": "False. Priority ranks the fix schedule; it does not help technical reproduction.",
  "ed-q38-c": "False. Memory dumps unnecessarily weigh down the report without adding clarity.",
  "ed-q38-d": "False. Duplicating identical reports pollutes the defect database.",
  "ed-q39-a": "False. They facilitate communication, not the technical execution of tests.",
  "ed-q39-b": "Correct. They allow tests to be triggered automatically in the software factory.",
  "ed-q39-c": "False. They manage scheduling, the repository and defects.",
  "ed-q39-d": "Correct. They play a driving role in executing load and performance tests.",
  "ed-q39-e": "False. They facilitate the design and creation phase of test assets.",
  "ed-q40-a": "False. That is a major expected advantage of automation.",
  "ed-q40-b": "False. Automation helps collect metrics, so it is rather an advantage.",
  "ed-q40-c":
    "Correct. If the tool is not compatible with the dev framework, automation will fail.",
  "ed-q40-d": "False. That is a sought-after efficiency benefit.",
};
