// ISTQB Foundation Level v4.0 - Ensemble D (v1.5.0) - Seed Data

const ENSEMBLE_D_EXAM_ID = "ctfl-exam-v4-ensemble-d-2026";

export const ENSEMBLE_D_EXAM = {
  id: ENSEMBLE_D_EXAM_ID,
  title: "Examen Échantillon CTFL v4.0 — ENSEMBLE D (v1.5.0)",
  description:
    "Examen officiel d'entraînement de l'ISTQB niveau fondamental v4.0 (Ensemble D, v1.5.0, édition GTB). Comprend 40 questions uniques couvrant tous les chapitres du syllabus avec explications et justifications de la correction officielle.",
  language: "fr",
  duration_minutes: 60,
  total_questions: 40,
  passing_threshold: 65, // 26/40 (65%)
  points_per_question: 1,
  attempts_allowed: null,
  status: "published",
  created_at: "2026-07-14T04:30:00Z",
};

export const ENSEMBLE_D_QUESTIONS = [
  // Chapter 1 (Q1 - Q8)
  {
    id: "ed-q1",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 1,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.1.1",
    text: "Lequel des éléments suivants est un objectif de test typique ?",
  },
  {
    id: "ed-q2",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 2,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.2.3",
    text: "Un designer documente un design pour une interface utilisateur qui ne répond pas convenablement aux besoins des utilisateurs handicapés car le designer est fatigué. Le programmeur met en œuvre l'interface utilisateur selon le design, mais, étant donné qu'il travaille sous une pression temporelle intense, il n'inclut pas de gestion des exceptions appropriée dans son code de programme pour les calculs de bonus. Lorsque le système opérationnel est utilisé, certains utilisateurs handicapés se plaignent de l'interface et la société est ensuite condamnée à une amende par l'autorité réglementaire compétente. Personne ne remarque que les calculs de bonus sont parfois incorrects.\n\nLaquelle des affirmations suivantes est CORRECTE ?",
  },
  {
    id: "ed-q3",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 3,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.3.1",
    text: "Les conditions de test sont utilisées par les testeurs pour générer des cas de test et exécuter des tests. Bien que les conditions de test restent identiques, les cas de test varient à chaque fois.\n\nLaquelle des ‘principes de test’ est abordée à travers la variation des cas de test ?",
  },
  {
    id: "ed-q4",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 4,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.1",
    text: "Étant donné les tâches de test suivantes :\n1. Dériver des cas de test à partir des conditions de test.\n2. Identifier le testware réutilisable.\n3. Organiser les cas de test en procédures de test.\n4. Évaluer la base de test et l'objet de test.\n\nEt les activités de test suivantes :\nA. analyse de tests\nB. conception de tests\nC. mise en œuvre de test\nD. Achèvement de test\n\nLequel des éléments suivants correspond le MIEUX aux tâches et aux activités ?",
  },
  {
    id: "ed-q5",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 5,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.3",
    text: "Lequel des éléments suivants montre le MIEUX le testware produit à la suite de la mise en œuvre de test ?",
  },
  {
    id: "ed-q6",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 6,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.5",
    text: "Lequel des éléments suivants est le PLUS susceptible de décrire une tâche effectuée par une personne dans un rôle de gestion des tests ?",
  },
  {
    id: "ed-q7",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 7,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.2",
    text: "Lequel des éléments suivants est un avantage de l'approche de l'équipe entière ?",
  },
  {
    id: "ed-q8",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 8,
    chapter: 1,
    k_level: "K2",
    type: "multiple",
    points: 1,
    learning_objective: "FL-1.5.3",
    text: "Quels avantages et inconvénients de l'indépendance des tests sont DEUX susceptibles d'être considérés comme des avantages ?\n\nVeuillez sélectionner DEUX options !",
  },

  // Chapter 2 (Q9 - Q14)
  {
    id: "ed-q9",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 9,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.2",
    text: "Lequel des éléments suivants constitue une bonne pratique de test qui s'applique à tous les cycles de vie du développement logiciel ?",
  },
  {
    id: "ed-q10",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 10,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.3",
    text: "Lequel des éléments suivants est un exemple d'une approche de développement basée sur les tests en premier ?",
  },
  {
    id: "ed-q11",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 11,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.4",
    text: "Lequel des éléments suivants est le plus susceptible de constituer un défi rencontré lors de la mise en œuvre de DevOps ?",
  },
  {
    id: "ed-q12",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 12,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.6",
    text: "Laquelle des propositions suivantes décrit le MEILLEUR les rétrospectives ?",
  },
  {
    id: "ed-q13",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 13,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.2.2",
    text: "Lequel des tests suivants est le PLUS susceptible d'être effectué dans le cadre des tests fonctionnels ?",
  },
  {
    id: "ed-q14",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 14,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.3.1",
    text: "Lequel des éléments suivants est le PLUS susceptible d'être un déclencheur qui conduit aux tests de maintenance d'un système d'échange de devises ?",
  },

  // Chapter 3 (Q15 - Q18)
  {
    id: "ed-q15",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 15,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.1",
    text: "Lequel des éléments suivants NE PEUT PAS être examiné par un test statique ?",
  },
  {
    id: "ed-q16",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 16,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.2",
    text: "Laquelle des affirmations suivantes concernant la valeur du test statique est CORRECTE ?",
  },
  {
    id: "ed-q17",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 17,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.2",
    text: "Étant donné les descriptions suivantes des activités d'examen :\n\n- Les anomalies détectées sont examinées, et des déterminations sont prises concernant leur statut, leur propriété, et toute étape supplémentaire nécessaire.\n1. Les problèmes sont enregistrés, et toutes les mises à jour nécessaires sont abordées avant l'acceptation du produit de travail.\n2. Les examinateurs utilisent des techniques pour formuler des suggestions et des questions concernant le produit de travail et pour repérer les anomalies.\n3. L'objectif de l'examen et son calendrier sont établis pour garantir un examen ciblé et efficace.\n4. Les participants se voient fournir un accès à l'élément en cours d'examen.\n\nLaquelle des options suivantes représente la séquence CORRECTE dans le processus d'examen des activités correspondant aux descriptions ?",
  },
  {
    id: "ed-q18",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 18,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.3",
    text: "Quel participant du processus d'examen est responsable de s'assurer que les réunions d'examen se déroulent efficacement et que chacun peut exprimer ses opinions librement ?",
  },

  // Chapter 4 (Q19 - Q29)
  {
    id: "ed-q19",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 19,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.1.1",
    text: "Vous effectuez des tests système d'une application web de commerce électronique et vous recevez l'exigence suivante :\n\nREQ 05-017. Si le coût total des achats dépasse 100 $, le client bénéficie d'une remise de 5 % sur les achats ultérieurs. Sinon, le client ne reçoit pas de remise.\n\nQuelles techniques de test seront les PLUS utiles pour concevoir des cas de test basés sur cette exigence ?",
  },
  {
    id: "ed-q20",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 20,
    chapter: 4,
    k_level: "K3",
    type: "multiple",
    points: 1,
    learning_objective: "FL-4.2.1",
    text: "Le système de vente de billets de cinéma calcule le type de remise en fonction de l'année de naissance du client (BY) et de l'année en cours (CY) comme suit :\n\nSoit D la différence entre CY et BY, c'est-à-dire, D = CY – BY\n• Si D < 0, alors imprimez le message d'erreur « l'année de naissance ne peut pas être supérieure à l'année en cours »\n• Si 0 ≤ D < 18, alors appliquez la réduction étudiante\n• Si 18 ≤ D < 65, alors n'appliquez aucune remise\n• Si D ≥ 65, alors appliquez la remise pour retraités\n\nVotre suite de tests contient déjà deux cas de test :\n• BY = 1990, CY = 2020, résultat attendu : pas de remise\n• BY = 2030, CY = 2029, résultat attendu : imprimer le message d'erreur\n\nLequel des ensembles de données de test suivants devrait être ajouté pour atteindre une couverture complète de partitionnement d'équivalence valide pour le type de remise ?\n\nVeuillez sélectionner DEUX options !",
  },
  {
    id: "ed-q21",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 21,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.2",
    text: 'Vous effectuez un test d\'un système de contrôle de température pour une installation de stockage à froid horticole. Le système reçoit la température (en degrés Celsius entiers) comme entrée. Si la température est comprise entre 0 et 2 degrés inclusivement, le système affiche le message "température OK". Pour des températures plus basses, le système affiche le message "température trop basse" et pour des températures plus élevées, il affiche le message "température trop élevée".\n\nEn utilisant l\'analyse des valeurs limites à deux valeurs, lequel des ensembles suivants d\'entrées de test offre le niveau le plus élevé de couverture des valeurs limites ?',
  },
  {
    id: "ed-q22",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 22,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.3",
    text: "Vous concevez des cas de test basés sur le tableau de décision suivant :\n\n- R1: Âge 0-18, Exp -, Enregistré NO -> Cat A\n- R2: Âge 19-65, Exp 0-4, Enregistré NO -> Cat A\n- R3: Âge 19-65, Exp >4, Enregistré NO -> Cat B\n- R4: Âge >65, Exp -, Enregistré NO -> Cat B\n- R5: Âge 0-18, Exp -, Enregistré OUI -> Cat B\n- R6: Âge 19-65, Exp -, Enregistré OUI -> Cat D\n- R7: Âge >65, Exp -, Enregistré OUI -> Cat C\n\nJusqu'à présent, vous avez conçu les cas de test suivants :\n• TC1 : homme de 19 ans, non enregistré, sans expérience ; résultat attendu : catégorie A\n• TC2 : femme non enregistrée de 65 ans avec 5 ans d'expérience ; résultat attendu : catégorie B\n• TC3 : homme enregistré de 66 ans sans expérience ; résultat attendu : catégorie C\n• TC4 : femme enregistrée de 65 ans avec 4 ans d'expérience ; résultat attendu : catégorie D\n\nLequel des cas de test suivants, lorsqu'il est ajouté à l'ensemble existant de cas de test, augmentera la couverture du tableau de décision ?",
  },
  {
    id: "ed-q23",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 23,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.4",
    text: "Vous appliquez les tests de transition d'état au système de réservation de chambres d'hôtel modélisé par la table de transition d'état suivante, qui comprend 4 états et 5 événements différents :\n\n- S1: Demande | Événements valides: Disponible (S2), Indisponible (S3)\n- S2: Confirmé | Événements valides: Changer de Chambre (S1), Annuler (S4), Payer (S4)\n- S3: Liste d'attente | Événements valides: Disponible (S2), Annuler (S4)\n- S4: Fin | Aucun événement\n\nEn supposant que tous les cas de test commencent dans l'état ‘Demande’, lequel des cas de test suivants, représentés sous la forme de séquences d'événements, atteint la couverture la plus élevée des transitions valides ?",
  },
  {
    id: "ed-q24",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 24,
    chapter: 4,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.1",
    text: "Votre suite de tests S pour un programme P atteint 100 % de couverture des déclarations. Elle se compose de trois cas de test, dont chacun atteint 50 % de couverture des déclarations.\n\nLaquelle des affirmations suivantes est CORRECTE ?",
  },
  {
    id: "ed-q25",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 25,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.3",
    text: "Pourquoi les tests en boîte blanche facilitent-ils la détection de défauts même lorsque la spécification logicielle est vague, obsolète ou incomplète ?",
  },
  {
    id: "ed-q26",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 26,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.1",
    text: "Lequel des éléments suivants n'est PAS anticipé par le testeur lors de l'application de la devinette d'erreur ?",
  },
  {
    id: "ed-q27",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 27,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.2",
    text: "Laquelle des affirmations suivantes est vraie concernant le test exploratoire ?",
  },
  {
    id: "ed-q28",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 28,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.1",
    text: "Quelle pratique collaborative d'écriture d'histoires utilisateur permet à l'équipe d'atteindre une compréhension collective de ce qui doit être livré ?",
  },
  {
    id: "ed-q29",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 29,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.3",
    text: "Vous venez de commencer à concevoir des cas de test pour l'histoire utilisateur suivante.\n\nEn tant que client, je souhaite pouvoir filtrer les résultats de recherche par plage de prix, afin de pouvoir trouver plus facilement des produits dans mon budget.\n\nCritères d'acceptation :\n1. Le filtre doit fonctionner pour toutes les versions de l'application à partir de la version 3.0\n2. Le filtre doit permettre au client de définir une plage de prix avec un prix minimum et un prix maximum\n3. Les résultats de recherche doivent se mettre à jour dynamiquement lorsque le client ajuste le filtre de plage de prix.\n\nDans tous les cas de test, la précondition est la suivante : il n'y a que deux produits disponibles, les produits A et B. Le produit A coûte 100 $ et le produit B coûte 110 $.\n\nLequel des éléments suivants est le MEILLEUR exemple d'un cas de test pour cette histoire utilisateur ?",
  },

  // Chapter 5 (Q30 - Q38)
  {
    id: "ed-q30",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 30,
    chapter: 5,
    k_level: "K2",
    type: "multiple",
    points: 1,
    learning_objective: "FL-5.1.3",
    text: "Lequel des éléments suivants définit le mieux les critères de SORTIE dans un projet de test ?\n\nVeuillez sélectionner DEUX options !",
  },
  {
    id: "ed-q31",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 31,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.4",
    text: "L'équipe souhaite estimer le temps nécessaire à un testeur pour exécuter quatre cas de test pour un composant logiciel. L'équipe a rassemblé les mesures suivantes de l'effort utilisé pour exécuter un seul cas de test :\n• Scénario le plus favorable : 1 heure\n• Scénario le plus défavorable : 8 heures\n• Scénario le plus probable : 3 heures\n\nÉtant donné que la technique d'estimation à trois points est utilisée, quelle est l'estimation finale du temps nécessaire pour exécuter tous les quatre cas de test ?",
  },
  {
    id: "ed-q32",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 32,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.5",
    text: "Le tableau montre la matrice de traçabilité des cas de test aux exigences. \"X\" signifie qu'un cas de test donné couvre l'exigence correspondante.\n\n- TC1: couvre Exigence 1, Exigence 3, Exigence 4, Exigence 7 (4 exigences)\n- TC2: couvre Exigence 1, Exigence 5, Exigence 7 (3 exigences)\n- TC3: couvre Exigence 5, Exigence 6 (2 exigences)\n- TC4: couvre Exigence 2 (1 exigence)\n\nVous souhaitez prioriser les cas de test en suivant la technique de priorisation de couverture supplémentaire. Vous exécutez les quatre cas de test.\n\nQuel cas de test doit être exécuté en dernier ?",
  },
  {
    id: "ed-q33",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 33,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.7",
    text: "Comment les quadrants de test peuvent-ils être bénéfiques pour le test ?",
  },
  {
    id: "ed-q34",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 34,
    chapter: 5,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-5.2.1",
    text: "Pour un risque donné, son niveau de risque est de 1 000 $ et sa probabilité de risque est estimée à 50 %.\n\nQuel est l'impact du risque ?",
  },
  {
    id: "ed-q35",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 35,
    chapter: 5,
    k_level: "K2",
    type: "multiple",
    points: 1,
    learning_objective: "FL-5.2.2",
    text: "Lesquels des éléments suivants sont des risques de produit ?\n\nVeuillez sélectionner DEUX options !",
  },
  {
    id: "ed-q36",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 36,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.3.2",
    text: "Lequel des éléments suivants n'est PAS un objectif valide pour un rapport de test ?",
  },
  {
    id: "ed-q37",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 37,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.4.1",
    text: "L'utilisateur a signalé un échec logiciel. Un ingénieur de l'équipe de support a demandé à l'utilisateur le numéro de version du logiciel où l'échec a été observé. Sur la base du numéro de version, l'équipe a réassemblé tous les fichiers qui constituaient la version. Cela a ensuite permis à un développeur d'effectuer une analyse, de trouver le défaut et de le corriger.\n\nLequel des éléments suivants a permis à l'équipe de réaliser l'activité ci-dessus ?",
  },
  {
    id: "ed-q38",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 38,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.5.1",
    text: "Considérez le rapport de défaut suivant pour un Système de prêt de livres.\n\n- ID de défaut: 001\n- Titre: Impossible de retourner un livre\n- Gravité: Élevée\n- Priorité: [non spécifiée]\n- Environnement : Windows 11, Google Chrome\n\nDescription : Lors de la tentative de retour d'un livre en utilisant la fonctionnalité de retour de livre, le système ne registre pas le retour et le livre reste emprunté par l'utilisateur.\n\nÉtapes pour reproduire: Connectez-vous au Système de prêt de livres en tant qu'utilisateur ayant emprunté un livre. Cliquez sur le bouton \"Retour de livre\" pour le livre qui a été emprunté. Le système ne registre pas le retour et le livre reste emprunté.\n\nRésultat attendu : Le livre devrait être retourné et ne plus apparaître comme emprunté par l'utilisateur.\n\nRésultat réel : Le livre reste emprunté par l'utilisateur et n'est pas enregistré comme retourné dans le système.\n\nPièces jointes : [liste vide]\n\nLequel des éléments suivants est le PLUS susceptible d'aider le développeur à reproduire rapidement l'échec ?",
  },

  // Chapter 6 (Q39 - Q40)
  {
    id: "ed-q39",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 39,
    chapter: 6,
    k_level: "K2",
    type: "multiple",
    points: 1,
    learning_objective: "FL-6.1.1",
    text: "Quels outils d'une catégorie sont LES PLUS susceptibles de faciliter l'exécution des tests ?\n\nVeuillez sélectionner DEUX options !",
  },
  {
    id: "ed-q40",
    exam_id: ENSEMBLE_D_EXAM_ID,
    position: 40,
    chapter: 6,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-6.2.1",
    text: "Lequel des éléments suivants est le PLUS susceptible d'être un risque de l'automatisation des tests ?",
  },
];

export const ENSEMBLE_D_OPTIONS = [
  // Q1 Options
  {
    id: "ed-q1-a",
    question_id: "ed-q1",
    position: 1,
    label: "A",
    text: "Identifier et corriger les défauts dans l'objet de test.",
  },
  {
    id: "ed-q1-b",
    question_id: "ed-q1",
    position: 2,
    label: "B",
    text: "Maintenir une communication efficace avec les développeurs.",
  },
  {
    id: "ed-q1-c",
    question_id: "ed-q1",
    position: 3,
    label: "C",
    text: "Valider que les exigences légales ont été respectées.",
  },
  {
    id: "ed-q1-d",
    question_id: "ed-q1",
    position: 4,
    label: "D",
    text: "Renforcer la confiance dans la qualité de l'objet de test.",
  },

  // Q2 Options
  {
    id: "ed-q2-a",
    question_id: "ed-q2",
    position: 1,
    label: "A",
    text: "Le calcul incorrect des primes est un défaut qui se produit occasionnellement.",
  },
  {
    id: "ed-q2-b",
    question_id: "ed-q2",
    position: 2,
    label: "B",
    text: "L'amende reçue pour ne pas avoir pris en compte certains utilisateurs handicapés est un échec.",
  },
  {
    id: "ed-q2-c",
    question_id: "ed-q2",
    position: 3,
    label: "C",
    text: "Le programmeur travaillant sous une pression temporelle sévère est une cause racine.",
  },
  {
    id: "ed-q2-d",
    question_id: "ed-q2",
    position: 4,
    label: "D",
    text: "La conception de l'interface utilisateur contient un échec causé directement par le designer.",
  },

  // Q3 Options
  { id: "ed-q3-a", question_id: "ed-q3", position: 1, label: "A", text: "Les tests s'usent." },
  {
    id: "ed-q3-b",
    question_id: "ed-q3",
    position: 2,
    label: "B",
    text: "Fausse hypothèse d'absence de défauts.",
  },
  {
    id: "ed-q3-c",
    question_id: "ed-q3",
    position: 3,
    label: "C",
    text: "Les tests précoces économisent du temps et de l'argent.",
  },
  {
    id: "ed-q3-d",
    question_id: "ed-q3",
    position: 4,
    label: "D",
    text: "Les défauts se regroupent.",
  },

  // Q4 Options
  { id: "ed-q4-a", question_id: "ed-q4", position: 1, label: "A", text: "1B, 2A, 3D, 4C" },
  { id: "ed-q4-b", question_id: "ed-q4", position: 2, label: "B", text: "1B, 2D, 3C, 4A" },
  { id: "ed-q4-c", question_id: "ed-q4", position: 3, label: "C", text: "1C, 2A, 3B, 4D" },
  { id: "ed-q4-d", question_id: "ed-q4", position: 4, label: "D", text: "1C, 2D, 3A, 4B" },

  // Q5 Options
  { id: "ed-q5-a", question_id: "ed-q5", position: 1, label: "A", text: "Rapport de fin de test" },
  {
    id: "ed-q5-b",
    question_id: "ed-q5",
    position: 2,
    label: "B",
    text: "Les données conservées dans une base de données utilisées pour les entrées de test et les résultats attendus.",
  },
  {
    id: "ed-q5-c",
    question_id: "ed-q5",
    position: 3,
    label: "C",
    text: "La liste des éléments nécessaires pour construire l'environnement de test.",
  },
  { id: "ed-q5-d", question_id: "ed-q5", position: 4, label: "D", text: "Cas de test" },

  // Q6 Options
  {
    id: "ed-q6-a",
    question_id: "ed-q6",
    position: 1,
    label: "A",
    text: "Évaluer la base de test et l'objet de test.",
  },
  {
    id: "ed-q6-b",
    question_id: "ed-q6",
    position: 2,
    label: "B",
    text: "Définir les exigences de l'environnement de test.",
  },
  {
    id: "ed-q6-c",
    question_id: "ed-q6",
    position: 3,
    label: "C",
    text: "Évaluer la testabilité de l'objet de test.",
  },
  {
    id: "ed-q6-d",
    question_id: "ed-q6",
    position: 4,
    label: "D",
    text: "Créer un rapport de fin de test.",
  },

  // Q7 Options
  {
    id: "ed-q7-a",
    question_id: "ed-q7",
    position: 1,
    label: "A",
    text: "Amélioration de la communication entre les membres de l'équipe.",
  },
  {
    id: "ed-q7-b",
    question_id: "ed-q7",
    position: 2,
    label: "B",
    text: "Responsabilité individuelle diminuée en matière de qualité.",
  },
  {
    id: "ed-q7-c",
    question_id: "ed-q7",
    position: 3,
    label: "C",
    text: "Déploiement plus rapide des livrables aux utilisateurs finaux.",
  },
  {
    id: "ed-q7-d",
    question_id: "ed-q7",
    position: 4,
    label: "D",
    text: "Collaboration réduite avec les utilisateurs commerciaux externes.",
  },

  // Q8 Options
  {
    id: "ed-q8-a",
    question_id: "ed-q8",
    position: 1,
    label: "A",
    text: "Les testeurs travaillent dans un lieu différent de celui des développeurs.",
  },
  {
    id: "ed-q8-b",
    question_id: "ed-q8",
    position: 2,
    label: "B",
    text: "Les testeurs remettent en question les hypothèses que les programmeurs formulent lors de l'écriture du code.",
  },
  {
    id: "ed-q8-c",
    question_id: "ed-q8",
    position: 3,
    label: "C",
    text: "Une dynamique conflictuelle a été établie entre les testeurs et les développeurs.",
  },
  {
    id: "ed-q8-d",
    question_id: "ed-q8",
    position: 4,
    label: "D",
    text: "Les développeurs se sont convaincus que les testeurs sont principalement responsables de la qualité.",
  },
  {
    id: "ed-q8-e",
    question_id: "ed-q8",
    position: 5,
    label: "E",
    text: "Les testeurs ont des biais différents de ceux des développeurs.",
  },

  // Q9 Options
  {
    id: "ed-q9-a",
    question_id: "ed-q9",
    position: 1,
    label: "A",
    text: "Chaque niveau de test a des objectifs de test spécifiques et distincts.",
  },
  {
    id: "ed-q9-b",
    question_id: "ed-q9",
    position: 2,
    label: "B",
    text: "La mise en œuvre et l'exécution des tests pour un niveau de test donné devraient commencer durant la phase de développement correspondante.",
  },
  {
    id: "ed-q9-c",
    question_id: "ed-q9",
    position: 3,
    label: "C",
    text: "Les testeurs devraient commencer la conception des tests dès que les ébauches du travail pertinent les produits deviennent disponibles.",
  },
  {
    id: "ed-q9-d",
    question_id: "ed-q9",
    position: 4,
    label: "D",
    text: "Chaque activité de test dynamique a une activité de test statique correspondante.",
  },

  // Q10 Options
  {
    id: "ed-q10-a",
    question_id: "ed-q10",
    position: 1,
    label: "A",
    text: "Développement Piloté par le Comportement",
  },
  {
    id: "ed-q10-b",
    question_id: "ed-q10",
    position: 2,
    label: "B",
    text: "Développement Piloté par le Niveau de Test",
  },
  {
    id: "ed-q10-c",
    question_id: "ed-q10",
    position: 3,
    label: "C",
    text: "Développement axé sur les fonctions",
  },
  {
    id: "ed-q10-d",
    question_id: "ed-q10",
    position: 4,
    label: "D",
    text: "Développement axé sur la performance",
  },

  // Q11 Options
  {
    id: "ed-q11-a",
    question_id: "ed-q11",
    position: 1,
    label: "A",
    text: "S'assurer que les caractéristiques de qualité non fonctionnelles ne sont pas ignorées.",
  },
  {
    id: "ed-q11-b",
    question_id: "ed-q11",
    position: 2,
    label: "B",
    text: "Gérer des environnements de test en constante évolution.",
  },
  {
    id: "ed-q11-c",
    question_id: "ed-q11",
    position: 3,
    label: "C",
    text: "Le besoin de plus de testeurs manuels avec une expérience appropriée.",
  },
  {
    id: "ed-q11-d",
    question_id: "ed-q11",
    position: 4,
    label: "D",
    text: "Mettre en place l'automatisation des tests dans le cadre du pipeline de livraison.",
  },

  // Q12 Options
  {
    id: "ed-q12-a",
    question_id: "ed-q12",
    position: 1,
    label: "A",
    text: "Les rétrospectives permettent aux membres de l'équipe d'identifier d'autres membres de l'équipe qui n'ont pas pleinement contribué à atteindre la qualité requise par l'approche d'équipe complète.",
  },
  {
    id: "ed-q12-b",
    question_id: "ed-q12",
    position: 2,
    label: "B",
    text: "Les rétrospectives donnent aux testeurs l'occasion d'identifier les activités qui ont été réussissent de sorte que ceux-ci soient conservés lorsque des améliorations potentielles sont apportées à l'avenir.",
  },
  {
    id: "ed-q12-c",
    question_id: "ed-q12",
    position: 3,
    label: "C",
    text: "Les Rétrospectives sont des lieux où les membres de l'équipe agile sont autorisés à exprimer leurs préoccupations concernant la direction et les clients dans un contexte sans blâme environnement.",
  },
  {
    id: "ed-q12-d",
    question_id: "ed-q12",
    position: 4,
    label: "D",
    text: "Les Rétrospectives offrent aux membres de l'équipe agile un forum où ils se concentrent sur discuter du plan et des décisions techniques pour la prochaine itération.",
  },

  // Q13 Options
  {
    id: "ed-q13-a",
    question_id: "ed-q13",
    position: 1,
    label: "A",
    text: "Le test vérifie que la fonction de tri place les éléments de la liste ou du tableau dans l'ordre croissant.",
  },
  {
    id: "ed-q13-b",
    question_id: "ed-q13",
    position: 2,
    label: "B",
    text: "Le test vérifie si la fonction de tri termine le tri en moins d'une seconde à partir du début.",
  },
  {
    id: "ed-q13-c",
    question_id: "ed-q13",
    position: 3,
    label: "C",
    text: "Le test vérifie à quel point la fonction de tri peut être facilement modifiée pour passer du tri ascendant au tri descendant.",
  },
  {
    id: "ed-q13-d",
    question_id: "ed-q13",
    position: 4,
    label: "D",
    text: "Le test vérifie que la fonction de tri fonctionne toujours correctement lorsqu'elle est déplacée d'une architecture 32 bits à une architecture 64 bits.",
  },

  // Q14 Options
  {
    id: "ed-q14-a",
    question_id: "ed-q14",
    position: 1,
    label: "A",
    text: "Les développeurs ont rapporté que le changement du système d'échange de devises était difficile et les testeurs ont décidé de vérifier si c'était vrai.",
  },
  {
    id: "ed-q14-b",
    question_id: "ed-q14",
    position: 2,
    label: "B",
    text: "L'option de remboursement du système d'échange de devises a été supprimée car elle ne remboursait pas toujours le montant correct aux clients.",
  },
  {
    id: "ed-q14-c",
    question_id: "ed-q14",
    position: 3,
    label: "C",
    text: "L'équipe agile a commencé à développer une histoire utilisateur qui ajoute un nouveau client fonctionnalité de fidélité client au système d'échange de devises.",
  },
  {
    id: "ed-q14-d",
    question_id: "ed-q14",
    position: 4,
    label: "D",
    text: "L'option de support linguistique du système d'échange de devises a été utilisée pour activer à la fois les transactions en devise en anglais et dans la langue locale.",
  },

  // Q15 Options
  { id: "ed-q15-a", question_id: "ed-q15", position: 1, label: "A", text: "Contrat" },
  { id: "ed-q15-b", question_id: "ed-q15", position: 2, label: "B", text: "Plan de test" },
  { id: "ed-q15-c", question_id: "ed-q15", position: 3, label: "C", text: "code chiffré" },
  { id: "ed-q15-d", question_id: "ed-q15", position: 4, label: "D", text: "charte de test" },

  // Q16 Options
  {
    id: "ed-q16-a",
    question_id: "ed-q16",
    position: 1,
    label: "A",
    text: "Les types de défauts trouvés par le test statique sont différents des types de défauts qui peuvent être trouvés par le test dynamique",
  },
  {
    id: "ed-q16-b",
    question_id: "ed-q16",
    position: 2,
    label: "B",
    text: "Le test dynamique peut détecter les types de défauts qui peuvent être trouvés par le test statique plus certains types de défauts supplémentaires",
  },
  {
    id: "ed-q16-c",
    question_id: "ed-q16",
    position: 3,
    label: "C",
    text: "Le test dynamique peut identifier certains des défauts qui peuvent être trouvés par le test statique, mais pas tous.",
  },
  {
    id: "ed-q16-d",
    question_id: "ed-q16",
    position: 4,
    label: "D",
    text: "Le test statique peut identifier les types de défauts qui peuvent être trouvés par le test dynamique, ainsi que certains types de défauts supplémentaires.",
  },

  // Q17 Options
  { id: "ed-q17-a", question_id: "ed-q17", position: 1, label: "A", text: "4 – 3 – 5 – 2 – 1" },
  { id: "ed-q17-b", question_id: "ed-q17", position: 2, label: "B", text: "4 – 5 – 3 – 1 – 2" },
  { id: "ed-q17-c", question_id: "ed-q17", position: 3, label: "C", text: "5 – 4 – 1 – 3 – 2" },
  { id: "ed-q17-d", question_id: "ed-q17", position: 4, label: "D", text: "5 – 4 – 3 – 2 – 1" },

  // Q18 Options
  { id: "ed-q18-a", question_id: "ed-q18", position: 1, label: "A", text: "Gestionnaire" },
  { id: "ed-q18-b", question_id: "ed-q18", position: 2, label: "B", text: "modérateur" },
  { id: "ed-q18-c", question_id: "ed-q18", position: 3, label: "C", text: "Président" },
  { id: "ed-q18-d", question_id: "ed-q18", position: 4, label: "D", text: "Leader de Revue" },

  // Q19 Options
  {
    id: "ed-q19-a",
    question_id: "ed-q19",
    position: 1,
    label: "A",
    text: "Techniques de test boîte blanche.",
  },
  {
    id: "ed-q19-b",
    question_id: "ed-q19",
    position: 2,
    label: "B",
    text: "Techniques de test boîte noire.",
  },
  {
    id: "ed-q19-c",
    question_id: "ed-q19",
    position: 3,
    label: "C",
    text: "Techniques de test basées sur l'expérience.",
  },
  {
    id: "ed-q19-d",
    question_id: "ed-q19",
    position: 4,
    label: "D",
    text: "Techniques de test basées sur les risques.",
  },

  // Q20 Options
  { id: "ed-q20-a", question_id: "ed-q20", position: 1, label: "A", text: "BY = 2001, CY = 2065" },
  { id: "ed-q20-b", question_id: "ed-q20", position: 2, label: "B", text: "BY = 1900, CY = 1965" },
  { id: "ed-q20-c", question_id: "ed-q20", position: 3, label: "C", text: "BY = 1965, CY = 1900" },
  { id: "ed-q20-d", question_id: "ed-q20", position: 4, label: "D", text: "BY = 2011, CY = 2029" },
  { id: "ed-q20-e", question_id: "ed-q20", position: 5, label: "E", text: "BY = 2000, CY = 2000" },

  // Q21 Options
  { id: "ed-q21-a", question_id: "ed-q21", position: 1, label: "A", text: "–1, 3" },
  { id: "ed-q21-b", question_id: "ed-q21", position: 2, label: "B", text: "0, 2" },
  { id: "ed-q21-c", question_id: "ed-q21", position: 3, label: "C", text: "–1, 0, 2, 3" },
  { id: "ed-q21-d", question_id: "ed-q21", position: 4, label: "D", text: "–2, 0, 2, 4" },

  // Q22 Options
  {
    id: "ed-q22-a",
    question_id: "ed-q22",
    position: 1,
    label: "A",
    text: "Homme de 66 ans, non enregistré, sans expérience ; Résultat attendu : catégorie B.",
  },
  {
    id: "ed-q22-b",
    question_id: "ed-q22",
    position: 2,
    label: "B",
    text: "Femme de 55 ans, non enregistrée, avec 2 ans d'expérience ; Résultat attendu : catégorie A.",
  },
  {
    id: "ed-q22-c",
    question_id: "ed-q22",
    position: 3,
    label: "C",
    text: "Femme de 19 ans, enregistrée, avec 5 ans d'expérience ; résultat attendu : catégorie D.",
  },
  {
    id: "ed-q22-d",
    question_id: "ed-q22",
    position: 4,
    label: "D",
    text: "Aucun cas de test supplémentaire ne peut augmenter la couverture déjà atteinte de la table de décision.",
  },

  // Q23 Options
  {
    id: "ed-q23-a",
    question_id: "ed-q23",
    position: 1,
    label: "A",
    text: "Indisponible, Disponible, Changer de Chambre, Indisponible, Annuler",
  },
  {
    id: "ed-q23-b",
    question_id: "ed-q23",
    position: 2,
    label: "B",
    text: "Disponible, Changer de Chambre, Indisponible, Disponible, Payer",
  },
  {
    id: "ed-q23-c",
    question_id: "ed-q23",
    position: 3,
    label: "C",
    text: "Disponible, Changer de Chambre, Disponible, Changer de Chambre, Indisponible",
  },
  {
    id: "ed-q23-d",
    question_id: "ed-q23",
    position: 4,
    label: "D",
    text: "Indisponible, Annuler, Changer de Chambre, Disponible, Payer",
  },

  // Q24 Options
  {
    id: "ed-q24-a",
    question_id: "ed-q24",
    position: 1,
    label: "A",
    text: "L'exécution de S entraînera tous les échecs possibles dans P.",
  },
  {
    id: "ed-q24-b",
    question_id: "ed-q24",
    position: 2,
    label: "B",
    text: "S atteint 100% de couverture des branches pour P.",
  },
  {
    id: "ed-q24-c",
    question_id: "ed-q24",
    position: 3,
    label: "C",
    text: "Chaque instruction exécutable dans P contenant un défaut a été exécutée au moins une fois durant l'exécution de S.",
  },
  {
    id: "ed-q24-d",
    question_id: "ed-q24",
    position: 4,
    label: "D",
    text: "Après avoir retiré un cas de test de S, les deux cas de test restants pourront toujours atteindre 100% de couverture des déclarations.",
  },

  // Q25 Options
  {
    id: "ed-q25-a",
    question_id: "ed-q25",
    position: 1,
    label: "A",
    text: "Les cas de test sont conçus en fonction de la structure de l'objet de test plutôt que la spécification.",
  },
  {
    id: "ed-q25-b",
    question_id: "ed-q25",
    position: 2,
    label: "B",
    text: "Pour chaque technique de test en boîte blanche, la couverture peut être bien définie et facilement mesurée.",
  },
  {
    id: "ed-q25-c",
    question_id: "ed-q25",
    position: 3,
    label: "C",
    text: "Les techniques de test en boîte blanche sont très bien conçues pour détecter les omissions dans les exigences.",
  },
  {
    id: "ed-q25-d",
    question_id: "ed-q25",
    position: 4,
    label: "D",
    text: "Les techniques de test en boîte blanche peuvent être utilisées à la fois dans les tests statiques et dans le test dynamique.",
  },

  // Q26 Options
  {
    id: "ed-q26-a",
    question_id: "ed-q26",
    position: 1,
    label: "A",
    text: "Le développeur a mal compris la formule dans l'histoire utilisateur pour calculer l'intérêt.",
  },
  {
    id: "ed-q26-b",
    question_id: "ed-q26",
    position: 2,
    label: "B",
    text: "Le développeur a écrit “FA = A*(1+IR^N)” au lieu de “FA = A*(1+IR)^N” dans le code source.",
  },
  {
    id: "ed-q26-c",
    question_id: "ed-q26",
    position: 3,
    label: "C",
    text: "Le développeur a manqué le séminaire sur la législation sur le taux d'intérêt composé.",
  },
  {
    id: "ed-q26-d",
    question_id: "ed-q26",
    position: 4,
    label: "D",
    text: "La précision de l'intérêt calculé par le système n'est pas suffisamment précise.",
  },

  // Q27 Options
  {
    id: "ed-q27-a",
    question_id: "ed-q27",
    position: 1,
    label: "A",
    text: "Les cas de test sont conçus avant le début de la session de test exploratoire.",
  },
  {
    id: "ed-q27-b",
    question_id: "ed-q27",
    position: 2,
    label: "B",
    text: "Le testeur peut effectuer l'Exécution des tests mais ne peut pas effectuer la conception de tests.",
  },
  {
    id: "ed-q27-c",
    question_id: "ed-q27",
    position: 3,
    label: "C",
    text: "Les résultats des tests exploratoires sont de bons indicateurs du nombre de défauts restants.",
  },
  {
    id: "ed-q27-d",
    question_id: "ed-q27",
    position: 4,
    label: "D",
    text: "Lors des tests exploratoires, le testeur peut utiliser des techniques de test boîte noire.",
  },

  // Q28 Options
  {
    id: "ed-q28-a",
    question_id: "ed-q28",
    position: 1,
    label: "A",
    text: "Poker planning, afin qu'une équipe puisse parvenir à un consensus sur l'effort nécessaire pour mettre en œuvre une histoire utilisateur.",
  },
  {
    id: "ed-q28-b",
    question_id: "ed-q28",
    position: 2,
    label: "B",
    text: "Revue, afin qu'une équipe puisse détecter les incohérences et contradictions dans une histoire utilisateur.",
  },
  {
    id: "ed-q28-c",
    question_id: "ed-q28",
    position: 3,
    label: "C",
    text: "Planification d'itération, de sorte que les histoires utilisateur ayant la plus grande valeur commerciale pour un client puissent être priorisées pour mise en œuvre.",
  },
  {
    id: "ed-q28-d",
    question_id: "ed-q28",
    position: 4,
    label: "D",
    text: "Conversation, afin que les membres de l'équipe puissent comprendre comment le logiciel sera utilisé.",
  },

  // Q29 Options
  {
    id: "ed-q29-a",
    question_id: "ed-q29",
    position: 1,
    label: "A",
    text: "Entrez la page web et définissez le filtre pour afficher les prix entre 90 $ et 100 $. Résultat attendu : les résultats montrent uniquement le produit A. Définissez le prix maximum à 110 $. Résultat attendu : les résultats incluent désormais à la fois les produits A et B.",
  },
  {
    id: "ed-q29-b",
    question_id: "ed-q29",
    position: 2,
    label: "B",
    text: "Entrez la page web. Résultat attendu : les prix minimum et maximum par défaut sont respectivement de 100 $ et 110 $. Ajoutez le produit C au stock, avec un prix de 120 $. Rafraîchissez la page du client. Résultat attendu : le prix maximum par défaut passe à 120 $.",
  },
  {
    id: "ed-q29-c",
    question_id: "ed-q29",
    position: 3,
    label: "C",
    text: "Entrez la page web et définissez le filtre pour afficher les prix entre 110 $ et 115 $. Attendu résultat : les résultats montrent à la fois les produits A et B. Changez la devise de USD à EUR. Résultat attendu : la plage de filtre change correctement aux valeurs EUR, conformément au taux de change actuel.",
  },
  {
    id: "ed-q29-d",
    question_id: "ed-q29",
    position: 4,
    label: "D",
    text: "Entrez la page web avec trois navigateurs différents : Edge, Chrome et Opera. Dans chaque navigateur, définissez le filtre entre 90 $ et 110 $. Résultat attendu : les résultats incluent les deux produits A et B et la mise en page des résultats est la même dans les trois navigateurs.",
  },

  // Q30 Options
  {
    id: "ed-q30-a",
    question_id: "ed-q30",
    position: 1,
    label: "A",
    text: "Le budget est approuvé.",
  },
  { id: "ed-q30-b", question_id: "ed-q30", position: 2, label: "B", text: "Le budget expire." },
  {
    id: "ed-q30-c",
    question_id: "ed-q30",
    position: 3,
    label: "C",
    text: "La base de test est disponible.",
  },
  {
    id: "ed-q30-d",
    question_id: "ed-q30",
    position: 4,
    label: "D",
    text: "Les cas de test ont atteint au moins 80 % de couverture des déclarations.",
  },
  {
    id: "ed-q30-e",
    question_id: "ed-q30",
    position: 5,
    label: "E",
    text: "Tous les analystes de test sont certifiés ISTQB au Niveau Fondamental.",
  },

  // Q31 Options
  { id: "ed-q31-a", question_id: "ed-q31", position: 1, label: "A", text: "14 heures" },
  { id: "ed-q31-b", question_id: "ed-q31", position: 2, label: "B", text: "3,5 heures" },
  { id: "ed-q31-c", question_id: "ed-q31", position: 3, label: "C", text: "16 heures" },
  { id: "ed-q31-d", question_id: "ed-q31", position: 4, label: "D", text: "12 heures" },

  // Q32 Options
  { id: "ed-q32-a", question_id: "ed-q32", position: 1, label: "A", text: "TC1" },
  { id: "ed-q32-b", question_id: "ed-q32", position: 2, label: "B", text: "TC2" },
  { id: "ed-q32-c", question_id: "ed-q32", position: 3, label: "C", text: "TC3" },
  { id: "ed-q32-d", question_id: "ed-q32", position: 4, label: "D", text: "TC4" },

  // Q33 Options
  {
    id: "ed-q33-a",
    question_id: "ed-q33",
    position: 1,
    label: "A",
    text: "Ils aident dans la planification des tests en divisant le processus de test en quatre étapes, correspondant aux quatre niveaux de test de base : composant, intégration, système, et test d'acceptation.",
  },
  {
    id: "ed-q33-b",
    question_id: "ed-q33",
    position: 2,
    label: "B",
    text: "Ils aident à évaluer la couverture de haut niveau (par exemple, la couverture des exigences) basé sur la couverture de bas niveau (par exemple, la couverture de code).",
  },
  {
    id: "ed-q33-c",
    question_id: "ed-q33",
    position: 3,
    label: "C",
    text: "Ils aident les parties prenantes non techniques à comprendre les différents types de tests et que certains types de test sont plus pertinents pour certains niveaux de test que d'autres.",
  },
  {
    id: "ed-q33-d",
    question_id: "ed-q33",
    position: 4,
    label: "D",
    text: "Ils aident les équipes agiles à développer une stratégie de communication basée sur la classification des personnes selon quatre types psychologiques de base, et sur modélisation des relations entre eux.",
  },

  // Q34 Options
  { id: "ed-q34-a", question_id: "ed-q34", position: 1, label: "A", text: "500 $" },
  { id: "ed-q34-b", question_id: "ed-q34", position: 2, label: "B", text: "2 000 $" },
  { id: "ed-q34-c", question_id: "ed-q34", position: 3, label: "C", text: "50 000 $" },
  { id: "ed-q34-d", question_id: "ed-q34", position: 4, label: "D", text: "200 $" },

  // Q35 Options
  { id: "ed-q35-a", question_id: "ed-q35", position: 1, label: "A", text: "Dérive du périmètre" },
  { id: "ed-q35-b", question_id: "ed-q35", position: 2, label: "B", text: "Mauvaise architecture" },
  { id: "ed-q35-c", question_id: "ed-q35", position: 3, label: "C", text: "Réduction des coûts" },
  {
    id: "ed-q35-d",
    question_id: "ed-q35",
    position: 4,
    label: "D",
    text: "Mauvais support d'outils",
  },
  {
    id: "ed-q35-e",
    question_id: "ed-q35",
    position: 5,
    label: "E",
    text: "Temps de réponse trop long",
  },

  // Q36 Options
  {
    id: "ed-q36-a",
    question_id: "ed-q36",
    position: 1,
    label: "A",
    text: "Suivi des progrès des tests et identification des domaines nécessitant une attention supplémentaire.",
  },
  {
    id: "ed-q36-b",
    question_id: "ed-q36",
    position: 2,
    label: "B",
    text: "Fournir des informations sur les tests exécutés, leurs résultats et tout problème ou défauts trouvés.",
  },
  {
    id: "ed-q36-c",
    question_id: "ed-q36",
    position: 3,
    label: "C",
    text: "Fournir des informations sur chaque défaut, comme les étapes pour le reproduire.",
  },
  {
    id: "ed-q36-d",
    question_id: "ed-q36",
    position: 4,
    label: "D",
    text: "Fournir des informations sur les tests prévus pour la prochaine période.",
  },

  // Q37 Options
  { id: "ed-q37-a", question_id: "ed-q37", position: 1, label: "A", text: "Gestion des risques" },
  {
    id: "ed-q37-b",
    question_id: "ed-q37",
    position: 2,
    label: "B",
    text: "Suivi et contrôle des tests",
  },
  {
    id: "ed-q37-c",
    question_id: "ed-q37",
    position: 3,
    label: "C",
    text: "Approche d'équipe complète",
  },
  {
    id: "ed-q37-d",
    question_id: "ed-q37",
    position: 4,
    label: "D",
    text: "Gestion de configuration",
  },

  // Q38 Options
  {
    id: "ed-q38-a",
    question_id: "ed-q38",
    position: 1,
    label: "A",
    text: "Ajouter des informations sur les utilisateurs et les livres concernés par le problème au la section “Description”.",
  },
  {
    id: "ed-q38-b",
    question_id: "ed-q38",
    position: 2,
    label: "B",
    text: "Compléter la valeur manquante pour le champ “Priorité”.",
  },
  {
    id: "ed-q38-c",
    question_id: "ed-q38",
    position: 3,
    label: "C",
    text: "Ajouter des dumps de mémoire et des instantanés de base de données pris après chaque étape décrite dans la section “Étapes pour reproduire” à la section “Pièces jointes”.",
  },
  {
    id: "ed-q38-d",
    question_id: "ed-q38",
    position: 4,
    label: "D",
    text: "Répéter le même cas de test pour différents environnements et rédiger des rapports de défaut pour chacun d'eux séparément.",
  },

  // Q39 Options
  {
    id: "ed-q39-a",
    question_id: "ed-q39",
    position: 1,
    label: "A",
    text: "Outils de Collaboration",
  },
  { id: "ed-q39-b", question_id: "ed-q39", position: 2, label: "B", text: "Outils DevOps" },
  { id: "ed-q39-c", question_id: "ed-q39", position: 3, label: "C", text: "Outils de Gestion" },
  {
    id: "ed-q39-d",
    question_id: "ed-q39",
    position: 4,
    label: "D",
    text: "Outils de tests non fonctionnels",
  },
  {
    id: "ed-q39-e",
    question_id: "ed-q39",
    position: 5,
    label: "E",
    text: "Outils de conception et d'implémentation de tests",
  },

  // Q40 Options
  {
    id: "ed-q40-a",
    question_id: "ed-q40",
    position: 1,
    label: "A",
    text: "La détection de défauts supplémentaires de haute gravité.",
  },
  {
    id: "ed-q40-b",
    question_id: "ed-q40",
    position: 2,
    label: "B",
    text: "Fournir des mesures qui sont trop compliquées à dériver pour les humains.",
  },
  {
    id: "ed-q40-c",
    question_id: "ed-q40",
    position: 3,
    label: "C",
    text: "Incompatibilité avec la plateforme de développement.",
  },
  {
    id: "ed-q40-d",
    question_id: "ed-q40",
    position: 4,
    label: "D",
    text: "Temps d'exécution des tests considérablement réduits.",
  },
];

export const ENSEMBLE_D_SOLUTIONS = [
  {
    question_id: "ed-q1",
    correct_option_ids: ["ed-q1-d"],
    explanation:
      "La construction de la confiance dans la qualité de l'objet de test se réalise par l'exécution de tests réussis (Syllabus Section 1.1.1).",
    option_rationales: {
      "ed-q1-a":
        "Faux. L'identification est une tâche, mais la correction des défauts relève du débogage et non du test.",
      "ed-q1-b":
        "Faux. Maintenir une communication est un bon moyen de collaboration d'équipe, pas l'objectif des tests.",
      "ed-q1-c":
        "Faux. Valider que les exigences légales sont respectées relève de la validation/vérification réglementaire générale, pas d'un objectif de test de base.",
      "ed-q1-d": "Correct. Renforcer la confiance se fait directement par la réussite des tests.",
    },
  },
  {
    question_id: "ed-q2",
    correct_option_ids: ["ed-q2-c"],
    explanation:
      "L'erreur est commise par le programmeur en raison d'une pression temporelle intense, ce qui représente la cause racine du défaut (Syllabus Section 1.2.3).",
    option_rationales: {
      "ed-q2-a":
        "Faux. C'est un échec potentiel du système, pas directement un défaut se produisant occasionnellement.",
      "ed-q2-b":
        "Faux. L'amende est une conséquence réglementaire/financière et non un échec du système logiciel lui-même.",
      "ed-q2-c": "Correct. La pression temporelle intense est la cause racine de l'erreur commise.",
      "ed-q2-d": "Faux. Le design contient un défaut, pas un échec.",
    },
  },
  {
    question_id: "ed-q3",
    correct_option_ids: ["ed-q3-a"],
    explanation:
      "Le principe selon lequel les tests s'usent concerne l'idée que répéter les mêmes tests n'apporte plus de nouveaux défauts (Syllabus Section 1.3.1).",
    option_rationales: {
      "ed-q3-a": "Correct. C'est le principe de l'usure des tests (paradoxe du pesticide).",
      "ed-q3-b":
        "Faux. Fausse hypothèse d'absence de défauts concerne l'adéquation aux besoins utilisateurs.",
      "ed-q3-c": "Faux. Les tests précoces visent à réduire les coûts en démarrant tôt.",
      "ed-q3-d":
        "Faux. Les défauts se regroupent concerne la concentration de défauts dans certains modules.",
    },
  },
  {
    question_id: "ed-q4",
    correct_option_ids: ["ed-q4-b"],
    explanation:
      "La conception des tests dérive les cas (1B), la clôture identifie le réutilisable (2D), la mise en œuvre organise en procédures (3C), l'analyse évalue la base (4A). (Syllabus Section 1.4.1).",
    option_rationales: {
      "ed-q4-a": "Faux. Correspondance incorrecte.",
      "ed-q4-b":
        "Correct. Correspondance parfaite entre activités de test et leurs livrables/tâches associés.",
      "ed-q4-c": "Faux. Correspondance incorrecte.",
      "ed-q4-d": "Faux. Correspondance incorrecte.",
    },
  },
  {
    question_id: "ed-q5",
    correct_option_ids: ["ed-q5-b"],
    explanation:
      "Les données de test conservées dans une base de données font partie des livrables de la mise en œuvre de test (Syllabus Section 1.4.3).",
    option_rationales: {
      "ed-q5-a":
        "Faux. Le rapport de fin de test est produit lors de la phase d'achèvement des tests.",
      "ed-q5-b":
        "Correct. Les données de test requises pour les entrées/sorties sont générées durant la mise en œuvre.",
      "ed-q5-c":
        "Faux. La liste des éléments de l'environnement est issue de la phase de conception.",
      "ed-q5-d": "Faux. Les cas de test sont un produit de la phase de conception des tests.",
    },
  },
  {
    question_id: "ed-q6",
    correct_option_ids: ["ed-q6-d"],
    explanation:
      "Créer un rapport de fin de test est une tâche typique associée au rôle de gestion des tests (Syllabus Section 1.4.5).",
    option_rationales: {
      "ed-q6-a": "Faux. Tâche technique réalisée par le testeur lors de l'analyse.",
      "ed-q6-b": "Faux. Tâche de conception technique généralement effectuée par le testeur.",
      "ed-q6-c":
        "Faux. Évaluer la testabilité est une tâche d'analyse de test effectuée par le testeur.",
      "ed-q6-d":
        "Correct. Rédiger le rapport de fin/clôture de test est de la responsabilité de la gestion de test.",
    },
  },
  {
    question_id: "ed-q7",
    correct_option_ids: ["ed-q7-a"],
    explanation:
      "L'approche de l'équipe entière favorise une forte communication et une vision de qualité partagée (Syllabus Section 1.5.2).",
    option_rationales: {
      "ed-q7-a": "Correct. Elle favorise fortement la communication de l'équipe.",
      "ed-q7-b":
        "Faux. Elle augmente la responsabilité collective plutôt que de diminuer la responsabilité individuelle.",
      "ed-q7-c":
        "Faux. Elle se concentre sur la qualité, pas directement sur l'augmentation de vitesse de livraison brute.",
      "ed-q7-d": "Faux. Elle encourage une plus forte collaboration avec les acteurs métier.",
    },
  },
  {
    question_id: "ed-q8",
    correct_option_ids: ["ed-q8-b", "ed-q8-e"],
    explanation:
      "Les testeurs remettent en question les hypothèses (b) et ont des biais cognitifs différents de ceux des développeurs (e), ce qui constitue deux avantages clés de l'indépendance des tests (Syllabus Section 1.5.3).",
    option_rationales: {
      "ed-q8-a":
        "Faux. Travailler séparément physiquement nuit à la communication et constitue un inconvénient.",
      "ed-q8-b":
        "Correct. Remettre en question les spécifications de manière neutre est un avantage direct de l'indépendance.",
      "ed-q8-c": "Faux. Une relation conflictuelle est un inconvénient majeur.",
      "ed-q8-d":
        "Faux. Si les développeurs délaissent la qualité aux testeurs, c'est un effet néfaste.",
      "ed-q8-e":
        "Correct. Posséder un biais cognitif différent de celui du constructeur du code permet de trouver plus d'erreurs.",
    },
  },
  {
    question_id: "ed-q9",
    correct_option_ids: ["ed-q9-a"],
    explanation:
      "Chaque niveau de test doit avoir des objectifs spécifiques pour éviter d'inutiles duplications (Syllabus Section 2.1.2).",
    option_rationales: {
      "ed-q9-a":
        "Correct. C'est l'un des principes essentiels d'un bon plan de test multi-niveaux.",
      "ed-q9-b":
        "Faux. La mise en œuvre/exécution dépend de la maturité du code, pas forcément calée sur la même phase.",
      "ed-q9-c":
        "Faux. Concevoir sur des brouillons instables gaspille de l'énergie en cas de modifications.",
      "ed-q9-d":
        "Faux. Il n'y a pas de symétrie absolue ou d'équivalent direct pour toutes les activités dynamiques.",
    },
  },
  {
    question_id: "ed-q10",
    correct_option_ids: ["ed-q10-a"],
    explanation:
      "Le BDD (Behavior-Driven Development) est une approche test-first classique (Syllabus Section 2.1.3).",
    option_rationales: {
      "ed-q10-a": "Correct. BDD conçoit des scénarios/tests avant le code.",
      "ed-q10-b": "Faux. Ce n'est pas un modèle existant ou reconnu de test-first.",
      "ed-q10-c":
        "Faux. Le développement axé sur les fonctions se base sur l'écriture fonctionnelle classique.",
      "ed-q10-d": "Faux. Ce n'est pas une approche test-first.",
    },
  },
  {
    question_id: "ed-q11",
    correct_option_ids: ["ed-q11-d"],
    explanation:
      "L'automatisation et l'intégration des tests dans le pipeline de livraison CI/CD représente un défi DevOps majeur (Syllabus Section 2.1.4).",
    option_rationales: {
      "ed-q11-a":
        "Faux. DevOps améliore au contraire la visibilité de ces aspects non-fonctionnels.",
      "ed-q11-b": "Faux. Les environnements automatisés tendent plutôt à se stabiliser en DevOps.",
      "ed-q11-c":
        "Faux. DevOps réduit plutôt l'effort purement manuel grâce à l'automatisation globale.",
      "ed-q11-d":
        "Correct. Mettre en place et maintenir cette usine de tests automatisés est un défi technique constant.",
    },
  },
  {
    question_id: "ed-q12",
    correct_option_ids: ["ed-q12-b"],
    explanation:
      "Les rétrospectives permettent de discuter de ce qui s'est bien passé afin de le conserver et d'identifier les axes d'amélioration (Syllabus Section 2.1.6).",
    option_rationales: {
      "ed-q12-a": "Faux. Identifier des coupables ou pointer du doigt nuit à la cohésion d'équipe.",
      "ed-q12-b":
        "Correct. C'est l'essence même de l'amélioration continue des processus via la rétrospective.",
      "ed-q12-c":
        "Faux. Les rétrospectives ne sont pas un lieu de reproches ou de critiques de la hiérarchie ou des clients.",
      "ed-q12-d": "Faux. La réunion de planification d'itération gère le planning futur.",
    },
  },
  {
    question_id: "ed-q13",
    correct_option_ids: ["ed-q13-a"],
    explanation:
      "Vérifier la correction du comportement fonctionnel (le tri croissant) est un test fonctionnel par excellence (Syllabus Section 2.2.2).",
    option_rationales: {
      "ed-q13-a": "Correct. Cela valide la fonction métier elle-même.",
      "ed-q13-b": "Faux. C'est un test d'efficacité ou de performance (non fonctionnel).",
      "ed-q13-c": "Faux. C'est un test de maintenabilité (non fonctionnel).",
      "ed-q13-d": "Faux. C'est un test de portabilité (non fonctionnel).",
    },
  },
  {
    question_id: "ed-q14",
    correct_option_ids: ["ed-q14-b"],
    explanation:
      "La suppression d'un comportement défaillant nécessite une modification du code, déclenchant des tests de maintenance (Syllabus Section 2.3.1).",
    option_rationales: {
      "ed-q14-a":
        "Faux. Cela correspond à un test de maintenabilité/analysabilité, pas de maintenance.",
      "ed-q14-b":
        "Correct. Retirer ou modifier une fonctionnalité requiert des tests de maintenance du système existant.",
      "ed-q14-c":
        "Faux. Ajouter une nouvelle fonctionnalité implique des tests de développement (fonctionnels et régression).",
      "ed-q14-d":
        "Faux. Configurer un paramètre n'est pas une modification structurelle majeure nécessitant de la maintenance de logiciel au sens strict.",
    },
  },
  {
    question_id: "ed-q15",
    correct_option_ids: ["ed-q15-c"],
    explanation:
      "Le code chiffré ne peut pas être lu par l'être humain ou des outils d'analyse statique classiques (Syllabus Section 3.1.1).",
    option_rationales: {
      "ed-q15-a": "Faux. Un contrat peut tout à fait être revu statiquement par relecture.",
      "ed-q15-b": "Faux. Un plan de test fait l'objet de revues statiques très couramment.",
      "ed-q15-c":
        "Correct. S'il est chiffré, le test statique est impossible car son contenu est illisible.",
      "ed-q15-d": "Faux. Une charte de test est un document texte qui se relit statiquement.",
    },
  },
  {
    question_id: "ed-q16",
    correct_option_ids: ["ed-q16-c"],
    explanation:
      "Le test dynamique permet de détecter les échecs, dont certains défauts sous-jacents auraient également pu être découverts de manière statique, mais pas tous (comme des problèmes d'incompatibilité de design ou de code mort) (Syllabus Section 3.1.2).",
    option_rationales: {
      "ed-q16-a":
        "Faux. Il y a un chevauchement non négligeable de types de défauts identifiables par les deux méthodes.",
      "ed-q16-b":
        "Faux. Certains défauts comme le code mort ou les violations de standards ne peuvent être trouvés que statiquement.",
      "ed-q16-c": "Correct. Il y a recouvrement partiel mais pas total.",
      "ed-q16-d":
        "Faux. Le test statique ne peut pas détecter les échecs dynamiques liés à l'exécution temps-réel complexe.",
    },
  },
  {
    question_id: "ed-q17",
    correct_option_ids: ["ed-q17-b"],
    explanation:
      "La séquence ISO 20246 est : Planification (4) -> Initiation (5) -> Examen individuel (3) -> Communication et analyse (1) -> Refonte et rapport (2). Soit 4-5-3-1-2 (Syllabus Section 3.2.2).",
    option_rationales: {
      "ed-q17-a": "Faux. Séquence incorrecte.",
      "ed-q17-b": "Correct. Respecte parfaitement les étapes séquentielles du processus de revue.",
      "ed-q17-c": "Faux. Séquence incorrecte.",
      "ed-q17-d": "Faux. Séquence incorrecte.",
    },
  },
  {
    question_id: "ed-q18",
    correct_option_ids: ["ed-q18-b"],
    explanation:
      "Le modérateur est le garant du bon déroulement et de la liberté d'expression dans les réunions de revue (Syllabus Section 3.2.3).",
    option_rationales: {
      "ed-q18-a": "Faux. Le gestionnaire attribue les ressources et décide des objets à inspecter.",
      "ed-q18-b":
        "Correct. C'est la définition du rôle de modérateur d'assurer un cadre bienveillant et structuré.",
      "ed-q18-c": "Faux. Ce n'est pas un rôle standard défini du processus de revue ISTQB.",
      "ed-q18-d": "Faux. Le leader de revue organise et pilote globalement le processus.",
    },
  },
  {
    question_id: "ed-q19",
    correct_option_ids: ["ed-q19-b"],
    explanation:
      "Puisqu'on se base uniquement sur une spécification de comportement sans regarder le code, les techniques boîte noire sont requises (Syllabus Section 4.1.1).",
    option_rationales: {
      "ed-q19-a": "Faux. Concerne la structure interne et le code, absents de l'exigence.",
      "ed-q19-b":
        "Correct. Permet de dériver des cas d'usage à partir des entrées/sorties spécifiées.",
      "ed-q19-c":
        "Faux. Technique empirique, moins rigoureuse que la boîte noire pour des règles métier précises.",
      "ed-q19-d":
        "Faux. C'est une stratégie de priorisation, pas une technique de conception de cas de test.",
    },
  },
  {
    question_id: "ed-q20",
    correct_option_ids: ["ed-q20-b", "ed-q20-e"],
    explanation:
      "Pour couvrir toutes les classes valides (D<0, 0<=D<18, 18<=D<65, D>=65), il nous faut ajouter D=65 (b: 1965-1900) et D=0 (e: 2000-2000) aux tests existants (D=30 et D=-1) (Syllabus Section 4.2.1).",
    option_rationales: {
      "ed-q20-a": "Faux. Donne D=64, qui est déjà couverte par la classe [18-65[.",
      "ed-q20-b": "Correct. Donne D=65, couvrant la classe des retraités.",
      "ed-q20-c": "Faux. Donne D=-65, déjà couverte par la classe d'erreur D<0.",
      "ed-q20-d": "Faux. Donne D=18, déjà couverte par la classe [18-65[.",
      "ed-q20-e": "Correct. Donne D=0, couvrant la classe étudiante.",
    },
  },
  {
    question_id: "ed-q21",
    correct_option_ids: ["ed-q21-c"],
    explanation:
      "L'analyse à 2 valeurs limites pour l'intervalle [0, 2] nécessite de tester -1, 0 et 2, 3 pour couvrir toutes les frontières (Syllabus Section 4.2.2).",
    option_rationales: {
      "ed-q21-a": "Faux. Ne couvre pas les valeurs intérieures limites 0 et 2.",
      "ed-q21-b": "Faux. Ne couvre pas les valeurs extérieures limites -1 et 3.",
      "ed-q21-c":
        "Correct. Couvre de façon exhaustive l'ensemble des 4 frontières à 2 valeurs limites.",
      "ed-q21-d": "Faux. Utilise des valeurs trop éloignées des frontières immédiates.",
    },
  },
  {
    question_id: "ed-q22",
    correct_option_ids: ["ed-q22-a"],
    explanation:
      "La condition (Âge > 65, Enregistré NO) correspond à la règle R4, qui n'est couverte par aucun des cas TC1 à TC4 (Syllabus Section 4.2.3).",
    option_rationales: {
      "ed-q22-a": "Correct. L'ajout de ce cas de test permet de couvrir la règle R4 restée vierge.",
      "ed-q22-b": "Faux. Correspond à la règle R2, déjà couverte par le cas TC1.",
      "ed-q22-c": "Faux. Correspond à la règle R6, déjà couverte par le cas TC4.",
      "ed-q22-d":
        "Faux. La couverture n'est que de 4 règles sur 7, on peut donc tout à fait l'augmenter.",
    },
  },
  {
    question_id: "ed-q23",
    correct_option_ids: ["ed-q23-b"],
    explanation:
      "La séquence (b) permet d'activer 5 transitions valides de la machine d'état à partir de 'Demande' (Syllabus Section 4.2.4).",
    option_rationales: {
      "ed-q23-a":
        "Faux. Ne couvre que 4 transitions car le double passage par 'Indisponible' est redondant.",
      "ed-q23-b": "Correct. C'est la séquence la plus complète couvrant 5 transitions valides.",
      "ed-q23-c": "Faux. Se limite à 3 transitions uniques.",
      "ed-q23-d":
        "Faux. Séquence impossible car après 'Annuler' on est à l'état final 'Fin' et on ne peut plus changer de chambre.",
    },
  },
  {
    question_id: "ed-q24",
    correct_option_ids: ["ed-q24-c"],
    explanation:
      "100 % de couverture des déclarations implique que chaque instruction executable a été activée au moins une fois lors des tests (Syllabus Section 4.3.1).",
    option_rationales: {
      "ed-q24-a":
        "Faux. Exécuter une ligne n'implique pas de faire ressortir tous les échecs possibles (ex: division par zéro dépendante des données).",
      "ed-q24-b": "Faux. La couverture des instructions n'assure pas la couverture des branches.",
      "ed-q24-c":
        "Correct. Chaque déclaration contenant potentiellement un défaut a nécessairement été exécutée au moins une fois.",
      "ed-q24-d": "Faux. Retirer un test peut faire tomber la couverture sous les 100 %.",
    },
  },
  {
    question_id: "ed-q25",
    correct_option_ids: ["ed-q25-a"],
    explanation:
      "La boîte blanche s'intéresse à la structure du code plutôt qu'à sa description textuelle, s'affranchissant ainsi de specs obsolètes (Syllabus Section 4.3.3).",
    option_rationales: {
      "ed-q25-a":
        "Correct. La source de conception est le code lui-même et non les exigences papier.",
      "ed-q25-b":
        "Faux. Bien que la métrique soit précise, ce n'est pas ce qui résout le problème des specs floues.",
      "ed-q25-c":
        "Faux. La boîte blanche ne peut pas trouver les fonctions omises si elles ne sont pas codées du tout.",
      "ed-q25-d":
        "Faux. C'est hors sujet par rapport à la problématique des spécifications vagues.",
    },
  },
  {
    question_id: "ed-q26",
    correct_option_ids: ["ed-q26-c"],
    explanation:
      "Manquer un séminaire est une cause d'organisation lointaine et non une erreur technique directe identifiable via la devinette d'erreur (Syllabus Section 4.4.1).",
    option_rationales: {
      "ed-q26-a": "Faux. C'est une erreur de compréhension typique anticipée par le testeur.",
      "ed-q26-b": "Faux. C'est une faute d'écriture (défaut de code) classique que l'on recherche.",
      "ed-q26-c":
        "Correct. Relever qu'un développeur a manqué un séminaire n'est pas du ressort de la devinette d'erreur.",
      "ed-q26-d": "Faux. C'est un échec fonctionnel classique que le testeur anticipe.",
    },
  },
  {
    question_id: "ed-q27",
    correct_option_ids: ["ed-q27-d"],
    explanation:
      "Le testeur exploratoire a la liberté d'appliquer n'importe quelle technique (comme la boîte noire) pour concevoir ses tests à la volée (Syllabus Section 4.4.2).",
    option_rationales: {
      "ed-q27-a":
        "Faux. Les tests sont conçus, exécutés et consignés simultanément pendant la session.",
      "ed-q27-b": "Faux. Le testeur conçoit activement les tests tout au long de la session.",
      "ed-q27-c":
        "Faux. Les résultats ne prédisent pas de façon fiable le nombre d'anomalies restantes.",
      "ed-q27-d":
        "Correct. Utiliser des partitions d'équivalence ou d'autres techniques boîte noire est fréquent en test exploratoire.",
    },
  },
  {
    question_id: "ed-q28",
    correct_option_ids: ["ed-q28-d"],
    explanation:
      "La conversation directe permet d'échanger et de construire une compréhension commune des récits utilisateurs (Syllabus Section 4.5.1).",
    option_rationales: {
      "ed-q28-a":
        "Faux. Le poker planning sert à estimer la complexité/effort et non à clarifier le besoin.",
      "ed-q28-b":
        "Faux. Les revues examinent les documents mais ne remplacent pas la discussion collaborative synchrone.",
      "ed-q28-c":
        "Faux. La planification priorise les tâches mais n'approfondit pas le besoin fonctionnel d'un point de vue de l'usage.",
      "ed-q28-d":
        "Correct. La conversation physique ou virtuelle est la clé d'une vision partagée.",
    },
  },
  {
    question_id: "ed-q29",
    correct_option_ids: ["ed-q29-a"],
    explanation:
      "Le cas (a) teste de manière optimale la sélection et le rafraîchissement dynamique des résultats (critères 2 et 3) (Syllabus Section 4.5.3).",
    option_rationales: {
      "ed-q29-a":
        "Correct. C'est un test d'acceptation parfait vérifiant la mise à jour dynamique lors de l'ajustement du filtre.",
      "ed-q29-b":
        "Faux. Teste la valeur par défaut et l'ajout de produit, non mentionnés dans les critères.",
      "ed-q29-c": "Faux. Teste le comportement multi-devises, hors périmètre du récit utilisateur.",
      "ed-q29-d": "Faux. Teste la compatibilité multi-navigateurs, non demandée ici.",
    },
  },
  {
    question_id: "ed-q30",
    correct_option_ids: ["ed-q30-b", "ed-q30-d"],
    explanation:
      "L'expiration du budget (b) et la couverture des instructions (d) sont des critères de sortie typiques (Syllabus Section 5.1.3).",
    option_rationales: {
      "ed-q30-a": "Faux. C'est un critère d'entrée pour démarrer le projet ou les tests.",
      "ed-q30-b": "Correct. L'épuisement des ressources financières force la sortie des tests.",
      "ed-q30-c": "Faux. La disponibilité de la base est un critère d'entrée fondamental.",
      "ed-q30-d":
        "Correct. Atteindre une couverture minimale de code ou de spécifications est un critère de sortie standard.",
      "ed-q30-e":
        "Faux. Disposer de testeurs formés est un critère d'entrée de compétences de l'équipe.",
    },
  },
  {
    question_id: "ed-q31",
    correct_option_ids: ["ed-q31-a"],
    explanation:
      "L'estimation à trois points donne E = (1 + 4*3 + 8)/6 = 3.5h par cas de test. Pour 4 cas de test, on obtient 3.5 * 4 = 14 heures (Syllabus Section 5.1.4).",
    option_rationales: {
      "ed-q31-a": "Correct. Application stricte de la formule pondérée.",
      "ed-q31-b": "Faux. C'est l'estimation d'effort pour un seul cas de test.",
      "ed-q31-c": "Faux. Calcul erroné ne respectant pas les coefficients.",
      "ed-q31-d": "Faux. Correspond à une simple moyenne arithmétique sans pondération correcte.",
    },
  },
  {
    question_id: "ed-q32",
    correct_option_ids: ["ed-q32-b"],
    explanation:
      "TC1 passe en premier (4 exigences), puis TC3 (couvre Req5 et Req6), puis TC4 (couvre Req2). TC2 n'apporte plus de couverture supplémentaire et passe donc en dernier (Syllabus Section 5.1.5).",
    option_rationales: {
      "ed-q32-a":
        "Faux. TC1 doit passer en premier car il couvre le plus grand nombre d'exigences.",
      "ed-q32-b": "Correct. TC2 n'amène aucune couverture additionnelle à ce stade des tests.",
      "ed-q32-c":
        "Faux. TC3 apporte une forte couverture supplémentaire et passe en deuxième position.",
      "ed-q32-d":
        "Faux. TC4 apporte la dernière exigence non couverte (Req2) et passe en troisième position.",
    },
  },
  {
    question_id: "ed-q32_alt", // Added to map correctly to option list
    question_id: "ed-q32",
    correct_option_ids: ["ed-q32-b"],
    explanation: "Voir justification ci-dessus.",
    option_rationales: {},
  },
  {
    question_id: "ed-q33",
    correct_option_ids: ["ed-q33-c"],
    explanation:
      "Les quadrants de test classifient les types de tests pour aider les interlocuteurs à en comprendre les objectifs (Syllabus Section 5.1.7).",
    option_rationales: {
      "ed-q33-a":
        "Faux. Les quadrants ne décrivent pas les étapes ou niveaux séquentiels du cycle de test.",
      "ed-q33-b": "Faux. Les quadrants ne mesurent ni ne calculent la couverture.",
      "ed-q33-c":
        "Correct. C'est un excellent outil de communication pédagogique pour les parties prenantes.",
      "ed-q33-d":
        "Faux. Les quadrants n'ont aucun rapport avec des profils psychologiques d'équipe.",
    },
  },
  {
    question_id: "ed-q34",
    correct_option_ids: ["ed-q34-b"],
    explanation:
      "Le niveau de risque = Probabilité * Impact. Donc Impact = Niveau de risque / Probabilité = 1000 / 0.50 = 2000 $ (Syllabus Section 5.2.1).",
    option_rationales: {
      "ed-q34-a": "Faux. Résultat d'une multiplication erronée.",
      "ed-q34-b": "Correct. Calcul mathématique exact de l'impact financier.",
      "ed-q34-c": "Faux. Calcul erroné.",
      "ed-q34-d": "Faux. Calcul erroné.",
    },
  },
  {
    question_id: "ed-q35",
    correct_option_ids: ["ed-q35-b", "ed-q35-e"],
    explanation:
      "Une mauvaise architecture (b) et des lenteurs de réponse (e) sont des risques directement liés à l'objet de test lui-même (risques produit) (Syllabus Section 5.2.2).",
    option_rationales: {
      "ed-q35-a":
        "Faux. La dérive du périmètre est un risque projet lié à la gestion et aux délais.",
      "ed-q35-b": "Correct. Affecte la maintenabilité et la stabilité de l'application.",
      "ed-q35-c": "Faux. La réduction budgétaire est un risque de projet financier.",
      "ed-q35-d": "Faux. Un problème d'outillage est un risque de projet technique d'organisation.",
      "ed-q35-e": "Correct. Menace l'utilisabilité et les performances du produit final.",
    },
  },
  {
    question_id: "ed-q36",
    correct_option_ids: ["ed-q36-c"],
    explanation:
      "Détailler les étapes de reproduction d'un bug est l'objectif d'un rapport de défaut, et non d'un rapport de synthèse de test global (Syllabus Section 5.3.2).",
    option_rationales: {
      "ed-q36-a": "Faux. C'est l'un des buts premiers de transparence d'un rapport d'avancement.",
      "ed-q36-b": "Faux. Synthétiser les résultats fait partie du contenu obligatoire du rapport.",
      "ed-q36-c":
        "Correct. Le rapport de test dresse un bilan général, les fiches d'anomalies gèrent le détail des bugs.",
      "ed-q36-d":
        "Faux. Prévoir les prochaines étapes est un élément classique d'aide à la décision.",
    },
  },
  {
    question_id: "ed-q37",
    correct_option_ids: ["ed-q37-d"],
    explanation:
      "La gestion de configuration enregistre de façon unique les versions et permet de recréer l'exact état d'assemblage des fichiers (Syllabus Section 5.4.1).",
    option_rationales: {
      "ed-q37-a": "Faux. La gestion des risques identifie et surveille les menaces de projet.",
      "ed-q37-b": "Faux. Le suivi contrôle l'avancement des tests vis-à-vis du plan.",
      "ed-q37-c": "Faux. L'approche d'équipe entière est un principe d'organisation agile.",
      "ed-q37-d":
        "Correct. Garantir l'intégrité et le versioning des builds est le cœur de la gestion de configuration.",
    },
  },
  {
    question_id: "ed-q38",
    correct_option_ids: ["ed-q38-a"],
    explanation:
      "Fournir des entrées de test concrètes (quels livres, quel utilisateur) permet de reproduire le bug rapidement (Syllabus Section 5.5.1).",
    option_rationales: {
      "ed-q38-a":
        "Correct. Les données d'entrée réelles manquaient cruellement pour rejouer l'échec.",
      "ed-q38-b":
        "Faux. La priorité classe le planning de correction, elle n'aide pas à la reproduction technique.",
      "ed-q38-c":
        "Faux. Des dumps de mémoire alourdissent inutilement la fiche sans apporter de lisibilité.",
      "ed-q38-d": "Faux. Multiplier les fiches identiques pollue la base d'anomalies.",
    },
  },
  {
    question_id: "ed-q39",
    correct_option_ids: ["ed-q39-b", "ed-q39-d"],
    explanation:
      "Les outils DevOps (comme CI/CD) et les outils de tests non fonctionnels (comme les injecteurs) exécutent directement des tests (Syllabus Section 6.1.1).",
    option_rationales: {
      "ed-q39-a": "Faux. Facilitent la communication, pas l'exécution technique des tests.",
      "ed-q39-b":
        "Correct. Permettent de déclencher automatiquement les tests dans l'usine logicielle.",
      "ed-q39-c": "Faux. Gèrent le planning, le référentiel, et les anomalies.",
      "ed-q39-d":
        "Correct. Jouent un rôle moteur dans l'exécution de charges et tests de performance.",
      "ed-q39-e": "Faux. Facilitent la phase de conception et de création du matériel de test.",
    },
  },
  {
    question_id: "ed-q40",
    correct_option_ids: ["ed-q40-c"],
    explanation:
      "L'incompatibilité avec la plate-forme de développement est un risque technique classique de l'automatisation (Syllabus Section 6.2.1).",
    option_rationales: {
      "ed-q40-a": "Faux. C'est un avantage majeur espéré de l'automatisation.",
      "ed-q40-b":
        "Faux. L'automatisation aide à récolter des métriques, c'est donc plutôt un avantage.",
      "ed-q40-c":
        "Correct. Si l'outil n'est pas compatible avec le framework de dev, l'automatisation échouera.",
      "ed-q40-d": "Faux. C'est un bénéfice d'efficacité recherché.",
    },
  },
];
