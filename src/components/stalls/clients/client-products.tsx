"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { ClientPageNav } from "./client-page-nav";
import { ClientPageFooter } from "./client-page-footer";
import { whatsappLink } from "@/lib/clients/utils";
import type { StallClient } from "@/lib/clients/types";

interface ClientProductsProps {
  client: StallClient;
}

export function ClientProducts({ client }: ClientProductsProps) {
  const categories = ["All", ...(client.productCategories ?? [])];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All" ? client.products : client.products.filter((p) => p.category === activeCategory);

  const customOrderMessage = `Hi! I'd like to discuss a custom order with ${client.name} — I saw your page on Femme Stalls.`;

  return (
    <>
      {/* A — Header + filters */}
      <section className="bg-[var(--client-bg)] px-4 pt-10 pb-6 text-center">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--client-text)]">{client.name}</h1>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-[var(--client-primary)] mt-1">
          Our Products
        </h2>

        {categories.length > 1 && (
          <div className="mt-6 -mx-4 px-4 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "shrink-0 h-10 px-4 rounded-full text-sm font-semibold transition-colors border",
                  activeCategory === cat
                    ? "bg-[var(--client-primary)] text-white border-[var(--client-primary)]"
                    : "bg-white text-[var(--client-text)] border-[var(--client-secondary)] hover:bg-[var(--client-secondary)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* B — Product grid */}
      <section className="bg-[var(--client-bg)] px-4 pb-14">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} whatsapp={client.whatsapp} category={client.category} />
          ))}
        </div>
      </section>

      {/* C — Custom orders */}
      {client.acceptsCustomOrders && (
        <section className="bg-[var(--client-secondary)] px-4 py-12">
          <div className="max-w-xl mx-auto rounded-2xl bg-white p-6 text-center space-y-4 shadow-sm">
            <p className="text-lg font-semibold text-[var(--client-text)]">
              📐 Want something custom? We make clothes to your design and measurements!
            </p>
            <a
              href={whatsappLink(client.whatsapp, customOrderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-base transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Discuss Custom Order
            </a>
          </div>
        </section>
      )}

      {/* D — Navigation */}
      <div className="bg-[var(--client-bg)]">
        <ClientPageNav
          back={{ label: "Back to Intro", href: `/stalls/${client.slug}` }}
          forward={
            client.pagesEnabled >= 3 ? { label: "Reviews & Orders", href: `/stalls/${client.slug}/orders` } : undefined
          }
        />
      </div>

      <ClientPageFooter />
    </>
  );
}
