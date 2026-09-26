import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { CountUp } from "./count-up";
import { Eyebrow } from "./eyebrow";
import { numbersIntro, stats } from "@/lib/home-data";

// Gold hairline between rows: every stat but the last on mobile; top row only from sm.
const ruleClasses = ["border-b", "border-b", "border-b sm:border-b-0", ""];

export function NumbersSection() {
  return (
    <section className="bg-femme-charcoal py-24 text-femme-cream md:py-32 lg:py-40">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <Eyebrow tone="gold">{numbersIntro.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02]">
            {numbersIntro.titleLead}
            <br />
            <em className="text-femme-gold">{numbersIntro.titleEmphasis}</em>
          </h2>
          <p className="mt-6 max-w-[36ch] leading-[1.7] text-femme-cream/60">{numbersIntro.body}</p>
        </Reveal>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 110}
              className={cn(
                "flex flex-col-reverse border-femme-gold/25 py-10",
                ruleClasses[i],
                i % 2 === 0 ? "sm:pr-8" : "sm:pl-8",
                i < 2 ? "sm:pb-12 sm:pt-0" : "sm:pb-0 sm:pt-12",
                i === 0 && "pt-0"
              )}
            >
              <dt className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-femme-gold">
                {stat.label}
              </dt>
              <dd className="font-display text-[clamp(4rem,12vw,9rem)] font-normal leading-[0.85] tracking-[-0.03em] lining-nums tabular-nums lg:text-[clamp(4rem,8.5vw,9rem)]">
                <CountUp value={stat.value} />
                {stat.plus && (
                  <span aria-hidden="true" className="ml-1 align-top text-[0.42em] text-femme-gold">
                    +
                  </span>
                )}
                {stat.plus && <span className="sr-only"> or more</span>}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
