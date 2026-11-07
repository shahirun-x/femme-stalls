# AGENTS.md — Femme Stalls Project Context

> Mirrors `CLAUDE.md` (maintained one directory up, alongside this repo) for AI coding agents that read `AGENTS.md` instead. Keep both in sync when either changes.

## Project Overview
**Femme Stalls** is a production website for a women-led community platform from Kilakarai, Tamil Nadu, India. An initiative of **Geohomz**. Tagline: **"Organise the Unorganised"**.

It should feel warm, community-driven, feminine and distinctive — rooted in the real culture of Kilakarai women. Never a template.

- The site is called **"Femme Stalls"** in all copy and titles. **FEMME Circle** is the parent association (the client's logo artwork reads "Femme Kilakarai Circle").
- Geo Homz, Geohomz Kottaram, Geofudz and Keelai Snacks are **sister ventures** in the Geohomz family — never call them sponsors.

## Stack — static site (live)
The live site is **`site/`**: plain HTML5, hand-written CSS with custom properties, vanilla JS. **No framework, no Tailwind, no build step to deploy.** It runs on any static host (Vercel, cPanel, `python -m http.server`).

The Next.js 15 app at the repo root (`src/`, `public/`, `package.json`) is kept as the **design/content reference** it was ported from. It is not deployed. Don't delete it, and don't add new features to it.

| Concern | Where |
|---|---|
| Page content | Directly in each page's `index.html` (good for SEO) |
| Shared header + footer | `site/assets/js/layout.js` (single source of truth) |
| Contact, socials, WhatsApp messages, Sheets URL, Geohomz family | `site/assets/js/config.js` |
| Shared behaviour (contact links, reveal, accordions) | `site/assets/js/ui.js` |
| Homepage-only (Geohomz family, count-up, slider, scroller) | `site/assets/js/home.js` (loaded before `ui.js`) |
| Gallery chips + directory search (media, members) | `site/assets/js/filters.js` |
| Forms → Google Sheets | `site/assets/js/forms.js` + `backend/google-apps-script/` |
| Client stall pages | `site/assets/js/stall.js` + `site/data/stalls/*.json` |

## Folder map
```
site/
  index.html                     homepage
  about/ members/ femme-stalls/ programmes/ events/
  opportunities/ partners/ media/ transparency/ contact/    each: index.html
  stalls/index.html              stall directory (rendered from data/stalls/index.json)
  stalls/<slug>/index.html       stall intro       ┐ thin shells rendered by stall.js
  stalls/<slug>/products/        stall products    │ from data/stalls/<slug>.json
  stalls/<slug>/orders/          reviews & orders  ┘
  404.html  sitemap.xml  robots.txt  vercel.json  .htaccess  favicon.ico
  assets/
    css/base.css                 tokens, reset, header, drawer, footer, buttons, reveal (every page)
    css/home.css                 homepage only
    css/pages.css                shared inner-page components (hero, section head, cards, grid,
                                 flows, timeline, accordion, forms)
    css/<page>.css               one small file per inner page; stall.css for stall pages
    js/config.js  layout.js  ui.js  home.js  filters.js  forms.js  stall.js
    brand/                       logos (PNG + WebP), favicons, og-image.png (mark + wordmark;
                                 og-image-circle.png is the previous full-logo card)
    img/                         photography (JPEG + WebP), stall logos
    icons.svg                    Lucide SVG sprite
  data/stalls/                   index.json + one <slug>.json per stall client
backend/google-apps-script/      Code.gs + deploy README for the form backend
scripts/                         dev-time asset generators (outputs are committed);
                                 og/og.html is the Open Graph card template
```

## Page template
Every page follows the same shell (copy an existing page):

```html
<head> … per-page <title>, description, canonical (https://www.femmestalls.com/<path>/), OG/Twitter …
  <link rel="stylesheet" href="/assets/css/base.css">
  <link rel="stylesheet" href="/assets/css/pages.css">       <!-- inner pages -->
  <link rel="stylesheet" href="/assets/css/<page>.css">
  <script src="/assets/js/ui.js" defer></script>
</head>
<body>
<div id="site-header"></div>
<script src="/assets/js/config.js"></script>   <!-- synchronous: header renders with no flash -->
<script src="/assets/js/layout.js"></script>
<main id="main" tabindex="-1"> … </main>
<div id="site-footer"></div>                    <!-- injected on DOMContentLoaded -->
</body>
```

### How to add a page
1. Copy `site/about/` to `site/<new-slug>/` and edit `index.html`: title, description, canonical, OG/Twitter URLs, one `<h1>`, content.
2. Reuse components from `pages.css`; put anything page-specific in a new `assets/css/<new-slug>.css` and link it.
3. Add the route to the `NAV` array in `layout.js` (and footer link lists if relevant).
4. Add the URL to `sitemap.xml`.
5. Run the verification steps below.

## Client stall pages
Each stall client gets up to three pages: intro (free), products and reviews/orders (paid, gated manually by `pagesEnabled`).

### How to add a stall client
1. Copy `site/stalls/magalir-mattum/` to `site/stalls/<slug>/` (keep only the page folders the client has enabled).
2. In each shell set `data-slug="<slug>"` and hand-edit `<title>`, description, canonical and OG tags.
3. Add `site/data/stalls/<slug>.json` (copy `magalir-mattum.json`; the shape is the old `StallClient` type). `pagesEnabled` is `1` (intro), `2` (+ products) or `3` (+ reviews & orders).
   - `colors.primary` is the client's brand colour, used for backgrounds, borders and decoration.
   - `colors.accentText` (optional, defaults to `primary`): the brand colour for text and meaningful icons on light grounds. Required when `primary` is light: pick the lightest shade of the same hue with ≥ 4.5:1 contrast on white, `background` and `secondary` (Magalir Mattum: tan `#C4956A` → `#8F6239`).
   - `colors.onPrimary` (optional, defaults to `#fff`): text on primary-filled chips, badges and buttons. Use the client's dark text colour when white on `primary` is below 4.5:1.
   - `colors.textSecondary` must also reach 4.5:1 on white, `background` and `secondary`.
4. Add the slug to `site/data/stalls/index.json` so it appears on `/stalls/`.
5. Put the logo at `site/assets/img/stalls/<slug>/logo.png` (+ `.webp`; `scripts/build-brand-assets.py` generates both from `public/stalls/<slug>/logo.png`).
6. Add the URLs to `sitemap.xml`.

Image fields left as `""` render a themed icon placeholder without making a request. Add the path when a real photo arrives.

## Forms → Google Sheets
- Two forms post to Sheets: **membership** (`/members/#register`) and **partner enquiry** (`/contact/#partner`). Every other "Register" CTA is a WhatsApp link.
- `forms.js` sends `JSON.stringify({ formType, page, ...fields })` as `text/plain;charset=utf-8` (no CORS preflight) to `FS_CONFIG.SHEETS_ENDPOINT`, with a 15s timeout.
- Field names must match `FORMS` in `backend/google-apps-script/Code.gs`. Checkbox groups (`interests`) are sent as arrays.
- Hidden honeypot input `website`; the script ignores submissions that fill it.
- **While `SHEETS_ENDPOINT` is `""`**, forms show a WhatsApp link prefilled with the visitor's answers and log a console warning. They never fake success.
- Deploying the Apps Script and pasting its `/exec` URL into `config.js` is a manual step — see `backend/google-apps-script/README.md`.

## Design system
Tokens live in `:root` in `base.css`.

| Token | Hex | Usage |
|---|---|---|
| `--pink` | `#D2137A` | Brand pink — inner-page CTAs, accents. Deepened from `#E91E8B` so white text on it and pink text on light grounds meet WCAG AA (revert: one line in `base.css`) |
| `--pink-50/100/200/300/400/500/700/800` | | Tints and shades |
| `--gold` / `--gold-dark` / `--gold-ink` | `#C5A55A` / `#A68B3E` / `#806426` | Accents; use `--gold-ink` for any gold text on light grounds (AA). `--gold` text only on dark grounds |
| `--dark` / `--dark-deep` / `--dark-card` | `#1A0A12` / `#0D0509` / `#2D1420` | Dark heroes, footer |
| `--warm-white` / `--warm-bg` / `--warm-border` | `#FFFBFE` / `#FDF2F8` / `#F3D5E5` | Inner-page grounds, borders |
| `--rose` / `--rose-deep` | `#B5225B` / `#8E1A47` | Homepage headings, key CTAs |
| `--terracotta`, `--cream`, `--cream-deep`, `--charcoal`, `--blush` | | Homepage editorial palette |
| `--whatsapp` | `#108043` | WhatsApp buttons (brand `#25D366` fails contrast with white text) |

- Type: **Playfair Display** (display, incl. italics), **Inter** (body), **Dancing Script** (rare signature flourishes). Loaded from Google Fonts with `display=swap`.
- Breakpoints: 640 / 768 / 1024 / 1280 / 1536.
- Inner-page line-heights deliberately mirror the Tailwind cascade of the Next app, e.g. a responsive font-size resets line-height to the size's default from 640px up. Keep that when editing so layouts stay consistent.
- Icons: `<svg class="icon" aria-hidden="true"><use href="/assets/icons.svg#name"></use></svg>`. Stroke width is set in CSS (`.icon--thin` = 1.5). To add an icon, add its Lucide name to `scripts/build-icon-sprite.mjs` and run `node scripts/build-icon-sprite.mjs`.
- **No emojis** anywhere in the UI.
- Contrast: text on pink tints (`--pink-100` badges, pills) uses `--pink-700`. Check new colour pairs reach 4.5:1 (Lighthouse accessibility must stay 100).
- Brand: the header uses the cropped hands-and-heart mark + the "Femme Stalls" wordmark set in Playfair (the `brand()` function in `layout.js`; swap it there for a horizontal lockup later). The footer uses the full logo on a cream plate.

## Conventions
- Every page: one `<h1>`, semantic sections, `alt` text, explicit `width`/`height` on images, `loading="lazy"` below the fold, WebP via `<picture>` with JPEG/PNG fallback.
- All phone/email/WhatsApp/social links come from `config.js`. In HTML use `data-wa="membership"` (key or literal message), `data-mail="Subject"`, `data-tel`, `data-social="instagram"`, and `<span data-contact="phone|email|address">`. `ui.js` fills them in.
- Scroll reveal: add `class="reveal"` (+ `style="--delay:120ms"` to stagger). Reduced-motion users see content instantly.
- Accordions: native `<details>` inside `.accordion`, with the body wrapped in `.accordion__panel`.
- Budgets (gzipped, per page, excluding fonts and images): CSS ≤ 20 KB, JS ≤ 15 KB. No minifier or build step; stay under by removing dead code and loading page-specific scripts only where they are used.
- Never use `overflow-x: hidden` on `body`. Fix the overflowing element instead.

## Verify before committing
```bash
python -m http.server 8080 --directory site
```
- Visit every page: no console errors, no failed requests.
- At 320, 375, 390, 428, 768, 1024, 1280, 1440 and 1920px, `document.documentElement.scrollWidth === clientWidth`.
- Keyboard: header dropdowns (Tab, Enter/Space, arrows, Esc), mobile drawer (focus trap, Esc), accordions, both forms.

## Hosting
- **Vercel:** create a project with **Root Directory = `site`** and Framework Preset = Other (no build command). `site/vercel.json` sets clean URLs, trailing slashes, security and cache headers.
- **cPanel / Apache / LiteSpeed (e.g. eWebGuru):** run `python scripts/build-upload-zip.py` → `femme-stalls-site.zip` (git-ignored; `index.html`, `.htaccess`, `web.config` at the zip root; `vercel.json`, READMEs and OS clutter left out). In File Manager upload it to `public_html/` and Extract. `site/.htaccess` forces HTTPS + www, serves `404.html`, and sets compression and caching. Every module-specific block is in `<IfModule>`, so a missing module can't cause a 500.
- **Windows / IIS (Plesk):** `site/web.config` mirrors the same rules (needs the IIS URL Rewrite module for the redirects). Apache ignores it.
- Nothing depends on Vercel: every link is a folder URL ending in `/` (served by that folder's `index.html`) or a real file, and every asset path is root-absolute. The site must live at the domain root, not in a subfolder.
- Canonical domain: `https://www.femmestalls.com`.

## Deferred
- Member accounts / login and a members-only area (removed from the UI until built).
- Real photography, social profile URLs (placeholders in `config.js`), PDFs for bye-laws/policies/press kit, real testimonials.

## Git
- Work on a branch, commit in logical chunks: `feat(scope): …`, `fix(scope): …`.
