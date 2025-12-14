import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, User, Shield, Heart, MessageSquare, Mail, Sword, Castle, Sparkles, Star } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: "Learn about Riven Realms - our story, our team, and our vision for an epic Hytale experience.",
}

const teamMembers = [
  { name: "Alex Storm", role: "Server Owner", icon: User },
  { name: "Sarah Knight", role: "Community Manager", icon: Users },
  { name: "Mike Dragon", role: "Lead Builder", icon: Castle },
  { name: "Luna Frost", role: "Developer", icon: Sparkles },
]

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "Our players are the heart of Riven Realms. Every decision we make considers our community's experience and enjoyment.",
  },
  {
    icon: Shield,
    title: "Fair Play",
    description: "We maintain a balanced, fair environment. Pay-to-win doesn't exist here - skill and dedication determine success.",
  },
  {
    icon: Sword,
    title: "Epic Adventures",
    description: "We're committed to delivering unique, memorable experiences. From custom dungeons to world events, adventure awaits.",
  },
  {
    icon: Star,
    title: "Constant Evolution",
    description: "Riven Realms is always growing. We regularly add new content, features, and improvements based on player feedback.",
  },
]

const milestones = [
  { year: "2024", event: "Riven Realms founded" },
  { year: "2024", event: "First 500 players joined" },
  { year: "2025", event: "Kingdoms system launched" },
  { year: "2025", event: "Community reached 5,000 members" },
]

export default function AboutPage() {
  return (
    <div className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
            About Riven Realms
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Discover the story behind the realm and the passionate team bringing it to life.
          </p>
        </div>

        {/* Our Story */}
        <section>
          <Card className="p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/5 via-transparent to-[#c77dff]/5" />
            <div className="relative z-10">
              <h2 className="text-2xl font-cinzel font-bold text-[#c77dff] mb-4">Our Story</h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  Riven Realms began as a dream shared by a group of passionate gamers who wanted to create 
                  something special in the Hytale universe. We envisioned a server where epic adventures, 
                  meaningful player interactions, and creative freedom would come together.
                </p>
                <p>
                  Today, Riven Realms is home to thousands of players who explore our custom-built world, 
                  forge alliances, build kingdoms, and create stories that will be remembered for years to come. 
                  Our dedicated team works tirelessly to ensure every player has an unforgettable experience.
                </p>
                <p>
                  Whether you're a seasoned adventurer or just starting your journey, there's a place for 
                  you in Riven Realms. Welcome to our community.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="flex gap-4 p-6">
                <div className="p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 h-fit">
                  <value.icon className="w-6 h-6 text-[#c77dff]" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/60">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="arcane-divider max-w-4xl mx-auto" />

        {/* Team */}
        <section>
          <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center py-8">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-arcane-purple/15 border border-arcane-purple/30">
                      <member.icon className="w-8 h-8 text-[#c77dff]" />
                    </div>
                  </div>
                  <h3 className="font-cinzel font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs text-foreground/50 uppercase tracking-wide">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8 text-center">Our Journey</h2>
          <Card className="p-8">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-20 text-[#c77dff] font-bold font-cinzel text-lg text-right">{milestone.year}</div>
                  <div className="w-3 h-3 rounded-full bg-arcane-purple/30 border-2 border-arcane-purple/50 group-hover:bg-[#c77dff] group-hover:border-[#c77dff] transition-colors flex-shrink-0" />
                  <div className="flex-1 h-px bg-arcane-purple/20 group-hover:bg-[#c77dff]/30 transition-colors" />
                  <div className="text-foreground/70 flex-1">{milestone.event}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Contact CTA */}
        <section>
          <Card className="text-center p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/15 via-transparent to-[#c77dff]/10" />
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-arcane-purple/15 border border-arcane-purple/30">
                  <Mail className="w-10 h-10 text-[#c77dff]" />
                </div>
              </div>
              <h3 className="text-2xl font-cinzel font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-foreground/60 mb-8 max-w-xl mx-auto">
                Have questions, suggestions, or just want to say hello? We'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/discord">Join Discord</Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
