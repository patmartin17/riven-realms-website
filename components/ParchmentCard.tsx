import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ParchmentCardProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function ParchmentCard({ children, className, href, onClick }: ParchmentCardProps) {
  const Component = href ? "a" : onClick ? "button" : "div"
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "card-parchment relative block w-full p-6 text-left transition-all duration-200",
        "max-w-4xl mx-auto", // Added max-width constraint
        (href || onClick) && "hover:-translate-y-1 hover:shadow-md cursor-pointer",
        className
      )}
    >
      {/* Decorative corner accents (optional, kept simple for now based on mockup) */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  )
}

