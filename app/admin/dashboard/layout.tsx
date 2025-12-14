"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { 
  LayoutDashboard, 
  Users, 
  Server, 
  Package, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  LogOut,
  ChevronDown,
  Crown
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Staff", href: "/admin/dashboard/staff", icon: Users },
  { name: "Server", href: "/admin/dashboard/server", icon: Server },
  { name: "Inventory", href: "/admin/dashboard/inventory", icon: Package },
  { name: "Settings", href: "/admin/dashboard/settings", icon: Settings },
]

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <div className="flex h-[calc(100vh-16px)] overflow-hidden" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 
        bg-[#1a0a2e]/95 backdrop-blur-md border-r border-[#c77dff]/20
        transform transition-transform duration-300 ease-in-out
        flex flex-col
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        {/* Logo */}
        <div className="flex-shrink-0 h-16 flex items-center justify-between px-4 border-b border-[#c77dff]/10">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <Image
              src="/images/desktop/logo.png"
              alt="Riven Realms"
              width={100}
              height={100}
              className="w-[40px] h-auto"
            />
            <div>
              <div className="font-semibold text-white text-sm">Control Panel</div>
              <div className="text-[10px] text-[#c77dff]">Admin</div>
            </div>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white/40 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <p className="text-[10px] font-semibold text-[#c77dff]/50 uppercase tracking-wider px-3 mb-3">Navigation</p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                    ${isActive 
                      ? "bg-gradient-to-r from-[#9d4edd] to-[#c77dff] text-white shadow-lg shadow-[#9d4edd]/30" 
                      : "text-white/60 hover:bg-[#c77dff]/10 hover:text-white"
                    }
                  `}
                >
                  <item.icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-[#c77dff]/60"}`} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Server Status */}
        <div className="flex-shrink-0 mx-4 mb-4 p-3 bg-[#0d0618]/50 rounded-lg border border-[#c77dff]/10">
          <p className="text-[10px] font-semibold text-[#c77dff]/50 uppercase tracking-wider mb-2">Status</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-xs text-white/80">All Systems Online</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex-shrink-0 p-4 border-t border-[#c77dff]/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/50 hover:bg-[#c77dff]/10 hover:text-white transition-all"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            <span>Return to Website</span>
          </Link>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0 h-16 bg-[#1a0a2e]/80 backdrop-blur-md border-b border-[#c77dff]/10 px-4 lg:px-6 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white/60 hover:text-white p-2 hover:bg-[#c77dff]/10 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 bg-[#0d0618]/50 rounded-lg px-3 py-2 w-48 lg:w-64 border border-[#c77dff]/10">
              <Search className="w-4 h-4 text-white/40 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/30 w-full min-w-0"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-white/60 hover:text-white hover:bg-[#c77dff]/10 rounded-lg">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div className="h-6 w-px bg-[#c77dff]/20 mx-1" />

            {/* User */}
            <div className="relative">
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-lg hover:bg-[#c77dff]/10"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#9d4edd] to-[#c77dff] flex items-center justify-center">
                  <Crown className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-medium text-white">Admin</div>
                  <div className="text-[10px] text-white/50">Owner</div>
                </div>
                <ChevronDown className={`w-4 h-4 text-white/40 transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {userMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a0a2e] rounded-lg shadow-xl border border-[#c77dff]/20 py-1 z-50">
                    <div className="px-3 py-2 border-b border-[#c77dff]/10">
                      <div className="text-sm font-medium text-white">Administrator</div>
                      <div className="text-xs text-white/50">admin@rivenrealms.com</div>
                    </div>
                    <Link href="/admin/dashboard/settings" className="flex items-center gap-2 px-3 py-2 text-sm text-white/70 hover:bg-[#c77dff]/10 hover:text-white">
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <div className="border-t border-[#c77dff]/10">
                      <Link href="/admin" className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-500/10">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}