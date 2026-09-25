# Avant-Garde Atlas 1890—1940

An interactive editorial atlas exploring the artistic, architectural, graphic and design movements that shaped the European avant-garde between 1890 and 1940.

## Live site

The current GitHub Pages deployment is available at:

https://bergtripper.github.io/avantgardeatlas/

## Features

- movement timeline and detailed movement monographs
- influence and relationship network
- archival objects and key works
- people and connection stories
- geographic map based on real coordinates and Natural Earth data
- light and dark themes
- optional architectural grid
- responsive section navigation
- deep-link URLs for sections and individual movements
- keyboard accessibility and reduced-motion support
- automated content-integrity validation

## Development

### Requirements

- Node.js 22 or newer
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### TypeScript check

```bash
npm run lint
```

### Validate atlas data

```bash
npm run data:validate
```

### Production build

```bash
npm run build
```

The production build also creates `dist/404.html` so direct SPA deep links work on GitHub Pages.

## Project structure

- `src/components/` — interface and editorial components
- `src/data/` — movements, people, objects, places, stories and relationships
- `src/types/` — shared atlas data types
- `src/routing.ts` — lightweight History API routing
- `scripts/validate-data.ts` — dataset integrity checks
- `.github/workflows/` — CI and GitHub Pages deployment

## Deployment

Pushes to `main` are built and deployed automatically with GitHub Actions.

GitHub Pages currently uses the repository base path `/avantgardeatlas/`. The routing layer is designed so the project can later move to a custom domain without changing the content model.

## Data integrity

Every CI run checks:

1. TypeScript
2. atlas data integrity
3. production build

Broken IDs, invalid cross-references and other structural dataset errors therefore block merging before they reach production.
