import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { footerBanner } from "@/lib/home-data";

export function FooterBanner() {
  return (
    <section className="bg-gradient-to-r from-femme-pink-700 via-femme-pink-600 to-femme-pink-800">
      <Container className="flex flex-col items-center gap-4 py-14 text-center">
        <p className="font-script text-3xl text-white md:text-4xl">{footerBanner.headline}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-white/80">{footerBanner.subline}</p>
        <ul className="mt-2 flex items-center gap-4">
          {footerBanner.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full bg-white text-femme-pink-700 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-femme-pink-700"
              >
                <Icon name={social.icon} className="size-5" strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
