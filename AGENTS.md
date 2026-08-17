# AGENTS.md — Femme Stalls Project Context

> Mirrors `CLAUDE.md` (maintained one directory up, alongside this repo) for AI coding agents that read `AGENTS.md` instead. Keep both in sync when either changes.

## Project Overview
**Femme Stalls** is a production-level website for a women-led community platform from Kilakarai, Tamil Nadu, India. Backed by **Geohomz**. Tagline: **"Organise the Unorganised"**.

This is NOT a template site. It should feel warm, community-driven, feminine, and distinctive — rooted in the real culture of Kilakarai women.

## Tech Stack
- **Next.js 15** (App Router, Server Components, Turbopack)
- **TypeScript** (strict mode, no `any`)
- **Tailwind CSS v4** with custom design tokens
- **Shadcn/UI** components (New York style)
- **Supabase** (planned Phase 13+ — auth, DB, storage)
- **Mobile-first** responsive design (375px → 1280px+)

## Build Plan
The full build plan with all 13 phases, design system, file structure, and architecture is in:
**`../femme-stalls-build-plan.md`** (project root, one level up from this repo)

Always reference this file before starting work on any phase.

## Design System

### Colors (from logo — two pink hands cradling a heart on black bg)
| Token | Hex | Usage |
|---|---|---|
| `femme-pink` (DEFAULT/600) | `#E91E8B` | Primary brand — CTAs, headings, accents |
| `femme-pink-50` | `#FFF0F7` | Lightest tint backgrounds |
| `femme-pink-100` | `#FFE0EF` | Hover backgrounds |
| `femme-pink-400` | `#F472B6` | Hover states, highlights, card accents |
| `femme-pink-500` | `#EC4899` | Secondary accent, gradients |
| `femme-pink-700` | `#BE185D` | Pressed states, dark accents |
| `femme-pink-900` | `#831843` | Deepest pink |
| `femme-gold` | `#C5A55A` | Taglines, premium elements, dividers |
| `femme-gold-light` | `#D4AF37` | Gold hover states |
| `femme-dark` | `#1A0A12` | Dark sections, text (warm near-black) |
| `femme-dark-deep` | `#0D0509` | Footer, hero overlays |
| `femme-dark-card` | `#2D1420` | Cards on dark backgrounds |
| `femme-warm-white` | `#FFFBFE` | Main page background |
| `femme-warm-bg` | `#FDF2F8` | Alternating section backgrounds |
| `femme-warm-border` | `#F3D5E5` | Soft pink borders |

### Typography
| Role | Font | Usage |
|---|---|---|
| Display/Headings | **Playfair Display** (serif) | Page titles, section headings, hero text |
| Body | **Inter** (sans-serif) | Paragraphs, descriptions, UI text |
| Script/Accent | **Dancing Script** (cursive) | Taglines like "Organise the unorganised" |

### Spacing & Layout
- Mobile-first: design from 375px up
- Breakpoints: `sm(640)`, `md(768)`, `lg(1024)`, `xl(1280)`
- Section vertical padding: `py-16 md:py-20 lg:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card border-radius: `rounded-xl` or `rounded-2xl`
- Generous whitespace — never cramped

### Design Principles
- Warm, NOT corporate or NGO-generic
- Soft rounded corners (lg/xl)
- Pink-tinted section alternation (`femme-warm-white` ↔ `femme-warm-bg`)
- Gold accents used sparingly for premium feel
- Dark sections for hero areas and CTAs
- Photo-heavy where possible (community, events, stalls)
- Thumb-friendly tap targets on mobile (min 44px)
- Subtle CSS transitions only — respect `prefers-reduced-motion`

## File Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, header/footer
│   ├── page.tsx                # Landing page (HOME)
│   ├── about/page.tsx
│   ├── members/page.tsx
│   ├── femme-stalls/page.tsx
│   ├── programmes/page.tsx
│   ├── events/page.tsx
│   ├── opportunities/page.tsx
│   ├── partners/page.tsx
│   ├── media/page.tsx
│   ├── transparency/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/                 # Header, Footer, MobileNav, nav-links
│   ├── ui/                     # Shadcn/UI components
│   ├── home/                   # Landing page section components
│   ├── shared/                 # SectionHeader, CTABand, Container
│   └── [page-name]/            # Page-specific components
├── lib/
│   ├── utils.ts                # cn() helper, shared utilities
│   └── [page-name]-data.ts     # Typed content constants per page
├── types/
│   └── index.ts                # Shared TypeScript types
└── app/globals.css             # Global styles, Tailwind imports, keyframes
```

## Coding Conventions

### Components
- Use Server Components by default; add `'use client'` only when needed (interactivity, hooks)
- One component per file, named export
- Props via TypeScript interface, defined in the same file or `types/`
- Keep components under 200 lines — extract sub-components if larger
- Use `cn()` from `lib/utils` for conditional classes

### Naming
- Files: `kebab-case.tsx`
- Components: `PascalCase`
- CSS/Tailwind: follow utility-first, minimal custom CSS
- Routes: `kebab-case` folder names

### Content
- All body text content should be stored as constants or data objects (not hardcoded inline in JSX) so it's easy to update later or move to a CMS
- Use placeholder images/gradients or descriptive alt-text until real images arrive

### Quality
- Zero console errors/warnings
- `npm run build` and `npm run lint` must pass clean
- Proper heading hierarchy (single `h1` per page)
- Semantic HTML: `<section>`, `<article>`, `<nav>`, `<main>`, `<aside>`
- All images: `next/image` with proper alt text, width, height
- All links: proper `aria-label` where text isn't descriptive enough
- Focus-visible styles on all interactive elements
- Anchor-linked sections use `scroll-mt-20` so the sticky header doesn't clip them

### Git
- Commit after each completed sub-task within a phase
- Commit messages: `feat(phase-N): description` or `fix(phase-N): description`
- Branch strategy: work on `main` for now (solo dev)

## Current Status
- [x] Phase 1: Project Setup + App Shell (Header, Footer, Nav, Placeholders)
- [x] Phase 2: Landing Page (HOME) — all sections
- [x] Phase 3: About Page
- [x] Phase 4: Femme Stalls Page
- [x] Phase 5: Members Page
- [x] Phase 6: Programmes Page
- [x] Phase 7: Opportunities Page
- [x] Phase 8: Events Page
- [x] Phase 9: Partners Page
- [x] Phase 10: Media Page
- [x] Phase 11: Transparency Page
- [x] Phase 12: Contact / Join Page
- [ ] Phase 13+: Supabase Integration & Member Area

## Important Notes
- The site is called **"Femme Stalls"**, NOT "Femme Circle" — Femme Circle is the parent association
- Logo SVG is at `public/images/logo.svg` (vector recreation — real PNG to be swapped later)
- "An initiative of Geohomz" appears in the footer in small gold text
- The guiding principle flow: Community Participation → Confidence → Skills → Income → Self-Reliance
- Respect the community's values — content should be empowering but culturally sensitive
