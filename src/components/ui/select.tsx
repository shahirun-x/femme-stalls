import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, invalid, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-lg border bg-white px-4 py-2 pr-10 text-sm text-[#1A0A12] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E8B] focus-visible:border-[#E91E8B] disabled:cursor-not-allowed disabled:opacity-50",
          invalid ? "border-[#E91E8B]" : "border-[#F3D5E5]",
          className
        )}
        aria-invalid={invalid || undefined}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B445A]"
        aria-hidden="true"
      />
    </div>
  )
);
Select.displayName = "Select";

export { Select };
