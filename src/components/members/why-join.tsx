import React from "react";
import {
  Users,
  Store,
  ShoppingBag,
  GraduationCap,
  HeartHandshake,
  Handshake,
  Building2,
  Globe,
  Landmark,
  GitMerge,
  Award,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { benefitCards, type BenefitCard } from "@/lib/members-data";

const iconMap: Record<BenefitCard["icon"], LucideIcon> = {
  Users,
  Store,
  ShoppingBag,
  GraduationCap,
  HeartHandshake,
  Handshake,
  Building2,
  Globe,
  Landmark,
  GitMerge,
  Award,
  Crown,
};

export function WhyJoin() {
  return (
    <section id="why-join" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Membership Value" title="Why Become a Member?" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {benefitCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div
                key={card.title}
                className="bg-white border border-femme-warm-border rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-femme-pink-200 hover:shadow-md"
              >
                <span className="inline-flex w-8 h-8 rounded-full bg-femme-pink-100 text-femme-pink items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
