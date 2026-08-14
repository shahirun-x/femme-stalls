import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "About Us — Femme Stalls",
  description: "Learn about the vision, story, and executive committee behind Femme Stalls in Kilakarai.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About Femme Stalls"
      subtitle="Vision, History & Executive Leadership"
      badge="About Us"
      description="Femme Stalls is rooted in Kilakarai, Tamil Nadu, driven by a clear mission: to organise the unorganised and empower women through enterprise, solidarity, and structured growth."
      highlights={[
        { title: "Vision & Mission", desc: "Catalyzing economic independence for women in Kilakarai and surrounding regions." },
        { title: "Our Story", desc: "From grassroots stall exhibitions to a formalized community collective backed by Geohomz." },
        { title: "Executive Committee", desc: "Dedicated leadership steering governance, event management, and member welfare." },
      ]}
    />
  );
}
