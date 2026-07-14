// ISTQB Foundation Level v4.0 - Ensemble F (v1.1) - Seed Data

const ENSEMBLE_F_EXAM_ID = "ctfl-exam-v4-ensemble-f-2026";

export const ENSEMBLE_F_EXAM = {
  id: ENSEMBLE_F_EXAM_ID,
  title: "Examen Échantillon CTFL v4.0 — ENSEMBLE F (v1.1)",
  description:
    "Examen d'entraînement officiel de l'ISTQB niveau fondamental v4.0 (Ensemble F, v1.1, édition GTB). Comprend 40 questions uniques avec corrections détaillées.",
  language: "fr",
  duration_minutes: 60,
  total_questions: 40,
  passing_threshold: 65,
  points_per_question: 1,
  attempts_allowed: null,
  status: "published",
  created_at: "2026-07-14T07:00:00Z",
};

export const ENSEMBLE_F_QUESTIONS = [
  {
    id: "ef-q1",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 1,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.1.1",
    text: "Laquelle des affirmations suivantes ne décrit PAS un objectif de test typique ?",
  },
  {
    id: "ef-q2",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 2,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.2.3",
    text: "Un Téléphone qui sonne dans un bureau voisin distrait un développeur de logiciel, ce qui l'amène à coder incorrectement la logique qui vérifie la limite supérieure d'une variable d'entrée. Plus tard, lors du test de système, un testeur remarque que ce champ d'entrée accepte des valeurs d'entrée invalides. Lequel des termes suivants décrit avec précision le contrôle codé incorrectement de la limite supérieure dans ce scénario ?",
  },
  {
    id: "ef-q3",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 3,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.1",
    text: 'Laquelle des actions suivantes a lieu durant l\'activité "Analyse des tests" du processus de test ?',
  },
  {
    id: "ef-q4",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 4,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.3.1",
    text: "En général, selon le principe de Pareto, un nombre de défauts supérieur à la moyenne se trouve souvent dans quelques zones d'un système. Les échecs correspondants rendent souvent le système inutilisable. Lequel des principes de test suivants décrit cela ?",
  },
  {
    id: "ef-q5",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 5,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.1",
    text: "Laquelle des compétences générales suivantes est particulièrement importante pour transmettre les échecs découverts aux développeurs concernés ?",
  },
  {
    id: "ef-q6",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 6,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.3",
    text: "Associez la description correcte de A à D : A. Un ensemble de cas de test ou de scripts de test devant être exécutés dans un cycle de test particulier. B. Une séquence d'instructions pour l'exécution d'un test. C. Contient les résultats attendus. D. La documentation d'un objectif et de l'agenda d'une session de test. à sa ressource de test correspondante (résultats de travail de test) 1 à 4 : 1. suite de tests, 2. cas de test, 3. script de test, 4. charte de test.",
  },
  {
    id: "ef-q7",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 7,
    chapter: 1,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-1.4.4",
    text: "Lequel des éléments suivants est le MEILLEUR exemple de la manière dont la traçabilité entre la base de test, les actifs de test, les résultats des tests et les défauts soutient les tests ?",
  },
  {
    id: "ef-q8",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 8,
    chapter: 1,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-1.5.2",
    text: "Laquelle des déclarations suivantes est un avantage de l'approche de l'équipe entière ?",
  },
  {
    id: "ef-q9",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 9,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.1",
    text: "Vous travaillez en tant que testeur au sein d'une équipe qui suit un cycle de vie du développement logiciel séquentiel (SDLC = Cycle de Développement Logiciel). Comment le choix de ce modèle de cycle de vie du développement logiciel affecte-t-il le moment des tests ?",
  },
  {
    id: "ef-q10",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 10,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.2",
    text: "Lequel des éléments suivants est une bonne pratique de test qui s'applique à tous les cycles de vie du développement logiciel (SDLC) ?",
  },
  {
    id: "ef-q11",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 11,
    chapter: 2,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.3",
    text: "Laquelle des approches test d'abord suivantes utilise le format donné/si/alors pour exprimer la réponse souhaitée d'une application ?",
  },
  {
    id: "ef-q12",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 12,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.1.4",
    text: "Lesquels des éléments suivants sont des avantages de DevOps ?",
  },
  {
    id: "ef-q13",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 13,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.2.2",
    text: 'Vous travaillez en tant que testeur sur un projet d\'application mobile pour la commande de nourriture. Une exigence client à haute priorité stipule : "La commande doit être traitée en moins de 10 secondes 95 % du temps." Vous avez créé un ensemble de cas de test dans lequel un certain nombre de commandes aléatoires ont été effectuées, le temps de traitement mesuré, et les résultats des tests vérifiés par rapport aux exigences. Quel type de test avez-vous effectué ?',
  },
  {
    id: "ef-q14",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 14,
    chapter: 2,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-2.2.3",
    text: "Laquelle des affirmations suivantes liées au test de confirmation et au test de régression est CORRECTE ?",
  },
  {
    id: "ef-q15",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 15,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.1",
    text: "Lequel des éléments suivants de la liste des produits de travail ne peut PAS être vérifié avec une technique de tests statiques ?",
  },
  {
    id: "ef-q16",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 16,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.1.3",
    text: "Laquelle des déclarations suivantes s'applique aux différences entre les tests statiques et les tests dynamiques ?",
  },
  {
    id: "ef-q17",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 17,
    chapter: 3,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.2",
    text: "Laquelle des affirmations suivantes concernant les revues formelles (par exemple, les inspections) est VRAIE ?",
  },
  {
    id: "ef-q18",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 18,
    chapter: 3,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-3.2.3",
    text: "Quelle tâche la gestion peut-elle assumer lors d'une révision formelle (par exemple, inspection) ?",
  },
  {
    id: "ef-q19",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 19,
    chapter: 4,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-4.1.1",
    text: "Laquelle des affirmations suivantes décrit un avantage des tests boîte noire par rapport aux tests boîte blanche ?",
  },
  {
    id: "ef-q20",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 20,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.1",
    text: "Une application de fitness mesure le nombre de pas effectués quotidiennement et fournit des retours pour motiver l'utilisateur à rester en forme. Les retours concernant les différents comptes de pas devraient être les suivants : • Jusqu'à 1000 inclus : Couch Potato ! • Plus de 1000, jusqu'à 2000 inclus : Bougez ! • Plus de 2000, jusqu'à 4000 inclus : Sur la bonne voie ! • Plus de 4000, jusqu'à 6000 inclus : Bien joué ! • Plus de 6000 : Super ! Lequel des groupes suivants de valeurs d'entrée de test fournirait la couverture la plus ÉLEVÉE des classes d'équivalence ?",
  },
  {
    id: "ef-q21",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 21,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.2",
    text: "Vous testez un système qui calcule la note finale pour les participants au cours. La note finale est déterminée en fonction du nombre total de points compris entre 0 et 100, selon les règles suivantes : • 0 - 50 points : échoué • 51 - 70 points : suffisant • 71 - 90 points : bon • 91 - 100 points : très bon. Vous avez préparé l'ensemble suivant de cas de test : TF1: 91 (très bien), TF2: 50 (échoué), TF3: 70 (suffisant), TF4: 100 (très bon), TF5: 90 (bon), TF6: 0 (échoué). Étant donné ces cas de test, quel pourcentage de couverture est atteint lors de l'utilisation de l'analyse des frontières à 2 valeurs ?",
  },
  {
    id: "ef-q22",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 22,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.3",
    text: "Vous testez un nouveau système de gestion de la relation client pour une entreprise de location de vélo quotidienne. Les exigences du système sont les suivantes : • Toute personne peut louer un vélo, mais seuls les membres bénéficient d'une remise de 20 %. • Cependant, si la date limite de retour est manquée, la remise ne peut plus être réclamée. • Après 15 locations, les membres reçoivent un T-shirt en cadeau. Un testeur conçoit le tableau de décision suivant pour tester les exigences (T=vrai, F=faux, X=exécuter l'action) : Conditions: est un membre [T T T T F F F F], Date limite manquée [T F T F T F F T], 15. location [F F T T F F T T]. Actions: remise de 20% [ - X - X - - - - ], T-shirt cadeau [ - - X X - - - X ]. Quelle règle (combinaison de conditions et d'actions) ne répond pas aux exigences ci-dessus ?",
  },
  {
    id: "ef-q23",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 23,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.2.4",
    text: "Vous testez un système dont le cycle de vie est modélisé par le diagramme de transition d'état montré ci-dessous. Le système commence dans l'état INIT et termine son opération dans l'état OFF. [INIT] --(run)--> [IN OPERATION], [INIT] --(test)--> [DEBUG MODE], [DEBUG MODE] --(error)--> [IN OPERATION], [DEBUG MODE] --(done)--> [OFF], [IN OPERATION] --(pause)--> [ON HOLD], [IN OPERATION] --(done)--> [OFF], [ON HOLD] --(resume)--> [IN OPERATION]. Quel est le nombre MINIMAL de cas de test pour atteindre une couverture 100% des transitions valides (couverture 0-switch) ?",
  },
  {
    id: "ef-q24",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 24,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.1",
    text: "Votre suite de tests atteint 100 % de couverture des instructions. Que signifie cela ?",
  },
  {
    id: "ef-q25",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 25,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.3.2",
    text: "Laquelle des affirmations suivantes concernant le test de branche est CORRECTE ?",
  },
  {
    id: "ef-q26",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 26,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.2",
    text: "Quel est l'objectif d'une charte de test dans les tests exploratoires basés sur les sessions ?",
  },
  {
    id: "ef-q27",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 27,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.4.3",
    text: "Laquelle des affirmations suivantes est PROBABLEMENT le plus grand avantage des tests basés sur des listes de contrôle ?",
  },
  {
    id: "ef-q28",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 28,
    chapter: 4,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.1",
    text: "Laquelle des affirmations suivantes NE décrit PAS l'approche collaborative pour rédiger des histoires d'utilisateurs ?",
  },
  {
    id: "ef-q29",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 29,
    chapter: 4,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-4.5.3",
    text: "Vous utilisez le développement piloté par les tests d'acceptation et concevez des cas de test basés sur l'histoire d'utilisateur suivante : En tant qu'utilisateur régulier ou utilisateur spécial, je souhaite pouvoir utiliser ma carte de sol électronique pour accéder à des étages spécifiques. Critères d'acceptation : AC1 : Les utilisateurs réguliers ont accès aux étages 1 à 3; AC2 : L'étage 4 est uniquement accessible aux utilisateurs spéciaux; AC3 : Les utilisateurs spéciaux ont tous les droits d'accès des utilisateurs réguliers. Quel cas de test est le PLUS raisonnable pour tester AC3 ?",
  },
  {
    id: "ef-q30",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 30,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.1",
    text: "Considérez l'énoncé suivant d'un plan de test : \"Le bon fonctionnement des composants est vérifié à l'aide de tests de composants et de tests d'intégration de composants. Il doit être fourni des preuves que 100 % de couverture des branches est atteinte pour chaque composant classé comme critique.\" À quelle partie du plan de test appartient cette définition ?",
  },
  {
    id: "ef-q31",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 31,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.4",
    text: "Étant donné l'histoire d'utilisateur suivante : « En tant que président, aucune des données que je télécharge ne devrait être visible par un autre utilisateur du système, afin qu'aucune information confidentielle ne puisse être consultée. » Lors de la première session de planification poker, les estimations d'effort suivantes ont été fournies en fonction du risque, de l'effort et de l'étendue appropriée des tests : Clients : 5, Développeurs : 5, Testeurs : 20. Quel est le MEILLEUR résultat suite à cette session de planification ?",
  },
  {
    id: "ef-q32",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 32,
    chapter: 5,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.6",
    text: "Laquelle des affirmations suivantes est vraie concernant la pyramide de test ?",
  },
  {
    id: "ef-q33",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 33,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.5",
    text: "Les priorités et dépendances des cas de test suivants sont données : TC1 (Priorité: Élevé, Dépendance technique à: TC4), TC2 (Faible), TC3 (Haute, Dépendance logique sur: TC4), TC4 (Moyen), TC5 (Bas, Dépendance logique sur: TC2), TC6 (Moyenne, Dépendance technique à: TC5). Lequel des plans d'exécution des tests suivants aborde MEILLEUR les priorités, les dépendances techniques et logiques ?",
  },
  {
    id: "ef-q34",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 34,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.1.7",
    text: 'Lequel des types de test suivants appartient au quadrant Q2 – "Orienté vers les affaires, soutien pour l\'équipe" dans le modèle de quadrant de test ?',
  },
  {
    id: "ef-q35",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 35,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.2.2",
    text: "Laquelle des affirmations suivantes représente un risque de projet ?",
  },
  {
    id: "ef-q36",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 36,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.4.1",
    text: "Vous travaillez en tant que chef de projet sur un projet interne de logiciel bancaire. Afin d'éviter les reprises et les cycles excessifs de \"détection/réparation/rétest\", un processus rigide a été introduit (correction de bogue, revue par les pairs, test en dev par le testeur initial, installation quotidienne en test, puis re-test). Néanmoins, un grand nombre de défauts confirmés comme corrigés en dev échouent aux tests post-déploiement en test, causant un travail supplémentaire. Ayant une confiance totale en vos testeurs, lequel des éléments suivants est le plus susceptible d'être la partie du processus qui devrait être vérifiée ensuite ?",
  },
  {
    id: "ef-q37",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 37,
    chapter: 5,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-5.3.2",
    text: "Lequel des énoncés suivants d'un rapport hebdomadaire sur l'avancement des tests n'est PAS pertinent pour les parties prenantes en ce qui concerne la surveillance des tests et le contrôle des tests ?",
  },
  {
    id: "ef-q38",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 38,
    chapter: 5,
    k_level: "K3",
    type: "single",
    points: 1,
    learning_objective: "FL-5.5.1",
    text: 'Après avoir exécuté un ensemble de cas de test, un collègue a créé un rapport de bogue (ID, Titre, Auteur, Objet: build v00812, Env: cfg_full_02, Cas: sys_128, Description: Erreur connexion nom vide affiche "mot de passe incorrect" au lieu de "Le nom ne doit pas être vide", Gravité: faible, Priorité: moyenne, Statut: nouveau). Laquelle des suggestions d\'amélioration suivantes aimeriez-vous le PLUS donner à votre collègue ?',
  },
  {
    id: "ef-q39",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 39,
    chapter: 6,
    k_level: "K2",
    type: "single",
    points: 1,
    learning_objective: "FL-6.1.1",
    text: "Lequel des outils de test suivants est le plus utile pour rapporter le nombre de défauts dans l'objet de test ?",
  },
  {
    id: "ef-q40",
    exam_id: ENSEMBLE_F_EXAM_ID,
    position: 40,
    chapter: 6,
    k_level: "K1",
    type: "single",
    points: 1,
    learning_objective: "FL-6.2.1",
    text: "Laquelle des affirmations suivantes est un avantage potentiel de l'automatisation des tests ?",
  },
];

export const ENSEMBLE_F_OPTIONS = [];

// Populate Options and Solutions compactly
const rawOptions = [
  // Q1
  [
    { label: "A", text: "Détecter les défauts et déclencher des échecs" },
    { label: "B", text: "Créer de la confiance dans le niveau de qualité de l'objet de test" },
    { label: "C", text: "Réduire le risque d'un environnement de test inadéquat" },
    { label: "D", text: "Répondre aux exigences contractuelles, légales ou réglementaires" },
  ],
  // Q2
  [
    { label: "A", text: "cause racine" },
    { label: "B", text: "échec" },
    { label: "C", text: "erreur" },
    { label: "D", text: "défaut" },
  ],
  // Q3
  [
    { label: "A", text: "Identifier l'infrastructure et les outils requis" },
    { label: "B", text: "Créer des ensembles de tests basés sur le script de test" },
    { label: "C", text: 'Analyser les "leçons tirées" pour l\'amélioration des processus' },
    { label: "D", text: "Évaluer la base de test en termes de testabilité" },
  ],
  // Q4
  [
    { label: "A", text: "Le test dépend du contexte." },
    { label: "B", text: "Les défauts se regroupent." },
    { label: "C", text: "Les tests s'usent." },
    { label: "D", text: "Absence de défauts fallacie." },
  ],
  // Q5
  [
    { label: "A", text: "Connaissance des tests" },
    { label: "B", text: "Pensée critique" },
    { label: "C", text: "Soins" },
    { label: "D", text: "Compétences en communication" },
  ],
  // Q6
  [
    { label: "A", text: "1A, 2C, 3B, 4D" },
    { label: "B", text: "1D, 2B, 3A, 4C" },
    { label: "C", text: "1A, 2C, 3D, 4B" },
    { label: "D", text: "1D, 2C, 3B, 4A" },
  ],
  // Q7
  [
    {
      label: "A",
      text: "La réalisation d'une analyse d'impact fournit des informations sur la qualité du système sous test.",
    },
    {
      label: "B",
      text: "L'analyse de la traçabilité entre les cas de test et les résultats des tests fournit des informations sur l'exhaustivité des cas de test.",
    },
    {
      label: "C",
      text: "L'analyse de la traçabilité par la conduite d'une analyse d'impact aide à sélectionner des cas de test appropriés pour les tests de régression.",
    },
    {
      label: "D",
      text: "L'analyse de la traçabilité entre les exigences et les cas de test aide à analyser les risques résiduels.",
    },
  ],
  // Q8
  [
    { label: "A", text: "Chaque membre de l'équipe peut prendre la tâche qu'il souhaite." },
    { label: "B", text: "Chaque membre de l'équipe est responsable de la qualité." },
    { label: "C", text: "Chaque membre de l'équipe travaille séparément sur sa propre tâche." },
    { label: "D", text: "Chaque membre de l'équipe a un rôle fixe et une responsabilité définie." },
  ],
  // Q9
  [
    {
      label: "A",
      text: "Les tests dynamiques (tests unitaires) ne peuvent pas être effectués dans les premières phases du cycle de vie du développement logiciel.",
    },
    {
      label: "B",
      text: "Les tests statiques ne peuvent pas être effectués dans les premières phases de ce cycle de vie du développement logiciel.",
    },
    {
      label: "C",
      text: "La planification des tests ne peut pas être réalisée dans les premières phases de ce cycle de vie du développement logiciel.",
    },
    {
      label: "D",
      text: "Les tests d'acceptation peuvent être effectués dans les premières phases de ce cycle de vie du développement logiciel.",
    },
  ],
  // Q10
  [
    {
      label: "A",
      text: "Les testeurs doivent accompagner les développeurs, surtout dans le développement logiciel, pour des activités pour lesquelles il n'y a pas d'activités de test associées.",
    },
    {
      label: "B",
      text: "Les testeurs devraient définir différents objectifs de test pour chaque niveau de test afin de personnaliser le périmètre et la profondeur des tests.",
    },
    {
      label: "C",
      text: "Les testeurs ne devraient commencer l'analyse des tests et la conception des tests qu'une fois que les exigences et spécifications sont complètement mises en œuvre.",
    },
    {
      label: "D",
      text: "Les testeurs ne devraient pas effectuer de revues des résultats de travail afin de se concentrer sur l'exécution des tests.",
    },
  ],
  // Q11
  [
    { label: "A", text: "Application pilotée par les tests (TDD)" },
    { label: "B", text: "Développement piloté par les tests d'acceptation (ATDD)" },
    { label: "C", text: "Développement piloté par le comportement (BDD)" },
    { label: "D", text: "Intégration continue / Livraison continue (CI/CD)" },
  ],
  // Q12
  [
    { label: "A", text: "Lancement de produit plus rapide et délai de mise sur le marché réduit" },
    {
      label: "B",
      text: "Retours rapides en se concentrant exclusivement sur les tests fonctionnels",
    },
    { label: "C", text: "Le Shift-Left peut minimiser le nombre de tests de régression" },
    { label: "D", text: "Mise en œuvre efficace du cadre d'automatisation des tests." },
  ],
  // Q13
  [
    {
      label: "A",
      text: "Fonctionnel, car les cas de test couvrent les exigences métier de l'utilisateur pour le système.",
    },
    {
      label: "B",
      text: "Non fonctionnel, car les cas de test mesurent la performance du système.",
    },
    { label: "C", text: "Exploratoire, car le temps de traitement exact n'a pas été défini." },
    {
      label: "D",
      text: "Structurel, car nous devons connaître la structure interne du programme pour mesurer le temps de traitement des commandes.",
    },
  ],
  // Q14
  [
    {
      label: "A",
      text: "Les tests de régression augmentent en nombre à mesure que le projet progresse, tandis que le nombre de tests de confirmation diminue à mesure que le projet progresse.",
    },
    {
      label: "B",
      text: "Les tests de régression sont créés et exécutés lorsque l'objet de test est corrigé, tandis que les tests de confirmation sont exécutés chaque fois que l'objet de test est amélioré.",
    },
    {
      label: "C",
      text: "Les tests de régression portent sur la vérification que le fonctionnement de l'environnement reste inchangé, tandis que le test de confirmation est concerné par les modifications apportées à l'objet de test.",
    },
    {
      label: "D",
      text: "Les tests de régression se préoccupent des effets indésirables possibles dans le code inchangé, tandis que le test de confirmation est concerné par les effets positifs de changements correctifs.",
    },
  ],
  // Q15
  [
    { label: "A", text: "Cas de test et scripts de test exécutables" },
    { label: "B", text: "Spécification des exigences et critères d'acceptation" },
    { label: "C", text: "Code exécutable tiers propriétaire" },
    { label: "D", text: "Documentation de projet et modèles" },
  ],
  // Q16
  [
    { label: "A", text: "Lors des tests statiques, des échecs sont trouvés" },
    { label: "B", text: "Les tests statiques mesurent une performance logicielle inadéquate" },
    {
      label: "C",
      text: "L'objectif exclusif des tests statiques est de détecter des défauts le plus tôt possible",
    },
    {
      label: "D",
      text: "Un manque de couverture des exigences de sécurité critiques peut être révélé lors des tests statiques",
    },
  ],
  // Q17
  [
    { label: "A", text: "La révision technique est dirigée par l'auteur" },
    {
      label: "B",
      text: "Le processus de révision consiste en plusieurs activités, telles que la planification, la communication et l'analyse, le débogage et le rapport.",
    },
    {
      label: "C",
      text: "Les produits de travail à examiner sont distribués lors de la réunion de révision.",
    },
    {
      label: "D",
      text: "Les défauts découverts lors de la révision ne sont pas signalés puisqu'ils sont trouvés pendant des tests dynamiques de toute façon.",
    },
  ],
  // Q18
  [
    {
      label: "A",
      text: "Effectuer le retravail post-révision pour un objet de révision, si nécessaire",
    },
    { label: "B", text: "Décider de ce qui doit être examiné" },
    {
      label: "C",
      text: "Assurer le bon déroulement des réunions de révision et, si nécessaire, servir de médiateur",
    },
    {
      label: "D",
      text: "Enregistrer les informations de révision telles que les décisions de révision",
    },
  ],
  // Q19
  [
    {
      label: "A",
      text: "Les techniques de test boîte noire peuvent vérifier la structure interne et le traitement de l'objet de test.",
    },
    {
      label: "B",
      text: "Les techniques de test boîte noire peuvent être créées indépendamment de l'implémentation de le logiciel.",
    },
    {
      label: "C",
      text: "Les techniques de test boîte noire utilisent mieux les connaissances et l'expérience des testeurs.",
    },
    {
      label: "D",
      text: "Les techniques de tests boîte noire peuvent être exécutées sans ajustement même si le comportement requis de l'objet de test a changé.",
    },
  ],
  // Q20
  [
    { label: "A", text: "0, 1000, 2000, 3000, 4000" },
    { label: "B", text: "1000, 2001, 4000, 4001, 6000" },
    { label: "C", text: "123, 2345, 3456, 4567, 5678" },
    { label: "D", text: "666, 999, 2222, 5555, 6666" },
  ],
  // Q21
  [
    { label: "A", text: "60%" },
    { label: "B", text: "75%" },
    { label: "C", text: "33,3 %" },
    { label: "D", text: "100 %" },
  ],
  // Q22
  [
    { label: "A", text: "R4" },
    { label: "B", text: "R2" },
    { label: "C", text: "R6" },
    { label: "D", text: "R8" },
  ],
  // Q23
  [
    { label: "A", text: "2" },
    { label: "B", text: "3" },
    { label: "C", text: "4" },
    { label: "D", text: "7" },
  ],
  // Q24
  [
    {
      label: "A",
      text: "Toute instruction sélectionnée dans le code a été exécutée au moins une fois.",
    },
    {
      label: "B",
      text: "Toute suite de tests contenant plus de cas de test que votre suite de tests atteint également 100 % de couverture des instructions.",
    },
    { label: "C", text: "Chaque branche dans le code a été exécutée au moins une fois." },
    { label: "D", text: "Chaque combinaison de valeurs d'entrée dans le code a été testée." },
  ],
  // Q25
  [
    {
      label: "A",
      text: "Si un programme ne contient que des transitions de contrôle inconditionnelles, 100 % de couverture peut être atteinte sans avoir à exécuter un seul cas de test.",
    },
    {
      label: "B",
      text: "Lorsqu'une branche avec un cas de test est exécutée, tous les défauts qu'elle contient sont révélés.",
    },
    {
      label: "C",
      text: "Si 100 % de couverture des instructions est atteint, alors 100 % de couverture des branches l'est également.",
    },
    {
      label: "D",
      text: "Si 100 % de couverture des branches est atteint, alors tous les résultats de décision de chaque transition de contrôle conditionnelle du code sont exécutés.",
    },
  ],
  // Q26
  [
    {
      label: "A",
      text: "La charte de test spécifie les objectifs de test pour la session de test.",
    },
    {
      label: "B",
      text: "La charte de test documente les étapes prises et les constatations faites.",
    },
    { label: "C", text: "La charte de test est souvent formulée sous forme de questions." },
    {
      label: "D",
      text: "La charte de test évalue les résultats des tests après la session de test.",
    },
  ],
  // Q27
  [
    { label: "A", text: "Il permet une grande répétabilité des tests." },
    {
      label: "B",
      text: "Il fournit une approche structurée de la test sans exiger des cas de test détaillés.",
    },
    { label: "C", text: "Il couvre tous les exigences pour l'objet de test." },
    { label: "D", text: "Il prend en charge les tests fonctionnels et non fonctionnels." },
  ],
  // Q28
  [
    {
      label: "A",
      text: "Les histoires d'utilisateurs incluent des aspects techniques, de développement et de test.",
    },
    {
      label: "B",
      text: "Les histoires d'utilisateurs sont créées par des représentants d'affaires, des développeurs et des testeurs ensemble.",
    },
    {
      label: "C",
      text: "Les critères d'acceptation pour les histoires d'utilisateurs doivent être créés spécifiquement par des testeurs pour assurer l'indépendance des tests.",
    },
    {
      label: "D",
      text: "Les histoires d'utilisateurs sont créées lors d'un sprint ou d'une itération de façon à être indépendantes, négociables, précieuses, estimables, petites et testables.",
    },
  ],
  // Q29
  [
    { label: "A", text: "Vérifiez qu'un utilisateur régulier peut accéder aux étages 1 et 3." },
    { label: "B", text: "Vérifiez qu'un utilisateur régulier ne peut pas accéder à l'étage 4." },
    { label: "C", text: "Vérifiez qu'un utilisateur spécial peut accéder à l'étage 5." },
    { label: "D", text: "Vérifiez qu'un utilisateur spécial peut accéder aux étages 1, 2 et 3." },
  ],
  // Q30
  [
    { label: "A", text: "Environnement de test" },
    { label: "B", text: "Registre des risques" },
    { label: "C", text: "Contexte des tests" },
    { label: "D", text: "Approche de test" },
  ],
  // Q31
  [
    {
      label: "A",
      text: "Puisque les estimations des clients et des développeurs s'accordent, l'équipe peut supposer qu'elles sont correctes. Le poker de planification pour cette histoire d'utilisateur se termine.",
    },
    {
      label: "B",
      text: "L'équipe discute ensemble des raisons pour lesquelles le consensus sur les estimations n'a pas été atteint. Un autre tour de poker de planification s'ensuit.",
    },
    {
      label: "C",
      text: "Puisque le client reçoit finalement le système, son estimation est cruciale dans de tels conflits. La planification poker se termine.",
    },
    {
      label: "D",
      text: "La planification poker se poursuit jusqu'à ce que toutes les estimations des parties prenantes impliquées aient exactement la même valeur.",
    },
  ],
  // Q32
  [
    {
      label: "A",
      text: "La pyramide de test se concentre sur un petit nombre de tests au niveau inférieur de la test pyramide.",
    },
    {
      label: "B",
      text: "Plus vous vous rapprochez du sommet de la pyramide, moins le test est granulaire.",
    },
    {
      label: "C",
      text: "La pyramide de test comprend exactement 3 niveaux de test et inclut toujours des tests unitaires, des tests d'intégration et des tests de bout en bout.",
    },
    {
      label: "D",
      text: "Les tests de bout en bout de haut niveau sont conviviaux et donc généralement plus rapides que les tests aux niveaux inférieurs.",
    },
  ],
  // Q33
  [
    { label: "A", text: "TC1 – TC3 – TC4 – TC6 – TC2 – TC5" },
    { label: "B", text: "TC4 – TC3 – TC1 – TC2 – TC5 – TC6" },
    { label: "C", text: "TC4 – TC1 – TC3 – TC5 – TC6 – TC2" },
    { label: "D", text: "TC4 – TC2 – TC5 – TC1 – TC3 – TC6" },
  ],
  // Q34
  [
    { label: "A", text: "Tests d'intégration de composants" },
    { label: "B", text: "Tests basés sur des user stories" },
    { label: "C", text: "Tests non fonctionnels" },
    { label: "D", text: "Tests exploratoires" },
  ],
  // Q35
  [
    { label: "A", text: "La gestion transfère deux testeurs expérimentés à un autre projet" },
    { label: "B", text: "Le système ne respecte pas les normes de sécurité fonctionnelle" },
    { label: "C", text: "Le temps de réponse du système dépasse les exigences des utilisateurs" },
    {
      label: "D",
      text: "Les personnes handicapées rencontrent des difficultés à utiliser le système.",
    },
  ],
  // Q36
  [
    {
      label: "A",
      text: "L'activité des développeurs qui n'ont peut-être pas suffisamment testé la correction dans l'étape b.",
    },
    {
      label: "B",
      text: "L'activité des testeurs qui peuvent ne pas être clairs sur ce qu'il faut tester à l'étape e.",
    },
    {
      label: "C",
      text: "La gestion de configuration, qui peut ne pas maintenir l'intégrité de la produit à l'étape d.",
    },
    {
      label: "D",
      text: "L'activité des développeurs qui peuvent ne pas corriger correctement les erreurs à l'étape a.",
    },
  ],
  // Q37
  [
    {
      label: "A",
      text: "Le temps d'arrêt de l'environnement de test durant la période de rapport a augmenté de 20 % à 25 heures.",
    },
    {
      label: "B",
      text: "Le temps nécessaire pour fournir des statistiques sur les métriques de couverture a été réduit de 35 % à 72 minutes durant la période de rapport.",
    },
    {
      label: "C",
      text: "L'exécution des cas de test accuse actuellement un retard de 6 jours par rapport au calendrier, car de nombreux échecs sont en cours de détection et il y a des problèmes avec l'environnement de test.",
    },
    {
      label: "D",
      text: "De nouveaux risques de produit ont été dérivés des résultats de l'exécution des tests, qui doivent encore être évalués.",
    },
  ],
  // Q38
  [
    { label: "A", text: "Le titre ne décrit pas correctement le contenu." },
    {
      label: "B",
      text: "La gravité et la priorité devraient être les mêmes, car la première détermine la seconde.",
    },
    {
      label: "C",
      text: "Vous n'avez pas encore observé ce défaut. Par conséquent, le statut n'est pas \"nouveau\".",
    },
    {
      label: "D",
      text: "L'entrée suivante est manquante : Date du rapport de défaut : 19.12.2023",
    },
  ],
  // Q39
  [
    { label: "A", text: "Outil de gestion" },
    { label: "B", text: "Outil de test statique" },
    { label: "C", text: "Outil de couverture des tests" },
    { label: "D", text: "Outil pour soutenir la scalabilité" },
  ],
  // Q40
  [
    {
      label: "A",
      text: "L'automatisation des tests permet une évaluation objective et une livraison de mesures qui sont trop compliquées pour que des humains puissent les dériver.",
    },
    {
      label: "B",
      text: "Pour l'automatisation des tests, vous pouvez estimer très précisément l'effort requis pour l'introduction, la maintenance et la formation.",
    },
    {
      label: "C",
      text: "L'automatisation des tests augmente la confiance dans les résultats des tests car elle élimine la pensée critique humaine.",
    },
    {
      label: "D",
      text: "L'automatisation des tests respecte toujours les exigences réglementaires et les normes de sécurité.",
    },
  ],
];

// Map actual letters to option ids
rawOptions.forEach((opts, qIdx) => {
  const qId = `ef-q${qIdx + 1}`;
  opts.forEach((opt, oIdx) => {
    const letter = ["a", "b", "c", "d"][oIdx];
    ENSEMBLE_F_OPTIONS.push({
      id: `${qId}-${letter}`,
      question_id: qId,
      position: oIdx + 1,
      label: opt.label,
      text: opt.text,
    });
  });
});

export const ENSEMBLE_F_SOLUTIONS = [
  {
    question_id: "ef-q1",
    correct_option_ids: ["ef-q1-c"],
    explanation:
      "La réduction du risque d'un environnement de test inadéquat n'est pas un objectif de test répertorié. Un objectif est plutôt d'apporter des informations suffisantes pour réduire le risque d'une qualité logicielle inadéquate. (Syllabus Section 1.1.1)",
    option_rationales: {
      "ef-q1-a": "Faux. C'est un objectif de test typique.",
      "ef-q1-b": "Faux. C'est un objectif de test typique.",
      "ef-q1-c": "Correct. Ce n'est pas un objectif typique listé dans le syllabus.",
      "ef-q1-d": "Faux. C'est un objectif de test typique.",
    },
  },
  {
    question_id: "ef-q2",
    correct_option_ids: ["ef-q2-d"],
    explanation:
      "Le problème dans le code est un défaut (defect/bug). La distraction du développeur est la cause racine, la pensée erronée du développeur est l'erreur, et l'acceptation de valeurs invalides par le système lors de l'exécution est un échec. (Syllabus Section 1.2.3)",
    option_rationales: {
      "ef-q2-a": "Faux. La distraction est la cause racine.",
      "ef-q2-b": "Faux. L'acceptation d'entrées invalides observée à l'exécution est un échec.",
      "ef-q2-c": "Faux. L'erreur est l'action humaine ou la pensée erronée.",
      "ef-q2-d": "Correct. L'imperfection ou anomalie présente dans le code est un défaut.",
    },
  },
  {
    question_id: "ef-q3",
    correct_option_ids: ["ef-q3-d"],
    explanation:
      "L'analyse des tests consiste à analyser la base de tests pour identifier les caractéristiques testables et évaluer sa testabilité. (Syllabus Section 1.4.1)",
    option_rationales: {
      "ef-q3-a": "Faux. Fait partie de la phase de Conception des tests.",
      "ef-q3-b": "Faux. Fait partie de la phase de Réalisation/Implémentation des tests.",
      "ef-q3-c": "Faux. Fait partie de l'Achèvement des tests.",
      "ef-q3-d":
        "Correct. Évaluer la base de test pour déterminer sa testabilité est une tâche d'Analyse des tests.",
    },
  },
  {
    question_id: "ef-q4",
    correct_option_ids: ["ef-q4-b"],
    explanation:
      "Le principe de regroupement des défauts (defect clustering / Pareto) indique qu'un petit nombre de modules contient généralement la majorité des défauts. (Syllabus Section 1.3.1)",
    option_rationales: {
      "ef-q4-a": "Faux. Ce principe stipule que les tests dépendent du contexte.",
      "ef-q4-b": "Correct. Le principe de Pareto stipule que les défauts se regroupent.",
      "ef-q4-c": "Faux. Ce principe concerne le paradoxe du pesticide.",
      "ef-q4-d": "Faux. Ce principe stipule que l'absence de défauts est une illusion.",
    },
  },
  {
    question_id: "ef-q5",
    correct_option_ids: ["ef-q5-d"],
    explanation:
      "Les compétences en communication sont essentielles pour collaborer de manière constructive avec les développeurs et leur faire des retours factuels et neutres sur les défauts trouvés. (Syllabus Section 1.5.1)",
    option_rationales: {
      "ef-q5-a": "Faux. Aide à la conception globale mais pas spécifiquement à la transmission.",
      "ef-q5-b": "Faux. Aide à concevoir de bons cas de test.",
      "ef-q5-c": "Faux. Aide à détecter des défauts complexes.",
      "ef-q5-d":
        "Correct. Les compétences en communication sont clés pour notifier efficacement les échecs.",
    },
  },
  {
    question_id: "ef-q6",
    correct_option_ids: ["ef-q6-a"],
    explanation:
      "1 s'associe à A (Suite de tests = ensemble de cas ou scripts). 2 s'associe à C (Cas de test = contient les résultats attendus). 3 s'associe à B (Script = séquence d'instructions). 4 s'associe à D (Charte = objectifs d'une session exploratoire). (Syllabus Section 1.4.3)",
    option_rationales: {
      "ef-q6-a": "Correct. Correspond exactement aux définitions officielles.",
      "ef-q6-b": "Faux. Association erronée.",
      "ef-q6-c": "Faux. Association erronée.",
      "ef-q6-d": "Faux. Association erronée.",
    },
  },
  {
    question_id: "ef-q7",
    correct_option_ids: ["ef-q7-c"],
    explanation:
      "L'analyse de la traçabilité et des impacts de modifications aide à déterminer quelles parties du code sont touchées et par conséquent à sélectionner les cas de test de régression pertinents. (Syllabus Section 1.4.4)",
    option_rationales: {
      "ef-q7-a":
        "Faux. L'analyse d'impact montre les parties touchées, pas directement la qualité générale.",
      "ef-q7-b": "Faux. Concerne plutôt la couverture.",
      "ef-q7-c":
        "Correct. Conduire une analyse d'impact permet de sélectionner intelligemment les tests de régression.",
      "ef-q7-d":
        "Faux. L'analyse des risques résiduels repose sur la traçabilité des résultats de test.",
    },
  },
  {
    question_id: "ef-q8",
    correct_option_ids: ["ef-q8-b"],
    explanation:
      "L'approche de l'équipe entière (Whole-Team approach) favorise la responsabilité partagée pour la qualité, où l'ensemble de l'équipe collabore pour atteindre les objectifs de qualité. (Syllabus Section 1.5.2)",
    option_rationales: {
      "ef-q8-a": "Faux. Les membres prennent les tâches selon leurs compétences.",
      "ef-q8-b":
        "Correct. L'atout majeur est la responsabilité collective partagée vis-à-vis de la qualité.",
      "ef-q8-c": "Faux. L'équipe travaille en étroite collaboration.",
      "ef-q8-d": "Faux. Les rôles et responsabilités sont flexibles.",
    },
  },
  {
    question_id: "ef-q9",
    correct_option_ids: ["ef-q9-a"],
    explanation:
      "Dans un modèle séquentiel, le code exécutable est produit tardivement. Par conséquent, les tests dynamiques ne peuvent pas avoir lieu avant les phases de codage, contrairement aux tests statiques. (Syllabus Section 2.1.1)",
    option_rationales: {
      "ef-q9-a":
        "Correct. Sans code exécutable, les tests dynamiques sont impossibles au début du projet.",
      "ef-q9-b": "Faux. Les revues statiques peuvent commencer très tôt.",
      "ef-q9-c": "Faux. La planification des tests se fait en amont.",
      "ef-q9-d": "Faux. Les tests d'acceptation dynamiques exigent un produit fonctionnel tardif.",
    },
  },
  {
    question_id: "ef-q10",
    correct_option_ids: ["ef-q10-b"],
    explanation:
      "Une bonne pratique fondamentale consiste à attribuer des objectifs distincts et spécifiques à chaque niveau de test (composant, intégration, système, acceptation) pour assurer la complémentarité des tests. (Syllabus Section 2.1.2)",
    option_rationales: {
      "ef-q10-a": "Faux. Chaque activité de dev doit avoir une activité de test correspondante.",
      "ef-q10-b":
        "Correct. Définir des objectifs clairs et distincts pour chaque niveau évite les doublons inutiles.",
      "ef-q10-c":
        "Faux. On doit concevoir dès que des brouillons de spécifications sont disponibles.",
      "ef-q10-d": "Faux. Les revues statiques permettent de prévenir les défauts très tôt.",
    },
  },
  {
    question_id: "ef-q11",
    correct_option_ids: ["ef-q11-c"],
    explanation:
      "Le BDD (Behavior-Driven Development) utilise des scénarios rédigés selon la structure Given-When-Then (Donné-Si-Alors) pour spécifier le comportement attendu d'une application. (Syllabus Section 2.1.3)",
    option_rationales: {
      "ef-q11-a": "Faux. Le TDD utilise des tests unitaires basés sur le code.",
      "ef-q11-b": "Faux. L'ATDD utilise des critères d'acceptation en format variable.",
      "ef-q11-c": "Correct. C'est le format structurel signature du BDD (Given/When/Then).",
      "ef-q11-d": "Faux. Le CI/CD est un ensemble de pratiques d'intégration/livraison.",
    },
  },
  {
    question_id: "ef-q12",
    correct_option_ids: ["ef-q12-a"],
    explanation:
      "La synergie DevOps permet une collaboration renforcée pour livrer des incréments stables beaucoup plus fréquemment et rapidement au marché. (Syllabus Section 2.1.4)",
    option_rationales: {
      "ef-q12-a": "Correct. C'est le bénéfice opérationnel majeur de DevOps.",
      "ef-q12-b":
        "Faux. DevOps met l'accent sur la qualité globale, y compris les aspects non fonctionnels.",
      "ef-q12-c":
        "Faux. Le Shift-Left réduit le risque d'introduire des défauts mais ne réduit pas le besoin de régression.",
      "ef-q12-d":
        "Faux. Mettre en œuvre l'automatisation exige un effort de maintenance et n'est pas un bénéfice direct en soi.",
    },
  },
  {
    question_id: "ef-q13",
    correct_option_ids: ["ef-q13-b"],
    explanation:
      "Le test de performance (mesure du temps de réponse) évalue le comportement non fonctionnel du système sous certaines charges/contraintes. (Syllabus Section 2.2.2)",
    option_rationales: {
      "ef-q13-a":
        "Faux. Même si l'exigence vient du métier, elle concerne la performance (le comment) et non le fonctionnel (le quoi).",
      "ef-q13-b":
        "Correct. C'est un test de performance type, qui fait partie des tests non fonctionnels.",
      "ef-q13-c": "Faux. Le test exploratoire se fait sans cas de test pré-conçus rigides.",
      "ef-q13-d":
        "Faux. Les tests de performance se font en boîte noire (sans connaissance de la structure interne).",
    },
  },
  {
    question_id: "ef-q14",
    correct_option_ids: ["ef-q14-d"],
    explanation:
      "Les tests de régression vérifient que les modifications n'ont pas introduit d'effets indésirables dans le code inchangé. Les tests de confirmation (re-test) s'assurent que le défaut initial a été corrigé. (Syllabus Section 2.2.3)",
    option_rationales: {
      "ef-q14-a": "Faux. On ne peut pas prédire l'évolution absolue des tests de confirmation.",
      "ef-q14-b":
        "Faux. C'est l'inverse (confirmation pour correction, régression pour non-régression).",
      "ef-q14-c": "Faux. Les deux types de tests portent sur l'objet de test lui-même.",
      "ef-q14-d":
        "Correct. Les tests de régression visent à détecter les régressions involontaires, et la confirmation vérifie les correctifs.",
    },
  },
  {
    question_id: "ef-q15",
    correct_option_ids: ["ef-q15-c"],
    explanation:
      "Les tests statiques exigent de pouvoir analyser ou lire le produit de travail (code source, documents). Le code exécutable compilé d'un tiers sans accès au code source ne peut pas être examiné statiquement; il ne peut être testé que de manière dynamique. (Syllabus Section 3.1.1)",
    option_rationales: {
      "ef-q15-a": "Faux. Les cas de test peuvent être revus ou analysés statiquement.",
      "ef-q15-b": "Faux. Les spécifications et critères d'acceptation sont des cibles parfaites.",
      "ef-q15-c":
        "Correct. Un binaire compilé propriétaire fermé n'offre pas de code source lisible, empêchant toute analyse statique.",
      "ef-q15-d":
        "Faux. Les modèles et documentations de projet se prêtent parfaitement aux revues.",
    },
  },
  {
    question_id: "ef-q16",
    correct_option_ids: ["ef-q16-d"],
    explanation:
      "Les tests statiques (comme les revues d'exigences) permettent d'identifier des lacunes ou des manques de couverture des exigences de sécurité de la base de test avant même d'écrire le code. (Syllabus Section 3.1.3)",
    option_rationales: {
      "ef-q16-a":
        "Faux. Les tests statiques découvrent des défauts, tandis que les tests dynamiques révèlent des échecs.",
      "ef-q16-b":
        "Faux. Mesurer des performances inadéquates exige d'exécuter le code (dynamique).",
      "ef-q16-c": "Faux. Bien que ce soit un objectif majeur, ce n'est pas le seul.",
      "ef-q16-d":
        "Correct. Un défaut de traçabilité ou d'exigence de sécurité manquante peut être facilement détecté par test statique.",
    },
  },
  {
    question_id: "ef-q17",
    correct_option_ids: ["ef-q17-b"],
    explanation:
      "Le processus de révision formelle structuré comprend plusieurs activités séquencées : planification, lancement, révision individuelle, communication et analyse, remédiation et rapports. (Syllabus Section 3.2.2)",
    option_rationales: {
      "ef-q17-a": "Faux. La révision technique est animée par un modérateur formé.",
      "ef-q17-b":
        "Correct. Ce sont bien les grandes étapes normalisées d'un processus de revue formelle.",
      "ef-q17-c":
        "Faux. Les livrables doivent être distribués bien avant la réunion pour la révision individuelle.",
      "ef-q17-d": "Faux. Signaler tous les défauts découverts est obligatoire.",
    },
  },
  {
    question_id: "ef-q18",
    correct_option_ids: ["ef-q18-b"],
    explanation:
      "Le rôle de gestion (Management) décide de ce qui doit être révisé, alloue le temps et les ressources, et s'assure du respect des objectifs. (Syllabus Section 3.2.3)",
    option_rationales: {
      "ef-q18-a": "Faux. Le retravail post-révision est sous la responsabilité de l'auteur.",
      "ef-q18-b": "Correct. C'est le management qui décide quoi réviser.",
      "ef-q18-c": "Faux. C'est la tâche du facilitateur d'animer les sessions.",
      "ef-q18-d": "Faux. C'est le rôle du scribe de documenter les décisions.",
    },
  },
  {
    question_id: "ef-q19",
    correct_option_ids: ["ef-q19-b"],
    explanation:
      "Les tests boîte noire se concentrent sur les spécifications comportementales, ce qui permet de les concevoir très tôt, indépendamment de la structure du code ou des choix d'implémentation. (Syllabus Section 4.1.1)",
    option_rationales: {
      "ef-q19-a": "Faux. C'est la définition des techniques boîte blanche.",
      "ef-q19-b":
        "Correct. N'ayant pas besoin d'accès au code source, ces cas de test peuvent être créés de manière indépendante et précoce.",
      "ef-q19-c": "Faux. C'est la force des techniques basées sur l'expérience.",
      "ef-q19-d":
        "Faux. Si la spécification change, les cas de test boîte noire doivent être ajustés.",
    },
  },
  {
    question_id: "ef-q20",
    correct_option_ids: ["ef-q20-d"],
    explanation:
      "Les classes d'équivalence valides sont : 1) [0, 1000], 2) [1001, 2000], 3) [2001, 4000], 4) [4001, 6000], 5) [6001, MaxInt]. Le groupe d) {666 (classe 1), 999 (classe 1), 2222 (classe 3), 5555 (classe 4), 6666 (classe 5)} couvre 4 classes distinctes sur 5 (80% de couverture), ce qui est le maximum proposé. (Syllabus Section 4.2.1)",
    option_rationales: {
      "ef-q20-a": "Faux. Ne couvre que 3 classes sur 5 (60% de couverture).",
      "ef-q20-b": "Faux. Ne couvre que 3 classes sur 5 (60% de couverture).",
      "ef-q20-c": "Faux. Ne couvre que 3 classes sur 5 (60% de couverture).",
      "ef-q20-d":
        "Correct. Offre la couverture la plus élevée (80%) en testant 4 classes d'équivalence distinctes.",
    },
  },
  {
    question_id: "ef-q21",
    correct_option_ids: ["ef-q21-a"],
    explanation:
      "Les frontières de points sont 0, 50, 51, 70, 71, 90, 91, 100. Les 10 valeurs limites théoriques requises par l'analyse à 2 valeurs sont {-1, 0, 50, 51, 70, 71, 90, 91, 100, 101}. Les cas de test couvrent {0, 50, 70, 90, 91, 100}. Cela représente 6 valeurs sur les 10 possibles, soit 60% de couverture. (Syllabus Section 4.2.2)",
    option_rationales: {
      "ef-q21-a": "Correct. 6 valeurs limites sur les 10 théoriques sont couvertes, soit 60%.",
      "ef-q21-b": "Faux. Calcul erroné.",
      "ef-q21-c": "Faux. Calcul erroné.",
      "ef-q21-d": "Faux. Des limites cruciales (-1, 51, 71, 101) ne sont pas testées.",
    },
  },
  {
    question_id: "ef-q22",
    correct_option_ids: ["ef-q22-d"],
    explanation:
      "La règle R8 décrit un non-membre (est un membre = F) qui reçoit un T-shirt cadeau lors de sa 15ème location. Or, la règle stipule clairement que seuls les membres reçoivent un T-shirt cadeau après 15 locations. R8 attribue à tort un T-shirt à un non-membre. (Syllabus Section 4.2.3)",
    option_rationales: {
      "ef-q22-a": "Faux. R4 est valide selon les exigences.",
      "ef-q22-b": "Faux. R2 est valide selon les exigences.",
      "ef-q22-c": "Faux. R6 est valide selon les exigences.",
      "ef-q22-d":
        "Correct. R8 contredit directement les exigences en attribuant un T-shirt cadeau à un non-membre.",
    },
  },
  {
    question_id: "ef-q23",
    correct_option_ids: ["ef-q23-b"],
    explanation:
      "Pour couvrir les 7 transitions valides de l'état INIT à l'état OFF, au moins 3 chemins sont requis : TF1 (INIT -> test -> DEBUG -> done -> OFF), TF2 (INIT -> run -> IN OPERATION -> done -> OFF) et TF3 (INIT -> test -> DEBUG -> error -> IN OPERATION -> pause -> ON HOLD -> resume -> IN OPERATION -> done -> OFF). (Syllabus Section 4.2.4)",
    option_rationales: {
      "ef-q23-a":
        "Faux. Deux cas ne peuvent pas couvrir tous les chemins d'erreur, d'attente et de sortie.",
      "ef-q23-b":
        "Correct. Trois cas de test bien conçus suffisent pour une couverture à 100% des transitions valides.",
      "ef-q23-c":
        "Faux. Quatre cas permettent d'atteindre la couverture mais ce n'est pas le minimum requis.",
      "ef-q23-d": "Faux. Correspond au nombre total de transitions valides.",
    },
  },
  {
    question_id: "ef-q24",
    correct_option_ids: ["ef-q24-a"],
    explanation:
      "La couverture des instructions à 100% garantit que chaque ligne d'instruction exécutable du code source a été traversée au moins une fois lors de l'exécution de la suite de tests. (Syllabus Section 4.3.1)",
    option_rationales: {
      "ef-q24-a":
        "Correct. C'est la définition officielle de la couverture d'instructions (statement coverage).",
      "ef-q24-b":
        "Faux. Avoir plus de cas de test ne garantit pas une meilleure couverture structurelle.",
      "ef-q24-c": "Faux. N'implique pas la couverture des branches.",
      "ef-q24-d": "Faux. Concerne les tests exhaustifs, irréalisables en pratique.",
    },
  },
  {
    question_id: "ef-q25",
    correct_option_ids: ["ef-q25-d"],
    explanation:
      "Atteindre 100% de branches signifie que chaque embranchement décisionnel (conditionnel) du code source a pris tous ses résultats possibles (vrai et faux pour un IF) au moins une fois. (Syllabus Section 4.3.2)",
    option_rationales: {
      "ef-q25-a": "Faux. Il faut au moins exécuter un cas de test.",
      "ef-q25-b": "Faux. L'exécution d'une branche ne révèle pas tous les bugs possibles.",
      "ef-q25-c": "Faux. La couverture d'instructions n'implique pas la couverture de branche.",
      "ef-q25-d":
        "Correct. Exige d'exécuter tous les résultats de décision de chaque transition de contrôle conditionnelle.",
    },
  },
  {
    question_id: "ef-q26",
    correct_option_ids: ["ef-q26-a"],
    explanation:
      "La charte de test (test charter) est le document directeur d'une session de test exploratoire. Elle fixe les objectifs généraux et délimite le périmètre d'exploration du testeur. (Syllabus Section 4.4.2)",
    option_rationales: {
      "ef-q26-a": "Correct. C'est le rôle fondamental d'une charte de test.",
      "ef-q26-b":
        "Faux. Les étapes et résultats sont notés dans le journal de session, pas la charte.",
      "ef-q26-c":
        "Faux. Formulée sous forme de thèmes ou d'objectifs, pas de questions uniquement.",
      "ef-q26-d": "Faux. Les résultats sont discutés lors de la réunion de débriefing.",
    },
  },
  {
    question_id: "ef-q27",
    correct_option_ids: ["ef-q27-d"],
    explanation:
      "Le syllabus souligne que les listes de contrôle sont très polyvalentes et permettent de soutenir efficacement divers types de tests (fonctionnels et non fonctionnels). (Syllabus Section 4.4.3)",
    option_rationales: {
      "ef-q27-a":
        "Faux. Les listes laissent une liberté d'interprétation, ce qui réduit la répétabilité stricte.",
      "ef-q27-b":
        "Faux. N'exige pas de cas détaillés mais la question recherche l'avantage le plus distinctif s'appliquant aux types de tests.",
      "ef-q27-c": "Faux. Une liste de contrôle peut être incomplète ou obsolète.",
      "ef-q27-d":
        "Correct. Les listes de contrôle soutiennent un large éventail de types de tests (fonctionnels et non fonctionnels).",
    },
  },
  {
    question_id: "ef-q28",
    correct_option_ids: ["ef-q28-c"],
    explanation:
      "Dans une approche collaborative (modèle des 3 Amigos), les critères d'acceptation de la story sont co-rédigés en groupe par le représentant métier, le développeur et le testeur, et non isolément par le testeur. (Syllabus Section 4.5.1)",
    option_rationales: {
      "ef-q28-a": "Faux. C'est vrai, une histoire collaborative intègre toutes ces perspectives.",
      "ef-q28-b": "Faux. C'est vrai, c'est l'essence même de l'approche collaborative.",
      "ef-q28-c":
        "Correct. C'est une affirmation fausse (les critères d'acceptation doivent être construits à 3 et non de manière isolée).",
      "ef-q28-d": "Faux. C'est vrai, cela décrit l'acronyme INVEST.",
    },
  },
  {
    question_id: "ef-q29",
    correct_option_ids: ["ef-q29-d"],
    explanation:
      "AC3 stipule que les utilisateurs spéciaux ont tous les droits d'accès des utilisateurs réguliers (qui ont accès aux étages 1 à 3 selon AC1). Pour valider AC3, le cas de test le plus pertinent est de vérifier que l'utilisateur spécial accède bien aux étages 1, 2 et 3. (Syllabus Section 4.5.3)",
    option_rationales: {
      "ef-q29-a": "Faux. Valide AC1, pas AC3.",
      "ef-q29-b": "Faux. Valide AC2 de manière indirecte, pas AC3.",
      "ef-q29-c": "Faux. L'étage 5 n'est pas décrit dans les critères d'acceptation.",
      "ef-q29-d":
        "Correct. Vérifie directement l'accès de l'utilisateur spécial aux étages 1, 2 et 3 conformément à AC3.",
    },
  },
  {
    question_id: "ef-q30",
    correct_option_ids: ["ef-q30-d"],
    explanation:
      "L'approche de test (test approach) décrit la stratégie de test globale, y compris les niveaux de test à appliquer, les types de test, et les critères de couverture requis pour chaque niveau. (Syllabus Section 5.1.1)",
    option_rationales: {
      "ef-q30-a": "Faux. Concerne les besoins matériels ou logiciels requis pour tester.",
      "ef-q30-b": "Faux. Concerne le recensement et la gestion des risques projet/produit.",
      "ef-q30-c": "Faux. Présente les motivations commerciales et le produit.",
      "ef-q30-d":
        "Correct. Définir les niveaux de tests utilisés et leurs critères de couverture relève de l'Approche de test.",
    },
  },
  {
    question_id: "ef-q31",
    correct_option_ids: ["ef-q31-b"],
    explanation:
      "Le Planning Poker repose sur la recherche de consensus. Lorsqu'il y a un grand écart d'estimation (les testeurs estiment à 20 à cause des risques élevés de sécurité, tandis que développeurs/clients estiment à 5), l'équipe doit discuter des raisons de cet écart avant de revoter. (Syllabus Section 5.1.4)",
    option_rationales: {
      "ef-q31-a": "Faux. Ignorer l'estimation élevée des testeurs négligerait des risques majeurs.",
      "ef-q31-b":
        "Correct. C'est la démarche standard : discuter des estimations extrêmes puis procéder à un nouveau vote.",
      "ef-q31-c":
        "Faux. L'estimation du client ou PO n'est pas plus cruciale que celle de l'équipe technique.",
      "ef-q31-d":
        "Faux. Il n'est pas obligatoire d'atteindre une valeur absolument identique à l'infini.",
    },
  },
  {
    question_id: "ef-q32",
    correct_option_ids: ["ef-q32-b"],
    explanation:
      "Selon la pyramide des tests, les tests situés à la base (tests unitaires) sont très nombreux, isolés et extrêmement granulaires. Plus on monte vers le sommet (tests système, de bout en bout), moins les tests sont granulaires (ils testent de larges flux intégrés complexes). (Syllabus Section 5.1.6)",
    option_rationales: {
      "ef-q32-a": "Faux. C'est l'inverse : la base contient un grand nombre de tests granulaires.",
      "ef-q32-b":
        "Correct. Plus on se rapproche du sommet, moins le niveau de test est granulaire.",
      "ef-q32-c": "Faux. Le nombre et l'appellation des couches de test varient selon les projets.",
      "ef-q32-d": "Faux. Les tests de bout en bout sont généralement les plus lents et complexes.",
    },
  },
  {
    question_id: "ef-q33",
    correct_option_ids: ["ef-q33-b"],
    explanation:
      "Dépendances : TC1 dépend de TC4 (technique) et TC3 dépend de TC4 (logique), donc TC4 s'exécute avant TC1 et TC3. De plus, TC5 dépend de TC2 (logique) et TC6 dépend de TC5 (technique), donc ordre TC2 -> TC5 -> TC6. Pour prioriser la haute priorité {TC1, TC3}, on doit commencer par TC4 -> TC3 -> TC1 ou TC4 -> TC1 -> TC3, suivi de la chaîne TC2 -> TC5 -> TC6. (Syllabus Section 5.1.5)",
    option_rationales: {
      "ef-q33-a": "Faux. Viole la dépendance de TC1 qui exige TC4.",
      "ef-q33-b":
        "Correct. Respecte scrupuleusement toutes les dépendances techniques et logiques tout en priorisant la haute priorité.",
      "ef-q33-c": "Faux. TC5 s'exécute avant TC2, ce qui viole sa dépendance.",
      "ef-q33-d":
        "Faux. Retarde inutilement l'exécution des tests de priorité élevée après des cas de priorité basse.",
    },
  },
  {
    question_id: "ef-q34",
    correct_option_ids: ["ef-q34-b"],
    explanation:
      "Le quadrant Q2 correspond aux tests 'Orientés vers les affaires (business), soutien pour l'équipe', ce qui inclut les tests basés sur des user stories, prototypes et scénarios fonctionnels. (Syllabus Section 5.1.7)",
    option_rationales: {
      "ef-q34-a": "Faux. Appartient au quadrant Q1 (orienté technologie, soutien pour l'équipe).",
      "ef-q34-b": "Correct. Les tests basés sur des user stories se situent dans le quadrant Q2.",
      "ef-q34-c": "Faux. Appartient au quadrant Q4 (orienté technologie, critique le produit).",
      "ef-q34-d": "Faux. Appartient au quadrant Q3 (orienté business, critique le produit).",
    },
  },
  {
    question_id: "ef-q35",
    correct_option_ids: ["ef-q35-a"],
    explanation:
      "Un risque de projet est lié à la gestion du projet, aux ressources, aux délais ou aux relations contractuelles. La perte de testeurs expérimentés est un risque projet typique. Les options b, c, d sont des risques produit. (Syllabus Section 5.2.2)",
    option_rationales: {
      "ef-q35-a":
        "Correct. Concerne les ressources humaines et l'organisation du projet (risque projet).",
      "ef-q35-b": "Faux. Concerne un défaut de qualité du produit final (risque produit).",
      "ef-q35-c": "Faux. Concerne une défaillance de performance du produit (risque produit).",
      "ef-q35-d": "Faux. Concerne un défaut d'accessibilité du produit (risque produit).",
    },
  },
  {
    question_id: "ef-q36",
    correct_option_ids: ["ef-q36-c"],
    explanation:
      "La gestion de configuration est responsable de l'intégrité et de la baseline des livrables lors du déploiement d'un environnement à l'autre. Si un correctif testé avec succès en dev (c) échoue systématiquement après installation en test (d/e), cela suggère fortement un problème de gestion de configuration. (Syllabus Section 5.4.1)",
    option_rationales: {
      "ef-q36-a":
        "Faux. Le correctif a été prouvé fonctionnel par l'étape c, l'origine de l'erreur est donc postérieure.",
      "ef-q36-b": "Faux. Le texte élimine explicitement les erreurs ou omissions des testeurs.",
      "ef-q36-c":
        "Correct. C'est le rôle fondamental de la gestion de configuration d'assurer que ce qui a été développé et validé en dev soit exactement ce qui est installé en test.",
      "ef-q36-d": "Faux. La correction a été prouvée fonctionnelle par l'étape c.",
    },
  },
  {
    question_id: "ef-q37",
    correct_option_ids: ["ef-q37-b"],
    explanation:
      "La surveillance et le contrôle des tests se concentrent sur la qualité du produit, la couverture, le respect du calendrier et les obstacles de test. L'effort interne d'ingénierie requis pour générer les rapports n'apporte aucune valeur ou pertinence pour les parties prenantes quant à la qualité ou à l'avancement. (Syllabus Section 5.3.2)",
    option_rationales: {
      "ef-q37-a":
        "Faux. Les pannes d'environnement de test sont des obstacles critiques à signaler.",
      "ef-q37-b":
        "Correct. L'optimisation du temps de calcul interne n'apporte aucune valeur aux parties prenantes concernant la qualité ou l'avancement.",
      "ef-q37-c": "Faux. Un retard sur le calendrier est une information de pilotage capitale.",
      "ef-q37-d":
        "Faux. Identifier de nouveaux risques produit est crucial pour guider les décisions de release.",
    },
  },
  {
    question_id: "ef-q38",
    correct_option_ids: ["ef-q38-d"],
    explanation:
      "Selon la norme ISTQB, un rapport de défaut formel doit obligatoirement inclure la date d'observation du défaut pour des raisons de traçabilité historique et d'analyse des temps de traitement (cycle time). (Syllabus Section 5.5.1)",
    option_rationales: {
      "ef-q38-a": "Faux. Le titre décrit correctement l'anomalie.",
      "ef-q38-b":
        "Faux. Gravité technique et priorité commerciale sont conceptuellement différentes.",
      "ef-q38-c": "Faux. 'Nouveau' est le statut initial correct d'un bug venant d'être soumis.",
      "ef-q38-d":
        "Correct. La date d'observation ou de création du rapport a été omise, ce qui est une information requise par l'ISTQB.",
    },
  },
  {
    question_id: "ef-q39",
    correct_option_ids: ["ef-q39-a"],
    explanation:
      "Les outils de gestion (notamment les outils de gestion des défauts ou ALM) permettent de suivre et de rapporter les métriques d'anomalies, le statut des bugs et les taux de correction. (Syllabus Section 6.1.1)",
    option_rationales: {
      "ef-q39-a":
        "Correct. Les outils de gestion des défauts/tests sont conçus pour cataloguer, suivre et rapporter l'état des défauts.",
      "ef-q39-b":
        "Faux. Les outils de test statique analysent le code ou la documentation pour identifier des défauts mais ne gèrent pas le reporting global.",
      "ef-q39-c": "Faux. Les outils de couverture mesurent la portion de code testée.",
      "ef-q39-d":
        "Faux. Les outils de scalabilité soutiennent le dimensionnement technique des tests.",
    },
  },
  {
    question_id: "ef-q40",
    correct_option_ids: ["ef-q40-a"],
    explanation:
      "L'un des avantages clés de l'automatisation est de fournir des mesures et des évaluations de couverture structurelle objectives et d'exécuter des calculs complexes bien plus précisément et rapidement qu'un être humain. (Syllabus Section 6.2.1)",
    option_rationales: {
      "ef-q40-a":
        "Correct. L'automatisation apporte une objectivité totale et des mesures d'exécution fiables impossibles à dériver manuellement.",
      "ef-q40-b":
        "Faux. Estimer l'effort d'automatisation (notamment la maintenance) est notoirement difficile et complexe.",
      "ef-q40-c":
        "Faux. L'absence de pensée critique humaine est un risque majeur de l'automatisation, pas un avantage.",
      "ef-q40-d":
        "Faux. L'automatisation n'assure pas en elle-même la conformité réglementaire de manière automatique.",
    },
  },
];
