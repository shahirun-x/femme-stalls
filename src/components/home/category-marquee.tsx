import { marqueeCategories } from "@/lib/home-data";

/**
 * Thin full-bleed band with an infinite, slow marquee. The list is rendered
 * twice and the track slides by exactly half its width for a seamless loop;
 * the duplicate is hidden from assistive tech. Paused for reduced motion.
 */
export function CategoryMarquee() {
  return (
    <section aria-label="Categories in the network" className="bg-femme-charcoal text-femme-cream">
      {/* overflow-hidden is the marquee's own viewport, not a layout band-aid */}
      <div className="overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)] md:py-6">
        <div className="animate-marquee-slow flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 items-center">
              {marqueeCategories.map((category) => (
                <li key={category} className="flex items-center">
                  <span className="whitespace-nowrap px-6 font-display text-[clamp(1.2rem,2.4vw,1.9rem)] italic md:px-9">
                    {category}
                  </span>
                  <span aria-hidden="true" className="text-[0.7rem] text-femme-gold">
                    ◆
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
