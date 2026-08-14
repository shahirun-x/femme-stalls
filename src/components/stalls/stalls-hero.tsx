import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { stallsHero } from "@/lib/stalls-data";

export function StallsHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[45vh] md:min-h-[55vh] bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white py-20 px-4 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(rgba(233,30,139,0.09)_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-femme-pink/15 rounded-full blur-[110px] pointer-events-none" />

      <Container size="md" className="relative z-10 text-center">
        <p className="text-femme-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          {stallsHero.eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
          {stallsHero.title}
        </h1>
        <p className="text-femme-warm-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {stallsHero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8"
          >
            <Link href="#register">
              Register for Next Stall
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outlineGold"
            size="lg"
            className="w-full sm:w-auto border-2 border-femme-gold text-femme-gold hover:bg-femme-gold/15 rounded-full px-8"
          >
            <Link href="#history">View Past Events</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
