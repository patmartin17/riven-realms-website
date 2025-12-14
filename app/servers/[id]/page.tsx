import Link from "next/link"
import { notFound } from "next/navigation"

// Mock server data
const servers: Record<string, {
  name: string
  rating: number
  players: number
  maxPlayers: number
  category: string
  description: string
  ip: string
  website: string
  discord: string
  features: string[]
  ratings: { category: string; score: number }[]
}> = {
  "emerald-realms": {
    name: "Emerald Realms",
    rating: 96,
    players: 1250,
    maxPlayers: 2000,
    category: "RPG",
    description: "An immersive RPG experience with custom quests, classes, and a rich storyline. Perfect for players who love deep gameplay mechanics. Join thousands of adventurers exploring vast lands, completing epic quests, and forging their legends.",
    ip: "play.emeraldrealms.net",
    website: "https://emeraldrealms.net",
    discord: "https://discord.gg/emeraldrealms",
    features: ["Custom Classes", "Epic Quests", "Player Housing", "Guild System", "Economy", "PvE Dungeons"],
    ratings: [
      { category: "Gameplay", score: 98 },
      { category: "Community", score: 95 },
      { category: "Performance", score: 94 },
      { category: "Content", score: 97 },
    ],
  },
  "dragon-valley": {
    name: "Dragon Valley",
    rating: 94,
    players: 890,
    maxPlayers: 1500,
    category: "PvP",
    description: "Intense PvP battles in a medieval fantasy setting. Clan wars, tournaments, and ranked matches await! Rise through the ranks and prove your worth in combat.",
    ip: "pvp.dragonvalley.net",
    website: "https://dragonvalley.net",
    discord: "https://discord.gg/dragonvalley",
    features: ["Clan Wars", "Tournaments", "Ranked Matches", "Leaderboards", "Custom Arenas", "Rewards System"],
    ratings: [
      { category: "Gameplay", score: 95 },
      { category: "Community", score: 92 },
      { category: "Performance", score: 96 },
      { category: "Content", score: 93 },
    ],
  },
  "crystal-kingdoms": {
    name: "Crystal Kingdoms",
    rating: 92,
    players: 2100,
    maxPlayers: 3000,
    category: "Survival",
    description: "A classic survival experience with a twist. Build, explore, and survive in a world filled with mysteries. Form alliances, establish kingdoms, and protect your realm.",
    ip: "survival.crystalkingdoms.net",
    website: "https://crystalkingdoms.net",
    discord: "https://discord.gg/crystalkingdoms",
    features: ["Land Claims", "Economy", "McMMO Skills", "Custom Enchants", "Events", "Shops"],
    ratings: [
      { category: "Gameplay", score: 93 },
      { category: "Community", score: 94 },
      { category: "Performance", score: 90 },
      { category: "Content", score: 91 },
    ],
  },
  "shadow-lands": {
    name: "Shadow Lands",
    rating: 91,
    players: 650,
    maxPlayers: 1000,
    category: "Adventure",
    description: "Embark on epic adventures through dangerous dungeons and discover hidden treasures. Face challenging bosses and uncover the mysteries of the Shadow Lands.",
    ip: "adventure.shadowlands.net",
    website: "https://shadowlands.net",
    discord: "https://discord.gg/shadowlands",
    features: ["Dungeons", "Boss Fights", "Treasure Hunting", "Story Mode", "Co-op Play", "Rare Loot"],
    ratings: [
      { category: "Gameplay", score: 92 },
      { category: "Community", score: 90 },
      { category: "Performance", score: 91 },
      { category: "Content", score: 91 },
    ],
  },
  "mystic-isles": {
    name: "Mystic Isles",
    rating: 89,
    players: 1800,
    maxPlayers: 2500,
    category: "Creative",
    description: "Unlimited creativity! Build anything you can imagine with our extensive toolset and supportive community. Participate in build competitions and showcase your masterpieces.",
    ip: "create.mysticisles.net",
    website: "https://mysticisles.net",
    discord: "https://discord.gg/mysticisles",
    features: ["Unlimited Plots", "WorldEdit", "Build Competitions", "Showcases", "Community Voting", "Rewards"],
    ratings: [
      { category: "Gameplay", score: 88 },
      { category: "Community", score: 92 },
      { category: "Performance", score: 87 },
      { category: "Content", score: 89 },
    ],
  },
  "storm-forge": {
    name: "Storm Forge",
    rating: 87,
    players: 420,
    maxPlayers: 800,
    category: "PvP",
    description: "Hardcore PvP with full loot. Only the strongest survive in the unforgiving world of Storm Forge. Risk it all for glory and riches.",
    ip: "hardcore.stormforge.net",
    website: "https://stormforge.net",
    discord: "https://discord.gg/stormforge",
    features: ["Full Loot PvP", "Factions", "Raiding", "Territory Control", "Bounty System", "Hardcore Mode"],
    ratings: [
      { category: "Gameplay", score: 89 },
      { category: "Community", score: 84 },
      { category: "Performance", score: 88 },
      { category: "Content", score: 87 },
    ],
  },
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const server = servers[id]
  if (!server) return { title: "Server Not Found" }
  return {
    title: server.name,
    description: server.description,
  }
}

function getRatingClass(rating: number) {
  if (rating >= 90) return "excellent"
  if (rating >= 70) return "good"
  if (rating >= 50) return "average"
  return "poor"
}

export default async function ServerPage({ params }: Props) {
  const { id } = await params
  const server = servers[id]

  if (!server) {
    notFound()
  }

  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link href="/servers" className="content-link inline-flex items-center gap-2">
        ← Back to Servers
      </Link>

      {/* Server Header */}
      <div className="content-card">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{server.name}</h1>
              <span className="item-card-badge">{server.category}</span>
            </div>
            <p className="text-muted-foreground max-w-2xl">{server.description}</p>
          </div>
          
          {/* Rating Circle */}
          <div className={`flex-shrink-0 w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 ${
            server.rating >= 90 ? "border-green-500 bg-green-500/10" :
            server.rating >= 70 ? "border-yellow-500 bg-yellow-500/10" :
            "border-red-500 bg-red-500/10"
          }`}>
            <span className={`text-2xl font-bold ${getRatingClass(server.rating)}`}>
              {server.rating}
            </span>
            <span className="text-xs text-muted-foreground">rating</span>
          </div>
        </div>
      </div>

      {/* Server Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Connection Info */}
        <div className="content-card">
          <h2 className="section-title">Connection Info</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-muted-foreground">Server Address</label>
              <div className="flex items-center gap-2 mt-1">
                <code className="flex-1 bg-secondary px-3 py-2 rounded text-gold font-mono text-sm">
                  {server.ip}
                </code>
                <button className="btn-secondary px-3 py-2 text-sm">
                  Copy
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Players Online</span>
              <span className="text-foreground">{server.players.toLocaleString()} / {server.maxPlayers.toLocaleString()}</span>
            </div>
            <div className="flex gap-2">
              <a href={server.website} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm flex-1 text-center">
                🌐 Website
              </a>
              <a href={server.discord} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm flex-1 text-center">
                💬 Discord
              </a>
            </div>
          </div>
        </div>

        {/* Category Ratings */}
        <div className="content-card">
          <h2 className="section-title">Ratings Breakdown</h2>
          <div className="space-y-3">
            {server.ratings.map((rating) => (
              <div key={rating.category}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{rating.category}</span>
                  <span className={getRatingClass(rating.score)}>{rating.score}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      rating.score >= 90 ? "bg-green-500" :
                      rating.score >= 70 ? "bg-yellow-500" :
                      "bg-red-500"
                    }`}
                    style={{ width: `${rating.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="content-card">
        <h2 className="section-title">Server Features</h2>
        <div className="flex flex-wrap gap-2">
          {server.features.map((feature) => (
            <span key={feature} className="item-card-badge text-sm">
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="btn-primary flex-1">
          👍 Vote for this Server
        </button>
        <button className="btn-secondary flex-1">
          ⭐ Add to Favorites
        </button>
        <button className="btn-secondary flex-1">
          📢 Report Issue
        </button>
      </div>
    </div>
  )
}
