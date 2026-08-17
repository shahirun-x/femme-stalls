export const transparencyHero = {
  eyebrow: "Governance",
  title: "Transparency & Governance",
  subtitle: "Openness, accountability and clear rules — because trust is built on transparency.",
};

export interface GovernanceLevel {
  name: string;
  description: string;
  connectorLabel?: string;
}

export const governanceLevels: GovernanceLevel[] = [
  {
    name: "General Body",
    description: "All registered members of Femme Stalls.",
  },
  {
    name: "Executive Committee",
    description: "President, Vice President, Secretary, Treasurer and Coordinators.",
    connectorLabel: "Elected by members",
  },
  {
    name: "Operations",
    description: "Events, Programmes, Membership and Communications.",
    connectorLabel: "Managed by EC",
  },
];

export interface ByeLawSection {
  title: string;
  content: string;
}

export const byeLawSections: ByeLawSection[] = [
  {
    title: "Membership",
    content:
      "Eligibility criteria, registration process, membership categories, rights and responsibilities of members.",
  },
  {
    title: "Executive Committee",
    content:
      "Composition, election process, terms of office, roles and responsibilities of office bearers.",
  },
  {
    title: "Meetings",
    content: "Annual general meeting, special meetings, quorum requirements, voting procedures.",
  },
  {
    title: "Finance",
    content: "Membership fees (if any), event fees, accounts management, audit, financial year.",
  },
  {
    title: "FEMME Stalls Events",
    content:
      "Stall allocation, registration, payment, cancellation, conduct, product categories. (See also: FEMME Stalls Bye-Laws)",
  },
  {
    title: "Amendments",
    content: "Process for amending bye-laws, required majority, notice period.",
  },
  {
    title: "Dispute Resolution",
    content: "Grievance procedure, mediation, resolution process.",
  },
  {
    title: "Dissolution",
    content: "Conditions and process for dissolution, distribution of assets.",
  },
];

export interface FinancialListItem {
  label: string;
}

export const incomeSources: FinancialListItem[] = [
  { label: "Membership fees (if applicable)" },
  { label: "Stall registration fees" },
  { label: "Sponsorship" },
  { label: "Partner contributions" },
  { label: "Programme fees" },
];

export const expenditureAreas: FinancialListItem[] = [
  { label: "Event organisation" },
  { label: "Training & programmes" },
  { label: "Communications & promotion" },
  { label: "Administration" },
  { label: "Community activities" },
];

export const reportingNotes: string[] = [
  "Annual financial summaries are shared with members at the Annual General Meeting.",
  "Event-specific income and expenditure reports are available for major events.",
  "Members can request financial information through the Executive Committee.",
];

export const financialClosingNote =
  "Detailed financial reports will be published here as they become available.";

export interface PolicyDocument {
  title: string;
  description: string;
}

export const policyDocuments: PolicyDocument[] = [
  {
    title: "Privacy Policy",
    description: "How we collect, use and protect member information",
  },
  {
    title: "Code of Conduct",
    description: "Expected behaviour at events and within the community",
  },
  {
    title: "Refund Policy",
    description: "Stall fee and programme fee refund terms",
  },
  {
    title: "Social Media Policy",
    description: "Guidelines for representing Femme Stalls online",
  },
  {
    title: "Grievance Policy",
    description: "How to raise and resolve complaints",
  },
];
