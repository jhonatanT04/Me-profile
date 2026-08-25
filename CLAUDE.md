# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check via project references (`tsc -b`) then production build (`vite build`)
- `npm run lint` — run Oxlint
- `npm run preview` — preview the production build locally

There is no test runner configured in this project.

## Architecture

This is a minimal Vite + React 19 + TypeScript single-page app scaffold (currently the unmodified `create-vite` react template) — not yet a real "profile" app.

- Entry point: `src/main.tsx` mounts `<App />` from `src/App.tsx` into `#root` in `index.html`, wrapped in `<StrictMode>`.
- `src/App.tsx` is the only component; all UI currently lives there. There is no routing or component library yet.
- Static assets referenced via `import` live in `src/assets/`; assets referenced by absolute URL (e.g. `/icons.svg#...`) live in `public/`.
- `vite.config.ts` wires two plugins: `@vitejs/plugin-react` and `@rolldown/plugin-babel` running the React Compiler babel preset (`reactCompilerPreset()`) — the React Compiler is active on this project, so avoid manual `useMemo`/`useCallback` optimizations that the compiler already handles.
- TypeScript is split via project references: `tsconfig.json` is the root pointing at `tsconfig.app.json` (app source, `src/`) and `tsconfig.node.json` (Vite config). Both have `noUnusedLocals`/`noUnusedParameters` enabled, so unused code will fail `tsc -b`.
- Oxlint config (`.oxlintrc.json`) enables the `react`, `typescript`, and `oxc` plugins with `react/rules-of-hooks` as an error. Type-aware lint rules are not currently enabled (would require `oxlint-tsgolint`).
