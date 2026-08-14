import React from "react";
import { Users, Sparkles, GraduationCap, Wallet, Crown, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { guidingSteps, type GuidingStep } from "@/lib/about-data";

const iconMap: Record<GuidingStep["icon"], LucideIcon> = {
  Users,
  Sparkles,
  GraduationCap,
  Wallet,
  Crown,
};

const nodeColors = [
  "bg-femme-pink-200 text-femme-pink-700 border-femme-pink-200",
  "bg-femme-pink-300 text-femme-pink-800 border-femme-pink-300",
  "bg-femme-pink text-white border-femme-pink",
  "bg-femme-pink-700 text-white border-femme-pink-700",
  "bg-femme-gold text-white border-femme-gold",
];

export function GuidingPrinciple() {
  const lastIndex = guidingSteps.length - 1;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-femme-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <Container size="lg" className="relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
            Our Guiding Principle
          </h2>
          <p className="font-script text-femme-gold text-lg sm:text-xl">
            Every member&apos;s journey
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-0">
          {guidingSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            const isLast = i === lastIndex;
            return (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center text-center w-full md:w-36 shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center shadow-lg ${nodeColors[i]}`}
                  >
                    <Icon className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm sm:text-base font-medium text-white/90 max-w-[9rem]">
                    {step.label}
                  </p>
                </div>
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="w-0.5 h-8 md:w-auto md:flex-1 md:h-0.5 my-1 md:my-8 md:mx-1 border-l-2 md:border-l-0 md:border-t-2 border-dashed border-femme-gold/40 shrink-0"
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
