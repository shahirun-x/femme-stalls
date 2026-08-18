import Link from "next/link";
import type { ElementType } from "react";
import { MessageCircle, Phone, MapPin, Calendar, Truck, Sparkles, ArrowRight } from "lucide-react";
import { StallImage } from "./stall-image";
import { ClientContactCard } from "./client-contact-card";
import { ClientPageFooter } from "./client-page-footer";
import { categoryIcon, categoryLabels, orderMethodLabels } from "@/lib/clients/utils";
import type { OrderMethod, StallClient } from "@/lib/clients/types";

interface ClientIntroProps {
  client: StallClient;
}

const orderMethodIcons: Record<OrderMethod, ElementType> = {
  whatsapp: MessageCircle,
  phone: Phone,
  visit: MapPin,
  event: Calendar,
  delivery: Truck,
};

export function ClientIntro({ client }: ClientIntroProps) {
  return (
    <>
      {/* A — Hero */}
      <section className="bg-[var(--client-secondary)] px-4 py-14 sm:py-16 text-center">
        <div className="max-w-xl mx-auto animate-fade-in-up">
          <div className="relative h-[120px] w-[120px] sm:h-40 sm:w-40 mx-auto rounded-full overflow-hidden border-4 border-[var(--client-primary)] bg-white shadow-md">
            <StallImage
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              sizes="160px"
              className="object-cover"
              icon={categoryIcon[client.category]}
            />
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--client-text)] mt-6">
            {client.name}
          </h1>
          <p className="text-lg text-[var(--client-text-secondary)] mt-2">{client.tagline}</p>
        </div>
      </section>

      {/* B — About */}
      <section className="bg-[var(--client-bg)] px-4 py-14 sm:py-16">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)] mb-4">About Us</h2>
          <p className="text-base sm:text-lg leading-[1.7] text-[var(--client-text)]">{client.description}</p>
          <p className="mt-4 text-sm text-[var(--client-text-secondary)]">
            Founded by <span className="font-semibold text-[var(--client-text)]">{client.ownerName}</span>
          </p>
        </div>
      </section>

      {/* C — What We Offer */}
      <section className="bg-[var(--client-secondary)] px-4 py-14 sm:py-16">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)]">What We Offer</h2>

          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[var(--client-primary)] font-semibold text-sm border border-[var(--client-primary)]/30">
            {categoryLabels[client.category]}
          </span>

          {client.acceptsCustomOrders && (
            <div className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3.5 text-base font-medium text-[var(--client-text)]">
              <Sparkles className="w-5 h-5 text-[var(--client-primary)] shrink-0" />
              We take custom orders!
            </div>
          )}

          <div className="space-y-3">
            <p className="font-semibold text-[var(--client-text)]">How to buy:</p>
            <ul className="space-y-2.5">
              {client.orderMethods.map((method) => {
                const Icon = orderMethodIcons[method];
                return (
                  <li key={method} className="flex items-center gap-3 text-base text-[var(--client-text)]">
                    <Icon className="w-5 h-5 text-[var(--client-primary)] shrink-0" />
                    {orderMethodLabels[method]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* D — Contact & Location */}
      <section className="bg-[var(--client-bg)] px-4 py-14 sm:py-16">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)] mb-6">
            Contact & Location
          </h2>
          <ClientContactCard client={client} />
        </div>
      </section>

      {/* E — Upgrade CTA / Nav cards */}
      {client.pagesEnabled === 1 ? (
        <section className="bg-[var(--client-secondary)] px-4 py-10 text-center">
          <p className="max-w-md mx-auto text-base font-medium text-[var(--client-text)]">
            ✨ Want to see our products? Coming soon!
          </p>
        </section>
      ) : (
        <section className="bg-[var(--client-secondary)] px-4 py-14 sm:py-16">
          <div className="max-w-xl mx-auto grid gap-4 sm:grid-cols-2">
            <Link
              href={`/stalls/${client.slug}/products`}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="font-display text-lg font-semibold text-[var(--client-text)]">Our Products</span>
              <ArrowRight className="w-5 h-5 text-[var(--client-primary)] shrink-0" />
            </Link>
            {client.pagesEnabled >= 3 && (
              <Link
                href={`/stalls/${client.slug}/orders`}
                className="flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-display text-lg font-semibold text-[var(--client-text)]">Reviews & Orders</span>
                <ArrowRight className="w-5 h-5 text-[var(--client-primary)] shrink-0" />
              </Link>
            )}
          </div>
        </section>
      )}

      {/* F — Footer */}
      <ClientPageFooter />
    </>
  );
}
