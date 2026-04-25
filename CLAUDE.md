# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build to /dist
npm run preview   # Preview production build locally
npm run lint      # ESLint (zero warnings allowed)
npm run deploy    # Build + publish to GitHub Pages via gh-pages
```

## Architecture

This is a purely client-side React 19 SPA, deployed to GitHub Pages at `/downs-portfolio/`. No backend, no API calls at runtime.

**Routing** (`src/App.jsx`): React Router v7 with `basename: "/downs-portfolio"`. Four routes under a shared `RootLayout`: `/` (Home), `/about`, `/projects`, `/projects/:id`.

**Data flow**: All project data lives in `src/assets/project-data/projects.json`. Components import it directly — there is no state management layer or data fetching. The `id` field in the JSON is used as the URL param for project detail pages.

**Image mapping**: `src/helper/getImage.js` maps project names (strings matching `projects.json` `name` fields) to Vite-imported image assets. When adding a new project, both `projects.json` and `getImage.js` must be updated together.

**Styling**: MUI (`@mui/material`) is the primary styling system — use the `sx` prop for component-level styles. Global base styles (layout container, resets) are in `src/index.css`. There are no CSS Modules.

**Theme**: `src/theme.js` defines the MUI theme (palette, typography, shape, component overrides) via `createAppTheme(mode)`. `src/context/ThemeContext.jsx` wraps the app in `ThemeProvider`, exposes `useThemeMode()` for `{ mode, toggleMode }`, and persists the selected mode to `localStorage`. The Header renders the dark/light toggle button.

**Layout**: `src/components/Layout/Root.jsx` wraps every page with `<Header>` and `<Footer>`. Header contains both `NavDesktop` (hidden on mobile) and `NavMobile` (MUI Drawer-based, hidden on desktop), plus the theme toggle. Nav routes are defined inline in each Nav component.

**Animations**: Framer Motion is used for nav item entrance animations in `NavDesktop`. ESLint is configured to allow Framer Motion props (`initial`, `animate`, `exit`, `transition`, `whileHover`, `whileTap`, `variants`) without flagging them as unknown JSX properties.

**UI primitives** (`src/components/UI/`):
- `Heading` — MUI `Typography` wrapper; props: `level` (h1–h6), `size` (MUI variant override), `bold`, `centered`, `sx`
- `Paragraph` — MUI `Typography` wrapper; props: `size` (xs/sm/md/lg), `centered`, `sx`
- `LayoutBand` — MUI `Container` with named spacing presets (`none/xxs/xs/sm/md/lg/xl`) via `spacing` and `spacingDirection` props
- `Separator` — vertical spacer with named size presets; optional `showLine` renders a full-width MUI `Divider`
- `SkillChip` — MUI `Chip` styled with secondary palette colors for skill tags
- `Image` — wrapper for consistent image rendering

## Deployment

The site is hosted on GitHub Pages. `vite.config.js` sets `base: '/downs-portfolio/'` and `package.json` sets `homepage` to match. Running `npm run deploy` builds and pushes the `dist/` folder to the `gh-pages` branch.
