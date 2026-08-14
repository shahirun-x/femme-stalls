import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Transparency & Bye-Laws — Femme Stalls",
  description: "Read our official constitution, executive bye-laws, governance framework, and transparency reports.",
};

export default function TransparencyPage() {
  return (
    <PlaceholderPage
      title="Governance & Transparency"
      subtitle="Constitution, Bye-Laws & Operational Standards"
      badge="Transparency"
      description="Trust and equity are at the heart of Femme Stalls. We maintain open governance, ethical conduct standards, and regular accountability reports."
      highlights={[
        { title: "Official Bye-Laws", desc: "Guidelines ensuring fair opportunity, stall rotation, fee structures, and conflict resolution." },
        { title: "Governance Structure", desc: "Elected leadership tenure, voting rights, and general body meeting protocols." },
        { title: "Financial Integrity", desc: "Transparent accounting of event revenue, sponsorships, and community reinvestments." },
      ]}
    />
  );
}
