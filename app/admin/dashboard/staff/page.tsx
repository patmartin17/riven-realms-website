"use client"

import { useState } from "react"
import { 
  Users, 
  Search, 
  Plus, 
  MoreVertical,
  Shield,
  Crown,
  Star,
  UserCheck,
  Clock,
  Mail,
  Edit,
  Trash2,
  ChevronDown
} from "lucide-react"

// Mock staff data
const staffMembers = [
  { 
    id: 1, 
    username: "Admin_Patrick", 
    role: "Owner", 
    roleColor: "purple",
    email: "patrick@rivenrealms.com",
    discord: "Patrick#0001",
    joinedDate: "Jan 2023",
    lastActive: "Online",
    status: "online",
    permissions: ["all"]
  },
  { 
    id: 2, 
    username: "ModeratorAlex", 
    role: "Admin", 
    roleColor: "red",
    email: "alex@rivenrealms.com",
    discord: "Alex#1234",
    joinedDate: "Mar 2023",
    lastActive: "2 hours ago",
    status: "away",
    permissions: ["ban", "kick", "mute", "tickets"]
  },
  { 
    id: 3, 
    username: "HelperSarah", 
    role: "Moderator", 
    roleColor: "blue",
    email: "sarah@rivenrealms.com",
    discord: "Sarah#5678",
    joinedDate: "Jun 2023",
    lastActive: "Online",
    status: "online",
    permissions: ["kick", "mute", "tickets"]
  },
  { 
    id: 4, 
    username: "BuilderJohn", 
    role: "Builder", 
    roleColor: "green",
    email: "john@rivenrealms.com",
    discord: "John#9999",
    joinedDate: "Aug 2023",
    lastActive: "1 day ago",
    status: "offline",
    permissions: ["worldedit", "creative"]
  },
  { 
    id: 5, 
    username: "TrialMod_Emma", 
    role: "Trial Mod", 
    roleColor: "amber",
    email: "emma@rivenrealms.com",
    discord: "Emma#4444",
    joinedDate: "Nov 2023",
    lastActive: "30 min ago",
    status: "online",
    permissions: ["mute", "tickets"]
  },
]

const roleFilters = ["All Roles", "Owner", "Admin", "Moderator", "Builder", "Trial Mod"]

export default function StaffPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRole, setSelectedRole] = useState("All Roles")
  const [showRoleDropdown, setShowRoleDropdown] = useState(false)

  const filteredStaff = staffMembers.filter(member => {
    const matchesSearch = member.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = selectedRole === "All Roles" || member.role === selectedRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Staff Management</h1>
          <p className="text-slate-500 text-sm mt-1">View and manage team members, roles, and access permissions</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all">
          <Plus className="w-5 h-5" />
          Add Team Member
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
          />
        </div>

        {/* Role filter */}
        <div className="relative">
          <button
            onClick={() => setShowRoleDropdown(!showRoleDropdown)}
            className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-purple-300 transition-colors min-w-[150px] justify-between"
          >
            {selectedRole}
            <ChevronDown className={`w-4 h-4 transition-transform ${showRoleDropdown ? "rotate-180" : ""}`} />
          </button>
          {showRoleDropdown && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-20">
              {roleFilters.map((role) => (
                <button
                  key={role}
                  onClick={() => { setSelectedRole(role); setShowRoleDropdown(false); }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-purple-50 ${selectedRole === role ? "text-purple-600 bg-purple-50" : "text-slate-700"}`}
                >
                  {role}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Staff grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredStaff.map((member) => (
          <div 
            key={member.id}
            className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            {/* Card header with role color */}
            <div className={`
              h-2
              ${member.roleColor === "purple" ? "bg-gradient-to-r from-purple-500 to-purple-600" : ""}
              ${member.roleColor === "red" ? "bg-gradient-to-r from-red-500 to-red-600" : ""}
              ${member.roleColor === "blue" ? "bg-gradient-to-r from-blue-500 to-blue-600" : ""}
              ${member.roleColor === "green" ? "bg-gradient-to-r from-green-500 to-green-600" : ""}
              ${member.roleColor === "amber" ? "bg-gradient-to-r from-amber-500 to-amber-600" : ""}
            `} />

            <div className="p-5">
              {/* Avatar and info */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg
                      ${member.roleColor === "purple" ? "bg-gradient-to-br from-purple-500 to-purple-700" : ""}
                      ${member.roleColor === "red" ? "bg-gradient-to-br from-red-500 to-red-700" : ""}
                      ${member.roleColor === "blue" ? "bg-gradient-to-br from-blue-500 to-blue-700" : ""}
                      ${member.roleColor === "green" ? "bg-gradient-to-br from-green-500 to-green-700" : ""}
                      ${member.roleColor === "amber" ? "bg-gradient-to-br from-amber-500 to-amber-700" : ""}
                    `}>
                      {member.username.charAt(0)}
                    </div>
                    <div className={`
                      absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white
                      ${member.status === "online" ? "bg-green-500" : ""}
                      ${member.status === "away" ? "bg-amber-500" : ""}
                      ${member.status === "offline" ? "bg-slate-400" : ""}
                    `} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{member.username}</h3>
                    <span className={`
                      inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full
                      ${member.roleColor === "purple" ? "bg-purple-100 text-purple-700" : ""}
                      ${member.roleColor === "red" ? "bg-red-100 text-red-700" : ""}
                      ${member.roleColor === "blue" ? "bg-blue-100 text-blue-700" : ""}
                      ${member.roleColor === "green" ? "bg-green-100 text-green-700" : ""}
                      ${member.roleColor === "amber" ? "bg-amber-100 text-amber-700" : ""}
                    `}>
                      {member.role === "Owner" && <Crown className="w-3 h-3" />}
                      {member.role === "Admin" && <Shield className="w-3 h-3" />}
                      {member.role === "Moderator" && <UserCheck className="w-3 h-3" />}
                      {member.role === "Builder" && <Star className="w-3 h-3" />}
                      {member.role}
                    </span>
                  </div>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span>Last active: {member.lastActive}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredStaff.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <Users className="w-12 h-12 mx-auto text-slate-300 mb-4" />
          <h3 className="font-semibold text-slate-700 mb-1">No staff members found</h3>
          <p className="text-sm text-slate-500">Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  )
}

