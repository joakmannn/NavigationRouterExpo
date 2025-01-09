# Kitty Navigation avec Expo Router

Une application mobile React Native construite avec Expo Router, intégrant l'authentification Supabase et une navigation par onglets.

## Aperçu de l'Application

<img src="assets/screenshots/Stack.png" width="600" alt="Stack de Navigation"/>

## Fonctionnalités

- 🔐 Authentification avec Supabase (Connexion, Inscription)
- 📱 Navigation par onglets avec Expo Router
- 🎨 Interface sombre avec accents roses
- 🛠 Stack technique moderne (Expo, React Native, TypeScript)

## Structure du Projet

```
app/
├── _layout.tsx          # Configuration des providers (Auth, Theme)
├── index.tsx           # Redirection vers les onglets
├── (auth)/            # Routes d'authentification
│   ├── _layout.tsx     # Layout auth sans header
│   ├── sign-in.tsx     # Page de connexion
│   └── sign-up.tsx     # Page d'inscription
└── (tabs)/            # Navigation principale
    ├── _layout.tsx     # Configuration des onglets
    ├── index.tsx       # Feed (Accueil)
    ├── messages.tsx    # Messages
    └── profile.tsx     # Profil et déconnexion
```

## Description des Fichiers

### Configuration Racine
- `_layout.tsx` : Configure ThemeProvider et AuthProvider pour toute l'application
- `index.tsx` : Gère la redirection vers les onglets après authentification

### Authentification (auth)
- `_layout.tsx` : Layout spécifique pour les écrans d'authentification
- `sign-in.tsx` : Formulaire de connexion avec email/password
- `sign-up.tsx` : Formulaire d'inscription avec validation

### Navigation Principale (tabs)
- `_layout.tsx` : Configuration des onglets avec style personnalisé
- `index.tsx` : Page d'accueil avec logo Kitty
- `messages.tsx` : Interface des messages (à développer)
- `profile.tsx` : Profil utilisateur avec déconnexion

### Configuration Projet
- `babel.config.js` : Configuration Babel avec plugins Expo
- `expo-env.d.ts` : Types TypeScript pour Expo
- `package.json` : Dépendances et scripts

## Installation

```bash
# Cloner le projet
git clone https://github.com/joakmannn/NavigationRouterExpo.git

# Installer les dépendances
npm install

# Lancer le projet
npx expo start
```

## Configuration

Créer un fichier `.env` à la racine :
```env
EXPO_PUBLIC_SUPABASE_URL=votre-url-supabase
EXPO_PUBLIC_SUPABASE_ANON_KEY=votre-clé-anonyme
```

## Technologies Utilisées

- **Expo SDK** : Framework React Native
- **Expo Router** : Navigation type app native
- **Supabase** : Backend et authentification
- **React Native Elements** : Composants UI
- **TypeScript** : Support du typage

## Développé par

Joakmann - [@joakmannn](https://github.com/joakmannn)