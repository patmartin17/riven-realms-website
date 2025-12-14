"use client"

import { useState } from "react"
import { 
  Settings, 
  User,
  Bell,
  Shield,
  Moon,
  Globe,
  Mail,
  Key,
  Save,
  Eye,
  EyeOff
} from "lucide-react"

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    playerJoins: false,
    serverAlerts: true,
    reports: true,
  })

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Account Settings</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your profile, security, and notification preferences</p>
      </div>

      {/* Profile settings */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-purple-600" />
            <h2 className="font-semibold text-slate-800">Profile Settings</h2>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Admin"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">Username</label>
                  <input
                    type="text"
                    defaultValue="admin_patrick"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Email</label>
                <input
                  type="email"
                  defaultValue="admin@rivenrealms.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" />
            <h2 className="font-semibold text-slate-800">Security</h2>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter current password"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-500 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium text-sm">
            <Key className="w-4 h-4" />
            Enable Two-Factor Authentication
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-600" />
            <h2 className="font-semibold text-slate-800">Notifications</h2>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { key: "email", label: "Email Notifications", desc: "Receive important updates via email" },
            { key: "push", label: "Push Notifications", desc: "Get alerts in your browser" },
            { key: "playerJoins", label: "Player Join Alerts", desc: "Notify when players join/leave" },
            { key: "serverAlerts", label: "Server Alerts", desc: "Critical server status changes" },
            { key: "reports", label: "Report Notifications", desc: "New player reports and tickets" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between px-6 py-4">
              <div>
                <div className="font-medium text-slate-700">{item.label}</div>
                <div className="text-sm text-slate-500">{item.desc}</div>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key as keyof typeof notifications] })}
                className={`
                  relative w-12 h-6 rounded-full transition-colors
                  ${notifications[item.key as keyof typeof notifications] ? "bg-purple-600" : "bg-slate-200"}
                `}
              >
                <div className={`
                  absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform
                  ${notifications[item.key as keyof typeof notifications] ? "left-7" : "left-1"}
                `} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Moon className="w-5 h-5 text-purple-600" />
            <h2 className="font-semibold text-slate-800">Appearance</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-slate-700">Dark Mode</div>
              <div className="text-sm text-slate-500">Use dark theme for admin panel</div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`
                relative w-12 h-6 rounded-full transition-colors
                ${darkMode ? "bg-purple-600" : "bg-slate-200"}
              `}
            >
              <div className={`
                absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform
                ${darkMode ? "left-7" : "left-1"}
              `} />
            </button>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>
    </div>
  )
}

