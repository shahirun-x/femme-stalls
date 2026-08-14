import React from "react";
import { Briefcase, House, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import {
  whoCanParticipateIntro,
  whoCanParticipateClosing,
  participantTypes,
  type ParticipantType,
} from "@/lib/stalls-data";

const iconMap: Record<ParticipantType["icon"], LucideIcon> = {
  Briefcase,
  House,
  Sparkles,
};

export function WhoCanParticipate() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="md">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who Can Participate?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {whoCanParticipateIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {participantTypes.map((type) => {
            const Icon = iconMap[type.icon];
            return (
              <div
                key={type.title}
                className="bg-white rounded-xl border-l-4 border-femme-pink shadow-sm p-6"
              >
                <div className="w-11 h-11 rounded-full bg-femme-gold/15 text-femme-gold-dark flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center font-display italic text-foreground text-base sm:text-lg">
          {whoCanParticipateClosing}
        </p>
      </Container>
    </section>
  );
}
