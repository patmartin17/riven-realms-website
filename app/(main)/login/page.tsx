"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement actual authentication
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 800)
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4 sm:p-8 py-16">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-arcane-purple/5" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#c77dff] text-glow mb-2">
                Welcome Back
              </h1>
              <p className="text-foreground/60 text-sm">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-cinzel font-medium text-foreground/80 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2.5 bg-[#0d0618]/50 border border-arcane-purple/30 rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-arcane-purple/70 focus:ring-2 focus:ring-arcane-purple/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-cinzel font-medium text-foreground/80 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-12 py-2.5 bg-[#0d0618]/50 border border-arcane-purple/30 rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-arcane-purple/70 focus:ring-2 focus:ring-arcane-purple/20 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/70 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-arcane-purple/30 bg-[#0d0618]/50 text-[#c77dff] focus:ring-arcane-purple/50" 
                  />
                  <span className="text-foreground/50 text-xs font-cinzel">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-[#c77dff] hover:text-[#e0c3fc] text-xs font-cinzel transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Register Link */}
            <div className="mt-6 text-center">
              <p className="text-foreground/50 text-sm font-cinzel">
                Don't have an account?{" "}
                <Link href="/register" className="text-[#c77dff] hover:text-[#e0c3fc] font-medium transition-colors">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

