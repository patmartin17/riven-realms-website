"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, ArrowRight, Lock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const token = searchParams.get("token")

  if (!token) {
    router.push("/forgot-password")
    return null
  }

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters")
      return
    }

    setIsLoading(true)
    // TODO: Implement actual password reset
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 800)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4 sm:p-8 py-16">
        <div className="w-full max-w-md">
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-arcane-purple/5" />
            
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-arcane-purple/20 border border-arcane-purple/40 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[#c77dff]" />
                </div>
                <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#c77dff] text-glow mb-2">
                  Password Reset!
                </h1>
                <p className="text-foreground/60 text-sm">
                  Your password has been successfully reset. You can now log in with your new password.
                </p>
              </div>
              
              <Link href="/login">
                <Button className="w-full" size="lg">
                  Go to Login
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4 sm:p-8 py-16">
      <div className="w-full max-w-md">
        {/* Reset Password Card */}
        <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-arcane-purple/5" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#c77dff] text-glow mb-2">
                Reset Password
              </h1>
              <p className="text-foreground/60 text-sm">
                Enter your new password below
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleReset} className="space-y-5">
              {/* New Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-cinzel font-medium text-foreground/80 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={8}
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
                <p className="mt-1 text-xs text-foreground/40">Must be at least 8 characters</p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-cinzel font-medium text-foreground/80 mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={8}
                    className="w-full pl-10 pr-12 py-2.5 bg-[#0d0618]/50 border border-arcane-purple/30 rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-arcane-purple/70 focus:ring-2 focus:ring-arcane-purple/20 transition-all"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/70 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
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
                    Resetting...
                  </>
                ) : (
                  <>
                    Reset Password
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-arcane-purple/30 border-t-[#c77dff] rounded-full animate-spin" />
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  )
}

