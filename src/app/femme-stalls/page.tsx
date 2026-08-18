import type { Metadata } from "next";
import {
  StallsHero,
  AboutStalls,
  HowItWorks,
  StallCategories,
  WhoCanParticipate,
  UpcomingStallBanner,
  RegistrationInfo,
  StallGuidelines,
  SponsorshipSection,
  ByeLawsSection,
  EventHistory,
} from "@/components/stalls";

export const metadata: Metadata = {
  title: "The Community Marketplace",
  description:
    "FEMME Stalls is a recurring community marketplace where women from Kilakarai showcase and sell their products, home businesses and skills. Register for the next edition.",
};

export default function FemmeStallsPage() {
  return (
    <>
      <StallsHero />
      <AboutStalls />
      <HowItWorks />
      <StallCategories />
      <WhoCanParticipate />
      <UpcomingStallBanner />
      <RegistrationInfo />
      <StallGuidelines />
      <SponsorshipSection />
      <ByeLawsSection />
      <EventHistory />
    </>
  );
}
