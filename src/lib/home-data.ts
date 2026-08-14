export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { value: "12+", label: "Stall Expos Held" },
  { value: "500+", label: "Women Members" },
  { value: "100%", label: "Women Led" },
  { value: "Kilakarai", label: "Tamil Nadu, India" },
];

export interface AboutStep {
  label: string;
}

export const aboutJourneySteps: AboutStep[] = [
  { label: "Community Participation" },
  { label: "Confidence" },
  { label: "Skills" },
  { label: "Income" },
  { label: "Self-Reliance" },
];

export const aboutParagraphs: string[] = [
  "FEMME Stalls is a self-evolving, women-led community platform that grew from the experience of the Kilakarai Trade Fair — an initiative that has been bringing together local talent, entrepreneurs, businesses and the community for over a decade.",
  "What began as a small initiative has evolved into a recurring community platform where women can learn, sell, network, gain confidence and gradually become economically self-reliant.",
];

export interface ValueCard {
  icon: "ShoppingBag" | "Users" | "BookOpen" | "Lightbulb" | "Globe2" | "HeartHandshake";
  title: string;
  description: string;
}

export const valueCards: ValueCard[] = [
  {
    icon: "ShoppingBag",
    title: "Market Access",
    description: "Showcase and sell your products through FEMME Stalls and partner networks.",
  },
  {
    icon: "Users",
    title: "Community Network",
    description: "Connect with fellow women entrepreneurs from Kilakarai, Chennai and beyond.",
  },
  {
    icon: "BookOpen",
    title: "Training & Skills",
    description: "Access programmes in business, digital marketing, finance and more.",
  },
  {
    icon: "Lightbulb",
    title: "Business Support",
    description: "Get guidance on registration, accounts, branding and market readiness.",
  },
  {
    icon: "Globe2",
    title: "Growth Opportunities",
    description: "Explore collaborations, joint ventures, and new market channels.",
  },
  {
    icon: "HeartHandshake",
    title: "Confidence & Leadership",
    description: "Build your confidence through participation, recognition and peer support.",
  },
];

export interface UpcomingEventData {
  eyebrow: string;
  title: string;
  date: string;
  venue: string;
  description: string;
}

export const upcomingEvent: UpcomingEventData = {
  eyebrow: "Upcoming",
  title: "FEMME Stalls 13",
  date: "Coming Soon — 2026",
  venue: "Kilakarai, Tamil Nadu",
  description:
    "Our next edition bringing together women entrepreneurs, home businesses, and the community.",
};

export const membershipBenefits: string[] = [
  "Priority stall allocation at every edition",
  "Access to training, mentorship and workshops",
  "Feature in the Member Directory",
  "Networking with investors and collaborators",
];

export interface DirectoryCategory {
  label: string;
}

export const directoryCategories: DirectoryCategory[] = [
  { label: "Food & Catering" },
  { label: "Handmade Crafts" },
  { label: "Clothing & Textiles" },
  { label: "Beauty & Wellness" },
  { label: "Home Products" },
  { label: "Services" },
];

export interface OpportunityCard {
  icon: "TrendingUp" | "Handshake" | "Globe";
  title: string;
  description: string;
}

export const opportunityCards: OpportunityCard[] = [
  {
    icon: "TrendingUp",
    title: "FEMMEI Investors",
    description:
      "A network of people interested in supporting women entrepreneurs through investment, mentoring and partnerships.",
  },
  {
    icon: "Handshake",
    title: "Collaborations",
    description:
      "Chennai ↔ Kilakarai, NRI partnerships, joint ventures, distribution networks and franchise opportunities.",
  },
  {
    icon: "Globe",
    title: "Market Access",
    description:
      "Exhibitions, e-commerce, export readiness and new market channels for your products.",
  },
];

export interface ProgrammeCard {
  number: string;
  title: string;
  description: string;
}

export const programmeCards: ProgrammeCard[] = [
  {
    number: "01",
    title: "Entrepreneurship",
    description: "Start, grow and manage your own business.",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description: "Learn to promote your business online and on social media.",
  },
  {
    number: "03",
    title: "Financial Literacy",
    description: "Understand accounts, budgets, loans and government schemes.",
  },
  {
    number: "04",
    title: "Get Organised",
    description: "Business → Accounts → Documents → Registration → Finance → Market.",
  },
];

export const partnerPlaceholders: string[] = [
  "Partner Logo",
  "Partner Logo",
  "Partner Logo",
  "Partner Logo",
  "Partner Logo",
  "Partner Logo",
  "Partner Logo",
  "Partner Logo",
];

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "FEMME Stalls gave me the confidence to turn my home kitchen into a real business. Today I supply to three shops in town.",
    name: "Member Name",
    business: "Home-based Catering",
  },
  {
    quote:
      "I never thought I could stand behind a stall and sell my own products. Now I look forward to every edition.",
    name: "Member Name",
    business: "Handmade Crafts",
  },
  {
    quote:
      "The training programmes helped me understand pricing and accounts. My business is more organised than ever.",
    name: "Member Name",
    business: "Clothing & Textiles",
  },
];

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "June 2025",
    title: "FEMME Stalls 12 — A Record-Breaking Edition",
    excerpt:
      "Our largest gathering yet brought together hundreds of women entrepreneurs from across the region.",
  },
  {
    date: "May 2025",
    title: "New Training Programme: Digital Marketing for Home Businesses",
    excerpt:
      "A hands-on workshop series helping members promote their products online and on social media.",
  },
  {
    date: "April 2025",
    title: "FEMME Circle Partners with Chennai Business Network",
    excerpt:
      "A new collaboration opens doors for Kilakarai entrepreneurs to reach wider markets.",
  },
];
