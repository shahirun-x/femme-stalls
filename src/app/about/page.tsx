import type { Metadata } from "next";
import {
  AboutHero,
  VisionMission,
  OrganiseTheUnorganised,
  OurApproach,
  GuidingPrinciple,
  HistoryTimeline,
  ExecutiveCommittee,
  GeohomzCredit,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About — Femme Stalls",
  description:
    "Learn about Femme Stalls — a self-evolving, women-led community platform from Kilakarai, Tamil Nadu. Our vision, mission, story, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <OrganiseTheUnorganised />
      <OurApproach />
      <GuidingPrinciple />
      <HistoryTimeline />
      <ExecutiveCommittee />
      <GeohomzCredit />
    </>
  );
}
