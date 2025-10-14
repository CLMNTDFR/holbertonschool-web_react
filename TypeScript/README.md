# Projet TypeScript

## Prérequis
- Node.js >= 16 (ou LTS recommandé)
- npm (ou yarn / pnpm)

## Installation
1. Copier le dépôt ou placer ce dossier localement.
2. Installer les dépendances :
```bash
npm install
```

## Scripts utiles (exemples)
Ajoutez ces scripts dans `package.json` si nécessaire :
```json
{
    "scripts": {
        "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
        "build": "tsc -p tsconfig.json",
        "start": "node dist/index.js",
        "test": "jest",
        "lint": "eslint 'src/**/*.{ts,tsx}'",
        "format": "prettier --write 'src/**/*.{ts,tsx,md,json}'",
        "type-check": "tsc --noEmit"
    }
}
```

## Développement
Démarrer en mode développement (rechargement automatique) :
```bash
npm run dev
```

Compiler pour production :
```bash
npm run build
npm run start
```

Vérifier les types :
```bash
npm run type-check
```

Linter et formater :
```bash
npm run lint
npm run format
```

## Tests
Exécuter les tests unitaires (si présents) :
```bash
npm test
```

## Structure recommandée
- src/ — code source TypeScript
- dist/ — build compilé
- tests/ — tests unitaires
- tsconfig.json — configuration TypeScript
- package.json