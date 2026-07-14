// ISTQB Foundation Level v4.0 - Ensemble C (v1.0.0) - Seed Data

const ENSEMBLE_C_EXAM_ID = "ctfl-exam-v4-ensemble-c-2026";

export const ENSEMBLE_C_EXAM = {
  id: ENSEMBLE_C_EXAM_ID,
  title: "Examen Échantillon CTFL v4.0 — ENSEMBLE C (v1.0.0)",
  description:
    "Examen officiel d'entraînement de l'ISTQB niveau fondamental v4.0 (Ensemble C, v1.0.0, édition GTB). Comprend 40 questions uniques couvrant tous les chapitres du syllabus avec explications et justifications de la correction officielle.",
  language: "fr",
  duration_minutes: 60,
  total_questions: 40,
  passing_threshold: 65, // 26 points out of 40 (65%)
  points_per_question: 1,
  attempts_allowed: null,
  status: "published",
  created_at: "2026-07-14T04:00:00Z",
};

export const ENSEMBLE_C_QUESTIONS = [
  // Chapter 1 (Q1 - Q8)
  {
    id: "ec-q1",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 1,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.1.1",
    text: "Lequel des éléments suivants décrit le mieux un objectif fondamental des tests de logiciels ?",
  },
  {
    id: "ec-q2",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 2,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.2.1",
    text: "Pourquoi est-il important d'intégrer des activités de test tout au long du cycle de vie du développement logiciel (SDLC) ?",
  },
  {
    id: "ec-q3",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 3,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.2.2",
    text: "Comment le contrôle qualité (test de logiciel) se distingue-t-il de l'assurance qualité (AQ) ?",
  },
  {
    id: "ec-q4",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 4,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.3.1",
    text: "Une application financière a été testée intensivement en utilisant le même jeu de tests pendant plusieurs mois. Bien que le système subisse des mises à jour régulières, aucun nouveau défaut n'est détecté par ces tests. Quel principe de test s'applique le mieux ici ?",
  },
  {
    id: "ec-q5",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 5,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.1",
    text: "Dans le processus de test ISTQB, quelle activité implique d'identifier les caractéristiques testables d'un objet de test et de définir les conditions de test associées ?",
  },
  {
    id: "ec-q6",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 6,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.4",
    text: "Comment le maintien d'une traçabilité bidirectionnelle entre la base de test et les cas de test aide-t-il l'équipe de test ?",
  },
  {
    id: "ec-q7",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 7,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.1",
    text: "Lors de la communication des défauts aux développeurs, quelle attitude de la part du testeur favorise le mieux une collaboration constructive ?",
  },
  {
    id: "ec-q8",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 8,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.2",
    text: "Qu'est-ce que l'approche 'équipe complète' (Whole-Team Approach) préconise dans un projet agile ?",
  },

  // Chapter 2 (Q9 - Q14)
  {
    id: "ec-q9",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 9,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.1",
    text: "Dans un modèle de développement séquentiel (comme le modèle en V), comment sont généralement organisés les niveaux de test ?",
  },
  {
    id: "ec-q10",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 10,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.2",
    text: "Laquelle des propositions suivantes est une bonne pratique de test qui s'applique à TOUS les cycles de vie du développement ?",
  },
  {
    id: "ec-q11",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 11,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.3",
    text: "Quelle est la caractéristique principale du développement piloté par les comportements (BDD - Behavior-Driven Development) ?",
  },
  {
    id: "ec-q12",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 12,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.4",
    text: "Quel est l'impact principal d'une approche DevOps sur les activités de test ?",
  },
  {
    id: "ec-q13",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 13,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.2.1",
    text: "Quel niveau de test se concentre sur les interactions entre les composants logiciels et les systèmes externes ?",
  },
  {
    id: "ec-q14",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 14,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.3.1",
    text: "Lequel des éléments suivants est un exemple de déclencheur de tests de maintenance ?",
  },

  // Chapter 3 (Q15 - Q18)
  {
    id: "ec-q15",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 15,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.1",
    text: "Lequel des éléments suivants peut être examiné à l'aide de tests statiques ?",
  },
  {
    id: "ec-q16",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 16,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.2",
    text: "Quel est l'un des avantages majeurs des tests statiques par rapport aux tests dynamiques ?",
  },
  {
    id: "ec-q17",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 17,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.1",
    text: "Dans quel ordre logique les activités d'un processus de revue formelle sont-elles généralement effectuées ?",
  },
  {
    id: "ec-q18",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 18,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.2",
    text: "Quel rôle dans une revue formelle est responsable de diriger la réunion, de s'assurer que les objectifs sont atteints et de veiller à ce que la revue soit menée de manière constructive ?",
  },

  // Chapter 4 (Q19 - Q29)
  {
    id: "ec-q19",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 19,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.1.1",
    text: "Quelle est la principale caractéristique des techniques de test basées sur l'expérience ?",
  },
  {
    id: "ec-q20",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 20,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.1",
    text: "Un champ de saisie accepte un code postal composé de 5 chiffres uniquement (de 00000 à 99999). Les codes postaux contenant des lettres ou des symboles ne sont pas valides.\n\nEn utilisant le partitionnement d'équivalence, laquelle des propositions suivantes représente un ensemble minimal de valeurs permettant de tester les partitions valides et invalides ?",
  },
  {
    id: "ec-q21",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 21,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.2",
    text: "Un système de tarification d'assurance automobile applique une réduction de fidélité selon l'âge du conducteur :\n• Moins de 25 ans : pas de réduction (T < 25)\n• De 25 ans à 65 ans inclus : 15% de réduction (25 <= T <= 65)\n• Plus de 65 ans : 20% de réduction (T > 65)\n\nEn utilisant l'analyse des valeurs limites à 2 valeurs, quelles valeurs d'âge doivent être testées pour valider les frontières ?",
  },
  {
    id: "ec-q22",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 22,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.3",
    text: "Considérez le système de validation d'un prêt bancaire :\n• Si le client a des antécédents de crédit favorables ET des revenus stables, le prêt est approuvé automatiquement.\n• Si le client a des antécédents de crédit favorables mais des revenus instables, le prêt nécessite une garantie.\n• Si le client a des antécédents de crédit défavorables, le prêt est rejeté immédiatement, quels que soient ses revenus.\n\nCombien de colonnes (règles) contient la table de décision simplifiée et complète pour ce système ?",
  },
  {
    id: "ec-q23",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 23,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.4",
    text: "Un système de serrure connectée présente les états suivants : Verrouillé, Déverrouillé, Alarme.\n• À l'état Verrouillé : un badge valide fait passer à l'état Déverrouillé. 3 badges invalides consécutifs déclenchent l'état Alarme.\n• À l'état Déverrouillé : une fermeture manuelle fait passer à l'état Verrouillé.\n• À l'état Alarme : un code administrateur fait repasser à l'état Verrouillé.\n\nQuel est le nombre minimal de transitions requises pour tester une couverture complète des transitions valides (couverture de transition simple) à partir de l'état initial Verrouillé ?",
  },
  {
    id: "ec-q24",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 24,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.1",
    text: "Laquelle des affirmations suivantes concernant la couverture des déclarations (Statement Coverage) est correcte ?",
  },
  {
    id: "ec-q25",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 25,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.2",
    text: "Si un testeur obtient une couverture des branches de 100 %, quelle est la conséquence logique sur la couverture des déclarations pour le même code ?",
  },
  {
    id: "ec-q26",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 26,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.1",
    text: "Comment les testeurs appliquent-ils la technique de devinette d'erreurs (Error Guessing) ?",
  },
  {
    id: "ec-q27",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 27,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.2",
    text: "Dans quelle situation l'utilisation des tests exploratoires est-elle la plus appropriée et la plus bénéfique ?",
  },
  {
    id: "ec-q28",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 28,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.1",
    text: "Dans le cadre de la rédaction de cas de test basés sur des récits utilisateurs (user stories), comment les critères d'acceptation aident-ils le testeur ?",
  },
  {
    id: "ec-q29",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 29,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.3",
    text: "Considérez la 'User Story' suivante :\n'En tant que client, je souhaite ajouter des articles à mon panier d'achat afin de pouvoir les acheter ensemble.'\n\nLes critères d'acceptation spécifient :\n1. Le panier doit mettre à jour le nombre total d'articles.\n2. Le prix total doit être mis à jour correctement.\n3. Un message de confirmation doit s'afficher à chaque ajout.\n\nQuel cas de test est LE MOINS pertinent pour tester cette User Story ?",
  },

  // Chapter 5 (Q30 - Q38)
  {
    id: "ec-q30",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 30,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.2",
    text: "Comment l'équipe de test collabore-t-elle le plus efficacement avec les développeurs et le Product Owner lors de la planification des itérations ?",
  },
  {
    id: "ec-q31",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 31,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.3",
    text: "Lequel des éléments suivants représente un critère d'entrée typique pour le niveau de test système ?",
  },
  {
    id: "ec-q32",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 32,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.4",
    text: "Vous devez estimer l'effort de test pour un projet en utilisant une estimation basée sur les métriques de projets antérieurs. Dans un projet similaire, l'effort total de développement était de 120 jours-hommes, et l'effort de test était de 40 jours-hommes (un ratio de 1:3).\n\nSi le développement du nouveau projet est estimé à 180 jours-hommes, quelle est l'estimation de l'effort de test nécessaire selon ce ratio ?",
  },
  {
    id: "ec-q33",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 33,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.5",
    text: "Vous disposez de 5 cas de test (TC1 à TC5) avec les priorités (1 étant la plus élevée) et les dépendances suivantes :\n• TC1 : Priorité 3, sans dépendance.\n• TC2 : Priorité 1, dépend de TC1.\n• TC3 : Priorité 2, dépend de TC2.\n• TC4 : Priorité 1, dépend de TC1.\n• TC5 : Priorité 3, dépend de TC3.\n\nQuelle est la séquence d'exécution optimale respectant les dépendances et priorisant les cas de test les plus critiques ?",
  },
  {
    id: "ec-q34",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 34,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.7",
    text: "Selon le modèle des quadrants de test de Brian Marick, à quel quadrant appartiennent les tests de performance, de charge et de sécurité (orientés technologie et évaluant le produit de manière critique) ?",
  },
  {
    id: "ec-q35",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 35,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.2.4",
    text: "Si une analyse de risques produit révèle un risque élevé concernant la perte de données lors d'une déconnexion inattendue de l'utilisateur, quelle action de test doit être entreprise en priorité ?",
  },
  {
    id: "ec-q36",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 36,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.3.2",
    text: "Quelle métrique est la plus appropriée pour évaluer l'avancement et l'état de l'implémentation des tests ?",
  },
  {
    id: "ec-q37",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 37,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.4.1",
    text: "De quelle manière la gestion de la configuration soutient-elle les activités de test de logiciels ?",
  },
  {
    id: "ec-q38",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 38,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.5.1",
    text: "Un testeur rédige le rapport d'anomalie suivant :\n'Le système plante.\nSévérité : Élevée.\nDescription : Lorsque je clique sur le bouton de validation de la commande, l'application se fige pendant 30 secondes puis se ferme brutalement. J'ai utilisé le compte de test 'Client01'. Aucun message d'erreur n'apparaît.'\n\nQuelle information essentielle MANQUE dans ce rapport pour qu'un développeur puisse diagnostiquer et corriger efficacement le défaut ?",
  },

  // Chapter 6 (Q39 - Q40)
  {
    id: "ec-q39",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 39,
    chapter: 6,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-6.1.1",
    text: "Parmi les catégories d'outils suivantes, laquelle est principalement conçue pour soutenir l'évaluation de la qualité des produits de travail sans exécuter le code (tests statiques) ?",
  },
  {
    id: "ec-q40",
    exam_id: ENSEMBLE_C_EXAM_ID,
    position: 40,
    chapter: 6,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-6.2.1",
    text: "Quel est l'un des risques majeurs associés à l'automatisation des tests ?",
  },
];

export const ENSEMBLE_C_OPTIONS = [
  // Q1 Options
  {
    id: "ec-q1-a",
    question_id: "ec-q1",
    position: 1,
    label: "A",
    text: "Prouver qu'il n'y a plus aucun défaut caché dans le logiciel.",
  },
  {
    id: "ec-q1-b",
    question_id: "ec-q1",
    position: 2,
    label: "B",
    text: "Évaluer les produits de travail pour vérifier s'ils répondent aux exigences spécifiées.",
  },
  {
    id: "ec-q1-c",
    question_id: "ec-q1",
    position: 3,
    label: "C",
    text: "Maximiser la durée du projet pour s'assurer que tout le code est écrit.",
  },
  {
    id: "ec-q1-d",
    question_id: "ec-q1",
    position: 4,
    label: "D",
    text: "Donner la responsabilité exclusive de la qualité finale aux développeurs.",
  },

  // Q2 Options
  {
    id: "ec-q2-a",
    question_id: "ec-q2",
    position: 1,
    label: "A",
    text: "Pour s'assurer que le code est entièrement automatisé dès le premier jour.",
  },
  {
    id: "ec-q2-b",
    question_id: "ec-q2",
    position: 2,
    label: "B",
    text: "Pour détecter et corriger les défauts le plus tôt possible, réduisant ainsi les coûts et les risques.",
  },
  {
    id: "ec-q2-c",
    question_id: "ec-q2",
    position: 3,
    label: "C",
    text: "Pour éliminer complètement le besoin de tests d'acceptation par les utilisateurs.",
  },
  {
    id: "ec-q2-d",
    question_id: "ec-q2",
    position: 4,
    label: "D",
    text: "Pour prouver de manière exhaustive la conformité légale du code source.",
  },

  // Q3 Options
  {
    id: "ec-q3-a",
    question_id: "ec-q3",
    position: 1,
    label: "A",
    text: "Les tests se concentrent sur l'amélioration des processus globaux, tandis que l'AQ se concentre uniquement sur l'exécution du code.",
  },
  {
    id: "ec-q3-b",
    question_id: "ec-q3",
    position: 2,
    label: "B",
    text: "Les tests sont une activité orientée produit qui évalue la qualité, tandis que l'AQ est une activité orientée processus qui vise à prévenir les défauts.",
  },
  {
    id: "ec-q3-c",
    question_id: "ec-q3",
    position: 3,
    label: "C",
    text: "Les tests garantissent une couverture de 100%, tandis que l'AQ s'occupe de la gestion des ressources.",
  },
  {
    id: "ec-q3-d",
    question_id: "ec-q3",
    position: 4,
    label: "D",
    text: "Il n'y a pas de différence, les deux termes sont strictement synonymes en ingénierie logicielle.",
  },

  // Q4 Options
  {
    id: "ec-q4-a",
    question_id: "ec-q4",
    position: 1,
    label: "A",
    text: "L'absence d'erreurs est une illusion.",
  },
  {
    id: "ec-q4-b",
    question_id: "ec-q4",
    position: 2,
    label: "B",
    text: "Les tests s'épuisent (Paradoxe du pesticide).",
  },
  {
    id: "ec-q4-c",
    question_id: "ec-q4",
    position: 3,
    label: "C",
    text: "Les défauts se regroupent.",
  },
  {
    id: "ec-q4-d",
    question_id: "ec-q4",
    position: 4,
    label: "D",
    text: "Les tests exhaustifs sont impossibles.",
  },

  // Q5 Options
  {
    id: "ec-q5-a",
    question_id: "ec-q5",
    position: 1,
    label: "A",
    text: "Analyse de test.",
  },
  {
    id: "ec-q5-b",
    question_id: "ec-q5",
    position: 2,
    label: "B",
    text: "Conception de test.",
  },
  {
    id: "ec-q5-c",
    question_id: "ec-q5",
    position: 3,
    label: "C",
    text: "Implémentation de test.",
  },
  {
    id: "ec-q5-d",
    question_id: "ec-q5",
    position: 4,
    label: "D",
    text: "Exécution de test.",
  },

  // Q6 Options
  {
    id: "ec-q6-a",
    question_id: "ec-q6",
    position: 1,
    label: "A",
    text: "Elle permet de garantir que l'application sera exempte de défauts.",
  },
  {
    id: "ec-q6-b",
    question_id: "ec-q6",
    position: 2,
    label: "B",
    text: "Elle aide à évaluer l'impact des changements et à mesurer la couverture des exigences par les tests.",
  },
  {
    id: "ec-q6-c",
    question_id: "ec-q6",
    position: 3,
    label: "C",
    text: "Elle évite de devoir exécuter des tests de régression.",
  },
  {
    id: "ec-q6-d",
    question_id: "ec-q6",
    position: 4,
    label: "D",
    text: "Elle remplace le besoin de rédiger des critères d'acceptation.",
  },

  // Q7 Options
  {
    id: "ec-q7-a",
    question_id: "ec-q7",
    position: 1,
    label: "A",
    text: "Insister sur le fait que l'erreur commise par le développeur est basique et évitable.",
  },
  {
    id: "ec-q7-b",
    question_id: "ec-q7",
    position: 2,
    label: "B",
    text: "Présenter les faits de manière neutre, objective et factuelle, sans formuler de jugement de valeur.",
  },
  {
    id: "ec-q7-c",
    question_id: "ec-q7",
    position: 3,
    label: "C",
    text: "Attendre la fin de la phase de test pour soumettre toutes les anomalies en une seule fois.",
  },
  {
    id: "ec-q7-d",
    question_id: "ec-q7",
    position: 4,
    label: "D",
    text: "Laisser le chef de projet servir d'intermédiaire unique pour éviter tout contact direct.",
  },

  // Q8 Options
  {
    id: "ec-q8-a",
    question_id: "ec-q8",
    position: 1,
    label: "A",
    text: "Que tous les membres de l'équipe (y compris développeurs et représentants métier) partagent la responsabilité de la qualité et des tests.",
  },
  {
    id: "ec-q8-b",
    question_id: "ec-q8",
    position: 2,
    label: "B",
    text: "Que l'équipe de test soit isolée pour travailler de manière indépendante sans interférences.",
  },
  {
    id: "ec-q8-c",
    question_id: "ec-q8",
    position: 3,
    label: "C",
    text: "Que le Product Owner rédige l'intégralité des cas de test automatisés.",
  },
  {
    id: "ec-q8-d",
    question_id: "ec-q8",
    position: 4,
    label: "D",
    text: "Que le nombre de développeurs soit strictement égal au nombre de testeurs.",
  },

  // Q9 Options
  {
    id: "ec-q9-a",
    question_id: "ec-q9",
    position: 1,
    label: "A",
    text: "Tous les tests sont regroupés et exécutés en une seule phase finale juste avant la mise en production.",
  },
  {
    id: "ec-q9-b",
    question_id: "ec-q9",
    position: 2,
    label: "B",
    text: "Chaque niveau de test est associé de manière correspondante à une phase de développement spécifique.",
  },
  {
    id: "ec-q9-c",
    question_id: "ec-q9",
    position: 3,
    label: "C",
    text: "Les tests de composants sont omis au profit des tests de système.",
  },
  {
    id: "ec-q9-d",
    question_id: "ec-q9",
    position: 4,
    label: "D",
    text: "Ils sont planifiés de manière purement ad-hoc, selon les retours quotidiens du client.",
  },

  // Q10 Options
  {
    id: "ec-q10-a",
    question_id: "ec-q10",
    position: 1,
    label: "A",
    text: "Laisser les développeurs effectuer eux-mêmes tous les tests système.",
  },
  {
    id: "ec-q10-b",
    question_id: "ec-q10",
    position: 2,
    label: "B",
    text: "Commencer les activités de test (comme l'examen des exigences) le plus tôt possible dans le SDLC.",
  },
  {
    id: "ec-q10-c",
    question_id: "ec-q10",
    position: 3,
    label: "C",
    text: "N'exécuter que des tests automatisés pour éliminer toute erreur humaine.",
  },
  {
    id: "ec-q10-d",
    question_id: "ec-q10",
    position: 4,
    label: "D",
    text: "Attendre que l'architecture soit finalisée avant d'écrire les premiers cas de test.",
  },

  // Q11 Options
  {
    id: "ec-q11-a",
    question_id: "ec-q11",
    position: 1,
    label: "A",
    text: "Elle utilise des critères d'acceptation rédigés selon un format structuré de type Given-When-Then (Étant donné / Quand / Alors) partagé par toute l'équipe.",
  },
  {
    id: "ec-q11-b",
    question_id: "ec-q11",
    position: 2,
    label: "B",
    text: "Elle impose aux testeurs d'écrire du code de test unitaire avant les développeurs.",
  },
  {
    id: "ec-q11-c",
    question_id: "ec-q11",
    position: 3,
    label: "C",
    text: "Elle élimine totalement l'utilisation d'outils de test automatisés.",
  },
  {
    id: "ec-q11-d",
    question_id: "ec-q11",
    position: 4,
    label: "D",
    text: "Elle se focalise exclusivement sur la mesure de la couverture des branches.",
  },

  // Q12 Options
  {
    id: "ec-q12-a",
    question_id: "ec-q12",
    position: 1,
    label: "A",
    text: "Elle augmente la séparation entre développeurs et testeurs.",
  },
  {
    id: "ec-q12-b",
    question_id: "ec-q12",
    position: 2,
    label: "B",
    text: "Elle favorise une rétroaction (feedback) rapide et continue grâce à l'intégration continue (CI) et à la livraison continue (CD).",
  },
  {
    id: "ec-q12-c",
    question_id: "ec-q12",
    position: 3,
    label: "C",
    text: "Elle remplace tous les tests manuels par de l'intelligence artificielle.",
  },
  {
    id: "ec-q12-d",
    question_id: "ec-q12",
    position: 4,
    label: "D",
    text: "Elle supprime le besoin de planifier les tests.",
  },

  // Q13 Options
  {
    id: "ec-q13-a",
    question_id: "ec-q13",
    position: 1,
    label: "A",
    text: "Tests de composants (unitaires).",
  },
  {
    id: "ec-q13-b",
    question_id: "ec-q13",
    position: 2,
    label: "B",
    text: "Tests d'intégration.",
  },
  {
    id: "ec-q13-c",
    question_id: "ec-q13",
    position: 3,
    label: "C",
    text: "Tests système.",
  },
  {
    id: "ec-q13-d",
    question_id: "ec-q13",
    position: 4,
    label: "D",
    text: "Tests d'acceptation utilisateur.",
  },

  // Q14 Options
  {
    id: "ec-q14-a",
    question_id: "ec-q14",
    position: 1,
    label: "A",
    text: "Le recrutement d'un nouveau développeur dans l'équipe.",
  },
  {
    id: "ec-q14-b",
    question_id: "ec-q14",
    position: 2,
    label: "B",
    text: "Une modification ou correction d'une fonctionnalité en production.",
  },
  {
    id: "ec-q14-c",
    question_id: "ec-q14",
    position: 3,
    label: "C",
    text: "La rédaction d'une nouvelle user story pour une version future.",
  },
  {
    id: "ec-q14-d",
    question_id: "ec-q14",
    position: 4,
    label: "D",
    text: "Une réunion d'analyse rétrospective après une itération.",
  },

  // Q15 Options
  {
    id: "ec-q15-a",
    question_id: "ec-q15",
    position: 1,
    label: "A",
    text: "Seulement le code compilé exécuté sur l'environnement de test.",
  },
  {
    id: "ec-q15-b",
    question_id: "ec-q15",
    position: 2,
    label: "B",
    text: "Pratiquement n'importe quel produit de travail écrit, y compris les spécifications, le code source et les cas de test.",
  },
  {
    id: "ec-q15-c",
    question_id: "ec-q15",
    position: 3,
    label: "C",
    text: "Uniquement l'interface utilisateur graphique.",
  },
  {
    id: "ec-q15-d",
    question_id: "ec-q15",
    position: 4,
    label: "D",
    text: "Exclusivement les contrats juridiques avec les clients.",
  },

  // Q16 Options
  {
    id: "ec-q16-a",
    question_id: "ec-q16",
    position: 1,
    label: "A",
    text: "Ils s'exécutent beaucoup plus rapidement dans l'environnement de production.",
  },
  {
    id: "ec-q16-b",
    question_id: "ec-q16",
    position: 2,
    label: "B",
    text: "Ils permettent de détecter les défauts de manière précoce avant l'exécution du logiciel, rendant leur correction moins coûteuse.",
  },
  {
    id: "ec-q16-c",
    question_id: "ec-q16",
    position: 3,
    label: "C",
    text: "Ils permettent de mesurer précisément les performances de charge du système.",
  },
  {
    id: "ec-q16-d",
    question_id: "ec-q16",
    position: 4,
    label: "D",
    text: "Ils requièrent obligatoirement l'utilisation d'un environnement de test complet.",
  },

  // Q17 Options
  {
    id: "ec-q17-a",
    question_id: "ec-q17",
    position: 1,
    label: "A",
    text: "Préparation individuelle -> Réunion -> Planification -> Correction.",
  },
  {
    id: "ec-q17-b",
    question_id: "ec-q17",
    position: 2,
    label: "B",
    text: "Planification -> Lancement -> Préparation individuelle -> Communication et analyse des anomalies -> Correction et suivi.",
  },
  {
    id: "ec-q17-c",
    question_id: "ec-q17",
    position: 3,
    label: "C",
    text: "Réunion -> Correction -> Clôture -> Lancement.",
  },
  {
    id: "ec-q17-d",
    question_id: "ec-q17",
    position: 4,
    label: "D",
    text: "Lancement -> Réunion -> Enregistrement -> Planification.",
  },

  // Q18 Options
  {
    id: "ec-q18-a",
    question_id: "ec-q18",
    position: 1,
    label: "A",
    text: "L'auteur.",
  },
  {
    id: "ec-q18-b",
    question_id: "ec-q18",
    position: 2,
    label: "B",
    text: "Le facilitateur (ou modérateur).",
  },
  {
    id: "ec-q18-c",
    question_id: "ec-q18",
    position: 3,
    label: "C",
    text: "Le scribe.",
  },
  {
    id: "ec-q18-d",
    question_id: "ec-q18",
    position: 4,
    label: "D",
    text: "Le relecteur.",
  },

  // Q19 Options
  {
    id: "ec-q19-a",
    question_id: "ec-q19",
    position: 1,
    label: "A",
    text: "Les cas de test sont dérivés systématiquement à partir des diagrammes UML de structure.",
  },
  {
    id: "ec-q19-b",
    question_id: "ec-q19",
    position: 2,
    label: "B",
    text: "Les tests exploitent les connaissances professionnelles des testeurs, leur expérience et leur intuition pour identifier les défauts.",
  },
  {
    id: "ec-q19-c",
    question_id: "ec-q19",
    position: 3,
    label: "C",
    text: "Ils mesurent strictement le pourcentage de couverture des lignes de code.",
  },
  {
    id: "ec-q19-d",
    question_id: "ec-q19",
    position: 4,
    label: "D",
    text: "Ils requièrent une spécification d'exigences hautement formalisée et mathématique.",
  },

  // Q20 Options
  {
    id: "ec-q20-a",
    question_id: "ec-q20",
    position: 1,
    label: "A",
    text: "12345 (valide), 1234 (invalide), 123456 (invalide), '95A12' (invalide).",
  },
  {
    id: "ec-q20-b",
    question_id: "ec-q20",
    position: 2,
    label: "B",
    text: "12345, 99999, 00000.",
  },
  {
    id: "ec-q20-c",
    question_id: "ec-q20",
    position: 3,
    label: "C",
    text: "12345 (valide), 67890 (valide).",
  },
  {
    id: "ec-q20-d",
    question_id: "ec-q20",
    position: 4,
    label: "D",
    text: "Toutes les combinaisons possibles de codes valides.",
  },

  // Q21 Options
  {
    id: "ec-q21-a",
    question_id: "ec-q21",
    position: 1,
    label: "A",
    text: "24, 25, 65, 66.",
  },
  {
    id: "ec-q21-b",
    question_id: "ec-q21",
    position: 2,
    label: "B",
    text: "11, 13, 14.",
  },
  {
    id: "ec-q21-c",
    question_id: "ec-q21",
    position: 3,
    label: "C",
    text: "25, 65.",
  },
  {
    id: "ec-q21-d",
    question_id: "ec-q21",
    position: 4,
    label: "D",
    text: "23, 24, 25, 26, 64, 65, 66, 67.",
  },

  // Q22 Options
  {
    id: "ec-q22-a",
    question_id: "ec-q22",
    position: 1,
    label: "A",
    text: "8 colonnes.",
  },
  {
    id: "ec-q22-b",
    question_id: "ec-q22",
    position: 2,
    label: "B",
    text: "3 colonnes (Grâce à la fusion des cas où l'antécédent est défavorable).",
  },
  {
    id: "ec-q22-c",
    question_id: "ec-q22",
    position: 3,
    label: "C",
    text: "4 colonnes.",
  },
  {
    id: "ec-q22-d",
    question_id: "ec-q22",
    position: 4,
    label: "D",
    text: "2 colonnes.",
  },

  // Q23 Options
  {
    id: "ec-q23-a",
    question_id: "ec-q23",
    position: 1,
    label: "A",
    text: "2 transitions.",
  },
  {
    id: "ec-q23-b",
    question_id: "ec-q23",
    position: 2,
    label: "B",
    text: "4 transitions (Badge valide -> Fermeture manuelle -> 3 badges invalides -> Code administrateur).",
  },
  {
    id: "ec-q23-c",
    question_id: "ec-q23",
    position: 3,
    label: "C",
    text: "6 transitions.",
  },
  {
    id: "ec-q23-d",
    question_id: "ec-q23",
    position: 4,
    label: "D",
    text: "3 transitions.",
  },

  // Q24 Options
  {
    id: "ec-q24-a",
    question_id: "ec-q24",
    position: 1,
    label: "A",
    text: "Elle garantit qu'aucune boucle infinie ne se produira dans le code.",
  },
  {
    id: "ec-q24-b",
    question_id: "ec-q24",
    position: 2,
    label: "B",
    text: "Elle évalue le pourcentage d'instructions exécutables effectivement parcourues par les tests.",
  },
  {
    id: "ec-q24-c",
    question_id: "ec-q24",
    position: 3,
    label: "C",
    text: "Une couverture des déclarations à 100% assure la détection de tous les défauts de logique.",
  },
  {
    id: "ec-q24-d",
    question_id: "ec-q24",
    position: 4,
    label: "D",
    text: "Elle s'applique uniquement à l'exécution de la base de données.",
  },

  // Q25 Options
  {
    id: "ec-q25-a",
    question_id: "ec-q25",
    position: 1,
    label: "A",
    text: "La couverture des déclarations sera également obligatoirement de 100 %.",
  },
  {
    id: "ec-q25-b",
    question_id: "ec-q25",
    position: 2,
    label: "B",
    text: "La couverture des déclarations sera de 50 % maximum.",
  },
  {
    id: "ec-q25-c",
    question_id: "ec-q25",
    position: 3,
    label: "C",
    text: "Il n'y a aucun rapport, les deux couvertures sont totalement indépendantes.",
  },
  {
    id: "ec-q25-d",
    question_id: "ec-q25",
    position: 4,
    label: "D",
    text: "La couverture des déclarations sera d'au moins 65 %.",
  },

  // Q26 Options
  {
    id: "ec-q26-a",
    question_id: "ec-q26",
    position: 1,
    label: "A",
    text: "En demandant aux utilisateurs finaux de deviner comment utiliser l'application.",
  },
  {
    id: "ec-q26-b",
    question_id: "ec-q26",
    position: 2,
    label: "B",
    text: "En s'appuyant sur leurs connaissances passées, sur la liste des erreurs courantes et sur les types d'anomalies typiques pour lister les défauts potentiels.",
  },
  {
    id: "ec-q26-c",
    question_id: "ec-q26",
    position: 3,
    label: "C",
    text: "En exécutant des tests générés aléatoirement par un outil automatique.",
  },
  {
    id: "ec-q26-d",
    question_id: "ec-q26",
    position: 4,
    label: "D",
    text: "En devinant les lignes de code qui contiennent le plus de variables complexes.",
  },

  // Q27 Options
  {
    id: "ec-q27-a",
    question_id: "ec-q27",
    position: 1,
    label: "A",
    text: "Lorsque des spécifications très détaillées et formalisées sont disponibles dès le début du projet.",
  },
  {
    id: "ec-q27-b",
    question_id: "ec-q27",
    position: 2,
    label: "B",
    text: "En cas de forte pression temporelle, de spécifications insuffisantes ou pour compléter d'autres techniques formelles.",
  },
  {
    id: "ec-q27-c",
    question_id: "ec-q27",
    position: 3,
    label: "C",
    text: "Pour remplacer l'intégralité des tests de régression automatisés.",
  },
  {
    id: "ec-q27-d",
    question_id: "ec-q27",
    position: 4,
    label: "D",
    text: "Uniquement lors des tests unitaires effectués par les développeurs.",
  },

  // Q28 Options
  {
    id: "ec-q28-a",
    question_id: "ec-q28",
    position: 1,
    label: "A",
    text: "Ils servent de base directe pour définir les conditions et les cas de test d'acceptation de la story.",
  },
  {
    id: "ec-q28-b",
    question_id: "ec-q28",
    position: 2,
    label: "B",
    text: "Ils permettent de générer automatiquement le code de l'application.",
  },
  {
    id: "ec-q28-c",
    question_id: "ec-q28",
    position: 3,
    label: "C",
    text: "Ils évitent de devoir valider la story avec le Product Owner.",
  },
  {
    id: "ec-q28-d",
    question_id: "ec-q28",
    position: 4,
    label: "D",
    text: "Ils déterminent la répartition des tâches au sein de l'équipe de développement.",
  },

  // Q29 Options
  {
    id: "ec-q29-a",
    question_id: "ec-q29",
    position: 1,
    label: "A",
    text: "Ajouter un livre de 15€, vérifier que le panier contient 1 article et que le prix total affiche 15€.",
  },
  {
    id: "ec-q29-b",
    question_id: "ec-q29",
    position: 2,
    label: "B",
    text: "Vérifier que l'utilisateur peut modifier sa méthode de paiement préférée dans ses paramètres de profil.",
  },
  {
    id: "ec-q29-c",
    question_id: "ec-q29",
    position: 3,
    label: "C",
    text: "Ajouter un article, vérifier qu'un message de confirmation 'Article ajouté au panier' s'affiche à l'écran.",
  },
  {
    id: "ec-q29-d",
    question_id: "ec-q29",
    position: 4,
    label: "D",
    text: "Ajouter deux articles différents et vérifier que le total est égal à la somme des deux prix.",
  },

  // Q30 Options
  {
    id: "ec-q30-a",
    question_id: "ec-q30",
    position: 1,
    label: "A",
    text: "En estimant la complexité des récits utilisateurs (user stories) et en définissant l'effort requis pour les tester.",
  },
  {
    id: "ec-q30-b",
    question_id: "ec-q30",
    position: 2,
    label: "B",
    text: "En exigeant que toutes les user stories soient entièrement testées avant le début de l'itération.",
  },
  {
    id: "ec-q30-c",
    question_id: "ec-q30",
    position: 3,
    label: "C",
    text: "En définissant unilatéralement la vitesse de développement de l'équipe.",
  },
  {
    id: "ec-q30-d",
    question_id: "ec-q30",
    position: 4,
    label: "D",
    text: "En interdisant l'intégration de toute exigence non fonctionnelle.",
  },

  // Q31 Options
  {
    id: "ec-q31-a",
    question_id: "ec-q31",
    position: 1,
    label: "A",
    text: "Le rapport final des résultats des tests d'acceptation utilisateur.",
  },
  {
    id: "ec-q31-b",
    question_id: "ec-q31",
    position: 2,
    label: "B",
    text: "La disponibilité d'un environnement de test de type système configuré, et de composants de code ayant passé les tests d'intégration.",
  },
  {
    id: "ec-q31-c",
    question_id: "ec-q31",
    position: 3,
    label: "C",
    text: "La correction de 100 % des défauts mineurs détectés par les tests d'acceptation.",
  },
  {
    id: "ec-q31-d",
    question_id: "ec-q31",
    position: 4,
    label: "D",
    text: "La signature du contrat final par les utilisateurs finaux.",
  },

  // Q32 Options
  {
    id: "ec-q32-a",
    question_id: "ec-q32",
    position: 1,
    label: "A",
    text: "40 jours-hommes.",
  },
  {
    id: "ec-q32-b",
    question_id: "ec-q32",
    position: 2,
    label: "B",
    text: "60 jours-hommes (En appliquant le ratio de 1:3 à 180 jours-hommes).",
  },
  {
    id: "ec-q32-c",
    question_id: "ec-q32",
    position: 3,
    label: "C",
    text: "120 jours-hommes.",
  },
  {
    id: "ec-q32-d",
    question_id: "ec-q32",
    position: 4,
    label: "D",
    text: "180 jours-hommes.",
  },

  // Q33 Options
  {
    id: "ec-q33-a",
    question_id: "ec-q33",
    position: 1,
    label: "A",
    text: "TC2 -> TC4 -> TC3 -> TC1 -> TC5.",
  },
  {
    id: "ec-q33-b",
    question_id: "ec-q33",
    position: 2,
    label: "B",
    text: "TC1 -> TC4 -> TC2 -> TC3 -> TC5 (Puisque TC1 n'a pas de dépendance et est requis pour TC4 et TC2, et TC2 est requis pour TC3 qui est requis pour TC5).",
  },
  {
    id: "ec-q33-c",
    question_id: "ec-q33",
    position: 3,
    label: "C",
    text: "TC1 -> TC2 -> TC3 -> TC4 -> TC5.",
  },
  {
    id: "ec-q33-d",
    question_id: "ec-q33",
    position: 4,
    label: "D",
    text: "TC5 -> TC3 -> TC2 -> TC4 -> TC1.",
  },

  // Q34 Options
  {
    id: "ec-q34-a",
    question_id: "ec-q34",
    position: 1,
    label: "A",
    text: "Quadrant Q1.",
  },
  {
    id: "ec-q34-b",
    question_id: "ec-q34",
    position: 2,
    label: "B",
    text: "Quadrant Q2.",
  },
  {
    id: "ec-q34-c",
    question_id: "ec-q34",
    position: 3,
    label: "C",
    text: "Quadrant Q3.",
  },
  {
    id: "ec-q34-d",
    question_id: "ec-q34",
    position: 4,
    label: "D",
    text: "Quadrant Q4 (Orienté technologie, critique pour le produit).",
  },

  // Q35 Options
  {
    id: "ec-q35-a",
    question_id: "ec-q35",
    position: 1,
    label: "A",
    text: "Reporter les tests de sécurité à une itération ultérieure.",
  },
  {
    id: "ec-q35-b",
    question_id: "ec-q35",
    position: 2,
    label: "B",
    text: "Concevoir et exécuter des cas de test simulant une coupure réseau ou de courant lors d'un transfert actif afin de valider la récupération des données.",
  },
  {
    id: "ec-q35-c",
    question_id: "ec-q35",
    position: 3,
    label: "C",
    text: "Demander au Product Owner de modifier les exigences pour éviter d'avoir à gérer ce cas de figure.",
  },
  {
    id: "ec-q35-d",
    question_id: "ec-q35",
    position: 4,
    label: "D",
    text: "Se concentrer uniquement sur les tests de performances de la page d'accueil.",
  },

  // Q36 Options
  {
    id: "ec-q36-a",
    question_id: "ec-q36",
    position: 1,
    label: "A",
    text: "Le nombre total de lignes de code écrites.",
  },
  {
    id: "ec-q36-b",
    question_id: "ec-q36",
    position: 2,
    label: "B",
    text: "Le pourcentage de cas de test rédigés et validés par rapport au total prévu.",
  },
  {
    id: "ec-q36-c",
    question_id: "ec-q36",
    position: 3,
    label: "C",
    text: "Le nombre de réunions tenues par l'équipe de test.",
  },
  {
    id: "ec-q36-d",
    question_id: "ec-q36",
    position: 4,
    label: "D",
    text: "Le budget dépensé à ce jour.",
  },

  // Q37 Options
  {
    id: "ec-q37-a",
    question_id: "ec-q37",
    position: 1,
    label: "A",
    text: "En définissant l'augmentation de salaire des testeurs.",
  },
  {
    id: "ec-q37-b",
    question_id: "ec-q37",
    position: 2,
    label: "B",
    text: "En s'assurant que tous les éléments de test (code, exigences, cas de test, scripts automatisés) sont identifiés, versionnés, et tracés de manière unique et cohérente.",
  },
  {
    id: "ec-q37-c",
    question_id: "ec-q37",
    position: 3,
    label: "C",
    text: "En gérant l'achat du matériel physique pour l'équipe.",
  },
  {
    id: "ec-q37-d",
    question_id: "ec-q37",
    position: 4,
    label: "D",
    text: "En dictant les heures de début et de fin de journée de l'équipe.",
  },

  // Q38 Options
  {
    id: "ec-q38-a",
    question_id: "ec-q38",
    position: 1,
    label: "A",
    text: "Le nom du testeur ayant découvert le défaut.",
  },
  {
    id: "ec-q38-b",
    question_id: "ec-q38",
    position: 2,
    label: "B",
    text: "Les étapes détaillées pour reproduire l'anomalie, y compris les données d'entrée précises et la version de l'application.",
  },
  {
    id: "ec-q38-c",
    question_id: "ec-q38",
    position: 3,
    label: "C",
    text: "Le coût estimé de la correction du défaut.",
  },
  {
    id: "ec-q38-d",
    question_id: "ec-q38",
    position: 4,
    label: "D",
    text: "L'avis personnel du testeur sur la qualité générale du travail du développeur.",
  },

  // Q39 Options
  {
    id: "ec-q39-a",
    question_id: "ec-q39",
    position: 1,
    label: "A",
    text: "Outils de test de performance.",
  },
  {
    id: "ec-q39-b",
    question_id: "ec-q39",
    position: 2,
    label: "B",
    text: "Outils d'analyse statique du code (linter, analyseurs de sécurité statiques).",
  },
  {
    id: "ec-q39-c",
    question_id: "ec-q39",
    position: 3,
    label: "C",
    text: "Outils de gestion d'exécution des tests.",
  },
  {
    id: "ec-q39-d",
    question_id: "ec-q39",
    position: 4,
    label: "D",
    text: "Outils d'émulation d'environnement.",
  },

  // Q40 Options
  {
    id: "ec-q40-a",
    question_id: "ec-q40",
    position: 1,
    label: "A",
    text: "S'attendre à des gains de productivité et de réduction d'effort irréalistes à court terme (coûts initiaux et maintenance sous-estimés).",
  },
  {
    id: "ec-q40-b",
    question_id: "ec-q40",
    position: 2,
    label: "B",
    text: "L'impossibilité totale de l'intégrer avec des pipelines de CI/CD.",
  },
  {
    id: "ec-q40-c",
    question_id: "ec-q40",
    position: 3,
    label: "C",
    text: "L'augmentation obligatoire du nombre de défauts introduits en production.",
  },
  {
    id: "ec-q40-d",
    question_id: "ec-q40",
    position: 4,
    label: "D",
    text: "La suppression complète de l'intérêt professionnel pour les développeurs.",
  },
];

export const ENSEMBLE_C_SOLUTIONS = [
  // Q1 Solution
  {
    question_id: "ec-q1",
    correct_option_ids: ["ec-q1-b"],
    explanation:
      "L'évaluation des produits de travail pour s'assurer de leur conformité aux exigences est un objectif de test fondamental (Syllabus v4.0, Section 1.1.1). Prouver l'absence totale de défauts est impossible (Principe 2).",
    option_rationales: {
      "ec-q1-a":
        "Faux. Le principe de test 2 indique que prouver l'absence totale de défauts est impossible.",
      "ec-q1-b":
        "Correct. C'est l'un des objectifs types des tests, qui consiste à évaluer les produits de travail pour vérifier s'ils répondent aux exigences.",
      "ec-q1-c": "Faux. Maximiser la durée d'un projet n'est jamais un objectif.",
      "ec-q1-d":
        "Faux. La qualité est une responsabilité partagée, particulièrement avec l'approche d'équipe complète.",
    },
  },

  // Q2 Solution
  {
    question_id: "ec-q2",
    correct_option_ids: ["ec-q2-b"],
    explanation:
      "Intégrer les tests tôt dans le SDLC (approche 'shift-left') permet de détecter les défauts à moindre coût avant qu'ils ne soient propagés et plus compliqués à corriger (Syllabus v4.0, Section 1.2.1 et 2.1.2).",
    option_rationales: {
      "ec-q2-a": "Faux. L'automatisation complète dès le début n'est ni réaliste ni obligatoire.",
      "ec-q2-b":
        "Correct. Plus un défaut est détecté tôt, moins il coûte cher à corriger, réduisant ainsi le risque global du projet.",
      "ec-q2-c":
        "Faux. Les tests d'acceptation restent indispensables pour valider l'adéquation aux besoins utilisateurs.",
      "ec-q2-d": "Faux. Les tests exhaustifs sont impossibles.",
    },
  },

  // Q3 Solution
  {
    question_id: "ec-q3",
    correct_option_ids: ["ec-q3-b"],
    explanation:
      "Le test est orienté produit (évaluation de la qualité de l'objet de test), tandis que l'assurance qualité est orientée processus (mise en place de processus de développement robustes pour prévenir l'apparition des défauts) (Syllabus v4.0, Section 1.2.2).",
    option_rationales: {
      "ec-q3-a":
        "Faux. C'est l'inverse, l'AQ est orientée processus et le test est axé sur le produit.",
      "ec-q3-b":
        "Correct. Le test (QC) évalue le produit, tandis que l'AQ améliore le processus pour prévenir les défauts.",
      "ec-q3-c": "Faux. Aucun d'entre eux ne garantit une couverture de 100%.",
      "ec-q3-d": "Faux. Ce sont des concepts différents bien que liés.",
    },
  },

  // Q4 Solution
  {
    question_id: "ec-q4",
    correct_option_ids: ["ec-q4-b"],
    explanation:
      "Le principe 'les tests s'épuisent' (ou Paradoxe du pesticide) stipule que si les mêmes tests sont répétés indéfiniment, ils finiront par ne plus trouver de nouveaux défauts car le système a été immunisé contre ces tests. Il faut régulièrement les mettre à jour (Syllabus v4.0, Section 1.3.1).",
    option_rationales: {
      "ec-q4-a":
        "Faux. L'illusion de l'absence d'erreurs concerne la fausse croyance qu'un système sans défauts répond aux besoins réels.",
      "ec-q4-b":
        "Correct. Ce scénario décrit exactement le paradoxe du pesticide (les tests s'épuisent).",
      "ec-q4-c":
        "Faux. Le regroupement des défauts stipule qu'une petite portion de modules contient la majorité des défauts.",
      "ec-q4-d":
        "Faux. Les tests exhaustifs impossibles indiquent que tout tester n'est pas faisable.",
    },
  },

  // Q5 Solution
  {
    question_id: "ec-q5",
    correct_option_ids: ["ec-q5-a"],
    explanation:
      "L'analyse de test consiste à analyser la base de test pour identifier les caractéristiques testables et définir les conditions de test associées. La conception de test traduit ensuite ces conditions en cas de test (Syllabus v4.0, Section 1.4.1).",
    option_rationales: {
      "ec-q5-a": "Correct. C'est la définition exacte de l'activité d'analyse de test.",
      "ec-q5-b":
        "Faux. La conception de test se charge de rédiger et d'élaborer les scénarios et cas de test.",
      "ec-q5-c": "Faux. L'implémentation prépare les scripts de test et les suites de test.",
      "ec-q5-d": "Faux. L'exécution lance les tests et compare les résultats réels aux attendus.",
    },
  },

  // Q6 Solution
  {
    question_id: "ec-q6",
    correct_option_ids: ["ec-q6-b"],
    explanation:
      "La traçabilité bidirectionnelle permet d'évaluer la couverture des exigences (savoir si toutes les exigences sont couvertes par des tests) et d'effectuer une analyse d'impact efficace lors d'un changement d'exigence (Syllabus v4.0, Section 1.4.4).",
    option_rationales: {
      "ec-q6-a": "Faux. Aucune traçabilité ne garantit l'absence totale de défauts.",
      "ec-q6-b":
        "Correct. L'analyse d'impact et la mesure de la couverture sont les bénéfices directs de la traçabilité.",
      "ec-q6-c": "Faux. Les tests de régression restent indispensables.",
      "ec-q6-d": "Faux. Les critères d'acceptation restent nécessaires.",
    },
  },

  // Q7 Solution
  {
    question_id: "ec-q7",
    correct_option_ids: ["ec-q7-b"],
    explanation:
      "Une communication efficace et constructive nécessite d'être objectif, factuel et neutre. Il faut se concentrer sur l'amélioration de la qualité du produit sans critiquer les personnes (Syllabus v4.0, Section 1.5.1).",
    option_rationales: {
      "ec-q7-a":
        "Faux. Ce genre d'affirmation nuit à la relation de travail et au climat d'équipe.",
      "ec-q7-b":
        "Correct. Être objectif, factuel et neutre est le meilleur moyen de collaborer sainement.",
      "ec-q7-c": "Faux. Les défauts doivent être communiqués dès que possible.",
      "ec-q7-d":
        "Faux. La communication directe et fluide au sein de l'équipe est fortement encouragée.",
    },
  },

  // Q8 Solution
  {
    question_id: "ec-q8",
    correct_option_ids: ["ec-q8-a"],
    explanation:
      "L'approche d'équipe complète (Whole-Team Approach) stipule que la qualité et le test sont la responsabilité de tous les membres de l'équipe projet, et pas seulement des testeurs désignés (Syllabus v4.0, Section 1.5.2).",
    option_rationales: {
      "ec-q8-a": "Correct. Tout le monde dans l'équipe partage la responsabilité de la qualité.",
      "ec-q8-b": "Faux. C'est le contraire d'isoler l'équipe de test.",
      "ec-q8-c":
        "Faux. L'automatisation des tests requiert des compétences techniques variées, pas seulement le PO.",
      "ec-q8-d": "Faux. Il n'y a pas de règle stricte de parité numérique.",
    },
  },

  // Q9 Solution
  {
    question_id: "ec-q9",
    correct_option_ids: ["ec-q9-b"],
    explanation:
      "Dans un modèle en V, chaque niveau de test (Composants, Intégration, Système, Acceptation) correspond directement à une étape du cycle de développement (Spécification, Conception, Codage) (Syllabus v4.0, Section 2.1.1).",
    option_rationales: {
      "ec-q9-a":
        "Faux. C'est l'approche dite du 'Big Bang' ou cascade mal exécutée, pas la structure recommandée du modèle en V.",
      "ec-q9-b":
        "Correct. C'est la caractéristique du modèle en V où chaque niveau fait écho à une phase de développement.",
      "ec-q9-c": "Faux. Les tests de composants sont indispensables au modèle en V.",
      "ec-q9-d": "Faux. C'est plutôt l'apanage des méthodes ad-hoc extrêmes.",
    },
  },

  // Q10 Solution
  {
    question_id: "ec-q10",
    correct_option_ids: ["ec-q10-b"],
    explanation:
      "Tester le plus tôt possible (Shift-Left) est une règle d'or universelle applicable à tous les cycles de vie du développement logiciel (Syllabus v4.0, Section 2.1.2).",
    option_rationales: {
      "ec-q10-a": "Faux. Les développeurs manquent d'indépendance pour les tests système.",
      "ec-q10-b":
        "Correct. Commencer à tester tôt est une pratique excellente et transversale à tous les SDLC.",
      "ec-q10-c": "Faux. Les tests manuels basés sur l'expérience restent indispensables.",
      "ec-q10-d":
        "Faux. On peut et on doit concevoir et examiner des documents (tests statiques) avant l'architecture finale.",
    },
  },

  // Q11 Solution
  {
    question_id: "ec-q11",
    correct_option_ids: ["ec-q11-a"],
    explanation:
      "Le BDD formule les exigences en termes de comportements attendus du système décrits à travers un format lisible et structuré (Given / When / Then), facilitant la compréhension partagée entre PO, développeurs et testeurs (Syllabus v4.0, Section 2.1.3).",
    option_rationales: {
      "ec-q11-a": "Correct. C'est la structure Given-When-Then typique du BDD.",
      "ec-q11-b": "Faux. C'est plutôt la description du TDD (Test-Driven Development).",
      "ec-q11-c": "Faux. Le BDD s'appuie fortement sur l'automatisation de ces scénarios.",
      "ec-q11-d": "Faux. Cela correspond aux critères de couverture structurelle (boîte blanche).",
    },
  },

  // Q12 Solution
  {
    question_id: "ec-q12",
    correct_option_ids: ["ec-q12-b"],
    explanation:
      "DevOps brise les silos entre dev et ops en s'appuyant sur l'automatisation continue (CI/CD) pour fournir un feedback rapide et fréquent sur la qualité de chaque livraison de code (Syllabus v4.0, Section 2.1.4).",
    option_rationales: {
      "ec-q12-a": "Faux. DevOps réduit la séparation et encourage la collaboration.",
      "ec-q12-b": "Correct. Le feedback rapide et continu via la CI/CD est l'impact majeur.",
      "ec-q12-c": "Faux. Les tests manuels conservent toute leur valeur.",
      "ec-q12-d": "Faux. La planification reste indispensable.",
    },
  },

  // Q13 Solution
  {
    question_id: "ec-q13",
    correct_option_ids: ["ec-q13-b"],
    explanation:
      "Les tests d'intégration se focalisent sur l'évaluation des interfaces et des interactions entre les modules, les sous-systèmes ou avec des systèmes externes (Syllabus v4.0, Section 2.2.1).",
    option_rationales: {
      "ec-q13-a":
        "Faux. Les tests de composants se concentrent sur des fonctions ou classes individuelles isolées.",
      "ec-q13-b":
        "Correct. Les tests d'intégration valident spécifiquement les interactions entre composants ou systèmes.",
      "ec-q13-c":
        "Faux. Les tests système évaluent le comportement global de bout en bout du produit complet.",
      "ec-q13-d": "Faux. Les tests d'acceptation valident l'adéquation aux besoins métiers finaux.",
    },
  },

  // Q14 Solution
  {
    question_id: "ec-q14",
    correct_option_ids: ["ec-q14-b"],
    explanation:
      "Les tests de maintenance sont déclenchés par une modification du système déjà déployé en production (correction de bug, ajout d'une amélioration), une migration vers une nouvelle plateforme, ou le retrait complet d'une fonctionnalité (Syllabus v4.0, Section 2.3.1).",
    option_rationales: {
      "ec-q14-a": "Faux. C'est un événement RH sans impact sur le code en production.",
      "ec-q14-b":
        "Correct. Toute modification d'un système opérationnel existant requiert des tests de maintenance.",
      "ec-q14-c":
        "Faux. Cela fait partie des nouvelles fonctionnalités planifiées, pas de la maintenance d'existant.",
      "ec-q14-d": "Faux. C'est un événement organisationnel.",
    },
  },

  // Q15 Solution
  {
    question_id: "ec-q15",
    correct_option_ids: ["ec-q15-b"],
    explanation:
      "Pratiquement tous les produits de travail écrits peuvent être soumis à des tests statiques (sans exécution) : spécifications d'exigences, plans de test, guides utilisateurs, code source, etc. (Syllabus v4.0, Section 3.1.1).",
    option_rationales: {
      "ec-q15-a": "Faux. Le code compilé exécuté relève des tests dynamiques.",
      "ec-q15-b": "Correct. Tout document écrit est éligible aux revues ou analyses statiques.",
      "ec-q15-c": "Faux. L'interface graphique exécutée est testée de manière dynamique.",
      "ec-q15-d": "Faux. Trop restrictif, bien que possible.",
    },
  },

  // Q16 Solution
  {
    question_id: "ec-q16",
    correct_option_ids: ["ec-q16-b"],
    explanation:
      "Puisqu'ils s'appliquent aux documents de conception, d'architecture et de code avant l'exécution, les tests statiques identifient les défauts à la source, évitant leur propagation tardive et réduisant drastiquement le coût total de correction (Syllabus v4.0, Section 3.1.2).",
    option_rationales: {
      "ec-q16-a": "Faux. Ils ne s'exécutent pas en production car ils sont faits en amont.",
      "ec-q16-b":
        "Correct. La détection précoce des défauts est le principal gain économique des tests statiques.",
      "ec-q16-c": "Faux. Les tests de performance requièrent des tests dynamiques d'exécution.",
      "ec-q16-d": "Faux. Au contraire, ils ne requièrent aucun environnement d'exécution.",
    },
  },

  // Q17 Solution
  {
    question_id: "ec-q17",
    correct_option_ids: ["ec-q17-b"],
    explanation:
      "Le processus de revue formelle ISTQB suit l'ordre logique suivant : Planification, Lancement, Préparation individuelle, Communication et analyse des anomalies, puis Correction et suivi (Syllabus v4.0, Section 3.2.1).",
    option_rationales: {
      "ec-q17-a": "Faux. La planification doit toujours être faite en premier.",
      "ec-q17-b": "Correct. C'est l'ordre chronologique réglementaire des activités de revue.",
      "ec-q17-c": "Faux. La préparation individuelle est absente ou mal ordonnée.",
      "ec-q17-d": "Faux. Ordre incohérent.",
    },
  },

  // Q18 Solution
  {
    question_id: "ec-q18",
    correct_option_ids: ["ec-q18-b"],
    explanation:
      "Le facilitateur (ou modérateur) anime et dirige la réunion de revue, veille au respect du timing et garantit un environnement de discussion sain et productif (Syllabus v4.0, Section 3.2.2).",
    option_rationales: {
      "ec-q18-a": "Faux. L'auteur est la personne qui a créé le produit de travail à réviser.",
      "ec-q18-b":
        "Correct. C'est le rôle de facilitation d'assurer le bon déroulement de la revue.",
      "ec-q18-c": "Faux. Le scribe note les anomalies et décisions pendant la réunion.",
      "ec-q18-d": "Faux. Les relecteurs effectuent l'évaluation individuelle du document.",
    },
  },

  // Q19 Solution
  {
    question_id: "ec-q19",
    correct_option_ids: ["ec-q19-b"],
    explanation:
      "Les techniques basées sur l'expérience s'appuient sur les compétences, le savoir-faire historique et l'intuition du testeur pour concevoir des scénarios ciblant les vulnérabilités habituelles du système (Syllabus v4.0, Section 4.1.1).",
    option_rationales: {
      "ec-q19-a": "Faux. Cela décrit une approche structurelle (boîte blanche).",
      "ec-q19-b": "Correct. C'est l'essence même des tests basés sur l'expérience.",
      "ec-q19-c": "Faux. Cela correspond à des critères structurels de boîte blanche.",
      "ec-q19-d": "Faux. C'est plutôt le domaine des techniques basées sur les spécifications.",
    },
  },

  // Q20 Solution
  {
    question_id: "ec-q20",
    correct_option_ids: ["ec-q20-a"],
    explanation:
      "Les partitions d'équivalence ici sont :\n1. Partition valide : 5 chiffres uniquement (Ex: 12345).\n2. Partition invalide (trop court) : moins de 5 caractères (Ex: 1234).\n3. Partition invalide (trop long) : plus de 5 caractères (Ex: 123456).\n4. Partition invalide (caractères non autorisés) : contient des lettres ou symboles (Ex: '95A12').\nL'option A couvre ces quatre équivalences de manière minimale et complète (Syllabus v4.0, Section 4.2.1).",
    option_rationales: {
      "ec-q20-a":
        "Correct. Cet ensemble couvre de façon optimale la classe valide et les trois classes invalides principales.",
      "ec-q20-b":
        "Faux. Toutes ces valeurs sont valides, les classes invalides ne sont pas testées.",
      "ec-q20-c": "Faux. Uniquement des valeurs valides.",
      "ec-q20-d": "Faux. Inapplicable (les tests exhaustifs sont impossibles).",
    },
  },

  // Q21 Solution
  {
    question_id: "ec-q21",
    correct_option_ids: ["ec-q21-a"],
    explanation:
      "Pour l'analyse des valeurs limites à 2 valeurs, nous testons la valeur limite elle-même et sa voisine immédiate hors de la frontière :\n• Pour la frontière 25 : les valeurs sont 25 (valide réduction) et 24 (invalide réduction).\n• Pour la frontière 65 : les valeurs sont 65 (valide réduction) et 66 (invalide réduction 15% / valide réduction 20%).\nLes valeurs minimales requises à tester sont donc 24, 25, 65, 66 (Syllabus v4.0, Section 4.2.2).",
    option_rationales: {
      "ec-q21-a":
        "Correct. Ce sont les valeurs limites et leurs voisins hors frontières à 2 valeurs.",
      "ec-q21-b": "Faux. Ne correspond pas du tout aux frontières définies (25 et 65).",
      "ec-q21-c": "Faux. Ce sont uniquement les valeurs limites sans leurs voisins extérieurs.",
      "ec-q21-d":
        "Faux. Ceci correspond à l'analyse à 3 valeurs (valeur limite, voisin inférieur, voisin supérieur).",
    },
  },

  // Q22 Solution
  {
    question_id: "ec-q22",
    correct_option_ids: ["ec-q22-b"],
    explanation:
      "La table de décision simplifiée contient les règles suivantes :\n• Règle 1 : Antécédents favorables (Oui) ET revenus stables (Oui) -> Approbation automatique.\n• Règle 2 : Antécédents favorables (Oui) ET revenus stables (Non) -> Garantie requise.\n• Règle 3 : Antécédents défavorables (Non) -> Rejet immédiat (les revenus n'ont plus d'influence, d'où une colonne combinée).\nLa table simplifiée comporte donc 3 colonnes (Syllabus v4.0, Section 4.2.3).",
    option_rationales: {
      "ec-q22-a": "Faux. C'est beaucoup trop pour 2 conditions binaires simples.",
      "ec-q22-b":
        "Correct. La table complète non simplifiée ferait 4 colonnes, mais se simplifie à 3 puisque si l'antécédent est défavorable, le revenu n'importe pas.",
      "ec-q22-c":
        "Faux. C'est la table complète non simplifiée, mais le mot 'simplifiée et complète' appelle à fusionner les cas redondants.",
      "ec-q22-d": "Faux. Insuffisant pour couvrir les comportements de revenus stables/instables.",
    },
  },

  // Q23 Solution
  {
    question_id: "ec-q23",
    correct_option_ids: ["ec-q23-b"],
    explanation:
      "À partir de l'état initial Verrouillé, nous devons couvrir les transitions valides suivantes :\n1. Verrouillé -> Déverrouillé (badge valide)\n2. Déverrouillé -> Verrouillé (fermeture manuelle)\n3. Verrouillé -> Alarme (3 badges invalides)\n4. Alarme -> Verrouillé (code admin)\nLe chemin minimal de tests couvrant ces 4 transitions nécessite d'exécuter un badge valide, une fermeture manuelle, 3 essais invalides pour déclencher l'alarme, puis d'insérer le code administrateur. Cela représente 4 transitions de test distinctes (Syllabus v4.0, Section 4.2.4).",
    option_rationales: {
      "ec-q23-a": "Faux. Insuffisant pour parcourir tous les états décrits.",
      "ec-q23-b":
        "Correct. Il y a précisément 4 transitions uniques à tester pour couvrir l'ensemble du cycle.",
      "ec-q23-c": "Faux. Trop élevé, certaines transitions seraient doublées.",
      "ec-q23-d": "Faux. Ne permet pas de couvrir la totalité des 4 cas décrits.",
    },
  },

  // Q24 Solution
  {
    question_id: "ec-q24",
    correct_option_ids: ["ec-q24-b"],
    explanation:
      "La couverture des déclarations mesure la proportion d'instructions exécutables effectivement exécutées par la suite de tests par rapport au nombre total d'instructions du code (Syllabus v4.0, Section 4.3.1).",
    option_rationales: {
      "ec-q24-a": "Faux. Elle ne peut pas garantir l'absence de boucles infinies.",
      "ec-q24-b": "Correct. C'est la définition mathématique de la couverture de déclaration.",
      "ec-q24-c":
        "Faux. Une couverture à 100% n'assure pas l'absence d'erreurs de logique ou de branches non testées.",
      "ec-q24-d": "Faux. Elle s'applique au code logiciel de programmation.",
    },
  },

  // Q25 Solution
  {
    question_id: "ec-q25",
    correct_option_ids: ["ec-q25-a"],
    explanation:
      "Obtenir une couverture des branches de 100 % garantit d'avoir parcouru toutes les décisions possibles, et donc logiquement toutes les déclarations de code exécutables qui se trouvent à l'intérieur de ces branches. L'inverse n'est en revanche pas vrai (Syllabus v4.0, Section 4.3.2).",
    option_rationales: {
      "ec-q25-a":
        "Correct. La couverture de branche est un critère plus fort qui inclut la couverture des déclarations.",
      "ec-q25-b": "Faux. Elle sera obligatoirement supérieure, à savoir de 100 %.",
      "ec-q25-c": "Faux. Elles sont étroitement liées hiérarchiquement.",
      "ec-q25-d": "Faux. Elle sera strictement égale à 100 %.",
    },
  },

  // Q26 Solution
  {
    question_id: "ec-q26",
    correct_option_ids: ["ec-q26-b"],
    explanation:
      "La devinette d'erreurs repose sur l'expérience passée de l'ingénieur de test pour anticiper les erreurs humaines, les défauts et les échecs typiques dans des contextes similaires (Syllabus v4.0, Section 4.4.1).",
    option_rationales: {
      "ec-q26-a":
        "Faux. Ce n'est pas le comportement de l'utilisateur final qui est 'deviné' de cette façon.",
      "ec-q26-b":
        "Correct. C'est l'approche basée sur le catalogue de défauts connus et l'expérience.",
      "ec-q26-c": "Faux. Cela décrit le test aléatoire (fuzzing).",
      "ec-q26-d":
        "Faux. Les métriques de complexité de code ne font pas partie de cette technique.",
    },
  },

  // Q27 Solution
  {
    question_id: "ec-q27",
    correct_option_ids: ["ec-q27-b"],
    explanation:
      "Les tests exploratoires sont particulièrement utiles lorsqu'il y a un manque de temps, peu de spécifications rédigées, ou pour compléter des tests plus structurés et formels en découvrant des cas non prévus (Syllabus v4.0, Section 4.4.2).",
    option_rationales: {
      "ec-q27-a":
        "Faux. Si les spécifications sont très détaillées, les tests formels boîte noire sont prioritaires.",
      "ec-q27-b":
        "Correct. C'est le cas d'usage typique et recommandé pour les tests exploratoires.",
      "ec-q27-c": "Faux. Ils ne remplacent pas les tests de régression automatisés indispensables.",
      "ec-q27-d": "Faux. Ils s'appliquent à tous les niveaux, pas seulement aux tests unitaires.",
    },
  },

  // Q28 Solution
  {
    question_id: "ec-q28",
    correct_option_ids: ["ec-q28-a"],
    explanation:
      "Les critères d'acceptation définissent les conditions que le produit doit remplir pour être accepté par le PO. Ils servent donc de base directe pour concevoir les scénarios et cas de test d'acceptation (Syllabus v4.0, Section 4.5.1).",
    option_rationales: {
      "ec-q28-a": "Correct. C'est le rôle fondamental des critères d'acceptation pour le testeur.",
      "ec-q28-b": "Faux. Ils ne génèrent pas de code d'application automatiquement.",
      "ec-q28-c": "Faux. La validation finale avec le PO reste impérative.",
      "ec-q28-d": "Faux. C'est le rôle de l'équipe de développement d'organiser sa répartition.",
    },
  },

  // Q29 Solution
  {
    question_id: "ec-q29",
    correct_option_ids: ["ec-q29-b"],
    explanation:
      "La modification du profil de paiement de l'utilisateur n'a aucun lien fonctionnel direct avec l'ajout d'articles dans un panier décrit dans l'User Story (Syllabus v4.0, Section 4.5.3).",
    option_rationales: {
      "ec-q29-a":
        "Faux. C'est un cas de test de base extrêmement pertinent pour vérifier le panier.",
      "ec-q29-b":
        "Correct. Ce cas de test est hors sujet par rapport à la fonctionnalité de panier décrite.",
      "ec-q29-c": "Faux. Très pertinent car il valide le critère d'acceptation n°3.",
      "ec-q29-d": "Faux. Très pertinent car il valide le calcul de la somme.",
    },
  },

  // Q30 Solution
  {
    question_id: "ec-q30",
    correct_option_ids: ["ec-q30-a"],
    explanation:
      "Pendant la planification d'itération, les testeurs apportent de la valeur en évaluant la testabilité des stories, en estimant l'effort requis pour les tester et en aidant à définir clairement les scénarios d'acceptation (Syllabus v4.0, Section 5.1.2).",
    option_rationales: {
      "ec-q30-a":
        "Correct. L'estimation et l'évaluation de la testabilité sont l'apport majeur du testeur en réunion d'itération.",
      "ec-q30-b": "Faux. Les tests sont exécutés pendant l'itération, pas avant.",
      "ec-q30-c": "Faux. La vélocité de l'équipe est estimée collectivement.",
      "ec-q30-d": "Faux. Les exigences non fonctionnelles sont également prioritaires.",
    },
  },

  // Q31 Solution
  {
    question_id: "ec-q31",
    correct_option_ids: ["ec-q31-b"],
    explanation:
      "Les critères d'entrée définissent les conditions requises pour commencer un niveau de test. Disposer d'un environnement fonctionnel et de modules de code validés aux niveaux inférieurs est un critère d'entrée type (Syllabus v4.0, Section 5.1.3).",
    option_rationales: {
      "ec-q31-a": "Faux. C'est un livrable de sortie des tests d'acceptation.",
      "ec-q31-b":
        "Correct. La présence de l'environnement et du code validé est le critère d'entrée par excellence.",
      "ec-q31-c": "Faux. C'est un critère de sortie ou une condition de clôture.",
      "ec-q31-d": "Faux. Événement commercial.",
    },
  },

  // Q32 Solution
  {
    question_id: "ec-q32",
    correct_option_ids: ["ec-q32-b"],
    explanation:
      "Selon le ratio historique de 1:3 (40 jours de test pour 120 de dev), pour un nouveau projet estimé à 180 jours de dev, l'effort de test estimé est de 180 / 3 = 60 jours-hommes (Syllabus v4.0, Section 5.1.4).",
    option_rationales: {
      "ec-q32-a": "Faux. C'est l'effort historique, sans mise à l'échelle pour le nouveau projet.",
      "ec-q32-b":
        "Correct. 60 jours-hommes est la stricte application du ratio de productivité historique.",
      "ec-q32-c": "Faux. Calcul erroné.",
      "ec-q32-d": "Faux. C'est l'effort de développement, pas de test.",
    },
  },

  // Q33 Solution
  {
    question_id: "ec-q33",
    correct_option_ids: ["ec-q33-b"],
    explanation:
      "Pour exécuter TC2 ou TC4 (priorité 1), nous devons d'abord exécuter leur dépendance TC1 (priorité 3). Ainsi, TC1 doit passer en premier. Ensuite, nous exécutons les cas de priorité 1 (TC4 et TC2). Enfin, TC2 permet de débloquer TC3 (priorité 2), qui débloque TC5 (priorité 3). La séquence optimale est donc TC1 -> TC4 -> TC2 -> TC3 -> TC5 (Syllabus v4.0, Section 5.1.5).",
    option_rationales: {
      "ec-q33-a": "Faux. TC2 et TC4 dépendent de TC1, on ne peut pas les lancer avant TC1.",
      "ec-q33-b":
        "Correct. Cette séquence respecte parfaitement les priorités tout en débloquant les dépendances techniques de manière fluide.",
      "ec-q33-c": "Faux. Ne priorise pas le cas TC4 de priorité 1 par rapport à TC3 de priorité 2.",
      "ec-q33-d": "Faux. Séquence inversée violant toutes les dépendances.",
    },
  },

  // Q34 Solution
  {
    question_id: "ec-q34",
    correct_option_ids: ["ec-q34-d"],
    explanation:
      "Le quadrant Q4 du modèle de Brian Marick regroupe les tests non fonctionnels (performance, sécurité, robustesse) qui sont orientés technologie et évaluent le produit de manière critique (Syllabus v4.0, Section 5.1.7).",
    option_rationales: {
      "ec-q34-a":
        "Faux. Q1 contient les tests unitaires et d'intégration automatisés (soutien à l'équipe).",
      "ec-q34-b":
        "Faux. Q2 regroupe les tests fonctionnels et scénarios d'usage (soutien à l'équipe).",
      "ec-q34-c": "Faux. Q3 contient les tests d'acceptation utilisateur et tests d'usabilité.",
      "ec-q34-d":
        "Correct. Le quadrant Q4 est dédié aux caractéristiques de qualité non fonctionnelle (performance, sécurité).",
    },
  },

  // Q35 Solution
  {
    question_id: "ec-q35",
    correct_option_ids: ["ec-q35-b"],
    explanation:
      "Pour atténuer un risque produit identifié comme élevé (perte de données sur coupure), le plan de test doit prioriser l'exécution de scénarios de robustesse reproduisant précisément ces conditions d'échec pour s'assurer que le système conserve son intégrité (Syllabus v4.0, Section 5.2.4).",
    option_rationales: {
      "ec-q35-a":
        "Faux. Reporter un risque élevé est une mauvaise pratique majeure de gestion de projet.",
      "ec-q35-b":
        "Correct. Concevoir et exécuter des tests ciblant spécifiquement la robustesse face à cette coupure est la meilleure réponse au risque.",
      "ec-q35-c":
        "Faux. On ne peut pas simplement supprimer des comportements techniques critiques.",
      "ec-q35-d":
        "Faux. La performance de la page d'accueil ne couvre pas le risque d'intégrité des transactions.",
    },
  },

  // Q36 Solution
  {
    question_id: "ec-q36",
    correct_option_ids: ["ec-q36-b"],
    explanation:
      "Pour suivre l'état de l'implémentation (ou préparation) des tests, mesurer le pourcentage de cas de test rédigés, revus et intégrés au dépôt par rapport à la cible estimée est la métrique de suivi idéale (Syllabus v4.0, Section 5.3.2).",
    option_rationales: {
      "ec-q36-a": "Faux. C'est une métrique de développement.",
      "ec-q36-b":
        "Correct. Cette métrique mesure exactement l'avancement de la phase d'implémentation des tests.",
      "ec-q36-c":
        "Faux. Le nombre de réunions ne reflète en rien la qualité ou l'avancement des tests.",
      "ec-q36-d": "Faux. C'est une métrique financière globale.",
    },
  },

  // Q37 Solution
  {
    question_id: "ec-q37",
    correct_option_ids: ["ec-q37-b"],
    explanation:
      "La gestion de la configuration garantit la traçabilité et l'intégrité de tous les artefacts logiciels (exigences, code, cas de test, anomalies) en s'assurant qu'ils sont versionnés de façon unique et cohérente (Syllabus v4.0, Section 5.4.1).",
    option_rationales: {
      "ec-q37-a": "Faux. C'est le rôle des ressources humaines ou de la direction.",
      "ec-q37-b":
        "Correct. C'est le but premier de la gestion de configuration d'assurer le versioning et l'intégrité des artefacts.",
      "ec-q37-c": "Faux. Relève des achats ou de la logistique.",
      "ec-q37-d": "Faux. Relève du management d'équipe.",
    },
  },

  // Q38 Solution
  {
    question_id: "ec-q38",
    correct_option_ids: ["ec-q38-b"],
    explanation:
      "Un rapport d'anomalie utile doit impérativement contenir les étapes précises étape par étape pour reproduire le bug, les données de test saisies, la version de l'application et les comportements attendus vs réels (Syllabus v4.0, Section 5.5.1).",
    option_rationales: {
      "ec-q38-a":
        "Faux. Le nom est souvent rempli automatiquement et n'aide pas à reproduire le bug.",
      "ec-q38-b":
        "Correct. Les étapes de reproduction détaillées sont l'élément le plus critique manquant ici.",
      "ec-q38-c": "Faux. L'estimation du coût est faite par la direction ou le tech lead.",
      "ec-q38-d":
        "Faux. Les avis personnels subjectifs n'ont pas leur place dans un rapport d'anomalie.",
    },
  },

  // Q39 Solution
  {
    question_id: "ec-q39",
    correct_option_ids: ["ec-q39-b"],
    explanation:
      "Les outils d'analyse statique du code analysent le code source ou d'autres artefacts écrits sans exécuter le programme afin de trouver des erreurs de syntaxe, des violations de normes ou des failles de sécurité (Syllabus v4.0, Section 6.1.1).",
    option_rationales: {
      "ec-q39-a":
        "Faux. Les outils de performance exécutent activement le logiciel (test dynamique).",
      "ec-q39-b":
        "Correct. Les outils d'analyse statique vérifient le code sans exécution dynamique.",
      "ec-q39-c": "Faux. Ils gèrent l'exécution des scénarios.",
      "ec-q39-d": "Faux. Ils simulent des configurations d'exécution.",
    },
  },

  // Q40 Solution
  {
    question_id: "ec-q40",
    correct_option_ids: ["ec-q40-a"],
    explanation:
      "Un risque majeur d'automatisation des tests est d'avoir des attentes irréalistes à court terme, en oubliant l'effort significatif requis pour configurer, maintenir et mettre à jour les scripts de test à chaque modification fonctionnelle (Syllabus v4.0, Section 6.2.1).",
    option_rationales: {
      "ec-q40-a":
        "Correct. Sous-estimer l'effort de maintenance et surestimer les gains immédiats est le risque classique de l'automatisation.",
      "ec-q40-b": "Faux. Les tests automatisés s'intègrent au contraire très bien avec la CI/CD.",
      "ec-q40-c": "Faux. L'automatisation vise au contraire à réduire les défauts échappés.",
      "ec-q40-d": "Faux. Affirmation subjective dénuée de fondement.",
    },
  },
];
