import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { partnerPlaceholders } from "@/lib/home-data";

export function PartnersStrip() {
  const marqueeItems = [...partnerPlaceholders, ...partnerPlaceholders];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg overflow-hidden">
      <Container size="lg">
        <SectionHeader badge="Community" title="Our Partners & Supporters" />
      </Container>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee motion-reduce:animate-none">
          {marqueeItems.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="shrink-0 w-40 h-20 sm:w-48 sm:h-24 rounded-lg bg-femme-warm-border/50 flex items-center justify-center text-muted-foreground text-xs sm:text-sm font-medium"
              aria-hidden={i >= partnerPlaceholders.length}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <Container size="lg" className="text-center mt-8">
        <Link
          href="/partners"
          className="inline-flex items-center gap-1.5 text-femme-pink font-semibold hover:text-femme-pink-700 transition-colors"
        >
          Become a Partner
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Container>
    </section>
  );
}
