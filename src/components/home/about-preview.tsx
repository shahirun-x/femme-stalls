import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { aboutJourneySteps, aboutParagraphs } from "@/lib/home-data";

export function AboutPreview() {
  return (
    <section id="about-preview" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="lg">
        <SectionHeader
          badge="Our Essence"
          title="About Femme Stalls"
          centered={false}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-femme-pink font-semibold hover:text-femme-pink-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-section border border-femme-warm-border p-6 sm:p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-femme-gold mb-6 text-center">
              Our Guiding Principle
            </p>
            <div className="relative flex flex-col">
              {aboutJourneySteps.map((step, i) => {
                const isLast = i === aboutJourneySteps.length - 1;
                return (
                  <div key={step.label} className="relative pl-10 pb-8 last:pb-0">
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-femme-pink-200 to-femme-gold/40"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        isLast
                          ? "bg-femme-gold text-white"
                          : "bg-white border-2 border-femme-pink-200 text-femme-pink"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div
                      className={`rounded-full px-5 py-3 font-display font-semibold text-sm sm:text-base ${
                        isLast
                          ? "bg-femme-gold/10 border border-femme-gold text-femme-gold-dark"
                          : "bg-femme-warm-bg border border-femme-warm-border text-foreground"
                      }`}
                    >
                      {step.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
