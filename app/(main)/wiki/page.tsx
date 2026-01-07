"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Book, Sword, Castle, Map, Sparkles, Shield, Users, Scroll, HelpCircle, Play, Check, Copy } from "lucide-react"

// Categories - commented out for future use
// const categories = [
//   {
//     name: "Getting Started",
//     icon: Play,
//     description: "New to Riven Realms? Start here!",
//     articles: ["How to Join", "Server Rules", "First Steps Guide", "Commands List"],
//   },
//   {
//     name: "Game Mechanics",
//     icon: Book,
//     description: "Learn the core systems",
//     articles: ["Combat System", "Leveling & XP", "Skills & Abilities", "Economy Guide"],
//   },
//   {
//     name: "Kingdoms",
//     icon: Castle,
//     description: "Build your empire",
//     articles: ["Creating a Kingdom", "Land Claims", "Kingdom Wars", "Alliances"],
//   },
//   {
//     name: "Classes",
//     icon: Sword,
//     description: "Master your playstyle",
//     articles: ["Warrior", "Mage", "Ranger", "Rogue", "Healer"],
//   },
//   {
//     name: "Magic System",
//     icon: Sparkles,
//     description: "Harness arcane power",
//     articles: ["Spell Casting", "Enchantments", "Rune Crafting", "Potions"],
//   },
//   {
//     name: "Dungeons",
//     icon: Map,
//     description: "Explore dangerous depths",
//     articles: ["Dungeon Guide", "Boss Strategies", "Loot Tables", "Party Tips"],
//   },
// ]

const quickLinks = [
  { name: "Server IP", value: "Riven.gg", icon: Play },
  { name: "Discord", value: "Join Community", icon: Users, href: "https://discord.com/invite/FMm9cBx3YU", external: true },
  { name: "Rules", value: "Read Rules", icon: Scroll, href: "/rules" },
  { name: "Support", value: "Get Help", icon: HelpCircle, href: "/contact" },
]

export default function WikiPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyServerIP = async () => {
    try {
      await navigator.clipboard.writeText("Riven.gg")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }
  return (
    <div className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
            Server Wiki
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Your comprehensive guide to everything in Riven Realms. Learn game mechanics, discover strategies, and master the realm.
          </p>
        </div>

        {/* Quick Links */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              // Server IP - clickable card with clipboard copy
              if (link.name === "Server IP") {
                return (
                  <Card 
                    key={link.name} 
                    className="text-center py-6 cursor-pointer hover:border-[#c77dff]/50 transition-all group"
                    onClick={handleCopyServerIP}
                  >
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-3">
                        {copied ? (
                          <Check className="w-6 h-6 text-[#c77dff]" />
                        ) : (
                          <link.icon className="w-6 h-6 text-[#c77dff] group-hover:scale-110 transition-transform" />
                        )}
                      </div>
                      <div className="text-sm text-foreground/50 mb-1">{link.name}</div>
                      <div className="font-mono text-sm text-[#c77dff] flex items-center justify-center gap-2">
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 opacity-50" />
                            <span>{link.value}</span>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              }

              // Discord and Support - external links, wrap entire card
              if (link.external) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="text-center py-6 h-full hover:border-[#c77dff]/50 transition-all cursor-pointer">
                      <CardContent className="p-0">
                        <div className="flex justify-center mb-3">
                          <link.icon className="w-6 h-6 text-[#c77dff] group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="text-sm text-foreground/50 mb-1">{link.name}</div>
                        <div className="font-cinzel font-bold text-foreground group-hover:text-[#c77dff] transition-colors">
                          {link.value}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                )
              }

              // Rules - internal link, wrap entire card
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block group"
                >
                  <Card className="text-center py-6 h-full hover:border-[#c77dff]/50 transition-all cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-3">
                        <link.icon className="w-6 h-6 text-[#c77dff] group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-sm text-foreground/50 mb-1">{link.name}</div>
                      <div className="font-cinzel font-bold text-foreground group-hover:text-[#c77dff] transition-colors">
                        {link.value}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="arcane-divider max-w-4xl mx-auto mb-12" />

        {/* Categories Grid - commented out for future use */}
        {/* <section>
          <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8 text-center">
            Browse Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:border-[#c77dff]/50 transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 group-hover:bg-arcane-purple/25 transition-all">
                      <category.icon className="w-6 h-6 text-[#c77dff]" />
                    </div>
                    <div>
                      <h3 className="font-cinzel font-bold text-lg text-foreground group-hover:text-[#c77dff] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-foreground/50">{category.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 border-t border-arcane-purple/20 pt-4">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <Link 
                          href={`/wiki/${category.name.toLowerCase().replace(' ', '-')}/${article.toLowerCase().replace(/ /g, '-')}`}
                          className="text-sm text-foreground/70 hover:text-[#c77dff] transition-colors flex items-center gap-2"
                        >
                          <span className="text-[#c77dff]/50">›</span>
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Coming Soon Section */}
        <section>
          <Card className="text-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-arcane-purple/15 border border-arcane-purple/30">
                  <Book className="w-12 h-12 text-[#c77dff]" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
                Wiki Content Coming Soon
              </h2>
              <p className="text-foreground/60 mb-6 max-w-2xl mx-auto text-lg">
                We&apos;re building something amazing! Our comprehensive wiki with guides, tutorials, and game mechanics is currently in development. Check back soon for updates!
              </p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-arcane-purple/10 border border-arcane-purple/30">
                  <Sparkles className="w-5 h-5 text-[#c77dff]" />
                  <span className="text-sm text-foreground/70 font-cinzel">Stay tuned for updates</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Help Section */}
        <section className="mt-16">
          <Card className="text-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
            <div className="relative z-10">
              <HelpCircle className="w-12 h-12 text-[#c77dff] mx-auto mb-4" />
              <h3 className="text-xl font-cinzel font-bold text-foreground mb-2">
                Can&apos;t find what you&apos;re looking for?
              </h3>
              <p className="text-foreground/60 mb-6 max-w-md mx-auto">
                Join our Discord community and ask our helpful staff and players.
              </p>
              <Button asChild>
                <a href="https://discord.com/invite/FMm9cBx3YU" target="_blank" rel="noopener noreferrer">Join Discord</a>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}

