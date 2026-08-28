/**
 * Content for the Femme Stalls landing page.
 * Kept as typed constants so copy can be edited here or moved to a CMS later.
 */

// --- Hero -----------------------------------------------------------------
export const hero = {
  title: "FEMME STALLS",
  scriptLines: ["Women Supporting Women.", "Businesses Growing Together."],
  taglineDots: "Organise the Unorganised • Connect • Collaborate • Grow",
  intro:
    "A growing network connecting women entrepreneurs from Kilakarai, Chennai, India & the NRI community.",
  primaryCta: { label: "Join Femme Stalls", href: "/members#register" },
  secondaryCta: { label: "Explore Member Businesses", href: "/members" },
  image: {
    src: "/images/placeholder/hero-women.jpg",
    alt: "Women entrepreneurs together at a Femme Stalls community event",
  },
} as const;

// --- Value propositions (Section 2) -------------------------------------
export interface ValueItem {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export const valueItems: ValueItem[] = [
  {
    icon: "ShoppingBag",
    title: "Sell Online",
    description: "Sell your products to a wider market through our online platform.",
  },
  {
    icon: "Package",
    title: "Source Better",
    description: "Find materials, suppliers and bulk-buying opportunities.",
  },
  {
    icon: "BookOpen",
    title: "Learn & Grow",
    description: "Access training, mentoring and business resources to grow.",
  },
  {
    icon: "Users",
    title: "Collaborate",
    description: "Find business partners, distributors and joint venture opportunities.",
  },
  {
    icon: "HeartHandshake",
    title: "Support & Finance",
    description:
      "Explore micro-finance and direct donor support opportunities, subject to eligibility.",
  },
  {
    icon: "Globe",
    title: "Reach New Markets",
    description: "Take your business from Kilakarai to Chennai, India and the world.",
  },
];

// --- Event banner (Section 3) -----------------------------------------
export const upcomingEvent = {
  eyebrow: "Femme Stalls – Kilakarai",
  title: "FEMME STALLS – KILAKARAI",
  dates: "25–27 December 2026",
  description:
    "Our annual platform bringing together women entrepreneurs, products, customers, partners and opportunities.",
  registrationStatus: "Registrations Open Soon!",
  primaryCta: { label: "Register Now", href: "/members#register" },
  secondaryCta: { label: "Know More", href: "/events" },
  logo: {
    src: "/images/placeholder/femme-stalls-event-logo.png",
    alt: "Femme Stalls Kilakarai event emblem",
  },
} as const;

// --- Discover Femme Businesses (Section 4) ---------------------------
export interface DiscoverCategory {
  name: string;
  image: string;
}

export const discoverCategories: DiscoverCategory[] = [
  { name: "Handicrafts", image: "/images/placeholder/handicrafts.jpg" },
  { name: "Jewellery", image: "/images/placeholder/jewellery.jpg" },
  { name: "Food & Snacks", image: "/images/placeholder/food-snacks.jpg" },
  { name: "Beauty & Wellness", image: "/images/placeholder/beauty-wellness.jpg" },
  { name: "Fashion & More", image: "/images/placeholder/fashion.jpg" },
];

// --- Why Femme Stalls (Section 5) ----------------------------------
export interface WhyFlowStep {
  label: string;
  icon: string; // Lucide icon name
}

export const whyFlowSteps: WhyFlowStep[] = [
  { label: "Members", icon: "Users" },
  { label: "Learn", icon: "BookOpen" },
  { label: "Network", icon: "Share2" },
  { label: "Source", icon: "Package" },
  { label: "Sell", icon: "ShoppingBag" },
  { label: "Collaborate", icon: "HeartHandshake" },
  { label: "Grow", icon: "TrendingUp" },
];

export interface ImpactStat {
  value: string;
  label: string;
}

export const impactStats: ImpactStat[] = [
  { value: "500+", label: "Members" },
  { value: "50+", label: "Business Categories" },
  { value: "12+", label: "FEMME Stalls" },
  { value: "100+", label: "Training Programmes" },
  { value: "1", label: "Strong Community" },
];

// --- Partners strip (Section 6) ----------------------------------
export interface PartnerLogo {
  name: string;
  image: string;
}

export interface PartnerCategory {
  title: string;
  logos: PartnerLogo[];
}

export const partnerCategories: PartnerCategory[] = [
  {
    title: "Partner Organisations",
    logos: [
      { name: "Geohomz Initiatives", image: "/images/placeholder/geohomz.png" },
      { name: "Partner Name", image: "/images/placeholder/partner-2.png" },
      { name: "Partner Name", image: "/images/placeholder/partner-3.png" },
    ],
  },
  {
    title: "Media Partners",
    logos: [
      { name: "Media Partner", image: "/images/placeholder/media-1.png" },
      { name: "Media Partner", image: "/images/placeholder/media-2.png" },
      { name: "Media Partner", image: "/images/placeholder/media-3.png" },
    ],
  },
  {
    title: "Sponsors",
    logos: [
      { name: "Sponsor Name", image: "/images/placeholder/sponsor-1.png" },
      { name: "Sponsor Name", image: "/images/placeholder/sponsor-2.png" },
    ],
  },
  {
    title: "Institutions",
    logos: [
      { name: "Institution Name", image: "/images/placeholder/institution-1.png" },
      { name: "Institution Name", image: "/images/placeholder/institution-2.png" },
    ],
  },
];

// --- Footer banner (Section 7) ----------------------------------
export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Lucide icon name
}

export const footerBanner = {
  headline: "Together, We Grow.",
  subline: "Organise the Unorganised • Connect • Collaborate • Grow",
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "YouTube", href: "https://youtube.com", icon: "Youtube" },
    { label: "WhatsApp", href: "https://wa.me/", icon: "MessageCircle" },
  ] as SocialLink[],
} as const;

// Backwards-compatible export used elsewhere on the site.
export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = impactStats.slice(0, 4);
