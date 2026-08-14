import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Partners & Sponsors — Femme Stalls",
  description: "Our supporting institutions, sponsors, media allies, and corporate backers empowering Kilakarai women.",
};

export default function PartnersPage() {
  return (
    <PlaceholderPage
      title="Our Valued Partners"
      subtitle="Institutions, Corporate Allies & Community Sponsors"
      badge="Partners"
      description="Femme Stalls thrives thanks to the generous support of organizations, educational institutions, local authorities, and sponsors."
      highlights={[
        { title: "Geohomz Arcade", desc: "Our foundational patron supporting venue infrastructure, branding, and strategic vision." },
        { title: "Institutional Partners", desc: "Collaborations with women's colleges, NGOs, and vocational training centers." },
        { title: "Media & Outreach", desc: "Broadcasting success stories across digital, print, and regional community networks." },
      ]}
    />
  );
}
