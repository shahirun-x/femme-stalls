import React from "react";
import Link from "next/link";
import { TrendingUp, Handshake, Globe, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { opportunityCards, type OpportunityCard } from "@/lib/home-data";

const iconMap: Record<OpportunityCard["icon"], LucideIcon> = {
  TrendingUp,
  Handshake,
  Globe,
};

export function OpportunitiesPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="lg">
        <SectionHeader badge="Opportunities" title="Grow With Femme Stalls" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {opportunityCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className="bg-white rounded-xl border-t-4 border-femme-pink shadow-sm p-6 sm:p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link
                  href="/opportunities"
                  className="inline-flex items-center gap-1.5 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
