import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { mediaPartners, mediaPartnersIntro } from "@/lib/partners-data";

export function MediaPartners() {
  const marqueeItems = [...mediaPartners, ...mediaPartners];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg overflow-hidden">
      <Container size="lg">
        <SectionHeader badge="In the Press" title="Media Partners" subtitle={mediaPartnersIntro} />
      </Container>

      <div className="relative w-full overflow-hidden md:hidden">
        <div className="flex w-max gap-4 animate-marquee motion-reduce:animate-none">
          {marqueeItems.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="shrink-0 w-40 h-20 rounded-lg bg-femme-warm-border/50 flex items-center justify-center text-muted-foreground text-xs font-medium"
              aria-hidden={i >= mediaPartners.length}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <Container size="lg" className="hidden md:flex items-center justify-center gap-6">
        {mediaPartners.map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="w-44 h-24 rounded-lg bg-femme-warm-border/50 flex items-center justify-center text-muted-foreground text-sm font-medium"
          >
            {label}
          </div>
        ))}
      </Container>
    </section>
  );
}
