import { Star } from "lucide-react";
import { StallImage } from "./stall-image";
import type { Testimonial } from "@/lib/clients/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--client-secondary)] bg-white p-5 space-y-3 shadow-sm">
      <div className="flex items-center gap-3">
        {testimonial.customerImage ? (
          <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0">
            <StallImage src={testimonial.customerImage} alt={testimonial.customerName} fill icon="user" />
          </div>
        ) : (
          <div className="h-11 w-11 rounded-full bg-[var(--client-secondary)] flex items-center justify-center text-[var(--client-primary)] font-bold text-lg shrink-0">
            {testimonial.customerName.charAt(0)}
          </div>
        )}
        <span className="font-semibold text-base text-[var(--client-text)]">{testimonial.customerName}</span>
      </div>

      {testimonial.rating && (
        <div className="flex items-center gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4"
              fill={i < testimonial.rating! ? "var(--client-primary)" : "none"}
              stroke="var(--client-primary)"
            />
          ))}
        </div>
      )}

      <p className="text-base leading-relaxed text-[var(--client-text)]">{testimonial.review}</p>
    </div>
  );
}
