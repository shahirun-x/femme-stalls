# AGENTS.md — Femme Stalls / Client Pages System

> This file lives at `src/app/stalls/AGENTS.md` and provides context for any AI agent working on client stall pages.

## Overview

Femme Stalls hosts digital storefronts for 300+ women-led businesses from Kilakarai, Tamil Nadu. Each stall owner gets up to 3 pages under the parent domain `femmestalls.com/stalls/{slug}`.

## Business Model

| Page | Route | Pricing | Purpose |
|------|-------|---------|---------|
| Intro | `/stalls/{slug}` | **Free** | Brand card — logo, about, contact. Bait to attract paid signup. |
| Products | `/stalls/{slug}/products` | **Paid** (monthly subscription) | Full product showcase with WhatsApp enquiry per product. |
| Reviews & Orders | `/stalls/{slug}/orders` | **Paid** (monthly subscription) | Customer gallery, testimonials, founder story, structured order form. |

- Free page is built for all stall owners from form data.
- Pages 2 & 3 are built only after subscription payment (manual gating — no auth/paywall logic in code).
- Each stall page is fully static / ISR — no client-side auth required.

## Architecture

### Folder Structure

```
src/
├── app/stalls/
│   ├── AGENTS.md                          ← this file
│   ├── page.tsx                           ← stalls directory/listing page
│   └── [slug]/
│       ├── page.tsx                       ← Page 1: Intro (free)
│       ├── products/
│       │   └── page.tsx                   ← Page 2: Products (paid)
│       └── orders/
│           └── page.tsx                   ← Page 3: Reviews & Orders (paid)
│
├── components/stalls/clients/
│   ├── client-intro.tsx                   ← reusable intro template
│   ├── client-products.tsx                ← reusable products template
│   ├── client-orders.tsx                  ← reusable orders template
│   ├── client-header.tsx                  ← per-stall header with logo + name
│   ├── product-card.tsx                   ← single product card with WhatsApp CTA
│   ├── testimonial-card.tsx               ← customer review card
│   ├── order-form.tsx                     ← structured enquiry form (WhatsApp redirect)
│   └── index.ts                           ← barrel export
│
├── lib/clients/
│   ├── types.ts                           ← StallClient type definition
│   ├── magalir-mattum.ts                  ← data file: Magalir Mattum
│   ├── [next-client].ts                   ← data file: next client
│   └── index.ts                           ← registry: exports all clients keyed by slug
```

### Data-Driven Architecture

Every client page renders from a single typed data file. **Zero custom code per client.** Adding a new client = adding a new `.ts` file in `src/lib/clients/` and registering its slug in `index.ts`.

### StallClient Type Shape

```typescript
interface StallClient {
  // Identity
  slug: string;                    // URL slug: "magalir-mattum"
  name: string;                    // Display name: "Magalir Mattum"
  tagline: string;                 // One-liner: "Women's Clothes Our Own Brand"
  description: string;             // 2-3 line about text
  ownerName: string;
  logo?: string;                   // path to logo in /public/stalls/{slug}/
  heroImage?: string;              // workspace or banner photo
  category: StallCategory;         // from predefined list

  // Contact
  whatsapp: string;                // with country code
  phone?: string;
  instagram?: string;
  facebook?: string;
  address?: string;
  location: string;                // "Kilakarai" / area name
  businessHours?: string;

  // Products (Page 2)
  products: Product[];
  acceptsCustomOrders: boolean;
  orderMethods: OrderMethod[];     // "whatsapp" | "phone" | "visit" | "event" | "delivery"

  // Reviews & Orders (Page 3)
  testimonials: Testimonial[];
  customerPhotos: string[];        // paths to customer images
  founderStory?: string;           // behind the brand paragraph
  specialOffer?: string;

  // Meta
  pagesEnabled: 1 | 2 | 3;        // how many pages are live (manual gating)
  joinedDate: string;              // ISO date
}
```

## Conventions

### Naming
- **Slugs:** lowercase-kebab-case from business name → `magalir-mattum`
- **Assets:** `/public/stalls/{slug}/logo.png`, `/public/stalls/{slug}/product-1.jpg`, etc.
- **Data files:** `src/lib/clients/{slug}.ts`

### Design
- Client pages use the **parent Femme Stalls design system** (see root `CLAUDE.md`)
- Each client page has a subtle branded header using their logo, but does NOT override the parent site's color palette — keeps visual consistency across all stalls
- Mobile-first: 375px baseline, responsive up to 1440px
- All images use `next/image` with proper `width`, `height`, `alt`

### WhatsApp Integration
- Product enquiry buttons open `https://wa.me/{whatsapp}?text={encoded_message}`
- Pre-filled message format: `Hi, I saw your page on Femme Stalls! I'm interested in {product_name} (₹{price}).`
- Order form submissions also redirect to WhatsApp with structured message

### SEO
- Each stall page generates its own metadata from the data file
- `title`: `{name} — {tagline} | Femme Stalls`
- `description`: generated from `description` field
- OpenGraph image: client logo or hero image

### Page Gating (Manual)
- `pagesEnabled` field in data file controls which pages exist
- `pagesEnabled: 1` → only intro page route exists
- `pagesEnabled: 2` → intro + products
- `pagesEnabled: 3` → all three pages
- The `[slug]/page.tsx` dynamic route checks this value and returns `notFound()` for disabled pages
- **No auth, no paywall, no login** — purely data-driven visibility

### Adding a New Client

1. Collect data from Google Form submission
2. Process images → save to `/public/stalls/{slug}/`
3. Create `src/lib/clients/{slug}.ts` with `StallClient` data
4. Add slug + import to `src/lib/clients/index.ts` registry
5. Set `pagesEnabled: 1` (free tier) or `2`/`3` (paid)
6. Deploy — pages auto-generate from the data

### Quality Checks
- `npm run build` must pass with zero errors
- `npm run lint` must pass clean
- Test at 375px and 1440px viewports
- Verify WhatsApp links open correctly with pre-filled text
- Check `notFound()` works for disabled pages
