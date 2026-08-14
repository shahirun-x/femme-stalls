import React from "react";
import { Calendar, Store, Grid3x3, Users, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { aboutStallsParagraphs, stallsStats, type StatCard } from "@/lib/stalls-data";

const iconMap: Record<StatCard["icon"], LucideIcon> = {
  Calendar,
  Store,
  Grid3x3,
  Users,
};

export function AboutStalls() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5">
            {aboutStallsParagraphs.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stallsStats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="relative bg-white border border-femme-warm-border rounded-xl p-5 sm:p-6"
                >
                  <Icon
                    className="absolute top-4 right-4 w-4 h-4 text-femme-gold"
                    aria-hidden="true"
                  />
                  <p className="font-display text-3xl md:text-4xl text-femme-pink font-bold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
