import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StallImage } from "./stall-image";
import { categoryIcon } from "@/lib/clients/utils";
import type { StallClient } from "@/lib/clients/types";

interface ClientHeaderProps {
  client: StallClient;
}

/** Lightweight sticky sub-header for individual stall pages — not a replacement for the parent site header. */
export function ClientHeader({ client }: ClientHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[var(--client-secondary)] shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center gap-3">
        <Link
          href="/stalls"
          aria-label="Back to Femme Stalls"
          className="flex items-center justify-center h-11 w-11 -ml-2 shrink-0 rounded-full text-[var(--client-text)] hover:bg-[var(--client-secondary)] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="flex-1 flex items-center justify-center gap-2.5 min-w-0 sm:justify-start">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full overflow-hidden border-2 border-[var(--client-primary)]">
            <StallImage
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              sizes="48px"
              className="object-cover"
              icon={categoryIcon[client.category]}
            />
          </div>
          <span className="font-display font-semibold text-base sm:text-lg text-[var(--client-text)] truncate">
            {client.name}
          </span>
        </div>

        <span className="hidden sm:inline text-xs font-medium text-[var(--client-text-secondary)] shrink-0">
          Back to Femme Stalls
        </span>
      </div>
    </header>
  );
}
