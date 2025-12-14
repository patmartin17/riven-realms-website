import Link from "next/link"
import { ParchmentCard } from "@/components/ParchmentCard"
import { WoodenButton } from "@/components/WoodenButton"
import { Users, User, Shield, BarChart3, MessageSquare, Briefcase, Mail, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: "Learn about HytaleHighlights and our mission to connect the Hytale community.",
}

const teamMembers = [
  { name: "Alex Storm", role: "Founder & Lead Developer", icon: User },
  { name: "Sarah Knight", role: "Community Manager", icon: Users },
  { name: "Mike Dragon", role: "Content Lead", icon: MessageSquare },
  { name: "Luna Frost", role: "Design Lead", icon: Palette },
]

import { Palette } from "lucide-react" // Added missing import

const milestones = [
  { year: "2024", event: "HytaleHighlights founded" },
  { year: "2024", event: "First 100 servers listed" },
  { year: "2025", event: "Community forums launched" },
  { year: "2025", event: "10,000 registered users" },
]

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="page-header text-center">
        <h1 className="page-title text-4xl mb-4">About HytaleHighlights</h1>
        <p className="page-subtitle text-lg max-w-2xl mx-auto">
          Building the ultimate resource for the Hytale community.
        </p>
      </div>

      {/* Mission Statement */}
      <ParchmentCard className="p-8">
        <h2 className="text-2xl font-cinzel font-bold text-ink mb-4 border-b border-stone-300 pb-2">Our Mission</h2>
        <p className="text-stone-700 leading-relaxed mb-4 font-serif">
          HytaleHighlights is the premier destination for discovering and ranking Hytale servers. 
          Our mission is to connect players with the best communities and experiences the game has to offer.
        </p>
        <p className="text-stone-700 leading-relaxed font-serif">
          We believe every player deserves to find their perfect server. Whether you&apos;re looking for 
          intense PvP action, creative building opportunities, or immersive RPG adventures, we help 
          you discover servers that match your playstyle.
        </p>
      </ParchmentCard>

      {/* What We Offer */}
      <div className="content-section">
        <h2 className="section-title text-2xl text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Shield,
              title: "Server Discovery",
              description: "Browse hundreds of servers with detailed information, ratings, and reviews to find your perfect match."
            },
            {
              icon: CheckCircle2,
              title: "Community Rankings",
              description: "Our rankings are powered by real player votes and reviews, ensuring authentic recommendations."
            },
            {
              icon: BarChart3,
              title: "Detailed Analytics",
              description: "Server owners get comprehensive statistics and insights to help grow their communities."
            },
            {
              icon: MessageSquare,
              title: "Active Forums",
              description: "Connect with other players, share tips, and stay updated on the latest Hytale news."
            },
          ].map((feature) => (
            <ParchmentCard key={feature.title} className="flex gap-4">
              <div className="bg-stone-200 p-3 rounded-full h-fit">
                <feature.icon className="w-6 h-6 text-amber-800" />
              </div>
              <div>
                <h3 className="font-bold text-ink text-lg mb-2">{feature.title}</h3>
                <p className="text-stone-600 text-sm font-serif">{feature.description}</p>
              </div>
            </ParchmentCard>
          ))}
        </div>
      </div>

      {/* Community Driven */}
      <div className="bg-[#e8dec5] border-l-4 border-amber-700 p-6 rounded-r shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-amber-700/10 p-2 rounded-full">
            <Users className="w-6 h-6 text-amber-800" />
          </div>
          <div>
            <h3 className="font-bold text-ink text-lg mb-2">Community Driven</h3>
            <p className="text-stone-700 leading-relaxed font-serif">
              Everything we do is for the community. Our rankings are based on real player feedback, 
              and we&apos;re constantly improving based on your suggestions. Your voice matters here.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="content-section">
        <h2 className="section-title text-2xl text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <ParchmentCard key={member.name} className="text-center py-6">
              <div className="flex justify-center mb-4">
                <div className="bg-stone-200 p-4 rounded-full">
                  <member.icon className="w-8 h-8 text-stone-600" />
                </div>
              </div>
              <h3 className="font-bold text-ink mb-1">{member.name}</h3>
              <p className="text-xs text-stone-500 uppercase tracking-wide">{member.role}</p>
            </ParchmentCard>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="content-section">
        <h2 className="section-title text-2xl text-center mb-8">Our Journey</h2>
        <ParchmentCard className="p-8">
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="w-24 text-amber-800 font-bold font-cinzel text-xl text-right">{milestone.year}</div>
                <div className="w-4 h-4 rounded-full bg-stone-300 border-2 border-stone-400 group-hover:bg-amber-500 group-hover:border-amber-600 transition-colors flex-shrink-0" />
                <div className="flex-1 h-px bg-stone-200 group-hover:bg-amber-200 transition-colors" />
                <div className="text-stone-700 font-serif w-1/2">{milestone.event}</div>
              </div>
            ))}
          </div>
        </ParchmentCard>
      </div>

      {/* For Server Owners */}
      <ParchmentCard className="bg-gradient-to-b from-[#f3e9d2] to-[#ebe0c5] p-8 text-center">
        <div className="flex justify-center mb-4">
          <Briefcase className="w-10 h-10 text-amber-800" />
        </div>
        <h2 className="text-2xl font-bold text-ink mb-4">For Server Owners</h2>
        <p className="text-stone-600 mb-6 max-w-2xl mx-auto font-serif">
          Running a Hytale server? List your server on HytaleHighlights to reach thousands of 
          potential players. Our platform provides visibility and detailed analytics to help 
          you grow your community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WoodenButton href="/submit">
            Submit Your Server
          </WoodenButton>
          <WoodenButton href="/contact" variant="secondary">
            Contact Support
          </WoodenButton>
        </div>
      </ParchmentCard>
    </div>
  )
}
