import React from "react";
import {
  Rocket,
  Briefcase,
  Calculator,
  Smartphone,
  Bot,
  Palette,
  Lightbulb,
  TrendingUp,
  ShoppingCart,
  Globe,
  Crown,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import {
  developmentProgrammes,
  developmentProgrammesIntro,
  type DevelopmentProgramme,
} from "@/lib/programmes-data";

const iconMap: Record<DevelopmentProgramme["icon"], LucideIcon> = {
  Rocket,
  Briefcase,
  Calculator,
  Smartphone,
  Bot,
  Palette,
  Lightbulb,
  TrendingUp,
  ShoppingCart,
  Globe,
  Crown,
  Wrench,
};

export function DevelopmentProgrammes() {
  return (
    <section id="development" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader
          badge="What We Offer"
          title="Development Programmes"
          subtitle={developmentProgrammesIntro}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {developmentProgrammes.map((programme) => {
            const Icon = iconMap[programme.icon];
            return (
              <div
                key={programme.title}
                className="group bg-white border border-femme-warm-border rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-femme-pink-200 hover:shadow-md"
              >
                <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-femme-pink-300 to-femme-pink-600 text-white items-center justify-center mb-3 transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(233,30,139,0.4)]">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                  {programme.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {programme.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
