import type { Metadata } from "next";
import { ContactHero, JoinSection, PartnerEnquiry, ContactDetails, SocialLinks } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact & Join — Femme Stalls",
  description:
    "Join Femme Stalls, partner with us, or get in touch. Contact the coordinator via WhatsApp, email or social media.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <JoinSection />
      <PartnerEnquiry />
      <ContactDetails />
      <SocialLinks />
    </>
  );
}
