# CTFL Exam Simulator

Une plateforme web moderne et performante conçue pour la préparation et l'entraînement à l'examen **ISTQB Certified Tester Foundation Level (CTFL) v4.0**.

Ce projet est basé sur **TanStack Start** (React 19 + TanStack Router) et utilise **Supabase** comme infrastructure backend.

---

## 🚀 Fonctionnalités principales

- **Entraînement en conditions réelles** : Examens blancs chronométrés avec minuteur persistant côté serveur.
- **Correction et explications sécurisées** : Les explications et bonnes réponses ne sont divulguées qu'après la soumission définitive de la tentative d'examen.
- **Analyse de progression** : Visualisation détaillée des résultats par chapitre ISTQB et par niveau cognitif (K-Level : K1, K2, K3).
- **Module Administration complet** :
  - Création et édition visuelle de questions, d'options et de justifications associées.
  - Outil d'import et d'extraction automatique de questions à partir de documents PDF (questions et corrigés séparés).
  - Suivi en temps réel des résultats des étudiants.
  - Journal d'audit détaillé pour la traçabilité des modifications.

---

## 🛠️ Stack Technique

- **Framework principal** : [TanStack Start](https://tanstack.com/start) (combinaison de TanStack Router, Vite et Nitro pour le SSR).
- **Bibliothèque UI** : React 19 & Tailwind CSS.
- **Base de données & Authentification** : [Supabase](https://supabase.com) (PostgreSQL avec sécurité RLS active sur toutes les tables).
- **Gestion des icônes** : Lucide React.
- **Internationalisation (i18n)** : Module léger franco-centré dans `src/lib/i18n.ts`.

---

## 📁 Structure du projet

```text
├── src/
│   ├── components/       # Composants UI partagés et formulaires d'administration
│   ├── hooks/            # Hooks personnalisés (ex: useAuth)
│   ├── integrations/     # Configurations de Supabase et de Lovable
│   ├── lib/              # Fonctions utilitaires, i18n, validation d'examens et API serveur
│   ├── routes/           # Routing basé sur les fichiers (TanStack Router)
│   ├── server.ts         # Point d'entrée du serveur de rendu SSR
│   ├── start.ts          # Point d'entrée du client de l'application
│   └── styles.css        # Styles Tailwind globaux
├── public/               # Ressources statiques
├── eslint.config.js      # Configuration de l'analyse statique ESLint
├── vite.config.ts        # Configuration du build Vite
└── tsconfig.json         # Configuration TypeScript
```

---

## 🔧 Démarrage et Installation

### 1. Prérequis

Assurez-vous d'avoir installé :

- [Node.js](https://nodejs.org/) (version 18+)
- [Python 3](https://www.python.org/) (pour exécuter les scripts de tests fonctionnels)

### 2. Installation des dépendances

Installez les modules Node du projet :

```bash
npm install
```

### 3. Variables d'environnement

Créez un fichier `.env` à la racine du projet (s'il n'existe pas déjà) en configurant vos clés d'accès Supabase :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anonyme
```

### 4. Lancer le serveur de développement

Démarrez le serveur local (accessible par défaut sur `http://localhost:8080`) :

```bash
npm run dev
```

---

## 🧪 Tests et Validation

### Analyse statique et Qualité du code

Pour analyser le code avec ESLint et corriger les avertissements potentiels :

```bash
npm run lint
```

Pour formater l'intégralité du code source conformément aux règles Prettier :

```bash
npm run format
```

### Build de Production

Pour valider la compilation et générer les bundles optimisés (client et serveur Nitro) :

```bash
npm run build
```

### Tests Fonctionnels de bout en bout (E2E)

Des tests fonctionnels automatisés d'interface utilisateur (UI) sont configurés en utilisant **Playwright (Python)**.

Pour exécuter les tests fonctionnels E2E sur votre environnement de développement :

1. Installez Playwright et téléchargez le navigateur Chromium :
   ```bash
   playwright install chromium
   ```
2. Exécutez le script d'automatisation avec gestion du cycle de vie du serveur de développement :
   ```bash
   python "C:\Users\wkhal\.gemini\config\skills\webapp-testing\scripts\with_server.py" --server "npm run dev" --port 8080 -- python "C:\Users\wkhal\.gemini\antigravity\brain\d672e78f-70b2-4043-85ae-3391c09fdecc\scratch\e2e_test.py"
   ```
   _(Ce script lancera automatiquement le serveur de développement, attendra sa disponibilité sur le port `8080`, exécutera les assertions fonctionnelles, prendra une capture d'écran de l'authentification et arrêtera proprement le serveur à la fin)._
