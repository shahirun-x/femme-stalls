import { cn } from "@/lib/utils";

interface WaveSeparatorProps {
  className?: string;
  /** Fill colour of the wave — should match the section it flows into. */
  color?: string;
  /** Flip vertically so the curve sweeps the other way. */
  flip?: boolean;
}

/**
 * Organic curved divider between two sections. Renders full-bleed and scales
 * to the container width. Decorative only.
 */
export function WaveSeparator({
  className,
  color = "#FDF2F8",
  flip = false,
}: WaveSeparatorProps) {
  return (
    <div className={cn("pointer-events-none w-full leading-[0]", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={cn("block h-12 w-full sm:h-16 lg:h-20", flip && "rotate-180")}
      >
        <path
          d="M0,40 C240,100 480,100 720,60 C960,20 1200,20 1440,56 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
