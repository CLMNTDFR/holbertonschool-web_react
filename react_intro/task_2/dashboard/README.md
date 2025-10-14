# Task 2 - Props et composition de composants

Approfondissement des concepts de props et réutilisation de composants avec Vite.

## Objectifs

- Comprendre et utiliser les props React
- Refactoriser les composants pour plus de réutilisabilité
- Implémenter des fonctions utilitaires
- Maîtriser le passage de données entre composants

## Installation

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement (http://localhost:5173)
npm run build    # Build de production
npm test         # Lance les tests
npm run lint     # Vérification ESLint
```

## Structure du projet

```
dashboard/
├── src/
│   ├── App.jsx              # Composant principal
│   ├── Notifications.jsx    # Composant de notifications amélioré
│   ├── utils.js            # Fonctions utilitaires réutilisables
│   ├── *.css               # Styles des composants
│   └── assets/             # Ressources statiques
├── vite.config.js
└── package.json
```

## Nouveautés

### Utilisation des Props
Les composants acceptent maintenant des props pour une meilleure réutilisabilité :
- Configuration dynamique des notifications
- Personnalisation des messages
- Flexibilité dans l'affichage

### Fonctions utilitaires (utils.js)
- `getCurrentYear()` : Retourne l'année courante
- `getFooterCopy(isIndex)` : Génère le texte du footer selon le contexte
- `getLatestNotification()` : Retourne le HTML de la dernière notification

## Améliorations par rapport à Task 1

- Code plus modulaire et maintenable
- Composants réutilisables avec props
- Séparation des responsabilités
- Retour à Vite pour de meilleures performances de développement
