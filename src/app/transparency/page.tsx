import type { Metadata } from "next";
import {
  TransparencyHero,
  GovernanceSection,
  ByeLawsOverview,
  FinancialTransparency,
  PoliciesSection,
} from "@/components/transparency";

export const metadata: Metadata = {
  title: "Transparency & Governance — Femme Stalls",
  description:
    "Bye-laws, governance structure, financial transparency and policies. Femme Stalls is committed to openness and accountability.",
};

export default function TransparencyPage() {
  return (
    <>
      <TransparencyHero />
      <GovernanceSection />
      <ByeLawsOverview />
      <FinancialTransparency />
      <PoliciesSection />
    </>
  );
}
