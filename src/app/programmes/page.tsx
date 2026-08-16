import type { Metadata } from "next";
import {
  ProgrammesHero,
  DevelopmentProgrammes,
  TrainingModules,
  GetOrganised,
  GroupActivities,
  ProgrammeCTA,
} from "@/components/programmes";

export const metadata: Metadata = {
  title: "Programmes — Femme Stalls",
  description:
    "Training, development and group activities for women entrepreneurs. From entrepreneurship to digital marketing, financial literacy to community wellness.",
};

export default function ProgrammesPage() {
  return (
    <>
      <ProgrammesHero />
      <DevelopmentProgrammes />
      <TrainingModules />
      <GetOrganised />
      <GroupActivities />
      <ProgrammeCTA />
    </>
  );
}
