import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Members — Femme Stalls",
  description: "Join the Femme Stalls membership network, access exclusive stall benefits, and explore member directories.",
};

export default function MembersPage() {
  return (
    <PlaceholderPage
      title="Members Network"
      subtitle="Belong, Grow & Thrive Together"
      badge="Membership"
      description="Connect with a thriving community of women entrepreneurs. Enjoy priority stall allotment, exclusive workshops, mentorship, and collective bargaining power."
      highlights={[
        { title: "Why Join?", desc: "Access dedicated exhibitions, marketing visibility, and a strong sisterhood of support." },
        { title: "Membership Benefits", desc: "Discounted stall rates, business development workshops, and access to finance." },
        { title: "Member Directory", desc: "Discover Kilakarai women-led businesses across baking, apparel, craft, and services." },
      ]}
    />
  );
}
