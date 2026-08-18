"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Store, ArrowRight } from "lucide-react";
import { categoryLabels } from "@/lib/clients/utils";
import type { StallClient } from "@/lib/clients/types";

interface StallDirectoryCardProps {
  client: StallClient;
}

/** Directory listing card — always uses the parent Femme Stalls pink theme, never a client's own palette. */
export function StallDirectoryCard({ client }: StallDirectoryCardProps) {
  const [logoErrored, setLogoErrored] = useState(false);

  return (
    <Link
      href={`/stalls/${client.slug}`}
      className="flex flex-col items-center text-center gap-3 rounded-2xl border border-[#F3D5E5] bg-white p-6 shadow-sm hover:shadow-md hover:border-[#E91E8B]/40 transition-all"
    >
      <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#E91E8B]/30 bg-[#FFF0F7] flex items-center justify-center shrink-0">
        {logoErrored ? (
          <Store className="w-7 h-7 text-[#E91E8B]" />
        ) : (
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            fill
            sizes="64px"
            className="object-cover"
            onError={() => setLogoErrored(true)}
          />
        )}
      </div>

      <h3 className="font-display text-lg font-semibold text-[#1A0A12]">{client.name}</h3>
      <p className="text-sm text-[#6B445A]">{client.tagline}</p>

      <span className="inline-flex items-center gap-1 text-xs text-[#6B445A]">
        <MapPin className="w-3.5 h-3.5 text-[#E91E8B]" />
        {client.location}
      </span>

      <span className="inline-block px-3 py-1 rounded-full bg-[#FFE0EF] text-[#BE185D] text-xs font-semibold">
        {categoryLabels[client.category]}
      </span>

      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#E91E8B] mt-1">
        Visit Stall
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
