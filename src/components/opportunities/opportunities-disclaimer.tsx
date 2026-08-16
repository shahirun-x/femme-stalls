import React from "react";
import { Container } from "@/components/shared/container";
import { opportunitiesDisclaimer } from "@/lib/opportunities-data";

export function OpportunitiesDisclaimer() {
  return (
    <section className="py-12 md:py-16 bg-femme-warm-bg">
      <Container size="sm" className="text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-femme-gold to-transparent"
        />
        <p className="text-muted-foreground text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          {opportunitiesDisclaimer}
        </p>
      </Container>
    </section>
  );
}
