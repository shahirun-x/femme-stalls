export const membersHero = {
  eyebrow: "Membership",
  title: "Be Part of Something Growing",
  subtitle:
    "Join a network of women who are learning, earning and supporting each other — from Kilakarai and beyond.",
};

export interface BenefitCard {
  icon:
    | "Users"
    | "Store"
    | "ShoppingBag"
    | "GraduationCap"
    | "HeartHandshake"
    | "Handshake"
    | "Building2"
    | "Globe"
    | "Landmark"
    | "GitMerge"
    | "Award"
    | "Crown";
  title: string;
  description: string;
}

export const benefitCards: BenefitCard[] = [
  {
    icon: "Users",
    title: "Business Networking",
    description: "Connect with fellow entrepreneurs and business contacts.",
  },
  {
    icon: "Store",
    title: "Market Access",
    description: "Sell through FEMME Stalls, exhibitions and partner channels.",
  },
  {
    icon: "ShoppingBag",
    title: "FEMME Stalls",
    description: "Priority access and preferential rates for stall registration.",
  },
  {
    icon: "GraduationCap",
    title: "Training Programmes",
    description: "Skills development in business, digital, finance and more.",
  },
  {
    icon: "HeartHandshake",
    title: "Mentoring",
    description: "Learn from experienced entrepreneurs and business leaders.",
  },
  {
    icon: "Handshake",
    title: "Business Collaborations",
    description: "Find partners, distributors and joint venture opportunities.",
  },
  {
    icon: "Building2",
    title: "Chennai Connections",
    description: "Access to Chennai-based networks, markets and opportunities.",
  },
  {
    icon: "Globe",
    title: "NRI Networking",
    description: "Connect with overseas community members and opportunities.",
  },
  {
    icon: "Landmark",
    title: "Finance Information",
    description: "Learn about government schemes, bank loans and funding options.",
  },
  {
    icon: "GitMerge",
    title: "Joint Ventures",
    description: "Partner with other members for larger business opportunities.",
  },
  {
    icon: "Award",
    title: "Recognition",
    description: "Showcase your achievements and get visibility within the community.",
  },
  {
    icon: "Crown",
    title: "Leadership",
    description: "Opportunities to take leadership roles within Femme Stalls.",
  },
];

export interface JourneyFlowStep {
  label: string;
}

export const journeyFlowSteps: JourneyFlowStep[] = [
  { label: "Member" },
  { label: "Connect" },
  { label: "Learn" },
  { label: "Participate" },
  { label: "Collaborate" },
  { label: "Grow" },
];

export const visitorItems: string[] = [
  "View events",
  "See general info",
  "Browse the site",
];

export const memberItems: string[] = [
  "Register with priority",
  "Access training & resources",
  "Full member directory",
  "Business collaboration board",
  "Mentoring & guidance",
  "Member-only events",
  "FEMMEI Investor network",
  "Leadership opportunities",
];

export interface MembershipJourneyStep {
  title: string;
  description: string;
}

export const membershipJourneySteps: MembershipJourneyStep[] = [
  {
    title: "Register",
    description: "Fill out the membership form — online or through the coordinator.",
  },
  {
    title: "Welcome",
    description: "Receive your membership confirmation and welcome pack.",
  },
  {
    title: "Connect",
    description: "Join the member community, meet fellow entrepreneurs.",
  },
  {
    title: "Participate",
    description: "Attend events, register for stalls, join training programmes.",
  },
  {
    title: "Grow",
    description: "Build your business, develop skills, take on leadership roles.",
  },
];

export const businessCategoryOptions: string[] = [
  "Food & Catering",
  "Handmade Crafts",
  "Clothing & Textiles",
  "Beauty & Wellness",
  "Home Products",
  "Jewellery & Accessories",
  "Art & Decor",
  "Spices & Pickles",
  "Baked Goods & Sweets",
  "Health & Herbal Products",
  "Stationery & Gifts",
  "Services & Skills",
  "Other",
];

export const experienceOptions: string[] = [
  "Just starting",
  "1-2 years",
  "3-5 years",
  "5+ years",
];

export interface InterestOption {
  id: string;
  label: string;
}

export const interestOptions: InterestOption[] = [
  { id: "stalls", label: "FEMME Stalls participation" },
  { id: "training", label: "Training programmes" },
  { id: "networking", label: "Business networking" },
  { id: "mentoring", label: "Mentoring" },
  { id: "collaborations", label: "Collaborations & partnerships" },
  { id: "leadership", label: "Leadership opportunities" },
];

export const referralOptions: string[] = [
  "Friend/Family",
  "Social Media",
  "Event",
  "Website",
  "Other",
];

export const registrationNote =
  "Membership is open to all women. There is no membership fee at this time.";

export interface DirectoryEntry {
  initials: string;
  name: string;
  business: string;
  category: string;
  location: string;
}

export const directoryEntries: DirectoryEntry[] = [
  {
    initials: "AS",
    name: "Member Name",
    business: "Home-based Catering",
    category: "Food & Catering",
    location: "Kilakarai",
  },
  {
    initials: "FM",
    name: "Member Name",
    business: "Handwoven Textiles",
    category: "Clothing & Textiles",
    location: "Kilakarai",
  },
  {
    initials: "RK",
    name: "Member Name",
    business: "Natural Skincare",
    category: "Beauty & Wellness",
    location: "Kilakarai",
  },
  {
    initials: "SN",
    name: "Member Name",
    business: "Handmade Jewellery",
    category: "Jewellery & Accessories",
    location: "Kilakarai",
  },
  {
    initials: "PJ",
    name: "Member Name",
    business: "Homemade Pickles & Spices",
    category: "Spices & Pickles",
    location: "Kilakarai",
  },
  {
    initials: "TV",
    name: "Member Name",
    business: "Tailoring & Alterations",
    category: "Services & Skills",
    location: "Kilakarai",
  },
];

export const directoryNote =
  "Only information approved by members for public display is shown. Full directory access is available to registered members.";

export interface MemberAreaFeature {
  icon:
    | "UserCircle"
    | "Briefcase"
    | "CalendarCheck"
    | "ContactRound"
    | "BookOpen"
    | "Lightbulb"
    | "FileText"
    | "Bell"
    | "MessageSquare";
  label: string;
}

export const memberAreaFeatures: MemberAreaFeature[] = [
  { icon: "UserCircle", label: "My Profile" },
  { icon: "Briefcase", label: "My Business" },
  { icon: "CalendarCheck", label: "Events & Registration" },
  { icon: "ContactRound", label: "Full Member Directory" },
  { icon: "BookOpen", label: "Training & Resources" },
  { icon: "Lightbulb", label: "Opportunities Board" },
  { icon: "FileText", label: "Documents" },
  { icon: "Bell", label: "Announcements" },
  { icon: "MessageSquare", label: "Member Discussions" },
];
