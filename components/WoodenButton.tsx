import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface WoodenButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  variant?: "primary" | "secondary"
}

export function WoodenButton({ children, className, href, variant = "primary", ...props }: WoodenButtonProps) {
  const baseStyles = "btn-wood relative overflow-hidden"
  
  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, "group no-underline", className)}>
        {content}
      </Link>
    )
  }

  return (
    <button className={cn(baseStyles, "group", className)} {...props}>
      {content}
    </button>
  )
}

