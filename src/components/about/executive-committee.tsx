import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { committeePositions, committeeNote } from "@/lib/about-data";

export function ExecutiveCommittee() {
  return (
    <section id="committee" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Leadership" title="Executive Committee" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {committeePositions.map((position) => (
            <div
              key={position.title}
              className="bg-white rounded-xl border border-femme-warm-border p-5 sm:p-6 text-center transition-colors hover:border-femme-pink-200"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-femme-pink-300 to-femme-pink-600 text-white flex items-center justify-center font-display text-xl font-bold mb-4">
                {position.title.charAt(0)}
              </div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-foreground mb-1">
                {position.title}
              </h3>
              <p className="text-muted-foreground text-xs">Name to be announced</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-xs sm:text-sm text-center max-w-xl mx-auto mt-10">
          {committeeNote}
        </p>
      </Container>
    </section>
  );
}
