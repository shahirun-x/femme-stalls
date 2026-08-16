import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function EventsCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-femme-pink/15 rounded-full blur-[110px] pointer-events-none" />
      <Container size="md" className="relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          Don&apos;t Miss Out
        </h2>
        <p className="text-femme-warm-white/80 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Stay updated on all events — join Femme Stalls or follow us on WhatsApp
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8"
          >
            <Link href="/members#register">Join Now</Link>
          </Button>
          <Button
            asChild
            variant="outlineGold"
            size="lg"
            className="w-full sm:w-auto border-2 border-femme-gold text-femme-gold hover:bg-femme-gold/15 rounded-full px-8"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
