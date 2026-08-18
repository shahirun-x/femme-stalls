import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

interface ClientPageNavProps {
  back?: NavLink;
  forward?: NavLink;
}

/** Prev/next links between a stall's intro, products and orders pages. */
export function ClientPageNav({ back, forward }: ClientPageNavProps) {
  if (!back && !forward) return null;

  return (
    <nav
      aria-label="Stall page navigation"
      className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-between"
    >
      {back ? (
        <Link
          href={back.href}
          className="inline-flex items-center justify-center sm:justify-start gap-2 h-12 px-5 rounded-full border-2 border-[var(--client-primary)] text-[var(--client-primary)] font-semibold text-base hover:bg-[var(--client-secondary)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {back.label}
        </Link>
      ) : (
        <span />
      )}

      {forward && (
        <Link
          href={forward.href}
          className="inline-flex items-center justify-center sm:justify-end gap-2 h-12 px-5 rounded-full bg-[var(--client-primary)] text-white font-semibold text-base hover:opacity-90 transition-opacity"
        >
          {forward.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </nav>
  );
}
