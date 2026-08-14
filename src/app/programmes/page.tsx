import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Programmes — Femme Stalls",
  description: "Skill development, business workshops, training modules, and group activities for women entrepreneurs.",
};

export default function ProgrammesPage() {
  return (
    <PlaceholderPage
      title="Programmes & Training"
      subtitle="Capacity Building, Workshops & Group Activities"
      badge="Programmes"
      description="Upskilling women entrepreneurs through practical training in financial management, packaging, digital marketing, food safety, and customer relations."
      highlights={[
        { title: "Skill Training", desc: "Hands-on workshops on branding, digital payments, pricing strategy, and bookkeeping." },
        { title: "Get Organised", desc: "Structured coaching for transforming informal hobbies into formal micro-enterprises." },
        { title: "Group Activities", desc: "Collaborative meetups, networking circles, and creative brainstorming sessions." },
      ]}
    />
  );
}
