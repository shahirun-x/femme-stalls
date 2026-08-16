import React from "react";
import Link from "next/link";
import { Target, Calendar, GraduationCap, Megaphone, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { partnershipTypes, becomePartnerIntro, type PartnershipType } from "@/lib/partners-data";

const iconMap: Record<PartnershipType["icon"], LucideIcon> = {
  Target,
  Calendar,
  GraduationCap,
  Megaphone,
};

export function BecomePartner() {
  return (
    <section id="become-partner" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="lg">
        <SectionHeader badge="Get Involved" title="Partner With Femme Stalls" subtitle={becomePartnerIntro} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {partnershipTypes.map((type) => {
            const Icon = iconMap[type.icon];
            return (
              <div
                key={type.title}
                className="bg-white rounded-xl border-t-[3px] border-femme-pink shadow-sm p-5 text-center"
              >
                <div className="w-11 h-11 mx-auto rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-sm sm:text-base text-foreground mb-1.5">
                  {type.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4">To discuss partnerships, contact us</p>
          <Button
            asChild
            size="lg"
            className="bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-8"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
