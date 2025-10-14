# Task 3 - Tests unitaires avec Jest

Introduction aux tests unitaires dans React avec Jest et React Testing Library.

## Objectifs

- Configurer Jest et React Testing Library
- Écrire des tests unitaires pour les composants
- Tester les fonctions utilitaires
- Comprendre les bonnes pratiques de testing

## Installation

```bash
npm install
```

## Scripts disponibles

```bash
npm start                   # Démarre le serveur de développement
npm test                    # Lance les tests en mode watch
npm test -- --coverage      # Lance les tests avec rapport de couverture
npm run build               # Build de production
```

## Structure du projet

```
dashboard/
├── src/
│   ├── App.js
│   ├── App.test.js          # Tests du composant App
│   ├── Notifications.js
│   ├── Notifications.test.js # Tests des notifications
│   ├── utils.js
│   ├── utils.test.js        # Tests des fonctions utilitaires
│   └── setupTests.js        # Configuration globale des tests
└── package.json
```

## Tests implémentés

### App.test.js
- Vérification du rendu sans crash
- Présence des éléments clés (logo, headers, footer)
- Validation de la structure DOM

### Notifications.test.js
- Rendu du composant
- Affichage de la liste de notifications
- Comportement du bouton de fermeture
- Gestion des événements

### utils.test.js
- `getFullYear()` retourne l'année correcte
- `getFooterCopy()` retourne le bon texte selon le paramètre
- `getLatestNotification()` retourne le HTML attendu

## Configuration des tests

### setupTests.js
Fichier de configuration exécuté avant chaque test :
- Configuration de l'environnement de test
- Import des matchers personnalisés
- Setup global pour React Testing Library

## Bonnes pratiques appliquées

- Tests isolés et indépendants
- Utilisation de `data-testid` pour sélectionner les éléments
- Tests de comportement plutôt que d'implémentation
- Couverture de code significative

## Commandes utiles

```bash
# Tests en mode watch
npm test

# Tests avec couverture
npm test -- --coverage

# Tests d'un fichier spécifique
npm test App.test.js

# Tests en mode CI (sans watch)
npm test -- --watchAll=false
```
