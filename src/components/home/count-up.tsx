"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  /** Animation length in milliseconds. */
  duration?: number;
}

/**
 * Counts from 0 to `value` when scrolled into view. Server-renders the final
 * number (so it is correct without JS) and reserves its width so the layout
 * never jitters. Reduced-motion users see the final value immediately.
 */
export function CountUp({ value, duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    setCurrent(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setCurrent(Math.round(eased * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="inline-grid">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {value}
      </span>
      <span aria-hidden="true" className="col-start-1 row-start-1">
        {current}
      </span>
    </span>
  );
}
