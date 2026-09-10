import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { sponsorshipTiers } from "@/lib/stalls-data";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";

export function SponsorshipSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader
          badge="Support Us"
          title="Partner With Us"
          subtitle="FEMME Stalls welcomes sponsors and partners who want to support women's entrepreneurship in Kilakarai. Sponsorship helps us keep stall fees affordable, provide training, and expand our reach."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-xl shadow-sm p-6 sm:p-8 border-2 ${
                tier.accent === "gold" ? "border-femme-gold" : "border-femme-pink-200"
              }`}
            >
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                {tier.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {tier.description}
              </p>
              <a
                href={CONTACT.whatsappLink(
                  `${WHATSAPP_MESSAGES.sponsorship} (${tier.name})`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
              >
                Enquire
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={CONTACT.mailtoLink("Sponsorship enquiry — Femme Stalls")}
            className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-femme-pink transition-colors"
          >
            <Mail className="w-4 h-4" />
            For sponsorship enquiries, email {CONTACT.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
