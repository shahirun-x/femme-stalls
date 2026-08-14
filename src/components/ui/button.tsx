import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#E91E8B] text-white hover:bg-[#BE185D] shadow-md hover:shadow-lg focus-visible:ring-[#E91E8B]",
        gold:
          "bg-[#C5A55A] text-white hover:bg-[#A68B3E] shadow-md hover:shadow-lg focus-visible:ring-[#C5A55A]",
        outline:
          "border-2 border-[#E91E8B] text-[#E91E8B] bg-transparent hover:bg-[#FFF0F7] focus-visible:ring-[#E91E8B]",
        outlineGold:
          "border-2 border-[#C5A55A] text-[#C5A55A] bg-transparent hover:bg-[#C5A55A]/10 focus-visible:ring-[#C5A55A]",
        secondary:
          "bg-[#FFE0EF] text-[#BE185D] hover:bg-[#FFB8D9] focus-visible:ring-[#E91E8B]",
        ghost:
          "hover:bg-[#FFF0F7] hover:text-[#E91E8B] text-[#1A0A12]",
        link:
          "text-[#E91E8B] underline-offset-4 hover:underline",
        dark:
          "bg-[#1A0A12] text-white hover:bg-[#2D1420] border border-white/10",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-13 rounded-full px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
