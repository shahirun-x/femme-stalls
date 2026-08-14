import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { membershipBenefits } from "@/lib/home-data";

export function BecomeMemberCTA() {
  return (
    <section id="become-member" className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative w-full max-w-sm aspect-[16/10] rounded-2xl bg-gradient-to-br from-femme-dark via-femme-dark-card to-femme-dark-deep border-2 border-femme-gold/50 shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-femme-pink/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-femme-gold/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <svg viewBox="0 0 100 100" className="w-10 h-10" aria-hidden="true">
                  <path
                    d="M50 28 C42 14, 20 18, 20 38 C20 56, 46 72, 50 76 C54 72, 80 56, 80 38 C80 18, 58 14, 50 28 Z"
                    fill="#E91E8B"
                  />
                </svg>
                <span className="text-[10px] tracking-widest text-femme-gold font-semibold uppercase">
                  Since 2025
                </span>
              </div>
              <div className="relative z-10">
                <p className="font-display font-extrabold text-2xl sm:text-3xl tracking-wider text-femme-pink leading-none">
                  FEMME STALLS
                </p>
                <p className="font-script text-femme-gold text-lg sm:text-xl mt-1">
                  Member
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Become a Member
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              Join a growing network of women who are learning, earning and supporting each other.
            </p>
            <ul className="space-y-3 mb-8">
              {membershipBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                    <Check className="w-3 h-3" aria-hidden="true" />
                  </span>
                  <span className="text-foreground text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8"
            >
              <Link href="/members#register">
                Join Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
