# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React 19, showcasing projects and skills. The site is statically hosted on GitHub Pages and uses JSON-driven content for easy updates.

## Development Commands

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint`
- **Deploy to GitHub Pages**: `npm run deploy`

## Architecture

### Routing Structure

The app uses React Router v7 with a basename of `/downs-portfolio` for GitHub Pages hosting. Routes are defined in `src/App.jsx`:

- `/` - Home page with skills overview
- `/about` - About page
- `/projects` - Project listing
- `/projects/:id` - Individual project details

All routes use `RootLayout` as a wrapper, which provides the common Header, Footer, and GitHub link button.

### Component Organization

Components are organized by feature domain:

- `src/components/Layout/` - Root layout, header, footer, navigation (mobile/desktop)
- `src/components/Home/` - Homepage, skills chart, skill items
- `src/components/Projects/` - Project list, project detail pages, skills list
- `src/components/About/` - About page
- `src/components/UI/` - Reusable UI components (Button, Image, Paragraph, RadioButton)
- `src/components/UserFeedback/` - Error page

### Styling Approach

- CSS Modules for component-scoped styles (e.g., `Button.module.css`)
- Global styles in `src/index.css`
- Uses Framer Motion for animations - ESLint is configured to allow Framer Motion props (`initial`, `animate`, `exit`, `transition`, `whileHover`, `whileTap`, `variants`)

### Data Management

Project data is stored in `src/assets/project-data/projects.json`. Each project object has:
- `id` - Unique identifier (used in routing)
- `name` - Project title
- `description` - Full project description
- `skills` - Array of technologies used
- `links` - Array of objects with `name` and `link` (GitHub repo, live demo, etc.)
- `type` - Category: "Web", "Design", or "Other"

To add a new project, append a new object to this JSON file with a unique ID.

### Key Libraries

- **react-router-dom**: Client-side routing
- **framer-motion**: Animations and transitions
- **hamburger-react**: Mobile menu hamburger button
- **react-intersection-observer**: Viewport intersection detection for animations
- **@ramonak/react-progress-bar**: Skill progress bars

## Build Configuration

- Vite build tool with `@vitejs/plugin-react`
- Base path set to `/downs-portfolio/` in `vite.config.js` for GitHub Pages
- ESLint configured with React 19.2 support in `eslint.config.js`

## Deployment

The site is deployed automatically via `gh-pages` npm package. The `predeploy` script runs a production build, then `deploy` pushes the `dist` folder to the `gh-pages` branch.
