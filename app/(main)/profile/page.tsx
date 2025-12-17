"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Mail, Calendar, LogOut, Gamepad2, Bell, Edit2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/firebase"
import { signOutUser, updateHytaleUsername, updateNewsletterSubscription } from "@/lib/firebase/auth"
import { toast } from "sonner"

export default function ProfilePage() {
  const router = useRouter()
  const { user, userData, loading } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isEditingUsername, setIsEditingUsername] = useState(false)
  const [hytaleUsername, setHytaleUsername] = useState("")
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  // Update local state when userData changes
  useEffect(() => {
    if (userData) {
      setHytaleUsername(userData.hytaleUsername || "")
      setNewsletterSubscribed(userData.newsletterSubscribed || false)
    }
  }, [userData])

  const handleLogout = async () => {
    setIsLoading(true)
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
      setIsLoading(false)
    }
  }

  const handleSaveUsername = async () => {
    if (!user) return

    setIsLoading(true)
    try {
      await updateHytaleUsername(user.uid, hytaleUsername.trim())
      setIsEditingUsername(false)
      toast.success("Hytale username updated", {
        description: "Your Hytale username has been saved.",
      })
    } catch (error: any) {
      toast.error("Update failed", {
        description: error.message || "Failed to update username. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleNewsletterToggle = async (checked: boolean) => {
    if (!user) return

    setNewsletterSubscribed(checked)
    try {
      await updateNewsletterSubscription(user.uid, checked)
      toast.success(
        checked ? "Newsletter subscribed" : "Newsletter unsubscribed",
        {
          description: checked
            ? "You will now receive our newsletter."
            : "You have been unsubscribed from the newsletter.",
        }
      )
    } catch (error: any) {
      setNewsletterSubscribed(!checked) // Revert on error
      toast.error("Update failed", {
        description: error.message || "Failed to update newsletter preference. Please try again.",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4 sm:p-8 py-16">
        <div className="w-8 h-8 border-2 border-[#c77dff]/30 border-t-[#c77dff] rounded-full animate-spin" />
      </div>
    )
  }

  if (!user || !userData) {
    return null
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A"
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    } catch {
      return "N/A"
    }
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
                <Mail className="w-5 h-5 text-foreground/40" />
                <div className="flex-1">
                  <p className="text-xs text-foreground/50 font-cinzel">Email</p>
                  <p className="text-foreground">{user.email}</p>
                </div>
              </div>

              {/* Hytale Username */}
              <div className="p-4 bg-[#0d0618]/50 border border-arcane-purple/20 rounded-lg">
                <div className="flex items-start gap-4">
                  <Gamepad2 className="w-5 h-5 text-foreground/40 mt-1" />
                  <div className="flex-1">
                    <Label className="text-xs text-foreground/50 font-cinzel mb-2 block">
                      Hytale Username
                    </Label>
                    {isEditingUsername ? (
                      <div className="flex gap-2">
                        <Input
                          value={hytaleUsername}
                          onChange={(e) => setHytaleUsername(e.target.value)}
                          placeholder="Enter your Hytale username"
                          className="flex-1 bg-[#0d0618]/50 border-arcane-purple/30"
                          disabled={isLoading}
                        />
                        <Button
                          size="sm"
                          onClick={handleSaveUsername}
                          disabled={isLoading}
                          className="px-3"
                        >
                          <Save className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setIsEditingUsername(false)
                            setHytaleUsername(userData.hytaleUsername || "")
                          }}
                          disabled={isLoading}
                          className="px-3"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <p className="text-foreground font-cinzel">
                          {userData.hytaleUsername || "Not set"}
                        </p>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setIsEditingUsername(true)}
                          className="h-8 px-2"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                    <p className="text-xs text-foreground/40 mt-1">
                      Link your in-game Hytale username to your account
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="p-4 bg-[#0d0618]/50 border border-arcane-purple/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Bell className="w-5 h-5 text-foreground/40" />
                    <div>
                      <p className="text-xs text-foreground/50 font-cinzel">Newsletter</p>
                      <p className="text-sm text-foreground">
                        Receive updates and news about Riven Realms
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={newsletterSubscribed}
                    onCheckedChange={handleNewsletterToggle}
                    disabled={isLoading}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-[#0d0618]/50 border border-arcane-purple/20 rounded-lg">
                <Calendar className="w-5 h-5 text-foreground/40" />
                <div>
                  <p className="text-xs text-foreground/50 font-cinzel">Member Since</p>
                  <p className="text-foreground">{formatDate(userData.createdAt)}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
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

