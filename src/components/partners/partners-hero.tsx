import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { partnersHero } from "@/lib/partners-data";

export function PartnersHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[45vh] bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-femme-pink/15 rounded-full blur-[110px] pointer-events-none" />
      <Container size="md" className="relative z-10 text-center">
        <p className="text-femme-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          {partnersHero.eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
          {partnersHero.title}
        </h1>
        <p className="text-femme-warm-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {partnersHero.subtitle}
        </p>
        <Button
          asChild
          variant="outlineGold"
          size="lg"
          className="border-2 border-femme-gold text-femme-gold hover:bg-femme-gold/15 rounded-full px-8"
        >
          <Link href="#become-partner">Become a Partner</Link>
        </Button>
      </Container>
    </section>
  );
}
