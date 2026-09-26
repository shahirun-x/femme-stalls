import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * PLACEHOLDER LOGO — the client will supply the real asset.
 *
 * This is intentionally just the name set in the display face inside a
 * rounded container; no invented emblem. When the real file arrives, replace
 * the two <span> blocks below with a single next/image, e.g.
 *
 *   <Image src="/images/logo.svg" alt="" width={160} height={48} priority />
 *
 * Every logo on the site renders through this component, so that is the
 * only edit needed.
 */

interface LogoProps {
  /** `full` — one line. `compact` — stacked two lines for tight spaces. */
  variant?: "full" | "compact";
  /** `rose` for light grounds, `light` for dark grounds. */
  tone?: "rose" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const fullSizes = {
  sm: "px-3.5 py-1 text-sm",
  md: "px-4 py-1.5 text-base",
  lg: "px-6 py-2.5 text-2xl",
};

const compactSizes = {
  sm: "px-2 py-1.5 text-[10px]",
  md: "px-2.5 py-2 text-xs",
  lg: "px-3.5 py-2.5 text-base",
};

export function Logo({ variant = "full", tone = "rose", size = "md", className }: LogoProps) {
  const toneClasses =
    tone === "light"
      ? "border-femme-cream/40 text-femme-cream hover:border-femme-cream/70"
      : "border-femme-rose/30 bg-femme-blush/60 text-femme-rose hover:border-femme-rose/60";

  return (
    <Link
      href="/"
      aria-label="Femme Stalls — home"
      className={cn(
        "inline-flex shrink-0 items-center justify-center border font-display font-bold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-femme-rose focus-visible:ring-offset-2",
        variant === "full"
          ? cn("rounded-full tracking-[0.14em] whitespace-nowrap", fullSizes[size])
          : cn("flex-col rounded-xl leading-[1.05] tracking-[0.12em]", compactSizes[size]),
        toneClasses,
        className
      )}
    >
      {variant === "full" ? (
        <span>Femme Stalls</span>
      ) : (
        <>
          <span>Femme</span>
          <span>Stalls</span>
        </>
      )}
    </Link>
  );
}
