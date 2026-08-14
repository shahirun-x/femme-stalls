import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Opportunities — Femme Stalls",
  description: "Explore FEMMEI angel investors, business collaborations, finance schemes, and market linkages for women entrepreneurs.",
};

export default function OpportunitiesPage() {
  return (
    <PlaceholderPage
      title="Growth & Opportunities"
      subtitle="Investors, Collaborators & Financial Linkages"
      badge="Opportunities"
      description="Unlocking capital, partnerships, supplier networks, and micro-finance channels to help your business scale sustainably."
      highlights={[
        { title: "FEMMEI Investors", desc: "Connect with angel investors and mentors eager to back promising women-led initiatives." },
        { title: "Collaborators Network", desc: "Find co-founders, supplier partners, and cross-promotional business alliances." },
        { title: "Finance & Grants", desc: "Curated access to government subsidies, MSME loan guidance, and seed funding." },
      ]}
    />
  );
}
