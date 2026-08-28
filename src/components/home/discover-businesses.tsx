import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { discoverCategories } from "@/lib/home-data";

export function DiscoverBusinesses() {
  return (
    <section className="bg-femme-warm-white py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-[30fr_70fr] lg:items-center lg:gap-12">
        <div>
          <h2 className="font-display text-xl font-bold text-femme-pink md:text-2xl">
            Discover Femme Businesses
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 md:text-base">
            Find amazing products and services offered by women entrepreneurs in our network.
          </p>
          <Button
            asChild
            className="mt-5 rounded-lg bg-femme-dark uppercase tracking-wide hover:bg-femme-dark-card"
          >
            <Link href="/members">
              View Member Directory
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <ul className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible">
          {discoverCategories.map((cat) => (
            <li key={cat.name} className="w-40 shrink-0 snap-start lg:w-auto">
              <div className="overflow-hidden rounded-lg ring-1 ring-femme-warm-border">
                <Image
                  src={cat.image}
                  alt={`${cat.name} by Femme Stalls members`}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-femme-dark">{cat.name}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
