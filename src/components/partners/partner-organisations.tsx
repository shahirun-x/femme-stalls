import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { partnerOrganisations, partnerOrganisationsIntro } from "@/lib/partners-data";

export function PartnerOrganisations() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Our Network" title="Partner Organisations" subtitle={partnerOrganisationsIntro} />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {partnerOrganisations.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className={`bg-white rounded-xl text-center p-6 ${
                partner.primary
                  ? "border-2 border-femme-gold shadow-md sm:col-span-2 lg:col-span-1"
                  : "border border-femme-warm-border"
              }`}
            >
              <div className="w-[120px] h-[60px] mx-auto rounded-lg bg-femme-warm-border/50 flex items-center justify-center text-muted-foreground text-xs font-medium mb-4">
                Partner Logo
              </div>
              <h3 className="font-display font-medium text-base text-foreground mb-1">
                {partner.name}
              </h3>
              <p className="text-muted-foreground text-xs mb-3">{partner.description}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-femme-pink font-semibold text-xs hover:text-femme-pink-700 transition-colors"
              >
                Visit Website
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
