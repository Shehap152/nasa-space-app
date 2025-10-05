# New Pages and Components

## EmptyState component (`components/empty-state.tsx`)
- Purpose: Unified, styled message block for empty results and lightweight alerts.
- Props: `title`, `message?`, `icon? = 'alert' | 'search'`, `className?`.
- Usage: Import and render where nothing to display (e.g., empty lists, search misses).

## Global error handling
- `app/error.tsx`: Client error boundary with retry button; themed to match UI.
- `app/not-found.tsx`: 404 page with link back to Publications.

## About page
- `app/about/page.tsx`: Explains product purpose and stack in a branded container.

## SEO additions
- `app/robots.txt`: Basic allow-all robots policy with sitemap pointer.
- `app/sitemap.ts`: Generates a simple static sitemap using `NEXT_PUBLIC_SITE_URL`.

## Notes
- All additions follow the existing gradient background and header pattern.
- No breaking changes to existing routes or APIs.
