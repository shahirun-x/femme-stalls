import React from "react";
import { CalendarDays, ShoppingCart, Globe, Store, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { marketChannels, marketAccessIntro, type MarketChannel } from "@/lib/opportunities-data";

const iconMap: Record<MarketChannel["icon"], LucideIcon> = {
  CalendarDays,
  ShoppingCart,
  Globe,
  Store,
};

export function MarketAccess() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Sell More" title="Market Access" subtitle={marketAccessIntro} />

        <div className="space-y-4 max-w-3xl mx-auto">
          {marketChannels.map((channel) => {
            const Icon = iconMap[channel.icon];
            return (
              <div
                key={channel.title}
                className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white rounded-xl border border-femme-warm-border p-5 sm:p-6 transition-colors hover:border-femme-pink-200"
              >
                <div className="flex items-center gap-4 sm:w-64 shrink-0">
                  <span className="shrink-0 w-11 h-11 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-semibold text-base text-foreground">
                    {channel.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {channel.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
