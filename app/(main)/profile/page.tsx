"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Mail, Calendar, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = () => {
    setIsLoading(true)
    // TODO: Implement actual logout
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 500)
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4 sm:p-8 py-16">
      <div className="w-full max-w-2xl">
        <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-arcane-purple/5" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-arcane-purple/20 border-2 border-arcane-purple/40 flex items-center justify-center mb-4">
                <User className="w-10 h-10 text-[#c77dff]" />
              </div>
              <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#c77dff] text-glow mb-2">
                Profile
              </h1>
              <p className="text-foreground/60 text-sm">
                Manage your account settings
              </p>
            </div>

            {/* Profile Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-[#0d0618]/50 border border-arcane-purple/20 rounded-lg">
                <User className="w-5 h-5 text-foreground/40" />
                <div>
                  <p className="text-xs text-foreground/50 font-cinzel">Username</p>
                  <p className="text-foreground font-cinzel">PlayerName</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#0d0618]/50 border border-arcane-purple/20 rounded-lg">
                <Mail className="w-5 h-5 text-foreground/40" />
                <div>
                  <p className="text-xs text-foreground/50 font-cinzel">Email</p>
                  <p className="text-foreground">user@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#0d0618]/50 border border-arcane-purple/20 rounded-lg">
                <Calendar className="w-5 h-5 text-foreground/40" />
                <div>
                  <p className="text-xs text-foreground/50 font-cinzel">Member Since</p>
                  <p className="text-foreground">January 2024</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex-1">
                Edit Profile
              </Button>
              <Button variant="outline" className="flex-1">
                Change Password
              </Button>
              <Button
                variant="destructive"
                onClick={handleLogout}
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

