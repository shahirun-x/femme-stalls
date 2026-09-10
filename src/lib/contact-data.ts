import { CONTACT, SOCIAL_LINKS, WHATSAPP_MESSAGES } from "@/lib/constants";

export const contactHero = {
  eyebrow: "Get in Touch",
  title: "Contact & Join",
  subtitle: "Join the community, partner with us, or simply say hello.",
};

export const joinNote = "Membership is open to all women. There is no membership fee at this time.";

export const joinBenefits: string[] = [
  "Access to FEMME Stalls events",
  "Training and skill development",
  "Business networking and collaborations",
  "Community support and recognition",
];

export const joinTimeNote = "It takes less than 2 minutes to register.";

export const whatsappNumber = CONTACT.phone;

export interface PartnerType {
  icon: "Building2" | "Heart" | "Landmark" | "Newspaper" | "TrendingUp" | "Handshake";
  title: string;
  description: string;
}

export const partnerTypes: PartnerType[] = [
  { icon: "Building2", title: "Organisation", description: "Strategic partnership" },
  { icon: "Heart", title: "Sponsor", description: "Event or programme sponsorship" },
  { icon: "Landmark", title: "Institution", description: "College, bank or government body" },
  { icon: "Newspaper", title: "Media", description: "Press and media partnership" },
  { icon: "TrendingUp", title: "Investor", description: "FEMMEI investment network" },
  { icon: "Handshake", title: "Collaborator", description: "Business collaboration" },
];

export const partnershipTypeOptions: string[] = [
  "Organisation",
  "Sponsor",
  "Institution",
  "Media",
  "Investor",
  "Collaborator",
];

export interface ContactDetail {
  icon: "MapPin" | "MessageCircle" | "Mail" | "Clock";
  label: string;
  value: string;
}

export const contactDetails: ContactDetail[] = [
  { icon: "MapPin", label: "Address", value: CONTACT.address },
  { icon: "MessageCircle", label: "WhatsApp", value: CONTACT.phone },
  { icon: "Mail", label: "Email", value: CONTACT.email },
  { icon: "Clock", label: "Response Time", value: "We typically respond within 24 hours" },
];

export interface SocialLink {
  icon: "MessageCircle" | "Instagram" | "Facebook" | "Youtube";
  label: string;
  href: string;
  colorClass: string;
}

/**
 * Profile URLs come from SOCIAL_LINKS in lib/constants.ts, where they are
 * currently placeholder handles pending client confirmation.
 */
export const socialLinks: SocialLink[] = [
  {
    icon: "MessageCircle",
    label: "WhatsApp",
    href: CONTACT.whatsappLink(WHATSAPP_MESSAGES.general),
    colorClass: "bg-[#25D366]",
  },
  {
    icon: "Instagram",
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    colorClass: "bg-gradient-to-br from-femme-pink to-femme-pink-700",
  },
  { icon: "Facebook", label: "Facebook", href: SOCIAL_LINKS.facebook, colorClass: "bg-[#1877F2]" },
  { icon: "Youtube", label: "YouTube", href: SOCIAL_LINKS.youtube, colorClass: "bg-[#FF0000]" },
];
