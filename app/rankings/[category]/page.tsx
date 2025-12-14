import Link from "next/link"
import { notFound } from "next/navigation"

// Define valid ranking categories
const validCategories = {
  overall: {
    name: "Overall",
    description: "The best Hytale servers overall, ranked by combined scores across all categories.",
    icon: "🏆",
  },
  pvp: {
    name: "PvP",
    description: "Top servers for player versus player combat, tournaments, and competitive gameplay.",
    icon: "⚔️",
  },
  community: {
    name: "Community",
    description: "Servers with the most welcoming, active, and engaged player communities.",
    icon: "👥",
  },
  aesthetic: {
    name: "Aesthetic",
    description: "The most beautiful and visually impressive servers with stunning builds and designs.",
    icon: "✨",
  },
}

// Mock server data for each category
const serversByCategory: Record<string, Array<{
  id: string
  name: string
  rating: number
  players: number
  category: string
  votes: number
}>> = {
  overall: [
    { id: "emerald-realms", name: "Emerald Realms", rating: 96, players: 1250, category: "RPG", votes: 3420 },
    { id: "dragon-valley", name: "Dragon Valley", rating: 94, players: 890, category: "PvP", votes: 2890 },
    { id: "crystal-kingdoms", name: "Crystal Kingdoms", rating: 92, players: 2100, category: "Survival", votes: 4120 },
    { id: "shadow-lands", name: "Shadow Lands", rating: 91, players: 650, category: "Adventure", votes: 1980 },
    { id: "mystic-isles", name: "Mystic Isles", rating: 89, players: 1800, category: "Creative", votes: 2650 },
    { id: "storm-forge", name: "Storm Forge", rating: 87, players: 420, category: "PvP", votes: 1540 },
  ],
  pvp: [
    { id: "dragon-valley", name: "Dragon Valley", rating: 98, players: 890, category: "PvP", votes: 2890 },
    { id: "storm-forge", name: "Storm Forge", rating: 95, players: 420, category: "PvP", votes: 1540 },
    { id: "war-grounds", name: "War Grounds", rating: 93, players: 670, category: "PvP", votes: 1820 },
    { id: "battle-arena", name: "Battle Arena", rating: 91, players: 540, category: "PvP", votes: 1450 },
    { id: "conquest-realm", name: "Conquest Realm", rating: 89, players: 380, category: "PvP", votes: 980 },
    { id: "gladiator-pit", name: "Gladiator Pit", rating: 87, players: 290, category: "PvP", votes: 760 },
  ],
  community: [
    { id: "crystal-kingdoms", name: "Crystal Kingdoms", rating: 97, players: 2100, category: "Survival", votes: 4120 },
    { id: "haven-valley", name: "Haven Valley", rating: 95, players: 1650, category: "Survival", votes: 3200 },
    { id: "emerald-realms", name: "Emerald Realms", rating: 94, players: 1250, category: "RPG", votes: 3420 },
    { id: "friendly-lands", name: "Friendly Lands", rating: 92, players: 980, category: "Creative", votes: 2100 },
    { id: "unity-server", name: "Unity Server", rating: 90, players: 760, category: "Survival", votes: 1650 },
    { id: "welcome-home", name: "Welcome Home", rating: 88, players: 540, category: "Creative", votes: 1200 },
  ],
  aesthetic: [
    { id: "mystic-isles", name: "Mystic Isles", rating: 98, players: 1800, category: "Creative", votes: 2650 },
    { id: "paradise-build", name: "Paradise Builds", rating: 96, players: 1200, category: "Creative", votes: 2100 },
    { id: "artisan-realm", name: "Artisan Realm", rating: 94, players: 890, category: "Creative", votes: 1850 },
    { id: "emerald-realms", name: "Emerald Realms", rating: 93, players: 1250, category: "RPG", votes: 3420 },
    { id: "crystal-kingdoms", name: "Crystal Kingdoms", rating: 91, players: 2100, category: "Survival", votes: 4120 },
    { id: "scenic-world", name: "Scenic World", rating: 89, players: 450, category: "Creative", votes: 980 },
  ],
}

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params
  const categoryData = validCategories[category as keyof typeof validCategories]
  
  if (!categoryData) {
    return { title: "Category Not Found" }
  }
  
  return {
    title: `${categoryData.name} Rankings`,
    description: categoryData.description,
  }
}

function getRatingClass(rating: number) {
  if (rating >= 90) return "excellent"
  if (rating >= 70) return "good"
  if (rating >= 50) return "average"
  return "poor"
}

export default async function RankingsCategoryPage({ params }: Props) {
  const { category } = await params
  const categoryData = validCategories[category as keyof typeof validCategories]
  
  if (!categoryData) {
    notFound()
  }
  
  const servers = serversByCategory[category] || []
  const allCategories = Object.entries(validCategories)

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="page-header">
        <div className="text-4xl mb-2">{categoryData.icon}</div>
        <h1 className="page-title">{categoryData.name} Rankings</h1>
        <p className="page-subtitle">
          {categoryData.description}
        </p>
      </div>

      {/* Category Navigation */}
      <div className="filter-pills justify-center">
        <Link href="/rankings" className="filter-pill">
          All
        </Link>
        {allCategories.map(([slug, data]) => (
          <Link
            key={slug}
            href={`/rankings/${slug}`}
            className={`filter-pill ${slug === category ? "active" : ""}`}
          >
            {data.icon} {data.name}
          </Link>
        ))}
      </div>

      {/* Rankings List */}
      <div className="space-y-3">
        {servers.map((server, index) => (
          <Link
            key={server.id}
            href={`/servers/${server.id}`}
            className="item-card flex items-center gap-4"
          >
            {/* Rank */}
            <div className="rank-number">
              #{index + 1}
            </div>

            {/* Server Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="item-card-title truncate mb-0">{server.name}</h2>
                <span className="item-card-badge">{server.category}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>👥 {server.players.toLocaleString()} online</span>
                <span>👍 {server.votes.toLocaleString()} votes</span>
              </div>
            </div>

            {/* Rating */}
            <div className="text-right">
              <div className={`rating-badge ${getRatingClass(server.rating)}`}>
                {server.rating}
              </div>
              <div className="text-xs text-muted-foreground">{categoryData.name.toLowerCase()} score</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Box */}
      <div className="info-box">
        <div className="info-box-title">{categoryData.icon} About {categoryData.name} Rankings</div>
        <div className="info-box-content">
          {category === "overall" && "Overall rankings combine scores from all categories including gameplay, community, performance, and aesthetics."}
          {category === "pvp" && "PvP rankings are based on combat mechanics, balance, tournament systems, and competitive features."}
          {category === "community" && "Community rankings consider player engagement, moderation quality, events, and overall friendliness."}
          {category === "aesthetic" && "Aesthetic rankings evaluate visual design, builds, theming, and overall artistic quality."}
        </div>
      </div>

      {/* Back Link */}
      <div className="text-center pt-4">
        <Link href="/rankings" className="content-link">
          ← View All Rankings
        </Link>
      </div>
    </div>
  )
}

