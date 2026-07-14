// ISTQB Foundation Level v4.0 - Ensemble B (v1.3.3) - Seed Data

const ENSEMBLE_B_EXAM_ID = "ctfl-exam-v4-ensemble-b-2026";

export const ENSEMBLE_B_EXAM = {
  id: ENSEMBLE_B_EXAM_ID,
  title: "Examen Échantillon CTFL v4.0 — ENSEMBLE B (v1.3.3)",
  description:
    "Examen officiel d'entraînement officiel de l'ISTQB niveau fondamental v4.0 (Ensemble B, v1.3.3, édition GTB). Comprend 40 questions couvrant l'ensemble du syllabus avec explications et justifications de la correction officielle.",
  language: "fr",
  duration_minutes: 60,
  total_questions: 40,
  passing_threshold: 65, // 26 points out of 40 (65%)
  points_per_question: 1,
  attempts_allowed: null,
  status: "published",
  created_at: "2026-07-14T03:30:00Z",
};

export const ENSEMBLE_B_QUESTIONS = [
  // Chapter 1 (Q1 - Q8)
  {
    id: "eb-q1",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 1,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.2.1",
    text: "Laquelle des propositions suivantes décrit le mieux pourquoi les tests sont nécessaires dans le cycle de vie du développement logiciel ?",
  },
  {
    id: "eb-q2",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 2,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.2.2",
    text: "Quelle est la différence entre les tests et l'assurance qualité ?",
  },
  {
    id: "eb-q3",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 3,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.3.1",
    text: "Un testeur teste des applications logicielles sur des appareils mobiles depuis 5 ans. Au cours de cette période prolongée, le testeur n'a pas modifié les cas de test existants ni créé de nouveaux cas de test. Avec les nouvelles versions de la plateforme mobile, davantage de défaillances ont été signalées par les utilisateurs. Quel principe de test le testeur n'a-t-il pas pris en compte ?",
  },
  {
    id: "eb-q4",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 4,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.3",
    text: "Considérez le livrable de test suivant :\n\n- Charte de test n°04.018 | Durée de la session : 1h\n- Explorer : la page d'inscription\n- Avec : divers ensembles de saisies incorrectes\n- Pour découvrir : des erreurs dans le processus d'inscription avec des saisies incorrectes\n\nDans quelle activité de test ce livrable de test est-il créé ?",
  },
  {
    id: "eb-q5",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 5,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.2",
    text: "Lequel des éléments suivants aura le PLUS d'impact sur la façon dont les tests sont effectués pour un objet de test donné ?",
  },
  {
    id: "eb-q6",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 6,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.4",
    text: "Considérez les activités de test suivantes :\n1. Sélectionner les tests de régression\n2. Évaluer l'exhaustivité de l'exécution des tests\n3. Identifier quelles user stories ont des rapports de défauts ouverts\n4. Évaluer si le nombre de tests pour chaque exigence est cohérent avec le niveau de risque produit\n\nConsidérez les façons suivantes dont la traçabilité peut aider les tests :\nA. Améliorer la compréhension des rapports d'avancement des tests pour inclure l'état des éléments de la base de test\nB. Rendre les activités de test auditables\nC. Fournir des informations pour évaluer la qualité du processus\nD. Analyser l'impact des changements\n\nLaquelle des propositions suivantes associe le mieux l'activité de test à la façon dont la traçabilité peut aider cette activité ?",
  },
  {
    id: "eb-q7",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 7,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.1",
    text: "Vous faites partie d'une équipe de test impliquée dans le développement d'un système de contrôle d'hélicoptère. Récemment, un pilote d'hélicoptère expérimenté a été embauché comme testeur pour l'équipe de test.\n\nQuels effets positifs les compétences générales du nouveau testeur sont-elles SUSCEPTIBLES d'avoir sur l'équipe de test ?",
  },
  {
    id: "eb-q8",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 8,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.2",
    text: "Lequel des éléments suivants est un avantage de l'approche équipe entière (whole-team approach) ?",
  },

  // Chapter 2 (Q9 - Q14)
  {
    id: "eb-q9",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 9,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.1",
    text: "Laquelle des affirmations suivantes concernant le choix du cycle de vie du développement logiciel (SDLC) et sa relation avec les tests est CORRECTE ?",
  },
  {
    id: "eb-q10",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 10,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.2",
    text: "Laquelle des propositions suivantes est une bonne pratique de test qui s'applique à tous les cycles de vie du développement logiciel ?",
  },
  {
    id: "eb-q11",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 11,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.3",
    text: "Lequel des éléments suivants est un exemple d'approche de développement orientée 'test en premier' (test-first approach) ?",
  },
  {
    id: "eb-q12",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 12,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.4",
    text: "Laquelle des affirmations suivantes concernant le DevOps est CORRECTE ?",
  },
  {
    id: "eb-q13",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 13,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.2.1",
    text: "Lequel des éléments suivants est le PLUS susceptible d'être exécuté dans le cadre des tests système ?",
  },
  {
    id: "eb-q14",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 14,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.3.1",
    text: "Laquelle des décisions suivantes ne doit PAS déclencher de tests de maintenance ?",
  },

  // Chapter 3 (Q15 - Q18)
  {
    id: "eb-q15",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 15,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.2",
    text: "Laquelle des affirmations suivantes décrit LE MIEUX l'utilisation des tests statiques ?",
  },
  {
    id: "eb-q16",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 16,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.1",
    text: "Lequel des éléments suivants est un avantage d'un retour d'information précoce et fréquent des parties prenantes ?",
  },
  {
    id: "eb-q17",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 17,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.2",
    text: "Étant donné les descriptions de tâches suivantes du processus de revue :\n1. Les caractéristiques de qualité à évaluer et les critères de sortie sont définis.\n2. Tout le monde a accès au produit de travail.\n3. Les anomalies sont identifiées dans le produit de travail.\n4. Les anomalies sont analysées et discutées.\n\nEt les activités de revue suivantes :\nA. Revue individuelle\nB. Initialisation de la revue\nC. Planification\nD. Communication et analyse\n\nQuelle affectation de tâche à activité est CORRECTE ?",
  },
  {
    id: "eb-q18",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 18,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.3",
    text: "Le processus de revue générique reconnaît les rôles suivants, entre autres :\n1. Scribe\n2. Animateur de revue (Review leader)\n3. Facilitateur\n4. Manager\n\nDans le contexte des revues, ces rôles peuvent assumer les responsabilités suivantes :\nA. Assure le bon déroulement des réunions de revue et la mise en place d'un environnement de revue sûr\nB. Enregistre les informations de revue, telles que les décisions et les nouvelles anomalies trouvées lors de la réunion de revue\nC. Décide de ce qui doit être revu et fournit des ressources, telles que du personnel et du temps pour la revue\nD. Assume la responsabilité globale de la revue, comme l'organisation du moment et de l'endroit où la revue aura lieu\n\nLaquelle des affectations suivantes de rôles aux responsabilités est correcte ?",
  },

  // Chapter 4 (Q19 - Q29)
  {
    id: "eb-q19",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 19,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.1.1",
    text: "Laquelle des affirmations suivantes décrit LE MIEUX la différence entre le test par table de décision et le test des branches (branch testing) ?",
  },
  {
    id: "eb-q20",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 20,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.1",
    text: "Les clients de la chaîne de lavage de voitures 'TestWash' ont des cartes de fidélité comportant le nombre de lavages achetés précédemment. La valeur initiale est de 0. Après être entré dans le lavage de voitures, le système augmente de un le nombre sur la carte. Cette valeur représente le nombre du lavage en cours. Le système décide du niveau de remise auquel le client a droit en fonction de ce nombre.\n\nPour chaque dixième lavage, le système accorde une remise de 10 %, et pour chaque vingtième lavage, le système accorde une remise supplémentaire de 40 % (soit une remise de 50 % au total).\n\nLequel des ensembles de données d'entrée suivants (compris comme le nombre du lavage en cours) permet d'obtenir la couverture de partitions d'équivalence la plus élevée ?",
  },
  {
    id: "eb-q21",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 21,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.2",
    text: "Un système de stockage de vin utilise un dispositif de contrôle pour mesurer la température (T) de la cave à vin (mesurée en °C, arrondie au degré le plus proche) et alerte l'utilisateur si la température optimale est dépassée ou non atteinte :\n\n• Si 11 <= T <= 13, le système signale : 'optimal temperature'\n• Si T < 11, le système signale : 'The temperature is too low!'\n• Si T > 13, le système signale : 'The temperature is too high!'\n\nVous appliquez l'analyse des valeurs limites à 3 valeurs pour vérifier le comportement attendu du contrôleur. L'entrée de test est une température fournie par l'appareil en °C.\n\nQuelles entrées de test permettent d'obtenir une couverture de 100 % ?",
  },
  {
    id: "eb-q22",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 22,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.3",
    text: "La table de décision suivante contient les règles permettant de déterminer le risque d'athérosclérose en fonction de la valeur mesurée du cholestérol et de la pression artérielle du patient.\n\nConditions :\n- Cholestérol (mg/dl) : <=124 (Règles 1 & 2) | 125–200 (Règles 3 & 4) | >=201 (Règle 5)\n- Pression artérielle (mm Hg) : <=140 (Règle 1 & 3) | >140 (Règle 2 & 4) | - (Règle 5)\n\nActions :\n- Niveau de risque : très bas (Règle 1) | bas (Règle 2) | moyen (Règle 3) | haut (Règle 4) | très haut (Règle 5)\n\nVous avez conçu les cas de test avec les données d'entrée suivantes :\n- TC1 : Cholestérol = 125 mg/dl, Pression artérielle = 141 mm Hg\n- TC2 : Cholestérol = 200 mg/dl, Pression artérielle = 201 mm Hg\n- TC3 : Cholestérol = 124 mg/dl, Pression artérielle = 201 mm Hg\n- TC4 : Cholestérol = 109 mg/dl, Pression artérielle = 200 mm Hg\n- TC5 : Cholestérol = 201 mg/dl, Pression artérielle = 140 mm Hg\n\nQuelle est la couverture de table de décision obtenue par ces cas de test ?",
  },
  {
    id: "eb-q23",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 23,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.4",
    text: "Étant donné le diagramme de transition d'état d'un chargeur de batterie, avec les états : Standby, Off, Maintenance charging, Low, Charging, High.\n\nLequel des cas de test suivants comprend des transitions à la fois valides et invalides ?",
  },
  {
    id: "eb-q24",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 24,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.1",
    text: "Vous exécutez deux cas de test, T1 et T2, sur le même code. Le test T1 a obtenu une couverture des instructions de 40 % et le test T2 a obtenu une couverture des instructions de 65 %.\n\nSur la base des informations ci-dessus, laquelle des affirmations suivantes doit être vraie ?",
  },
  {
    id: "eb-q25",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 25,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.2",
    text: "Soit la métrique de couverture des branches définie par BCov = (X / Y) * 100 %.\n\nQue représentent X et Y dans cette formule ?",
  },
  {
    id: "eb-q26",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 26,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.2",
    text: "Laquelle des affirmations suivantes fournit la MEILLEURE justification pour l'utilisation de tests exploratoires ?",
  },
  {
    id: "eb-q27",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 27,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.3",
    text: "Lequel des éléments suivants est le MEILLEUR exemple de condition de test lors de l'utilisation de tests basés sur des listes de contrôle (checklist-based testing) ?",
  },
  {
    id: "eb-q28",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 28,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.2",
    text: "Considérez les critères d'acceptation suivants pour une user story rédigée du point de vue d'un propriétaire de boutique en ligne :\n\n- Étant donné que l'utilisateur est connecté et sur la page d'accueil :\n- Quand l'utilisateur clique sur le bouton 'Ajouter un article',\n- Alors le formulaire 'Créer un article' doit apparaître,\n- Et l'utilisateur doit pouvoir saisir un nom et un prix pour le nouvel article.\n\nDans quel format ces critères d'acceptation sont-ils rédigés ?",
  },
  {
    id: "eb-q29",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 29,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.3",
    text: "Veuillez considérer la User Story suivante :\n'En tant qu'entraîneur d'une équipe de football, je veux pouvoir récupérer la liste d'éligibilité pour un jour de match dans DFBNET afin de pouvoir attribuer l'effectif pour le prochain jour de match.'\n\nQuel cas de test est le MIEUX adapté au développement piloté par les tests d'acceptation (ATDD) de cette User Story ?",
  },

  // Chapter 5 (Q30 - Q38)
  {
    id: "eb-q30",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 30,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.3",
    text: "Votre équipe suit un processus qui utilise un pipeline d'intégration et de livraison continues (CI/CD) avec une approche shift-left. Les trois premières étapes de ce processus sont :\n(1) Développer et déployer le code\n(2) Soumettre le code dans un système de contrôle de version et le fusionner dans la branche 'test'\n(3) Effectuer des tests de composants pour le code soumis\n\nLequel des critères suivants est le MIEUX adapté comme critère d'entrée pour l'étape (2) de ce pipeline ?",
  },
  {
    id: "eb-q31",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 31,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.4",
    text: "Vous souhaitez estimer l'effort de test pour un nouveau projet en utilisant une estimation basée sur des ratios. Vous calculez le ratio effort de test / effort de développement à l'aide de données moyennes pour les efforts de développement et de test de quatre projets historiques similaires au nouveau. Le tableau ci-dessous présente ces données historiques :\n\n- Projet P1 | Effort de développement : 800 000 $ | Effort de test : 40 000 $\n- Projet P2 | Effort de développement : 1 200 000 $ | Effort de test : 130 000 $\n- Projet P3 | Effort de développement : 600 000 $ | Effort de test : 70 000 $\n- Projet P4 | Effort de développement : 1 000 000 $ | Effort de test : 120 000 $\n\nL'effort de développement estimé pour le nouveau projet est de 800 000 $. Quelle est votre estimation de l'effort de test pour ce projet ?",
  },
  {
    id: "eb-q32",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 32,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.5",
    text: "On vous a demandé d'établir une séquence d'exécution optimale et basée sur les risques pour les cas de test suivants, qui ont déjà été priorisés et examinés pour détecter d'éventuelles dépendances :\n\n- T1 | Priorité : 3 | Dépend de : -\n- T2 | Priorité : 1 | Dépend de : T1\n- T3 | Priorité : 3 | Dépend de : T2\n- T4 | Priorité : 3 | Dépend de : T2\n- T5 | Priorité : 1 | Dépend de : T3\n- T6 | Priorité : 2 | Dépend de : T4\n\nLa priorité 1 est plus urgente que la priorité 2, et ainsi de suite.\n\nLaquelle des séquences de test suivantes prend en compte les dépendances et les priorités mentionnées ci-dessus ?",
  },
  {
    id: "eb-q33",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 33,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.7",
    text: "Selon le modèle des quadrants de test, lequel des éléments suivants est affecté au quadrant Q1 ('face technique' et 'soutien à l'équipe') ?",
  },
  {
    id: "eb-q34",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 34,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.2.4",
    text: "Dans le contexte de la gestion des risques, identifiez l'affirmation qui ne décrit PAS précisément la relation entre le risque produit et la planification des tests ?",
  },
  {
    id: "eb-q35",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 35,
    chapter: 5,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-5.3.1",
    text: "Lequel des éléments suivants est une métrique de qualité produit ?",
  },
  {
    id: "eb-q36",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 36,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.3.3",
    text: "Imaginez que vous faites partie d'une équipe agile basée en Amérique du Nord. Votre équipe développe un produit pour un client situé en Europe. L'équipe adhère à l'approche DevOps et utilise un pipeline d'intégration continue/livraison continue pour le développement.\n\nCompte tenu de la distance géographique et de la nature agile du projet, laquelle des méthodes de communication suivantes serait la MOINS efficace pour transmettre l'avancement des tests au client ?",
  },
  {
    id: "eb-q37",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 37,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.4.1",
    text: "Laquelle des propositions suivantes décrit LE MIEUX comment la gestion de configuration (CM) soutient les tests ?",
  },
  {
    id: "eb-q38",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 38,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.5.1",
    text: "Vous testez une fonction de tri qui prend en entrée une liste de nombres et renvoie les mêmes nombres triés par ordre croissant.\n\nLe journal d'exécution des tests se présente comme suit :\n- Configuration de l'environnement : build 2.002.2182 de la fonction de tri, jeu de cas de test : TCS-3, nombre de cas de test : 5\n- ID de l'exécution : 736\n- Début : 12:43:21.003\n- 12:43:21.003 : Exécution de TC1. Saisie : 3. Sortie : 3. Résultat : réussi\n- 12:43:21.003 : Exécution de TC2. Saisie : 3, 11, 6, 5. Sortie : 3, 5, 6, 11. Résultat : réussi\n- 12:43:21.004 : Exécution de TC3. Saisie : 8, 7, 3, 7, 1. Sortie : 1, 3, 7, 8. Résultat : échoué\n- 12:43:21.005 : Exécution de TC4. Saisie : -2, -2, -2, -3, -3. Sortie : -3, -2. Résultat : échoué\n- 12:43:21.005 : Exécution de TC5. Saisie : 0, -2, 0, 3, 4, 4. Sortie : -2, 0, 3, 4. Résultat : échoué\n- Fin : 12:43:21.005\n- Temps total du cycle : 0:00:00.002\n\nLaquelle des propositions suivantes fournit la MEILLEURE description de la défaillance à utiliser dans un rapport de défaut ?",
  },

  // Chapter 6 (Q39 - Q40)
  {
    id: "eb-q39",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 39,
    chapter: 6,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-6.1.1",
    text: "Considérez les descriptions suivantes :\n1. Support pour le suivi des flux de travail\n2. Faciliter la communication\n3. Machines virtuelles\n4. Support pour l'évaluation des revues\n\nEt les catégories d'outils de test suivantes :\nA. Outils de test statique\nB. Outils prenant en charge l'évolutivité et la standardisation du déploiement\nC. Outils DevOps\nD. Outils de collaboration\n\nLaquelle des propositions suivantes associe LE MIEUX les descriptions et les catégories d'outils ?",
  },
  {
    id: "eb-q40",
    exam_id: ENSEMBLE_B_EXAM_ID,
    position: 40,
    chapter: 6,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-6.2.1",
    text: "Lequel des éléments suivants est le PLUS susceptible de s'appliquer à l'automatisation des tests ?",
  },
];

export const ENSEMBLE_B_OPTIONS = [
  // eb-q1 Options
  {
    id: "eb-q1-a",
    question_id: "eb-q1",
    position: 1,
    label: "A",
    text: "Le test dynamique est le seul moyen d'évaluer la qualité d'un objet de test.",
  },
  {
    id: "eb-q1-b",
    question_id: "eb-q1",
    position: 2,
    label: "B",
    text: "Les tests garantissent que les utilisateurs comprennent et appréhendent les besoins des développeurs.",
  },
  {
    id: "eb-q1-c",
    question_id: "eb-q1",
    position: 3,
    label: "C",
    text: "Les tests sont effectués exclusivement pour répondre à des normes réglementaires.",
  },
  {
    id: "eb-q1-d",
    question_id: "eb-q1",
    position: 4,
    label: "D",
    text: "Les tests aident à identifier les défauts, ce qui améliore la qualité de l'objet de test.",
  },

  // eb-q2 Options
  {
    id: "eb-q2-a",
    question_id: "eb-q2",
    position: 1,
    label: "A",
    text: "Les tests sont une approche préventive orientée processus, tandis que l'assurance qualité est une approche corrective orientée produit.",
  },
  {
    id: "eb-q2-b",
    question_id: "eb-q2",
    position: 2,
    label: "B",
    text: "L'assurance qualité est orientée processus et vise à améliorer le processus, tandis que les tests visent une qualité appropriée par le biais de mesures orientées produit.",
  },
  {
    id: "eb-q2-c",
    question_id: "eb-q2",
    position: 3,
    label: "C",
    text: "Les tests et l'assurance qualité sont identiques et peuvent être utilisés de manière synonyme.",
  },
  {
    id: "eb-q2-d",
    question_id: "eb-q2",
    position: 4,
    label: "D",
    text: "L'assurance qualité fait uniquement référence au processus de test, tandis que les tests englobent l'ensemble du processus de développement.",
  },

  // eb-q3 Options
  {
    id: "eb-q3-a",
    question_id: "eb-q3",
    position: 1,
    label: "A",
    text: "Les tests dépendent du contexte",
  },
  {
    id: "eb-q3-b",
    question_id: "eb-q3",
    position: 2,
    label: "B",
    text: "Les tests exhaustifs sont impossibles",
  },
  { id: "eb-q3-c", question_id: "eb-q3", position: 3, label: "C", text: "Les tests s'usent" },
  {
    id: "eb-q3-d",
    question_id: "eb-q3",
    position: 4,
    label: "D",
    text: "Regroupement des défauts",
  },

  // eb-q4 Options
  { id: "eb-q4-a", question_id: "eb-q4", position: 1, label: "A", text: "Planification des tests" },
  {
    id: "eb-q4-b",
    question_id: "eb-q4",
    position: 2,
    label: "B",
    text: "Suivi et contrôle des tests",
  },
  { id: "eb-q4-c", question_id: "eb-q4", position: 3, label: "C", text: "Analyse de test" },
  { id: "eb-q4-d", question_id: "eb-q4", position: 4, label: "D", text: "Conception de test" },

  // eb-q5 Options
  {
    id: "eb-q5-a",
    question_id: "eb-q5",
    position: 1,
    label: "A",
    text: "Le niveau d'expérience moyen de l'équipe marketing de l'organisation.",
  },
  {
    id: "eb-q5-b",
    question_id: "eb-q5",
    position: 2,
    label: "B",
    text: "Le fait que les utilisateurs sachent qu'un nouveau système est en cours de développement pour eux.",
  },
  {
    id: "eb-q5-c",
    question_id: "eb-q5",
    position: 3,
    label: "C",
    text: "Le nombre d'années d'expérience en test des membres de l'équipe de test.",
  },
  {
    id: "eb-q5-d",
    question_id: "eb-q5",
    position: 4,
    label: "D",
    text: "La structure organisationnelle des utilisateurs de l'application à développer.",
  },

  // eb-q6 Options
  { id: "eb-q6-a", question_id: "eb-q6", position: 1, label: "A", text: "1D, 2B, 3C, 4A" },
  { id: "eb-q6-b", question_id: "eb-q6", position: 2, label: "B", text: "1B, 2D, 3A, 4C" },
  { id: "eb-q6-c", question_id: "eb-q6", position: 3, label: "C", text: "1D, 2C, 3A, 4B" },
  { id: "eb-q6-d", question_id: "eb-q6", position: 4, label: "D", text: "1D, 2B, 3A, 4C" },

  // eb-q7 Options
  {
    id: "eb-q7-a",
    question_id: "eb-q7",
    position: 1,
    label: "A",
    text: "L'application de l'analyse des valeurs limites à 3 valeurs pour une conception de test plus approfondie lors des tests système.",
  },
  {
    id: "eb-q7-b",
    question_id: "eb-q7",
    position: 2,
    label: "B",
    text: "Les incohérences et les ambiguïtés dans les exigences techniques sont efficacement révélées.",
  },
  {
    id: "eb-q7-c",
    question_id: "eb-q7",
    position: 3,
    label: "C",
    text: "L'utilisation d'un outil pour automatiser les tests de transition d'état.",
  },
  {
    id: "eb-7-d",
    question_id: "eb-q7",
    position: 4,
    label: "D",
    text: "Les résultats des tests sont communiqués de manière plus constructive et défensive aux développeurs.",
  },

  // eb-q8 Options
  {
    id: "eb-q8-a",
    question_id: "eb-q8",
    position: 1,
    label: "A",
    text: "Elle permet aux membres de l'équipe d'assumer n'importe quel rôle à tout moment.",
  },
  {
    id: "eb-q8-b",
    question_id: "eb-q8",
    position: 2,
    label: "B",
    text: "Une seule équipe est nécessaire pour soutenir l'ensemble du projet de développement.",
  },
  {
    id: "eb-q8-c",
    question_id: "eb-q8",
    position: 3,
    label: "C",
    text: "Les testeurs peuvent travailler de manière isolée sans distraire les développeurs ou les représentants métiers avec des informations spécifiques aux tests.",
  },
  {
    id: "eb-q8-d",
    question_id: "eb-q8",
    position: 4,
    label: "D",
    text: "Elle génère une synergie d'équipe qui profite à l'ensemble du projet.",
  },

  // eb-q9 Options
  {
    id: "eb-q9-a",
    question_id: "eb-q9",
    position: 1,
    label: "A",
    text: "Si le développement logiciel agile est utilisé, l'automatisation des tests système remplace le besoin de tests de régression.",
  },
  {
    id: "eb-q9-b",
    question_id: "eb-q9",
    position: 2,
    label: "B",
    text: "Si un modèle de développement séquentiel est utilisé, alors les tests dynamiques sont généralement effectués à une étape ultérieure du cycle de vie.",
  },
  {
    id: "eb-q9-c",
    question_id: "eb-q9",
    position: 3,
    label: "C",
    text: "Si un modèle de développement itératif est utilisé, alors les tests de composants sont généralement effectués manuellement par les développeurs.",
  },
  {
    id: "eb-q9-d",
    question_id: "eb-q9",
    position: 4,
    label: "D",
    text: "Si un modèle de développement incrémental est utilisé, alors les tests statiques sont effectués dans les premiers incréments et les tests dynamiques dans les incréments ultérieurs.",
  },

  // eb-q10 Options
  {
    id: "eb-q10-a",
    question_id: "eb-q10",
    position: 1,
    label: "A",
    text: "Les testeurs doivent revoir les produits de travail dans le cadre de la phase de développement suivante.",
  },
  {
    id: "eb-q10-b",
    question_id: "eb-q10",
    position: 2,
    label: "B",
    text: "Les testeurs doivent revoir les produits de travail d'une activité de développement logiciel dès que des ébauches sont disponibles.",
  },
  {
    id: "eb-q10-c",
    question_id: "eb-q10",
    position: 3,
    label: "C",
    text: "Les testeurs ne doivent revoir les produits de travail d'une activité de développement logiciel que dans le cadre des activités d'analyse et de conception des tests.",
  },
  {
    id: "eb-q10-d",
    question_id: "eb-q10",
    position: 4,
    label: "D",
    text: "Les testeurs doivent revoir les produits de travail immédiatement après leur mise en circulation pour utilisation.",
  },

  // eb-q11 Options
  {
    id: "eb-q11-a",
    question_id: "eb-q11",
    position: 1,
    label: "A",
    text: "Développement piloté par les tests (TDD)",
  },
  {
    id: "eb-q11-b",
    question_id: "eb-q11",
    position: 2,
    label: "B",
    text: "Développement piloté par la couverture (CDD)",
  },
  {
    id: "eb-q11-c",
    question_id: "eb-q11",
    position: 3,
    label: "C",
    text: "Développement piloté par la qualité (QDD)",
  },
  {
    id: "eb-q11-d",
    question_id: "eb-q11",
    position: 4,
    label: "D",
    text: "Développement piloté par les fonctionnalités (FDD)",
  },

  // eb-q12 Options
  {
    id: "eb-q12-a",
    question_id: "eb-q12",
    position: 1,
    label: "A",
    text: "Pour accélérer les livraisons, l'intégration continue est utilisée pour encourager les développeurs à soumettre du code rapidement sans avoir besoin de terminer les tests de composants.",
  },
  {
    id: "eb-q12-b",
    question_id: "eb-q12",
    position: 2,
    label: "B",
    text: "Pour pouvoir mettre à jour et livrer les systèmes plus rapidement, des tests de régression automatisés sont nécessaires pour réduire le risque de régression.",
  },
  {
    id: "eb-q12-c",
    question_id: "eb-q12",
    position: 3,
    label: "C",
    text: "Pour traiter équitablement les développeurs et les opérations, les testeurs alloueront plus d'efforts aux tests de livraison aux opérations en utilisant une approche shift-right.",
  },
  {
    id: "eb-q12-d",
    question_id: "eb-q12",
    position: 4,
    label: "D",
    text: "Pour créer une synergie accrue entre les testeurs, les développeurs et les opérations, les tests doivent devenir entièrement automatisés sans aucun test manuel.",
  },

  // eb-q13 Options
  {
    id: "eb-q13-a",
    question_id: "eb-q13",
    position: 1,
    label: "A",
    text: "Tests de sécurité de bout en bout d'un système de gestion de crédit par une équipe de test indépendante.",
  },
  {
    id: "eb-q13-b",
    question_id: "eb-q13",
    position: 2,
    label: "B",
    text: "Tester l'interaction d'un système de change avec un système bancaire externe ou avec le système d'une banque externe.",
  },
  {
    id: "eb-q13-c",
    question_id: "eb-q13",
    position: 3,
    label: "C",
    text: "Test bêta d'un système d'apprentissage par les formateurs des organismes de formation.",
  },
  {
    id: "eb-q13-d",
    question_id: "eb-q13",
    position: 4,
    label: "D",
    text: "Tester les interactions entre l'interface utilisateur et la base de données d'un système de ressources humaines.",
  },

  // eb-q14 Options
  {
    id: "eb-q14-a",
    question_id: "eb-q14",
    position: 1,
    label: "A",
    text: "La décision de tester la maintenabilité du logiciel.",
  },
  {
    id: "eb-q14-b",
    question_id: "eb-q14",
    position: 2,
    label: "B",
    text: "La décision de tester le système après une migration vers une nouvelle plateforme d'exploitation.",
  },
  {
    id: "eb-q14-c",
    question_id: "eb-q14",
    position: 3,
    label: "C",
    text: "La décision de tester la récupérabilité des données archivées après un déclassement (mise hors service).",
  },
  {
    id: "eb-q14-d",
    question_id: "eb-q14",
    position: 4,
    label: "D",
    text: "La décision de tester après l'application d'un 'correctif d'urgence' (hotfix) sur la version de production.",
  },

  // eb-q15 Options
  {
    id: "eb-q15-a",
    question_id: "eb-q15",
    position: 1,
    label: "A",
    text: "Les tests statiques peuvent découvrir des défauts qui ne peuvent pas être trouvés par des tests dynamiques.",
  },
  {
    id: "eb-q15-b",
    question_id: "eb-q15",
    position: 2,
    label: "B",
    text: "Les défauts dans le code peuvent être trouvés plus efficacement par des tests dynamiques que par des tests statiques.",
  },
  {
    id: "eb-q15-c",
    question_id: "eb-q15",
    position: 3,
    label: "C",
    text: "Les tests statiques ne peuvent être effectués que dans une phase tardive du SDLC.",
  },
  {
    id: "eb-q15-d",
    question_id: "eb-q15",
    position: 4,
    label: "D",
    text: "Pour rendre les tests statiques aussi efficaces que possible, le moins de parties prenantes possible doivent être impliquées.",
  },

  // eb-q16 Options
  {
    id: "eb-q16-a",
    question_id: "eb-q16",
    position: 1,
    label: "A",
    text: "Les managers savent quels développeurs sont les moins productifs à un stade précoce.",
  },
  {
    id: "eb-q16-b",
    question_id: "eb-q16",
    position: 2,
    label: "B",
    text: "Cela permet aux chefs de projet de réduire leurs interactions avec les parties prenantes.",
  },
  {
    id: "eb-q16-c",
    question_id: "eb-q16",
    position: 3,
    label: "C",
    text: "Cela facilite la communication précoce des problèmes de qualité potentiels.",
  },
  {
    id: "eb-q16-d",
    question_id: "eb-q16",
    position: 4,
    label: "D",
    text: "Les utilisateurs finaux comprennent mieux pourquoi le déploiement de l'application est retardé.",
  },

  // eb-q17 Options
  { id: "eb-q17-a", question_id: "eb-q17", position: 1, label: "A", text: "1B, 2C, 3D, 4A" },
  { id: "eb-q17-b", question_id: "eb-q17", position: 2, label: "B", text: "1B, 2D, 3C, 4A" },
  { id: "eb-q17-c", question_id: "eb-q17", position: 3, label: "C", text: "1C, 2A, 3B, 4D" },
  { id: "eb-q17-d", question_id: "eb-q17", position: 4, label: "D", text: "1C, 2B, 3A, 4D" },

  // eb-q18 Options
  { id: "eb-q18-a", question_id: "eb-q18", position: 1, label: "A", text: "1A, 2B, 3D, 4C" },
  { id: "eb-q18-b", question_id: "eb-q18", position: 2, label: "B", text: "1A, 2C, 3B, 4D" },
  { id: "eb-q18-c", question_id: "eb-q18", position: 3, label: "C", text: "1B, 2D, 3A, 4C" },
  { id: "eb-q18-d", question_id: "eb-q18", position: 4, label: "D", text: "1B, 2D, 3C, 4A" },

  // eb-q19 Options
  {
    id: "eb-q19-a",
    question_id: "eb-q19",
    position: 1,
    label: "A",
    text: "Dans le test par table de décision, les cas de test sont dérivés des instructions de décision dans le code. Dans le test des branches, les cas de test sont dérivés de la connaissance du flux de contrôle de l'objet de test.",
  },
  {
    id: "eb-q19-b",
    question_id: "eb-q19",
    position: 2,
    label: "B",
    text: "Dans le test par table de décision, les cas de test sont dérivés de la spécification qui décrit la logique métier. Dans le test des branches, les cas de test sont basés sur l'anticipation de défauts potentiels dans le code source.",
  },
  {
    id: "eb-q19-c",
    question_id: "eb-q19",
    position: 3,
    label: "C",
    text: "Dans le test par table de décision, les cas de test sont dérivés de la connaissance du flux de contrôle de l'objet de test. Dans le test des branches, les cas de test sont dérivés de la spécification qui décrit la logique métier.",
  },
  {
    id: "eb-q19-d",
    question_id: "eb-q19",
    position: 4,
    label: "D",
    text: "Dans le test par table de décision, les cas de test sont indépendants de la façon dont le logiciel est implémenté. Dans le test des branches, les cas de test ne peuvent être créés qu'après la conception ou l'implémentation du code.",
  },

  // eb-q20 Options
  { id: "eb-q20-a", question_id: "eb-q20", position: 1, label: "A", text: "19, 20, 30" },
  { id: "eb-q20-b", question_id: "eb-q20", position: 2, label: "B", text: "11, 12, 20" },
  { id: "eb-q20-c", question_id: "eb-q20", position: 3, label: "C", text: "1, 10, 50" },
  { id: "eb-q20-d", question_id: "eb-q20", position: 4, label: "D", text: "10, 29, 30, 31" },

  // eb-q21 Options
  { id: "eb-q21-a", question_id: "eb-q21", position: 1, label: "A", text: "11, 12, 13" },
  { id: "eb-q21-b", question_id: "eb-q21", position: 2, label: "B", text: "9, 13, 15" },
  {
    id: "eb-q21-c",
    question_id: "eb-q21",
    position: 3,
    label: "C",
    text: "9, 10, 11, 12, 13, 14, 15",
  },
  { id: "eb-q21-d", question_id: "eb-q21", position: 4, label: "D", text: "10, 11, 12, 13, 14" },

  // eb-q22 Options
  { id: "eb-q22-a", question_id: "eb-q22", position: 1, label: "A", text: "40 %" },
  { id: "eb-q22-b", question_id: "eb-q22", position: 2, label: "B", text: "60 %" },
  { id: "eb-q22-c", question_id: "eb-q22", position: 3, label: "C", text: "80 %" },
  { id: "eb-q22-d", question_id: "eb-q22", position: 4, label: "D", text: "100 %" },

  // eb-q23 Options
  {
    id: "eb-q23-a",
    question_id: "eb-q23",
    position: 1,
    label: "A",
    text: "Start → Standby → Off → Standby → Maintenance charging → Standby",
  },
  {
    id: "eb-q23-b",
    question_id: "eb-q23",
    position: 2,
    label: "B",
    text: "Start → Standby → Maintenance charging → Charging → High → Charging",
  },
  {
    id: "eb-q23-c",
    question_id: "eb-q23",
    position: 3,
    label: "C",
    text: "Start → Standby → Maintenance charging → Charging → Low → Charging",
  },
  {
    id: "eb-q23-d",
    question_id: "eb-q23",
    position: 4,
    label: "D",
    text: "Start → Standby → Off → Standby → Charging → Low → Charging",
  },

  // eb-q24 Options
  {
    id: "eb-q24-a",
    question_id: "eb-q24",
    position: 1,
    label: "A",
    text: "La suite de tests composée des tests T1 et T2 obtient une couverture des instructions de 105 %.",
  },
  {
    id: "eb-q24-b",
    question_id: "eb-q24",
    position: 2,
    label: "B",
    text: "Il existe au moins une instruction qui a dû être exécutée à la fois par T1 et T2.",
  },
  {
    id: "eb-q24-c",
    question_id: "eb-q24",
    position: 3,
    label: "C",
    text: "Au moins 5 % des instructions du code sous test sont non exécutables.",
  },
  {
    id: "eb-q24-d",
    question_id: "eb-q24",
    position: 4,
    label: "D",
    text: "La suite de tests composée des tests T1 et T2 obtient une couverture complète des branches.",
  },

  // eb-q25 Options
  {
    id: "eb-q25-a",
    question_id: "eb-q25",
    position: 1,
    label: "A",
    text: "X = nombre de résultats de décision exercés par les cas de test, Y = nombre total de résultats de décision dans le code",
  },
  {
    id: "eb-q25-b",
    question_id: "eb-q25",
    position: 2,
    label: "B",
    text: "X = nombre de branches conditionnelles exercées par les cas de test, Y = nombre total de branches dans le code",
  },
  {
    id: "eb-q25-c",
    question_id: "eb-q25",
    position: 3,
    label: "C",
    text: "X = nombre de branches exercées par les cas de test, Y = nombre total de branches dans le code",
  },
  {
    id: "eb-q25-d",
    question_id: "eb-q25",
    position: 4,
    label: "D",
    text: "X = nombre de branches conditionnelles exercées par les cas de test, Y = nombre total de résultats de décision dans le code",
  },

  // eb-q26 Options
  {
    id: "eb-q26-a",
    question_id: "eb-q26",
    position: 1,
    label: "A",
    text: "La stratégie de test existante exige que les testeurs utilisent des techniques de test boîte noire.",
  },
  {
    id: "eb-q26-b",
    question_id: "eb-q26",
    position: 2,
    label: "B",
    text: "La spécification est écrite dans un langage formel qui peut être traité par un outil.",
  },
  {
    id: "eb-q26-c",
    question_id: "eb-q26",
    position: 3,
    label: "C",
    text: "Les testeurs sont membres d'une équipe agile et ont de bonnes compétences en programmation.",
  },
  {
    id: "eb-q26-d",
    question_id: "eb-q26",
    position: 4,
    label: "D",
    text: "Les testeurs sont expérimentés dans le domaine métier et possèdent de bonnes compétences analytiques.",
  },

  // eb-q27 Options
  {
    id: "eb-q27-a",
    question_id: "eb-q27",
    position: 1,
    label: "A",
    text: "« Le développeur a commis une erreur lors de l'implémentation du code. »",
  },
  {
    id: "eb-q27-b",
    question_id: "eb-q27",
    position: 2,
    label: "B",
    text: "« La couverture des instructions obtenue dépasse 85 %. »",
  },
  {
    id: "eb-q27-c",
    question_id: "eb-q27",
    position: 3,
    label: "C",
    text: "« Le programme fonctionne correctement concernant les exigences fonctionnelles et non fonctionnelles. »",
  },
  {
    id: "eb-q27-d",
    question_id: "eb-q27",
    position: 4,
    label: "D",
    text: "« Les messages d'erreur sont rédigés dans une langue que l'utilisateur peut comprendre. »",
  },

  // eb-q28 Options
  { id: "eb-q28-a", question_id: "eb-q28", position: 1, label: "A", text: "Orienté règles" },
  { id: "eb-q28-b", question_id: "eb-q28", position: 2, label: "B", text: "Orienté scénarios" },
  { id: "eb-q28-c", question_id: "eb-q28", position: 3, label: "C", text: "Orienté produit" },
  { id: "eb-q28-d", question_id: "eb-q28", position: 4, label: "D", text: "Orienté processus" },

  // eb-q29 Options
  {
    id: "eb-q29-a",
    question_id: "eb-q29",
    position: 1,
    label: "A",
    text: "Se connecter en tant qu'entraîneur dans DFBNET ; sélectionner les prochains jours de match pour mon équipe ; télécharger les listes d'éligibilité.",
  },
  {
    id: "eb-q29-b",
    question_id: "eb-q29",
    position: 2,
    label: "B",
    text: "ÉTANT DONNÉ QUE je suis connecté en tant qu'entraîneur dans DFBNET avec mon identifiant d'entraîneur, ET ÉTANT DONNÉ QUE j'ai sélectionné le prochain jour de match, QUAND je sélectionne 'charger la liste d'éligibilité', ALORS une liste de joueurs éligibles pour le prochain jour de match m'est affichée.",
  },
  {
    id: "eb-q29-c",
    question_id: "eb-q29",
    position: 3,
    label: "C",
    text: "Se connecter en tant que manager d'équipe ; sélectionner le prochain jour de match ; charger la liste d'éligibilité ; supprimer les joueurs qui ne sont pas éligibles pour jouer.",
  },
  {
    id: "eb-q29-d",
    question_id: "eb-q29",
    position: 4,
    label: "D",
    text: "ÉTANT DONNÉ QUE j'ai sélectionné les prochains jours de match pour mon équipe, QUAND je sélectionne un jour de match, ET QUAND je charge la liste d'éligibilité pour ce jour de match, ALORS tous les joueurs éligibles pour ce jour de match doivent m'être affichés.",
  },

  // eb-q30 Options
  {
    id: "eb-q30-a",
    question_id: "eb-q30",
    position: 1,
    label: "A",
    text: "L'analyse statique ne signale aucun défaut ni aucun avertissement de gravité élevée pour le code soumis.",
  },
  {
    id: "eb-q30-b",
    question_id: "eb-q30",
    position: 2,
    label: "B",
    text: "Le contrôle de version ne signale aucun conflit lors de la compilation et de l'intégration du code dans la branche 'test'.",
  },
  {
    id: "eb-q30-c",
    question_id: "eb-q30",
    position: 3,
    label: "C",
    text: "Les tests de composants sont compilés et prêts à être exécutés dans la branche 'test'.",
  },
  {
    id: "eb-q30-d",
    question_id: "eb-q30",
    position: 4,
    label: "D",
    text: "La couverture des instructions des tests de composants est d'au moins 80 %.",
  },

  // eb-q31 Options
  { id: "eb-q31-a", question_id: "eb-q31", position: 1, label: "A", text: "40 000 $" },
  { id: "eb-q31-b", question_id: "eb-q31", position: 2, label: "B", text: "80 000 $" },
  { id: "eb-q31-c", question_id: "eb-q31", position: 3, label: "C", text: "81 250 $" },
  { id: "eb-q31-d", question_id: "eb-q31", position: 4, label: "D", text: "82 500 $" },

  // eb-q32 Options
  {
    id: "eb-q32-a",
    question_id: "eb-q32",
    position: 1,
    label: "A",
    text: "T1 → T2 → T4 → T5 → T3 → T6",
  },
  {
    id: "eb-q32-b",
    question_id: "eb-q32",
    position: 2,
    label: "B",
    text: "T1 → T2 → T3 → T4 → T5 → T6",
  },
  {
    id: "eb-q32-c",
    question_id: "eb-q32",
    position: 3,
    label: "C",
    text: "T1 → T2 → T4 → T3 → T5 → T6",
  },
  {
    id: "eb-q32-d",
    question_id: "eb-q32",
    position: 4,
    label: "D",
    text: "T1 → T2 → T3 → T5 → T4 → T6",
  },

  // eb-q33 Options
  { id: "eb-q33-a", question_id: "eb-q33", position: 1, label: "A", text: "Tests d'utilisabilité" },
  {
    id: "eb-q33-b",
    question_id: "eb-q33",
    position: 2,
    label: "B",
    text: "Tests de fumée (Smoke tests)",
  },
  {
    id: "eb-q33-c",
    question_id: "eb-q33",
    position: 3,
    label: "C",
    text: "Tests d'acceptation utilisateur",
  },
  {
    id: "eb-q33-d",
    question_id: "eb-q33",
    position: 4,
    label: "D",
    text: "Tests d'intégration de composants",
  },

  // eb-q34 Options
  {
    id: "eb-q34-a",
    question_id: "eb-q34",
    position: 1,
    label: "A",
    text: "L'impact potentiel des vulnérabilités de sécurité informatique a été évalué comme étant significativement élevé, ce qui a conduit à une augmentation du critère de sortie pour le test de sécurité informatique à 99 cas de test réussis.",
  },
  {
    id: "eb-q34-b",
    question_id: "eb-q34",
    position: 2,
    label: "B",
    text: "La qualité requise du module réseau est ambiguë, ce qui entraîne l'exécution d'analyses de risques supplémentaires dans ce domaine.",
  },
  {
    id: "eb-q34-c",
    question_id: "eb-q34",
    position: 3,
    label: "C",
    text: "Les utilisateurs ont signalé des problème avec l'interface utilisateur du système existant, ce qui a conduit à la planification de tests d'utilisabilité supplémentaires pour le nouveau système.",
  },
  {
    id: "eb-q34-d",
    question_id: "eb-q34",
    position: 4,
    label: "D",
    text: "Le temps de chargement des pages web est crucial pour le succès du nouveau site web, par conséquent un expert en tests de performance est intégré au projet.",
  },

  // eb-q35 Options
  {
    id: "eb-q35-a",
    question_id: "eb-q35",
    position: 1,
    label: "A",
    text: "Temps moyen avant défaillance (Mean time to failure)",
  },
  {
    id: "eb-q35-b",
    question_id: "eb-q35",
    position: 2,
    label: "B",
    text: "Nombre de défauts trouvés",
  },
  {
    id: "eb-q35-c",
    question_id: "eb-q35",
    position: 3,
    label: "C",
    text: "Couverture des exigences",
  },
  { id: "eb-q35-d", question_id: "eb-q35", position: 4, label: "D", text: "Densité de défauts" },

  // eb-q36 Options
  {
    id: "eb-q36-a",
    question_id: "eb-q36",
    position: 1,
    label: "A",
    text: "Réunions en personne (en face à face)",
  },
  {
    id: "eb-q36-b",
    question_id: "eb-q36",
    position: 2,
    label: "B",
    text: "Tableaux de bord interactifs",
  },
  {
    id: "eb-q36-c",
    question_id: "eb-q36",
    position: 3,
    label: "C",
    text: "Mises à jour par e-mail",
  },
  { id: "eb-q36-d", question_id: "eb-q36", position: 4, label: "D", text: "Visioconférence" },

  // eb-q37 Options
  {
    id: "eb-q37-a",
    question_id: "eb-q37",
    position: 1,
    label: "A",
    text: "En utilisant le numéro de version de l'environnement, l'outil de gestion de configuration peut récupérer les numéros de version des bibliothèques, bouchons (stubs) et pilotes (drivers) utilisés dans cet environnement.",
  },
  {
    id: "eb-q37-b",
    question_id: "eb-q37",
    position: 2,
    label: "B",
    text: "La modification des références (baselines) peut être soutenue de manière flexible et pragmatique en utilisant des outils de gestion de configuration, si les testeurs jugent cela nécessaire en raison d'événements inattendus lors de l'exécution des tests.",
  },
  {
    id: "eb-q37-c",
    question_id: "eb-q37",
    position: 3,
    label: "C",
    text: "La gestion de configuration prend en charge la traçabilité des scripts de test et des cas de test. Les résultats de test, quant à eux, sont gérés par la gestion des défauts.",
  },
  {
    id: "eb-q37-d",
    question_id: "eb-q37",
    position: 4,
    label: "D",
    text: "En gestion de configuration, les éléments de configuration complexes sont synthétisés par une référence. Pour établir cela comme une référence, les testeurs ne peuvent plus revenir à une référence antérieure à un moment ultérieur.",
  },

  // eb-q38 Options
  {
    id: "eb-q38-a",
    question_id: "eb-q38",
    position: 1,
    label: "A",
    text: "Le système ne parvient pas à trier plusieurs ensembles de nombres. Référence : TC3, TC4, TC5.",
  },
  {
    id: "eb-q38-b",
    question_id: "eb-q38",
    position: 2,
    label: "B",
    text: "Le système semble ignorer les doublons lors du tri. Référence : TC3, TC4, TC5.",
  },
  {
    id: "eb-q38-c",
    question_id: "eb-q38",
    position: 3,
    label: "C",
    text: "Le système ne parvient pas à trier les nombres négatifs. Référence : TC4, TC5.",
  },
  {
    id: "eb-q38-d",
    question_id: "eb-q38",
    position: 4,
    label: "D",
    text: "TC3, TC4 et TC5 présentent des défauts (données d'entrée dupliquées) et doivent être corrigés.",
  },

  // eb-q39 Options
  { id: "eb-q39-a", question_id: "eb-q39", position: 1, label: "A", text: "1A, 2B, 3C, 4D" },
  { id: "eb-q39-b", question_id: "eb-q39", position: 2, label: "B", text: "1B, 2D, 3C, 4A" },
  { id: "eb-q39-c", question_id: "eb-q39", position: 3, label: "C", text: "1C, 2D, 3B, 4A" },
  { id: "eb-q39-d", question_id: "eb-q39", position: 4, label: "D", text: "1D, 2C, 3A, 4B" },

  // eb-q40 Options
  {
    id: "eb-q40-a",
    question_id: "eb-q40",
    position: 1,
    label: "A",
    text: "L'automatisation des tests permet de mesurer des critères de couverture plus complexes.",
  },
  {
    id: "eb-q40-b",
    question_id: "eb-q40",
    position: 2,
    label: "B",
    text: "L'automatisation des tests confère une partie de la responsabilité des tests au fournisseur de l'outil.",
  },
  {
    id: "eb-q40-c",
    question_id: "eb-q40",
    position: 3,
    label: "C",
    text: "L'automatisation des tests élimine le besoin de pensée critique lors de l'analyse des résultats de test.",
  },
  {
    id: "eb-q40-d",
    question_id: "eb-q40",
    position: 4,
    label: "D",
    text: "L'automatisation des tests génère des cas de test de niveau système à partir d'une analyse du code du programme.",
  },
];

export const ENSEMBLE_B_SOLUTIONS = [
  {
    question_id: "eb-q1",
    correct_option_ids: ["eb-q1-d"],
    explanation:
      "CORRECT – Les tests permettent d'identifier les défauts qui peuvent ensuite être corrigés par le débogage, ce qui contribue indirectement à améliorer la qualité de l'objet de test (Syllabus CTFL v4.0, section 1.2.1).",
  },
  {
    question_id: "eb-q2",
    correct_option_ids: ["eb-q2-b"],
    explanation:
      "CORRECT – L'assurance qualité est orientée processus et préventive, tandis que les tests sont une forme de contrôle qualité orientée produit et corrective (Syllabus CTFL v4.0, section 1.2.2).",
  },
  {
    question_id: "eb-q3",
    correct_option_ids: ["eb-q3-c"],
    explanation:
      "CORRECT – Le principe 'Les tests s'usent' (paradoxe du pesticide) stipule que la répétition des mêmes tests finit par ne plus détecter de nouveaux défauts. Les tests existants doivent être revus et modifiés pour rester efficaces (Syllabus CTFL v4.0, section 1.3).",
  },
  {
    question_id: "eb-q4",
    correct_option_ids: ["eb-q4-d"],
    explanation:
      "CORRECT – Une charte de test (test charter) est un livrable conçu et utilisé dans les tests exploratoires, qui fait partie de l'activité de conception de test car elle spécifie les objectifs et l'approche d'une session de test (Syllabus CTFL v4.0, section 1.4.3).",
  },
  {
    question_id: "eb-q5",
    correct_option_ids: ["eb-q5-c"],
    explanation:
      "CORRECT – Les compétences et l'expérience de l'équipe de test ont un impact direct sur la manière dont les tests sont conçus et exécutés (Syllabus CTFL v4.0, section 1.4.2).",
  },
  {
    question_id: "eb-q6",
    correct_option_ids: ["eb-q6-d"],
    explanation:
      "CORRECT – La traçabilité aide à : sélectionner les tests de régression en analysant l'impact des changements (1D), évaluer la complétude de l'exécution en la rendant auditable (2B), identifier les défauts ouverts sur les user stories pour améliorer la lisibilité des rapports d'état (3A), et évaluer la couverture des risques pour mesurer la qualité du processus (4C) (Syllabus CTFL v4.0, section 1.4.4).",
  },
  {
    question_id: "eb-q7",
    correct_option_ids: ["eb-q7-b"],
    explanation:
      "CORRECT – La connaissance du domaine (comme celle d'un pilote testant un système de contrôle) permet de mieux comprendre les besoins métier et de détecter efficacement les incohérences ou ambiguïtés dans les spécifications d'exigences (Syllabus CTFL v4.0, section 1.5.1).",
  },
  {
    question_id: "eb-q8",
    correct_option_ids: ["eb-q8-d"],
    explanation:
      "CORRECT – L'approche équipe entière tire parti de la diversité des compétences de chacun pour instaurer une dynamique collaborative et une synergie bénéfique à l'ensemble du projet (Syllabus CTFL v4.0, section 1.5.2).",
  },
  {
    question_id: "eb-q9",
    correct_option_ids: ["eb-q9-b"],
    explanation:
      "CORRECT – Dans un modèle séquentiel (comme le modèle en V), le code exécutable n'est disponible que tardivement, ce qui fait que les tests dynamiques commencent généralement plus tard dans le cycle de vie (Syllabus CTFL v4.0, section 2.1.1).",
  },
  {
    question_id: "eb-q10",
    correct_option_ids: ["eb-q10-b"],
    explanation:
      "CORRECT – La revue des produits de travail (analyse statique) dès que des ébauches (drafts) sont disponibles permet un shift-left efficace, réduisant les défauts en amont et évitant les erreurs en cascade (Syllabus CTFL v4.0, section 2.1.2).",
  },
  {
    question_id: "eb-q11",
    correct_option_ids: ["eb-q11-a"],
    explanation:
      "CORRECT – Le TDD (Test-Driven Development) est l'exemple le plus célèbre d'une approche où les tests unitaires automatisés sont écrits avant d'écrire le code fonctionnel correspondant (Syllabus CTFL v4.0, section 2.1.3).",
  },
  {
    question_id: "eb-q12",
    correct_option_ids: ["eb-q12-b"],
    explanation:
      "CORRECT – DevOps s'appuie fortement sur l'automatisation de la chaîne de livraison, notamment les tests de régression automatisés, afin de pouvoir livrer plus fréquemment en toute sécurité et sans régression (Syllabus CTFL v4.0, section 2.1.4).",
  },
  {
    question_id: "eb-q13",
    correct_option_ids: ["eb-q13-a"],
    explanation:
      "CORRECT – Les tests système évaluent le comportement global du système complet. Les tests de sécurité de bout en bout par une équipe de test indépendante entrent typiquement dans cette catégorie (Syllabus CTFL v4.0, section 2.2.1).",
  },
  {
    question_id: "eb-q14",
    correct_option_ids: ["eb-q14-a"],
    explanation:
      "CORRECT – La maintenabilité est une caractéristique de qualité qui ne dépend pas de l'exécution du code d'un système modifié (elle se teste plutôt par analyse statique), elle n'est donc pas un déclencheur direct des tests de maintenance (Syllabus CTFL v4.0, section 2.3.1).",
  },
  {
    question_id: "eb-q15",
    correct_option_ids: ["eb-q15-a"],
    explanation:
      "CORRECT – Les tests statiques (revues et analyse statique du code) n'exécutent pas le code et peuvent détecter des défauts (par exemple, des incohérences d'exigences, des variables inutilisées) impossibles ou très difficiles à isoler par tests dynamiques (Syllabus CTFL v4.0, section 3.1.2).",
  },
  {
    question_id: "eb-q16",
    correct_option_ids: ["eb-q16-c"],
    explanation:
      "CORRECT – Un feedback fréquent et précoce des parties prenantes permet d'identifier au plus tôt les erreurs de compréhension et de communiquer précocement sur d'éventuels problèmes de qualité (Syllabus CTFL v4.0, section 3.2.1).",
  },
  {
    question_id: "eb-q17",
    correct_option_ids: ["eb-q17-d"],
    explanation:
      "CORRECT – La correspondance exacte est : la définition des critères et caractéristiques est faite en planification (1C) ; donner l'accès au produit de travail se fait lors de l'initialisation de la revue (2B) ; l'identification des anomalies se fait par revue individuelle (3A) ; et leur analyse/discussion se fait lors de l'activité de communication et d'analyse (4D) (Syllabus CTFL v4.0, section 3.2.2).",
  },
  {
    question_id: "eb-q18",
    correct_option_ids: ["eb-q18-c"],
    explanation:
      "CORRECT – Le scribe enregistre les informations et anomalies trouvées (1B) ; l'animateur de la revue (review leader) assume la responsabilité globale et l'organisation (2D) ; le facilitateur assure le bon déroulement de la réunion et un climat sûr (3A) ; et le manager décide de ce qui est revu et fournit les ressources (4C) (Syllabus CTFL v4.0, section 3.2.3).",
  },
  {
    question_id: "eb-q19",
    correct_option_ids: ["eb-q19-d"],
    explanation:
      "CORRECT – Le test par table de décision est une technique boîte noire, donc ses tests sont indépendants de l'implémentation. Le test des branches est une technique boîte blanche, ses tests ne peuvent être créés qu'une fois la structure du code disponible (Syllabus CTFL v4.0, section 4.1.1).",
  },
  {
    question_id: "eb-q20",
    correct_option_ids: ["eb-q20-a"],
    explanation:
      "CORRECT – 19 couvre la classe d'équivalence 'pas de remise', 20 couvre la classe '50% de remise' (20ème lavage), et 30 couvre la classe '10% de remise' (30ème lavage). Cet ensemble couvre ainsi toutes les trois classes d'équivalence valides (Syllabus CTFL v4.0, section 4.2.1).",
  },
  {
    question_id: "eb-q21",
    correct_option_ids: ["eb-q21-c"],
    explanation:
      "CORRECT – Dans l'analyse des valeurs limites à 3 valeurs, pour chaque limite (11 et 13), nous testons la valeur elle-même et ses deux voisins directs. Les limites sont 11 et 13. Les voisins de 11 sont 10 et 12. Les voisins de 13 sont 12 et 14. Nous devons aussi inclure des valeurs hors limites (9 et 15). Ainsi, l'ensemble complet est : 9, 10, 11, 12, 13, 14, 15 (Syllabus CTFL v4.0, section 4.2.2).",
  },
  {
    question_id: "eb-q22",
    correct_option_ids: ["eb-q22-b"],
    explanation:
      "CORRECT – Il y a 5 règles métier (colonnes). Analysons les cas de test :\n- TC1 & TC2 couvrent la Règle 4 (Cholestérol 125-200, Pression >140)\n- TC3 & TC4 couvrent la Règle 2 (Cholestérol <=124, Pression >140)\n- TC5 couvre la Règle 5 (Cholestérol >=201, pression ignorée)\nCes 5 cas de test couvrent donc 3 règles sur les 5 existantes (Règle 2, 4 et 5), ce qui donne une couverture de (3/5) * 100% = 60% (Syllabus CTFL v4.0, section 4.2.3).",
  },
  {
    question_id: "eb-q23",
    correct_option_ids: ["eb-q23-d"],
    explanation:
      "CORRECT – Dans le cas de test d), la transition de 'Standby' vers 'Charging' n'existe pas dans le diagramme d'états (il faut d'abord passer par Maintenance charging ou une autre transition). Elle est donc invalide, tandis que les autres transitions de ce parcours sont valides (Syllabus CTFL v4.0, section 4.2.4).",
  },
  {
    question_id: "eb-q24",
    correct_option_ids: ["eb-q24-b"],
    explanation:
      "CORRECT – Si les ensembles d'instructions exécutés par T1 et T2 étaient disjoints, la couverture cumulée serait de 40% + 65% = 105%, ce qui est mathématiquement impossible. Il y a donc obligatoirement une intersection d'au moins 5% d'instructions exécutées par les deux tests (Syllabus CTFL v4.0, section 4.3.1).",
  },
  {
    question_id: "eb-q25",
    correct_option_ids: ["eb-q25-c"],
    explanation:
      "CORRECT – La couverture des branches (BCov) se mesure en divisant le nombre de branches exercées (X) par le nombre total de branches du code (Y), exprimé en pourcentage (Syllabus CTFL v4.0, section 4.3.2).",
  },
  {
    question_id: "eb-q26",
    correct_option_ids: ["eb-q26-d"],
    explanation:
      "CORRECT – Le test exploratoire est d'autant plus efficace et puissant lorsque les testeurs ont une bonne connaissance du domaine d'application (métier) et disposent de fortes compétences analytiques pour guider leur exploration (Syllabus CTFL v4.0, section 4.4.2).",
  },
  {
    question_id: "eb-q27",
    correct_option_ids: ["eb-q27-d"],
    explanation:
      "CORRECT – Une condition de test doit être spécifique, testable de manière univoque par un humain sur la base de critères compréhensibles. Vérifier que les messages d'erreur sont compréhensibles pour l'utilisateur en est un excellent exemple (Syllabus CTFL v4.0, section 4.4.3).",
  },
  {
    question_id: "eb-q28",
    correct_option_ids: ["eb-q28-b"],
    explanation:
      "CORRECT – Le format GIVEN / WHEN / THEN (Étant donné que / Quand / Alors) est la structure classique de description orientée scénarios (Behavior-Driven Development / BDD) pour spécifier des critères d'acceptation (Syllabus CTFL v4.0, section 4.5.2).",
  },
  {
    question_id: "eb-q29",
    correct_option_ids: ["eb-q29-b"],
    explanation:
      "CORRECT – L'option b) décrit précisément le scénario d'utilisation attendu par l'histoire utilisateur en définissant les préconditions (rôle connecté, match sélectionné), l'action de chargement et le résultat attendu (affichage de l'éligibilité) (Syllabus CTFL v4.0, section 4.5.3).",
  },
  {
    question_id: "eb-q30",
    correct_option_ids: ["eb-q30-a"],
    explanation:
      "CORRECT – Dans un pipeline CI/CD shift-left, exécuter l'analyse statique et s'assurer qu'elle ne signale aucune anomalie majeure avant d'intégrer et de fusionner le code est le critère d'entrée idéal (Syllabus CTFL v4.0, section 5.1.3).",
  },
  {
    question_id: "eb-q31",
    correct_option_ids: ["eb-q31-b"],
    explanation:
      "CORRECT – Calculons le ratio moyen d'effort historique :\n- Somme des efforts de développement = 800k + 1200k + 600k + 1000k = 3 600 000 $\n- Somme des efforts de test = 40k + 130k + 70k + 120k = 360 000 $\n- Ratio moyen test/développement = 360k / 3600k = 10%.\nPour un nouvel effort de développement estimé à 800 000 $, l'effort de test estimé est donc de 10% * 800 000 $ = 80 000 $ (Syllabus CTFL v4.0, section 5.1.4).",
  },
  {
    question_id: "eb-q32",
    correct_option_ids: ["eb-q32-d"],
    explanation:
      "CORRECT – Le test T1 doit être exécuté en premier car T2 en dépend. T2 s'exécute ensuite. Une fois T2 fait, T3 et T4 sont disponibles. Comme T5 dépend de T3 et est très urgent (priorité 1), nous exécutons T3 puis T5 immédiatement. Ensuite, nous exécutons T4 puis T6 (priorité 2). L'ordre optimal est donc : T1 → T2 → T3 → T5 → T4 → T6 (Syllabus CTFL v4.0, section 5.1.5).",
  },
  {
    question_id: "eb-q33",
    correct_option_ids: ["eb-q33-d"],
    explanation:
      "CORRECT – Le quadrant Q1 est orienté technologie et soutient l'équipe de développement. Les tests unitaires (tests de composants) et d'intégration de composants en font partie (Syllabus CTFL v4.0, section 5.1.7).",
  },
  {
    question_id: "eb-q34",
    correct_option_ids: ["eb-q34-b"],
    explanation:
      "CORRECT – Effectuer des analyses de risques supplémentaires parce que la spécification est ambiguë est une activité d'analyse de risque, pas une activité de contrôle ou d'atténuation découlant de la planification des tests (Syllabus CTFL v4.0, section 5.2.4).",
  },
  {
    question_id: "eb-q35",
    correct_option_ids: ["eb-q35-a"],
    explanation:
      "CORRECT – Le temps moyen avant défaillance (MTTF) mesure la fiabilité, qui est une caractéristique de qualité de produit, c'est donc une métrique de qualité de produit (Syllabus CTFL v4.0, section 5.3.1).",
  },
  {
    question_id: "eb-q36",
    correct_option_ids: ["eb-q36-a"],
    explanation:
      "CORRECT – En raison de la distance géographique et du décalage horaire important entre l'Amérique du Nord et l'Europe, organiser des réunions physiques en personne est la méthode la moins réaliste et la moins efficace (Syllabus CTFL v4.0, section 5.3.3).",
  },
  {
    question_id: "eb-q37",
    correct_option_ids: ["eb-q37-a"],
    explanation:
      "CORRECT – Pour un élément de configuration complexe (comme l'environnement de test), la gestion de configuration identifie ses composants (librairies, stubs, drivers) et leurs versions pour en assurer l'intégrité et la traçabilité (Syllabus CTFL v4.0, section 5.4.1).",
  },
  {
    question_id: "eb-q38",
    correct_option_ids: ["eb-q38-b"],
    explanation:
      "CORRECT – Les cas de test TC3 (contient 7 en doublon), TC4 (contient -2 et -3 en doublons) et TC5 (contient 0 et 4 en doublons) échouent tous, alors que TC1 et TC2 (sans doublons) réussissent. Le comportement observé montre que la fonction de tri ignore ou supprime les doublons de sa sortie, ce qui est la meilleure description factuelle de la défaillance (Syllabus CTFL v4.0, section 5.5.1).",
  },
  {
    question_id: "eb-q39",
    correct_option_ids: ["eb-q39-c"],
    explanation:
      "CORRECT – Le suivi de flux de travail correspond aux outils DevOps (1C) ; faciliter la communication correspond aux outils de collaboration (2D) ; les machines virtuelles correspondent aux outils de standardisation et passage à l'échelle (3B) ; et l'évaluation des revues correspond aux outils de test statique (4A) (Syllabus CTFL v4.0, section 6.1.1).",
  },
  {
    question_id: "eb-q40",
    correct_option_ids: ["eb-q40-a"],
    explanation:
      "CORRECT – L'un des grands avantages de l'automatisation est de pouvoir mesurer des métriques de couverture complexes (comme la couverture des instructions ou des branches) qui seraient impossibles ou extrêmement fastidieuses à évaluer manuellement par un humain (Syllabus CTFL v4.0, section 6.2.1).",
  },
];
