import type { Metadata } from "next";
import {
  OpportunitiesHero,
  FemmeiInvestors,
  FemmeCollaborators,
  BusinessOpportunities,
  FinanceInfo,
  MarketAccess,
  OpportunitiesDisclaimer,
} from "@/components/opportunities";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Business, finance, investment and collaboration opportunities for women entrepreneurs. FEMMEI Investors, market access, government schemes and more.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <OpportunitiesHero />
      <FemmeiInvestors />
      <FemmeCollaborators />
      <BusinessOpportunities />
      <FinanceInfo />
      <MarketAccess />
      <OpportunitiesDisclaimer />
    </>
  );
}
