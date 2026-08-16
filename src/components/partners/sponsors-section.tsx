import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { sponsorTiers, sponsorsIntro, type SponsorTier } from "@/lib/partners-data";

const accentStyles: Record<SponsorTier["accent"], string> = {
  gold: "border-femme-gold",
  silver: "border-zinc-300",
  pink: "border-femme-pink-200",
};

const badgeStyles: Record<SponsorTier["accent"], string> = {
  gold: "bg-femme-gold/15 text-femme-gold-dark",
  silver: "bg-zinc-100 text-zinc-600",
  pink: "bg-femme-pink-100 text-femme-pink",
};

export function SponsorsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Support the Mission" title="Sponsors" subtitle={sponsorsIntro} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-xl border-2 shadow-sm p-6 ${accentStyles[tier.accent]}`}
            >
              <span
                className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${badgeStyles[tier.accent]}`}
              >
                {tier.name}
              </span>
              <p className="text-muted-foreground text-sm mb-5">{tier.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {Array.from({ length: tier.slots }).map((_, i) => (
                  <div
                    key={i}
                    className="h-14 rounded-lg bg-femme-warm-border/50 flex items-center justify-center text-muted-foreground text-[10px] font-medium"
                  >
                    Logo
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
              >
                Become a Sponsor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
