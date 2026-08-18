import type { Metadata } from "next";
import {
  PartnersHero,
  PartnerOrganisations,
  MediaPartners,
  SponsorsSection,
  InstitutionsSection,
  BecomePartner,
} from "@/components/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our partner organisations, media partners, sponsors and institutional supporters. Partner with Femme Stalls to support women entrepreneurship.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnerOrganisations />
      <MediaPartners />
      <SponsorsSection />
      <InstitutionsSection />
      <BecomePartner />
    </>
  );
}
