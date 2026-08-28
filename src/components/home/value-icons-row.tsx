import { Container } from "@/components/shared/container";
import { Icon } from "@/components/shared/icon";
import { valueItems } from "@/lib/home-data";

export function ValueIconsRow() {
  return (
    <section className="bg-femme-warm-bg py-14 md:py-16">
      <Container size="xl">
        <h2 className="sr-only">What Femme Stalls offers its members</h2>
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {valueItems.map((item) => (
            <li key={item.title} className="flex flex-col items-center text-center">
              <span className="flex size-16 items-center justify-center rounded-full border-2 border-femme-pink/70">
                <Icon name={item.icon} className="size-7 text-femme-pink" />
              </span>
              <h3 className="mt-3 text-xs font-bold uppercase tracking-wide text-femme-pink">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
