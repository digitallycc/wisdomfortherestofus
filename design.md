Build a production-ready static Next.js website for:

Domain: https://wisdomfortherestofus.com

Project name: Wisdom for the Rest of Us

The complete approved homepage copy will be supplied separately in context. Use that copy faithfully. Do not rewrite, shorten, invent, or replace substantive text without explicit approval.

## Objective

Create a calm, credible, highly readable website that serves as:

1. The permanent home of the platform “Wisdom for the Rest of Us”
2. The landing page for the first featured book, “Emptiness for the Rest of Us”
3. A destination for people arriving from reviewer emails, Reddit, LinkedIn, podcasts, WhatsApp, community discussions, and search
4. A clear route to read the complete book free on Internet Archive
5. A future-ready foundation for essays, reviews, interviews, and additional books without making the current site look artificially broad

This is not a commercial sales page, Buddhist organisation, conversion site, meditation app, or generic spirituality website.

The tone must be serious, humane, intellectually open, restrained, and contemporary.

## Technology

Use:

- Latest stable Next.js
- App Router
- TypeScript
- React Server Components by default
- Static export using `output: 'export'`
- Tailwind CSS
- No database
- No authentication
- No CMS in the first release
- No runtime API routes
- No server-only functionality
- No unnecessary client components
- No heavy animation library
- No component library unless genuinely necessary
- No tracking scripts in the initial build
- No cookie banner because no nonessential cookies should be used

The exported site must be deployable to any static host.

## Required routes

Create these routes:

- `/` — main landing page
- `/about` — concise platform and author explanation
- `/book/emptiness-for-the-rest-of-us` — dedicated book page
- `/essays` — future-ready essay index with an honest “Essays coming soon” state
- `/contact` — contact details and inquiry categories
- `/privacy` — simple privacy statement
- `/404` — custom not-found page

The homepage should feature the book prominently but keep “Wisdom for the Rest of Us” as the umbrella identity.

Do not create fake essays, fake testimonials, fake reviews, fake publication logos, fake readership numbers, or fake social proof.

## Core external destination

The primary “Read the book free” CTA must link to:

https://archive.org/details/emptiness-for-the-rest-of-us-pdf

Open external links in a new tab using appropriate security attributes.

## Content architecture

### Homepage

Build the homepage in this order:

1. Minimal header
2. Hero introducing “Wisdom for the Rest of Us”
3. Featured-book panel for “Emptiness for the Rest of Us”
4. Short explanation of what emptiness means
5. Why the platform begins with Buddhist emptiness
6. Wisdom without conversion
7. Who “the rest of us” are
8. The book’s two-part journey
9. Key questions explored
10. Author section
11. What the platform is and is not
12. Strong repeated read-free CTA
13. Table of contents
14. Reviewers, teachers, reading groups, and interviewers section
15. Continuing inquiries / future essays
16. Final reflective question
17. Footer

Do not display the full long-form copy as one uninterrupted wall of text.

Use clear section hierarchy, narrow reading widths, varied section treatments, short pull quotes, and progressive disclosure where useful.

Do not hide essential content in accordions. Accordions may only be used on mobile for supplementary detail such as the full contents or extended “what this platform is and is not” material.

### Book page

The dedicated book page should include:

- Book cover
- Title
- Subtitle
- Short positioning statement
- Read-free CTA
- No-payment/no-registration note
- Book overview
- Who it is for
- Two-part structure
- Full table of contents
- Author note
- Creative Commons information
- Internet Archive link
- Reviewer/interview invitation

### About page

Explain:

- The platform exists to examine wisdom wherever it is found
- It does not claim all traditions are identical
- It is not a Buddhist organisation
- The present work focuses on Buddhist emptiness because that is the first serious inquiry
- Muhammad Ibrahim is a Pakistani Muslim writer and independent thinker
- He does not claim Buddhist teaching or academic authority
- The project values openness, accuracy, and respectful disagreement

### Essays page

Create a clean future-ready index.

For now, show:

- Heading: Essays and Continuing Inquiries
- A short note explaining that essays will extend questions raised by the book
- The planned essay topics supplied in the approved copy
- No fake publication dates
- No empty cards pretending content exists

Build the essay-card component so real articles can be added later from local MDX files without redesigning the page.

Configure local MDX support if it can be done cleanly without interfering with static export.

### Contact page

Display:

Muhammad Ibrahim
Islamabad, Pakistan
[ibrahim@aitechworx.com](mailto:ibrahim@aitechworx.com)

Include inquiry categories as plain text:

- Reviews and critical responses
- Podcasts and interviews
- Reading groups
- University and community discussions
- Buddhist, philosophical, and interfaith responses

Do not build a contact form in the first version. Use a visible mailto link with a sensible prefilled subject.

## Header and navigation

Desktop header:

- Wordmark: Wisdom for the Rest of Us
- Links: Book, About, Essays, Contact
- Primary CTA: Read Free

Mobile header:

- Compact wordmark
- Accessible menu button
- Simple full-width mobile menu
- Read Free CTA visible without excessive scrolling

The header may become subtly sticky after scrolling, but it must not obscure focused elements or consume too much mobile screen space.

## Book cover asset

Use the actual supplied book cover.

Preserve its aspect ratio.

Do not crop the title or subtitle.

Provide responsive sizes.

Use an optimized local WebP or AVIF derivative for the website while retaining an accessible fallback where appropriate.

Add meaningful alt text:

“Cover of Emptiness for the Rest of Us by Muhammad Ibrahim, showing an empty meditating robe beneath a moonlit sky.”

Do not use the cover as a large CSS background.

## Visual assets

Do not use stock images of:

- monks
- Buddha statues
- temples
- prayer beads
- lotus flowers
- incense
- mountains with motivational text
- generic meditating silhouettes
- Islamic religious imagery
- forced interfaith symbolism

The book cover should be the principal visual.

Additional visual elements should be abstract and minimal:

- fine rules
- spacious typographic compositions
- soft paper-like surfaces
- subtle circular or moon-like geometry
- restrained line illustrations inspired by interdependence or open space

Do not add decorative religious symbols.

## Typography

Use a high-quality editorial pairing.

Preferred implementation:

- Serif display and reading font: Source Serif 4
- Sans-serif interface font: Inter

Load fonts through `next/font`.

Use only necessary weights.

Use the serif for:

- display headings
- pull quotes
- long-form editorial passages where readability remains strong

Use the sans-serif for:

- navigation
- buttons
- labels
- metadata
- short explanatory interface text

Body text should generally be 18–20px on desktop and 17–18px on mobile, with comfortable line height.

Long-form text columns must remain around 62–72 characters per line.

Do not use very light font weights.

## Colour direction

Implement a restrained warm editorial palette.

Suggested tokens:

- Background: warm off-white
- Primary text: near-black charcoal
- Secondary text: muted warm grey
- Primary accent: deep muted rust or terracotta derived from the book cover
- Secondary accent: restrained moonlight blue-grey
- Borders: low-contrast warm grey
- Dark section background: deep ink charcoal, not pure black

All colour combinations must satisfy WCAG 2.2 AA contrast requirements.

Do not use gradients as a major visual motif.

Do not use bright Buddhist saffron, gold, neon, purple spirituality palettes, or corporate blue.

## Layout

Use a maximum page width around 1200–1280px.

Use narrower text measures within that frame.

Hero:

- Desktop: two-column composition
- Left: platform and book proposition
- Right: book cover
- Mobile: copy first, book cover second
- Primary CTA above the fold
- Secondary text explaining “No payment. No registration. No conversion.”

Sections should alternate subtly between:

- open off-white
- lightly tinted editorial panels
- occasional dark high-contrast sections

Avoid repetitive card grids.

Use cards only where they improve scanning, such as the four key questions or future essays.

## Calls to action

Primary CTA text:

Read the Book Free

Secondary CTA text where relevant:

Explore the Book

Use one visually dominant CTA style throughout.

The read-free CTA should appear:

- in the header
- in the hero
- after the main explanation
- near the final book section

Do not use manipulative urgency, popups, countdowns, sticky bottom bars, or exit-intent prompts.

## Newsletter

Do not build a newsletter signup until a real newsletter destination exists.

Create a reusable newsletter component but keep it disabled through a config flag.

Do not display a nonfunctional form.

## SEO and metadata

Set canonical URL:

https://wisdomfortherestofus.com

Create page-specific metadata.

Homepage title:

Wisdom for the Rest of Us — Serious Ideas for Ordinary Human Lives

Homepage description:

A home for serious inquiry into universal wisdom without conversion, jargon, or borrowed identity. Read Emptiness for the Rest of Us free.

Book-page title:

Emptiness for the Rest of Us — Muhammad Ibrahim

Book-page description:

A free book exploring Buddhist emptiness, the constructed self, change, spiritual ego, and the possibility of a less defended life.

Add:

- canonical metadata
- Open Graph metadata
- Twitter card metadata
- `robots.txt`
- `sitemap.xml`
- favicon
- Apple touch icon
- `manifest.webmanifest`
- static Open Graph image
- JSON-LD for WebSite
- JSON-LD for Person
- JSON-LD for Book on the book page

Book JSON-LD should include:

- name
- author
- datePublished: 2026-06-09
- genre: Philosophical Inquiry / Contemplative Nonfiction
- inLanguage: en
- url to book page
- sameAs to Internet Archive
- license: https://creativecommons.org/licenses/by-nc-nd/4.0/

Do not invent ISBN, publisher, ratings, reviews, or price.

## Accessibility

Meet WCAG 2.2 AA.

Required:

- semantic landmarks
- one H1 per page
- logical heading order
- keyboard-accessible navigation
- visible focus states
- skip-to-content link
- minimum 44px touch targets
- alt text for meaningful images
- decorative elements hidden from assistive technology
- proper external-link indication where useful
- no colour-only communication
- no autoplay audio or video
- support `prefers-reduced-motion`
- no parallax
- no scroll hijacking
- no animated text
- no focus traps
- no content hidden only on hover

Test keyboard order and ensure the sticky header never obscures focused content.

## Performance

Target:

- Lighthouse Performance: 95+
- Accessibility: 100 where practical
- Best Practices: 100
- SEO: 100

Prioritise excellent Core Web Vitals.

Requirements:

- minimal JavaScript
- no hydration for static content
- no layout shifts
- explicit image dimensions
- optimized book-cover image
- no large background video
- no third-party scripts
- no unnecessary font files
- local static assets
- lazy-load below-the-fold imagery only
- do not lazy-load the above-the-fold book cover if it is the LCP candidate
- preconnect only where actually needed
- static HTML output must contain the complete primary content

## Components

Create reusable components:

- `SiteHeader`
- `MobileNav`
- `SiteFooter`
- `SectionHeading`
- `BookHero`
- `PrimaryCTA`
- `PullQuote`
- `QuestionCard`
- `EditorialSection`
- `BookContents`
- `AuthorProfile`
- `InquiryList`
- `PlatformPrinciples`
- `NewsletterSignup` disabled by config
- `ExternalLink`

Keep components small and semantically meaningful.

## Content management

Store structured homepage and book content in local TypeScript data files or MDX rather than embedding all copy in one oversized JSX file.

Suggested structure:

- `content/site.ts`
- `content/book.ts`
- `content/home.ts`
- `content/essays/`
- `components/`
- `app/`

Do not overengineer.

## Analytics readiness

Do not install analytics now.

Add a documented placeholder in the README explaining where privacy-respecting analytics could be introduced later.

Do not include Google Analytics by default.

## Deployment readiness

Provide:

- static export configuration
- production build command
- local development command
- deployment instructions for Cloudflare Pages, Netlify, and Vercel
- custom-domain DNS notes for wisdomfortherestofus.com
- `.env.example` only if genuinely needed
- no secrets in the repository

## Testing

Add:

- TypeScript checks
- ESLint
- production build validation
- basic Playwright tests for:
  - homepage loads
  - primary CTA points to the correct Internet Archive URL
  - mobile navigation works
  - all primary routes return successfully
  - no horizontal overflow at common mobile widths
  - keyboard focus reaches all navigation and CTA elements

## Final deliverables

Deliver:

1. Complete working source
2. Static production build
3. README with setup and deployment
4. Accessible responsive implementation
5. Final route list
6. Asset list
7. Lighthouse results or a clear note if they cannot be run locally
8. No placeholders, lorem ipsum, fake content, or unfinished UI
9. No unexplained TODO comments
10. No deviation from the supplied approved copy without documenting it

Before marking the task complete:

- run the full production build
- run lint and type checks
- test at 360px, 390px, 768px, 1024px, and 1440px widths
- verify every external link
- verify the complete Internet Archive URL
- verify the static export works without a Node server
- visually inspect the page for overly dense text sections
- confirm the site does not appear to be a Buddhist institution, religious conversion site, or technology-company landing page
