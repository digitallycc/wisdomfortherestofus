# Wisdom for the Rest of Us

A calm, credible, highly readable static website for serious inquiry into universal wisdom without conversion, jargon, or borrowed identity.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React Server Components
- Static export (`output: 'export'`)
- Cloudflare Pages Functions + D1 for anonymous reading metrics

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
```

Output is generated in `out/` as a fully static site.

## Preview Production Build

```bash
npx serve out
```

## Lint & Type Check

```bash
npm run lint
```

TypeScript is checked during build.

## Tests

```bash
npx playwright install
npx playwright test
```

## Deployment

### Static Export

The reading experience is a static export, but the anonymous event endpoint uses
Cloudflare Pages Functions and D1. Other static hosts can serve the pages, but the
reader metrics will require an equivalent serverless endpoint.

### Cloudflare Pages

1. Connect the GitHub repository.
2. Build command: `npm run build`.
3. Build output directory: `out`.
4. Framework preset: Next.js (static).
5. Keep the D1 binding named `DB`; its database ID is already recorded in
   `wrangler.jsonc`.

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

### Vercel

1. Import from GitHub
2. Framework: Next.js (auto-detected)
3. No special configuration needed — Vercel handles static export automatically

### Custom Domain (wisdomfortherestofus.com)

1. Add the custom domain in your hosting provider
2. Point DNS to the provider's nameservers
3. Enable HTTPS
4. Set canonical URL in `src/content/site.ts`

## Project Structure

```
src/
  app/              Next.js App Router pages
  components/       Reusable UI components
  content/          Structured copy and site data
public/             Static assets (images, favicon, robots, sitemap)
tests/              Playwright end-to-end tests
```

## Content Architecture

All website copy is stored in structured TypeScript data files under `src/content/`:

- `site.ts` — site-wide configuration and navigation
- `book.ts` — book metadata, contents, and questions
- `home.ts` — homepage section copy
- `readings.json` — the responsive opening and Chapter One text

To edit copy, modify the relevant content file. No JSX rewriting needed.

## Accessibility

- WCAG 2.2 AA compliance
- Skip-to-content link
- Keyboard-accessible navigation
- Semantic HTML landmarks
- Visible focus states
- Reduced motion support

## Reader Analytics

The site records a deliberately small set of anonymous events in Cloudflare D1:

- opening and Chapter One started
- opening and Chapter One meaningfully read
- opening and Chapter One completed
- clicks to the complete edition on Internet Archive

The anonymous reader ID is generated in the browser and stored in local storage.
No name, email address, cookie, fingerprint, or full IP address is stored. Read
events are de-duplicated per browser; archive clicks are counted individually.

Apply the D1 migration when setting up a fresh environment:

```bash
npx wrangler d1 migrations apply wisdom-site-analytics --remote
```

Retrieve the current totals and distinct-reader counts:

```bash
npm run metrics
```

For a production-like local preview with the Pages Function and local D1:

```bash
npm run build
npx wrangler d1 migrations apply wisdom-site-analytics --local
npx wrangler pages dev out
```

## Notes

- The full book remains canonically hosted by Internet Archive.
- `hero-atmosphere.webp`, `book-cover.webp`, and `og-image.jpg` are production assets.
