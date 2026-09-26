import Link from "next/link";
import { Facebook, Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { Container } from "@/components/shared/container";
import { CONTACT, SOCIAL_LINKS, WHATSAPP_MESSAGES } from "@/lib/constants";
import { closing } from "@/lib/home-data";

const socials = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: Facebook },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: Youtube },
];

const ring =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-cream focus-visible:ring-offset-2 focus-visible:ring-offset-femme-rose-deep";

export function ClosingCta() {
  const whatsapp = CONTACT.whatsappLink(WHATSAPP_MESSAGES.general);

  return (
    <section className="grain relative isolate bg-[radial-gradient(ellipse_at_50%_0%,rgba(216,106,147,0.35),transparent_60%),linear-gradient(170deg,#8E1A47_0%,#A51F53_55%,#7A1840_100%)] text-femme-cream">
      <Container className="relative z-10 py-24 text-center md:py-32 lg:py-40">
        {/* The page's single script moment */}
        <h2 className="font-script text-[clamp(3.25rem,9vw,7rem)] leading-[1.05]">{closing.headline}</h2>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.4em] text-femme-cream/70">{closing.tagline}</p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={closing.primaryCta.href}
            className={`inline-flex min-h-[3.25rem] w-full max-w-xs items-center justify-center rounded-full bg-femme-cream px-8 text-sm font-semibold text-femme-rose-deep shadow-[inset_0_-3px_0_rgba(0,0,0,0.08)] transition-colors hover:bg-white sm:w-auto ${ring}`}
          >
            {closing.primaryCta.label}
          </Link>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-[3.25rem] w-full max-w-xs items-center justify-center gap-2 rounded-full border border-femme-cream/50 px-8 text-sm font-semibold text-femme-cream transition-colors hover:border-femme-cream hover:bg-femme-cream/10 sm:w-auto ${ring}`}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {closing.secondaryCtaLabel}
          </a>
        </div>

        <div aria-hidden="true" className="mx-auto mt-16 h-px max-w-md bg-gradient-to-r from-transparent via-femme-gold to-transparent" />

        <div className="mt-8 flex flex-col items-center gap-5 text-sm text-femme-cream/85 md:flex-row md:justify-center md:gap-10">
          <a href={CONTACT.telLink} className={`inline-flex min-h-11 items-center gap-2 rounded-sm hover:text-femme-cream ${ring}`}>
            <Phone className="size-4 text-femme-gold" aria-hidden="true" />
            {CONTACT.phone}
          </a>
          <a href={CONTACT.mailtoLink()} className={`inline-flex min-h-11 items-center gap-2 rounded-sm hover:text-femme-cream ${ring}`}>
            <Mail className="size-4 text-femme-gold" aria-hidden="true" />
            {CONTACT.email}
          </a>
          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`grid size-11 place-items-center rounded-full border border-femme-cream/25 transition-colors hover:border-femme-cream hover:bg-femme-cream hover:text-femme-rose-deep ${ring}`}
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
