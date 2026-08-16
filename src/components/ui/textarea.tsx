import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#1A0A12] placeholder:text-[#6B445A]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E8B] focus-visible:border-[#E91E8B] disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        invalid ? "border-[#E91E8B]" : "border-[#F3D5E5]",
        className
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
