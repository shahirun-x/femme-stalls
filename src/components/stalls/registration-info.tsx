import React from "react";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { registrationChecklist, pricingTiers, pricingNote } from "@/lib/stalls-data";

export function RegistrationInfo() {
  return (
    <section id="register" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Get Started" title="How to Register a Stall" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-10">
          <ul className="space-y-4">
            {registrationChecklist.map((step) => (
              <li key={step.label} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span className="text-foreground text-sm sm:text-base leading-relaxed">
                  {step.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="bg-white rounded-xl border-t-4 border-femme-gold shadow-sm p-6 sm:p-8">
            <h3 className="font-display font-semibold text-xl text-foreground mb-5">
              Stall Pricing
            </h3>
            <div className="space-y-4 mb-5">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-center justify-between border-b border-femme-warm-border pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-medium text-foreground text-sm sm:text-base">
                    {tier.name}
                  </span>
                  <span className="text-femme-pink font-semibold text-sm sm:text-base">
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">{pricingNote}</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-femme-pink font-semibold hover:text-femme-pink-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contact the Coordinator
          </Link>
        </div>
      </Container>
    </section>
  );
}
