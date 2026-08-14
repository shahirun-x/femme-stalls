import React from "react";
import { Container } from "@/components/shared/container";
import { geohomzCredit } from "@/lib/about-data";

export function GeohomzCredit() {
  return (
    <section className="py-14 md:py-16 bg-femme-warm-bg">
      <Container size="sm" className="text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-femme-gold to-transparent"
        />
        <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wide mb-2">
          {geohomzCredit.eyebrow}
        </p>
        <p className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
          {geohomzCredit.name}
        </p>
        <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-4">
          {geohomzCredit.description}
        </p>
        <p className="font-script text-femme-gold text-lg">{geohomzCredit.tagline}</p>
      </Container>
    </section>
  );
}
