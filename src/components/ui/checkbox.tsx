import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => (
    <label
      htmlFor={id}
      className={cn(
        "group flex items-start gap-2.5 cursor-pointer select-none",
        className
      )}
    >
      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[#F3D5E5] bg-white transition-colors group-has-[:checked]:bg-[#E91E8B] group-has-[:checked]:border-[#E91E8B] mt-0.5">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
          {...props}
        />
        <Check
          className="h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      </span>
      <span className="text-sm text-[#1A0A12] leading-tight">{label}</span>
    </label>
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
