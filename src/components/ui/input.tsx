import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border bg-white px-4 py-2 text-sm text-[#1A0A12] placeholder:text-[#6B445A]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E8B] focus-visible:border-[#E91E8B] disabled:cursor-not-allowed disabled:opacity-50",
        invalid ? "border-[#E91E8B]" : "border-[#F3D5E5]",
        className
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
