export const stallsHero = {
  eyebrow: "The Community Marketplace",
  title: "Femme Stalls",
  subtitle: "Where women entrepreneurs come together to learn, sell, network and grow",
};

export const aboutStallsParagraphs: string[] = [
  "FEMME Stalls became one of the first practical platforms for members to showcase and sell their products, home-based businesses and skills.",
  "What began as a small initiative has evolved into a recurring community platform where women can learn, sell, network, gain confidence and gradually become economically self-reliant.",
  "Each edition brings together women from across Kilakarai — from experienced entrepreneurs to first-time participants — creating a vibrant marketplace that is as much about community as commerce.",
];

export interface StatCard {
  icon: "Calendar" | "Store" | "Grid3x3" | "Users";
  value: string;
  label: string;
}

export const stallsStats: StatCard[] = [
  { icon: "Calendar", value: "12+", label: "Editions Held" },
  { icon: "Store", value: "200+", label: "Stall Holders" },
  { icon: "Grid3x3", value: "50+", label: "Business Categories" },
  { icon: "Users", value: "1000+", label: "Community Visitors" },
];

export interface ProcessStep {
  icon: "ClipboardList" | "MapPin" | "ShoppingBag" | "TrendingUp";
  title: string;
  description: string;
}

export const howItWorksSteps: ProcessStep[] = [
  {
    icon: "ClipboardList",
    title: "Register",
    description: "Fill out the registration form online or contact the coordinator.",
  },
  {
    icon: "MapPin",
    title: "Get Your Stall",
    description: "Receive your stall allocation, category and setup details.",
  },
  {
    icon: "ShoppingBag",
    title: "Set Up & Sell",
    description: "Bring your products, set up your stall and connect with customers.",
  },
  {
    icon: "TrendingUp",
    title: "Grow",
    description: "Build relationships, gain confidence and expand your business.",
  },
];

export interface StallCategory {
  icon:
    | "UtensilsCrossed"
    | "Scissors"
    | "Shirt"
    | "Sparkles"
    | "Home"
    | "Gem"
    | "Palette"
    | "Soup"
    | "Cookie"
    | "Leaf"
    | "Gift"
    | "Wrench";
  label: string;
}

export const stallCategories: StallCategory[] = [
  { icon: "UtensilsCrossed", label: "Food & Catering" },
  { icon: "Scissors", label: "Handmade Crafts" },
  { icon: "Shirt", label: "Clothing & Textiles" },
  { icon: "Sparkles", label: "Beauty & Wellness" },
  { icon: "Home", label: "Home Products" },
  { icon: "Gem", label: "Jewellery & Accessories" },
  { icon: "Palette", label: "Art & Decor" },
  { icon: "Soup", label: "Spices & Pickles" },
  { icon: "Cookie", label: "Baked Goods & Sweets" },
  { icon: "Leaf", label: "Health & Herbal Products" },
  { icon: "Gift", label: "Stationery & Gifts" },
  { icon: "Wrench", label: "Services & Skills" },
];

export const whoCanParticipateIntro =
  "FEMME Stalls is open to all women — whether you're running an established business, starting something new from home, or exploring an idea for the first time.";

export interface ParticipantType {
  icon: "Briefcase" | "House" | "Sparkles";
  title: string;
  description: string;
}

export const participantTypes: ParticipantType[] = [
  {
    icon: "Briefcase",
    title: "Established Entrepreneurs",
    description: "Women running existing businesses looking for new customers and market access.",
  },
  {
    icon: "House",
    title: "Home-Based Businesses",
    description:
      "Women making and selling products from home — food, crafts, clothing, beauty and more.",
  },
  {
    icon: "Sparkles",
    title: "First-Time Participants",
    description: "Women who want to try selling for the first time in a supportive, low-risk environment.",
  },
];

export const whoCanParticipateClosing =
  "No experience necessary. No large investment needed. Just bring your products and your enthusiasm.";

export const upcomingStall = {
  eyebrow: "Next Edition",
  title: "FEMME Stalls 13",
  date: "Coming Soon — 2026",
  location: "Kilakarai, Tamil Nadu",
  details: [
    { icon: "MapPin" as const, label: "Venue", value: "To be announced" },
    { icon: "Calendar" as const, label: "Date", value: "To be announced" },
    { icon: "ShoppingBag" as const, label: "Stalls", value: "Limited slots available" },
  ],
  note: "Registration details will be shared with members first",
};

export interface RegistrationStep {
  label: string;
}

export const registrationChecklist: RegistrationStep[] = [
  { label: "Be a registered Femme Stalls member (or register alongside)" },
  { label: "Choose your stall category" },
  { label: "Submit the registration form (online or via coordinator)" },
  { label: "Receive confirmation and stall allocation" },
  { label: "Complete payment before the deadline" },
];

export interface PricingTier {
  name: string;
  price: string;
}

export const pricingTiers: PricingTier[] = [
  { name: "Standard Stall", price: "₹ To be announced" },
  { name: "Premium Stall", price: "₹ To be announced" },
  { name: "Corner Stall", price: "₹ To be announced" },
];

export const pricingNote =
  "Pricing varies by edition and stall type. Members may receive preferential rates.";

export interface GuidelineItem {
  title: string;
  content: string;
}

export const stallGuidelines: GuidelineItem[] = [
  {
    title: "Setup & Timing",
    content:
      "Stall holders must set up by the designated time. Late setup may result in reallocation. Stalls must remain operational during event hours.",
  },
  {
    title: "Product Display",
    content:
      "Products must be neatly displayed with clear pricing. Stall holders are responsible for their own display materials unless otherwise arranged.",
  },
  {
    title: "Conduct & Behaviour",
    content:
      "All participants are expected to maintain courteous behaviour, respect fellow stall holders and follow the organiser's instructions.",
  },
  {
    title: "Cleanliness & Safety",
    content:
      "Each stall holder is responsible for keeping their area clean. Food stalls must follow basic hygiene standards. Safety guidelines must be observed.",
  },
  {
    title: "Payment & Cancellation",
    content:
      "Stall fees must be paid before the deadline. Cancellations after the deadline may not be eligible for refund. See bye-laws for details.",
  },
  {
    title: "Promotion",
    content:
      "Stall holders are encouraged to promote their participation through social media and personal networks. Organisers will provide promotional materials where possible.",
  },
];

export interface SponsorshipTier {
  name: string;
  description: string;
  accent: "gold" | "pink";
}

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Event Sponsor",
    description: "Support the entire event and gain prominent visibility.",
    accent: "gold",
  },
  {
    name: "Stall Sponsor",
    description: "Sponsor one or more stalls for first-time participants.",
    accent: "pink",
  },
  {
    name: "Programme Sponsor",
    description: "Support training, workshops or special programmes during the event.",
    accent: "pink",
  },
];

export interface ByeLawCategory {
  icon:
    | "UserCheck"
    | "MapPin"
    | "Wallet"
    | "Tags"
    | "ShieldCheck"
    | "RotateCcw"
    | "Megaphone"
    | "Scale";
  label: string;
}

export const byeLawCategories: ByeLawCategory[] = [
  { icon: "UserCheck", label: "Eligibility & Registration" },
  { icon: "MapPin", label: "Stall Allocation" },
  { icon: "Wallet", label: "Payment & Fees" },
  { icon: "Tags", label: "Product Categories" },
  { icon: "ShieldCheck", label: "Conduct & Safety" },
  { icon: "RotateCcw", label: "Cancellation & Refunds" },
  { icon: "Megaphone", label: "Promotion & Branding" },
  { icon: "Scale", label: "Dispute Resolution" },
];

export const byeLawsNote = "The bye-laws are subject to periodic review by the Executive Committee.";

export interface EventEdition {
  edition: string;
  date: string;
  venue: string;
  highlight: string;
}

export const eventEditions: EventEdition[] = Array.from({ length: 12 }, (_, i) => ({
  edition: `FEMME ${i + 1}`,
  date: "Coming soon",
  venue: "Kilakarai",
  highlight: "Details to be updated",
}));

export const eventHistoryNote =
  "This archive will grow with each edition, preserving the history and achievements of FEMME Stalls for future generations.";
