"use client"

import Link from "next/link"
import { 
  Users, 
  Server, 
  Package, 
  Clock,
  AlertTriangle,
  Activity,
  Zap,
  Globe,
  HardDrive,
  ArrowUpRight,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react"

// Mock data
const stats = [
  { 
    label: "Active Players", 
    value: "1,247", 
    change: "+12%", 
    changeLabel: "vs last hour",
    trend: "up",
    icon: Users,
    color: "purple"
  },
  { 
    label: "Server TPS", 
    value: "19.8", 
    change: "Stable", 
    changeLabel: "performance",
    trend: "stable",
    icon: Zap,
    color: "green"
  },
  { 
    label: "Staff Online", 
    value: "8", 
    change: "2 away", 
    changeLabel: "on duty",
    trend: "neutral",
    icon: Users,
    color: "indigo"
  },
  { 
    label: "Pending Tickets", 
    value: "23", 
    change: "-5", 
    changeLabel: "resolved today",
    trend: "down",
    icon: AlertTriangle,
    color: "amber"
  },
]

const recentActivity = [
  { user: "xKnight", action: "connected to the server", time: "2 min ago", type: "join" },
  { user: "DragonSlayer99", action: "purchased Diamond Rank", time: "5 min ago", type: "purchase" },
  { user: "MagicWizard", action: "submitted a player report", time: "12 min ago", type: "report" },
  { user: "StaffMember_Alex", action: "issued a ban on suspicious_user123", time: "18 min ago", type: "moderation" },
  { user: "BuilderPro", action: "opened a support ticket", time: "25 min ago", type: "ticket" },
  { user: "NewPlayer2024", action: "connected to the server", time: "30 min ago", type: "join" },
]

const serverStatus = {
  mainServer: { name: "Main Hub", status: "online", players: 847, maxPlayers: 1000 },
  survivalServer: { name: "Survival World", status: "online", players: 234, maxPlayers: 500 },
  pvpServer: { name: "PvP Arena", status: "online", players: 166, maxPlayers: 200 },
  buildServer: { name: "Creative Mode", status: "maintenance", players: 0, maxPlayers: 100 },
}

const quickActions = [
  { label: "Restart Server", icon: Server, color: "red" },
  { label: "Broadcast Message", icon: Globe, color: "purple" },
  { label: "View Server Logs", icon: Activity, color: "blue" },
  { label: "Create Backup", icon: HardDrive, color: "green" },
]

export default function AdminDashboard() {
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening"

  return (
    <div className="space-y-8">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{greeting}, Administrator</h1>
          <p className="text-slate-500 text-sm mt-1">Here's an overview of your server's current status.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All Systems Operational
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div 
            key={stat.label}
            className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`
                p-3 rounded-xl 
                ${stat.color === "purple" ? "bg-purple-100 text-purple-600" : ""}
                ${stat.color === "green" ? "bg-green-100 text-green-600" : ""}
                ${stat.color === "indigo" ? "bg-indigo-100 text-indigo-600" : ""}
                ${stat.color === "amber" ? "bg-amber-100 text-amber-600" : ""}
              `}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={`
                flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full
                ${stat.trend === "up" ? "bg-green-100 text-green-700" : ""}
                ${stat.trend === "down" ? "bg-green-100 text-green-700" : ""}
                ${stat.trend === "stable" ? "bg-blue-100 text-blue-700" : ""}
                ${stat.trend === "neutral" ? "bg-slate-100 text-slate-600" : ""}
              `}>
                {stat.trend === "up" && <TrendingUp className="w-3 h-3" />}
                {stat.trend === "down" && <TrendingDown className="w-3 h-3" />}
                {stat.trend === "stable" && <Minus className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-500">{stat.label}</div>
            <div className="text-xs text-slate-400 mt-1">{stat.changeLabel}</div>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-800">Recent Activity</h2>
              <p className="text-xs text-slate-500 mt-0.5">Latest server events and actions</p>
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium px-3 py-1.5 hover:bg-purple-50 rounded-lg transition-colors">
              View All
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {recentActivity.map((activity, i) => (
              <div key={i} className="p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold
                    ${activity.type === "join" ? "bg-green-100 text-green-600" : ""}
                    ${activity.type === "purchase" ? "bg-purple-100 text-purple-600" : ""}
                    ${activity.type === "report" ? "bg-red-100 text-red-600" : ""}
                    ${activity.type === "moderation" ? "bg-orange-100 text-orange-600" : ""}
                    ${activity.type === "ticket" ? "bg-blue-100 text-blue-600" : ""}
                  `}>
                    {activity.user.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-800">
                      <span className="font-semibold">{activity.user}</span>
                      {" "}{activity.action}
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Server Status */}
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="p-6 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800">Server Instances</h2>
              <p className="text-xs text-slate-500 mt-0.5">Current load distribution</p>
            </div>
            <div className="p-4 space-y-3">
              {Object.values(serverStatus).map((server) => (
                <div 
                  key={server.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      server.status === "online" ? "bg-green-500" : 
                      server.status === "maintenance" ? "bg-amber-500" : "bg-red-500"
                    }`} />
                    <span className="font-medium text-sm text-slate-700">{server.name}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {server.status === "online" ? `${server.players}/${server.maxPlayers}` : "Maintenance"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="p-6 border-b border-slate-100">
              <h2 className="font-semibold text-slate-800">Quick Actions</h2>
              <p className="text-xs text-slate-500 mt-0.5">Common administrative tasks</p>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className={`
                    p-4 rounded-xl text-center transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
                    ${action.color === "red" ? "bg-red-50 hover:bg-red-100 text-red-600 border border-red-100" : ""}
                    ${action.color === "purple" ? "bg-purple-50 hover:bg-purple-100 text-purple-600 border border-purple-100" : ""}
                    ${action.color === "blue" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-100" : ""}
                    ${action.color === "green" ? "bg-green-50 hover:bg-green-100 text-green-600 border border-green-100" : ""}
                  `}
                >
                  <action.icon className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom quick links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link 
          href="/admin/dashboard/staff"
          className="group bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white hover:shadow-xl hover:shadow-purple-500/20 transition-all"
        >
          <Users className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-semibold text-lg mb-1">Staff Management</h3>
          <p className="text-sm text-purple-200 mb-4">Manage team members, assign roles, and configure permissions</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            Open Module <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>

        <Link 
          href="/admin/dashboard/server"
          className="group bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white hover:shadow-xl hover:shadow-emerald-500/20 transition-all"
        >
          <Server className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-semibold text-lg mb-1">Server Control</h3>
          <p className="text-sm text-emerald-200 mb-4">Monitor performance, manage worlds, and configure settings</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            Open Module <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>

        <Link 
          href="/admin/dashboard/inventory"
          className="group bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white hover:shadow-xl hover:shadow-amber-500/20 transition-all"
        >
          <Package className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-semibold text-lg mb-1">Inventory Editor</h3>
          <p className="text-sm text-amber-200 mb-4">View and modify player inventories in real-time</p>
          <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
            Open Module <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  )
}