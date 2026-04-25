# Mike Downs — Portfolio

A personal portfolio site showcasing projects I've built during my time at BYU-I and beyond. The goal was a clean, simple design that's easy to keep up to date.

* [Live Site](https://mdowns1999.github.io/downs-portfolio/)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| UI library | Material UI (MUI) v9 |
| Routing | React Router v7 |
| Animations | Framer Motion |
| Hosting | GitHub Pages |

## Features

- **Dark mode** — toggle between light and dark themes via the sun/moon icon in the header. Initial mode is based on system preference and persists across sessions via `localStorage`.
- **Responsive layout** — desktop nav collapses to a slide-out drawer on mobile.
- **Project data** — all project content lives in a single JSON file (`src/assets/project-data/projects.json`), making updates straightforward.

## Development

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # ESLint (zero warnings)
npm run deploy    # Build + publish to GitHub Pages
```

## Useful Links

* [MUI Documentation](https://mui.com/)
* [Framer Motion](https://www.framer.com/motion/)
