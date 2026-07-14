// ISTQB Foundation Level v4.0 - Ensemble E (v1.3.0) - Seed Data

const ENSEMBLE_E_EXAM_ID = "ctfl-exam-v4-ensemble-e-2026";

export const ENSEMBLE_E_EXAM = {
  id: ENSEMBLE_E_EXAM_ID,
  title: "Examen Échantillon CTFL v4.0 — ENSEMBLE E (v1.3.0)",
  description:
    "Examen d'entraînement de l'ISTQB niveau fondamental v4.0 (Ensemble E, v1.3.0, édition GTB). Comprend 40 questions uniques couvrant tous les chapitres du syllabus avec des traductions françaises soignées et justifications de la correction officielle.",
  language: "fr",
  duration_minutes: 60,
  total_questions: 40,
  passing_threshold: 65, // 26/40 (65%)
  points_per_question: 1,
  attempts_allowed: null,
  status: "published",
  created_at: "2026-07-14T07:00:00Z",
};

export const ENSEMBLE_E_QUESTIONS = [
  // Chapter 1 (Q1 - Q8)
  {
    id: "ee-q1",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 1,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.1.1",
    text: "Lequel des énoncés suivants décrit un objectif de test typique ?",
  },
  {
    id: "ee-q2",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 2,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.1.2",
    text: "Laquelle des affirmations suivantes décrit le mieux la différence entre le test et le débogage ?",
  },
  {
    id: "ee-q3",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 3,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.3.1",
    text: "Un Product Owner affirme que votre rôle en tant que testeur dans une équipe Agile est de trouver tous les bugs avant la fin de chaque itération. Lequel des principes de test suivants pourrait être utilisé pour répondre à cette affirmation (fausse) ?",
  },
  {
    id: "ee-q4",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 4,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.1",
    text: "Lequel des éléments suivants est un exemple de tâche pouvant être exécutée dans le cadre de la mise en œuvre des tests (test implementation) du processus de test ?",
  },
  {
    id: "ee-q5",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 5,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.2",
    text: "Laquelle des affirmations suivantes est un exemple de facteur technique qui influence le processus de test ?",
  },
  {
    id: "ee-q6",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 6,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.5",
    text: "Laquelle des affirmations suivantes décrit LE MIEUX les différences entre le rôle de gestion des tests et le rôle de test ?",
  },
  {
    id: "ee-q7",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 7,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.3",
    text: "Lors de la discussion d'une user story dans un projet agile, en tant que testeur, vous identifiez une contradiction dans l'interprétation des critères d'acceptation entre le Product Owner et l'équipe de développement. Vous soulevez cette contradiction. Laquelle des options suivantes décrit un avantage de l'indépendance des tests qui devient apparent dans cette situation ?",
  },
  {
    id: "ee-q8",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 8,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.2",
    text: "Laquelle des options suivantes décrit LE MIEUX les responsabilités découlant de l'approche agile d'Équipe Entière (Whole-Team approach) ?",
  },

  // Chapter 2 (Q9 - Q14)
  {
    id: "ee-q9",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 9,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.2",
    text: "Laquelle des affirmations suivantes décrit une bonne pratique de test applicable à tous les modèles de cycle de vie logiciel (SDLC) ?",
  },
  {
    id: "ee-q10",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 10,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.3",
    text: "Laquelle des approches de développement décrites ci-dessous ne définit PAS le test comme un moteur (driver) du développement logiciel ?",
  },
  {
    id: "ee-q11",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 11,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.5",
    text: "Laquelle des affirmations suivantes décrit LE MIEUX l'approche Shift-Left (décalage à gauche) dans le cadre des tests du cycle de vie du développement logiciel (SDLC) ?",
  },
  {
    id: "ee-q12",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 12,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.1",
    text: "En tant que testeur dans un projet suivant un modèle de développement itératif et incrémental, laquelle des affirmations suivantes devriez-vous prendre en compte pour intégrer de manière optimale les activités de test ?",
  },
  {
    id: "ee-q13",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 13,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.2.1",
    text: "Un cas de test présente les caractéristiques suivantes :\n- Il est basé sur les spécifications d'interface.\n- L'accent est mis sur la recherche de défaillances dans l'interaction entre les composants.\n- Des tests fonctionnels et structurels sont tous deux appliqués.\n\nDans quel niveau de test ce cas de test est-il LE PLUS SUSCEPTIBLE d'être exécuté ?",
  },
  {
    id: "ee-q14",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 14,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.3.1",
    text: "Laquelle des options suivantes n'est PAS un déclencheur (trigger) pour la maintenance et les tests de maintenance ?",
  },

  // Chapter 3 (Q15 - Q18)
  {
    id: "ee-q15",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 15,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.2",
    text: "Laquelle des affirmations suivantes est la PLUS vraie concernant les tests statiques ?",
  },
  {
    id: "ee-q16",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 16,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.1",
    text: "Laquelle des affirmations suivantes ne décrit PAS un avantage d'un retour d'information (feedback) précoce et fréquent des parties prenantes ?",
  },
  {
    id: "ee-q17",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 17,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.4",
    text: "Laquel des types de revue listés ci-dessous est LE MIEUX adapté lorsque la revue doit être menée conformément au processus général complet de revue et dans le but de trouver autant d'anomalies que possible ?",
  },
  {
    id: "ee-q18",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 18,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.5",
    text: "Pendant une phase d'heures supplémentaires intenses, une spécification d'architecture système volumineuse est envoyée à différents participants du projet, accompagnée d'informations complémentaires et de l'annonce d'une revue technique dans trois jours. Cette revue n'était pas prévue à l'origine. Aucun ajustement n'est fait concernant les tâches déjà assignées aux participants devant jouer le rôle de relecteurs. Sur la base des informations fournies, quel facteur de succès des revues est manquant, sur la seule base des informations données ?",
  },

  // Chapter 4 (Q19 - Q29)
  {
    id: "ee-q19",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 19,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.1.1",
    text: "Avant une réunion de planification d'itération, vous analysez une User Story et ses critères d'acceptation. À partir de cela, vous en dérivez les cas de test correspondants pour appliquer le principe de test précoce. Quelle approche ou technique de test utilisez-vous ?",
  },
  {
    id: "ee-q20",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 20,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.1",
    text: "Un enregistreur de rayonnement quotidien pour plantes produit un score d'ensoleillement basé sur une combinaison du nombre d'heures d'exposition (moins de 3 heures, 3 à 6 heures, ou plus de 6 heures) et de l'intensité moyenne du soleil (très faible, faible, moyenne, forte).\n\nÉtant donné les cas de test existants :\n- T1 : 1,5 heure, intensité très faible, Score 10\n- T2 : 7,0 heures, intensité moyenne, Score 60\n- T3 : 0,5 heure, intensité très faible, Score 10\n\nQuel est le nombre minimum de cas de test supplémentaires nécessaires pour garantir une couverture complète de TOUTES les partitions d'équivalence d'entrée valides ?",
  },
  {
    id: "ee-q21",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 21,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.2",
    text: "Une application domotique mesure la température moyenne de la maison sur la semaine précédente et fournit un retour aux occupants sur leur éco-responsabilité.\n\nLes retours pour les différentes plages de températures moyennes (au degré Celsius le plus proche) sont :\n- Jusqu'à 10°C : Icy Cool!\n- 11°C à 15°C : Chilled Out!\n- 16°C à 19°C : Cool Man!\n- 20°C à 22°C : Too Warm!\n- Au-dessus de 22°C : Hot & Sweaty!\n\nEn utilisant l'Analyse des Valeurs Limites (uniquement les valeurs Min et Max), lequel des ensembles d'entrées de test suivants fournit le niveau de couverture des limites le plus élevé ?",
  },
  {
    id: "ee-q22",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 22,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.3",
    text: "Un système de calcul des amendes pour excès de vitesse est spécifié avec la table de décision suivante :\n\n- Conditions :\n  - Vitesse > 50 (R1=Oui, R2=Oui, R3=Non, R4=Non)\n  - Zone Scolaire (R1=Oui, R2=Non, R3=Oui, R4=Non)\n- Actions :\n  - Amende de 250 € (R2=X)\n  - Suspension de permis (R1=X)\n\nSur la base de la table de décision fournie et des cas de test existants :\n- TC1 : Vitesse = 65, Zone Scolaire = Oui\n- TC2 : Vitesse = 45, Zone Scolaire = Oui\n- TC3 : Vitesse = 50, Zone Scolaire = Non\n- TC4 : Vitesse = 49, Zone Scolaire = Non\n\nLaquelle des règles de la table de décision n'est pas encore couverte par un cas de test ?",
  },
  {
    id: "ee-q23",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 23,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.4",
    text: "Considérez un diagramme de transition d'état pour une pompe à essence automatisée (par carte bancaire uniquement).\nOn souhaite développer le nombre minimum de tests pour couvrir chaque transition du diagramme. Chaque test doit commencer dans l'état initial « Attente client » (Waiting for customer) et se terminer lorsqu'une transition ramène à cet état initial.\n\nDe combien de cas de test avez-vous besoin ?",
  },
  {
    id: "ee-q24",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 24,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.1",
    text: "Laquelle des descriptions suivantes de la couverture des instructions (statement coverage) s'applique ?",
  },
  {
    id: "ee-q25",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 25,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.3",
    text: "Laquelle des affirmations suivantes représente une valeur ajoutée des tests en boîte blanche ?",
  },
  {
    id: "ee-q26",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 26,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.3",
    text: "Vous testez une application mobile bancaire. Vous exécutez une suite de tests évaluant chaque écran et champ à l'aide d'une collection d'heuristiques d'interface utilisateur issue d'un livre populaire, visant à maximiser l'ergonomie, l'utilisabilité et l'accessibilité des applications mobiles.\n\nQuelle technique de test caractérise LE MIEUX cette approche ?",
  },
  {
    id: "ee-q27",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 27,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.2",
    text: "Dans laquelle des situations suivantes l'utilisation des tests exploratoires est-elle LA MIEUX adaptée ?",
  },
  {
    id: "ee-q28",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 28,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.2",
    text: "Une équipe de développement agile formule la user story suivante : « En tant qu'utilisateur, je souhaite que le volume de l'alarme du minuteur électronique soit réglable afin de pouvoir toujours l'entendre. »\n\nLequel des critères d'acceptation suivants est LE MIEUX adapté d'un point de vue de test pour concevoir des tests d'acceptation clairs ?",
  },
  {
    id: "ee-q29",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 29,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.3",
    text: "Considérez la user story suivante :\n« En tant qu'administrateur système, je souhaite pouvoir surveiller les performances du serveur pour m'assurer que le système fonctionne efficacement. »\n\nQuel cas de test est LE MIEUX adapté pour un développement dirigé par les tests d'acceptation (ATDD) de cette user story ?",
  },

  // Chapter 5 (Q30 - Q38)
  {
    id: "ee-q30",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 30,
    chapter: 5,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.2",
    text: "Laquelle des activités suivantes les testeurs effectuent-ils lors de la planification de la release (release planning) dans un projet agile ?",
  },
  {
    id: "ee-q31",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 31,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.3",
    text: "Voici des exemples de critères d'entrée (entry criteria) et de sortie (exit criteria) pour un test système :\n\n1. Le budget de test prévu de 400 heures pour le test système est épuisé.\n2. Plus de 95 % des cas de test prévus ont été exécutés.\n3. L'environnement de test pour le test de performance est conçu, installé et vérifié.\n4. Aucun défaut de priorité 1 et un maximum de 4 défauts de priorité 2 sont ouverts.\n5. La spécification de conception a été revue et approuvée via une revue technique.\n6. Le test unitaire des composants « taux de taxe » et « prix total » est terminé et approuvé.\n\nQuelle combinaison catégorise le mieux ces exemples en critères d'entrée et de sortie ?",
  },
  {
    id: "ee-q32",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 32,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.4",
    text: "Vous souhaitez estimer l'effort de test pour un nouveau projet à l'aide d'une estimation à trois points. Les experts vous ont fourni les valeurs suivantes : l'estimation la plus optimiste (a) est de 300 personnes-jours, l'estimation la plus probable (m) est de 400 personnes-jours, et l'estimation la plus pessimiste (b) est de 500 personnes-jours.\n\nComment estimez-vous l'effort de test pour ce projet ?",
  },
  {
    id: "ee-q33",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 33,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.5",
    text: "On vous demande d'établir une séquence d'exécution optimale basée sur les risques pour les cas de test suivants, qui ont été priorisés et analysés pour leurs dépendances :\n\n- T7 : Priorité 2, dépend de - (aucun)\n- T8 : Priorité 1, dépend de T7\n- T9 : Priorité 3, dépend de T8\n- T10 : Priorité 3, dépend de T8\n- T11 : Priorité 1, dépend de T9\n- T12 : Priorité 2, dépend de T10\n\nQuelle séquence prend correctement en compte les priorités et les dépendances ?",
  },
  {
    id: "ee-q34",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 34,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.7",
    text: "Laquelle des affirmations suivantes illustre l'intérêt des quadrants de test ?",
  },
  {
    id: "ee-q35",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 35,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.2.4",
    text: "Laquelle des affirmations suivantes concernant le contrôle des risques produit dans le contexte de l'atténuation des risques ne s'applique PAS ?",
  },
  {
    id: "ee-q36",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 36,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.3.3",
    text: "Dans un projet réglementaire ayant déjà du retard, les parties prenantes demandent à être informées quotidiennement du statut des tests.\n\nQuel est le moyen LE PLUS EFFICACE de communiquer ce statut de test lorsque les parties prenantes ne peuvent pas se coordonner directement en raison de contraintes géographiques et temporelles ?",
  },
  {
    id: "ee-q37",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 37,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.4.1",
    text: "Laquelle des affirmations suivantes décrit comment la gestion de configuration peut soutenir les activités de test ?",
  },
  {
    id: "ee-q38",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 38,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.5.1",
    text: "Vous testez une nouvelle version du logiciel d'une machine à café capable de préparer différentes boissons réparties en quatre catégories : quantité de café, sucre, lait, et arôme de café.\nLes catégories sont :\n- Quantité de café (petit, moyen, grand),\n- Sucre (aucun, 1 unité, 2 unités, 3 unités, 4 unités),\n- Lait (oui ou non),\n- Arôme de café (sans sirop, caramel, noisette, vanille).\n\nVous écrivez un rapport de défaut contenant les informations suivantes :\n- Titre : Température du café trop basse.\n- Résumé rapide : Lors de la sélection d'un café avec du lait, la température de la boisson est trop basse (inférieure à 40 °C).\n- Résultat attendu : La température du café doit respecter la norme (environ 75 °C).\n- Gravité de l'impact : Modérée\n- Priorité : Normale\n\nQuelle information pertinente avez-vous oubliée dans le rapport de défaut ci-dessus ?",
  },

  // Chapter 6 (Q39 - Q40)
  {
    id: "ee-q39",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 39,
    chapter: 6,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-6.1.1",
    text: "Étant donné les activités de test suivantes :\n1. Mesures de performance et vérifications de sécurité informatique\n2. Automatisation des tests\n3. Gestion des activités de test\n4. Conception et implémentation des tests\n\net les outils de test :\nA. Outils d'exécution des tests.\nB. Outils de test pour les tests non fonctionnels.\nC. Outils de préparation des cas de test et des données de test.\nD. Outils de gestion des défauts.\n\nQuelle association d'outils aux activités est la MEILLEURE ?",
  },
  {
    id: "ee-q40",
    exam_id: ENSEMBLE_E_EXAM_ID,
    position: 40,
    chapter: 6,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-6.2.1",
    text: "Laquelle des affirmations suivantes décrit le mieux le bénéfice potentiel de l'utilisation d'outils d'exécution automatisée des tests ?",
  },
];

export const ENSEMBLE_E_OPTIONS = [
  // Q1 Options
  {
    id: "ee-q1-a",
    question_id: "ee-q1",
    position: 1,
    label: "A",
    text: "Le test commence peu de temps avant la livraison de l'objet de test afin de trouver des défauts qui empêcheraient l'acceptation.",
  },
  {
    id: "ee-q1-b",
    question_id: "ee-q1",
    position: 2,
    label: "B",
    text: "Une validation que l'objet de test fonctionne comme prévu par les différentes parties prenantes.",
  },
  {
    id: "ee-q1-c",
    question_id: "ee-q1",
    position: 3,
    label: "C",
    text: "Une démonstration que tous les défauts ont été identifiés.",
  },
  {
    id: "ee-q1-d",
    question_id: "ee-q1",
    position: 4,
    label: "D",
    text: "Une démonstration que les défauts restants n'auront pas d'impacts négatifs.",
  },

  // Q2 Options
  {
    id: "ee-q2-a",
    question_id: "ee-q2",
    position: 1,
    label: "A",
    text: "Le test identifie la cause des défauts. Le débogage analyse les défauts et suggère des mesures préventives.",
  },
  {
    id: "ee-q2-b",
    question_id: "ee-q2",
    position: 2,
    label: "B",
    text: "Le test dynamique révèle les défaillances causées par des défauts. Le débogage analyse et résout le défaut associé.",
  },
  {
    id: "ee-q2-c",
    question_id: "ee-q2",
    position: 3,
    label: "C",
    text: "Le test élimine les défaillances, tandis que le débogage élimine les défauts qui causent les défaillances.",
  },
  {
    id: "ee-q2-d",
    question_id: "ee-q2",
    position: 4,
    label: "D",
    text: "Le test dynamique prévient la cause des défaillances. Le débogage élimine les défaillances.",
  },

  // Q3 Options
  {
    id: "ee-q3-a",
    question_id: "ee-q3",
    position: 1,
    label: "A",
    text: "Regroupement des défauts (Defect clustering)",
  },
  {
    id: "ee-q3-b",
    question_id: "ee-q3",
    position: 2,
    label: "B",
    text: "Les tests montrent la présence de défauts (et non leur absence)",
  },
  {
    id: "ee-q3-c",
    question_id: "ee-q3",
    position: 3,
    label: "C",
    text: "L'illusion de l'absence d'erreurs (Absence-of-errors fallacy)",
  },
  {
    id: "ee-q3-d",
    question_id: "ee-q3",
    position: 4,
    label: "D",
    text: "L'analyse de la cause racine (Root cause analysis)",
  },

  // Q4 Options
  {
    id: "ee-q4-a",
    question_id: "ee-q4",
    position: 1,
    label: "A",
    text: "Analyser un défaut",
  },
  {
    id: "ee-q4-b",
    question_id: "ee-q4",
    position: 2,
    label: "B",
    text: "Concevoir des données de test",
  },
  {
    id: "ee-q4-c",
    question_id: "ee-q4",
    position: 3,
    label: "C",
    text: "Attribuer une version à un élément de test",
  },
  {
    id: "ee-q4-d",
    question_id: "ee-q4",
    position: 4,
    label: "D",
    text: "Écrire une user story",
  },

  // Q5 Options
  {
    id: "ee-q5-a",
    question_id: "ee-q5",
    position: 1,
    label: "A",
    text: "Le logiciel est une application web qui doit fonctionner sur différents navigateurs.",
  },
  {
    id: "ee-q5-b",
    question_id: "ee-q5",
    position: 2,
    label: "B",
    text: "Le logiciel est destiné à un fournisseur de services financiers ayant des exigences de sécurité strictes.",
  },
  {
    id: "ee-q5-c",
    question_id: "ee-q5",
    position: 3,
    label: "C",
    text: "Le logiciel est développé à l'aide d'une méthodologie agile qui nécessite des itérations courtes et des livraisons fréquentes.",
  },
  {
    id: "ee-q5-d",
    question_id: "ee-q5",
    position: 4,
    label: "D",
    text: "Le logiciel est testé par une équipe aux compétences et expériences variées.",
  },

  // Q6 Options
  {
    id: "ee-q6-a",
    question_id: "ee-q6",
    position: 1,
    label: "A",
    text: "Le rôle de gestion des tests se concentre principalement sur les activités d'analyse, de conception, de réalisation et d'exécution des tests, tandis que le rôle de test assume la responsabilité globale du processus de test, de l'équipe de test et de la gestion des activités de test.",
  },
  {
    id: "ee-q6-b",
    question_id: "ee-q6",
    position: 2,
    label: "B",
    text: "Le rôle de gestion des tests et le rôle de test sont identiques et peuvent être assumés par la même personne simultanément.",
  },
  {
    id: "ee-q6-c",
    question_id: "ee-q6",
    position: 3,
    label: "C",
    text: "Le rôle de gestion des tests assume la responsabilité globale du processus de test, de l'équipe de test et de la gestion des activités de test, tandis que le rôle de test se concentre principalement sur les activités d'analyse, de conception, de réalisation et d'exécution des tests.",
  },
  {
    id: "ee-q6-d",
    question_id: "ee-q6",
    position: 4,
    label: "D",
    text: "Le rôle de gestion des tests et le rôle de test n'ont pas de tâches spécifiques et peuvent varier selon le contexte.",
  },

  // Q7 Options
  {
    id: "ee-q7-a",
    question_id: "ee-q7",
    position: 1,
    label: "A",
    text: "Les testeurs peuvent reconnaître différents types de défaillances et de conditions.",
  },
  {
    id: "ee-q7-b",
    question_id: "ee-q7",
    position: 2,
    label: "B",
    text: "Les testeurs peuvent assumer la responsabilité principale de la qualité.",
  },
  {
    id: "ee-q7-c",
    question_id: "ee-q7",
    position: 3,
    label: "C",
    text: "Les développeurs peuvent être sûrs que les testeurs garantiront la qualité attendue des résultats de travail.",
  },
  {
    id: "ee-q7-d",
    question_id: "ee-q7",
    position: 4,
    label: "D",
    text: "Les testeurs peuvent remettre en question les hypothèses formulées par les parties prenantes.",
  },

  // Q8 Options
  {
    id: "ee-q8-a",
    question_id: "ee-q8",
    position: 1,
    label: "A",
    text: "Les testeurs sont responsables du développement des tests unitaires et les transmettent aux développeurs pour exécution.",
  },
  {
    id: "ee-q8-b",
    question_id: "ee-q8",
    position: 2,
    label: "B",
    text: "Les représentants métiers ont pour mission de sélectionner les outils que l'équipe de développement doit utiliser.",
  },
  {
    id: "ee-q8-c",
    question_id: "ee-q8",
    position: 3,
    label: "C",
    text: "Les testeurs doivent créer des cas de test en collaboration avec les représentants métiers et l'équipe de développement.",
  },
  {
    id: "ee-q8-d",
    question_id: "ee-q8",
    position: 4,
    label: "D",
    text: "Les développeurs doivent tester les exigences non fonctionnelles (performance, utilisabilité, sécurité, etc.).",
  },

  // Q9 Options
  {
    id: "ee-q9-a",
    question_id: "ee-q9",
    position: 1,
    label: "A",
    text: "Les activités de test pour une phase de test commencent pendant la phase de développement correspondante.",
  },
  {
    id: "ee-q9-b",
    question_id: "ee-q9",
    position: 2,
    label: "B",
    text: "Une phase de test dans le cycle de vie logiciel commence lorsque la phase de test précédente est terminée.",
  },
  {
    id: "ee-q9-c",
    question_id: "ee-q9",
    position: 3,
    label: "C",
    text: "Le test est considéré comme une phase distincte. Il commence lorsque le développement est terminé.",
  },
  {
    id: "ee-q9-d",
    question_id: "ee-q9",
    position: 4,
    label: "D",
    text: "Le test est ajouté au développement sous forme d'incrément.",
  },

  // Q10 Options
  {
    id: "ee-q10-a",
    question_id: "ee-q10",
    position: 1,
    label: "A",
    text: "Les tests sont créés en premier. Ensuite, le code est écrit.",
  },
  {
    id: "ee-q10-b",
    question_id: "ee-q10",
    position: 2,
    label: "B",
    text: "Les cas de test dirigent le codage.",
  },
  {
    id: "ee-q10-c",
    question_id: "ee-q10",
    position: 3,
    label: "C",
    text: "Le comportement souhaité d'une application est défini par des cas de test.",
  },
  {
    id: "ee-q10-d",
    question_id: "ee-q10",
    position: 4,
    label: "D",
    text: "Les tests sont dérivés des critères d'acceptation et partiellement automatisés.",
  },

  // Q11 Options
  {
    id: "ee-q11-a",
    question_id: "ee-q11",
    position: 1,
    label: "A",
    text: "Les activités de test commencent le plus tôt possible dans le SDLC et sont menées en parallèle avec les activités de développement.",
  },
  {
    id: "ee-q11-b",
    question_id: "ee-q11",
    position: 2,
    label: "B",
    text: "Les activités de test commencent le plus tard possible dans le SDLC et sont menées après les activités de développement.",
  },
  {
    id: "ee-q11-c",
    question_id: "ee-q11",
    position: 3,
    label: "C",
    text: "Les activités de test commencent au milieu du SDLC et sont menées en parallèle avec les activités de développement.",
  },
  {
    id: "ee-q11-d",
    question_id: "ee-q11",
    position: 4,
    label: "D",
    text: "Les activités de test sont réparties sur plusieurs phases du SDLC et menées dans chaque phase en fonction du niveau de maturité du produit.",
  },

  // Q12 Options
  {
    id: "ee-q12-a",
    question_id: "ee-q12",
    position: 1,
    label: "A",
    text: "Vous planifiez le test comme une activité unique une fois que tous les incréments du produit ont été implémentés.",
  },
  {
    id: "ee-q12-b",
    question_id: "ee-q12",
    position: 2,
    label: "B",
    text: "Les tests statiques ne doivent avoir lieu qu'au niveau des tests de composants afin de trouver le plus tôt possible les défauts liés au code.",
  },
  {
    id: "ee-q12-c",
    question_id: "ee-q12",
    position: 3,
    label: "C",
    text: "Comme un retour rapide sur la qualité d'un incrément est important, les testeurs devraient idéalement effectuer les tests de régression manuellement.",
  },
  {
    id: "ee-q12-d",
    question_id: "ee-q12",
    position: 4,
    label: "D",
    text: "En raison de la livraison de nouveaux incréments au fil des itérations, il est important de construire des tests de régression complets.",
  },

  // Q13 Options
  {
    id: "ee-q13-a",
    question_id: "ee-q13",
    position: 1,
    label: "A",
    text: "Test d'intégration des composants (Component Integration Test)",
  },
  {
    id: "ee-q13-b",
    question_id: "ee-q13",
    position: 2,
    label: "B",
    text: "Test d'acceptation (Acceptance Test)",
  },
  {
    id: "ee-q13-c",
    question_id: "ee-q13",
    position: 3,
    label: "C",
    text: "Test système (System Test)",
  },
  {
    id: "ee-q13-d",
    question_id: "ee-q13",
    position: 4,
    label: "D",
    text: "Test unitaire / de composants (Component Test)",
  },

  // Q14 Options
  {
    id: "ee-q14-a",
    question_id: "ee-q14",
    position: 1,
    label: "A",
    text: "La mise hors service (decommissioning) d'un système.",
  },
  {
    id: "ee-q14-b",
    question_id: "ee-q14",
    position: 2,
    label: "B",
    text: "Les modifications correctives ou correctifs d'urgence (hotfixes).",
  },
  {
    id: "ee-q14-c",
    question_id: "ee-q14",
    position: 3,
    label: "C",
    text: "Les mises à niveau ou migrations de l'environnement d'exploitation.",
  },
  {
    id: "ee-q14-d",
    question_id: "ee-q14",
    position: 4,
    label: "D",
    text: "L'implémentation de nouvelles fonctionnalités lors du développement initial.",
  },

  // Q15 Options
  {
    id: "ee-q15-a",
    question_id: "ee-q15",
    position: 1,
    label: "A",
    text: "Le test statique est un moyen peu coûteux de détecter des défauts.",
  },
  {
    id: "ee-q15-b",
    question_id: "ee-q15",
    position: 2,
    label: "B",
    text: "Le test statique rend le test dynamique moins difficile.",
  },
  {
    id: "ee-q15-c",
    question_id: "ee-q15",
    position: 3,
    label: "C",
    text: "Le test statique permet de trouver des problèmes d'exécution (run-time) tôt dans le cycle de vie.",
  },
  {
    id: "ee-q15-d",
    question_id: "ee-q15",
    position: 4,
    label: "D",
    text: "Lors du test de systèmes critiques pour la sécurité, le test statique a moins de valeur car le test dynamique trouve mieux les défauts.",
  },

  // Q16 Options
  {
    id: "ee-q16-a",
    question_id: "ee-q16",
    position: 1,
    label: "A",
    text: "Un feedback fréquent aide à comprendre et à implémenter plus tôt les modifications des exigences.",
  },
  {
    id: "ee-q16-b",
    question_id: "ee-q16",
    position: 2,
    label: "B",
    text: "Un feedback fréquent aide l'équipe de développement à mieux comprendre ce qu'elle développe.",
  },
  {
    id: "ee-q16-c",
    question_id: "ee-q16",
    position: 3,
    label: "C",
    text: "Un feedback fréquent aide l'équipe de développement à se concentrer sur les fonctionnalités qui apportent le plus de valeur.",
  },
  {
    id: "ee-q16-d",
    question_id: "ee-q16",
    position: 4,
    label: "D",
    text: "Un feedback fréquent peut conduire à des malentendus sur les exigences.",
  },

  // Q17 Options
  {
    id: "ee-q17-a",
    question_id: "ee-q17",
    position: 1,
    label: "A",
    text: "Revue informelle (Informal Review)",
  },
  {
    id: "ee-q17-b",
    question_id: "ee-q17",
    position: 2,
    label: "B",
    text: "Revue technique (Technical Review)",
  },
  {
    id: "ee-q17-c",
    question_id: "ee-q17",
    position: 3,
    label: "C",
    text: "Inspection",
  },
  {
    id: "ee-q17-d",
    question_id: "ee-q17",
    position: 4,
    label: "D",
    text: "Répétition / Lecture guidée (Walkthrough)",
  },

  // Q18 Options
  {
    id: "ee-q18-a",
    question_id: "ee-q18",
    position: 1,
    label: "A",
    text: "Le choix d'un type de revue approprié.",
  },
  {
    id: "ee-q18-b",
    question_id: "ee-q18",
    position: 2,
    label: "B",
    text: "Un temps suffisant pour la préparation.",
  },
  {
    id: "ee-q18-c",
    question_id: "ee-q18",
    position: 3,
    label: "C",
    text: "La définition d'objectifs clairs et de critères de sortie mesurables.",
  },
  {
    id: "ee-q18-d",
    question_id: "ee-q18",
    position: 4,
    label: "D",
    text: "Une session de revue bien animée.",
  },

  // Q19 Options
  {
    id: "ee-q19-a",
    question_id: "ee-q19",
    position: 1,
    label: "A",
    text: "Test en boîte blanche (White-Box Testing)",
  },
  {
    id: "ee-q19-b",
    question_id: "ee-q19",
    position: 2,
    label: "B",
    text: "Test en boîte noire (Black-Box Testing)",
  },
  {
    id: "ee-q19-c",
    question_id: "ee-q19",
    position: 3,
    label: "C",
    text: "Test basé sur l'expérience (Experience-Based Testing)",
  },
  {
    id: "ee-q19-d",
    question_id: "ee-q19",
    position: 4,
    label: "D",
    text: "Devinette d'erreurs (Error Guessing)",
  },

  // Q20 Options
  {
    id: "ee-q20-a",
    question_id: "ee-q20",
    position: 1,
    label: "A",
    text: "1",
  },
  {
    id: "ee-q20-b",
    question_id: "ee-q20",
    position: 2,
    label: "B",
    text: "2",
  },
  {
    id: "ee-q20-c",
    question_id: "ee-q20",
    position: 3,
    label: "C",
    text: "3",
  },
  {
    id: "ee-q20-d",
    question_id: "ee-q20",
    position: 4,
    label: "D",
    text: "4",
  },

  // Q21 Options
  {
    id: "ee-q21-a",
    question_id: "ee-q21",
    position: 1,
    label: "A",
    text: "0°C, 11°C, 20°C, 22°C, 23°C",
  },
  {
    id: "ee-q21-b",
    question_id: "ee-q21",
    position: 2,
    label: "B",
    text: "9°C, 15°C, 19°C, 23°C, 100°C",
  },
  {
    id: "ee-q21-c",
    question_id: "ee-q21",
    position: 3,
    label: "C",
    text: "10°C, 16°C, 19°C, 22°C, 23°C",
  },
  {
    id: "ee-q21-d",
    question_id: "ee-q21",
    position: 4,
    label: "D",
    text: "14°C, 15°C, 18°C, 19°C, 21°C, 22°C",
  },

  // Q22 Options
  {
    id: "ee-q22-a",
    question_id: "ee-q22",
    position: 1,
    label: "A",
    text: "Règle 4",
  },
  {
    id: "ee-q22-b",
    question_id: "ee-q22",
    position: 2,
    label: "B",
    text: "Règle 1",
  },
  {
    id: "ee-q22-c",
    question_id: "ee-q22",
    position: 3,
    label: "C",
    text: "Règle 2",
  },
  {
    id: "ee-q22-d",
    question_id: "ee-q22",
    position: 4,
    label: "D",
    text: "Règle 3",
  },

  // Q23 Options
  {
    id: "ee-q23-a",
    question_id: "ee-q23",
    position: 1,
    label: "A",
    text: "4",
  },
  {
    id: "ee-q23-b",
    question_id: "ee-q23",
    position: 2,
    label: "B",
    text: "7",
  },
  {
    id: "ee-q23-c",
    question_id: "ee-q23",
    position: 3,
    label: "C",
    text: "1",
  },
  {
    id: "ee-q23-d",
    question_id: "ee-q23",
    position: 4,
    label: "D",
    text: "Infini",
  },

  // Q24 Options
  {
    id: "ee-q24-a",
    question_id: "ee-q24",
    position: 1,
    label: "A",
    text: "La couverture des instructions est une mesure du nombre de lignes de code source (hors commentaires) exécutées pendant le test.",
  },
  {
    id: "ee-q24-b",
    question_id: "ee-q24",
    position: 2,
    label: "B",
    text: "La couverture des instructions est une mesure du pourcentage d'instructions du code source exécutées pendant le test.",
  },
  {
    id: "ee-q24-c",
    question_id: "ee-q24",
    position: 3,
    label: "C",
    text: "La couverture des instructions est une mesure du pourcentage de lignes de code source (hors commentaires) exécutées pendant le test.",
  },
  {
    id: "ee-q24-d",
    question_id: "ee-q24",
    position: 4,
    label: "D",
    text: "La couverture des instructions est une mesure du nombre d'instructions du code source exécutées pendant le test.",
  },

  // Q25 Options
  {
    id: "ee-q25-a",
    question_id: "ee-q25",
    position: 1,
    label: "A",
    text: "Les tests en boîte blanche peuvent fournir des métriques de couverture, telles que la couverture des instructions.",
  },
  {
    id: "ee-q25-b",
    question_id: "ee-q25",
    position: 2,
    label: "B",
    text: "Les tests en boîte blanche peuvent vérifier si le code répond aux critères d'acceptation.",
  },
  {
    id: "ee-q25-c",
    question_id: "ee-q25",
    position: 3,
    label: "C",
    text: "Les tests en boîte blanche peuvent tester la compatibilité avec d'autres systèmes.",
  },
  {
    id: "ee-q25-d",
    question_id: "ee-q25",
    position: 4,
    label: "D",
    text: "Les tests en boîte blanche peuvent découvrir tous les défauts du code.",
  },

  // Q26 Options
  {
    id: "ee-q26-a",
    question_id: "ee-q26",
    position: 1,
    label: "A",
    text: "Test par table de décision (Decision Table Testing)",
  },
  {
    id: "ee-q26-b",
    question_id: "ee-q26",
    position: 2,
    label: "B",
    text: "Test exploratoire (Exploratory Testing)",
  },
  {
    id: "ee-q26-c",
    question_id: "ee-q26",
    position: 3,
    label: "C",
    text: "Test basé sur des listes de contrôle (Checklist-based Testing)",
  },
  {
    id: "ee-q26-d",
    question_id: "ee-q26",
    position: 4,
    label: "D",
    text: "Devinette d'erreurs (Error Guessing)",
  },

  // Q27 Options
  {
    id: "ee-q27-a",
    question_id: "ee-q27",
    position: 1,
    label: "A",
    text: "Lorsque la pression du temps exige l'accélération de tests déjà spécifiés.",
  },
  {
    id: "ee-q27-b",
    question_id: "ee-q27",
    position: 2,
    label: "B",
    text: "Lorsque le système est développé de manière incrémentale et qu'aucune charte de test n'est disponible.",
  },
  {
    id: "ee-q27-c",
    question_id: "ee-q27",
    position: 3,
    label: "C",
    text: "Lorsque des testeurs possédant une connaissance suffisante d'applications et de technologies similaires sont disponibles.",
  },
  {
    id: "ee-q27-d",
    question_id: "ee-q27",
    position: 4,
    label: "D",
    text: "Lorsqu'une spécification détaillée du système est disponible pour l'analyse et la conception des tests.",
  },

  // Q28 Options
  {
    id: "ee-q28-a",
    question_id: "ee-q28",
    position: 1,
    label: "A",
    text: "Le volume est facile à régler pour tout le monde, c'est-à-dire que les boutons de réglage ont une taille adaptée.",
  },
  {
    id: "ee-q28-b",
    question_id: "ee-q28",
    position: 2,
    label: "B",
    text: "Le testeur peut bien entendre la tonalité de l'alarme même au niveau le plus bas.",
  },
  {
    id: "ee-q28-c",
    question_id: "ee-q28",
    position: 3,
    label: "C",
    text: "Le volume peut être ajusté dans une plage de 40 à 80 décibels.",
  },
  {
    id: "ee-q28-d",
    question_id: "ee-q28",
    position: 4,
    label: "D",
    text: "Le réglage du volume fonctionne correctement sur les modèles les plus vendus de ce minuteur.",
  },

  // Q29 Options
  {
    id: "ee-q29-a",
    question_id: "ee-q29",
    position: 1,
    label: "A",
    text: 'GIVEN: I am logged in as a system administrator; WHEN I select "Check server performance"; THEN I am shown an overview...',
  },
  {
    id: "ee-q29-b",
    question_id: "ee-q29",
    position: 2,
    label: "B",
    text: 'GIVEN: I am logged in as a user; WHEN I select "Check server performance"; THEN I am shown an overview...',
  },
  {
    id: "ee-q29-c",
    question_id: "ee-q29",
    position: 3,
    label: "C",
    text: 'GIVEN: I am logged in as a system administrator; WHEN I select "Perform performance test"; THEN a performance test is performed...',
  },
  {
    id: "ee-q29-d",
    question_id: "ee-q29",
    position: 4,
    label: "D",
    text: 'GIVEN: I am logged in as a system administrator; WHEN I select "Check server performance" after performing test...',
  },

  // Q30 Options
  {
    id: "ee-q30-a",
    question_id: "ee-q30",
    position: 1,
    label: "A",
    text: "Les testeurs identifient et affinent les aspects fonctionnels et non fonctionnels de l'objet de test.",
  },
  {
    id: "ee-q30-b",
    question_id: "ee-q30",
    position: 2,
    label: "B",
    text: "Les testeurs soutiennent la dérivation des tâches à partir des user stories.",
  },
  {
    id: "ee-q30-c",
    question_id: "ee-q30",
    position: 3,
    label: "C",
    text: "Les testeurs participent à l'analyse détaillée des risques des user stories.",
  },
  {
    id: "ee-q30-d",
    question_id: "ee-q30",
    position: 4,
    label: "D",
    text: "Les testeurs aident à créer des user stories, à évaluer leur testabilité et à définir leurs critères d'acceptation.",
  },

  // Q31 Options
  {
    id: "ee-q31-a",
    question_id: "ee-q31",
    position: 1,
    label: "A",
    text: "Critères d'entrée : 5, 6 ; Critères de sortie : 1, 2, 3, 4",
  },
  {
    id: "ee-q31-b",
    question_id: "ee-q31",
    position: 2,
    label: "B",
    text: "Critères d'entrée : 2, 3, 4 ; Critères de sortie : 1, 5, 6",
  },
  {
    id: "ee-q31-c",
    question_id: "ee-q31",
    position: 3,
    label: "C",
    text: "Critères d'entrée : 1, 3 ; Critères de sortie : 2, 4, 5, 6",
  },
  {
    id: "ee-q31-d",
    question_id: "ee-q31",
    position: 4,
    label: "D",
    text: "Critères d'entrée : 3, 5, 6 ; Critères de sortie : 1, 2, 4",
  },

  // Q32 Options
  {
    id: "ee-q32-a",
    question_id: "ee-q32",
    position: 1,
    label: "A",
    text: "350 personnes-jours",
  },
  {
    id: "ee-q32-b",
    question_id: "ee-q32",
    position: 2,
    label: "B",
    text: "420 personnes-jours",
  },
  {
    id: "ee-q32-c",
    question_id: "ee-q32",
    position: 3,
    label: "C",
    text: "400±33 personnes-jours",
  },
  {
    id: "ee-q32-d",
    question_id: "ee-q32",
    position: 4,
    label: "D",
    text: "450 personnes-jours",
  },

  // Q33 Options
  {
    id: "ee-q33-a",
    question_id: "ee-q33",
    position: 1,
    label: "A",
    text: "T7 -> T8 -> T10 -> T11 -> T9 -> T12",
  },
  {
    id: "ee-q33-b",
    question_id: "ee-q33",
    position: 2,
    label: "B",
    text: "T7 -> T8 -> T9 -> T10 -> T11 -> T12",
  },
  {
    id: "ee-q33-c",
    question_id: "ee-q33",
    position: 3,
    label: "C",
    text: "T7 -> T8 -> T10 -> T9 -> T11 -> T12",
  },
  {
    id: "ee-q33-d",
    question_id: "ee-q33",
    position: 4,
    label: "D",
    text: "T7 -> T8 -> T9 -> T11 -> T10 -> T12",
  },

  // Q34 Options
  {
    id: "ee-q34-a",
    question_id: "ee-q34",
    position: 1,
    label: "A",
    text: "Le testeur peut se référer aux quadrants respectifs lors de la sélection des types de test, afin que toutes les parties prenantes comprennent mieux le but des tests.",
  },
  {
    id: "ee-q34-b",
    question_id: "ee-q34",
    position: 2,
    label: "B",
    text: "Le testeur peut utiliser les types de test décrits par les quadrants comme métrique de couverture ; plus on exécute de tests de chaque quadrant, plus la couverture est élevée.",
  },
  {
    id: "ee-q34-c",
    question_id: "ee-q34",
    position: 3,
    label: "C",
    text: "L'équipe doit planifier environ le même nombre de cas de test pour chaque quadrant afin de s'assurer que tous les niveaux et types de test sont également pris en compte.",
  },
  {
    id: "ee-q34-d",
    question_id: "ee-q34",
    position: 4,
    label: "D",
    text: "Le testeur peut utiliser les quadrants de test pour l'analyse des risques ; les niveaux inférieurs des quadrants représentant un risque plus faible pour le client.",
  },

  // Q35 Options
  {
    id: "ee-q35-a",
    question_id: "ee-q35",
    position: 1,
    label: "A",
    text: "La complexité du module de base de données a été jugée élevée, par conséquent des cas de test supplémentaires ont été créés pour ce module.",
  },
  {
    id: "ee-q35-b",
    question_id: "ee-q35",
    position: 2,
    label: "B",
    text: "Les exigences relatives à l'interface utilisateur ne sont pas claires, par conséquent un expert en expérience utilisateur est intégré au projet.",
  },
  {
    id: "ee-q35-c",
    question_id: "ee-q35",
    position: 3,
    label: "C",
    text: "Les performances du système sont cruciales pour le succès du projet, par conséquent les revues de code sont ignorées pour gagner du temps.",
  },
  {
    id: "ee-q35-d",
    question_id: "ee-q35",
    position: 4,
    label: "D",
    text: "Le système doit avoir une haute disponibilité, par conséquent des tests de charge supplémentaires sont effectués.",
  },

  // Q36 Options
  {
    id: "ee-q36-a",
    question_id: "ee-q36",
    position: 1,
    label: "A",
    text: "Des moyens de communication formels (p. ex., rapports formels, e-mails) doivent être utilisés pour s'assurer que les informations importantes parviennent aux destinataires.",
  },
  {
    id: "ee-q36-b",
    question_id: "ee-q36",
    position: 2,
    label: "B",
    text: "La communication doit avoir lieu via un groupe de discussion (chat) pour s'assurer que tous les membres de l'équipe sont informés le plus rapidement possible.",
  },
  {
    id: "ee-q36-c",
    question_id: "ee-q36",
    position: 3,
    label: "C",
    text: "Les parties prenantes concernées doivent être informées verbalement du statut des tests afin de transmettre directement les informations clés.",
  },
  {
    id: "ee-q36-d",
    question_id: "ee-q36",
    position: 4,
    label: "D",
    text: "Le statut des tests doit être communiqué lors de réunions de coordination quotidiennes par visioconférence, avec la participation des parties prenantes de tous les fuseaux horaires concernés.",
  },

  // Q37 Options
  {
    id: "ee-q37-a",
    question_id: "ee-q37",
    position: 1,
    label: "A",
    text: "Un testeur enregistre les progrès réalisés pendant la journée de test dans un outil de gestion des tests.",
  },
  {
    id: "ee-q37-b",
    question_id: "ee-q37",
    position: 2,
    label: "B",
    text: "Un testeur stocke les données de test pour l'exécution dirigée par les données dans une base de données et s'assure qu'elles soient lues à l'exécution.",
  },
  {
    id: "ee-q37-c",
    question_id: "ee-q37",
    position: 3,
    label: "C",
    text: "Un testeur utilise un tableur pour formaliser les règles métier d'un système à tester sous forme de tables de décision.",
  },
  {
    id: "ee-q37-d",
    question_id: "ee-q37",
    position: 4,
    label: "D",
    text: "Un testeur restaure automatiquement les éléments de test (test assets) correspondants à une ancienne version d'un produit afin d'effectuer des tests de maintenance sur cette version.",
  },

  // Q38 Options
  {
    id: "ee-q38-a",
    question_id: "ee-q38",
    position: 1,
    label: "A",
    text: "Le résultat réel du test.",
  },
  {
    id: "ee-q38-b",
    question_id: "ee-q38",
    position: 2,
    label: "B",
    text: "L'identification de la version du logiciel testé.",
  },
  {
    id: "ee-q38-c",
    question_id: "ee-q38",
    position: 3,
    label: "C",
    text: "Des idées pour améliorer le cas de test.",
  },
  {
    id: "ee-q38-d",
    question_id: "ee-q38",
    position: 4,
    label: "D",
    text: "La qualité globale du produit testé.",
  },

  // Q39 Options
  {
    id: "ee-q39-a",
    question_id: "ee-q39",
    position: 1,
    label: "A",
    text: "1 – D, 2 – C, 3 – B, 4 – A",
  },
  {
    id: "ee-q39-b",
    question_id: "ee-q39",
    position: 2,
    label: "B",
    text: "1 – B, 2 – A, 3 – C, 4 – D",
  },
  {
    id: "ee-q39-c",
    question_id: "ee-q39",
    position: 3,
    label: "C",
    text: "1 – B, 2 – A, 3 – D, 4 – C",
  },
  {
    id: "ee-q39-d",
    question_id: "ee-q39",
    position: 4,
    label: "D",
    text: "1 – A, 2 – B, 3 – D, 4 – C",
  },

  // Q40 Options
  {
    id: "ee-q40-a",
    question_id: "ee-q40",
    position: 1,
    label: "A",
    text: "L'implémentation des tests de régression est plus simple car ils peuvent être écrits directement avec un script de test.",
  },
  {
    id: "ee-q40-b",
    question_id: "ee-q40",
    position: 2,
    label: "B",
    text: "L'outil d'automatisation permet une évaluation plus efficace de l'objet de test.",
  },
  {
    id: "ee-q40-c",
    question_id: "ee-q40",
    position: 3,
    label: "C",
    text: "Utiliser un outil de test lorsque les tests manuels sont plus appropriés.",
  },
  {
    id: "ee-q40-d",
    question_id: "ee-q40",
    position: 4,
    label: "D",
    text: "Les tests de régression peuvent être exécutés plus rapidement, fournissant ainsi un feedback plus rapide à l'équipe.",
  },
];

export const ENSEMBLE_E_SOLUTIONS = [
  {
    question_id: "ee-q1",
    correct_option_ids: ["ee-q1-b"],
    explanation:
      "La validation que l'objet de test fonctionne comme prévu par les différentes parties prenantes est un objectif de test typique. (Syllabus Section 1.1.1)",
    option_rationales: {
      "ee-q1-a":
        "Faux. Commencer le test juste avant la release n'est pas une bonne pratique ni un objectif de test classique.",
      "ee-q1-b":
        "Correct. La validation vis-à-vis des besoins des parties prenantes est un but fondamental.",
      "ee-q1-c":
        "Faux. Prouver que tous les défauts ont été identifiés est impossible d'après les principes fondamentaux.",
      "ee-q1-d":
        "Faux. Déterminer l'absence d'impact négatif suppose d'avoir trouvé tous les défauts, ce qui contredit le principe 2.",
    },
  },
  {
    question_id: "ee-q2",
    correct_option_ids: ["ee-q2-b"],
    explanation:
      "Le test dynamique révèle les défaillances causées par des défauts. Le débogage analyse et résout le défaut associé. (Syllabus Section 1.1.2)",
    option_rationales: {
      "ee-q2-a":
        "Faux. Le test lui-même n'identifie pas la cause d'un défaut, c'est le rôle du débogage.",
      "ee-q2-b":
        "Correct. Le test dynamique met en évidence les défaillances ; le débogage trouve la cause et la corrige.",
      "ee-q2-c": "Faux. Le test ne corrige ni n'élimine les défaillances par lui-même.",
      "ee-q2-d": "Faux. Le test dynamique n'évite pas les défauts mais démontre leur présence.",
    },
  },
  {
    question_id: "ee-q3",
    correct_option_ids: ["ee-q3-b"],
    explanation:
      "Les tests montrent la présence de défauts mais ne peuvent prouver leur absence. L'impossibilité des tests exhaustifs rend illusoire le fait de vouloir 'attraper tous les bugs'. (Syllabus Section 1.3)",
    option_rationales: {
      "ee-q3-a":
        "Faux. Le regroupement des défauts explique que la majorité des défauts réside dans un petit nombre de modules.",
      "ee-q3-b":
        "Correct. Ce principe stipule qu'on ne peut pas prouver l'absence totale de défauts, même après des tests rigoureux.",
      "ee-q3-c":
        "Faux. L'illusion de l'absence d'erreur signifie que corriger des bugs ne garantit pas le succès si le produit ne répond pas aux besoins.",
      "ee-q3-d": "Faux. L'analyse de cause racine n'est pas un principe de test de l'ISTQB.",
    },
  },
  {
    question_id: "ee-q4",
    correct_option_ids: ["ee-q4-b"],
    explanation:
      "La création ou conception des données de test est une tâche clé de la mise en œuvre des tests. (Syllabus Section 1.4.1)",
    option_rationales: {
      "ee-q4-a": "Faux. Analyser un défaut est une tâche de débogage.",
      "ee-q4-b":
        "Correct. La conception et la création des données nécessaires à l'exécution font partie de la mise en œuvre.",
      "ee-q4-c":
        "Faux. Gérer les versions des éléments de test relève de la gestion de configuration.",
      "ee-q4-d":
        "Faux. Écrire des user stories relève de l'ingénierie des exigences ou du Product Owner.",
    },
  },
  {
    question_id: "ee-q5",
    correct_option_ids: ["ee-q5-a"],
    explanation:
      "Les facteurs techniques comprennent le type de logiciel, l'architecture du produit et les technologies utilisées (comme la compatibilité multi-navigateurs). (Syllabus Section 1.4.2)",
    option_rationales: {
      "ee-q5-a":
        "Correct. La contrainte multi-navigateurs est un facteur purement technique d'environnement et d'architecture.",
      "ee-q5-b":
        "Faux. C'est une contrainte réglementaire / contractuelle (facteur organisationnel).",
      "ee-q5-c": "Faux. C'est un facteur lié au modèle de cycle de vie de développement (SDLC).",
      "ee-q5-d": "Faux. C'est un facteur lié aux personnes et à l'équipe.",
    },
  },
  {
    question_id: "ee-q6",
    correct_option_ids: ["ee-q6-c"],
    explanation:
      "La gestion des tests pilote le processus global et l'équipe, tandis que le rôle de test effectue les tâches de conception, d'analyse et d'exécution des tests. (Syllabus Section 1.4.5)",
    option_rationales: {
      "ee-q6-a":
        "Faux. Cette proposition inverse exactement les rôles de testeur et de responsable des tests.",
      "ee-q6-b":
        "Faux. Bien qu'une personne puisse assumer les deux, leurs responsabilités respectives restent fondamentalement distinctes.",
      "ee-q6-c":
        "Correct. Décrit parfaitement la répartition du pilotage d'un côté et de la conception/exécution de l'autre.",
      "ee-q6-d": "Faux. Les deux rôles ont des attributions claires et spécifiées par le syllabus.",
    },
  },
  {
    question_id: "ee-q7",
    correct_option_ids: ["ee-q7-d"],
    explanation:
      "L'un des avantages clés de l'indépendance est la capacité à remettre en question et challenger les hypothèses et déclarations des parties prenantes. (Syllabus Section 1.5.3)",
    option_rationales: {
      "ee-q7-a":
        "Faux. Bien que ce soit un avantage général, ce n'est pas ce qui s'applique spécifiquement dans cette situation de contradiction de critères d'acceptation.",
      "ee-q7-b":
        "Faux. Les testeurs ne doivent pas prendre la responsabilité exclusive de la qualité.",
      "ee-q7-c":
        "Faux. C'est un inconvénient potentiel si les développeurs se déresponsabilisent de la qualité en comptant trop sur les testeurs.",
      "ee-q7-d":
        "Correct. En tant que tiers indépendant, le testeur apporte un regard critique et remet en question les biais d'interprétation.",
    },
  },
  {
    question_id: "ee-q8",
    correct_option_ids: ["ee-q8-c"],
    explanation:
      "Dans l'approche d'équipe entière, la collaboration est essentielle : les testeurs travaillent main dans la main avec le métier et le dev pour concevoir et affiner les tests. (Syllabus Section 1.5.2)",
    option_rationales: {
      "ee-q8-a": "Faux. Les tests unitaires relèvent de la responsabilité des développeurs.",
      "ee-q8-b":
        "Faux. C'est une décision d'équipe collective ou d'architecture, pas d'un rôle métier isolé.",
      "ee-q8-c":
        "Correct. L'approche Whole-Team promeut la co-conception collaborative des cas de test.",
      "ee-q8-d":
        "Faux. Les tests non fonctionnels requièrent souvent des compétences de test spécifiques partagées par l'ensemble de l'équipe.",
    },
  },
  {
    question_id: "ee-q9",
    correct_option_ids: ["ee-q9-a"],
    explanation:
      "Pour chaque activité de développement, il doit y avoir une activité de test correspondante, et l'analyse/conception des tests doit commencer le plus tôt possible. (Syllabus Section 2.1.2)",
    option_rationales: {
      "ee-q9-a":
        "Correct. Commencer les tests de façon précoce (analyse, conception) en parallèle du dev est une règle d'or du test.",
      "ee-q9-b":
        "Faux. Cela décrit un modèle strictement séquentiel non applicable à l'agile ou à l'itératif.",
      "ee-q9-c": "Faux. Isoler le test après le développement est une mauvaise pratique classique.",
      "ee-q9-d":
        "Faux. Le test n'est pas un incrément isolé, mais s'intègre à l'intérieur de chaque incrément.",
    },
  },
  {
    question_id: "ee-q10",
    correct_option_ids: ["ee-q10-d"],
    explanation:
      "Dériver les tests des critères d'acceptation après coup ou simplement les automatiser n'en fait pas une approche de test en premier (Test-First/Test-Driven) où les tests guident activement l'écriture du code. (Syllabus Section 2.1.3)",
    option_rationales: {
      "ee-q10-a": "Faux. Écrire les tests avant le code est la définition même du test-first.",
      "ee-q10-b": "Faux. C'est l'essence même du TDD (Test-Driven Development).",
      "ee-q10-c":
        "Faux. Définir le comportement attendu à l'aide de cas de test est l'approche BDD/ATDD.",
      "ee-q10-d":
        "Correct. Cette approche est purement réactive et n'utilise pas le test comme moteur de conception ou de développement préalable.",
    },
  },
  {
    question_id: "ee-q11",
    correct_option_ids: ["ee-q11-a"],
    explanation:
      "Le Shift-Left consiste à intégrer les activités de test dès le début du SDLC, plutôt qu'à les repousser à la fin, afin de détecter les défauts au plus tôt. (Syllabus Section 2.1.5)",
    option_rationales: {
      "ee-q11-a":
        "Correct. Commencer le plus tôt possible et tester de manière continue et parallèle définit le Shift-Left.",
      "ee-q11-b": "Faux. C'est l'opposé du Shift-Left (approche traditionnelle tardive).",
      "ee-q11-c":
        "Faux. Commencer au milieu du cycle est trop tardif pour être qualifié de Shift-Left.",
      "ee-q11-d":
        "Faux. Décrit la distribution générale des tests mais pas le concept spécifique de Shift-Left.",
    },
  },
  {
    question_id: "ee-q12",
    correct_option_ids: ["ee-q12-d"],
    explanation:
      "Dans un modèle itératif-incrémental, chaque nouvel incrément s'ajoute au produit existant, ce qui accroît le risque de régression et nécessite des tests de régression solides. (Syllabus Section 2.1.1)",
    option_rationales: {
      "ee-q12-a":
        "Faux. C'est une mauvaise interprétation du cycle en cascade appliquée à l'incrémental.",
      "ee-q12-b":
        "Faux. Les tests statiques doivent être réalisés à tous les niveaux de test, pas seulement sur les composants.",
      "ee-q12-c":
        "Faux. Les tests de régression manuels répétés à chaque itération deviennent vite trop lents ; ils doivent être automatisés.",
      "ee-q12-d":
        "Correct. La régression est le risque majeur en incrémental ; un harnais de régression solide est capital.",
    },
  },
  {
    question_id: "ee-q13",
    correct_option_ids: ["ee-q13-a"],
    explanation:
      "Le test d'intégration des composants se concentre sur les interfaces et les interactions entre les composants du système. (Syllabus Section 2.2.1)",
    option_rationales: {
      "ee-q13-a":
        "Correct. Les interfaces entre composants et la détection d'erreurs d'interactions sont le cœur de l'intégration de composants.",
      "ee-q13-b":
        "Faux. L'acceptation se concentre sur l'utilisabilité globale et la validation métier.",
      "ee-q13-c":
        "Faux. Le test système valide le comportement de bout en bout du système complet.",
      "ee-q13-d": "Faux. Le test unitaire/composant teste les modules de façon isolée.",
    },
  },
  {
    question_id: "ee-q14",
    correct_option_ids: ["ee-q14-d"],
    explanation:
      "L'implémentation de nouvelles fonctionnalités au sein d'un projet de développement actif ne relève pas de la maintenance, tandis que la mise hors service, les correctifs d'urgence et les migrations d'environnement en sont des déclencheurs typiques. (Syllabus Section 2.3.1)",
    option_rationales: {
      "ee-q14-a":
        "Faux. La mise hors service requiert des tests de migration de données ou d'archivage (maintenance).",
      "ee-q14-b":
        "Faux. Corriger des bugs en production est un cas classique de maintenance corrective.",
      "ee-q14-c":
        "Faux. Migrer ou mettre à jour l'OS ou l'infrastructure déclenche des tests de non-régression de maintenance.",
      "ee-q14-d":
        "Correct. L'implémentation initiale de fonctionnalités fait partie du cycle de dev actif, pas de la maintenance d'un système opérationnel existant.",
    },
  },
  {
    question_id: "ee-q15",
    correct_option_ids: ["ee-q15-a"],
    explanation:
      "Détecter les défauts tôt par des tests statiques (revues, analyse statique) est beaucoup moins coûteux à corriger que de les découvrir plus tard via les tests dynamiques. (Syllabus Section 3.1.2)",
    option_rationales: {
      "ee-q15-a":
        "Correct. C'est l'un des bénéfices économiques majeurs reconnus du test statique.",
      "ee-q15-b":
        "Faux. Le test dynamique reste difficile et nécessaire car il cherche des types d'erreurs différents.",
      "ee-q15-c":
        "Faux. Trouver des problèmes d'exécution nécessite l'exécution du code, donc des tests dynamiques.",
      "ee-q15-d":
        "Faux. Le test statique a une valeur immense pour les systèmes critiques pour identifier des défauts conceptuels mortels avant tout codage.",
    },
  },
  {
    question_id: "ee-q16",
    correct_option_ids: ["ee-q16-d"],
    explanation:
      "Un retour d'information précoce et fréquent prévient les malentendus au lieu de les provoquer. L'option d) est donc incorrecte en tant qu'avantage (elle nie le bénéfice décrit). (Syllabus Section 3.2.1)",
    option_rationales: {
      "ee-q16-a": "Faux. C'est un avantage réel pour adapter les spécifications à temps.",
      "ee-q16-b": "Faux. C'est un avantage réel permettant aux développeurs de viser juste.",
      "ee-q16-c":
        "Faux. C'est un avantage réel pour prioriser les fonctions à forte valeur ajoutée.",
      "ee-q16-d":
        "Correct. C'est un inconvénient/risque inexistant dans les faits ; au contraire, le feedback continu élimine les ambiguïtés.",
    },
  },
  {
    question_id: "ee-q17",
    correct_option_ids: ["ee-q17-c"],
    explanation:
      "L'inspection est le type de revue le plus formel, basé sur le processus général complet, et ayant pour objectif principal la détection maximale des anomalies. (Syllabus Section 3.2.4)",
    option_rationales: {
      "ee-q17-a":
        "Faux. La revue informelle ne suit pas de processus structuré et est peu formelle.",
      "ee-q17-b":
        "Faux. La revue technique vise avant tout le consensus et la prise de décision technique.",
      "ee-q17-c":
        "Correct. L'inspection est l'outil ultime de détection d'anomalies de façon extrêmement cadrée et formelle.",
      "ee-q17-d":
        "Faux. La lecture guidée sert principalement à expliquer le produit et former les participants.",
    },
  },
  {
    question_id: "ee-q18",
    correct_option_ids: ["ee-q18-b"],
    explanation:
      "Les participants travaillent déjà en suractivité et leurs tâches n'ont pas été réduites pour leur libérer du temps pour la préparation de la revue volumineuse. (Syllabus Section 3.2.5)",
    option_rationales: {
      "ee-q18-a":
        "Faux. La revue technique est parfaitement adaptée à un document d'architecture complexe.",
      "ee-q18-b":
        "Correct. Sans temps dédié ou réduction de charge, les participants ne peuvent pas se préparer correctement.",
      "ee-q18-c":
        "Faux. On ne peut pas déduire de l'énoncé que les objectifs ou critères étaient absents des documents complémentaires.",
      "ee-q18-d": "Faux. Rien ne suggère que la session sera mal animée ou mal gérée.",
    },
  },
  {
    question_id: "ee-q19",
    correct_option_ids: ["ee-q19-b"],
    explanation:
      "Dériver des cas de test à partir des spécifications fonctionnelles ou des critères d'acceptation d'une user story (sans connaissance du code interne) relève de la boîte noire. (Syllabus Section 4.1.1)",
    option_rationales: {
      "ee-q19-a":
        "Faux. La boîte blanche requiert d'analyser la structure interne du code, indisponible avant le dev.",
      "ee-q19-b": "Correct. Analyse du comportement attendu de l'extérieur = boîte noire.",
      "ee-q19-c":
        "Faux. Bien que l'expérience aide, l'énoncé décrit une dérivation basée sur les exigences écrites (boîte noire).",
      "ee-q19-d": "Faux. La devinette d'erreurs est basée sur l'intuition des pannes historiques.",
    },
  },
  {
    question_id: "ee-q20",
    correct_option_ids: ["ee-q20-b"],
    explanation:
      "On peut couvrir toutes les partitions manquantes en ajoutant seulement 2 cas de test bien ciblés. (Syllabus Section 4.2.1)",
    option_rationales: {
      "ee-q20-a":
        "Faux. 1 cas ne suffirait pas à couvrir à la fois la partition d'heures [3 à 6] et les deux intensités manquantes [Faible, Forte].",
      "ee-q20-b":
        "Correct. On conçoit 2 tests : un test avec H dans [3 à 6] et Intensité 'Faible', et un autre test avec Intensité 'Forte'. Toutes les partitions valides seront ainsi couvertes.",
      "ee-q20-c":
        "Faux. 3 cas de test fonctionneraient mais ce n'est pas le minimum mathématique requis.",
      "ee-q20-d": "Faux. Trop élevé.",
    },
  },
  {
    question_id: "ee-q21",
    correct_option_ids: ["ee-q21-c"],
    explanation:
      "L'option c) contient 5 valeurs limites sur les 8 existantes, offrant la couverture la plus élevée. (Syllabus Section 4.2.2)",
    option_rationales: {
      "ee-q21-a": "Faux. Ne couvre que 4 limites valides : 11, 20, 22 et 23.",
      "ee-q21-b":
        "Faux. Ne couvre que 3 limites valides : 15, 19 et 23 (100 et 9 ne sont pas des limites directes de transition de feedback).",
      "ee-q21-c": "Correct. Couvre 10, 16, 19, 22, 23 (5 limites couvertes).",
      "ee-q21-d": "Faux. Ne couvre que 3 limites valides : 15, 19, 22.",
    },
  },
  {
    question_id: "ee-q22",
    correct_option_ids: ["ee-q22-c"],
    explanation:
      "La règle 2 correspond aux entrées [Vitesse > 50 = Oui] et [Zone Scolaire = Non]. Aucun des cas de test existants ne propose de vitesse supérieure à 50 combinée à l'absence de zone scolaire. (Syllabus Section 4.2.3)",
    option_rationales: {
      "ee-q22-a": "Faux. Couverte par TC3 et TC4.",
      "ee-q22-b": "Faux. Couverte par TC1.",
      "ee-q22-c": "Correct. Aucun cas ne teste vitesse > 50 et zone scolaire = Non.",
      "ee-q22-d": "Faux. Couverte par TC2.",
    },
  },
  {
    question_id: "ee-q23",
    correct_option_ids: ["ee-q23-a"],
    explanation:
      "Il y a quatre branches majeures ramenant à l'état initial (Attente client). Donc 4 tests suffisent. (Syllabus Section 4.2.4)",
    option_rationales: {
      "ee-q23-a":
        "Correct. 4 scénarios distincts permettent de traverser au moins une fois l'intégralité des transitions du diagramme.",
      "ee-q23-b": "Faux. Trop élevé, on ferait des boucles redondantes.",
      "ee-q23-c":
        "Faux. Trop bas, un seul scénario ne peut pas tout couvrir car certains chemins mènent à des échecs ou annulations mutuellement exclusives.",
      "ee-q23-d": "Faux. On recherche le minimum fini de tests.",
    },
  },
  {
    question_id: "ee-q24",
    correct_option_ids: ["ee-q24-b"],
    explanation:
      "La couverture des instructions mesure le pourcentage d'instructions exécutables exécutées par rapport au nombre total d'instructions du code source. (Syllabus Section 4.3.1)",
    option_rationales: {
      "ee-q24-a":
        "Faux. La couverture n'est pas le nombre absolu de lignes exécutées, mais un pourcentage relatif.",
      "ee-q24-b": "Correct. C'est la définition officielle d'un taux de couverture d'instructions.",
      "ee-q24-c":
        "Faux. Compter les lignes de code physique n'est pas fiable en raison du formatage (plusieurs instructions sur une ligne ou inversement).",
      "ee-q24-d": "Faux. C'est une valeur absolue et non une proportion.",
    },
  },
  {
    question_id: "ee-q25",
    correct_option_ids: ["ee-q25-a"],
    explanation:
      "Les tests en boîte blanche permettent de calculer des métriques de couverture structurelle à l'aide du code source. (Syllabus Section 4.3.3)",
    option_rationales: {
      "ee-q25-a": "Correct. C'est l'atout majeur des tests boîte blanche.",
      "ee-q25-b": "Faux. Valider les critères d'acceptation est la force de la boîte noire.",
      "ee-q25-c":
        "Faux. La compatibilité système se valide plutôt de l'extérieur par des tests boîte noire d'intégration.",
      "ee-q25-d": "Faux. Aucune technique ne peut garantir la découverte de 100 % des défauts.",
    },
  },
  {
    question_id: "ee-q26",
    correct_option_ids: ["ee-q26-c"],
    explanation:
      "L'évaluation systématique basée sur des critères prédéfinis, des règles empiriques ou des heuristiques correspond à des tests basés sur des listes de contrôle. (Syllabus Section 4.4.3)",
    option_rationales: {
      "ee-q26-a": "Faux. Pas de conditions/actions combinées ici.",
      "ee-q26-b":
        "Faux. Les tests ne sont pas conçus à la volée de façon libre, mais encadrés par une liste d'heuristiques rigide.",
      "ee-q26-c":
        "Correct. Les critères d'utilisabilité d'un livre forment la liste de contrôle servant de base au test.",
      "ee-q26-d":
        "Faux. Ne repose pas sur l'intuition de pannes mais sur une liste formelle d'heuristiques.",
    },
  },
  {
    question_id: "ee-q27",
    correct_option_ids: ["ee-q27-c"],
    explanation:
      "Le test exploratoire est particulièrement efficace lorsque les testeurs sont expérimentés et possèdent des connaissances métier/domaine solides. (Syllabus Section 4.4.2)",
    option_rationales: {
      "ee-q27-a":
        "Faux. Le test exploratoire ne sert pas à accélérer des tests déjà écrits mais à en concevoir de nouveaux.",
      "ee-q27-b":
        "Faux. On a toujours besoin d'une charte (charter) minimale en test exploratoire.",
      "ee-q27-c":
        "Correct. La connaissance métier et technique des testeurs est le catalyseur de la réussite du test exploratoire.",
      "ee-q27-d":
        "Faux. Si les spécifications sont exhaustives, les techniques boîte noire systématiques sont préférables.",
    },
  },
  {
    question_id: "ee-q28",
    correct_option_ids: ["ee-q28-c"],
    explanation:
      "Un bon critère d'acceptation doit être mesurable et testable de façon objective. Définir une plage de 40 à 80 décibels offre une valeur objective. (Syllabus Section 4.5.2)",
    option_rationales: {
      "ee-q28-a": "Faux. La 'taille adaptée' est subjective et non testable de façon stricte.",
      "ee-q28-b":
        "Faux. 'Bien entendre' dépend de l'audition individuelle du testeur, donc c'est subjectif.",
      "ee-q28-c":
        "Correct. Les décibels sont physiquement mesurables, ce qui rend le critère totalement objectif.",
      "ee-q28-d":
        "Faux. 'Fonctionner correctement' est trop vague et ne définit pas de comportement précis.",
    },
  },
  {
    question_id: "ee-q29",
    correct_option_ids: ["ee-q29-c"],
    explanation:
      "Le cas de test c) inclut à la fois le rôle requis (administrateur système) et l'action spécifique du récit d'utilisateur. (Syllabus Section 4.5.3)",
    option_rationales: {
      "ee-q29-a":
        "Faux. Moins complet car il se limite à 'vérifier' de façon passive sans exécuter de test de performance.",
      "ee-q29-b":
        "Faux. Le rôle de l'utilisateur n'est pas le bon (le récit demande un administrateur système).",
      "ee-q29-c":
        "Correct. Conforme au format Gherkin standard et teste l'action clé pour l'admin.",
      "ee-q29-d": "Faux. Structure confuse ne respectant pas les critères initiaux.",
    },
  },
  {
    question_id: "ee-q30",
    correct_option_ids: ["ee-q30-d"],
    explanation:
      "Lors de la planification de la release, les testeurs collaborent à la rédaction de récits utilisateurs testables et à la définition de critères d'acceptation clairs. (Syllabus Section 5.1.2)",
    option_rationales: {
      "ee-q30-a":
        "Faux. Cela fait partie de l'analyse générale lors de la planification des itérations.",
      "ee-q30-b":
        "Faux. Dériver des tâches de test à partir des récits se fait en planification d'itération.",
      "ee-q30-c": "Faux. L'analyse détaillée des risques par story relève de l'itération.",
      "ee-q30-d":
        "Correct. La définition des récits de release et de leur testabilité est une tâche de release planning.",
    },
  },
  {
    question_id: "ee-q31",
    correct_option_ids: ["ee-q31-d"],
    explanation:
      "Les critères d'entrée exigent l'environnement (3), la spécification validée (5) et le test unitaire validé (6). Les critères de sortie incluent le budget (1), l'exécution (2) et les défauts (4). Option d) est correcte. (Syllabus Section 5.1.3)",
    option_rationales: {
      "ee-q31-a": "Faux. Classe mal l'environnement (3) en critère de sortie.",
      "ee-q31-b": "Faux. Inverse la logique en mettant l'exécution (2) en critère d'entrée.",
      "ee-q31-c": "Faux. Classe le budget épuisé (1) en critère d'entrée, ce qui est absurde.",
      "ee-q31-d":
        "Correct. Les critères d'entrée indispensables sont 3, 5, 6. Les critères de sortie sont 1, 2, 4.",
    },
  },
  {
    question_id: "ee-q32",
    correct_option_ids: ["ee-q32-c"],
    explanation:
      "Application de la formule PERT classique : E = (a + 4m + b) / 6 = 400. Écart type SD = (b - a) / 6 = 33. (Syllabus Section 5.1.4)",
    option_rationales: {
      "ee-q32-a": "Faux. Résultat d'une moyenne incorrecte.",
      "ee-q32-b": "Faux. Calcul erroné.",
      "ee-q32-c": "Correct. L'effort moyen attendu est de 400 avec un écart type de 33.",
      "ee-q32-d": "Faux. Moyenne arithmétique simple excluant l'optimisme.",
    },
  },
  {
    question_id: "ee-q33",
    correct_option_ids: ["ee-q33-d"],
    explanation:
      "T7 -> T8 -> T9 -> T11 -> T10 -> T12 permet de libérer et d'exécuter la priorité urgente 1 (T11) le plus tôt possible, en respectant les dépendances. (Syllabus Section 5.1.5)",
    option_rationales: {
      "ee-q33-a": "Faux. T11 s'exécute avant T9 dont il dépend, ce qui viole la dépendance.",
      "ee-q33-b": "Faux. T10 s'exécute avant T11, retardant l'exécution de la priorité 1.",
      "ee-q33-c": "Faux. Retarde également T11 en intercalant T10.",
      "ee-q33-d":
        "Correct. Respecte toutes les dépendances et priorise idéalement la libération de la tâche critique T11.",
    },
  },
  {
    question_id: "ee-q34",
    correct_option_ids: ["ee-q34-a"],
    explanation:
      "Les quadrants de test fournissent un excellent moyen de structurer et d'expliquer les tests à toutes les parties prenantes. (Syllabus Section 5.1.7)",
    option_rationales: {
      "ee-q34-a": "Correct. C'est l'un des bénéfices de communication majeurs.",
      "ee-q34-b": "Faux. Les quadrants ne servent pas de métrique de couverture.",
      "ee-q34-c":
        "Faux. Il n'est pas nécessaire d'avoir le même nombre de cas de test dans chaque quadrant.",
      "ee-q34-d": "Faux. Les quadrants ne mesurent pas les niveaux de risques clients.",
    },
  },
  {
    question_id: "ee-q35",
    correct_option_ids: ["ee-q35-c"],
    explanation:
      "Sauter les revues de code sous prétexte que les performances sont critiques est une décision absurde qui augmente considérablement les risques. (Syllabus Section 5.2.4)",
    option_rationales: {
      "ee-q35-a":
        "Faux. C'est une mesure d'atténuation classique de concevoir plus de tests sur le module complexe.",
      "ee-q35-b":
        "Faux. C'est une mesure d'atténuation d'amener un expert pour clarifier des besoins flous.",
      "ee-q35-c":
        "Correct. Ne pas faire de revue de code est un non-sens absolu et n'atténue rien, au contraire.",
      "ee-q35-d":
        "Faux. C'est une mesure d'atténuation parfaite d'ajouter des tests de charge si la disponibilité est requise.",
    },
  },
  {
    question_id: "ee-q36",
    correct_option_ids: ["ee-q36-a"],
    explanation:
      "Pour des équipes géographiquement et temporellement réparties, une communication formelle et asynchrone par écrit est indispensable pour garder une trace fiable. (Syllabus Section 5.3.3)",
    option_rationales: {
      "ee-q36-a":
        "Correct. Les canaux formels et écrits résolvent les contraintes asynchrones de décalage horaire.",
      "ee-q36-b":
        "Faux. Les canaux de messagerie instantanée (chat) génèrent trop de bruit et de confusion hors ligne.",
      "ee-q36-c":
        "Faux. La communication verbale directe est impossible à coordonner au quotidien à cause du décalage.",
      "ee-q36-d":
        "Faux. Forcer des visioconférences quotidiennes avec des personnes dont les horaires de sommeil se chevauchent est inefficace et complexe.",
    },
  },
  {
    question_id: "ee-q37",
    correct_option_ids: ["ee-q37-d"],
    explanation:
      "La gestion de configuration permet de versionner et de conserver l'intégrité de tous les livrables et éléments de test. (Syllabus Section 5.4.1)",
    option_rationales: {
      "ee-q37-a": "Faux. Gérer l'avancement quotidien relève du pilotage et du contrôle des tests.",
      "ee-q37-b": "Faux. La gestion des données de test fait partie de l'implémentation.",
      "ee-q37-c": "Faux. Formaliser les exigences en tables de décision fait partie de l'analyse.",
      "ee-q37-d":
        "Correct. Permet de figer et de restaurer fidèlement un état d'assemblage (baseline) pour des tests de maintenance.",
    },
  },
  {
    question_id: "ee-q38",
    correct_option_ids: ["ee-q38-b"],
    explanation:
      "La version exacte de l'objet de test sous examen est une information indispensable pour permettre aux développeurs de corriger le problème sur la bonne base de code. (Syllabus Section 5.5.1)",
    option_rationales: {
      "ee-q38-a": "Faux. Le résultat réel est fourni ('température du café inférieure à 40 °C').",
      "ee-q38-b":
        "Correct. La version du logiciel testé a été oubliée, ce qui est une faute grave.",
      "ee-q38-c":
        "Faux. Améliorer le scénario n'est pas une information obligatoire d'un rapport de défaut.",
      "ee-q38-d":
        "Faux. Évaluer la qualité globale de l'objet n'a pas sa place dans une fiche de bug individuelle.",
    },
  },
  {
    question_id: "ee-q39",
    correct_option_ids: ["ee-q39-c"],
    explanation:
      "L'association correcte est [1 - B, 2 - A, 3 - D, 4 - C], soit l'option c). (Syllabus Section 6.1.1)",
    option_rationales: {
      "ee-q39-a": "Faux. Associe mal la sécurité (1) à la gestion des défauts (D).",
      "ee-q39-b": "Faux. Associe mal la gestion d'activités (3) aux outils de préparation (C).",
      "ee-q39-c": "Correct. Respecte parfaitement les définitions d'outils de l'ISTQB.",
      "ee-q39-d": "Faux. Associe mal la performance (1) aux outils d'exécution (A).",
    },
  },
  {
    question_id: "ee-q40",
    correct_option_ids: ["ee-q40-d"],
    explanation:
      "L'un des avantages majeurs de l'automatisation des tests de régression est le gain de temps considérable lors de l'exécution, offrant des retours rapides à l'équipe. (Syllabus Section 6.2.1)",
    option_rationales: {
      "ee-q40-a":
        "Faux. Écrire les scripts de test d'automatisation est généralement plus complexe que de spécifier des tests manuels.",
      "ee-q40-b":
        "Faux. L'évaluation de l'outil n'est pas forcément 'plus efficace', mais plus objective et rapide.",
      "ee-q40-c": "Faux. C'est un risque majeur d'automatiser des tests inadaptés.",
      "ee-q40-d":
        "Correct. Accélérer l'exécution de non-régression est le but premier de l'automatisation.",
    },
  },
];
