# Task 0 - Configuration initiale avec Vite

Premier exercice d'introduction à React utilisant Vite comme outil de build moderne et performant.

## Objectifs

- Configurer un projet React avec Vite
- Créer un composant App simple
- Comprendre la structure de base d'une application React

## Installation

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement (http://localhost:5173)
npm run build    # Crée un build de production
npm run preview  # Prévisualise le build de production
npm run lint     # Vérifie la qualité du code avec ESLint
npm test         # Lance les tests unitaires
```

## Structure du projet

```
dashboard/
├── src/
│   ├── App.jsx          # Composant principal de l'application
│   ├── App.css          # Styles du composant App
│   ├── main.jsx         # Point d'entrée React
│   └── assets/          # Ressources statiques (images, icônes)
├── index.html           # Template HTML principal
├── vite.config.js       # Configuration Vite
├── .babelrc            # Configuration Babel
└── package.json         # Dépendances et scripts npm
```

## Fonctionnalités

- Interface utilisateur basique avec le logo Holberton
- Styles CSS personnalisés
- Hot Module Replacement (HMR) pour le développement

## Notes techniques

- Vite offre un démarrage ultra-rapide grâce à l'utilisation d'ES modules natifs
- Configuration ESLint pour maintenir la qualité du code
- Tests configurés avec Vitest et React Testing Library