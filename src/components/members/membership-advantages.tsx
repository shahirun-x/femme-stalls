import React from "react";
import { Check, Minus, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { journeyFlowSteps, visitorItems, memberItems } from "@/lib/members-data";

const pillStyles = [
  "bg-femme-pink-50 border-femme-pink-100 text-femme-pink-700",
  "bg-femme-pink-100 border-femme-pink-200 text-femme-pink-700",
  "bg-femme-pink-200 border-femme-pink-300 text-femme-pink-800",
  "bg-femme-pink-300 border-femme-pink-400 text-white",
  "bg-femme-pink text-white border-femme-pink",
  "bg-gradient-to-br from-femme-pink-700 to-femme-gold text-white border-femme-gold",
];

export function MembershipAdvantages() {
  const lastIndex = journeyFlowSteps.length - 1;

  return (
    <section id="benefits" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="The Journey" title="Membership Advantages" />

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {journeyFlowSteps.map((step, i) => (
            <React.Fragment key={step.label}>
              <span
                className={`rounded-full border px-5 py-2.5 text-sm sm:text-base font-display font-semibold ${pillStyles[i]}`}
              >
                {step.label}
              </span>
              {i < lastIndex && (
                <span aria-hidden="true" className="text-femme-gold text-lg">
                  &rarr;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-8">
          What Members Get
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          <div className="rounded-xl bg-white/60 border border-femme-warm-border p-6 sm:p-8">
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-5">
              As a Visitor
            </p>
            <ul className="space-y-3">
              {visitorItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-muted-foreground text-sm">
                  <Minus className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-xl bg-white border-2 border-femme-gold shadow-lg p-6 sm:p-8 md:-mt-2">
            <span className="absolute -top-3 right-6 inline-flex items-center gap-1 bg-femme-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              Full Access
            </span>
            <p className="text-femme-pink text-xs font-semibold uppercase tracking-wider mb-5">
              As a Member
            </p>
            <ul className="space-y-3">
              {memberItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-foreground text-sm font-medium">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                    <Check className="w-3 h-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
