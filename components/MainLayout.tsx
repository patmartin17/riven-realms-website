"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, X, LogIn, LogOut, UserPlus, Copy, Check } from "lucide-react"
import { Footer } from "@/components/Footer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/firebase"
import { signOutUser } from "@/lib/firebase/auth"
import { toast } from "sonner"

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter()
  const { user } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  
  const serverSubdomain = "riven.gg"

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await signOutUser()
      toast.success("Logged out", {
        description: "You have been successfully logged out.",
      })
      router.push("/")
    } catch (error: any) {
      toast.error("Logout failed", {
        description: error.message || "Failed to log out. Please try again.",
      })
    } finally {
      setIsLoggingOut(false)
    }
  }

  const handleCopyServer = async () => {
    try {
      await navigator.clipboard.writeText(serverSubdomain)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

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
        {/* Auth Buttons - Above navbar, aligned with content edge, centered vertically */}
        <div className="relative z-30 flex justify-end items-center h-10 mb-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="font-cinzel text-[10px] sm:text-xs text-foreground/70 hover:text-[#c77dff] transition-colors px-1.5 sm:px-2 py-0.5 rounded hover:bg-arcane-purple/10"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="font-cinzel text-[10px] sm:text-xs text-foreground/70 hover:text-[#c77dff] transition-colors px-1.5 sm:px-2 py-0.5 rounded hover:bg-arcane-purple/10 flex items-center gap-1 disabled:opacity-50"
                >
                  {isLoggingOut ? (
                    <>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-foreground/30 border-t-foreground/70 rounded-full animate-spin" />
                      <span className="hidden sm:inline">Logging out...</span>
                    </>
                  ) : (
                    <>
                      <LogOut className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="hidden sm:inline">Logout</span>
                    </>
                  )}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="font-cinzel text-[10px] sm:text-xs text-foreground/70 hover:text-[#c77dff] transition-colors px-1.5 sm:px-2 py-0.5 rounded hover:bg-arcane-purple/10 flex items-center gap-1"
                >
                  <LogIn className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="hidden sm:inline">Login</span>
                </Link>
                <Link
                  href="/register"
                  className="font-cinzel text-[10px] sm:text-xs text-[#c77dff] hover:text-[#e0c3fc] transition-colors px-1.5 sm:px-2 py-0.5 rounded border border-arcane-purple/40 hover:border-arcane-purple/70 hover:bg-arcane-purple/10 flex items-center gap-1"
                >
                  <UserPlus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="hidden sm:inline">Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
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
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center group md:ml-[10px] h-full">
              <Image
                src="/images/riven-realms-text.png"
                alt="Riven Realms"
                width={1000}
                height={375}
                className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto object-contain translate-y-[2px] group-hover:opacity-80 transition-opacity"
                priority
                style={{ maxHeight: '100%' }}
              />
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
              <button 
                onClick={() => setIsJoinModalOpen(true)}
                className="join-button-wrapper !hidden min-[900px]:!flex items-center translate-y-1 cursor-pointer"
              >
                <img 
                  src="/images/desktop/join.png" 
                  alt="Join Now" 
                  className="join-button"
                />
              </button>

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

      {/* Join Now Modal */}
      <Dialog open={isJoinModalOpen} onOpenChange={setIsJoinModalOpen}>
        <DialogContent className="glass-card border-arcane-purple/40 max-w-2xl p-0 overflow-hidden">
          {/* Ornate border decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arcane-purple/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arcane-purple/60 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-arcane-purple/60 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-arcane-purple/60 to-transparent" />
          </div>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-arcane-purple/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-arcane-purple/40" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-arcane-purple/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-arcane-purple/40" />

          <div className="relative p-6 sm:p-8">
            <DialogHeader className="text-center mb-6">
              <DialogTitle className="font-cinzel text-3xl sm:text-4xl font-bold text-[#c77dff] text-glow mb-3">
                Join Riven Realms
              </DialogTitle>
              <DialogDescription className="text-foreground/70 font-cinzel text-base sm:text-lg">
                Begin your epic adventure in three simple steps
              </DialogDescription>
            </DialogHeader>

            {/* Steps */}
            <div className="space-y-6 mb-8">
              {/* Step 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-arcane-purple/20 border-2 border-arcane-purple/40 flex items-center justify-center">
                  <span className="font-cinzel font-bold text-[#c77dff] text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel font-semibold text-foreground mb-1 text-lg">Register with Email</h3>
                  <p className="text-foreground/60 text-sm">
                    Create your account on this website using your email address. No username needed yet!
                  </p>
                  <Link href="/register" onClick={() => setIsJoinModalOpen(false)}>
                    <Button variant="outline" size="sm" className="mt-2">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-arcane-purple/20 border-2 border-arcane-purple/40 flex items-center justify-center">
                  <span className="font-cinzel font-bold text-[#c77dff] text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel font-semibold text-foreground mb-1 text-lg">Log In to Hytale Server</h3>
                  <p className="text-foreground/60 text-sm mb-3">
                    Connect to our Hytale server using the subdomain below:
                  </p>
                  <div className="flex items-center gap-2 p-3 bg-[#0d0618]/50 border border-arcane-purple/30 rounded-lg">
                    <code className="flex-1 font-mono text-sm text-foreground/80">{serverSubdomain}</code>
                    <Button
                      onClick={handleCopyServer}
                      size="sm"
                      variant="outline"
                      className="flex-shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-arcane-purple/20 border-2 border-arcane-purple/40 flex items-center justify-center">
                  <span className="font-cinzel font-bold text-[#c77dff] text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel font-semibold text-foreground mb-1 text-lg">Confirm Username In-Game</h3>
                  <p className="text-foreground/60 text-sm">
                    Once connected, confirm your username in-game to complete your account setup and start playing!
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-4 border-t border-arcane-purple/20">
              <p className="text-foreground/50 text-sm font-cinzel mb-3">
                Already have an account?
              </p>
              <Link href="/login" onClick={() => setIsJoinModalOpen(false)}>
                <Button variant="outline" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
