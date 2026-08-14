import React from "react";
import {
  ShoppingBag,
  Users,
  BookOpen,
  Lightbulb,
  Globe2,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { valueCards, type ValueCard } from "@/lib/home-data";

const iconMap: Record<ValueCard["icon"], LucideIcon> = {
  ShoppingBag,
  Users,
  BookOpen,
  Lightbulb,
  Globe2,
  HeartHandshake,
};

export function WhyFemmeStalls() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Why Join Us" title="Why Femme Stalls" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {valueCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className="bg-white border border-femme-warm-border rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1.5">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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
