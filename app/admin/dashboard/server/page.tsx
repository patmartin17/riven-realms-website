"use client"

import { useState } from "react"
import { 
  Server, 
  Play,
  Pause,
  RotateCcw,
  Terminal,
  Cpu,
  HardDrive,
  MemoryStick,
  Clock,
  Users,
  Globe,
  Settings,
  AlertTriangle,
  CheckCircle,
  ChevronRight
} from "lucide-react"

// Mock server data
const servers = [
  {
    id: "main",
    name: "Main Server",
    status: "online",
    players: 847,
    maxPlayers: 1000,
    tps: 19.8,
    cpu: 45,
    ram: 68,
    disk: 34,
    uptime: "14d 6h 23m",
    version: "Hytale 1.0.0",
    ip: "play.rivenrealms.com"
  },
  {
    id: "survival",
    name: "Survival World",
    status: "online",
    players: 234,
    maxPlayers: 500,
    tps: 20.0,
    cpu: 23,
    ram: 45,
    disk: 56,
    uptime: "14d 6h 23m",
    version: "Hytale 1.0.0",
    ip: "survival.rivenrealms.com"
  },
  {
    id: "pvp",
    name: "PvP Arena",
    status: "online",
    players: 166,
    maxPlayers: 200,
    tps: 19.9,
    cpu: 67,
    ram: 72,
    disk: 21,
    uptime: "7d 12h 45m",
    version: "Hytale 1.0.0",
    ip: "pvp.rivenrealms.com"
  },
  {
    id: "creative",
    name: "Creative",
    status: "maintenance",
    players: 0,
    maxPlayers: 100,
    tps: 0,
    cpu: 0,
    ram: 0,
    disk: 45,
    uptime: "0",
    version: "Hytale 1.0.0",
    ip: "creative.rivenrealms.com"
  },
]

const consoleOutput = [
  { time: "12:34:56", type: "info", message: "[Server] Server started successfully" },
  { time: "12:34:58", type: "info", message: "[Server] Loaded 156 plugins" },
  { time: "12:35:02", type: "success", message: "[Player] xKnight joined the game" },
  { time: "12:35:15", type: "info", message: "[World] Autosave completed" },
  { time: "12:36:42", type: "warning", message: "[Warning] High memory usage detected (72%)" },
  { time: "12:37:01", type: "success", message: "[Player] DragonSlayer99 joined the game" },
  { time: "12:38:22", type: "info", message: "[Chat] <xKnight> Hello everyone!" },
  { time: "12:39:45", type: "error", message: "[Error] Failed to load chunk at -1234, 567" },
  { time: "12:40:12", type: "success", message: "[Player] MagicWizard joined the game" },
]

export default function ServerPage() {
  const [selectedServer, setSelectedServer] = useState(servers[0])
  const [consoleInput, setConsoleInput] = useState("")

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Server Control</h1>
        <p className="text-slate-500 text-sm mt-1">Monitor performance, manage instances, and control server operations</p>
      </div>

      {/* Server selector tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {servers.map((server) => (
          <button
            key={server.id}
            onClick={() => setSelectedServer(server)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl whitespace-nowrap transition-all
              ${selectedServer.id === server.id 
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25" 
                : "bg-white border border-slate-200 text-slate-700 hover:border-purple-300"
              }
            `}
          >
            <div className={`w-2.5 h-2.5 rounded-full ${
              server.status === "online" ? "bg-green-400" : 
              server.status === "maintenance" ? "bg-amber-400" : "bg-red-400"
            }`} />
            <span className="font-medium">{server.name}</span>
            <span className={`text-sm ${selectedServer.id === server.id ? "text-purple-200" : "text-slate-500"}`}>
              {server.players}/{server.maxPlayers}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                <Users className="w-4 h-4" />
                Players
              </div>
              <div className="text-2xl font-bold text-slate-800">
                {selectedServer.players}
                <span className="text-sm font-normal text-slate-400">/{selectedServer.maxPlayers}</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                <Cpu className="w-4 h-4" />
                TPS
              </div>
              <div className={`text-2xl font-bold ${
                selectedServer.tps >= 19 ? "text-green-600" : 
                selectedServer.tps >= 15 ? "text-amber-600" : "text-red-600"
              }`}>
                {selectedServer.tps.toFixed(1)}
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                <Clock className="w-4 h-4" />
                Uptime
              </div>
              <div className="text-xl font-bold text-slate-800">{selectedServer.uptime}</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                <Globe className="w-4 h-4" />
                Status
              </div>
              <div className={`flex items-center gap-2 text-lg font-bold capitalize ${
                selectedServer.status === "online" ? "text-green-600" : 
                selectedServer.status === "maintenance" ? "text-amber-600" : "text-red-600"
              }`}>
                {selectedServer.status === "online" ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                {selectedServer.status}
              </div>
            </div>
          </div>

          {/* Resource usage */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Resource Usage</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> CPU
                  </span>
                  <span className="font-medium text-slate-800">{selectedServer.cpu}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      selectedServer.cpu > 80 ? "bg-red-500" : 
                      selectedServer.cpu > 60 ? "bg-amber-500" : "bg-green-500"
                    }`}
                    style={{ width: `${selectedServer.cpu}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600 flex items-center gap-2">
                    <MemoryStick className="w-4 h-4" /> RAM
                  </span>
                  <span className="font-medium text-slate-800">{selectedServer.ram}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      selectedServer.ram > 80 ? "bg-red-500" : 
                      selectedServer.ram > 60 ? "bg-amber-500" : "bg-purple-500"
                    }`}
                    style={{ width: `${selectedServer.ram}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600 flex items-center gap-2">
                    <HardDrive className="w-4 h-4" /> Disk
                  </span>
                  <span className="font-medium text-slate-800">{selectedServer.disk}%</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all"
                    style={{ width: `${selectedServer.disk}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Console */}
          <div className="bg-slate-900 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-4 h-4" />
                <span className="font-medium">Server Console</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="h-64 overflow-y-auto p-4 font-mono text-sm space-y-1">
              {consoleOutput.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-slate-500">[{line.time}]</span>
                  <span className={`
                    ${line.type === "info" ? "text-slate-300" : ""}
                    ${line.type === "success" ? "text-green-400" : ""}
                    ${line.type === "warning" ? "text-amber-400" : ""}
                    ${line.type === "error" ? "text-red-400" : ""}
                  `}>
                    {line.message}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-slate-700">
              <div className="flex gap-2">
                <span className="text-green-400 font-mono">&gt;</span>
                <input
                  type="text"
                  value={consoleInput}
                  onChange={(e) => setConsoleInput(e.target.value)}
                  placeholder="Enter command..."
                  className="flex-1 bg-transparent border-none outline-none text-slate-300 font-mono text-sm placeholder:text-slate-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Server controls */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Server Controls</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 text-green-700 hover:bg-green-100 transition-colors font-medium">
                <Play className="w-5 h-5" />
                Start Server
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors font-medium">
                <Pause className="w-5 h-5" />
                Stop Server
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium">
                <RotateCcw className="w-5 h-5" />
                Restart Server
              </button>
            </div>
          </div>

          {/* Server info */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Server Info</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Server IP</span>
                <span className="font-medium text-slate-800 font-mono">{selectedServer.ip}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Version</span>
                <span className="font-medium text-slate-800">{selectedServer.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Max Players</span>
                <span className="font-medium text-slate-800">{selectedServer.maxPlayers}</span>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-white rounded-2xl border border-slate-200">
            <h2 className="font-semibold text-slate-800 p-6 pb-4">Quick Actions</h2>
            <div className="border-t border-slate-100">
              {["World Backup", "Clear Cache", "Update Plugins", "Edit Config"].map((action) => (
                <button
                  key={action}
                  className="w-full flex items-center justify-between px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {action}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

