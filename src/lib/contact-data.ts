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

export const whatsappNumber = "+91 (0) 98765 43210";

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
  { icon: "MapPin", label: "Address", value: "Kilakarai, Ramanathapuram District, Tamil Nadu, India" },
  { icon: "MessageCircle", label: "WhatsApp", value: "+91 (0) 98765 43210" },
  { icon: "Mail", label: "Email", value: "hello@femmestalls.com" },
  { icon: "Clock", label: "Response Time", value: "We typically respond within 24 hours" },
];

export interface SocialLink {
  icon: "MessageCircle" | "Instagram" | "Facebook" | "Youtube" | "Twitter";
  label: string;
  colorClass: string;
}

export const socialLinks: SocialLink[] = [
  { icon: "MessageCircle", label: "WhatsApp", colorClass: "bg-[#25D366]" },
  { icon: "Instagram", label: "Instagram", colorClass: "bg-gradient-to-br from-femme-pink to-femme-pink-700" },
  { icon: "Facebook", label: "Facebook", colorClass: "bg-[#1877F2]" },
  { icon: "Youtube", label: "YouTube", colorClass: "bg-[#FF0000]" },
  { icon: "Twitter", label: "Twitter / X", colorClass: "bg-femme-dark" },
];
