import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Castle, Sparkles, Star } from "lucide-react"


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
                <div className="particle particle-9" />
                <div className="particle particle-10" />
                <div className="particle particle-11" />
                <div className="particle particle-12" />
                <div className="particle particle-13" />
                <div className="particle particle-14" />
                <div className="particle particle-15" />
                <div className="particle particle-16" />
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

      {/* ========== RIVEN REALMS NETWORK SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
            <CardContent className="p-0 relative z-10">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30">
                    <Sparkles className="w-12 h-12 text-[#c77dff]" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-6">
                  Riven Realms
                </h2>
              </div>
              <div className="space-y-4 text-foreground/70 max-w-4xl mx-auto">
                <p>
                  Riven Realms is a custom Hytale server network built around unique, handcrafted experiences. Each realm within Riven Realms is designed independently, with its own rules, systems, and identity, allowing for very different styles of gameplay under a shared name.
                </p>
                <p>
                  Rather than focusing on a single formula, Riven Realms is about experimentation, creativity, and player driven stories. Some realms may emphasize cooperation, others competition, and others entirely different ideas yet to be explored. What unites them is a focus on thoughtful design and worlds that feel intentional, alive, and worth investing time into.
                </p>
                <p className="font-cinzel font-bold text-foreground text-lg">
                  Riven Realms is not one server. It is a growing universe of realms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="arcane-divider max-w-4xl mx-auto" />

      {/* ========== KINGDOMS REALM SECTION ========== */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
            <CardContent className="p-0 relative z-10">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30">
                    <Castle className="w-12 h-12 text-[#c77dff]" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-6">
                  Kingdoms
                </h2>
                <p className="text-foreground/60 text-lg mb-6">
                  The first realm launching under Riven Realms.
                </p>
              </div>
              <div className="space-y-4 text-foreground/70 max-w-4xl mx-auto">
                <p>
                  Kingdoms is the first realm launching under Riven Realms.
                  It is a world centered on territory, leadership, and player organized societies. Players come together to form kingdoms, claim land, and build shared domains shaped by cooperation, strategy, and long term planning. Progress is not defined by a single playstyle. Builders, explorers, traders, and fighters all have a place, and success comes from how well a group works together rather than individual power alone.
                </p>
                <p>
                  Kingdoms is designed to grow over time. Systems, challenges, and opportunities will expand as the realm develops, allowing the world to evolve alongside its community. Early players help set the tone, lay foundations, and shape the direction the realm takes.
                </p>
                <p className="font-cinzel font-bold text-foreground text-lg">
                  This is not a rush to an endgame. It is the beginning of one.
                </p>
              </div>
            </CardContent>
          </Card>
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
                Join us as we build Riven Realms. Be part of the community from the start and help shape the future of this growing universe of realms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <Link href="/wiki">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://discord.com/invite/FMm9cBx3YU" target="_blank" rel="noopener noreferrer">Join Discord</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
