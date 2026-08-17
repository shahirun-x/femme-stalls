import React from "react";
import { MapPin, MessageCircle, Mail, Clock, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { contactDetails, type ContactDetail } from "@/lib/contact-data";

const iconMap: Record<ContactDetail["icon"], LucideIcon> = {
  MapPin,
  MessageCircle,
  Mail,
  Clock,
};

export function ContactDetails() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-white">
      <Container size="lg">
        <SectionHeader badge="Reach Us" title="Contact Us" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            {contactDetails.map((detail) => {
              const Icon = iconMap[detail.icon];
              const isWhatsapp = detail.icon === "MessageCircle";
              return (
                <div key={detail.label} className="flex items-center gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-full bg-femme-pink-100 text-femme-pink flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-femme-gold-dark mb-0.5">
                      {detail.label}
                    </p>
                    {isWhatsapp ? (
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold rounded-full px-4 py-1.5 mt-1 hover:opacity-90 transition-opacity"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm sm:text-base">{detail.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="aspect-video rounded-xl bg-femme-warm-bg border-2 border-femme-gold flex flex-col items-center justify-center gap-2 text-center p-6">
            <MapPin className="w-8 h-8 text-femme-pink" aria-hidden="true" />
            <p className="font-display font-semibold text-foreground">Kilakarai, Tamil Nadu</p>
            <p className="text-muted-foreground text-xs">Interactive map will be added soon</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
