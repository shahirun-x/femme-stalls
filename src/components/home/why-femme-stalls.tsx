import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { impactStats, whyFlowSteps } from "@/lib/home-data";

export function WhyFemmeStalls() {
  return (
    <section className="bg-femme-warm-bg py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="font-display text-xl font-bold text-femme-pink md:text-2xl">
              Why Femme Stalls?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-700 md:text-base">
              We don&rsquo;t just organise stalls.
              <br />
              We organise people, businesses and opportunities.
            </p>
          </div>

          <ol className="-mx-4 flex items-start gap-1 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-wrap lg:justify-end lg:overflow-visible lg:px-0">
            {whyFlowSteps.map((step, i) => (
              <Fragment key={step.label}>
                <li className="flex w-16 shrink-0 flex-col items-center text-center">
                  <span className="flex size-10 items-center justify-center rounded-full bg-femme-pink text-white">
                    <Icon name={step.icon} className="size-5" strokeWidth={2} />
                  </span>
                  <span className="mt-2 text-[11px] font-medium text-femme-dark">{step.label}</span>
                </li>
                {i < whyFlowSteps.length - 1 && (
                  <ChevronRight
                    className="mt-2.5 size-4 shrink-0 text-femme-pink/60"
                    aria-hidden="true"
                  />
                )}
              </Fragment>
            ))}
          </ol>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-y-8 rounded-2xl bg-white/70 py-8 ring-1 ring-femme-warm-border sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-femme-warm-border">
          {impactStats.map((stat) => (
            <li key={stat.label} className="px-4 text-center">
              <span className="block font-display text-2xl font-bold text-femme-pink md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-sm text-gray-600">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
