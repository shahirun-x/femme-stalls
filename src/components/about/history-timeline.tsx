import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { timelineMilestones } from "@/lib/about-data";

export function HistoryTimeline() {
  return (
    <section id="history" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="md">
        <SectionHeader badge="Our Story" title="How We Got Here" />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-femme-pink-200 via-femme-pink to-femme-gold md:-translate-x-1/2"
          />

          <ol className="space-y-10">
            {timelineMilestones.map((milestone, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={milestone.title}
                  className={`relative pl-12 md:pl-0 md:flex md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-femme-pink border-4 border-femme-warm-bg shadow z-10"
                  />

                  <div className="md:w-1/2" />

                  <div
                    className={`md:w-1/2 ${isEven ? "md:pl-10" : "md:pr-10"}`}
                  >
                    <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6">
                      <p className="text-femme-gold-dark text-xs font-semibold uppercase tracking-wider mb-1.5">
                        Phase {i + 1}
                      </p>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
