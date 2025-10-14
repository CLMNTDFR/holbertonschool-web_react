# Task 1 - Composants React avec Create React App

Introduction aux composants React et à leur composition en utilisant Create React App.

## Objectifs

- Utiliser Create React App (CRA) pour initialiser le projet
- Créer plusieurs composants (App, Notifications)
- Comprendre l'importation et l'utilisation d'assets
- Découvrir la structure de fichiers recommandée par CRA

## Installation

```bash
npm install
```

## Scripts disponibles

```bash
npm start        # Démarre le serveur de développement (http://localhost:3000)
npm run build    # Crée un build de production optimisé
npm test         # Lance les tests en mode watch
npm run eject    # ⚠️ Opération irréversible - Expose la configuration complète
```

## Structure du projet

```
dashboard/
├── public/              # Fichiers statiques servis directement
│   ├── index.html      # Template HTML principal
│   ├── favicon.ico     # Icône du site
│   └── manifest.json   # Manifest PWA
├── src/
│   ├── App.js          # Composant principal de l'application
│   ├── App.css         # Styles du composant App
│   ├── Notifications.js # Composant de notifications
│   ├── Notifications.css
│   ├── index.js        # Point d'entrée React
│   └── utils.js        # Fonctions utilitaires
└── package.json
```

## Composants créés

### App.js
Composant racine de l'application affichant le logo et les informations principales.

### Notifications.js
Composant affichant une liste de notifications avec bouton de fermeture.

## Différences avec Task 0

- Utilise Create React App au lieu de Vite
- Structure de dossiers différente (public/ vs root)
- Configuration cachée (peut être exposée avec `eject`)
- Temps de démarrage plus lent mais configuration zéro

## Assets utilisés

- `holberton_logo.jpg` : Logo de l'école Holberton
- `favicon.ico` : Icône du navigateur
- `logo.svg` : Logo React par défaut

## En savoir plus

Ce projet a été créé avec [Create React App](https://github.com/facebook/create-react-app).

Consultez la [documentation Create React App](https://facebook.github.io/create-react-app/docs/getting-started) pour plus d'informations.

Pour apprendre React, consultez la [documentation React](https://reactjs.org/).
