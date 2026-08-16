export const programmesHero = {
  eyebrow: "Learn & Grow",
  title: "Programmes & Training",
  subtitle:
    "Practical skills, real knowledge, community support — everything you need to build and grow your business.",
};

export const developmentProgrammesIntro =
  "Our programmes are designed to help women at every stage — whether you're exploring an idea, running a home business, or looking to scale.";

export interface DevelopmentProgramme {
  icon:
    | "Rocket"
    | "Briefcase"
    | "Calculator"
    | "Smartphone"
    | "Bot"
    | "Palette"
    | "Lightbulb"
    | "TrendingUp"
    | "ShoppingCart"
    | "Globe"
    | "Crown"
    | "Wrench";
  title: string;
  description: string;
}

export const developmentProgrammes: DevelopmentProgramme[] = [
  {
    icon: "Rocket",
    title: "Entrepreneurship Development",
    description: "Start, plan and manage your own business from scratch.",
  },
  {
    icon: "Briefcase",
    title: "Business Training",
    description: "Practical skills for running a business day to day.",
  },
  {
    icon: "Calculator",
    title: "Accounts & Financial Literacy",
    description: "Understand cash flow, pricing, budgets and record-keeping.",
  },
  {
    icon: "Smartphone",
    title: "Digital Marketing",
    description: "Promote your business on social media, WhatsApp and online.",
  },
  {
    icon: "Bot",
    title: "AI for Business",
    description: "Learn how AI tools can help with content, planning and customer service.",
  },
  {
    icon: "Palette",
    title: "Branding & Packaging",
    description: "Make your product stand out with better branding and presentation.",
  },
  {
    icon: "Lightbulb",
    title: "Product Development",
    description: "Improve your products and develop new ones for the market.",
  },
  {
    icon: "TrendingUp",
    title: "Sales Training",
    description: "Learn to sell with confidence — in person, online and through networks.",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce",
    description: "Set up and manage online sales channels for your products.",
  },
  {
    icon: "Globe",
    title: "Export Readiness",
    description: "Understand what it takes to sell beyond your local market.",
  },
  {
    icon: "Crown",
    title: "Leadership Development",
    description: "Build leadership, communication and management skills.",
  },
  {
    icon: "Wrench",
    title: "Skill Development",
    description: "Hands-on workshops in crafts, food, textiles and other trades.",
  },
];

export const trainingModulesSubtitle =
  "Upcoming and ongoing training available to Femme Stalls members";

export interface TrainingModule {
  title: string;
  duration: string;
  level: string;
  description: string;
  status: "Coming Soon" | "Open" | "Completed";
}

export const trainingModules: TrainingModule[] = [
  {
    title: "Digital Marketing Basics",
    duration: "4 sessions",
    level: "Beginner",
    description:
      "Learn to create business profiles on WhatsApp Business, Instagram and Facebook. Understand content creation, customer engagement and basic advertising.",
    status: "Coming Soon",
  },
  {
    title: "Financial Literacy for Home Businesses",
    duration: "3 sessions",
    level: "Beginner",
    description:
      "Track income and expenses, set prices that work, understand profit margins, and learn about bank accounts and digital payments.",
    status: "Coming Soon",
  },
  {
    title: "Product Photography & Presentation",
    duration: "2 sessions",
    level: "All Levels",
    description:
      "Take attractive product photos using just your phone. Learn basic editing, backgrounds and presentation for online selling.",
    status: "Coming Soon",
  },
  {
    title: "Business Registration & Compliance",
    duration: "2 sessions",
    level: "Intermediate",
    description:
      "Understand GST, FSSAI (for food businesses), trade licences and other registrations relevant to small and home businesses.",
    status: "Coming Soon",
  },
  {
    title: "E-commerce & Online Selling",
    duration: "4 sessions",
    level: "Intermediate",
    description:
      "Set up shop on platforms like Amazon, Flipkart, Meesho or your own website. Manage orders, payments and delivery.",
    status: "Coming Soon",
  },
  {
    title: "AI Tools for Small Business",
    duration: "2 sessions",
    level: "All Levels",
    description:
      "Discover free AI tools that can help with writing product descriptions, creating social media content, answering customer queries and planning.",
    status: "Coming Soon",
  },
];

export interface GetOrganisedStage {
  icon: "Store" | "Calculator" | "FileStack" | "ClipboardCheck" | "Landmark" | "ShoppingBag";
  title: string;
  description: string;
}

export const getOrganisedStages: GetOrganisedStage[] = [
  {
    icon: "Store",
    title: "Business",
    description: "Define what you do, who you serve, and what you sell.",
  },
  {
    icon: "Calculator",
    title: "Accounts",
    description: "Set up simple record-keeping and understand your numbers.",
  },
  {
    icon: "FileStack",
    title: "Documents",
    description: "Organise your business documents and paperwork.",
  },
  {
    icon: "ClipboardCheck",
    title: "Registration",
    description: "Complete necessary licences and registrations.",
  },
  {
    icon: "Landmark",
    title: "Finance",
    description: "Access bank accounts, schemes, loans and working capital.",
  },
  {
    icon: "ShoppingBag",
    title: "Market",
    description: "Get your product or service to customers and grow sales.",
  },
];

export const getOrganisedDescription =
  "Many talented women already have the products, skills and ideas — they just need help getting organised. This programme provides personalised guidance to help members move from informal business to market-ready enterprise, at their own pace.";

export const groupActivitiesIntro =
  "Femme Stalls is more than business. We build relationships through shared activities that bring women together.";

export interface GroupActivity {
  emoji: string;
  label: string;
}

export const groupActivities: GroupActivity[] = [
  { emoji: "🏃", label: "Sports & Fitness" },
  { emoji: "🧘", label: "Wellness & Yoga" },
  { emoji: "🎉", label: "Social Gatherings" },
  { emoji: "👩‍👩‍👧", label: "Women's Meetups" },
  { emoji: "🤝", label: "Skill Sharing Sessions" },
  { emoji: "🌍", label: "Community Service" },
  { emoji: "☕", label: "Networking Coffee Meets" },
  { emoji: "👨‍👩‍👧‍👦", label: "Family Events" },
  { emoji: "🏫", label: "Educational Visits" },
  { emoji: "🏭", label: "Business Visits" },
];

export const groupActivitiesNote =
  "Group activities are open to all members. Check the events calendar for upcoming sessions.";
