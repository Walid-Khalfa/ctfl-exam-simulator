# Contenu bilingue des examens (FR / EN)

Les six séries d'examens CTFL v4 peuvent désormais être passées **entièrement en
français ou entièrement en anglais** : titre, description, questions, options,
explications et justifications par option. Aucun appel à un LLM n'est effectué
pendant un examen : les traductions sont versionnées dans le dépôt et persistées
avec les questions.

## 1. Modèle de données

Un examen reste **un seul examen** : il n'existe pas six séries françaises et six
séries anglaises. La traduction anglaise est stockée **sur les mêmes documents**,
dans des champs suffixés `_en` :

| Table                | Champs français                    | Champs anglais ajoutés                   |
| -------------------- | ---------------------------------- | ---------------------------------------- |
| `exams`              | `title`, `description`             | `title_en`, `description_en`             |
| `questions`          | `text`                             | `text_en`                                |
| `question_options`   | `text`                             | `text_en`                                |
| `question_solutions` | `explanation`, `option_rationales` | `explanation_en`, `option_rationales_en` |

Ne sont **jamais** modifiés : identifiants (`id`, `question_id`, `option_id`),
`exam_id`, points, chapitres, niveaux K, objectifs d'apprentissage, ordre des
options, `correct_option_ids` et le champ `language` des examens.

Conséquences : les tentatives, réponses, marquages, notes, résultats et
statistiques existants restent valables dans les deux langues, et changer de
langue ne crée ni ne soumet aucune tentative.

## 2. Emplacement des traductions

- `src/integrations/supabase/translations/ensemble-{a..f}.en.ts` : traductions
  anglaises par **identifiant stable** (jamais par position).
- `src/integrations/supabase/translations/index.ts` : agrégation, helpers purs et
  idempotents (`withEnglishExam`, `withEnglishQuestion`, `withEnglishOption`,
  `withEnglishSolution`) et calcul de couverture.
- `src/integrations/supabase/seed-payload.ts` : source unique utilisée par
  l'application (seed Firestore / cache localStorage) **et** par le script de
  migration.
- `src/lib/content-localization.ts` : résolution à l'affichage, avec repli
  français explicite (`translationMissing: true`).

## 3. Couverture par série

Mesurée à partir des seeds, via `node scripts/migrate-bilingual-content.mjs --check` :

| Série     | Questions   | Options     | Explications | Justifications/option |
| --------- | ----------- | ----------- | ------------ | --------------------- |
| A         | 40/40       | 160/160     | 40/40        | 0/0 (aucune en FR)    |
| B         | 40/40       | 160/160     | 40/40        | 0/0 (aucune en FR)    |
| C         | 40/40       | 160/160     | 40/40        | 160/160               |
| D         | 40/40       | 165/165     | 40/40        | 165/165               |
| E         | 40/40       | 160/160     | 40/40        | 160/160               |
| F         | 40/40       | 160/160     | 40/40        | 160/160               |
| **Total** | **240/240** | **965/965** | **240/240**  | **645/645**           |

Les séries C à F disposent en plus d'une justification par option ; toutes sont
traduites. Les séries A et B n'en ont pas en français, donc rien n'est à traduire.

## 4. Comportement bilingue

- Le sélecteur d'interface (`LanguageSwitcher`, préférence `ctfl-locale`) pilote
  désormais **aussi** le contenu pédagogique : examen, résultats, correction.
- Le changement de langue est purement local : il ne navigue pas, ne recharge pas
  la tentative et préserve les réponses, le marquage, les notes, la question
  courante et le temps restant.
- Si une traduction manque (examen créé par un formateur, ancien document non
  migré), le texte français est affiché avec un badge explicite
  `TranslationMissingNotice` (« Traduction anglaise indisponible »). Le problème
  n'est jamais masqué.
- Les badges et filtres du tableau de bord n'annoncent plus les séries bilingues
  comme « françaises » : `examLanguageLabel` affiche « Français / English » dès
  qu'un `title_en` existe, et `examLocales` détermine les langues réellement
  disponibles.

## 5. Migration des données existantes

Script : `scripts/migrate-bilingual-content.mjs`.

```bash
# Simulation (par défaut) : couverture + documents qui changeraient
node scripts/migrate-bilingual-content.mjs --verbose

# Échec si une traduction manque ou si des documents restent à mettre à jour
node scripts/migrate-bilingual-content.mjs --check

# Sauvegarde puis écriture (Firestore, nécessite FIREBASE_PROJECT_ID)
node scripts/migrate-bilingual-content.mjs --apply --backup backup-bilingue.json

# Retour arrière
node scripts/migrate-bilingual-content.mjs --rollback backup-bilingue.json
```

Garanties :

- **idempotent** : seuls les champs `*_en` absents ou obsolètes sont écrits ;
  une seconde exécution n'écrit rien ;
- **non destructif** : seuls les champs `*_en` sont écrits, en `merge: true` ;
- **identifiants stables** : chaque document est lu par `id` / `question_id`,
  jamais par position ni par balayage de collection ;
- **aucune écriture** sur `attempts`, `attempt_answers`, `attempt_events`,
  `profiles` ;
- `--backup` exporte l'état exact des documents avant écriture, `--rollback`
  restaure cet état (y compris la suppression des documents qui n'existaient pas).

Variables d'environnement attendues pour l'accès Firestore :
`FIREBASE_PROJECT_ID` (requis), `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`,
`FIREBASE_APP_ID`, `FIREBASE_DATABASE_ID` (facultatif).

Sans `FIREBASE_PROJECT_ID`, le script reste en **simulation sur le payload
embarqué** : il affiche la couverture et n'écrit rien.

## 6. Ce qui fonctionne après la fusion du code, et ce qui exige la migration

| Après fusion du code                                                                                                                                                                            | Nécessite la migration des données                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Les six séries s'affichent en anglais pour les utilisateurs dont le cache local est (re)initialisé : `mock-client` fusionne les champs `_en` des seeds dans les enregistrements déjà persistés. | Les documents Firestore déjà créés doivent recevoir les champs `_en` pour que **tous** les navigateurs (cache vide ou ancien, autre appareil) servent l'anglais sans repli. |
| Les nouvelles installations / nouveaux caches sont bilingues dès le seed.                                                                                                                       | Les examens créés par un formateur restent monolingues jusqu'à l'ajout de leurs traductions.                                                                                |
| Les tentatives en cours et terminées restent lisibles et corrigeables dans les deux langues.                                                                                                    | —                                                                                                                                                                           |

La réconciliation côté client est un filet de sécurité (idempotent, uniquement
`*_en`), pas un substitut à la migration : lancez `--apply` après la fusion pour
que la base elle-même soit bilingue.

## 7. Vérifications effectuées

| Contrôle                                                                                                                   | Résultat                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `node scripts/migrate-bilingual-content.mjs --check` (couverture + simulation)                                             | OK, 240 questions / 965 options / 240 explications / 645 justifications à 100 %, aucun document à mettre à jour sur le payload |
| 40 questions par série et identifiants identiques aux seeds                                                                | OK (`src/tests/i18n-content.test.ts`)                                                                                          |
| Bonnes réponses et scores inchangés dans les deux langues                                                                  | OK (`correct_option_ids` non modifiés ; test de résolution FR/EN)                                                              |
| Repli français + indicateur de traduction manquante                                                                        | OK (tests unitaires et rendu)                                                                                                  |
| Changement de langue pendant une tentative sans perte de réponses, marquages, notes, question courante ni compte à rebours | OK (`src/tests/i18n-exam.test.tsx`, `src/tests/i18n-exam-bilingual.test.tsx`)                                                  |
| Pages de résultats et de correction en anglais                                                                             | OK (tests de rendu)                                                                                                            |
| Suite i18n complète (`npm run test:i18n`)                                                                                  | 19 tests / 5 fichiers, tous verts                                                                                              |
| `npx tsc --noEmit`                                                                                                         | Aucune nouvelle erreur par rapport à la base                                                                                   |
| `npm run build` (configuration Vercel / Nitro)                                                                             | OK                                                                                                                             |
| ESLint + Prettier sur les fichiers modifiés                                                                                | OK                                                                                                                             |
| Versions TanStack corrigées conservées, aucun contrôle de sécurité désactivé                                               | OK (pas de changement de dépendances dans cette branche)                                                                       |

## 8. Limites connues

- **Pas de vérification en navigateur réel dans cet environnement** : aucun
  binaire Chrome/Chromium n'est disponible. La vérification s'appuie sur les
  tests de rendu jsdom (React Testing Library) et le build de production. Une
  passe manuelle sur un environnement de test est recommandée avant mise en
  production (voir §9).
- Les options de réponse **contenant du code ou des tableaux** ont été
  traduites mot à mot en conservant le code, les identifiants, les valeurs
  numériques et les blocs inchangés ; une relecture pédagogique par un formateur
  certifié reste souhaitable.
- La traduction anglaise a été produite à partir des textes français du dépôt,
  avec la terminologie du syllabus ISTQB CTFL v4.0 (glossaire officiel). Aucune
  version anglaise officielle équivalente des séries n'a pu être vérifiée comme
  disponible et redistribuable ; **les droits de redistribution des énoncés
  traduits doivent être confirmés** avant publication commerciale.
- Points de vigilance sur le texte source, **non corrigés** (à arbitrer par
  l'auteur du contenu) :
  - Ensemble D : une question comporte 5 options alors que les autres en ont 4 ;
    la traduction conserve ce nombre, sans le corriger.
  - Certaines explications françaises mentionnent la lettre de l'option
    (« la réponse B… ») ; le libellé des lettres est conservé tel quel, l'ordre
    des options n'étant pas modifié.
  - Les séries A et B n'ont pas de justification par option en français : le
    champ `option_rationales_en` est donc absent pour elles (comportement
    attendu, pas une traduction manquante).

## 9. Mise en production

1. Fusionner la branche `feat/bilingual-content` (l'interface et les données
   embarquées deviennent bilingues ; les tentatives existantes sont intactes).
2. Définir les variables Firestore et lancer la simulation :
   ```bash
   FIREBASE_PROJECT_ID=... node scripts/migrate-bilingual-content.mjs --verbose
   ```
   Vérifier la liste des documents à mettre à jour et la couverture à 100 %.
3. Sauvegarder puis appliquer :
   ```bash
   FIREBASE_PROJECT_ID=... node scripts/migrate-bilingual-content.mjs \
     --apply --backup backup-bilingue.json
   ```
4. Contrôler en production : ouvrir une série, basculer en English pendant une
   tentative (réponses et chrono préservés), terminer, puis vérifier les pages
   Résultats et Correction en anglais.
5. En cas de problème : `node scripts/migrate-bilingual-content.mjs --rollback
backup-bilingue.json`, puis redéployer la révision précédente.

Aucune migration SQL n'est nécessaire : le projet persiste via l'adaptateur
Firestore (`src/integrations/supabase/mock-client.ts`), pas via Postgres.
