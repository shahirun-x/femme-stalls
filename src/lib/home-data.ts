/**
 * Content for the Femme Stalls homepage.
 * Kept as typed constants so copy can be edited here or moved to a CMS later.
 */

// --- 1. Hero ----------------------------------------------------------------
export const hero = {
  eyebrow: "Kilakarai, Tamil Nadu",
  titleLead: "Femme",
  titleEmphasis: "Stalls",
  subheadline: "Women supporting women. Businesses growing together.",
  intro:
    "A growing network connecting women entrepreneurs from Kilakarai, Chennai, across India and the NRI community — to learn, sell, collaborate and grow.",
  primaryCta: { label: "Join Femme Stalls", href: "/members#register" },
  secondaryCta: { label: "Explore member businesses", href: "/members#directory" },
  image: {
    src: "/images/placeholder/hero.jpg",
    alt: "Women entrepreneurs at a Femme Stalls community market in Kilakarai",
  },
  badge: { lead: "Est.", place: "Kilakarai" },
} as const;

// --- 2. Marquee ------------------------------------------------------------
export const marqueeCategories: string[] = [
  "Handicrafts",
  "Jewellery",
  "Food & Snacks",
  "Beauty & Wellness",
  "Textiles",
  "Home Products",
  "Spices",
  "Baked Goods",
];

// --- 3. What we offer (bento) ---------------------------------------------
export const offerIntro = {
  eyebrow: "What we offer",
  titleLead: "Everything a woman-led business needs,",
  titleEmphasis: "under one roof.",
  body: "From your first stall to your first export order — practical support, a trusted network and the confidence that comes from growing together.",
};

export type OfferIcon = "Globe" | "BookOpen" | "Handshake" | "Package" | "HeartHandshake" | "FileCheck2";

export interface OfferCard {
  size: "feature" | "medium" | "small";
  icon: OfferIcon;
  title: string;
  body: string;
  href: string;
  points?: string[];
}

export const offerCards: OfferCard[] = [
  {
    size: "feature",
    icon: "Globe",
    title: "Sell beyond Kilakarai",
    body: "Take your products from a single stall to Chennai, across India and to the NRI community — online and at exhibitions.",
    href: "/members#directory",
    points: ["Online storefront", "Exhibitions & fairs", "NRI & export reach"],
  },
  {
    size: "medium",
    icon: "BookOpen",
    title: "Learn & grow",
    body: "Training, mentoring and hands-on resources — pricing, digital marketing, accounts and more.",
    href: "/programmes",
  },
  {
    size: "medium",
    icon: "Handshake",
    title: "Collaborate",
    body: "Meet partners, distributors and joint-venture opportunities inside the network.",
    href: "/opportunities#collaborators",
  },
  {
    size: "small",
    icon: "Package",
    title: "Source better",
    body: "Suppliers, materials and bulk buying.",
    href: "/opportunities#business",
  },
  {
    size: "small",
    icon: "HeartHandshake",
    title: "Support & finance",
    body: "Micro-finance and donor support, subject to eligibility.",
    href: "/opportunities#finance",
  },
  {
    size: "small",
    icon: "FileCheck2",
    title: "Get organised",
    body: "Registration, accounts and documents, made simple.",
    href: "/programmes#get-organised",
  },
];

export const offerCta = {
  eyebrow: "Membership",
  title: "Join the network",
  href: "/members#register",
};

// --- 4. The numbers --------------------------------------------------------
export const numbersIntro = {
  eyebrow: "By the numbers",
  titleLead: "A community,",
  titleEmphasis: "counted.",
  body: "Twelve editions in, the network keeps growing — one stall, one skill, one member at a time.",
};

export interface Stat {
  value: number;
  plus: boolean;
  label: string;
}

export const stats: Stat[] = [
  { value: 500, plus: true, label: "Members" },
  { value: 50, plus: true, label: "Business categories" },
  { value: 12, plus: false, label: "Editions held" },
  { value: 100, plus: true, label: "Training programmes" },
];

// --- 5. Upcoming edition ---------------------------------------------------
export const upcomingEdition = {
  eyebrow: "The next edition",
  days: "25–27",
  monthYear: "December 2026",
  title: "Femme Stalls · Kilakarai",
  description:
    "Our annual marketplace bringing together women entrepreneurs, their products, customers, partners and new opportunities — three days in the heart of Kilakarai.",
  cta: { label: "Register your interest", href: "/members#register" },
  stamp: { top: "Registrations", middle: "Open", bottom: "Soon" },
};

// --- 6. Discover -----------------------------------------------------------
export const discoverIntro = {
  eyebrow: "Discover",
  titleLead: "Made by women,",
  titleEmphasis: "sold with pride.",
  body: "Browse the businesses in our network — from kitchen-table bakers to family jewellers.",
  cta: { label: "View the member directory", href: "/members#directory" },
};

export interface DiscoverCategory {
  name: string;
  note: string;
  image: string;
}

export const discoverCategories: DiscoverCategory[] = [
  { name: "Handicrafts", note: "Woven, stitched & shaped by hand", image: "/images/placeholder/handicrafts.jpg" },
  { name: "Jewellery", note: "Pearls, gold & everyday pieces", image: "/images/placeholder/jewellery.jpg" },
  { name: "Food & Snacks", note: "Home kitchens, family recipes", image: "/images/placeholder/food-snacks.jpg" },
  { name: "Beauty & Wellness", note: "Natural care & salon services", image: "/images/placeholder/beauty-wellness.jpg" },
  { name: "Textiles", note: "Sarees, abayas & tailoring", image: "/images/placeholder/textiles.jpg" },
  { name: "Home Products", note: "For kitchens & living spaces", image: "/images/placeholder/home-products.jpg" },
  { name: "Spices & Pickles", note: "Blends from coastal kitchens", image: "/images/placeholder/spices.jpg" },
  { name: "Baked Goods", note: "Cakes, sweets & celebration boxes", image: "/images/placeholder/baked-goods.jpg" },
];

// --- 7. The journey --------------------------------------------------------
export const journeyIntro = {
  eyebrow: "The journey",
  titleLead: "From a single stall",
  titleEmphasis: "to self-reliance.",
  body: "Every member's path looks different, but the shape is the same. It starts with simply showing up — and it grows, step by step, into a business and a life built on your own terms.",
};

export type JourneyIcon = "Users" | "Sparkles" | "GraduationCap" | "Wallet" | "Sprout";

export interface JourneyStep {
  icon: JourneyIcon;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  { icon: "Users", title: "Participation", description: "Join the community, take a stall, meet women walking the same road." },
  { icon: "Sparkles", title: "Confidence", description: "Stand behind your own products and find your voice with customers." },
  { icon: "GraduationCap", title: "Skills", description: "Learn pricing, marketing, accounts and the craft of running a business." },
  { icon: "Wallet", title: "Income", description: "Turn skill into steady earnings — at stalls, online and through the network." },
  { icon: "Sprout", title: "Self-reliance", description: "Stand on your own, then reach back and lift the next woman up." },
];

// --- 8. Voices -------------------------------------------------------------
/**
 * Placeholder testimonials — the client will supply real member quotes with
 * permission. Attributions are intentionally generic until then.
 */
export interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

export const voicesHeading = "Voices from the network";

export const testimonials: Testimonial[] = [
  {
    quote: "Femme Stalls gave me the confidence to turn my home kitchen into a real business. Today I supply three shops in town.",
    name: "Femme Stalls member",
    business: "Home-based catering, Kilakarai",
  },
  {
    quote: "I never thought I could stand behind a stall and sell my own work. Now I count the days to every edition.",
    name: "Femme Stalls member",
    business: "Handmade crafts",
  },
  {
    quote: "The training helped me understand pricing and accounts. My business is more organised than it has ever been.",
    name: "Femme Stalls member",
    business: "Clothing & textiles",
  },
];

// --- 9. Closing ------------------------------------------------------------
export const closing = {
  headline: "Together, we grow.",
  tagline: "Organise the unorganised",
  primaryCta: { label: "Join Femme Stalls", href: "/members#register" },
  secondaryCtaLabel: "Chat on WhatsApp",
};
