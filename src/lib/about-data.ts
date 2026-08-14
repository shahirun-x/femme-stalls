export const aboutHero = {
  eyebrow: "About Us",
  title: "Femme Stalls",
  subtitle: "Organise the Unorganised",
  intro:
    "A self-evolving, women-led community platform that grew from the experience of the Kilakarai Trade Fair — bringing together local talent, entrepreneurs, businesses and the community.",
};

export const vision = {
  label: "Our Vision",
  content:
    "A community where every woman in Kilakarai has the confidence, skills and opportunities to be economically self-reliant — on her own terms.",
};

export const mission = {
  label: "Our Mission",
  content:
    "To create a practical, comfortable and culturally relevant platform where women can learn, earn, connect and grow — starting from where they are.",
};

export interface Objective {
  label: string;
}

export const objectives: Objective[] = [
  { label: "Organise women's economic participation in Kilakarai" },
  { label: "Create market access through FEMME Stalls and partner networks" },
  { label: "Build skills through relevant training programmes" },
  { label: "Facilitate business collaborations and partnerships" },
  { label: "Develop women's confidence and leadership" },
  { label: "Connect Kilakarai entrepreneurs with Chennai, NRI and wider networks" },
];

export const philosophyQuote =
  "We do not simply copy models from elsewhere. Kilakarai has its own distinctive culture, relationships and strengths.";

export const philosophyParagraph =
  "Our model is organic and evolving — observe, experiment, learn, improve and grow. The objective is to create opportunities that are comfortable, practical and relevant to our women, while respecting the community's values.";

export interface PrincipleCard {
  icon: "Users2" | "Sprout" | "TrendingUp";
  title: string;
  description: string;
}

export const principleCards: PrincipleCard[] = [
  {
    icon: "Users2",
    title: "Inclusive",
    description: "Open to all women — from experienced entrepreneurs to first-time participants.",
  },
  {
    icon: "Sprout",
    title: "Organic",
    description: "Shaped by the unique social, cultural and economic character of Kilakarai.",
  },
  {
    icon: "TrendingUp",
    title: "Evolving",
    description: "Constantly learning, adapting and growing from each experience.",
  },
];

export interface ApproachStep {
  label: string;
}

export const approachSteps: ApproachStep[] = [
  { label: "Observe" },
  { label: "Experiment" },
  { label: "Learn" },
  { label: "Improve" },
  { label: "Grow" },
];

export const approachParagraph =
  "From a local trade fair to a women-led development platform, the journey continues. Today, Femme Stalls is moving beyond stalls and sales into property, IT & WFH opportunities, food processing, tourism, sports, wellness, training, entrepreneurship and other income-generating initiatives.";

export interface GuidingStep {
  icon: "Users" | "Sparkles" | "GraduationCap" | "Wallet" | "Crown";
  label: string;
}

export const guidingSteps: GuidingStep[] = [
  { icon: "Users", label: "Community Participation" },
  { icon: "Sparkles", label: "Confidence" },
  { icon: "GraduationCap", label: "Skills" },
  { icon: "Wallet", label: "Income" },
  { icon: "Crown", label: "Self-Reliance" },
];

export interface TimelineMilestone {
  title: string;
  description: string;
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    title: "The Beginning",
    description:
      "The Kilakarai Trade Fair started as a community initiative bringing together local talent, businesses and residents.",
  },
  {
    title: "Women Take the Lead",
    description:
      "Women's participation grew significantly. The fair became a platform for home-based businesses and first-time entrepreneurs.",
  },
  {
    title: "FEMME Circle is Born",
    description:
      "From the experience of the trade fair, FEMME Circle was formed — shaped specifically around the needs of Kilakarai women.",
  },
  {
    title: "FEMME Stalls Launch",
    description:
      "FEMME Stalls became one of the first practical platforms for women to showcase and sell their products and skills.",
  },
  {
    title: "Growth & Recognition",
    description:
      "Multiple editions, growing membership, new programmes, and wider recognition of the model.",
  },
  {
    title: "Beyond Stalls",
    description:
      "Expansion into property, IT, food processing, tourism, sports, wellness, training and entrepreneurship.",
  },
  {
    title: "The Platform",
    description:
      "Today: building a permanent digital platform to connect, train and create opportunities for women across Kilakarai and beyond.",
  },
];

export interface CommitteePosition {
  title: string;
}

export const committeePositions: CommitteePosition[] = [
  { title: "President" },
  { title: "Vice President" },
  { title: "Secretary" },
  { title: "Treasurer" },
  { title: "Coordinator — Events" },
  { title: "Coordinator — Training" },
  { title: "Coordinator — Membership" },
  { title: "Coordinator — Communications" },
];

export const committeeNote =
  "The Executive Committee is elected by members and serves a defined term as per the association's bye-laws.";

export const geohomzCredit = {
  eyebrow: "An Initiative of",
  name: "Geohomz",
  description:
    "Geohomz brings its experience, infrastructure, ideas, networks and continued support to help Femme Stalls discover and organise the opportunities that already exist within the community.",
  tagline: "Geohomz — Organising the Unorganised",
};
