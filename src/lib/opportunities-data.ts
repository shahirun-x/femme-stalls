export const opportunitiesHero = {
  eyebrow: "Explore Opportunities",
  title: "Opportunities",
  subtitle:
    "Business leads, funding information, investment connections, collaborations and market access — all in one place.",
};

export const femmeiIntro =
  "A network of people interested in supporting women entrepreneurs through investment, business partnerships, mentoring and market access.";

export interface FemmeiOffer {
  icon: "Wallet" | "Handshake" | "HeartHandshake" | "RefreshCcw" | "Globe";
  title: string;
  description: string;
}

export const femmeiOffers: FemmeiOffer[] = [
  { icon: "Wallet", title: "Investment", description: "Capital support for growing businesses." },
  {
    icon: "Handshake",
    title: "Business Partnerships",
    description: "Joint ventures and business collaborations.",
  },
  {
    icon: "HeartHandshake",
    title: "Mentoring",
    description: "Guidance from experienced business leaders.",
  },
  {
    icon: "RefreshCcw",
    title: "Revolving Support",
    description: "Interest-free revolving assistance, where applicable.",
  },
  {
    icon: "Globe",
    title: "Market Access",
    description: "Connections to new markets and customer channels.",
  },
];

export const investorsDisclaimer =
  "FEMME Stalls facilitates information and connections. It does not guarantee investment, loans or funding. All financial arrangements remain between the respective parties and are subject to eligibility, due diligence, availability and agreed terms.";

export const collaboratorsIntro =
  "A dedicated business collaboration network connecting members with partners across regions.";

export interface CollaborationType {
  icon: "ArrowLeftRight" | "Plane" | "Building2" | "GitMerge" | "Truck" | "Copy";
  title: string;
  description: string;
}

export const collaborationTypes: CollaborationType[] = [
  {
    icon: "ArrowLeftRight",
    title: "Chennai ↔ Kilakarai",
    description: "Bridge businesses between Chennai and Kilakarai.",
  },
  {
    icon: "Plane",
    title: "NRI ↔ Kilakarai",
    description: "Connect overseas community members with local opportunities.",
  },
  {
    icon: "Building2",
    title: "Business ↔ Business",
    description: "Member-to-member business partnerships.",
  },
  {
    icon: "GitMerge",
    title: "Joint Ventures",
    description: "Pool resources and skills for larger opportunities.",
  },
  {
    icon: "Truck",
    title: "Distribution Partnerships",
    description: "Help each other reach new customers and markets.",
  },
  {
    icon: "Copy",
    title: "Franchise Opportunities",
    description: "Explore franchise or licensed business models.",
  },
];

export interface BusinessOpportunity {
  category: "Distribution" | "Joint Venture" | "Partnership" | "New Market";
  title: string;
  date: string;
}

export const businessOpportunities: BusinessOpportunity[] = [
  {
    category: "Distribution",
    title: "Looking for women-run distribution partners in Ramanathapuram district",
    date: "Posted recently",
  },
  {
    category: "Joint Venture",
    title: "Food processing unit seeking co-investors and operators",
    date: "Posted recently",
  },
  {
    category: "Partnership",
    title: "Chennai retail store looking to stock Kilakarai handmade products",
    date: "Posted recently",
  },
  {
    category: "New Market",
    title: "Online marketplace onboarding local artisans — free registration",
    date: "Posted recently",
  },
];

export const businessOpportunitiesNote =
  "These are information listings only. Femme Stalls does not endorse or guarantee any opportunity. Members should independently verify and evaluate.";

export const financeIntro =
  "Information about government schemes, bank programmes and other legitimate funding leads for women entrepreneurs.";

export interface FinanceCategory {
  title: string;
  content: string;
}

export const financeCategories: FinanceCategory[] = [
  {
    title: "Government Schemes",
    content:
      "Mudra Loan (PMMY), Stand-Up India, PMEGP, Women Entrepreneurship Platform (WEP), State-level schemes for women entrepreneurs. Contact your nearest bank or visit the government portal for current details and eligibility.",
  },
  {
    title: "Bank Programmes",
    content:
      "Women-specific loan products, working capital loans, equipment finance, SHG-bank linkage programmes. Contact your nearest bank or visit the government portal for current details and eligibility.",
  },
  {
    title: "Grants & Subsidies",
    content:
      "Subsidies for food processing (PMFME), handloom/handicraft support, skill development grants, export promotion schemes. Contact your nearest bank or visit the government portal for current details and eligibility.",
  },
  {
    title: "Other Funding",
    content:
      "Microfinance, SHG savings and internal lending, angel investor networks, crowdfunding platforms. Contact your nearest bank or visit the government portal for current details and eligibility.",
  },
];

export const financeDisclaimer =
  "Information shared by Femme Stalls does not constitute financial advice or a recommendation. Applicants should independently deal with the relevant institution.";

export const marketAccessIntro = "Helping members find new channels to sell their products and services.";

export interface MarketChannel {
  icon: "CalendarDays" | "ShoppingCart" | "Globe" | "Store";
  title: string;
  description: string;
}

export const marketChannels: MarketChannel[] = [
  {
    icon: "CalendarDays",
    title: "Exhibitions & Trade Fairs",
    description: "Participate in exhibitions across Tamil Nadu and beyond through Femme Stalls network.",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce Platforms",
    description: "Get support to list and sell on Amazon, Flipkart, Meesho and other platforms.",
  },
  {
    icon: "Globe",
    title: "Export & International",
    description: "Explore opportunities to sell products in international markets.",
  },
  {
    icon: "Store",
    title: "Local Retail Networks",
    description: "Connect with retail stores, hotels and institutional buyers in the region.",
  },
];

export const opportunitiesDisclaimer =
  "All opportunities, finance information and investment connections shared on this platform are for informational purposes only. Femme Stalls does not guarantee, endorse or take responsibility for any transaction, arrangement or outcome. Users are advised to conduct their own due diligence.";
