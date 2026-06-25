# Wisdom for the Rest of Us

A calm, credible, highly readable static website for serious inquiry into universal wisdom without conversion, jargon, or borrowed identity.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React Server Components
- Static export (`output: 'export'`)

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

The site is configured for full static export. Upload the contents of the `out/` directory to any static hosting provider.

### Cloudflare Pages

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Build output directory: `out`
4. Framework preset: Next.js (static)

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

To edit copy, modify the relevant content file. No JSX rewriting needed.

## Accessibility

- WCAG 2.2 AA compliance
- Skip-to-content link
- Keyboard-accessible navigation
- Semantic HTML landmarks
- Visible focus states
- Reduced motion support

## Analytics

No analytics are installed. To add privacy-respecting analytics later (e.g., Plausible, Umami), add the tracking script to `src/app/layout.tsx`.

## Notes

- The book cover image at `public/images/book-cover.svg` is a placeholder. Replace with the actual supplied book cover (WebP preferred).
- The OG image at `public/images/og-image.svg` is a placeholder. Replace with a proper 1200x630 image.
- The `apple-touch-icon.svg` should be replaced with a 180x180 PNG.
