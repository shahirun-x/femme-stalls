import React from "react";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { joinNote, joinBenefits, joinTimeNote, whatsappNumber } from "@/lib/contact-data";

export function JoinSection() {
  return (
    <section id="join" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Membership" title="Join Femme Stalls" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-femme-gold-dark bg-femme-gold/10 border border-femme-gold/30 rounded-lg px-4 py-3 mb-6">
              {joinNote}
            </p>
            <ul className="space-y-3 mb-6">
              {joinBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-foreground text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm font-medium">{joinTimeNote}</p>
          </div>

          <div className="bg-white border-2 border-femme-pink-200 rounded-2xl shadow-lg p-6 sm:p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Ready to Join?</h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
              Fill out the membership form and a coordinator will contact you on WhatsApp.
            </p>
            <Link
              href="/members#register"
              className="inline-flex items-center gap-1.5 bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8 py-3.5 text-base transition-colors mb-5"
            >
              Go to Registration Form
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-femme-pink" aria-hidden="true" />
              Or contact us directly on WhatsApp: {whatsappNumber}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
