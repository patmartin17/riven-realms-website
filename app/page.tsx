import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sword, Shield, Tent, Map as MapIcon, Palette, Gamepad2, Users, Star, Activity, Crown } from "lucide-react"

// Mock featured servers data
const featuredServers = [
  { id: "emerald-realms", name: "Emerald Realms", rating: 96, players: 1250, category: "RPG" },
  { id: "dragon-valley", name: "Dragon Valley", rating: 94, players: 890, category: "PvP" },
  { id: "crystal-kingdoms", name: "Crystal Kingdoms", rating: 92, players: 2100, category: "Survival" },
  { id: "shadow-lands", name: "Shadow Lands", rating: 91, players: 650, category: "Adventure" },
]

const categories = [
  { name: "RPG", icon: Sword, count: 42 },
  { name: "PvP", icon: Shield, count: 38 },
  { name: "Survival", icon: Tent, count: 56 },
  { name: "Creative", icon: Palette, count: 31 },
  { name: "Adventure", icon: MapIcon, count: 27 },
  { name: "Minigames", icon: Gamepad2, count: 45 },
]

const stats = [
  { label: "Active Servers", value: "250+", icon: Activity },
  { label: "Players Online", value: "12.5K", icon: Users },
  { label: "Reviews", value: "8.2K", icon: Star },
  { label: "Communities", value: "180+", icon: Crown },
]

function getRatingColor(rating: number) {
  if (rating >= 90) return "text-[#c77dff]"
  if (rating >= 70) return "text-arcane-gold"
  return "text-[#e0c3fc]"
}

export default function Home() {
  return (
    <div className="relative">
      {/* ========== HERO SECTION ========== */}
      <section className="relative">
        {/* Hero Image Container - Full width, covers entire hero area */}
        <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[75vh] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/desktop/full-background.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-[#1a0a2e]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/50 via-transparent to-[#1a0a2e]/50" />
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="bg-gradient-to-t from-[#1a0a2e] via-[#1a0a2e]/98 to-transparent pt-24 pb-10 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-cinzel font-bold text-white mb-4 drop-shadow-lg">
                Join the Ultimate <span className="text-[#c77dff] text-glow">Hytale</span> Adventure
              </h1>
              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
                Discover legendary servers, forge alliances, and embark on epic quests in the realm&apos;s most immersive gaming communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/servers">Explore Servers</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/rankings">View Rankings</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED COVER SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <p className="text-[#c77dff] font-cinzel text-sm uppercase tracking-widest mb-2">
              ✦ Featured This Week ✦
            </p>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-white text-glow">
              Discover New Realms
            </h2>
          </div>
          
          {/* Empty Cover Image - No border, image has its own frame */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/desktop/empty-cover.png"
              alt="Featured Cover"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center py-8 group">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 group-hover:bg-arcane-purple/25 group-hover:border-arcane-purple/50 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-[#c77dff]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-cinzel text-[#c77dff] text-glow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="arcane-divider max-w-4xl mx-auto" />

      {/* ========== CATEGORIES SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-3">
              Browse by Category
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto">
              Find servers that match your playstyle
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/servers?category=${category.name.toLowerCase()}`}
                className="group"
              >
                <Card className="text-center h-full flex flex-col items-center justify-center gap-3 p-6">
                  <div className="p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 group-hover:bg-arcane-purple/25 group-hover:border-[#c77dff]/50 transition-all duration-300">
                    <category.icon className="w-6 h-6 text-[#c77dff]" />
                  </div>
                  <div>
                    <div className="font-cinzel font-bold text-foreground group-hover:text-[#c77dff] transition-colors">
                      {category.name}
                    </div>
                    <div className="text-xs text-foreground/40 mt-1">{category.count} servers</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="arcane-divider max-w-4xl mx-auto" />

      {/* ========== FEATURED SERVERS SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-2">
                Top Rated Servers
              </h2>
              <p className="text-foreground/50">The realm&apos;s most acclaimed destinations</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/rankings">View All Rankings</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {featuredServers.map((server, index) => (
              <Link
                key={server.id}
                href={`/servers/${server.id}`}
                className="block group"
              >
                <Card className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6">
                  {/* Rank */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg bg-arcane-purple/25 border border-arcane-purple/40 font-cinzel font-bold text-xl text-[#c77dff]">
                    #{index + 1}
                  </div>

                  {/* Server Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold font-cinzel text-foreground group-hover:text-[#c77dff] transition-colors truncate">
                        {server.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-arcane-purple/15 border border-arcane-purple/30 text-[#c77dff] uppercase tracking-wide">
                        {server.category}
                      </span>
                    </div>
                    <div className="text-foreground/50 text-sm flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {server.players.toLocaleString()} online
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex-shrink-0 text-right pl-4 border-l border-arcane-purple/30">
                    <div className={`text-2xl sm:text-3xl font-bold font-cinzel ${getRatingColor(server.rating)}`}>
                      {server.rating}
                    </div>
                    <div className="text-xs text-foreground/40 uppercase tracking-wide">rating</div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="arcane-divider max-w-4xl mx-auto" />

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center p-8 sm:p-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/15 via-transparent to-[#c77dff]/10" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-arcane-gold/10 border border-arcane-gold/30">
                  <Crown className="w-10 h-10 text-arcane-gold" />
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-foreground mb-4">
                Own a Hytale Server?
              </h3>
              <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
                List your server on HytaleHighlights and reach thousands of players seeking their next adventure in the realm.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/submit">Submit Your Server</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
