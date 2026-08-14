import React from "react";
import { ClipboardList, MapPin, ShoppingBag, TrendingUp, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { howItWorksSteps, type ProcessStep } from "@/lib/stalls-data";

const iconMap: Record<ProcessStep["icon"], LucideIcon> = {
  ClipboardList,
  MapPin,
  ShoppingBag,
  TrendingUp,
};

export function HowItWorks() {
  const lastIndex = howItWorksSteps.length - 1;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="lg">
        <SectionHeader badge="Getting Started" title="How It Works" />

        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-0">
          {howItWorksSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            const isLast = i === lastIndex;
            return (
              <React.Fragment key={step.title}>
                <div className="flex flex-col items-center text-center w-full md:flex-1 shrink-0">
                  <div
                    className={`relative flex items-center justify-center rounded-full font-display font-bold text-white bg-gradient-to-br from-femme-pink to-femme-pink-700 ${
                      isLast ? "w-20 h-20 text-2xl shadow-lg shadow-femme-pink/30" : "w-16 h-16 text-lg"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border border-femme-warm-border text-femme-pink flex items-center justify-center mt-4 mb-3">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[14rem]">
                    {step.description}
                  </p>
                </div>
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="w-0.5 h-8 md:w-auto md:flex-none md:self-center md:mt-8 md:h-0.5 md:min-w-[2rem] my-2 md:my-0 border-l-2 md:border-l-0 md:border-t-2 border-dashed border-femme-gold/50 shrink-0"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
