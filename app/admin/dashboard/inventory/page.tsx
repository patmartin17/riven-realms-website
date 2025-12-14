"use client"

import { useState } from "react"
import { 
  Package, 
  Search, 
  User,
  Sword,
  Shield,
  Gem,
  Crown,
  Sparkles,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  ChevronDown,
  ArrowLeftRight
} from "lucide-react"

// Mock player data
const players = [
  { id: 1, username: "xKnight", uuid: "abc123", online: true },
  { id: 2, username: "DragonSlayer99", uuid: "def456", online: true },
  { id: 3, username: "MagicWizard", uuid: "ghi789", online: false },
  { id: 4, username: "BuilderPro", uuid: "jkl012", online: true },
  { id: 5, username: "NewPlayer2024", uuid: "mno345", online: false },
]

// Mock inventory items with Minecraft-style slots
const inventorySlots = [
  // Hotbar (0-8)
  { slot: 0, item: { name: "Diamond Sword", type: "weapon", enchanted: true, count: 1, rarity: "legendary" } },
  { slot: 1, item: { name: "Bow", type: "weapon", enchanted: true, count: 1, rarity: "epic" } },
  { slot: 2, item: { name: "Golden Apple", type: "consumable", enchanted: false, count: 16, rarity: "rare" } },
  { slot: 3, item: { name: "Ender Pearl", type: "consumable", enchanted: false, count: 8, rarity: "rare" } },
  { slot: 4, item: null },
  { slot: 5, item: null },
  { slot: 6, item: { name: "Cobblestone", type: "block", enchanted: false, count: 64, rarity: "common" } },
  { slot: 7, item: { name: "Oak Planks", type: "block", enchanted: false, count: 64, rarity: "common" } },
  { slot: 8, item: { name: "Torch", type: "block", enchanted: false, count: 32, rarity: "common" } },
  // Main inventory (9-35) - Static data to avoid hydration errors
  { slot: 9, item: { name: "Iron Ingot", type: "material", enchanted: false, count: 32, rarity: "common" } },
  { slot: 10, item: null },
  { slot: 11, item: { name: "Gold Ingot", type: "material", enchanted: false, count: 16, rarity: "uncommon" } },
  { slot: 12, item: null },
  { slot: 13, item: { name: "Diamond", type: "material", enchanted: false, count: 8, rarity: "rare" } },
  { slot: 14, item: null },
  { slot: 15, item: { name: "Emerald", type: "material", enchanted: false, count: 24, rarity: "rare" } },
  { slot: 16, item: null },
  { slot: 17, item: { name: "Coal", type: "material", enchanted: false, count: 48, rarity: "common" } },
  { slot: 18, item: null },
  { slot: 19, item: { name: "Redstone", type: "material", enchanted: false, count: 64, rarity: "common" } },
  { slot: 20, item: null },
  { slot: 21, item: { name: "Iron Ingot", type: "material", enchanted: false, count: 12, rarity: "common" } },
  { slot: 22, item: null },
  { slot: 23, item: null },
  { slot: 24, item: { name: "Gold Ingot", type: "material", enchanted: false, count: 8, rarity: "uncommon" } },
  { slot: 25, item: null },
  { slot: 26, item: null },
  { slot: 27, item: { name: "Diamond", type: "material", enchanted: false, count: 4, rarity: "rare" } },
  { slot: 28, item: null },
  { slot: 29, item: null },
  { slot: 30, item: { name: "Coal", type: "material", enchanted: false, count: 32, rarity: "common" } },
  { slot: 31, item: null },
  { slot: 32, item: null },
  { slot: 33, item: { name: "Emerald", type: "material", enchanted: false, count: 16, rarity: "rare" } },
  { slot: 34, item: null },
  { slot: 35, item: null },
]

// Armor slots
const armorSlots = [
  { slot: "helmet", item: { name: "Diamond Helmet", type: "armor", enchanted: true, rarity: "legendary" } },
  { slot: "chestplate", item: { name: "Diamond Chestplate", type: "armor", enchanted: true, rarity: "legendary" } },
  { slot: "leggings", item: { name: "Diamond Leggings", type: "armor", enchanted: true, rarity: "legendary" } },
  { slot: "boots", item: { name: "Diamond Boots", type: "armor", enchanted: true, rarity: "legendary" } },
]

const offhandSlot = { item: { name: "Shield", type: "equipment", enchanted: false, rarity: "uncommon" } }

export default function InventoryPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [showPlayerDropdown, setShowPlayerDropdown] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)

  const filteredPlayers = players.filter(p => 
    p.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case "legendary": return "from-amber-400 to-orange-500"
      case "epic": return "from-purple-400 to-purple-600"
      case "rare": return "from-blue-400 to-blue-600"
      case "uncommon": return "from-green-400 to-green-600"
      default: return "from-slate-400 to-slate-500"
    }
  }

  const getRarityBorder = (rarity: string) => {
    switch(rarity) {
      case "legendary": return "border-amber-400 shadow-amber-500/30"
      case "epic": return "border-purple-400 shadow-purple-500/30"
      case "rare": return "border-blue-400 shadow-blue-500/30"
      case "uncommon": return "border-green-400 shadow-green-500/30"
      default: return "border-slate-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Inventory Editor</h1>
          <p className="text-slate-500 text-sm mt-1">View and modify player inventories, equipment, and items in real-time</p>
        </div>
        <div className="flex gap-3">
          {editMode ? (
            <>
              <button 
                onClick={() => setEditMode(false)}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
              <button 
                onClick={() => setEditMode(false)}
                className="flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </>
          ) : (
            <button 
              onClick={() => setEditMode(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
            >
              <Edit className="w-5 h-5" />
              Edit Inventory
            </button>
          )}
        </div>
      </div>

      {/* Player selector */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search player..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowPlayerDropdown(true); }}
              onFocus={() => setShowPlayerDropdown(true)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
            />
            {showPlayerDropdown && searchQuery && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-20 max-h-48 overflow-y-auto">
                {filteredPlayers.map((player) => (
                  <button
                    key={player.id}
                    onClick={() => { setSelectedPlayer(player); setShowPlayerDropdown(false); setSearchQuery(""); }}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-purple-50 text-left"
                  >
                    <div className={`w-2 h-2 rounded-full ${player.online ? "bg-green-500" : "bg-slate-400"}`} />
                    <span className="font-medium text-slate-700">{player.username}</span>
                    <span className="text-xs text-slate-400">{player.online ? "Online" : "Offline"}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 px-4 py-3 bg-slate-50 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              {selectedPlayer.username.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-slate-800">{selectedPlayer.username}</div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className={`w-2 h-2 rounded-full ${selectedPlayer.online ? "bg-green-500" : "bg-slate-400"}`} />
                {selectedPlayer.online ? "Online" : "Offline"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Main inventory */}
        <div className="xl:col-span-3 bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-800 mb-4">Player Inventory</h2>
          
          {/* Inventory grid - styled like Minecraft */}
          <div className="bg-slate-100 rounded-xl p-4">
            {/* Main inventory rows */}
            <div className="space-y-1 mb-4">
              {[0, 1, 2].map((row) => (
                <div key={row} className="grid grid-cols-9 gap-1">
                  {inventorySlots.slice(9 + row * 9, 9 + (row + 1) * 9).map((slot) => (
                    <button
                      key={slot.slot}
                      onClick={() => editMode && setSelectedSlot(slot.slot)}
                      className={`
                        aspect-square rounded-lg border-2 transition-all relative group
                        ${slot.item ? getRarityBorder(slot.item.rarity) + " bg-slate-800/90 shadow-lg" : "border-slate-300/50 bg-slate-200/50"}
                        ${editMode ? "hover:border-purple-400 cursor-pointer" : ""}
                        ${selectedSlot === slot.slot ? "ring-2 ring-purple-500 ring-offset-2" : ""}
                      `}
                    >
                      {slot.item && (
                        <>
                          <div className={`absolute inset-1 rounded bg-gradient-to-br ${getRarityColor(slot.item.rarity)} opacity-20`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            {slot.item.type === "weapon" && <Sword className="w-5 h-5 text-slate-200" />}
                            {slot.item.type === "consumable" && <Sparkles className="w-5 h-5 text-slate-200" />}
                            {slot.item.type === "block" && <Package className="w-5 h-5 text-slate-200" />}
                            {slot.item.type === "material" && <Gem className="w-5 h-5 text-slate-200" />}
                          </div>
                          {slot.item.count > 1 && (
                            <span className="absolute bottom-0.5 right-1 text-xs font-bold text-white drop-shadow-lg">
                              {slot.item.count}
                            </span>
                          )}
                          {slot.item.enchanted && (
                            <div className="absolute inset-0 bg-purple-400/20 animate-pulse rounded-lg" />
                          )}
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                            <div className={`font-semibold ${
                              slot.item.rarity === "legendary" ? "text-amber-400" :
                              slot.item.rarity === "epic" ? "text-purple-400" :
                              slot.item.rarity === "rare" ? "text-blue-400" :
                              slot.item.rarity === "uncommon" ? "text-green-400" : "text-slate-300"
                            }`}>
                              {slot.item.name}
                            </div>
                            {slot.item.enchanted && <div className="text-purple-300">✦ Enchanted</div>}
                          </div>
                        </>
                      )}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t-2 border-slate-300/50 my-3" />

            {/* Hotbar */}
            <div className="grid grid-cols-9 gap-1">
              {inventorySlots.slice(0, 9).map((slot) => (
                <button
                  key={slot.slot}
                  onClick={() => editMode && setSelectedSlot(slot.slot)}
                  className={`
                    aspect-square rounded-lg border-2 transition-all relative group
                    ${slot.item ? getRarityBorder(slot.item.rarity) + " bg-slate-800/90 shadow-lg" : "border-slate-400/50 bg-slate-300/50"}
                    ${editMode ? "hover:border-purple-400 cursor-pointer" : ""}
                    ${selectedSlot === slot.slot ? "ring-2 ring-purple-500 ring-offset-2" : ""}
                  `}
                >
                  {slot.item && (
                    <>
                      <div className={`absolute inset-1 rounded bg-gradient-to-br ${getRarityColor(slot.item.rarity)} opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        {slot.item.type === "weapon" && <Sword className="w-5 h-5 text-slate-200" />}
                        {slot.item.type === "consumable" && <Sparkles className="w-5 h-5 text-slate-200" />}
                        {slot.item.type === "block" && <Package className="w-5 h-5 text-slate-200" />}
                        {slot.item.type === "material" && <Gem className="w-5 h-5 text-slate-200" />}
                      </div>
                      {slot.item.count > 1 && (
                        <span className="absolute bottom-0.5 right-1 text-xs font-bold text-white drop-shadow-lg">
                          {slot.item.count}
                        </span>
                      )}
                      {slot.item.enchanted && (
                        <div className="absolute inset-0 bg-purple-400/20 animate-pulse rounded-lg" />
                      )}
                    </>
                  )}
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 font-medium">
                    {slot.slot + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - armor and actions */}
        <div className="space-y-6">
          {/* Armor slots */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Equipment</h2>
            <div className="bg-slate-100 rounded-xl p-4 space-y-2">
              {armorSlots.map((armor) => (
                <div
                  key={armor.slot}
                  className={`
                    flex items-center gap-3 p-2 rounded-lg border-2 
                    ${armor.item ? getRarityBorder(armor.item.rarity) + " bg-slate-800/90" : "border-slate-300/50 bg-slate-200/50"}
                  `}
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center">
                    {armor.item && <Shield className="w-6 h-6 text-slate-200" />}
                  </div>
                  <div className="flex-1">
                    {armor.item ? (
                      <div className={`text-sm font-medium ${
                        armor.item.rarity === "legendary" ? "text-amber-400" : "text-slate-200"
                      }`}>
                        {armor.item.name}
                      </div>
                    ) : (
                      <div className="text-sm text-slate-400 capitalize">{armor.slot}</div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Offhand */}
              <div className="pt-2 border-t border-slate-300/50">
                <div className={`
                  flex items-center gap-3 p-2 rounded-lg border-2 
                  ${offhandSlot.item ? getRarityBorder(offhandSlot.item.rarity) + " bg-slate-800/90" : "border-slate-300/50 bg-slate-200/50"}
                `}>
                  <div className="w-10 h-10 rounded flex items-center justify-center">
                    <Shield className="w-6 h-6 text-slate-200" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-200">{offhandSlot.item?.name || "Offhand"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors font-medium text-sm">
                <Plus className="w-5 h-5" />
                Add Item
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors font-medium text-sm">
                <ArrowLeftRight className="w-5 h-5" />
                Transfer Items
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-medium text-sm">
                <Trash2 className="w-5 h-5" />
                Clear Inventory
              </button>
            </div>
          </div>

          {/* Item rarity legend */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Rarity Legend</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-amber-400 to-orange-500" />
                <span className="text-slate-600">Legendary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-400 to-purple-600" />
                <span className="text-slate-600">Epic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-400 to-blue-600" />
                <span className="text-slate-600">Rare</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-green-400 to-green-600" />
                <span className="text-slate-600">Uncommon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-slate-400 to-slate-500" />
                <span className="text-slate-600">Common</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

