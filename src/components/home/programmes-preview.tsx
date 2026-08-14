import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { programmeCards } from "@/lib/home-data";

export function ProgrammesPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Programmes" title="Grow Your Skills" />
        <div className="flex md:grid md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          {programmeCards.map((card) => (
            <div
              key={card.number}
              className="relative shrink-0 w-64 md:w-auto snap-start rounded-xl border border-femme-warm-border bg-white p-6 pt-8 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-femme-pink to-transparent"
              />
              <div className="w-10 h-10 rounded-full bg-femme-gold/15 text-femme-gold-dark flex items-center justify-center font-display font-bold text-sm mb-4">
                {card.number}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
