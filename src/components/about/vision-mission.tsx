import React from "react";
import { Target, Compass } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { vision, mission, objectives } from "@/lib/about-data";

export function VisionMission() {
  return (
    <section id="vision-mission" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Purpose" title="Vision & Mission" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-xl border-l-4 border-femme-gold shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-femme-gold-dark" aria-hidden="true" />
              <p className="text-femme-gold-dark text-xs font-semibold uppercase tracking-wider">
                {vision.label}
              </p>
            </div>
            <p className="text-foreground text-base sm:text-lg leading-relaxed font-display">
              {vision.content}
            </p>
          </div>

          <div className="bg-white rounded-xl border-l-4 border-femme-gold shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-femme-gold-dark" aria-hidden="true" />
              <p className="text-femme-gold-dark text-xs font-semibold uppercase tracking-wider">
                {mission.label}
              </p>
            </div>
            <p className="text-foreground text-base sm:text-lg leading-relaxed font-display">
              {mission.content}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg text-center text-foreground mb-6">
            Our Objectives
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {objectives.map((objective, i) => (
              <div
                key={objective.label}
                className="flex items-start gap-3 bg-femme-warm-bg rounded-xl border border-femme-warm-border p-4"
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-foreground text-sm leading-relaxed">{objective.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
