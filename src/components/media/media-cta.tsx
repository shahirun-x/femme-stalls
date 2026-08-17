import React from "react";
import { Mail, MessageCircle, Download } from "lucide-react";
import { Container } from "@/components/shared/container";
import { pressContact } from "@/lib/media-data";

export function MediaCTA() {
  return (
    <section id="press-contact" className="py-16 md:py-20 lg:py-24 bg-femme-warm-white scroll-mt-20">
      <Container size="sm" className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Press & Media Contact
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-xl mx-auto">
          For press enquiries, interview requests, media partnerships or hi-resolution images,
          please contact:
        </p>

        <div className="bg-white border-2 border-femme-gold rounded-xl p-6 sm:p-8 max-w-md mx-auto mb-8">
          <p className="font-display font-semibold text-lg text-foreground mb-4">
            {pressContact.role}
          </p>
          <div className="space-y-3 text-left">
            <p className="flex items-center gap-2.5 text-sm text-foreground">
              <Mail className="w-4 h-4 text-femme-pink shrink-0" aria-hidden="true" />
              {pressContact.email}
            </p>
            <p className="flex items-center gap-2.5 text-sm text-foreground">
              <MessageCircle className="w-4 h-4 text-femme-pink shrink-0" aria-hidden="true" />
              {pressContact.whatsapp}
            </p>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-femme-pink hover:bg-femme-pink-700 text-white font-semibold rounded-full px-6 py-3 text-sm transition-colors"
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Download Press Kit
        </a>
      </Container>
    </section>
  );
}
