import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { upcomingEvent } from "@/lib/home-data";

export function UpcomingEvent() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-femme-pink/15 rounded-full blur-[110px] pointer-events-none" />
      <Container size="md" className="relative z-10 text-center">
        <p className="text-femme-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          {upcomingEvent.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          {upcomingEvent.title}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-femme-pink-400 text-sm sm:text-base font-medium mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {upcomingEvent.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            {upcomingEvent.venue}
          </span>
        </div>
        <p className="text-femme-warm-white/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {upcomingEvent.description}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8 py-4"
        >
          <Link href="/events">
            Register Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
