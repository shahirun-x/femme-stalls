import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon" | "stacked" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({
  variant = "full",
  className,
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-9",
    md: "h-11",
    lg: "h-16",
    xl: "h-24",
  };

  if (variant === "icon") {
    return (
      <Link
        href="/"
        className={cn(
          "inline-flex items-center justify-center group transition-transform duration-300 hover:scale-105",
          className
        )}
        aria-label="Femme Stalls Home"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("w-auto shrink-0", sizeClasses[size])}
        >
          {/* Background circle / heart glow */}
          <circle cx="50" cy="50" r="46" fill="#1A0A12" stroke="#E91E8B" strokeWidth="2" />
          {/* Outer heart */}
          <path
            d="M50 30 C42 16, 22 20, 22 38 C22 54, 46 70, 50 74 C54 70, 78 54, 78 38 C78 20, 58 16, 50 30 Z"
            fill="#E91E8B"
            className="transition-transform group-hover:scale-110 origin-center"
          />
          {/* Inner heart accent */}
          <path
            d="M50 36 C44 24, 28 28, 28 41 C28 52, 47 64, 50 67 C53 64, 72 52, 72 41 C72 28, 56 24, 50 36 Z"
            fill="#EC4899"
          />
          {/* Cradling hands motif */}
          <path
            d="M26 62 C32 68, 42 73, 50 73 C58 73, 68 68, 74 62 C71 67, 61 77, 50 77 C39 77, 29 67, 26 62 Z"
            fill="#C5A55A"
          />
          {/* Gold sparkles */}
          <circle cx="50" cy="22" r="2.5" fill="#D4AF37" />
          <circle cx="34" cy="26" r="1.5" fill="#D4AF37" />
          <circle cx="66" cy="26" r="1.5" fill="#D4AF37" />
        </svg>
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        className={cn(
          "inline-flex flex-col items-center text-center group transition-transform duration-300",
          className
        )}
        aria-label="Femme Stalls Home"
      >
        <div className="relative mb-2">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 md:w-20 md:h-20"
          >
            <circle cx="50" cy="50" r="48" fill="#1A0A12" stroke="#E91E8B" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="44" stroke="#C5A55A" strokeWidth="1" strokeDasharray="3 3" />
            <path
              d="M50 28 C42 14, 20 18, 20 38 C20 56, 46 72, 50 76 C54 72, 80 56, 80 38 C80 18, 58 14, 50 28 Z"
              fill="#E91E8B"
            />
            <path
              d="M50 35 C43 23, 27 27, 27 41 C27 53, 47 65, 50 68 C53 65, 73 53, 73 41 C73 27, 57 23, 50 35 Z"
              fill="#EC4899"
            />
            <path
              d="M24 64 C32 72, 42 76, 50 76 C58 76, 68 72, 76 64 C72 71, 62 80, 50 80 C38 80, 28 71, 24 64 Z"
              fill="#C5A55A"
            />
            <circle cx="50" cy="20" r="3" fill="#D4AF37" />
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold tracking-wider text-2xl md:text-3xl text-[#E91E8B]">
              FEMME
            </span>
            <span className="text-[10px] tracking-widest text-[#E91E8B] font-semibold uppercase px-1.5 py-0.5 border border-[#E91E8B]/40 rounded">
              GEOHOMZ ARCADE
            </span>
            <span className="font-display font-extrabold tracking-wider text-2xl md:text-3xl text-[#E91E8B]">
              STALLS
            </span>
          </div>
          <span className="font-script text-[#C5A55A] text-lg md:text-xl font-normal mt-0.5">
            Organise the unorganised
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 group transition-transform duration-300",
        className
      )}
      aria-label="Femme Stalls Home"
    >
      <div className="relative shrink-0">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("w-auto shrink-0 transition-transform group-hover:scale-105", sizeClasses[size])}
        >
          <circle cx="50" cy="50" r="48" fill="#1A0A12" stroke="#E91E8B" strokeWidth="2" />
          <circle cx="50" cy="50" r="44" stroke="#C5A55A" strokeWidth="0.8" strokeDasharray="3 3" />
          <path
            d="M50 28 C42 14, 20 18, 20 38 C20 56, 46 72, 50 76 C54 72, 80 56, 80 38 C80 18, 58 14, 50 28 Z"
            fill="#E91E8B"
          />
          <path
            d="M50 35 C43 23, 27 27, 27 41 C27 53, 47 65, 50 68 C53 65, 73 53, 73 41 C73 27, 57 23, 50 35 Z"
            fill="#EC4899"
          />
          <path
            d="M24 64 C32 72, 42 76, 50 76 C58 76, 68 72, 76 64 C72 71, 62 80, 50 80 C38 80, 28 71, 24 64 Z"
            fill="#C5A55A"
          />
          <circle cx="50" cy="20" r="3" fill="#D4AF37" />
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-display font-extrabold tracking-tight text-lg md:text-xl text-[#E91E8B]">
            FEMME
          </span>
          <span className="text-[9px] tracking-wider text-[#EC4899] font-medium uppercase px-1 py-0.2 bg-[#FFE0EF] rounded">
            ARCADE
          </span>
          <span className="font-display font-extrabold tracking-tight text-lg md:text-xl text-[#E91E8B]">
            STALLS
          </span>
        </div>
        <span className="font-script text-[#C5A55A] text-xs md:text-sm font-normal -mt-0.5">
          Organise the unorganised
        </span>
      </div>
    </Link>
  );
}
