"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
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
      <div className="relative min-h-screen px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6">
        <div className="ornate-page-frame relative min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)]">
          
          {/* Corner decorations */}
          <div className="corner-diamond top-left" />
          <div className="corner-diamond top-right" />
          <div className="corner-diamond bottom-left" />
          <div className="corner-diamond bottom-right" />
          
          {/* Top center diamond */}
          <div className="center-diamond top" />
          {/* Bottom center diamond */}
          <div className="center-diamond bottom" />
          
          {/* Frame borders */}
          <div className="frame-border top" />
          <div className="frame-border bottom" />
          <div className="frame-border left" />
          <div className="frame-border right" />
          
          {/* Inner frame accent lines */}
          <div className="frame-accent top" />
          <div className="frame-accent bottom" />
          <div className="frame-accent left" />
          <div className="frame-accent right" />

          {/* Side accents */}
          <div className="side-accent left" />
          <div className="side-accent right" />

          {/* Navbar inside frame */}
          <nav className="relative z-20 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-arcane-purple/20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-[#c77dff] group-hover:text-[#e0c3fc] transition-colors">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L8 6H4v4l-4 4 4 4v4h4l4 4 4-4h4v-4l4-4-4-4V6h-4l-4-4zm0 3.5L14.5 8H16v1.5L18.5 12 16 14.5V16h-1.5L12 18.5 9.5 16H8v-1.5L5.5 12 8 9.5V8h1.5L12 5.5z"/>
                </svg>
              </div>
              <span className="hidden sm:block font-cinzel font-bold text-lg text-foreground group-hover:text-[#c77dff] transition-colors">
                HytaleHighlights
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {["Home", "Server", "Rules", "Store", "Staff", "Forums", "Discord"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-cinzel text-sm font-medium text-foreground/70 hover:text-[#c77dff] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c77dff] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Join Button - Custom Image */}
            <Link href="/join" className="join-button-wrapper mr-4 sm:mr-8">
              <img 
                src="/images/desktop/join.png" 
                alt="Join Now" 
                className="join-button"
              />
            </Link>
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
