export const partnersHero = {
  eyebrow: "Our Partners",
  title: "Partners & Supporters",
  subtitle:
    "The organisations, institutions and individuals who help make Femme Stalls possible.",
};

export const partnerOrganisationsIntro = "Strategic and community partners who support our mission.";

export interface PartnerOrganisation {
  name: string;
  description: string;
  primary?: boolean;
}

export const partnerOrganisations: PartnerOrganisation[] = [
  { name: "Geohomz", description: "Founding partner and initiative backer.", primary: true },
  { name: "Partner Organisation", description: "Community collaboration partner." },
  { name: "Partner Organisation", description: "Community collaboration partner." },
  { name: "Partner Organisation", description: "Community collaboration partner." },
  { name: "Partner Organisation", description: "Community collaboration partner." },
  { name: "Partner Organisation", description: "Community collaboration partner." },
];

export const mediaPartnersIntro = "Promotion and media support for Femme Stalls events and activities.";

export const mediaPartners: string[] = [
  "Media Partner",
  "Media Partner",
  "Media Partner",
  "Media Partner",
];

export const sponsorsIntro = "Event and programme sponsors who help keep participation accessible.";

export interface SponsorTier {
  name: string;
  description: string;
  accent: "gold" | "silver" | "pink";
  slots: number;
}

export const sponsorTiers: SponsorTier[] = [
  { name: "Gold Sponsors", description: "Major event sponsors.", accent: "gold", slots: 3 },
  { name: "Silver Sponsors", description: "Programme and activity sponsors.", accent: "silver", slots: 4 },
  { name: "Community Sponsors", description: "Individual stall and participant sponsors.", accent: "pink", slots: 4 },
];

export const institutionsIntro =
  "Colleges, banks, government bodies and other institutions that collaborate with Femme Stalls.";

export interface InstitutionGroup {
  category: string;
  items: string[];
}

export const institutionGroups: InstitutionGroup[] = [
  { category: "Educational", items: ["College / School", "College / School"] },
  { category: "Financial", items: ["Bank / Microfinance", "Bank / Microfinance"] },
  { category: "Government", items: ["Government Body", "Government Body"] },
  { category: "Training", items: ["Training Institution"] },
  { category: "Business", items: ["Business Organisation / Chamber"] },
  { category: "NGOs", items: ["Non-Profit Organisation"] },
];

export const becomePartnerIntro = "We welcome partnerships that support women's entrepreneurship in Kilakarai.";

export interface PartnershipType {
  icon: "Target" | "Calendar" | "GraduationCap" | "Megaphone";
  title: string;
  description: string;
}

export const partnershipTypes: PartnershipType[] = [
  {
    icon: "Target",
    title: "Strategic Partner",
    description: "Long-term collaboration on programmes, events and development.",
  },
  {
    icon: "Calendar",
    title: "Event Sponsor",
    description: "Support specific editions of FEMME Stalls or other events.",
  },
  {
    icon: "GraduationCap",
    title: "Training Partner",
    description: "Provide training, workshops or skill development programmes.",
  },
  {
    icon: "Megaphone",
    title: "Media Partner",
    description: "Help us reach more women through promotion and coverage.",
  },
];
