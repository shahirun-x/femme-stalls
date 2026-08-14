import React from "react";
import { Users2, Sprout, TrendingUp, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import {
  philosophyQuote,
  philosophyParagraph,
  principleCards,
  type PrincipleCard,
} from "@/lib/about-data";

const iconMap: Record<PrincipleCard["icon"], LucideIcon> = {
  Users2,
  Sprout,
  TrendingUp,
};

export function OrganiseTheUnorganised() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="md">
        <div className="relative text-center mb-10">
          <span
            aria-hidden="true"
            className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[7rem] leading-none text-femme-pink-200 select-none"
          >
            &ldquo;
          </span>
          <blockquote className="relative font-display text-2xl md:text-3xl text-foreground italic leading-snug px-4">
            {philosophyQuote}
          </blockquote>
        </div>

        <p className="text-muted-foreground text-base sm:text-lg text-center max-w-2xl mx-auto leading-relaxed mb-14">
          {philosophyParagraph}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {principleCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-femme-warm-border p-6 text-center"
              >
                <div className="w-11 h-11 mx-auto rounded-full bg-femme-gold/15 text-femme-gold-dark flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
