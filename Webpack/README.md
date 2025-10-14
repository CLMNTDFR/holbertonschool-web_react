# Webpack — Configuration pour projet React

Ce dossier contient la configuration Webpack utilisée pour les exercices Web React (Holberton). L'objectif est d'avoir une configuration simple et modulaire pour le développement (HMR) et la production (bundling optimisé).

## Prérequis
- Node.js (>= 14)
- npm ou yarn

## Installation
```bash
npm install
# ou
yarn
```

## Scripts utiles (exemples dans package.json)
```json
{
    "scripts": {
        "start": "webpack serve --config webpack.dev.js --mode development",
        "build": "webpack --config webpack.prod.js --mode production",
        "dev": "webpack --config webpack.dev.js --mode development"
    }
}
```

## Structure recommandée
- src/            — code source (React components, index.js)
- public/         — index.html et assets statiques
- dist/           — build de production
- webpack.common.js
- webpack.dev.js
- webpack.prod.js
- .babelrc
- package.json

## Points clefs de la configuration
- Entrée (entry) : `src/index.js`
- Sortie (output) : `dist/`
- Loaders :
    - `babel-loader` pour JSX/ESNext
    - `css-loader` + `style-loader` ou `MiniCssExtractPlugin` pour la prod
    - gestion des images / fontes via asset modules
- Plugins :
    - `HtmlWebpackPlugin` pour générer `index.html`
    - `CleanWebpackPlugin` pour nettoyer `dist`
    - `MiniCssExtractPlugin` pour extraire les CSS en production
    - `DefinePlugin` pour variables d'environnement
- DevServer :
    - HMR (hot module replacement)
    - historyApiFallback pour les SPA

## Usage rapide
- Développement (serveur avec rechargement) :
    ```bash
    npm run start
    ```
- Build pour production :
    ```bash
    npm run build
    ```

## Bonnes pratiques
- Séparer les configs dev/prod en fichiers distincts et extraire les options communes.
- Utiliser Babel pour la compatibilité navigateur.
- Versionner la configuration et documenter les scripts dans package.json.
