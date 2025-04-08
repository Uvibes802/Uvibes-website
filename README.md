# 🧭 Convention de nommage et d'architecture du projet

## 🎨 Nommage des classes CSS

- ✔️ `top-section` → **Bloc**
- ✔️ `--text-font` → **Variable CSS**

> 📌 Utiliser le kebab-case pour les classes CSS et les variables personnalisées.

---

## 📄 Nommage des fichiers

| Type de fichier      | Exemple               | Convention    |
|----------------------|------------------------|----------------|
| Composants React     | `Button.tsx`           | PascalCase     |
| Hooks personnalisés  | `useFetch.ts`          | camelCase      |
| Services             | `userService.ts`       | camelCase      |
| Types TypeScript     | `User.ts`              | PascalCase     |
| Assets `/public`     | `logo-dark.svg`, `background-home.jpg` | kebab-case  |

---

## 📘 Règles TypeScript

- ✔️ Tous les types sont centralisés dans le dossier `/types`
  - Ex. : `User.ts`, `Product.ts`, etc.
- ❌ **Interdiction d’utiliser `any`**
  - 👉 Favoriser un typage strict et explicite

---

## 📁 Structure des dossiers

### `/services` — Logique métier & appels API

Ce dossier contient toute la **logique métier réutilisable** qui n'est pas directement liée au cycle de vie de React.

#### ✅ Utilisation typique :
- Appels `fetch` vers des APIs internes ou externes
- Fonctions de transformation ou de validation de données
- Logique réutilisable dans plusieurs composants ou hooks

---

### `/hooks` — Hooks personnalisés React

Ce dossier regroupe les **custom hooks** créés pour factoriser la logique liée à React (effets, états, contexte, etc.).

#### ✅ Utilisation typique :
- Gestion d’état local (`useState`, `useReducer`)
- Comportements complexes (scroll, media query, formulaires, etc.)
- Abstractions pour logique répétitive

---

_Nino — Convention mise à jour le 08/04/2025_
