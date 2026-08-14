import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/shared/placeholder-page";

export const metadata: Metadata = {
  title: "Contact Us & Join — Femme Stalls",
  description: "Get in touch with the Femme Stalls team, join our WhatsApp group, or enquire about stall registrations.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Connect with Femme Stalls"
      subtitle="Reach Out, Join Our Circle & Enquire"
      badge="Contact Us"
      description="Have questions about registering a stall, becoming a member, or partnering with our Kilakarai community platform? We'd love to hear from you."
      highlights={[
        { title: "Direct WhatsApp", desc: "Instant communication with our event committee coordinators for immediate queries." },
        { title: "Registration Desk", desc: "Assistance with member application forms and stall category selections." },
        { title: "Kilakarai Office", desc: "Geohomz Arcade, Kilakarai, Ramanathapuram District, Tamil Nadu." },
      ]}
    />
  );
}
