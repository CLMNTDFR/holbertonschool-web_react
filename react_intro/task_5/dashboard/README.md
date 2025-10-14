# Task 5 - Organisation avancée du projet

Architecture par fonctionnalités avec une structure de dossiers optimale.

## Objectifs

- Organiser le code par fonctionnalités (feature-based)
- Adopter une architecture scalable
- Séparer les responsabilités de manière claire
- Préparer le projet pour une croissance future

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
│   ├── main.jsx                 # Point d'entrée de l'application
│   ├── App/                     # Composant App et ses ressources
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── App.spec.js
│   ├── Notifications/           # Module Notifications
│   │   ├── Notifications.jsx
│   │   ├── Notifications.css
│   │   └── Notifications.spec.js
│   ├── utils/                   # Utilitaires partagés
│   │   ├── utils.js
│   │   └── utils.spec.js
│   └── assets/                  # Ressources statiques globales
│       ├── holberton-logo.jpg
│       └── close-button.png
├── public/
│   └── favicon.ico
├── vite.config.js
└── package.json
```

## Architecture adoptée

### Organisation par fonctionnalités
Chaque fonctionnalité est regroupée dans son propre dossier avec :
- Le composant principal
- Les styles associés
- Les tests
- Les sous-composants si nécessaire

### Avantages de cette approche
- **Maintenabilité** : Code facile à trouver et modifier
- **Scalabilité** : Ajout de nouvelles fonctionnalités simplifié
- **Réutilisabilité** : Composants auto-contenus
- **Collaboration** : Équipes peuvent travailler sur différentes features

### Modules du projet

#### App/
Composant racine de l'application contenant la structure principale et le layout.

#### Notifications/
Module complet pour la gestion des notifications avec son propre état et logique.

#### utils/
Fonctions utilitaires partagées à travers l'application.

## Bonnes pratiques appliquées

- Séparation claire des préoccupations
- Co-localisation des fichiers liés
- Imports relatifs simplifiés
- Tests à côté du code qu'ils testent

## Évolution par rapport aux tâches précédentes

- **Task 0-2** : Structure plate avec tous les fichiers au même niveau
- **Task 3-4** : Introduction des tests
- **Task 5** : Organisation modulaire et scalable

## Prochaines étapes possibles

- Ajouter des composants UI réutilisables dans un dossier `components/`
- Créer un dossier `hooks/` pour les hooks personnalisés
- Implémenter un système de routing avec React Router
- Ajouter une gestion d'état globale (Context API ou Redux)
