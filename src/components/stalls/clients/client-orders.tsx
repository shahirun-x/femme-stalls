import { MessageCircle } from "lucide-react";
import { StallImage } from "./stall-image";
import { TestimonialCard } from "./testimonial-card";
import { OrderForm } from "./order-form";
import { ClientPageNav } from "./client-page-nav";
import { ClientPageFooter } from "./client-page-footer";
import { whatsappLink } from "@/lib/clients/utils";
import type { StallClient } from "@/lib/clients/types";

interface ClientOrdersProps {
  client: StallClient;
}

export function ClientOrders({ client }: ClientOrdersProps) {
  return (
    <>
      {/* A — Reviews */}
      <section className="bg-[var(--client-bg)] px-4 py-14 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)] text-center mb-8">
            What Our Customers Say
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {client.testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* B — Customer gallery */}
      {client.customerPhotos.length > 0 && (
        <section className="bg-[var(--client-secondary)] px-4 py-14 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)] text-center mb-8">
              Our Happy Customers
            </h2>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible">
              {client.customerPhotos.map((photo, i) => (
                <div
                  key={photo}
                  className="relative aspect-square w-40 sm:w-full shrink-0 snap-start rounded-2xl overflow-hidden"
                >
                  <StallImage src={photo} alt={`${client.name} customer ${i + 1}`} fill icon="user" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* C — Founder story */}
      {client.founderStory && (
        <section className="bg-[var(--client-secondary)] px-4 py-14 sm:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)] mb-6">Our Story</h2>
            {client.founderImages && client.founderImages[0] && (
              <div className="relative h-28 w-28 mx-auto rounded-full overflow-hidden border-4 border-white mb-6">
                <StallImage src={client.founderImages[0]} alt={client.ownerName} fill icon="user" />
              </div>
            )}
            <p className="text-base sm:text-lg leading-[1.7] text-[var(--client-text)] text-left">
              {client.founderStory}
            </p>
          </div>
        </section>
      )}

      {/* D — Special offer */}
      {client.specialOffer && (
        <section className="bg-[var(--client-bg)] px-4 py-12">
          <div className="max-w-xl mx-auto rounded-2xl bg-[var(--client-primary)] p-6 text-center space-y-4 shadow-md">
            <p className="text-xl font-bold text-white">{client.specialOffer}</p>
            <a
              href={whatsappLink(client.whatsapp, `Hi! I'd like to grab your special offer — I saw it on Femme Stalls.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-base transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Grab This Offer
            </a>
          </div>
        </section>
      )}

      {/* E — Quick order form */}
      <section className="bg-[var(--client-bg)] px-4 py-14 sm:py-16">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)] text-center mb-6">
            Quick Order
          </h2>
          <OrderForm client={client} />
        </div>
      </section>

      {/* F — Navigation */}
      <div className="bg-[var(--client-bg)]">
        <ClientPageNav
          back={{ label: "Back to Products", href: `/stalls/${client.slug}/products` }}
          forward={{ label: "Back to Intro", href: `/stalls/${client.slug}` }}
        />
      </div>

      <ClientPageFooter />
    </>
  );
}
