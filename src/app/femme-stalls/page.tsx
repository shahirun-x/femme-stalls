import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Femme Stalls Expo & Registration",
  description: "Learn about stall exhibitions, guidelines, bye-laws, and register your stall for the next event.",
};

export default function FemmeStallsPage() {
  return (
    <PlaceholderPage
      title="Femme Stalls Expo"
      subtitle="Exhibitions, Stall Registrations & Guidelines"
      badge="Stalls & Expo"
      description="The flagship marketplace of Kilakarai where homemade treats, custom fashion, artisanal crafts, and innovative services meet thousands of eager shoppers."
      highlights={[
        { title: "Register a Stall", desc: "Book your stall space for the upcoming festival editions with easy step-by-step guidance." },
        { title: "Stall Bye-Laws", desc: "Clear ethical guidelines, hygiene standards, and operational rules for fair trade." },
        { title: "Event Archive", desc: "A rich history of past editions showcasing our members' growth and community impact." },
      ]}
    />
  );
}
