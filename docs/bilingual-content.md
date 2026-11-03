# Contenu bilingue des examens (FR / EN)

Les six séries embarquées comprennent 240 questions, 965 options, 240 explications
et 645 justifications par option traduites. Les traductions sont versionnées dans
`src/integrations/supabase/translations/`, sans appel LLM pendant un examen.

## Modèle et affichage

Un examen conserve ses identifiants, tentatives et statistiques dans les deux langues.
Les traductions occupent `title_en`, `description_en`, `text_en`, `explanation_en`
et `option_rationales_en` sur les mêmes documents. Le sélecteur FR/EN pilote
l'interface, l'examen, les résultats et la correction. Le handler de correction
transmet explicitement l'explication et les justifications anglaises.

Les réponses, le marquage, les notes, la question courante et le temps restant ne
sont pas réinitialisés lors du changement de langue. Une traduction absente
entraîne un repli français signalé. Les langues déclarées sur une carte ne
remplacent pas la validation de chaque question d'un examen ajouté par un formateur.

## Préserver les modifications du formateur

`src/lib/bilingual-fields.ts` calcule les champs anglais manquants. Le même
calcul est utilisé par le cache, l'initialisation Firestore et la migration :

- aucun texte français, statut, point, identifiant ou corrigé n'est remplacé ;
- une traduction anglaise déjà renseignée est conservée ;
- une traduction du seed n'est ajoutée que si son texte français correspond
  encore au document courant ; sinon une traduction revue est nécessaire ;
- les justifications anglaises sont complétées par option sans remplacer celles
  déjà renseignées ;
- les enfants supprimés d'un examen existant ne sont pas recréés automatiquement.

Les nouveaux examens absents sont initialisés avec des documents complets. Les
examens existants reçoivent uniquement les champs anglais manquants, dans des
transactions qui relisent le document avant écriture. Aucun ancien examen n'est
supprimé dans cette initialisation. Les lectures concurrentes partagent la même
promesse d'initialisation.

## Vérification locale, sans connexion à Firestore

```bash
node scripts/migrate-bilingual-content.mjs --check
npm run test:i18n
VERCEL=1 npm run build
```

Sans projet configuré, `--check` valide seulement le payload embarqué ; ce n'est
pas une preuve que la production est migrée. Les tests couvrent notamment le
handler de correction, la conservation des modifications du formateur,
l'idempotence, les documents absents et le retour arrière limité à l'anglais.
La couverture de présence ne garantit pas l'exactitude pédagogique de chaque traduction.

## Migration distante : simulation obligatoire avant application

Le script utilise le SDK client Firestore et reste soumis aux règles d'accès.
Une clé API Firebase n'est pas une autorisation administrateur. Si l'accès est
refusé, interrompre l'opération et préparer un accès autorisé ; ne pas ouvrir les
règles de sécurité pour exécuter ce script.

Configurer explicitement ces trois variables dans l'environnement :

- `FIREBASE_PROJECT_ID` : projet cible ;
- `FIREBASE_DATABASE_ID` : identifiant exact de la base nommée utilisée par
  l'application (voir `firebaseConfig` dans `mock-client.ts`) ; pour une base
  par défaut, la valeur doit être explicitement `(default)` ;
- `FIREBASE_API_KEY` : clé de configuration Firebase de ce projet.

`FIREBASE_APP_ID` et `FIREBASE_AUTH_DOMAIN` restent facultatifs. Sans base ou clé
explicite, le script refuse de se connecter. Chaque exécution utilise une
instance Firebase dédiée à cette configuration.

```bash
# Les trois variables ci-dessus doivent déjà être configurées.
node scripts/migrate-bilingual-content.mjs --verbose
node scripts/migrate-bilingual-content.mjs --check

# Après revue de la simulation : le fichier de sauvegarde doit être nouveau.
node scripts/migrate-bilingual-content.mjs --apply --backup backup-bilingue-v2.json
```

Un document attendu manquant provoque un refus AVANT toute écriture. Le script
ne crée jamais de document contenant uniquement des traductions. Une source
française modifiée sans traduction anglaise revue est également signalée et
bloque la migration. Les documents sont recherchés par identifiant stable.

La sauvegarde est obligatoire pour `--apply`, comporte le projet et la base cible
et ne remplace jamais un fichier déjà présent. Chaque écriture est transactionnelle
et refuse un document modifié depuis le calcul du plan. La migration n'est pas
atomique sur l'ensemble des documents : en cas d'interruption, examiner l'état
et refaire une simulation avec une nouvelle sauvegarde avant de reprendre.
Les tentatives, réponses, événements et profils ne sont pas modifiés.

## Retour arrière

```bash
# Conserver les mêmes variables de projet, de base et de clé.
node scripts/migrate-bilingual-content.mjs --rollback backup-bilingue-v2.json
```

Seuls les champs anglais écrits par la migration sont restaurés ou supprimés.
Les modifications ultérieures des textes français, statuts ou paramètres sont
préservées. Une traduction anglaise modifiée après migration bloque le rollback
du document concerné. Un projet, une base ou un format de sauvegarde différent
entraîne un refus. Les anciennes sauvegardes de documents entiers ne sont pas
acceptées par ce retour arrière.

L'initialisation de l'application peut compléter à nouveau des traductions
supprimées par rollback. Pour un retour arrière durable, redéployer aussi la
révision précédente de l'application et arrêter les anciennes instances avant
restauration. Un rollback de données n'est pas une garantie contre des écritures
concurrentes d'autres applications.

## Vérification après mise en ligne et limites

Vérifier sur un environnement de test la bascule FR/EN pendant une tentative,
la reprise après actualisation, puis les résultats et la correction. Vérifier
aussi qu'un examen archivé et une question corrigée restent inchangés.

Les tests automatisés utilisent des doubles Firestore, pas une base de production.
Ils ne remplacent pas une passe dans un vrai navigateur ni la vérification des
règles d'accès sur l'environnement cible. Les séries A et B ne contiennent pas de
justifications par option en français ; leur absence anglaise est attendue.
Les options, bonnes réponses et formulations françaises existantes ne sont pas
corrigées dans cette intervention. Les droits de redistribution des contenus
sources et des traductions restent à confirmer.
