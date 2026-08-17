import React from "react";
import { Container } from "@/components/shared/container";
import { transparencyHero } from "@/lib/transparency-data";

export function TransparencyHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[40vh] bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-femme-pink/15 rounded-full blur-[110px] pointer-events-none" />
      <Container size="md" className="relative z-10 text-center">
        <p className="text-femme-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          {transparencyHero.eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          {transparencyHero.title}
        </h1>
        <p className="text-femme-warm-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {transparencyHero.subtitle}
        </p>
      </Container>
    </section>
  );
}
