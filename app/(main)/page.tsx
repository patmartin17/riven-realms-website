import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sword, Shield, Castle, Sparkles, Users, Star, Scroll, Crown, Map as MapIcon, Gem } from "lucide-react"

// Server features
const features = [
  { 
    title: "Epic Kingdoms", 
    description: "Build and rule your own kingdom. Form alliances, wage wars, and shape the realm.", 
    icon: Castle 
  },
  { 
    title: "Custom Classes", 
    description: "Choose from unique classes with special abilities and progression paths.", 
    icon: Sword 
  },
  { 
    title: "Magic System", 
    description: "Master ancient spells and enchantments to gain power over your enemies.", 
    icon: Sparkles 
  },
  { 
    title: "World Events", 
    description: "Participate in server-wide events, boss battles, and seasonal celebrations.", 
    icon: Crown 
  },
]

// Server stats
const stats = [
  { label: "Players Online", value: "1,250+", icon: Users },
  { label: "Active Kingdoms", value: "48", icon: Castle },
  { label: "Quests Available", value: "200+", icon: Scroll },
  { label: "Unique Items", value: "5,000+", icon: Gem },
]

// Game modes
const gameModes = [
  { name: "Survival", icon: Shield, description: "Classic survival with RPG elements" },
  { name: "Kingdoms", icon: Castle, description: "Claim land and build your empire" },
  { name: "Dungeons", icon: MapIcon, description: "Explore procedural dungeons" },
  { name: "PvP Arena", icon: Sword, description: "Competitive player battles" },
]

export default function Home() {
  return (
    <div className="relative">
      {/* ========== HERO SECTION ========== */}
      <section className="relative">
        {/* Hero Image Container */}
        <div className="relative min-h-[40vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[85vh] overflow-hidden">
          <Image
            src="/images/desktop/full-background.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-[#1a0a2e]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/50 via-transparent to-[#1a0a2e]/50" />
          
          {/* Centered Logo with Effects - moved way up on mobile */}
          <div className="absolute inset-0 flex items-start sm:items-center justify-center pt-2 sm:pt-0 sm:pb-20 md:pb-24 lg:pb-28">
            <div className="relative hero-logo-container">
              {/* Particle effects */}
              <div className="hero-particles">
                <div className="particle particle-1" />
                <div className="particle particle-2" />
                <div className="particle particle-3" />
                <div className="particle particle-4" />
                <div className="particle particle-5" />
                <div className="particle particle-6" />
                <div className="particle particle-7" />
                <div className="particle particle-8" />
              </div>
              
              {/* Glow ring behind logo */}
              <div className="absolute inset-0 hero-logo-glow" />
              
              {/* Shine sweep effect */}
              <div className="hero-logo-shine" />
              
              {/* The Logo - responsive sizing */}
              <Image
                src="/images/desktop/logo.png"
                alt="Riven Realms"
                width={500}
                height={500}
                priority
                className="relative z-10 w-[150px] sm:w-[240px] md:w-[380px] lg:w-[450px] xl:w-[500px] h-auto hero-logo drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="bg-gradient-to-t from-[#1a0a2e] via-[#1a0a2e]/98 to-transparent pt-24 pb-4 sm:pt-16 sm:pb-10 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs leading-[1.1] sm:leading-tight sm:text-base md:text-lg text-foreground/70 max-w-[180px] sm:max-w-2xl mx-auto mb-3 sm:mb-8">
                Embark on an epic adventure in a world of kingdoms, magic, and endless possibilities. Your legend begins here.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <Button size="sm" className="sm:h-12 sm:px-10 sm:text-base text-[10px] sm:text-sm" asChild>
                  <Link href="/wiki">How to Join</Link>
                </Button>
                <Button variant="outline" size="sm" className="sm:h-12 sm:px-10 sm:text-base text-[10px] sm:text-sm" asChild>
                  <Link href="/store">Visit Store</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED COVER SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Empty cover with shadow and content inside */}
          <div className="relative drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* White content section BEHIND the frame - properly contained within image */}
            <div className="absolute inset-x-[8%] top-[12%] bottom-[48%] sm:top-[10%] sm:bottom-[46%] md:top-[calc(12%-50px)] md:bottom-[calc(52%-50px)] bg-gradient-to-b from-[#f8f6f3] via-[#f5f3ef] to-[#f0ede8] rounded-sm overflow-hidden z-0">
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
              
              {/* Content inside */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
                {/* Logo with enhanced shadow */}
                <Image
                  src="/images/desktop/logo.png"
                  alt="Riven Realms"
                  width={280}
                  height={280}
                  className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                />
                
                {/* Tagline */}
                <p className="mt-3 sm:mt-4 text-[#2a2438] font-cinzel text-xs sm:text-sm md:text-base tracking-widest text-center uppercase">
                  A Hytale Server
                </p>
                <p className="mt-1 text-[#5a5068] text-[10px] sm:text-xs tracking-wider text-center">
                  Your Adventure Awaits
                </p>
              </div>
            </div>
            
            {/* Empty cover frame ON TOP */}
            <Image
              src="/images/desktop/empty-cover.png"
              alt="Riven Realms"
              width={1920}
              height={1080}
              className="w-full h-auto relative z-10"
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

      {/* ========== FEATURES SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-3">
              Server Features
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto">
              Discover what makes Riven Realms unique
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center h-full flex flex-col items-center justify-start gap-4 p-6">
                <div className="p-4 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30">
                  <feature.icon className="w-8 h-8 text-[#c77dff]" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/50">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="arcane-divider max-w-4xl mx-auto" />

      {/* ========== GAME MODES SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-3">
              Game Modes
            </h2>
            <p className="text-foreground/50 max-w-xl mx-auto">
              Choose your path to glory
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gameModes.map((mode) => (
              <Link
                key={mode.name}
                href={`/wiki/${mode.name.toLowerCase().replace(' ', '-')}`}
                className="group"
              >
                <Card className="text-center h-full flex flex-col items-center justify-center gap-3 p-6">
                  <div className="p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 group-hover:bg-arcane-purple/25 group-hover:border-[#c77dff]/50 transition-all duration-300">
                    <mode.icon className="w-6 h-6 text-[#c77dff]" />
                  </div>
                  <div>
                    <div className="font-cinzel font-bold text-foreground group-hover:text-[#c77dff] transition-colors">
                      {mode.name}
                    </div>
                    <div className="text-xs text-foreground/40 mt-1">{mode.description}</div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/15 via-transparent to-[#c77dff]/10" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-arcane-gold/10 border border-arcane-gold/30">
                  <Star className="w-10 h-10 text-arcane-gold" />
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-foreground mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
                Join thousands of players in Riven Realms. Build kingdoms, forge alliances, and become a legend.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/wiki">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/discord">Join Discord</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
