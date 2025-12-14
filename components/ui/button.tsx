import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold font-cinzel uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arcane-purple focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-br from-[#281440]/90 to-[#190a32]/95 border border-arcane-purple/50 text-[#c77dff] hover:border-arcane-purple/90 hover:shadow-[0_0_20px_rgba(157,78,221,0.5),0_0_40px_rgba(138,43,226,0.3),inset_0_0_20px_rgba(157,78,221,0.1)] hover:-translate-y-0.5 hover:text-[#e0c3fc] active:translate-y-0",
        purple:
          "bg-gradient-to-br from-[#281440]/90 to-[#190a32]/95 border border-[#c77dff]/50 text-[#e0c3fc] hover:border-[#c77dff]/90 hover:shadow-[0_0_20px_rgba(199,125,255,0.4),0_0_40px_rgba(157,78,221,0.3),inset_0_0_20px_rgba(199,125,255,0.1)] hover:-translate-y-0.5 active:translate-y-0",
        gold:
          "bg-gradient-to-br from-[#281440]/90 to-[#190a32]/95 border border-arcane-gold/40 text-arcane-gold hover:border-arcane-gold/80 hover:shadow-[0_0_20px_rgba(255,215,0,0.4),0_0_40px_rgba(255,215,0,0.2),inset_0_0_20px_rgba(255,215,0,0.1)] hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-gradient-to-br from-red-900/50 to-red-950/50 border border-red-500/40 text-red-400 hover:border-red-500/80 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:-translate-y-0.5",
        outline:
          "border border-arcane-purple/40 bg-transparent text-foreground hover:bg-arcane-purple/15 hover:border-arcane-purple/70 hover:text-[#c77dff]",
        secondary:
          "bg-[#281440]/50 border border-arcane-purple/30 text-foreground/80 hover:bg-[#281440]/70 hover:border-arcane-purple/50",
        ghost: 
          "text-foreground/70 hover:bg-arcane-purple/15 hover:text-[#c77dff]",
        link: 
          "text-[#c77dff] underline-offset-4 hover:underline hover:text-[#e0c3fc]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
