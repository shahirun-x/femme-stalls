import React from "react";
import Link from "next/link";
import { MapPin, Calendar, ShoppingBag, ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { upcomingStall } from "@/lib/stalls-data";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Calendar,
  ShoppingBag,
};

export function UpcomingStallBanner() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-femme-pink/15 rounded-full blur-[110px] pointer-events-none" />
      <Container size="md" className="relative z-10 text-center">
        <p className="text-femme-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          {upcomingStall.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          {upcomingStall.title}
        </h2>
        <p className="text-femme-pink-400 font-medium mb-1">{upcomingStall.date}</p>
        <p className="text-femme-warm-white/70 text-sm mb-8">{upcomingStall.location}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-10 text-sm sm:text-base">
          {upcomingStall.details.map((detail) => {
            const Icon = iconMap[detail.icon];
            return (
              <div key={detail.label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-femme-gold" aria-hidden="true" />
                <span className="text-femme-warm-white/60">{detail.label}:</span>
                <span className="text-white font-medium">{detail.value}</span>
              </div>
            );
          })}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8 mb-4"
        >
          <Link href="#register">
            Register Your Interest
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
        <p className="text-femme-warm-white/50 text-xs">{upcomingStall.note}</p>
      </Container>
    </section>
  );
}
