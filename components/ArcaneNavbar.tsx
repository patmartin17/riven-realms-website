"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Rankings", 
    href: "/rankings",
    dropdown: [
      { label: "Overall", href: "/rankings/overall" },
      { label: "PvP", href: "/rankings/pvp" },
      { label: "Community", href: "/rankings/community" },
      { label: "Aesthetic", href: "/rankings/aesthetic" },
    ]
  },
  { label: "Forums", href: "/forums" },
  { 
    label: "Servers", 
    href: "/servers",
    dropdown: [
      { label: "Browse All", href: "/servers" },
      { label: "Survival", href: "/servers?category=survival" },
      { label: "Creative", href: "/servers?category=creative" },
      { label: "PvP", href: "/servers?category=pvp" },
    ]
  },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
]

export function ArcaneNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#190a32]/95 to-void-deep/90 backdrop-blur-md border-b border-arcane-purple/30" />
      
      {/* Glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arcane-purple/60 to-transparent" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              {/* Rune circle */}
              <div className="w-10 h-10 rounded-full border border-arcane-purple/60 flex items-center justify-center group-hover:border-[#c77dff] group-hover:shadow-[0_0_15px_rgba(157,78,221,0.6)] transition-all duration-300">
                <span className="text-[#c77dff] font-cinzel font-bold text-lg group-hover:text-glow">H</span>
              </div>
            </div>
            <span className="hidden sm:block font-cinzel font-bold text-lg text-foreground group-hover:text-[#c77dff] transition-colors duration-300">
              Riven Realms
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 font-cinzel text-sm font-medium text-foreground/70 hover:text-[#c77dff] transition-all duration-300 relative group"
                >
                  <span className="relative">
                    {item.label}
                    {/* Underline glow effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c77dff] shadow-[0_0_10px_rgba(157,78,221,0.8)] group-hover:w-full transition-all duration-300" />
                  </span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-gradient-to-b from-[#281440]/95 to-[#190a32]/98 backdrop-blur-md border border-arcane-purple/40 rounded-lg overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(138,43,226,0.2)] min-w-[180px]">
                      {/* Top glow */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arcane-purple/60 to-transparent" />
                      
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className={`block px-4 py-3 font-cinzel text-sm text-foreground/70 hover:text-[#c77dff] hover:bg-arcane-purple/10 transition-all duration-200 ${
                            index !== item.dropdown!.length - 1 ? 'border-b border-arcane-purple/20' : ''
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/submit"
              className="px-5 py-2 font-cinzel text-sm font-semibold text-arcane-gold border border-arcane-gold/40 rounded-lg hover:border-arcane-gold/80 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300"
            >
              Submit Server
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-arcane-cyan transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#190a32]/98 to-void-deep/98 backdrop-blur-md border-b border-arcane-purple/30">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 font-cinzel text-foreground/70 hover:text-[#c77dff] hover:bg-arcane-purple/10 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 font-cinzel text-sm text-foreground/50 hover:text-[#c77dff] hover:bg-arcane-purple/10 rounded-lg transition-all duration-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-arcane-purple/30">
              <Link
                href="/submit"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 font-cinzel text-center text-arcane-gold border border-arcane-gold/40 rounded-lg hover:border-arcane-gold/80 transition-all duration-300"
              >
                Submit Server
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

