import React from "react";
import { MessageCircle, Instagram, Facebook, Youtube, Twitter, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { socialLinks, type SocialLink } from "@/lib/contact-data";

const iconMap: Record<SocialLink["icon"], LucideIcon> = {
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
};

export function SocialLinks() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-femme-warm-bg">
      <Container size="sm" className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Follow Femme Stalls
        </h2>

        <div className="flex items-center justify-center gap-4 mb-10">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.colorClass}`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <p className="text-muted-foreground text-sm mb-4">
          Join our WhatsApp group for the latest updates
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold rounded-full px-6 py-3 text-sm mb-10 hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Join WhatsApp Group
        </a>

        <p className="font-script text-femme-gold text-lg">From Kilakarai, with love.</p>
      </Container>
    </section>
  );
}
