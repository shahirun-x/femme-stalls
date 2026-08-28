import Image from "next/image";
import Link from "next/link";
import { Briefcase, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { WaveSeparator } from "@/components/shared/wave-separator";
import { hero } from "@/lib/home-data";

function Brushstroke() {
  return (
    <svg
      viewBox="0 0 220 24"
      className="mt-3 h-4 w-52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 14c26-9 52-9 78-3s52 12 78 6 44-13 56-9"
        stroke="#E91E8B"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-femme-warm-white">
      <Container className="grid items-center gap-10 py-14 md:grid-cols-[45fr_55fr] md:gap-12 md:py-20 lg:py-24">
        {/* Text column */}
        <div className="text-center md:text-left">
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-[#B5225B] md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>

          <div className="mt-4 flex flex-col items-center md:items-start">
            <p className="font-script text-2xl leading-snug text-femme-dark md:text-3xl">
              {hero.scriptLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <Brushstroke />
          </div>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground md:text-sm">
            {hero.taglineDots}
          </p>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-femme-dark/80 md:mx-0">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Button
              asChild
              size="lg"
              className="rounded-lg uppercase tracking-wide"
            >
              <Link href={hero.primaryCta.href}>
                <UserPlus className="size-4" />
                {hero.primaryCta.label}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-lg border-femme-dark text-femme-dark uppercase tracking-wide hover:bg-femme-dark hover:text-white"
            >
              <Link href={hero.secondaryCta.href}>
                <Briefcase className="size-4" />
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* Image column */}
        <div className="relative mx-auto w-full max-w-xl md:max-w-none">
          <div className="overflow-hidden rounded-[2rem] rounded-tr-[5rem] rounded-br-[7rem] shadow-xl ring-1 ring-femme-warm-border">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={800}
              height={600}
              priority
              className="h-[56vw] max-h-[460px] w-full object-cover md:h-full"
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 -z-10 hidden size-40 rounded-full bg-femme-pink-100 md:block"
            aria-hidden="true"
          />
        </div>
      </Container>

      <WaveSeparator color="#FDF2F8" />
    </section>
  );
}
