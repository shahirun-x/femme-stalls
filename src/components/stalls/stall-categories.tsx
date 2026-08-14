import React from "react";
import {
  UtensilsCrossed,
  Scissors,
  Shirt,
  Sparkles,
  Home,
  Gem,
  Palette,
  Soup,
  Cookie,
  Leaf,
  Gift,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { stallCategories, type StallCategory } from "@/lib/stalls-data";

const iconMap: Record<StallCategory["icon"], LucideIcon> = {
  UtensilsCrossed,
  Scissors,
  Shirt,
  Sparkles,
  Home,
  Gem,
  Palette,
  Soup,
  Cookie,
  Leaf,
  Gift,
  Wrench,
};

export function StallCategories() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="The Bazaar" title="What You'll Find at Femme Stalls" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {stallCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.label}
                className="flex items-center gap-3 bg-white border border-femme-warm-border rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-femme-pink-200 hover:shadow-md"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="font-display font-medium text-sm sm:text-base text-foreground">
                  {category.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
