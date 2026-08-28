import Image from "next/image";
import { Container } from "@/components/shared/container";
import { partnerCategories } from "@/lib/home-data";

export function PartnersStrip() {
  return (
    <section className="bg-white py-12 md:py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="inline-block border-b-2 border-femme-pink/40 pb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                {cat.title}
              </h2>
              <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                {cat.logos.map((logo, i) => (
                  <li key={`${cat.title}-${i}`}>
                    <Image
                      src={logo.image}
                      alt={logo.name}
                      width={200}
                      height={80}
                      className="h-9 w-auto opacity-80"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
