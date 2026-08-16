import React from "react";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { pastEvents, pastEventsIntro, categoryColors } from "@/lib/events-data";

export function PastEvents() {
  return (
    <section id="past-events" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="The Archive" title="Past Events" subtitle={pastEventsIntro} />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {pastEvents.map((event) => {
            const colors = categoryColors[event.category];
            return (
              <article
                key={event.title}
                className="bg-white rounded-xl border border-femme-warm-border shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-femme-pink-300 via-femme-pink-400 to-femme-gold/60 flex flex-col items-center justify-center gap-1.5 text-white/90">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  <span className="text-[10px] sm:text-xs font-medium">Photos coming soon</span>
                </div>
                <div className="p-4 sm:p-5">
                  <span
                    className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2 ${colors.pill}`}
                  >
                    {event.category}
                  </span>
                  <h3 className="font-display font-semibold text-sm sm:text-base text-foreground mb-1 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3">{event.date}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-femme-pink font-semibold text-xs sm:text-sm hover:text-femme-pink-700 transition-colors"
                  >
                    View Report
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
