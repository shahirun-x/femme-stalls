import React from "react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { membershipJourneySteps } from "@/lib/members-data";

export function MembershipJourney() {
  const lastIndex = membershipJourneySteps.length - 1;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="md">
        <SectionHeader badge="What Happens Next" title="Your Membership Journey" />

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-femme-pink-200 via-femme-pink to-femme-gold md:-translate-x-1/2"
          />

          <ol className="space-y-8">
            {membershipJourneySteps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isLast = i === lastIndex;
              return (
                <li
                  key={step.title}
                  className={`relative pl-12 md:pl-0 md:flex md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <span
                    className={`absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-4 border-femme-warm-white z-10 ${
                      isLast ? "bg-femme-gold text-white" : "bg-femme-pink text-white"
                    }`}
                  >
                    {i + 1}
                  </span>

                  <div className="md:w-1/2" />

                  <div className={`md:w-1/2 ${isEven ? "md:pl-10" : "md:pr-10"}`}>
                    <div
                      className={`rounded-xl p-4 sm:p-5 ${
                        isLast
                          ? "bg-white border-2 border-femme-gold shadow-md"
                          : "bg-femme-warm-bg border border-femme-warm-border"
                      }`}
                    >
                      <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
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
