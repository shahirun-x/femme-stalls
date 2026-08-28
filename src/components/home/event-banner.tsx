import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { upcomingEvent } from "@/lib/home-data";

export function EventBanner() {
  return (
    <section className="bg-gradient-to-r from-femme-pink-100 via-femme-pink-50 to-[#FFDCC4]">
      <Container className="flex flex-col items-center gap-8 py-12 text-center md:flex-row md:justify-between md:gap-10 md:py-14 md:text-left">
        <Image
          src={upcomingEvent.logo.src}
          alt={upcomingEvent.logo.alt}
          width={300}
          height={300}
          className="h-32 w-32 shrink-0 md:h-36 md:w-36"
        />

        <div className="max-w-xl">
          <p className="font-display text-base uppercase tracking-wide text-femme-pink-800 md:text-lg">
            {upcomingEvent.title}
          </p>
          <p className="mt-1 font-display text-3xl font-bold text-femme-dark md:text-4xl">
            {upcomingEvent.dates}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-femme-dark/75 md:text-base">
            {upcomingEvent.description}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Button asChild className="rounded-lg bg-femme-pink-700 uppercase tracking-wide hover:bg-femme-pink-800">
              <Link href={upcomingEvent.primaryCta.href}>{upcomingEvent.primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-femme-dark text-femme-dark uppercase tracking-wide hover:bg-femme-dark hover:text-white"
            >
              <Link href={upcomingEvent.secondaryCta.href}>{upcomingEvent.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>

        <Image
          src="/images/placeholder/registrations-badge.png"
          alt={upcomingEvent.registrationStatus}
          width={200}
          height={200}
          className="h-28 w-28 shrink-0 md:h-32 md:w-32"
        />
      </Container>
    </section>
  );
}
