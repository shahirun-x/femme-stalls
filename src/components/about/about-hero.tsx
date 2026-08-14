import React from "react";
import { Container } from "@/components/shared/container";
import { aboutHero } from "@/lib/about-data";

export function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[45vh] md:min-h-[55vh] bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-femme-pink/15 rounded-full blur-[110px] pointer-events-none" />

      <Container size="md" className="relative z-10 text-center">
        <p className="text-femme-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          {aboutHero.eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3">
          {aboutHero.title}
        </h1>
        <p className="font-script text-xl md:text-2xl text-femme-gold mb-5">
          {aboutHero.subtitle}
        </p>
        <div
          aria-hidden="true"
          className="mx-auto mb-6 h-px w-20 bg-gradient-to-r from-transparent via-femme-gold to-transparent"
        />
        <p className="text-femme-warm-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {aboutHero.intro}
        </p>
      </Container>
    </section>
  );
}
