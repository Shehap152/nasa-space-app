# NASA Space Biology App

A Next.js 14 App Router project with Tailwind v4 and a component library. Integrated with NASA APIs, SpaceX, and Google Gemini.

## Quickstart

```bash
pnpm i
pnpm dev
```

## Required environment

Copy `.env.example` to `.env.local` and fill in values.

- `GEMINI_API_KEY`
- `NASA_APOD_API_KEY`
- Optional: `NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED`

## Scripts

- `pnpm dev` - start dev server
- `pnpm build` - production build
- `pnpm start` - start production server
- `pnpm typecheck` - TypeScript checks
- `pnpm lint` / `pnpm lint:fix` - ESLint
- `pnpm format` / `pnpm format:fix` - Prettier
- `pnpm test` - Vitest (headless)
- `pnpm test:watch` - Vitest watch

## Tech

- Next.js 14 (App Router)
- TypeScript, ESLint, Prettier
- Tailwind CSS v4
- React Testing Library + Vitest

## Project layout

- `app/` - routes, layouts, loading states
- `components/` - shared UI and feature components
- `hooks/` - reusable hooks
- `lib/` - API clients, env validation, utilities
- `public/` - static assets

## Contributing

- Ensure `pnpm typecheck && pnpm lint && pnpm test` pass before PRs.
- Commit using conventional messages if possible.

## Deployment

- Recommended: Vercel. Ensure environment variables are configured in the project settings.
