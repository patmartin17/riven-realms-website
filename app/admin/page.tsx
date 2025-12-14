"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      router.push("/admin/dashboard")
    }, 800)
  }

  return (
    <div className="min-h-[calc(100vh-16px)] flex items-center justify-center p-4 sm:p-8" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* Login Card */}
      <div className="w-full max-w-sm">
        {/* Card glow effect */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c77dff]/20 via-[#9d4edd]/10 to-[#c77dff]/20 rounded-xl blur-lg" />
          
          <div className="relative bg-[#1a0a2e]/90 backdrop-blur-xl rounded-xl shadow-2xl border border-[#c77dff]/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2d1b4e] via-[#3d2066] to-[#2d1b4e] px-6 py-8 text-center border-b border-[#c77dff]/20">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/desktop/logo.png"
                  alt="Riven Realms"
                  width={120}
                  height={120}
                  className="w-[80px] h-auto drop-shadow-lg"
                />
              </div>
              <h1 className="text-xl font-semibold text-white mb-1">
                Control Panel
              </h1>
              <p className="text-[#c77dff]/70 text-sm">
                Server Management
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="p-6 space-y-5" suppressHydrationWarning>
              {/* Username */}
              <div className="space-y-1.5" suppressHydrationWarning>
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#c77dff]" />
                  Username
                </label>
                <div suppressHydrationWarning>
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#c77dff]/20 bg-[#0d0618]/50 text-white text-sm focus:border-[#c77dff]/50 focus:ring-1 focus:ring-[#c77dff]/20 outline-none transition-all placeholder:text-white/30"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5" suppressHydrationWarning>
                <label className="text-sm font-medium text-white/70 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#c77dff]" />
                  Password
                </label>
                <div className="relative" suppressHydrationWarning>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#c77dff]/20 bg-[#0d0618]/50 text-white text-sm focus:border-[#c77dff]/50 focus:ring-1 focus:ring-[#c77dff]/20 outline-none transition-all placeholder:text-white/30 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    suppressHydrationWarning
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#c77dff] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm" suppressHydrationWarning>
                <label className="flex items-center gap-2 cursor-pointer" suppressHydrationWarning>
                  <input 
                    type="checkbox" 
                    className="w-3.5 h-3.5 rounded border-[#c77dff]/30 bg-[#0d0618]/50 text-[#c77dff] focus:ring-[#c77dff]/50" 
                    suppressHydrationWarning
                  />
                  <span className="text-white/50 text-xs">Remember me</span>
                </label>
                <button type="button" className="text-[#c77dff] hover:text-[#c77dff]/80 text-xs font-medium">
                  Reset password
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#9d4edd] to-[#c77dff] text-white text-sm font-medium shadow-lg shadow-[#9d4edd]/25 hover:shadow-[#9d4edd]/40 hover:from-[#8b3dc9] hover:to-[#b56ae0] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Access Panel
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="px-6 pb-6 text-center">
              <p className="text-xs text-white/30">
                Authorized personnel only
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-4">
          <Link 
            href="/"
            className="text-sm text-white/40 hover:text-[#c77dff] transition-colors inline-flex items-center gap-1"
          >
            ← Return to Riven Realms
          </Link>
        </div>
      </div>
    </div>
  )
}