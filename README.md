# Le Cercle — Club de Sport Privé

Site vitrine d'un club de coaching sportif premium à Toulouse.
Esthétique : éditorial sombre, cinématographique, accent or — « Equinox rencontre l'hôtellerie de luxe parisienne ».

## Stack

- **React 18** + **Vite 5**
- **React Router v6** — routing client, 6 pages
- **Tailwind CSS 3** — thème étendu avec la palette de marque
- **Framer Motion 11** — transitions de page, reveals, marquee, curseur
- Google Fonts : Cormorant Garamond · DM Sans · Montserrat
- Aucune librairie de composants UI — tout est custom
- JSX (pas de TypeScript)

## Installation

```bash
npm install
npm run dev
```

Le site démarre sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

Le build est généré dans `dist/`.

## Structure

```
src/
  components/      Navbar, Footer, CustomCursor, Button, Marquee,
                   Reveal, StatCounter, PageHero, MembershipModal, Icons…
  context/         ModalContext — pilote la modale d'adhésion globalement
  data/            site.js — URLs d'images + données partagées
  hooks/           useCountUp — compteurs animés au scroll
  pages/           Home, Concept, Services, Offres, Blog, Contact, NotFound
  App.jsx          Routing + AnimatePresence (transitions de page)
  index.css        Variables CSS, styles de base, utilitaires
```

## Pages

| Route       | Page        |
|-------------|-------------|
| `/`         | Accueil     |
| `/concept`  | Concept     |
| `/services` | Services    |
| `/offres`   | Nos Offres  |
| `/blog`     | Blog        |
| `/contact`  | Contact     |
| `*`         | 404         |

## Notes

- Les formulaires (contact + modale d'adhésion) n'ont pas de backend :
  ils affichent un état de succès à la soumission.
- Le curseur personnalisé (cercle or) est actif uniquement sur desktop
  (pointeur fin). Il respecte `prefers-reduced-motion`.
- `public/_redirects` est inclus pour le routing SPA sur hébergement
  statique (Netlify). Pour Vercel, ajouter un `vercel.json` avec un
  rewrite vers `/index.html`.

© 2025 Le Cercle — Club de Sport Privé · Toulouse
