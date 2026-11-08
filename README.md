# homepage

This is my personal homepage. I'm Zhivche Gligorov, a fullstack engineer based in Skopje. I built it as a single-page site around an illustrated hero with interactive hotspots (about, work, links and more), a light/dark theme toggle and a live age pill.

## Tech stack

- [React 19](https://react.dev) with TypeScript
- [Vite](https://vite.dev) for dev server and bundling
- [TanStack Router](https://tanstack.com/router) for routing
- [goober](https://goober.rocks) for CSS-in-JS styling
- [Fontsource](https://fontsource.org) fonts: Epilogue and Plus Jakarta Sans
- ESLint (typescript-eslint, react, react-hooks) and Prettier

## Getting started

Requirements: Node.js 22 or newer and [pnpm](https://pnpm.io) 10.

```sh
pnpm install
pnpm dev
```

The dev server starts at http://localhost:5173.

## Scripts

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Start the Vite dev server                    |
| `pnpm build`        | Type-check, then create a production build   |
| `pnpm preview`      | Preview the production build locally         |
| `pnpm typecheck`    | Run the TypeScript compiler without emitting |
| `pnpm lint`         | Lint the project with ESLint                 |
| `pnpm lint:fix`     | Lint and auto-fix issues                     |
| `pnpm format`       | Format all files with Prettier               |
| `pnpm format:check` | Check formatting without writing             |

## Project structure

```
public/            Static assets (favicon, hero illustration)
src/
  components/      React components (Hero, Masthead, InfoCard, ...)
  lib/             Hooks and providers (theme, active hotspot)
  styles/          goober styles, design tokens and mixins
  content.ts       Profile info, social links and hotspot content
  router.tsx       Route definitions
  main.tsx         App entry point
```

## Editing content

All personal details, social links and hotspot entries live in [src/content.ts](src/content.ts). Update that file to change what the site shows. Design tokens (colors, spacing and so on) are in [src/styles/tokens.ts](src/styles/tokens.ts).

## Theming

The theme follows the system preference on first visit and is persisted in `localStorage`. A small inline script in [index.html](index.html) applies it before first paint to avoid a flash of the wrong theme.
