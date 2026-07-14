// ISTQB Foundation Level v4.0 - Ensemble A (v2.3) - Seed Data

const ENSEMBLE_A_EXAM_ID = "ctfl-exam-v4-ensemble-a-2026";

export const ENSEMBLE_A_EXAM = {
  id: ENSEMBLE_A_EXAM_ID,
  title: "Examen Échantillon CTFL v4.0 — ENSEMBLE A (v2.3)",
  description:
    "Examen officiel d'entraînement officiel de l'ISTQB niveau fondamental v4.0 (Ensemble A, v2.3, édition GTB). Comprend 40 questions à choix unique couvrant les 6 chapitres du syllabus avec explications et justifications détaillées de la correction officielle.",
  language: "fr",
  duration_minutes: 60,
  total_questions: 40,
  passing_threshold: 65, // 26 points out of 40 (65%)
  points_per_question: 1,
  attempts_allowed: null,
  status: "published",
  created_at: "2026-07-14T03:00:00Z",
};

export const ENSEMBLE_A_QUESTIONS = [
  // Chapter 1 (Q1 - Q8)
  {
    id: "ea-q1",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 1,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.1.1",
    text: "Laquelle des affirmations suivantes décrit un objectif de test réalisable ?",
  },
  {
    id: "ea-q2",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 2,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.1.2",
    text: "Quelle est la principale différence entre les tests et le débogage ?",
  },
  {
    id: "ea-q3",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 3,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.3.1",
    text: "Vous faites partie d'une équipe testant un nouveau système. Vous avez remarqué qu'aucun changement n'a été apporté aux cas de test de régression existants depuis plusieurs itérations et qu'aucun nouveau défaut n'a été découvert par les tests de régression. Votre responsable est satisfait, mais vous ne l'êtes pas. Quel principe de test EXPLIQUE le MIEUX votre scepticisme dans cette situation ?",
  },
  {
    id: "ea-q4",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 4,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.1",
    text: "Vous travaillez dans une équipe qui développe une application mobile pour commander de la nourriture. Au cours de l'itération actuelle, l'équipe a décidé de mettre en œuvre la fonctionnalité de paiement. Laquelle des activités suivantes fait partie de l'analyse de test ?",
  },
  {
    id: "ea-q5",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 5,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.4",
    text: "Laquelle des affirmations suivantes décrit le MIEUX comment la valeur est ajoutée par l'établissement et le maintien de la traçabilité entre la base de test et les outils de test ?",
  },
  {
    id: "ea-q6",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 6,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.5",
    text: "Laquelle des affirmations suivantes décrit le MIEUX les différences entre les rôles de test ?",
  },
  {
    id: "ea-q7",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 7,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.3",
    text: "Lequel des éléments suivants EXPLIQUE LE MIEUX un avantage de l'indépendance des tests ?",
  },
  {
    id: "ea-q8",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 8,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.2",
    text: "Comment l'approche de l'équipe entière se manifeste-t-elle dans les interactions entre les testeurs et les représentants des entreprises ?",
  },

  // Chapter 2 (Q9 - Q14)
  {
    id: "ea-q9",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 9,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.2",
    text: "Laquelle des affirmations suivantes décrit le mieux une bonne pratique de test qui s'applique à tous les cycles de développement logiciel ?",
  },
  {
    id: "ea-q10",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 10,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.3",
    text: "Laquelle des affirmations suivantes décrit le mieux l'approche de développement piloté par les tests d'acceptation (ATDD) ?",
  },
  {
    id: "ea-q11",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 11,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.5",
    text: "Laquelle des options suivantes n'est pas un exemple de l'approche shift left ?",
  },
  {
    id: "ea-q12",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 12,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.6",
    text: "Lequel des arguments ci-dessous utiliseriez-vous pour convaincre votre manager de tenir des rétrospectives à la fin de chaque cycle de publication ?",
  },
  {
    id: "ea-q13",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 13,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.2.1",
    text: "Quels types de défauts (1-4) sont les PLUS susceptibles d'être trouvés à quels niveaux de test (A-D) ?\n1. Défauts où le comportement du système dévie des besoins commerciaux de l'utilisateur.\n2. Défauts dans la communication entre les composants.\n3. Défauts dans un composant isolé.\n4. Défauts dans le comportement global du système lors de la mise en œuvre d'une histoire utilisateur.\n\nA. Tests de composants\nB. Tests d'intégration de composants\nC. Test système\nD. Test d'acceptation",
  },
  {
    id: "ea-q14",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 14,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.3.1",
    text: "La stratégie de test de votre organisation suggère que, une fois qu'un système est prévu pour la retraite, la migration de données vers un nouveau système doit être testée. Dans le cadre de quelle activité de test ce test est-il LE PLUS susceptible d'être réalisé ?",
  },

  // Chapter 3 (Q15 - Q18)
  {
    id: "ea-q15",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 15,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.2",
    text: "Lequel des éléments suivants n'est pas un avantage des tests statiques ?",
  },
  {
    id: "ea-q16",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 16,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.1",
    text: "Lequel des éléments suivants constitue un avantage d'un retour précoce et fréquent de la part des parties prenantes ?",
  },
  {
    id: "ea-q17",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 17,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.4",
    text: "Les examens de votre organisation possèdent les caractéristiques suivantes :\n• Le principal objectif est de communiquer ou de former les examinateurs.\n• La réunion est animée par l'auteur du produit de travail.\n• Une préparation individuelle est effectuée par les examinateurs avant la réunion.\n• Un rapport de révision peut être produit.\n\nLequel des types de révision suivants est le PLUS susceptible d'être utilisé ?",
  },
  {
    id: "ea-q18",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 18,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.5",
    text: "Laquelle de ces affirmations n'est pas un facteur qui contribue à des révisions réussies ?",
  },

  // Chapter 4 (Q19 - Q29)
  {
    id: "ea-q19",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 19,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.1.1",
    text: "Laquelle des propositions suivantes est une caractéristique des techniques de test basées sur l'expérience ?",
  },
  {
    id: "ea-q20",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 20,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.1",
    text: "Vous testez le logiciel d'une pompe à essence américaine non assistée. Après avoir soulevé le pistolet et sélectionné le type de carburant souhaité, le client saisit le montant désiré de carburant en gallons à l'aide d'un clavier. Le champ de saisie permet des valeurs numériques avec une décimale. Entre 0,1 et 50,0 gallons peuvent être délivrés par remplissage. Laquelle des réponses suivantes représente un ensemble minimum de valeurs d'entrée qui couvre toutes les partitions d'équivalence valides et invalides pour la quantité de carburant ?",
  },
  {
    id: "ea-q21",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 21,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.2",
    text: "Vous testez un système d'e-commerce qui vend des articles alimentaires en vrac tels que des épices, de la farine et d'autres articles. Les unités dans lesquelles les articles sont vendus sont soit des grammes, soit des kilogrammes. Indépendamment des unités, la quantité minimale de commande valide est de 0,5 unités et la quantité maximale de commande valide est de 25,0 unités. La quantité de commande peut être incrémentée en 0,1 unités. Laquelle des réponses suivantes contient exactement l'ensemble minimum de valeurs d'entrée qui couvre complètement les éléments de couverture de l'analyse des valeurs limites à 2 valeurs pour la quantité de commande ?",
  },
  {
    id: "ea-q22",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 22,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.3",
    text: "Les nouveaux employés d'une entreprise peuvent convenir d'objectifs individuels avec leurs responsables et superviseurs, dont l'atteinte est liée à leur prime. Cependant, cette prime ne leur est versée que s'ils ont été employés par l'entreprise pendant plus d'un an.\n\nCette situation peut être illustrée dans un tableau de décision :\nID de Cas de Test | T1 | T2 | T3 | T4 | T5\nCondition1 (Emploi plus long qu'un an ?) | OUI | NO | NO | OUI | NO\nCondition2 (Objectif convenu ?) | NO | NO | OUI | OUI | OUI\nCondition3 (Objectif atteint ?) | NO | NO | OUI | OUI | NO\nAction (Paiement du bonus ?) | NO | NO | NO | OUI | NO\n\nLequel des cas de test suivants décrit une combinaison de conditions valide et réalisable avec une action attendue techniquement correcte qui manque dans la table de décision ci-dessus ?",
  },
  {
    id: "ea-q23",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 23,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.4",
    text: "Laquelle des affirmations suivantes concernant le diagramme de transition d'état et le tableau des cas de test ci-dessous est vraie ?\n\nDiagramme de transition d'état :\n- Télévision Éteinte (S1) -> RC activé -> Télévision Sur Stand Par (S2)\n- Télévision Sur Stand Par (S2) -> RC désactivé -> Télévision Éteinte (S1)\n- Télévision Sur Stand Par (S2) -> RC activé -> Télévision En Lecture (S3)\n- Télévision En Lecture (S3) -> RC désactivé -> Télévision Sur Stand Par (S2)\n- Télévision En Lecture (S3) -> Alimentation Éteinte -> Télévision Éteinte (S1)\n\nTableau de cas de test :\nCas 1: État initial S1, Entrée 'Mise sous tension', État final S2\nCas 2: État initial S2, Entrée 'Mise hors tension', État final S1\nCas 3: État initial S2, Entrée 'RC activé', État final S3\nCas 4: État initial S3, Entrée 'RC désactivé', État final S2\nCas 5: État initial S3, Entrée 'Mise hors tension', État final S1",
  },
  {
    id: "ea-q24",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 24,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.1",
    text: "Lequel des éléments suivants décrit la couverture des instructions ?",
  },
  {
    id: "ea-q25",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 25,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.3",
    text: "Laquelle des affirmations suivantes n'est pas vraie pour les tests boîte blanche ?",
  },
  {
    id: "ea-q26",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 26,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.1",
    text: "Laquelle des options suivantes décrit le mieux le concept derrière la devinette d'erreurs ?",
  },
  {
    id: "ea-q27",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 27,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.2",
    text: "Dans votre projet, le lancement d'une toute nouvelle application a été retardé et l'exécution des tests a commencé tardivement, mais vous disposez d'une connaissance très détaillée du domaine et de bonnes compétences analytiques. La spécification complète des exigences ne vous a pas encore été fournie, et la direction vous demande de présenter des résultats de test initiaux. Quelle technique de test est MIEUX adaptée à cette situation ?",
  },
  {
    id: "ea-q28",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 28,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.2",
    text: "Laquelle des activités suivantes décrit la MEILLEURE façon de formuler des critères d'acceptation pour une histoire utilisateur donnée ?",
  },
  {
    id: "ea-q29",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 29,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.3",
    text: "Votre équipe suit l'approche de développement piloté par les tests d'acceptation (ATDD) et analyse l'histoire utilisateur suivante afin de créer des cas de test :\n\n'En tant que client enregistré, je souhaite pouvoir consulter mes commandes précédentes sur le site web de l'entreprise afin de garder une vue d'ensemble de mes achats.'\n\nVotre équipe identifie la liste suivante de cas de test. Lequel des cas de test n'est pas pertinent pour cette histoire utilisateur ?",
  },

  // Chapter 5 (Q30 - Q38)
  {
    id: "ea-q30",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 30,
    chapter: 5,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.2",
    text: "Comment les testeurs créent-ils de la valeur pour la planification des itérations ?",
  },
  {
    id: "ea-q31",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 31,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.3",
    text: "Laquelle des options suivantes nomme les critères de sortie pour tester un système ?",
  },
  {
    id: "ea-q32",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 32,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.4",
    text: "Votre équipe utilise la technique d'estimation à trois points pour estimer l'effort de test pour une nouvelle fonctionnalité à haut risque. Les estimations suivantes ont été faites :\n• estimation la plus optimiste : 2 heures-personnes\n• estimation la plus probable : 11 heures-personnes\n• estimation la plus pessimiste : 14 heures-personnes\n\nQuelle est l'estimation finale ?",
  },
  {
    id: "ea-q33",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 33,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.5",
    text: "Vous testez une application mobile qui permet aux utilisateurs de trouver un restaurant à proximité qui propose le type de nourriture qu'ils souhaitent. Considérez la liste suivante de cas de test, de priorités (un nombre plus petit signifie une priorité plus élevée) et de dépendances :\n\n- TC 001 | Sélectionnez le type de nourriture | Priorité: 3 | Dépendance: Aucun\n- TC 002 | Sélectionner le restaurant | Priorité: 2 | Dépendance: TC 001\n- TC 003 | Obtenir des directions | Priorité: 1 | Dépendance: TC 002\n- TC 004 | Appeler le restaurant | Priorité: 2 | Dépendance: TC 002\n- TC 005 | Faire une réservation | Priorité: 3 | Dépendance: TC 002\n\nLequel des cas de test suivants doit être exécuté en troisième ?",
  },
  {
    id: "ea-q34",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 34,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.7",
    text: "Considérez les tests suivants (1-4) et les quadrants de test (A-D) :\n1. Test d'utilisabilité\n2. Tests de composants\n3. Tests fonctionnels\n4. Tests de fiabilité\n\nA. Quadrant de test Q1 : orienté technologie, soutenant l'équipe\nB. Quadrant de test Q2 : orienté entreprise, soutenant l'équipe\nC. Quadrant de test Q3 : orienté entreprise, considération critique du produit\nD. Quadrant de test Q4 : orienté technologie, considération critique du produit\n\nComment les types de tests/niveaux de tests ci-dessus peuvent-ils être assignés aux quadrants de test ?",
  },
  {
    id: "ea-q35",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 35,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.2.4",
    text: "Lors d'une analyse de risque, le risque suivant a été identifié et évalué :\n• Risque : Le temps de réponse des résultats de recherche est trop long\n• Probabilité de risque : moyenne ; impact du risque : élevé\n• Réponse au risque : une équipe de test indépendante effectue des tests de performance pendant les tests système ; un échantillon sélectionné d'utilisateurs finaux effectue des tests d'acceptation alpha et bêta avant la publication.\n\nQuelles actions ont été proposées ci-dessus pour répondre au risque identifié ?",
  },
  {
    id: "ea-q36",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 36,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.3.2",
    text: "Laquelle des affirmations suivantes concernant l'objectif et le contenu des rapports d'essai est vraie ?",
  },
  {
    id: "ea-q37",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 37,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.4.1",
    text: "Vous devez mettre à jour l'un des scripts de test automatisés pour qu'il soit conforme à une nouvelle exigence. Quel processus dicte qu'une nouvelle version du script de test doit être ajoutée au dépôt de tests ?",
  },
  {
    id: "ea-q38",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 38,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.5.1",
    text: "Dans votre rôle de responsable de projet, vous avez reçu le rapport de défaut suivant des développeurs indiquant que l'anomalie décrite n'est pas reproductible.\n\nL'application se bloque.\nID 713-20230401 2022-mai-03 – John Doe – Rejeté\nSévérité : élevée ; Priorité : élevée\n\n'L'application se bloque après avoir entré 'Entrée de test : $ä' dans le champ Nom de l'écran de création de nouvel utilisateur. J'ai essayé de me déconnecter et de me reconnecter avec le compte admin01 test_, même problème. J'ai essayé avec d'autres comptes administrateurs de test, même problème. Aucun message de défaut reçu ; le journal (voir pièce jointe) contient un message de défaut fatal. Basé sur le cas de test TC-1305, l'application devrait accepter l'entrée fournie et créer l'utilisateur. Veuillez résoudre ce problème avec une haute priorité car cette fonctionnalité est liée à REQ-0012, qui est une exigence fonctionnelle nouvelle importante.'\n\nQuelles informations importantes MANQUENT dans ce rapport de test qui auraient été utiles pour les développeurs ?",
  },

  // Chapter 6 (Q39 - Q40)
  {
    id: "ea-q39",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 39,
    chapter: 6,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-6.1.1",
    text: "Quelles activités de test un outil de préparation des données prend-il en charge ?",
  },
  {
    id: "ea-q40",
    exam_id: ENSEMBLE_A_EXAM_ID,
    position: 40,
    chapter: 6,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-6.2.1",
    text: "Quel élément constitue un risque possible de l'automatisation des tests ?",
  },
];

export const ENSEMBLE_A_OPTIONS = [
  // Q1 Options
  {
    id: "ea-q1-a",
    question_id: "ea-q1",
    position: 1,
    label: "A",
    text: "Il peut être prouvé que le système objet de test n'a plus de défauts.",
  },
  {
    id: "ea-q1-b",
    question_id: "ea-q1",
    position: 2,
    label: "B",
    text: "Il peut être prouvé qu'il n'y aura pas d'échecs après que le système soit mis en production.",
  },
  {
    id: "ea-q1-c",
    question_id: "ea-q1",
    position: 3,
    label: "C",
    text: "Le niveau de risque de l'objet de test est réduit et la confiance dans le niveau de qualité est construit.",
  },
  {
    id: "ea-q1-d",
    question_id: "ea-q1",
    position: 4,
    label: "D",
    text: "Un contrôle peut déterminer que toutes les combinaisons de valeurs d'entrée ont été testées.",
  },

  // Q2 Options
  {
    id: "ea-q2-a",
    question_id: "ea-q2",
    position: 1,
    label: "A",
    text: "Les tests peuvent déclencher des échecs ou trouver des défauts, tandis que le débogage analyse les causes d'un échec et élimine les défauts.",
  },
  {
    id: "ea-q2-b",
    question_id: "ea-q2",
    position: 2,
    label: "B",
    text: "Les tests vérifient les exigences, tandis que le débogage vérifie la conception.",
  },
  {
    id: "ea-q2-c",
    question_id: "ea-q2",
    position: 3,
    label: "C",
    text: "Les tests constituent le processus d'exécution du logiciel, tandis que le débogage est le processus d'analyser le logiciel.",
  },
  {
    id: "ea-q2-d",
    question_id: "ea-q2",
    position: 4,
    label: "D",
    text: "Les tests sont le processus de prévention des défauts, tandis que le débogage est le processus de la suppression des défauts.",
  },

  // Q3 Options
  {
    id: "ea-q3-a",
    question_id: "ea-q3",
    position: 1,
    label: "A",
    text: "Les anciens tests deviennent moins efficaces.",
  },
  {
    id: "ea-q3-b",
    question_id: "ea-q3",
    position: 2,
    label: "B",
    text: "Pauvre de faux d'absence d'erreurs.",
  },
  {
    id: "ea-q3-c",
    question_id: "ea-q3",
    position: 3,
    label: "C",
    text: "Les défauts se regroupent.",
  },
  {
    id: "ea-q3-d",
    question_id: "ea-q3",
    position: 4,
    label: "D",
    text: "Les tests exhaustifs sont impossibles.",
  },

  // Q4 Options
  {
    id: "ea-q4-a",
    question_id: "ea-q4",
    position: 1,
    label: "A",
    text: "Effectuez l'estimation de l'effort pour tester l'intégration de l'application mobile avec le service de paiement.",
  },
  {
    id: "ea-q4-b",
    question_id: "ea-q4",
    position: 2,
    label: "B",
    text: "Décidez s'il convient de tester la capacité à diviser les paiements entre plusieurs utilisateurs.",
  },
  {
    id: "ea-q4-c",
    question_id: "ea-q4",
    position: 3,
    label: "C",
    text: "Utilisation de l'analyse des valeurs frontières (BVA) pour dériver les données de test pour les cas de test qui vérifient le traitement des paiements correct sur le montant de paiement minimum autorisé.",
  },
  {
    id: "ea-q4-d",
    question_id: "ea-q4",
    position: 4,
    label: "D",
    text: "Analyse de l'écart entre le résultat réel et le résultat attendu après la exécution d'un cas de test.",
  },

  // Q5 Options
  {
    id: "ea-q5-a",
    question_id: "ea-q5",
    position: 1,
    label: "A",
    text: "Les tests de maintenance peuvent être entièrement automatisés sur la base des modifications apportées aux exigences originales.",
  },
  {
    id: "ea-q5-b",
    question_id: "ea-q5",
    position: 2,
    label: "B",
    text: "La mesure de l'atteinte de la couverture ciblée peut être plus efficacement déterminée.",
  },
  {
    id: "ea-q5-c",
    question_id: "ea-q5",
    position: 3,
    label: "C",
    text: "Le rôle de gestion des tests peut déterminer quels testeurs ont trouvé les défauts avec la plus haute sévérité.",
  },
  {
    id: "ea-q5-d",
    question_id: "ea-q5",
    position: 4,
    label: "D",
    text: "Les zones de code qui peuvent être affectées par les effets secondaires d'un changement peuvent être ciblées par le biais de tests de régression.",
  },

  // Q6 Options
  {
    id: "ea-q6-a",
    question_id: "ea-q6",
    position: 1,
    label: "A",
    text: "Le rôle de test exécute des cas de test, le rôle de gestion des tests planifie et surveille les activités de test et rapporte la déviation à tous les testeurs.",
  },
  {
    id: "ea-q6-b",
    question_id: "ea-q6",
    position: 2,
    label: "B",
    text: "Le rôle de test réalise des activités d'analyse de test et de conception de test, crée et exécute des cas de test, et le rôle de gestion des tests coordonne les tests ressources et rapports aux parties prenantes.",
  },
  {
    id: "ea-q6-c",
    question_id: "ea-q6",
    position: 3,
    label: "C",
    text: "Le rôle de test détermine les tests à automatiser et priorise les cas de test, et le rôle de gestion des tests analyse les risques et priorise les tests.",
  },
  {
    id: "ea-q6-d",
    question_id: "ea-q6",
    position: 4,
    label: "D",
    text: "Le rôle de test effectue des tests de composants statiques et dynamiques, et le test le rôle de gestion des tests effectue des tests système et des tests d'acceptation.",
  },

  // Q7 Options
  {
    id: "ea-q7-a",
    question_id: "ea-q7",
    position: 1,
    label: "A",
    text: "L'utilisation d'une équipe de test indépendante permet à la gestion de projet d'assigner la responsabilité de la qualité du livrable final à l'équipe de test.",
  },
  {
    id: "ea-q7-b",
    question_id: "ea-q7",
    position: 2,
    label: "B",
    text: "Si une équipe de test externe à l'organisation est utilisée, alors l'équipe externe sera moins facilement influencée par les préoccupations de livraison de la gestion de projet et le doit respecter des délais de livraison stricts.",
  },
  {
    id: "ea-q7-c",
    question_id: "ea-q7",
    position: 3,
    label: "C",
    text: "Une équipe de test indépendante peut travailler séparément des développeurs, sans avoir besoin de être distraite par les changements d'exigences du projet, et peut restreindre la communication avec les développeurs au rapport de défaut à travers le système de gestion des défauts.",
  },
  {
    id: "ea-q7-d",
    question_id: "ea-q7",
    position: 4,
    label: "D",
    text: "Lorsque les spécifications contiennent des ambiguïtés et des incohérences, des hypothèses sont fabriqué par des développeurs selon leur interprétation, et une équipe de test indépendante peut être utile pour remettre en question ces hypothèses et interprétations.",
  },

  // Q8 Options
  {
    id: "ea-q8-a",
    question_id: "ea-q8",
    position: 1,
    label: "A",
    text: "Les représentants des entreprises décident en collaboration avec la gestion de projet de tests approches d'automatisation.",
  },
  {
    id: "ea-q8-b",
    question_id: "ea-q8",
    position: 2,
    label: "B",
    text: "Les testeurs aident les représentants des entreprises à définir la stratégie de test.",
  },
  {
    id: "ea-q8-c",
    question_id: "ea-q8",
    position: 3,
    label: "C",
    text: "Les représentants des entreprises ne font pas partie de l'approche de l'équipe entière.",
  },
  {
    id: "ea-q8-d",
    question_id: "ea-q8",
    position: 4,
    label: "D",
    text: "Les testeurs aident les représentants des entreprises à créer des tests d'acceptation appropriés.",
  },

  // Q9 Options
  {
    id: "ea-q9-a",
    question_id: "ea-q9",
    position: 1,
    label: "A",
    text: "Les tests doivent être effectués uniquement une fois le développement terminé.",
  },
  {
    id: "ea-q9-b",
    question_id: "ea-q9",
    position: 2,
    label: "B",
    text: "Les tests doivent être réalisés sous la direction du développement.",
  },
  {
    id: "ea-q9-c",
    question_id: "ea-q9",
    position: 3,
    label: "C",
    text: "Les tests doivent commencer tôt dans le processus de développement.",
  },
  {
    id: "ea-q9-d",
    question_id: "ea-q9",
    position: 4,
    label: "D",
    text: "Les tests doivent être effectués dans un environnement de test de développement.",
  },

  // Q10 Options
  {
    id: "ea-q10-a",
    question_id: "ea-q10",
    position: 1,
    label: "A",
    text: "Dans l'ATDD, les critères d'acceptation sont généralement créés en fonction du format DONNÉE/QUAND/ALORS.",
  },
  {
    id: "ea-q10-b",
    question_id: "ea-q10",
    position: 2,
    label: "B",
    text: "Dans l'ATDD, les tests orientés vers les développeurs sont écrits en premier, puis le code est écrit pour satisfaire ces tests, puis les tests et le code sont refactorisés.",
  },
  {
    id: "ea-q10-c",
    question_id: "ea-q10",
    position: 3,
    label: "C",
    text: "Dans l'ATDD, les tests sont dérivés des critères d'acceptation dans le cadre de la conception du système.",
  },
  {
    id: "ea-q10-d",
    question_id: "ea-q10",
    position: 4,
    label: "D",
    text: "Dans l'ATDD, les tests d'acceptation ne sont dérivés qu'après la mise en œuvre des fonctions système implémentées pour confirmer le comportement implémenté.",
  },

  // Q11 Options
  {
    id: "ea-q11-a",
    question_id: "ea-q11",
    position: 1,
    label: "A",
    text: "Réviser les exigences utilisateurs avant qu'elles ne soient formellement acceptées par les parties prenantes.",
  },
  {
    id: "ea-q11-b",
    question_id: "ea-q11",
    position: 2,
    label: "B",
    text: "Créer des cas de test de composants avant de programmer le code associé.",
  },
  {
    id: "ea-q11-c",
    question_id: "ea-q11",
    position: 3,
    label: "C",
    text: "Exécuter un test d'efficacité de performance pour un composant pendant le tests.",
  },
  {
    id: "ea-q11-d",
    question_id: "ea-q11",
    position: 4,
    label: "D",
    text: "Commencer l'exécution des tests non fonctionnels pendant les tests au niveau système.",
  },

  // Q12 Options
  {
    id: "ea-q12-a",
    question_id: "ea-q12",
    position: 1,
    label: "A",
    text: "Les rétrospectives sont très populaires ces jours-ci et les clients l'apprécieraient si nous les ajoutions à nos processus.",
  },
  {
    id: "ea-q12-b",
    question_id: "ea-q12",
    position: 2,
    label: "B",
    text: "La réalisation de rétrospectives régulières permettra à l'organisation d'économiser de l'argent parce que les représentants des utilisateurs finaux ne fournissent pas de retour d'information immédiat sur le produit.",
  },
  {
    id: "ea-q12-c",
    question_id: "ea-q12",
    position: 3,
    label: "C",
    text: "Les faiblesses des processus identifiées lors de la rétrospective peuvent être analysées au cours de la rétrospective et transférées en actions d'amélioration pour le programme d'amélioration continue des processus de l'organisation.",
  },
  {
    id: "ea-q12-d",
    question_id: "ea-q12",
    position: 4,
    label: "D",
    text: "Les rétrospectives permettent à l'équipe de se féliciter et de se motiver mutuellement, ce qui peut augmenter la morale et la productivité.",
  },

  // Q13 Options
  { id: "ea-q13-a", question_id: "ea-q13", position: 1, label: "A", text: "1D, 2B, 3A, 4C" },
  { id: "ea-q13-b", question_id: "ea-q13", position: 2, label: "B", text: "1D, 2B, 3C, 4A" },
  { id: "ea-q13-c", question_id: "ea-q13", position: 3, label: "C", text: "1B, 2A, 3D, 4C" },
  { id: "ea-q13-d", question_id: "ea-q13", position: 4, label: "D", text: "1C, 2A, 3B, 4D" },

  // Q14 Options
  { id: "ea-q14-a", question_id: "ea-q14", position: 1, label: "A", text: "Tests de maintenance" },
  { id: "ea-q14-b", question_id: "ea-q14", position: 2, label: "B", text: "Tests de régression" },
  { id: "ea-q14-c", question_id: "ea-q14", position: 3, label: "C", text: "Tests de composants" },
  {
    id: "ea-q14-d",
    question_id: "ea-q14",
    position: 4,
    label: "D",
    text: "tests d'intégration de composants",
  },

  // Q15 Options
  {
    id: "ea-q15-a",
    question_id: "ea-q15",
    position: 1,
    label: "A",
    text: "Évaluer et remédier aux anomalies découvertes par l'analyse statique peut prendre une quantité significative de temps et de ressources.",
  },
  {
    id: "ea-q15-b",
    question_id: "ea-q15",
    position: 2,
    label: "B",
    text: "Corriger les défauts trouvés lors des tests statiques est généralement beaucoup moins coûteux que de corriger les défauts trouvés lors des tests dynamiques.",
  },
  {
    id: "ea-q15-c",
    question_id: "ea-q15",
    position: 3,
    label: "C",
    text: "Trouver des défauts de codage qui pourraient ne pas avoir été identifiés uniquement par la réalisation de tests dynamiques.",
  },
  {
    id: "ea-q15-d",
    question_id: "ea-q15",
    position: 4,
    label: "D",
    text: "Détecter des lacunes et des incohérences dans les exigences.",
  },

  // Q16 Options
  {
    id: "ea-q16-a",
    question_id: "ea-q16",
    position: 1,
    label: "A",
    text: "Cela améliore le processus de test pour les projets futurs.",
  },
  {
    id: "ea-q16-b",
    question_id: "ea-q16",
    position: 2,
    label: "B",
    text: "Cela oblige les clients à prioriser leurs exigences en fonction des risques convenus.",
  },
  {
    id: "ea-q16-c",
    question_id: "ea-q16",
    position: 3,
    label: "C",
    text: "C'est le seul moyen de mesurer la qualité des changements.",
  },
  {
    id: "ea-q16-d",
    question_id: "ea-q16",
    position: 4,
    label: "D",
    text: "Cela aide à éviter les malentendus concernant les exigences.",
  },

  // Q17 Options
  { id: "ea-q17-a", question_id: "ea-q17", position: 1, label: "A", text: "Revue informelle" },
  {
    id: "ea-q17-b",
    question_id: "ea-q17",
    position: 2,
    label: "B",
    text: "Présentation (walkthrough)",
  },
  { id: "ea-q17-c", question_id: "ea-q17", position: 3, label: "C", text: "Revue technique" },
  { id: "ea-q17-d", question_id: "ea-q17", position: 4, label: "D", text: "Inspection" },

  // Q18 Options
  {
    id: "ea-q18-a",
    question_id: "ea-q18",
    position: 1,
    label: "A",
    text: "Les participants doivent consacrer un temps adéquat à la révision.",
  },
  {
    id: "ea-q18-b",
    question_id: "ea-q18",
    position: 2,
    label: "B",
    text: "Il est recommandé de diviser de grands produits de travail en petites parties afin que les réviseurs ne perdent pas de vue.",
  },
  {
    id: "ea-q18-c",
    question_id: "ea-q18",
    position: 3,
    label: "C",
    text: "Établir des objectifs clairs et des critères de sortie mesurables pour la révision.",
  },
  {
    id: "ea-q18-d",
    question_id: "ea-q18",
    position: 4,
    label: "D",
    text: "La gestion de l'implication personnelle dans la communication des constats.",
  },

  // Q19 Options
  {
    id: "ea-q19-a",
    question_id: "ea-q19",
    position: 1,
    label: "A",
    text: "Les cas de test sont créés sur la base d'informations de conception détaillées.",
  },
  {
    id: "ea-q19-b",
    question_id: "ea-q19",
    position: 2,
    label: "B",
    text: "Le nombre d'interfaces testées est utilisé pour mesurer la couverture.",
  },
  {
    id: "ea-q19-c",
    question_id: "ea-q19",
    position: 3,
    label: "C",
    text: "Les techniques s'appuient fortement sur les connaissances du testeur concernant le logiciel et le domaine d'activité.",
  },
  {
    id: "ea-q19-d",
    question_id: "ea-q19",
    position: 4,
    label: "D",
    text: "Les cas de test sont utilisés pour identifier les écarts par rapport aux exigences.",
  },

  // Q20 Options
  { id: "ea-q20-a", question_id: "ea-q20", position: 1, label: "A", text: "0.0; 20.0; 60.0" },
  { id: "ea-q20-b", question_id: "ea-q20", position: 2, label: "B", text: "0.0; 0.1; 50.0" },
  { id: "ea-q20-c", question_id: "ea-q20", position: 3, label: "C", text: "0.0; 0.1; 50.0; 70.0" },
  {
    id: "ea-q20-d",
    question_id: "ea-q20",
    position: 4,
    label: "D",
    text: "-0.1; 0.0; 0.1; 49.9; 50.0; 50.1",
  },

  // Q21 Options
  { id: "ea-q21-a", question_id: "ea-q21", position: 1, label: "A", text: "0.3 ; 24.9 ; 25.2" },
  {
    id: "ea-q21-b",
    question_id: "ea-q21",
    position: 2,
    label: "B",
    text: "0.4 ; 0.5 ; 0.6 ; 24.9 ; 25.0 ; 25.1",
  },
  {
    id: "ea-q21-c",
    question_id: "ea-q21",
    position: 3,
    label: "C",
    text: "0.4 ; 0.5 ; 25.0 ; 25.1",
  },
  {
    id: "ea-q21-d",
    question_id: "ea-q21",
    position: 4,
    label: "D",
    text: "0.5 ; 0.6 ; 24.9 ; 25.0",
  },

  // Q22 Options
  {
    id: "ea-q22-a",
    question_id: "ea-q22",
    position: 1,
    label: "A",
    text: "Condition1 = OUI, Condition2 = NON, Condition3 = OUI, Action = NON",
  },
  {
    id: "ea-q22-b",
    question_id: "ea-q22",
    position: 2,
    label: "B",
    text: "Condition1 = OUI, Condition2 = OUI, Condition3 = NON, Action = OUI",
  },
  {
    id: "ea-q22-c",
    question_id: "ea-q22",
    position: 3,
    label: "C",
    text: "Condition1 = NON, Condition2 = NON, Condition3 = OUI, Action = NON",
  },
  {
    id: "ea-q22-d",
    question_id: "ea-q22",
    position: 4,
    label: "D",
    text: "Condition1 = OUI, Condition2 = OUI, Condition3 = NON, Action = NON",
  },

  // Q23 Options
  {
    id: "ea-q23-a",
    question_id: "ea-q23",
    position: 1,
    label: "A",
    text: "Les cas de test tentent d'exécuter toutes les transitions valides et invalides, atteignant 100% de couverture de toutes les transitions.",
  },
  {
    id: "ea-q23-b",
    question_id: "ea-q23",
    position: 2,
    label: "B",
    text: "Les cas de test exécutent toutes les transitions valides dans le diagramme de transition d'état. Cela permet d'atteindre 100% de couverture 0-switch.",
  },
  {
    id: "ea-q23-c",
    question_id: "ea-q23",
    position: 3,
    label: "C",
    text: "Les cas de test n'exécutent qu'un nombre limité des transitions valides dans le diagramme. Par conséquent, la couverture à 0 commutation est inférieure à 100 %.",
  },
  {
    id: "ea-q23-d",
    question_id: "ea-q23",
    position: 4,
    label: "D",
    text: "Le cas de test 2 n'est pas requis pour une couverture de 0 commutation à 100 %, puisque l'état S1 est déjà couvert par le cas de test 5.",
  },

  // Q24 Options
  {
    id: "ea-q24-a",
    question_id: "ea-q24",
    position: 1,
    label: "A",
    text: "C'est une métrique pour calculer et mesurer le pourcentage de cas de test exécutés.",
  },
  {
    id: "ea-q24-b",
    question_id: "ea-q24",
    position: 2,
    label: "B",
    text: "C'est une métrique qui indique le pourcentage d'instructions dans le code qui ont été exécutées par des cas de test.",
  },
  {
    id: "ea-q24-c",
    question_id: "ea-q24",
    position: 3,
    label: "C",
    text: "C'est une métrique pour mesurer le nombre d'instructions dans le code exécuté par des cas de test qui n'ont pas révélé de défaillance.",
  },
  {
    id: "ea-q24-d",
    question_id: "ea-q24",
    position: 4,
    label: "D",
    text: "C'est une métrique qui fournit une confirmation vrai/faux que toutes les instructions sont couvertes par des cas de test exécutés.",
  },

  // Q25 Options
  {
    id: "ea-q25-a",
    question_id: "ea-q25",
    position: 1,
    label: "A",
    text: "Les tests boîte blanche sont des tests basés sur l'analyse de la structure interne d'un composant ou système.",
  },
  {
    id: "ea-q25-b",
    question_id: "ea-q25",
    position: 2,
    label: "B",
    text: "Les métriques de couverture des tests boîte blanche peuvent aider à identifier des tests supplémentaires pour accroître la couverture.",
  },
  {
    id: "ea-q25-c",
    question_id: "ea-q25",
    position: 3,
    label: "C",
    text: "Les techniques de tests boîte blanche peuvent être utilisées en complément des tests boîte noire pour accroître la confiance dans le code.",
  },
  {
    id: "ea-q25-d",
    question_id: "ea-q25",
    position: 4,
    label: "D",
    text: "Les tests boîte blanche sont particulièrement adaptés pour identifier les exigences complètement manquantes.",
  },

  // Q26 Options
  {
    id: "ea-q26-a",
    question_id: "ea-q26",
    position: 1,
    label: "A",
    text: "La devinette d'erreurs consiste à utiliser vos connaissances et votre expérience des défauts passés et des échecs, ainsi que des erreurs typiques commises par les développeurs.",
  },
  {
    id: "ea-q26-b",
    question_id: "ea-q26",
    position: 2,
    label: "B",
    text: "La devinette d'erreurs implique d'utiliser votre expérience personnelle du développement et les erreurs que vous avez précédemment commises en tant que développeur.",
  },
  {
    id: "ea-q26-c",
    question_id: "ea-q26",
    position: 3,
    label: "C",
    text: "La devinette d'erreurs nécessite que vous imaginiez que vous êtes l'utilisateur de l'objet de test et de deviner les erreurs que l'utilisateur pourrait commettre en interagissant avec celui-ci.",
  },
  {
    id: "ea-q26-d",
    question_id: "ea-q26",
    position: 4,
    label: "D",
    text: "La devinette d'erreurs exige de vous, en tant que testeur, de reproduire les tâches de développement afin que les défauts et les échecs qu'un développeur pourrait commettre puissent être identifiés.",
  },

  // Q27 Options
  {
    id: "ea-q27-a",
    question_id: "ea-q27",
    position: 1,
    label: "A",
    text: "Test basé sur une liste de contrôle",
  },
  { id: "ea-q27-b", question_id: "ea-q27", position: 2, label: "B", text: "Devinette d'erreurs" },
  { id: "ea-q27-c", question_id: "ea-q27", position: 3, label: "C", text: "Tests exploratoires" },
  { id: "ea-q27-d", question_id: "ea-q27", position: 4, label: "D", text: "test des instructions" },

  // Q28 Options
  {
    id: "ea-q28-a",
    question_id: "ea-q28",
    position: 1,
    label: "A",
    text: "Effectuer des rétrospectives pour déterminer les besoins réels des parties prenantes.",
  },
  {
    id: "ea-q28-b",
    question_id: "ea-q28",
    position: 2,
    label: "B",
    text: "Utiliser le format DONNÉE/QUAND/ALORS pour décrire une condition de test d'exemple.",
  },
  {
    id: "ea-q28-c",
    question_id: "ea-q28",
    position: 3,
    label: "C",
    text: "Utiliser la communication verbale pour réduire le risque de mauvaise compréhension des critères d'acceptation par d'autres.",
  },
  {
    id: "ea-q28-d",
    question_id: "ea-q28",
    position: 4,
    label: "D",
    text: "Documenter les risques liés à une histoire utilisateur donnée dans un plan de test pour faciliter le test basé sur les risques.",
  },

  // Q29 Options
  {
    id: "ea-q29-a",
    question_id: "ea-q29",
    position: 1,
    label: "A",
    text: "Saisie : Le client se connecte à son compte sur le site web et clique sur le 'Bouton Voir l'historique des commandes'. Sortie attendue : Le système affiche une liste de toutes les commandes précédentes du client, y compris la date, le numéro de commande et le coût total.",
  },
  {
    id: "ea-q29-b",
    question_id: "ea-q29",
    position: 2,
    label: "B",
    text: "Entrée : Le client connecté clique sur une commande dans la liste de ses commandes. Sortie attendue : Le système affiche les articles achetés individuellement avec le prix et la quantité.",
  },
  {
    id: "ea-q29-c",
    question_id: "ea-q29",
    position: 3,
    label: "C",
    text: "Entrée : Le client connecté ouvre l'historique des commandes. Sortie attendue : Le système affiche les commandes dans un ordre traçable avec date, numéro de commande et coût total.",
  },
  {
    id: "ea-q29-d",
    question_id: "ea-q29",
    position: 4,
    label: "D",
    text: "Entrée: Un client nouvellement enregistré se connecte et saisit une première commande. Sortie attendue: Le système accepte la commande et stocke les données associées.",
  },

  // Q30 Options
  {
    id: "ea-q30-a",
    question_id: "ea-q30",
    position: 1,
    label: "A",
    text: "Les testeurs déterminent la priorité des user stories à développer.",
  },
  {
    id: "ea-q30-b",
    question_id: "ea-q30",
    position: 2,
    label: "B",
    text: "Les testeurs se concentrent uniquement sur le raffinement des aspects fonctionnels du système en cours de test.",
  },
  {
    id: "ea-q30-c",
    question_id: "ea-q30",
    position: 3,
    label: "C",
    text: "Les testeurs participent à l'analyse de risque et déterminent la testabilité des user stories.",
  },
  {
    id: "ea-q30-d",
    question_id: "ea-q30",
    position: 4,
    label: "D",
    text: "Les testeurs facilitent le déploiement de logiciels de haute qualité grâce à une conception de test précoce durant la planification de la version.",
  },

  // Q31 Options
  {
    id: "ea-q31-a",
    question_id: "ea-q31",
    position: 1,
    label: "A",
    text: "L'environnement de test est prêt à être utilisé.",
  },
  {
    id: "ea-q31-b",
    question_id: "ea-q31",
    position: 2,
    label: "B",
    text: "Le testeur peut se connecter à l'objet de test.",
  },
  {
    id: "ea-q31-c",
    question_id: "ea-q31",
    position: 3,
    label: "C",
    text: "La valeur cible convenue pour la densité de défauts est atteinte.",
  },
  {
    id: "ea-q31-d",
    question_id: "ea-q31",
    position: 4,
    label: "D",
    text: "Les exigences ont été traduites dans le format DONNÉE/QUAND/ALORS.",
  },

  // Q32 Options
  { id: "ea-q32-a", question_id: "ea-q32", position: 1, label: "A", text: "9 heures-personnes" },
  { id: "ea-q32-b", question_id: "ea-q32", position: 2, label: "B", text: "10 heures-personnes" },
  { id: "ea-q32-c", question_id: "ea-q32", position: 3, label: "C", text: "11 heures-personnes" },
  { id: "ea-q32-d", question_id: "ea-q32", position: 4, label: "D", text: "14 heures-personnes" },

  // Q33 Options
  { id: "ea-q33-a", question_id: "ea-q33", position: 1, label: "A", text: "TC 003" },
  { id: "ea-q33-b", question_id: "ea-q33", position: 2, label: "B", text: "TC 005" },
  { id: "ea-q33-c", question_id: "ea-q33", position: 3, label: "C", text: "TC 002" },
  { id: "ea-q33-d", question_id: "ea-q33", position: 4, label: "D", text: "TC 001" },

  // Q34 Options
  { id: "ea-q34-a", question_id: "ea-q34", position: 1, label: "A", text: "1C, 2A, 3B, 4D" },
  { id: "ea-q34-b", question_id: "ea-q34", position: 2, label: "B", text: "1D, 2A, 3C, 4B" },
  { id: "ea-q34-c", question_id: "ea-q34", position: 3, label: "C", text: "1C, 2B, 3D, 4A" },
  { id: "ea-q34-d", question_id: "ea-q34", position: 4, label: "D", text: "1D, 2B, 3C, 4A" },

  // Q35 Options
  { id: "ea-q35-a", question_id: "ea-q35", position: 1, label: "A", text: "Acceptation du risque" },
  { id: "ea-q35-b", question_id: "ea-q35", position: 2, label: "B", text: "Plan de contingence" },
  { id: "ea-q35-c", question_id: "ea-q35", position: 3, label: "C", text: "Atténuation du risque" },
  { id: "ea-q35-d", question_id: "ea-q35", position: 4, label: "D", text: "Transfert de risque" },

  // Q36 Options
  {
    id: "ea-q36-a",
    question_id: "ea-q36",
    position: 1,
    label: "A",
    text: "Les rapports de completion des tests sont préparés et distribués régulièrement à tenir les parties prenantes informées des progrès.",
  },
  {
    id: "ea-q36-b",
    question_id: "ea-q36",
    position: 2,
    label: "B",
    text: "Un rapport d'avancement des tests contient l'évaluation finale des tests et la qualité du produit basée sur les critères de sortie.",
  },
  {
    id: "ea-q36-c",
    question_id: "ea-q36",
    position: 3,
    label: "C",
    text: "Un rapport d'achèvement des tests est créé lorsqu'un niveau de test a été complété et s'appuie sur des rapports de progression des tests et des données supplémentaires.",
  },
  {
    id: "ea-q36-d",
    question_id: "ea-q36",
    position: 4,
    label: "D",
    text: "Des rapports de progression des tests sont créés pendant l'achèvement des tests pour démontrer que les critères de sortie ont été atteints.",
  },

  // Q37 Options
  {
    id: "ea-q37-a",
    question_id: "ea-q37",
    position: 1,
    label: "A",
    text: "Gestion de traçabilité",
  },
  { id: "ea-q37-b", question_id: "ea-q37", position: 2, label: "B", text: "Tests de maintenance" },
  {
    id: "ea-q37-c",
    question_id: "ea-q37",
    position: 3,
    label: "C",
    text: "Gestion de configuration",
  },
  { id: "ea-q37-d", question_id: "ea-q37", position: 4, label: "D", text: "Gestion des exigences" },

  // Q38 Options
  {
    id: "ea-q38-a",
    question_id: "ea-q38",
    position: 1,
    label: "A",
    text: "Résultat attendu et résultat réel",
  },
  {
    id: "ea-q38-b",
    question_id: "ea-q38",
    position: 2,
    label: "B",
    text: "Références et statut des défauts",
  },
  {
    id: "ea-q38-c",
    question_id: "ea-q38",
    position: 3,
    label: "C",
    text: "Environnement de test et élément de test (incl. version)",
  },
  { id: "ea-q38-d", question_id: "ea-q38", position: 4, label: "D", text: "Priorité et sévérité" },

  // Q39 Options
  {
    id: "ea-q39-a",
    question_id: "ea-q39",
    position: 1,
    label: "A",
    text: "Suivi et contrôle des tests",
  },
  {
    id: "ea-q39-b",
    question_id: "ea-q39",
    position: 2,
    label: "B",
    text: "Analyse et conception de test",
  },
  {
    id: "ea-q39-c",
    question_id: "ea-q39",
    position: 3,
    label: "C",
    text: "Conception et mise en œuvre de test",
  },
  { id: "ea-q39-d", question_id: "ea-q39", position: 4, label: "D", text: "Achèvement des tests" },

  // Q40 Options
  {
    id: "ea-q40-a",
    question_id: "ea-q40",
    position: 1,
    label: "A",
    text: "Des effets secondaires inconnus peuvent survenir lors de l'utilisation opérationnelle.",
  },
  {
    id: "ea-q40-b",
    question_id: "ea-q40",
    position: 2,
    label: "B",
    text: "Il peut y avoir des attentes irréalistes concernant la fonctionnalité d'un outil.",
  },
  {
    id: "ea-q40-c",
    question_id: "ea-q40",
    position: 3,
    label: "C",
    text: "Les outils de test ne sont généralement pas suffisamment fiables.",
  },
  {
    id: "ea-q40-d",
    question_id: "ea-q40",
    position: 4,
    label: "D",
    text: "Le temps disponible pour les tests manuels peut être réduit à long terme.",
  },
];

export const ENSEMBLE_A_SOLUTIONS = [
  {
    question_id: "ea-q1",
    correct_option_ids: ["ea-q1-c"],
    explanation:
      "CORRECT – Les tests peuvent aider à trouver des défauts, réduire le risque de qualité de logiciel inadéquate, et instaurer la confiance dans la qualité de l'objet de test (cf. Syllabus CTFL V4.0.2, Section 1.1.1, 4e et 8e points).",
  },
  {
    question_id: "ea-q2",
    correct_option_ids: ["ea-q2-a"],
    explanation:
      "CORRECT – Les tests et le débogage sont des activités distinctes. Les tests peuvent déclencher des échecs ou trouver des défauts. Le débogage inclut, en particulier, la reproduction d'un échec, la recherche et l'analyse des défauts causants, puis leur suppression (cf. Syllabus CTFL V4.0.2, Section 1.1.2).",
  },
  {
    question_id: "ea-q3",
    correct_option_ids: ["ea-q3-a"],
    explanation:
      "CORRECT – Ce principe signifie que si les mêmes tests sont répétées encore et encore, ces tests ne trouvent finalement plus de nouveaux défauts. Cela peut expliquer pourquoi les tests de régression inchangés n'ont pas révélé de nouveaux défauts. (cf. Syllabus V4.0.2, Section 1.3, point 5 « Les tests s'usent »).",
  },
  {
    question_id: "ea-q4",
    correct_option_ids: ["ea-q4-b"],
    explanation:
      "CORRECT – Il s'agit d'un exemple de la définition des conditions de test, qui fait partie de l'analyse de test (cf. syllabus V4.0.2 ; Section 1.4.1, partie analyse de test).",
  },
  {
    question_id: "ea-q5",
    correct_option_ids: ["ea-q5-b"],
    explanation:
      "CORRECT – Si les cas de test sont liés aux exigences, l'ajout d'un nouveau cas de test (avec traçabilité) peut déterminer si des exigences auparavant non couvertes ou des parties d'exigences sont couvertes par le nouveau cas de test (voir Syllabus CTFL V4.0.2, Section 1.4.4, 1er point).",
  },
  {
    question_id: "ea-q6",
    correct_option_ids: ["ea-q6-b"],
    explanation:
      "CORRECT – car cela décrit de manière significative les principales tâches de chaque rôle dans les tests. Le rôle de test exécute des cas de test, crée et conçoit des cas de test, effectue des analyses et activités de conception de test, et signale des défauts ; le rôle de gestion des tests coordonne les ressources de test et rapporte aux parties prenantes (Voir Syllabus CTFL V4.0.2, Section 1.4.5, 2ème + 3rd par).",
  },
  {
    question_id: "ea-q7",
    correct_option_ids: ["ea-q7-d"],
    explanation:
      "CORRECT – Les spécifications ne sont jamais parfaites, ce qui signifie que des hypothèses devront être faites par le développeur. Un testeur indépendant est utile en ce sens qu'il peut remettre en question et vérifier les hypothèses et l'interprétation subséquente faites par le développeur (cf. Syllabus CTFL, Section 1.5.3, par. 3, dernière phrase).",
  },
  {
    question_id: "ea-q8",
    correct_option_ids: ["ea-q8-d"],
    explanation:
      "CORRECT – Les testeurs travailleront en étroite collaboration avec les représentants des entreprises pour garantir que les niveaux de qualité souhaités sont atteints. Cela inclut le soutien et la collaboration avec eux pour les aider à créer des tests d'acceptation appropriés (Voir Syllabus V4.0.2, Section 1.5.2 ; Paragraphe 3).",
  },
  {
    question_id: "ea-q9",
    correct_option_ids: ["ea-q9-c"],
    explanation:
      "CORRECT – Les tests doivent commencer tôt dans le processus de développement pour détecter les défauts le plus tôt possible et minimiser le coût de la correction des défauts (cf. Syllabus CTFL V4.0.2, Section 2.1.2, 3ème point de la liste, et Section 1.3).",
  },
  {
    question_id: "ea-q10",
    correct_option_ids: ["ea-q10-c"],
    explanation:
      "CORRECT – Dans le développement piloté par des tests d'acceptation (ATDD), les tests sont dérivés et créés à partir des critères d'acceptation dans le cadre de la conception du système (cf. Syllabus CTFL V4.0.2, Section 2.1.3, 2ème approche listée, 1er point).",
  },
  {
    question_id: "ea-q11",
    correct_option_ids: ["ea-q11-d"],
    explanation:
      "CORRECT – Les tests non fonctionnels précoces sont un exemple de l'approche shift-left, mais commencer l'exécution des tests non fonctionnels tardivement pendant les tests au niveau système ne constitue pas une approche shift-left (Syllabus CTFL v4.0.2, Section 2.1.5, 5ème point).",
  },
  {
    question_id: "ea-q12",
    correct_option_ids: ["ea-q12-c"],
    explanation:
      "CORRECT – Les rétrospectives régulièrement menées, lorsque des activités de suivi appropriées se produisent, sont essentielles à l'amélioration continue du développement et des tests (cf. Syllabus ISTQB® Niveau Fondamental v4.0.2, Section 2.1.6, 2ème paragraphe, 2ème phrase).",
  },
  {
    question_id: "ea-q13",
    correct_option_ids: ["ea-q13-a"],
    explanation:
      "CORRECT – La base de test pour le test d'acceptation est les besoins métier de l'utilisateur (1D). La communication entre les composants est testée lors des tests d'intégration de composants (2B). Les défauts dans un composant isolé peuvent être détectés lors des tests de composants (3A). Les histoires de l'utilisateur ou exigences système servent au test système pour tester le comportement global (4C) (cf. Syllabus CTFL v4.0.2, Section 2.2.1).",
  },
  {
    question_id: "ea-q14",
    correct_option_ids: ["ea-q14-a"],
    explanation:
      "CORRECT – Lorsqu'un système est retiré, cela peut nécessiter des tests de migration de données, qui constituent une forme de tests de maintenance (Syllabus v4.0.2, Section 2.3, points 2 et 3).",
  },
  {
    question_id: "ea-q15",
    correct_option_ids: ["ea-q15-a"],
    explanation:
      "CORRECT – Cette affirmation ne décrit pas un bénéfice des tests statiques, mais un effort possible impliqué dans l'évaluation et la gestion des anomalies détectées par analyse statique (cf. Syllabus CTFL v4.0.2, Section 3.1.2).",
  },
  {
    question_id: "ea-q16",
    correct_option_ids: ["ea-q16-d"],
    explanation:
      "CORRECT – Un retour d'information précoce et fréquent permet d'identifier les problèmes potentiels de qualité, tels que les exigences mal comprises, à un stade précoce (voir ISTQB® Foundation Level Syllabus V4.0.2, Section 3.2.1, 1er paragraphe).",
  },
  {
    question_id: "ea-q17",
    correct_option_ids: ["ea-q17-b"],
    explanation:
      "CORRECT – Le but principal (communiquer ou former) convient à un walkthrough (présentation). De plus, la réunion est animée par l'auteur, ce qui est une caractéristique typique d'un walkthrough (cf. Syllabus CTFL v4.0.2, Section 3.2.4).",
  },
  {
    question_id: "ea-q18",
    correct_option_ids: ["ea-q18-d"],
    explanation:
      "CORRECT – Le syllabus mentionne le soutien de la gestion pour le processus de révision, mais il n'identifie pas l'implication personnelle de la gestion dans la communication des constats comme un facteur de succès (Syllabus CTFL V4.0.2, Section 3.2.5, 6ème point de la liste et Section 3.2.3, 1er point de la liste des points).",
  },
  {
    question_id: "ea-q19",
    correct_option_ids: ["ea-q19-c"],
    explanation:
      "CORRECT – Les techniques basées sur l'expérience reposent sur les connaissances et l'expérience du testeur concernant le logiciel, son environnement, les défauts probables et la distribution de ces défauts (cf. Syllabus ISTQB® Niveau Fondamental V4.0.2, Section 4.1).",
  },
  {
    question_id: "ea-q20",
    correct_option_ids: ["ea-q20-a"],
    explanation:
      "CORRECT – Il existe trois partitions d'équivalence pertinentes : moins de 0,1 gallon (< 0.1, ex: 0.0), valide de 0,1 à 50,0 gallons (ex: 20.0) et plus de 50,0 gallons (> 50.0, ex: 60.0). L'ensemble a) couvre précisément ces trois partitions de manière minimale (voir Syllabus CTFL V4.0.2, Section 4.2.1, 5ème paragraphe).",
  },
  {
    question_id: "ea-q21",
    correct_option_ids: ["ea-q21-c"],
    explanation:
      "CORRECT – L'analyse des valeurs limites à 2 valeurs définit le test sur la valeur limite et sa voisine immédiate de la classe adjacente. Ainsi, pour la borne inférieure 0.5, on teste 0.5 et 0.4 ; pour la borne supérieure 25.0, on teste 25.0 et 25.1 (voir Syllabus CTFL V4.0.2, Section 4.2.2, 4ème paragraphe).",
  },
  {
    question_id: "ea-q22",
    correct_option_ids: ["ea-q22-d"],
    explanation:
      "CORRECT – Le cas de test d) décrit la situation techniquement correcte selon laquelle le non-respect de l'objectif convenu (Condition3 = NON) entraîne le non-paiement du bonus (Action = NON) même si l'employé est en poste depuis plus d'un an (Condition1 = OUI) (voir Syllabus CTFL V4.0.2, Section 4.2.3, 2ème paragraphe).",
  },
  {
    question_id: "ea-q23",
    correct_option_ids: ["ea-q23-b"],
    explanation:
      "CORRECT – Les cas de test proposés couvrent exactement toutes les cinq transitions valides possibles dans le diagramme de transition d'état donné (S1-> S2, S2-> S1, S2-> S3, S3-> S2, S3-> S1) permettant ainsi d'atteindre une couverture 0-switch (cf. Syllabus ISTQB® CTFL V4.0.2, Section 4.2.4).",
  },
  {
    question_id: "ea-q24",
    correct_option_ids: ["ea-q24-b"],
    explanation:
      "CORRECT – La couverture des instructions mesure le pourcentage d'instructions du code qui ont été exécutées par l'ensemble des cas de test (voir le Syllabus CTFL v4.0.2, Section 4.3.1, Paragraphe 1).",
  },
  {
    question_id: "ea-q25",
    correct_option_ids: ["ea-q25-d"],
    explanation:
      "CORRECT – Les techniques boîte blanche se basent sur la structure interne existante du code. Si une exigence n'a pas été mise en œuvre du tout (fonctionnalité manquante), les tests boîte blanche ne peuvent pas détecter l'absence totale de cette structure de code (cf. Syllabus CTFL V4.0.2, Section 4.3.3, 1er paragraphe, dernière phrase).",
  },
  {
    question_id: "ea-q26",
    correct_option_ids: ["ea-q26-a"],
    explanation:
      "CORRECT – Le concept de base de la devinette d'erreurs est que le testeur essaie de deviner quelles erreurs un développeur pourrait avoir commises et quels défauts pourraient être présents dans l'objet de test, sur la base de l'expérience passée (cf. Syllabus CTFL V4.0.2, Section 4.4.1, 1er paragraphe).",
  },
  {
    question_id: "ea-q27",
    correct_option_ids: ["ea-q27-c"],
    explanation:
      "CORRECT – Les tests exploratoires sont particulièrement utiles lorsque peu de spécifications sont disponibles et/ou que le calendrier des tests est serré (Syllabus CTFL V4.0.2, Section 4.4.2, 3e paragraphe, 1re phrase).",
  },
  {
    question_id: "ea-q28",
    correct_option_ids: ["ea-q28-b"],
    explanation:
      "CORRECT – C'est une méthode standard pour documenter des critères d'acceptation pour une histoire utilisateur (voir Syllabus CTFL V4.0.2, Section 4.5.2, 3ème paragraphe, 1ère puce).",
  },
  {
    question_id: "ea-q29",
    correct_option_ids: ["ea-q29-d"],
    explanation:
      "CORRECT – Ce cas de test n'est pas pertinent pour cette histoire utilisateur car il teste la passation d'une nouvelle commande, alors que l'histoire utilisateur concerne uniquement la consultation des commandes passées (voir le Syllabus CTFL V4.0.2, Section 4.5.3).",
  },
  {
    question_id: "ea-q30",
    correct_option_ids: ["ea-q30-c"],
    explanation:
      "CORRECT – Selon le syllabus, la participation à l'analyse de risque produit et la détermination de la testabilité des user stories est l'une des manières dont les testeurs ajoutent de la valeur à la planification de l'itération (voir Syllabus Niveau Fondamental ISTQB® V4.0.2, Section 5.1.2, 3ème paragraphe, 2ème phrase).",
  },
  {
    question_id: "ea-q31",
    correct_option_ids: ["ea-q31-c"],
    explanation:
      "CORRECT – La densité de défauts convenue est une mesure de profondeur de test qui sert de critère de sortie (cf. Syllabus CTFL V4.0.2 ; Section 5.1.3, 3ème paragraphe).",
  },
  {
    question_id: "ea-q32",
    correct_option_ids: ["ea-q32-b"],
    explanation:
      "CORRECT – Dans l'estimation à trois points : E = (optimiste + 4 * probable + pessimiste) / 6. Ainsi, E = (2 + 4 * 11 + 14) / 6 = (2 + 44 + 14) / 6 = 60 / 6 = 10 (cf. Syllabus CTFL ISTQB® V4.0.2, Section 5.1.4).",
  },
  {
    question_id: "ea-q33",
    correct_option_ids: ["ea-q33-a"],
    explanation:
      "CORRECT – TC 001 doit s'exécuter en premier, suivi de TC 002 dont dépendent les autres. Parmi les cas dépendants, TC 003 a la priorité la plus haute (valeur 1), donc s'exécute en troisième (cf. Syllabus ISTQB® CTFL V4.0.2, Section 5.1.5).",
  },
  {
    question_id: "ea-q34",
    correct_option_ids: ["ea-q34-a"],
    explanation:
      "CORRECT – Le test d'utilisabilité est attribué au quadrant Q3 (1C), le test de composants au quadrant Q1 (2A), le test fonctionnel au quadrant Q2 (3B), et le test de fiabilité au quadrant Q4 (4D) (cf. Syllabus CTFL ISTQB® V4.0.2, Section 5.1.7).",
  },
  {
    question_id: "ea-q35",
    correct_option_ids: ["ea-q35-c"],
    explanation:
      "CORRECT – Les actions proposées sont des mesures de test concrètes visant à réduire la probabilité que le risque se réalise ou à minimiser ses conséquences, ce qui correspond à l'atténuation du risque (cf. CTFL Syllabus V4.0.2, Section 5.2.4, dernier paragraphe, liste à puces).",
  },
  {
    question_id: "ea-q36",
    correct_option_ids: ["ea-q36-c"],
    explanation:
      "CORRECT – Les rapports de completion des tests sont créés et distribués lorsque des tâches substantiellement similaires ont été achevées (niveau, itération, projet, etc.) et s'appuient sur les rapports d'avancement précédents (cf. Syllabus CTFL V4.0.2, Section 5.3.2, paragraphe 1, dernière phrase, et paragraphe 3).",
  },
  {
    question_id: "ea-q37",
    correct_option_ids: ["ea-q37-c"],
    explanation:
      "CORRECT – Pour soutenir les tests, la gestion de configuration implique le contrôle de version de tous les éléments de test (voir Syllabus CTFL V4.0.2, Section 5.4, 4ème paragraphe, 1ère phrase).",
  },
  {
    question_id: "ea-q38",
    correct_option_ids: ["ea-q38-c"],
    explanation:
      "CORRECT – Nous ne savons pas dans quel environnement de test l'anomalie a été trouvée, ni quel objet de test ou application (et quelle version exacte) est impliqué, ce qui est indispensable pour reproduire le bogue (voir Syllabus ISTQB® Niveau Fondamental V4.0.2, Section 5.5, 3ème paragraphe, 3ème puce).",
  },
  {
    question_id: "ea-q39",
    correct_option_ids: ["ea-q39-c"],
    explanation:
      "CORRECT – Les outils de conception et de mise en œuvre de tests - facilitent la création de cas de test, de données de test et d'exécutions de test (cf. CTFL Syllabus V4.0.2, Section 6.1, 3e point).",
  },
  {
    question_id: "ea-q40",
    correct_option_ids: ["ea-q40-b"],
    explanation:
      "CORRECT – L'attente irréaliste est que, dans certains cas, la direction croit que l'introduction d'un outil de test résoudra tous les problèmes (cf. Syllabus CTFL V4.0.2, Section 6.2, 3ème paragraphe, 1er point).",
  },
];
