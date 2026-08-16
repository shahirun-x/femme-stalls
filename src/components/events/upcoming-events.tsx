import React from "react";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { upcomingEventsList, upcomingEventsNote, categoryColors } from "@/lib/events-data";

export function UpcomingEvents() {
  return (
    <section id="upcoming" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="What's Next" title="Upcoming Events" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6">
          {upcomingEventsList.map((event) => {
            const colors = categoryColors[event.category];
            return (
              <div
                key={event.title}
                className="relative flex bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <span aria-hidden="true" className={`w-1.5 shrink-0 ${colors.bar}`} />
                <div className="flex-1 p-5 sm:p-6 flex gap-4">
                  <div className="shrink-0 w-16 h-16 rounded-lg border-2 border-femme-pink-200 bg-white flex flex-col items-center justify-center">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-femme-pink">
                      {event.month}
                    </span>
                    <span className="font-display text-lg font-bold text-foreground leading-none">
                      {event.day}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1.5">
                      {event.title}
                    </h3>
                    <span
                      className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2 ${colors.pill}`}
                    >
                      {event.category}
                    </span>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-2">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                        {event.venue}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-femme-gold-dark bg-femme-gold/15 px-2 py-0.5 rounded-full">
                        {event.audience}
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-femme-pink font-semibold text-sm hover:text-femme-pink-700 transition-colors"
                      >
                        Register
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-muted-foreground text-xs sm:text-sm text-center">{upcomingEventsNote}</p>
      </Container>
    </section>
  );
}
