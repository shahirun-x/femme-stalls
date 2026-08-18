import { MessageCircle } from "lucide-react";
import { StallImage } from "./stall-image";
import { discountPercent, formatPrice, whatsappLink } from "@/lib/clients/utils";
import type { Product, StallCategory } from "@/lib/clients/types";
import { categoryIcon } from "@/lib/clients/utils";

interface ProductCardProps {
  product: Product;
  whatsapp: string;
  category: StallCategory;
}

export function ProductCard({ product, whatsapp, category }: ProductCardProps) {
  const waMessage = `Hi! I saw ${product.name} (₹${product.price}) on Femme Stalls. I'm interested!`;

  return (
    <div className="rounded-2xl border border-[var(--client-secondary)] bg-white overflow-hidden shadow-sm">
      <div className="relative aspect-[4/5] w-full">
        <StallImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          icon={categoryIcon[category]}
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white text-[var(--client-primary)] text-xs font-bold shadow">
            New
          </span>
        )}
        {product.isBestSeller && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[var(--client-primary)] text-white text-xs font-bold shadow">
            Best Seller
          </span>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-base sm:text-lg text-[var(--client-text)]">{product.name}</h3>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold text-lg text-[var(--client-primary)]">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-[var(--client-text-secondary)] line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--client-secondary)] text-[var(--client-primary)]">
                {discountPercent(product.price, product.originalPrice)}% off
              </span>
            </>
          )}
        </div>

        <p className="text-sm text-[var(--client-text-secondary)] line-clamp-2">{product.description}</p>

        <a
          href={whatsappLink(whatsapp, waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-bold text-base transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
