import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { approachSteps, approachParagraph } from "@/lib/about-data";

export function OurApproach() {
  const lastIndex = approachSteps.length - 1;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Methodology" title="Our Approach" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-14">
          {approachSteps.map((step, i) => {
            const isLast = i === lastIndex;
            return (
              <React.Fragment key={step.label}>
                <div
                  className={`flex items-center justify-center rounded-full font-display font-semibold text-center px-6 py-4 text-sm sm:text-base transition-all ${
                    isLast
                      ? "bg-gradient-to-br from-femme-pink to-femme-pink-700 text-white shadow-lg shadow-femme-pink/30 scale-110"
                      : "bg-femme-pink-50 border border-femme-pink-200 text-femme-pink-700"
                  }`}
                >
                  {step.label}
                </div>
                {!isLast && (
                  <>
                    <ArrowRight
                      className="hidden md:block w-5 h-5 text-femme-gold shrink-0"
                      aria-hidden="true"
                    />
                    <ArrowDown
                      className="md:hidden w-5 h-5 text-femme-gold shrink-0"
                      aria-hidden="true"
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <p className="text-muted-foreground text-base sm:text-lg text-center max-w-2xl mx-auto leading-relaxed">
          {approachParagraph}
        </p>
      </Container>
    </section>
  );
}
