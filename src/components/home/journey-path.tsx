import { GraduationCap, Sparkles, Sprout, Users, Wallet, type LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { journeyIntro, journeySteps, type JourneyIcon } from "@/lib/home-data";

const icons: Record<JourneyIcon, LucideIcon> = { Users, Sparkles, GraduationCap, Wallet, Sprout };

export function JourneyPath() {
  return (
    <section className="overflow-x-clip bg-femme-cream py-24 text-femme-charcoal md:py-32 lg:py-40">
      <Container size="md">
        <Reveal className="max-w-3xl">
          <Eyebrow>{journeyIntro.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.015em]">
            {journeyIntro.titleLead}{" "}
            <em className="font-medium text-femme-rose sm:block">{journeyIntro.titleEmphasis}</em>
          </h2>
          {/* Drop cap — the page's one editorial initial */}
          <p className="mt-8 max-w-[60ch] text-[17px] leading-[1.75] text-femme-charcoal/75 first-letter:float-left first-letter:mr-3 first-letter:mt-1.5 first-letter:font-display first-letter:text-[4.6rem] first-letter:font-bold first-letter:leading-[0.78] first-letter:text-femme-rose">
            {journeyIntro.body}
          </p>
        </Reveal>

        <ol className="relative mt-20 md:mt-28">
          {/* Continuous gold spine: left on mobile, centred on desktop */}
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-femme-gold/0 via-femme-gold/70 to-femme-gold/0 md:left-1/2 md:-translate-x-1/2"
          />

          {journeySteps.map((step, i) => {
            const Icon = icons[step.icon];
            const onRight = i % 2 === 1;
            return (
              <li key={step.title} className="relative pl-12 md:grid md:grid-cols-2 md:gap-20 md:pl-0 [&:not(:first-child)]:mt-16 md:[&:not(:first-child)]:mt-6">
                {/* Node on the spine */}
                <span
                  aria-hidden="true"
                  className="absolute left-[5px] top-3 size-[13px] rounded-full border-2 border-femme-gold bg-femme-cream md:left-1/2 md:-translate-x-1/2"
                />

                <Reveal
                  delay={i * 90}
                  className={cn("relative", onRight ? "md:col-start-2" : "md:col-start-1 md:text-right")}
                >
                  {/* Oversized ghosted numeral */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -top-12 select-none font-display text-[clamp(5.5rem,11vw,9rem)] font-bold leading-none text-femme-rose/[0.08] md:-top-16",
                      onRight ? "left-0 md:-left-3" : "left-0 md:left-auto md:-right-3"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className={cn("relative flex flex-col", !onRight && "md:items-end")}>
                    <span className="grid size-11 place-items-center rounded-full border border-femme-rose/25 bg-femme-cream text-femme-rose">
                      <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-[clamp(1.6rem,2.8vw,2.35rem)] leading-tight">{step.title}</h3>
                    <p className="mt-2 max-w-[36ch] leading-[1.7] text-femme-charcoal/70">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
