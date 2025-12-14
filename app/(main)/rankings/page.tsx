import Link from "next/link"
import { ParchmentCard } from "@/components/ParchmentCard"
import { WoodenButton } from "@/components/WoodenButton"
import { Trophy, Sword, Users, Palette, Activity, ThumbsUp, ArrowLeft, ArrowRight, Filter } from "lucide-react"

export const metadata = {
  title: "Server Rankings",
  description: "Browse the top-rated Hytale servers ranked by community votes and ratings.",
}

// Mock server data
const servers = [
  { id: "emerald-realms", name: "Emerald Realms", rating: 96, players: 1250, category: "RPG", votes: 3420 },
  { id: "dragon-valley", name: "Dragon Valley", rating: 94, players: 890, category: "PvP", votes: 2890 },
  { id: "crystal-kingdoms", name: "Crystal Kingdoms", rating: 92, players: 2100, category: "Survival", votes: 4120 },
  { id: "shadow-lands", name: "Shadow Lands", rating: 91, players: 650, category: "Adventure", votes: 1980 },
  { id: "mystic-isles", name: "Mystic Isles", rating: 89, players: 1800, category: "Creative", votes: 2650 },
  { id: "storm-forge", name: "Storm Forge", rating: 87, players: 420, category: "PvP", votes: 1540 },
  { id: "phoenix-haven", name: "Phoenix Haven", rating: 86, players: 780, category: "RPG", votes: 1890 },
  { id: "lunar-realms", name: "Lunar Realms", rating: 84, players: 560, category: "Survival", votes: 1320 },
  { id: "frost-peak", name: "Frost Peak", rating: 82, players: 340, category: "Adventure", votes: 980 },
  { id: "ember-forge", name: "Ember Forge", rating: 80, players: 290, category: "Creative", votes: 870 },
]

const rankingCategories = [
  { slug: "overall", name: "Overall", icon: Trophy, description: "Combined scores" },
  { slug: "pvp", name: "PvP", icon: Sword, description: "Combat rankings" },
  { slug: "community", name: "Community", icon: Users, description: "Best communities" },
  { slug: "aesthetic", name: "Aesthetic", icon: Palette, description: "Visual excellence" },
]

function getRatingClass(rating: number) {
  if (rating >= 90) return "text-emerald-700"
  if (rating >= 70) return "text-amber-600"
  if (rating >= 50) return "text-orange-600"
  return "text-red-700"
}

export default function RankingsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="page-header text-center">
        <h1 className="page-title text-4xl mb-4">Server Rankings</h1>
        <p className="page-subtitle text-lg max-w-2xl mx-auto">
          The best Hytale servers as voted by the community. Click any server for detailed information.
        </p>
      </div>

      {/* Ranking Categories */}
      <div className="content-section">
        <h2 className="section-title text-2xl text-center mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rankingCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/rankings/${cat.slug}`}
              className="group"
            >
              <ParchmentCard className="text-center h-full hover:bg-[#fcf6e6] transition-colors">
                <div className="flex justify-center mb-3">
                  <cat.icon className="w-8 h-8 text-stone-700 group-hover:text-amber-700 transition-colors" />
                </div>
                <h3 className="font-bold text-ink group-hover:text-amber-800 transition-colors mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-stone-500 font-serif">{cat.description}</p>
              </ParchmentCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center gap-2 mb-8">
        <span className="bg-amber-700 text-[#f3e9d2] px-4 py-1.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
          <Filter className="w-3 h-3" /> All
        </span>
        {rankingCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/rankings/${cat.slug}`}
            className="bg-stone-200 text-stone-600 hover:bg-stone-300 hover:text-stone-800 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors border border-stone-300 flex items-center gap-2"
          >
            <cat.icon className="w-3 h-3" /> {cat.name}
          </Link>
        ))}
      </div>

      {/* Rankings List */}
      <div className="space-y-4">
        {servers.map((server, index) => (
          <Link
            key={server.id}
            href={`/servers/${server.id}`}
            className="block group"
          >
            <ParchmentCard className="flex items-center gap-6 hover:border-amber-300 transition-colors">
              {/* Rank */}
              <div className="w-12 h-12 flex items-center justify-center bg-stone-800 text-[#f3e9d2] rounded font-cinzel font-bold text-xl shadow-inner flex-shrink-0">
                #{index + 1}
              </div>

              {/* Server Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-bold text-ink group-hover:text-amber-800 transition-colors truncate">{server.name}</h2>
                  <span className="bg-stone-200 text-stone-700 px-2 py-0.5 rounded text-xs font-serif uppercase tracking-wide border border-stone-300">
                    {server.category}
                  </span>
                </div>
                <div className="text-stone-600 font-serif text-sm flex items-center gap-4">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {server.players.toLocaleString()} online</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> {server.votes.toLocaleString()} votes</span>
                </div>
              </div>

              {/* Rating */}
              <div className="text-right px-4 border-l border-stone-300 flex-shrink-0">
                <div className={`text-2xl font-bold ${getRatingClass(server.rating)}`}>
                  {server.rating}
                </div>
                <div className="text-xs text-stone-500 uppercase tracking-wide">rating</div>
              </div>
            </ParchmentCard>
          </Link>
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="flex justify-center items-center gap-4 pt-6">
        <WoodenButton disabled className="opacity-50 cursor-not-allowed px-4">
          <ArrowLeft className="w-4 h-4" /> Previous
        </WoodenButton>
        <span className="text-stone-600 font-serif font-bold">Page 1 of 5</span>
        <WoodenButton className="px-4">
          Next <ArrowRight className="w-4 h-4" />
        </WoodenButton>
      </div>

      {/* Info Box */}
      <div className="bg-[#e8dec5] border-l-4 border-amber-700 p-6 rounded-r shadow-sm mt-8">
        <div className="flex items-start gap-4">
          <div className="bg-amber-700/10 p-2 rounded-full">
            <Activity className="w-6 h-6 text-amber-800" />
          </div>
          <div>
            <h3 className="font-bold text-ink text-lg mb-2">How Rankings Work</h3>
            <p className="text-stone-700 leading-relaxed">
              Server rankings are calculated based on community votes, player activity, uptime, 
              and overall rating scores. Rankings update daily to ensure accuracy. 
              Explore category-specific rankings above for specialized leaderboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
