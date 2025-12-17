"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const { resetPassword } = await import("@/lib/firebase/auth")
      await resetPassword(email)
      setIsSubmitted(true)
    } catch (error: any) {
      let errorMessage = "Failed to send reset email. Please try again."
      
      if (error.message.includes("user-not-found")) {
        errorMessage = "No account found with this email address."
      } else if (error.message.includes("invalid-email")) {
        errorMessage = "Invalid email address."
      } else if (error.message) {
        errorMessage = error.message
      }

      const { toast } = await import("sonner")
      toast.error("Reset failed", {
        description: errorMessage,
      })
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4 sm:p-8 py-16">
        <div className="w-full max-w-md">
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-arcane-purple/5" />
            
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-arcane-purple/20 border border-arcane-purple/40 flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-[#c77dff]" />
                </div>
                <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#c77dff] text-glow mb-2">
                  Check Your Email
                </h1>
                <p className="text-foreground/60 text-sm">
                  We've sent a password reset link to <span className="text-foreground/80 font-medium">{email}</span>
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground/50 text-sm">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Link href="/login">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4 sm:p-8 py-16">
      <div className="w-full max-w-md">
        {/* Forgot Password Card */}
        <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-arcane-purple/5" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#c77dff] text-glow mb-2">
                Forgot Password?
              </h1>
              <p className="text-foreground/60 text-sm">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-cinzel font-medium text-foreground/80 mb-2">
                  Email Address
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
                    Sending...
                  </>
                ) : (
                  <>
                    Send Reset Link
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <Link href="/login" className="text-[#c77dff] hover:text-[#e0c3fc] text-sm font-cinzel transition-colors inline-flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

