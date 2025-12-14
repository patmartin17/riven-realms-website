"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Footer } from "@/components/Footer"

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0d0618]">
      {/* Outer background pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#0d0618] to-[#1a0a2e]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, rgba(157, 78, 221, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Main ornate frame container */}
      <div className="relative min-h-screen px-3 py-2 sm:px-4 sm:py-2 md:px-8 md:py-3 lg:px-16 xl:px-24 2xl:px-32">
        <div className="ornate-page-frame relative min-h-[calc(100vh-16px)] sm:min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-24px)]">
          
          {/* Corner decorations - hidden on mobile */}
          <div className="corner-diamond top-left hidden md:block" />
          <div className="corner-diamond top-right hidden md:block" />
          <div className="corner-diamond bottom-left hidden md:block" />
          <div className="corner-diamond bottom-right hidden md:block" />
          
          {/* Top center diamond - hidden on mobile */}
          <div className="center-diamond top hidden md:block" />
          {/* Bottom center diamond */}
          <div className="center-diamond bottom hidden md:block" />
          
          {/* Frame borders - hidden on mobile */}
          <div className="frame-border top hidden md:block" />
          <div className="frame-border bottom hidden md:block" />
          <div className="frame-border left hidden md:block" />
          <div className="frame-border right hidden md:block" />
          
          {/* Inner frame accent lines - hidden on mobile */}
          <div className="frame-accent top hidden md:block" />
          <div className="frame-accent bottom hidden md:block" />
          <div className="frame-accent left hidden md:block" />
          <div className="frame-accent right hidden md:block" />
          
          {/* Side accents - hidden on mobile */}
          <div className="side-accent left hidden md:block" />
          <div className="side-accent right hidden md:block" />

          {/* Navbar inside frame */}
          <nav className="relative z-20 flex items-center justify-between px-3 sm:px-4 md:px-8 h-[72px] border-b border-arcane-purple/20">
            {/* Site Name - centered on mobile, left-aligned on desktop */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center group md:ml-[10px]">
              <span className="font-cinzel text-base sm:text-lg md:text-xl font-bold text-foreground group-hover:text-[#c77dff] transition-colors tracking-wide translate-y-[2px]">
                Riven Realms
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {["Home", "About", "Wiki", "Store", "Forums", "Discord"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-cinzel text-sm font-medium text-foreground/70 hover:text-[#c77dff] transition-colors relative group flex items-center"
                >
                  <span className="relative z-10 translate-y-[2px]">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c77dff] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Join Button - Custom Image moved more to the left - HIDDEN BELOW 900px */}
            <div className="flex items-center gap-2 sm:gap-4 mr-2 sm:mr-4 md:mr-6 lg:mr-8">
              <Link href="/join" className="join-button-wrapper !hidden min-[900px]:!flex items-center">
                <img 
                  src="/images/desktop/join.png" 
                  alt="Join Now" 
                  className="join-button"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-foreground hover:text-[#c77dff] transition-colors p-1 flex items-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <>
                {/* Backdrop overlay */}
                <div 
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                {/* Menu dropdown */}
                <div className="absolute top-full left-0 right-0 z-[60] bg-[#0d0618]/98 backdrop-blur-md border-b border-arcane-purple/30 md:hidden shadow-lg">
                  <div className="flex flex-col p-4 space-y-3">
                    {["Home", "About", "Wiki", "Store", "Forums", "Discord"].map((item) => (
                      <Link
                        key={item}
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="font-cinzel text-base font-medium text-foreground/80 hover:text-[#c77dff] hover:bg-arcane-purple/10 px-4 py-3 rounded-md transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </nav>

          {/* Main content area */}
          <main className="relative z-[5]">
            {children}
          </main>

          {/* Footer inside frame */}
          <Footer />
        </div>
      </div>
    </div>
  )
}
