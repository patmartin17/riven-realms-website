"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ParchmentCard } from "@/components/ParchmentCard"
import { WoodenButton } from "@/components/WoodenButton"
import { Globe, Sword, Shield, Tent, Map as MapIcon, Palette, Users, ArrowRight, Search, Activity } from "lucide-react"

// Mock server data
const allServers = [
  { id: "emerald-realms", name: "Emerald Realms", rating: 96, players: 1250, category: "RPG", description: "An immersive RPG experience with custom quests and classes." },
  { id: "dragon-valley", name: "Dragon Valley", rating: 94, players: 890, category: "PvP", description: "Intense PvP battles in a medieval fantasy setting." },
  { id: "crystal-kingdoms", name: "Crystal Kingdoms", rating: 92, players: 2100, category: "Survival", description: "Classic survival with a twist. Build, explore, survive." },
  { id: "shadow-lands", name: "Shadow Lands", rating: 91, players: 650, category: "Adventure", description: "Epic adventures through dangerous dungeons." },
  { id: "mystic-isles", name: "Mystic Isles", rating: 89, players: 1800, category: "Creative", description: "Unlimited creativity with extensive building tools." },
  { id: "storm-forge", name: "Storm Forge", rating: 87, players: 420, category: "PvP", description: "Hardcore PvP with full loot mechanics." },
  { id: "phoenix-haven", name: "Phoenix Haven", rating: 86, players: 780, category: "RPG", description: "Rise from the ashes in this unique RPG world." },
  { id: "lunar-realms", name: "Lunar Realms", rating: 84, players: 560, category: "Survival", description: "Survive under the moonlight in this challenging world." },
  { id: "frost-peak", name: "Frost Peak", rating: 82, players: 340, category: "Adventure", description: "Brave the frozen wilderness and uncover secrets." },
  { id: "artisan-realm", name: "Artisan Realm", rating: 80, players: 290, category: "Creative", description: "A haven for builders and creative minds." },
  { id: "war-grounds", name: "War Grounds", rating: 78, players: 670, category: "PvP", description: "Non-stop action in massive battlefields." },
  { id: "haven-valley", name: "Haven Valley", rating: 76, players: 450, category: "Survival", description: "Peaceful survival in a beautiful valley." },
]

const categories = [
  { slug: "all", name: "All", icon: Globe },
  { slug: "rpg", name: "RPG", icon: Sword },
  { slug: "pvp", name: "PvP", icon: Shield },
  { slug: "survival", name: "Survival", icon: Tent },
  { slug: "adventure", name: "Adventure", icon: MapIcon },
  { slug: "creative", name: "Creative", icon: Palette },
]

function getRatingClass(rating: number) {
  if (rating >= 90) return "text-emerald-700"
  if (rating >= 70) return "text-amber-600"
  if (rating >= 50) return "text-orange-600"
  return "text-red-700"
}

function ServersContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")?.toLowerCase() || "all"
  
  // Filter servers by category
  const filteredServers = categoryParam === "all" 
    ? allServers 
    : allServers.filter(server => server.category.toLowerCase() === categoryParam)
  
  // Find the active category
  const activeCategory = categories.find(c => c.slug === categoryParam) || categories[0]
  const ActiveIcon = activeCategory.icon

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="page-header text-center">
        <h1 className="page-title text-4xl mb-4 flex items-center justify-center gap-3">
          {categoryParam !== "all" && <ActiveIcon className="w-8 h-8 text-amber-700" />}
          {activeCategory.name === "All" ? "Browse Servers" : `${activeCategory.name} Servers`}
        </h1>
        <p className="page-subtitle text-lg max-w-2xl mx-auto">
          {categoryParam === "all" 
            ? "Explore all Hytale servers and find your next adventure."
            : `Discover the best ${activeCategory.name.toLowerCase()} servers in the Hytale community.`
          }
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.slug === "all" ? "/servers" : `/servers?category=${cat.slug}`}
            className={`
              px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all border
              ${cat.slug === categoryParam 
                ? "bg-amber-700 text-[#f3e9d2] border-amber-800 shadow-md transform -translate-y-0.5" 
                : "bg-stone-200 text-stone-600 border-stone-300 hover:bg-stone-300 hover:text-stone-800"
              }
            `}
          >
            <cat.icon className="w-4 h-4" /> {cat.name}
          </Link>
        ))}
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-stone-400" />
        </div>
        <input
          type="text"
          placeholder="Search servers..."
          className="w-full pl-10 pr-4 py-3 bg-[#fcf6e6] border border-stone-300 rounded-lg text-ink placeholder:text-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 shadow-inner font-serif"
        />
      </div>

      {/* Results Count */}
      <div className="text-center text-sm text-stone-500 font-serif italic">
        Showing {filteredServers.length} server{filteredServers.length !== 1 ? "s" : ""}
        {categoryParam !== "all" && ` in ${activeCategory.name}`}
      </div>

      {/* Server Grid */}
      {filteredServers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServers.map((server) => (
            <Link
              key={server.id}
              href={`/servers/${server.id}`}
              className="block h-full"
            >
              <ParchmentCard className="h-full flex flex-col hover:border-amber-300 group">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 border-b border-stone-200 pb-2">
                  <span className="bg-stone-200 text-stone-700 px-2 py-0.5 rounded text-xs font-serif uppercase tracking-wide border border-stone-300">
                    {server.category}
                  </span>
                  <span className={`text-xl font-bold ${getRatingClass(server.rating)}`}>
                    {server.rating}
                  </span>
                </div>
                
                {/* Content */}
                <h2 className="text-xl font-bold text-ink mb-2 group-hover:text-amber-800 transition-colors">{server.name}</h2>
                <p className="text-sm text-stone-600 mb-4 line-clamp-2 flex-grow font-serif">
                  {server.description}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-200">
                  <span className="text-sm text-stone-500 flex items-center gap-1 font-serif">
                    <Users className="w-3 h-3" /> {server.players.toLocaleString()}
                  </span>
                  <span className="text-amber-700 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </ParchmentCard>
            </Link>
          ))}
        </div>
      ) : (
        <ParchmentCard className="text-center py-16 bg-[#fcf6e6]">
          <div className="flex justify-center mb-4">
            <Search className="w-12 h-12 text-stone-300" />
          </div>
          <h3 className="text-xl font-bold text-ink mb-2">No Servers Found</h3>
          <p className="text-stone-500 mb-6 font-serif">
            No servers found in the {activeCategory.name} category.
          </p>
          <WoodenButton href="/servers" variant="secondary">
            Browse All Servers
          </WoodenButton>
        </ParchmentCard>
      )}

      {/* Load More */}
      {filteredServers.length > 0 && (
        <div className="text-center pt-6">
          <WoodenButton variant="secondary" className="px-8">
            Load More Servers
          </WoodenButton>
        </div>
      )}

      {/* Category Info */}
      {categoryParam !== "all" && (
        <div className="bg-[#e8dec5] border-l-4 border-amber-700 p-6 rounded-r shadow-sm mt-8">
          <div className="flex items-start gap-4">
            <div className="bg-amber-700/10 p-2 rounded-full">
              <ActiveIcon className="w-6 h-6 text-amber-800" />
            </div>
            <div>
              <h3 className="font-bold text-ink text-lg mb-2">About {activeCategory.name} Servers</h3>
              <p className="text-stone-700 leading-relaxed font-serif">
                {categoryParam === "rpg" && "RPG servers offer immersive role-playing experiences with custom quests, classes, skills, and storylines."}
                {categoryParam === "pvp" && "PvP servers focus on player versus player combat, featuring tournaments, arenas, and competitive gameplay."}
                {categoryParam === "survival" && "Survival servers challenge you to gather resources, build shelters, and survive in a hostile world."}
                {categoryParam === "adventure" && "Adventure servers feature epic quests, dungeons, exploration, and story-driven content."}
                {categoryParam === "creative" && "Creative servers provide unlimited resources and tools for building and creating without limits."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ServersPage() {
  return (
    <Suspense fallback={
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-cinzel font-bold text-ink mb-4">Browse Servers</h1>
          <p className="text-lg text-stone-600">Loading servers...</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-[#f3e9d2] h-64 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    }>
      <ServersContent />
    </Suspense>
  )
}
