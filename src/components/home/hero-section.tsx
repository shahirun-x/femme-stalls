"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { heroStats } from "@/lib/home-data";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-femme-dark via-femme-dark-deep to-femme-dark text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-femme-pink/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-femme-gold/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-femme-pink-700/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <Container size="md" className="relative z-10 text-center">
        <div className="mb-6 flex justify-center opacity-0 animate-[fade-in-up_0.6s_ease-out_0ms_forwards]">
          <Logo variant="stacked" size="xl" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-femme-dark-card border border-femme-gold/40 text-femme-gold text-xs sm:text-sm font-medium mb-6 opacity-0 animate-[fade-in-up_0.6s_ease-out_100ms_forwards]">
          <Sparkles className="w-3.5 h-3.5 text-femme-gold-light" />
          <span>Connect &bull; Collaborate &bull; Grow</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide text-white mb-4 leading-tight opacity-0 animate-[fade-in-up_0.6s_ease-out_200ms_forwards]">
          FEMME <span className="text-femme-pink">STALLS</span>
        </h1>

        <p className="font-script text-2xl sm:text-4xl lg:text-5xl text-femme-gold mb-6 opacity-0 animate-[fade-in-up_0.6s_ease-out_300ms_forwards]">
          Organise the Unorganised
        </p>

        <p className="font-body text-base sm:text-lg lg:text-xl text-femme-warm-white/80 max-w-md sm:max-w-2xl mx-auto mb-10 leading-relaxed font-light opacity-0 animate-[fade-in-up_0.6s_ease-out_400ms_forwards]">
          A network of women entrepreneurs and aspiring entrepreneurs from Kilakarai and beyond.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-0 animate-[fade-in-up_0.6s_ease-out_400ms_forwards]">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8 py-4 text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link href="/members#register">
              Join Femme Stalls
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outlineGold"
            size="lg"
            className="w-full sm:w-auto border-2 border-femme-gold text-femme-gold hover:bg-femme-gold/15 rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-105"
          >
            <Link href="/about">Explore Our Story</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 text-center opacity-0 animate-[fade-in-up_0.6s_ease-out_400ms_forwards]">
          {heroStats.map((stat) => (
            <div key={stat.label} className="p-3">
              <div className="font-display text-2xl sm:text-3xl font-bold text-femme-pink">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow text-femme-gold/70">
        <ChevronDown className="w-6 h-6" aria-hidden="true" />
      </div>
    </section>
  );
}
