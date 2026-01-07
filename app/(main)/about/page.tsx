import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, User, Shield, Heart, Mail, Sword, Castle, Sparkles, Star } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: "Learn about Riven Realms - our story, our team, and our vision for an epic Hytale experience.",
}

const teamMembers = [
  { name: "Ascari", role: "Community Manager", icon: Users },
  { name: "Juuaan", role: "Lead Builder", icon: Castle },
  { name: "Maax", role: "Server Manager", icon: User },
  { name: "Patt", role: "Lead Developer", icon: Sparkles },
  { name: "Sourr", role: "Staff Manager", icon: Shield },
]

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "Our players will be the heart of Riven Realms. Every decision we make will consider our community's experience and enjoyment.",
  },
  {
    icon: Shield,
    title: "Fair Play",
    description: "We will maintain a balanced, fair environment. Pay-to-win won't exist here. Skill and dedication will determine success.",
  },
  {
    icon: Sword,
    title: "Epic Adventures",
    description: "We're committed to delivering unique, memorable experiences. From custom dungeons to world events, adventure will await.",
  },
  {
    icon: Star,
    title: "Constant Evolution",
    description: "Riven Realms will always be growing. We will regularly add new content, features, and improvements based on player feedback.",
  },
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
            Learn about our vision for Riven Realms and the passionate team working to bring it to life.
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
                  something special in the Hytale universe. We envision a server where epic adventures, 
                  meaningful player interactions, and creative freedom will come together.
                </p>
                <p>
                  Our dedicated team is working tirelessly to build a custom world where players will explore 
                  vast realms, forge alliances, build kingdoms, and create stories that will be remembered for years to come. 
                  We're crafting an experience where every player will have the opportunity for unforgettable adventures.
                </p>
                <p>
                  Whether you're a seasoned adventurer or just starting your journey, there will be a place for 
                  you in Riven Realms. We're building this community for players like you.
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                  <a href="https://discord.com/invite/FMm9cBx3YU" target="_blank" rel="noopener noreferrer">Join Discord</a>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
