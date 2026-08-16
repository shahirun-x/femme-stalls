import React from "react";
import { Wallet, Handshake, HeartHandshake, RefreshCcw, Globe, Info, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { femmeiOffers, femmeiIntro, investorsDisclaimer, type FemmeiOffer } from "@/lib/opportunities-data";

const iconMap: Record<FemmeiOffer["icon"], LucideIcon> = {
  Wallet,
  Handshake,
  HeartHandshake,
  RefreshCcw,
  Globe,
};

export function FemmeiInvestors() {
  return (
    <section id="investors" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Investment Network" title="FEMMEI Investors" subtitle={femmeiIntro} />

        <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 mb-10">
          {femmeiOffers.map((offer) => {
            const Icon = iconMap[offer.icon];
            return (
              <div
                key={offer.title}
                className="shrink-0 w-56 md:w-auto bg-white rounded-xl border-t-[3px] border-femme-gold shadow-sm p-5 text-center"
              >
                <div className="w-11 h-11 mx-auto rounded-full bg-femme-gold/15 text-femme-gold-dark flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground mb-1.5">
                  {offer.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{offer.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-start gap-3 bg-femme-warm-bg border-l-4 border-femme-gold rounded-xl p-5 sm:p-6 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-femme-gold-dark shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-foreground text-sm leading-relaxed">{investorsDisclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
