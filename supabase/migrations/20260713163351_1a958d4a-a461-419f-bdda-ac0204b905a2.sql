-- Seed an original CTFL v4.0-style sample exam (not copied official questions)
DO $$
DECLARE
  v_exam uuid;
  v_q uuid;
BEGIN
  INSERT INTO public.exams (title, description, language, duration_minutes, total_questions, passing_threshold, points_per_question, attempts_allowed, status)
  VALUES (
    'Examen blanc CTFL v4.0 — Fondamentaux du test',
    'Un examen d''entraînement original inspiré du syllabus ISTQB CTFL v4.0. Questions à choix unique et multiple couvrant les six chapitres du syllabus.',
    'fr', 60, 10, 65, 1, NULL, 'published'
  ) RETURNING id INTO v_exam;

  -- Q1 (Ch1, K1, single)
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 1, 1, 'K1', 'single', 1, 'FL-1.1.1', 'Parmi les propositions suivantes, laquelle décrit le mieux un objectif fondamental du test logiciel ?')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Prouver de façon absolue qu''un logiciel ne contient aucun défaut'),
    (v_q,2,'B','Évaluer la qualité du logiciel et réduire le risque de défaillance en exploitation'),
    (v_q,3,'C','Remplacer entièrement les activités de revue et d''analyse statique'),
    (v_q,4,'D','Garantir contractuellement que tous les utilisateurs seront satisfaits');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='B')],
     'Le test vise à évaluer la qualité et à réduire le risque de défaillances ; il ne peut pas prouver l''absence totale de défauts (principe : les tests montrent la présence de défauts, pas leur absence).');

  -- Q2 (Ch1, K2, single) - principle
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 2, 1, 'K2', 'single', 1, 'FL-1.3.1', 'Le "paradoxe du pesticide" en test logiciel signifie principalement que :')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Les mêmes tests répétés finissent par ne plus détecter de nouveaux défauts'),
    (v_q,2,'B','Les défauts se concentrent toujours dans un seul module'),
    (v_q,3,'C','Tester exhaustivement est toujours possible avec assez de temps'),
    (v_q,4,'D','Le test précoce est inutile dans les projets agiles');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='A')],
     'Le paradoxe du pesticide indique que réutiliser sans cesse les mêmes cas de test les rend inefficaces ; il faut les réviser et en concevoir de nouveaux.');

  -- Q3 (Ch2, K2, single)
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 3, 2, 'K2', 'single', 1, 'FL-2.1.1', 'Dans un modèle de cycle de vie séquentiel, quelle affirmation est correcte concernant les niveaux de test ?')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Chaque activité de développement possède une activité de test correspondante'),
    (v_q,2,'B','Le test ne commence qu''après la mise en production'),
    (v_q,3,'C','Les niveaux de test sont exécutés dans un ordre aléatoire'),
    (v_q,4,'D','Un seul niveau de test suffit pour tout le projet');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='A')],
     'Dans les modèles séquentiels (ex. modèle en V), chaque phase de développement est associée à une activité de test correspondante.');

  -- Q4 (Ch2, K1, single) - test types
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 4, 2, 'K1', 'single', 1, 'FL-2.3.1', 'Un test qui vérifie que des fonctionnalités existantes fonctionnent toujours après une modification du code est appelé :')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Test de confirmation'),
    (v_q,2,'B','Test de régression'),
    (v_q,3,'C','Test d''acceptation'),
    (v_q,4,'D','Test de charge');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='B')],
     'Le test de régression vérifie qu''une modification n''a pas introduit de défauts dans des parties déjà testées. Le test de confirmation revérifie qu''un défaut corrigé l''est réellement.');

  -- Q5 (Ch3, K2, multi)
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 5, 3, 'K2', 'multi', 1, 'FL-3.2.1', 'Parmi les propositions suivantes, lesquelles sont des activités de test statique ? (Choisissez DEUX réponses)')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Revue par les pairs d''une spécification'),
    (v_q,2,'B','Exécution de cas de test sur le système'),
    (v_q,3,'C','Analyse statique du code source par un outil'),
    (v_q,4,'D','Test exploratoire de l''interface utilisateur');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[
      (SELECT id FROM public.question_options WHERE question_id=v_q AND label='A'),
      (SELECT id FROM public.question_options WHERE question_id=v_q AND label='C')
    ],
     'Le test statique n''exécute pas le code : il inclut les revues (ex. revue de spécification) et l''analyse statique. L''exécution de tests et le test exploratoire sont du test dynamique.');

  -- Q6 (Ch4, K3, single) - equivalence partitioning
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 6, 4, 'K3', 'single', 1, 'FL-4.2.1', 'Un champ accepte un âge entier entre 18 et 65 inclus. En appliquant l''analyse des valeurs limites (approche à 2 valeurs), quel ensemble contient uniquement des valeurs limites valides et invalides pertinentes ?')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','17, 18, 65, 66'),
    (v_q,2,'B','0, 18, 65, 100'),
    (v_q,3,'C','18, 40, 65'),
    (v_q,4,'D','1, 2, 3, 4');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='A')],
     'L''analyse des valeurs limites à 2 valeurs teste chaque limite et sa valeur adjacente : 17/18 pour la borne inférieure et 65/66 pour la borne supérieure.');

  -- Q7 (Ch4, K2, single) - decision table
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 7, 4, 'K2', 'single', 1, 'FL-4.2.3', 'Quelle technique de test est la plus appropriée pour tester des règles métier combinant plusieurs conditions ?')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Table de décision'),
    (v_q,2,'B','Partition d''équivalence'),
    (v_q,3,'C','Test de transition d''état'),
    (v_q,4,'D','Devinette d''erreurs');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='A')],
     'Les tables de décision sont conçues pour couvrir des combinaisons de conditions et leurs actions associées (règles métier).');

  -- Q8 (Ch5, K2, single) - risk
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 8, 5, 'K2', 'single', 1, 'FL-5.2.1', 'Le niveau de risque d''un produit est généralement déterminé par la combinaison de :')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','La probabilité d''occurrence et l''impact de la défaillance'),
    (v_q,2,'B','Le nombre de testeurs et le budget'),
    (v_q,3,'C','La taille du code et le nombre de commentaires'),
    (v_q,4,'D','La durée du projet uniquement');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='A')],
     'Le niveau de risque se mesure par la probabilité que l''événement survienne et l''impact (les conséquences) s''il survient.');

  -- Q9 (Ch5, K1, single) - test monitoring
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 9, 5, 'K1', 'single', 1, 'FL-5.3.1', 'Quel document résume les activités de test et fournit une évaluation par rapport aux critères de sortie, destiné aux parties prenantes ?')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Le plan de test'),
    (v_q,2,'B','Le rapport d''avancement de test'),
    (v_q,3,'C','Le rapport de synthèse de test'),
    (v_q,4,'D','La charte de test');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='C')],
     'Le rapport de synthèse de test (test completion report) résume l''exécution et évalue par rapport aux critères de sortie pour les parties prenantes.');

  -- Q10 (Ch6, K1, single) - tools
  INSERT INTO public.questions (exam_id, position, chapter, k_level, type, points, learning_objective, text)
  VALUES (v_exam, 10, 6, 'K1', 'single', 1, 'FL-6.1.1', 'Parmi les propositions suivantes, laquelle représente un risque potentiel lié à l''utilisation d''outils de test ?')
  RETURNING id INTO v_q;
  INSERT INTO public.question_options (question_id, position, label, text) VALUES
    (v_q,1,'A','Des attentes irréalistes quant aux bénéfices de l''outil'),
    (v_q,2,'B','La réduction des tâches répétitives'),
    (v_q,3,'C','Une meilleure cohérence des résultats de test'),
    (v_q,4,'D','L''accès plus facile aux informations sur les tests');
  INSERT INTO public.question_solutions (question_id, correct_option_ids, explanation) VALUES
    (v_q, ARRAY[(SELECT id FROM public.question_options WHERE question_id=v_q AND label='A')],
     'Les attentes irréalistes constituent un risque classique de l''adoption d''outils ; les autres propositions sont des bénéfices potentiels.');
END $$;