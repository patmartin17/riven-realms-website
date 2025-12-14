import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Sword, Sparkles, Shield, Gem, Star, Package } from "lucide-react"

export const metadata = {
  title: "Store",
  description: "Support Riven Realms and unlock exclusive ranks, cosmetics, and items.",
}

const ranks = [
  {
    name: "Noble",
    price: "$9.99",
    color: "text-blue-400",
    icon: Shield,
    features: [
      "Custom chat prefix",
      "5 home locations",
      "Access to /nick",
      "Priority queue",
    ],
  },
  {
    name: "Knight",
    price: "$19.99",
    color: "text-emerald-400",
    icon: Sword,
    popular: false,
    features: [
      "All Noble perks",
      "10 home locations",
      "Custom join message",
      "Particle effects",
      "Pet companion",
    ],
  },
  {
    name: "Archmage",
    price: "$34.99",
    color: "text-[#c77dff]",
    icon: Sparkles,
    popular: true,
    features: [
      "All Knight perks",
      "20 home locations",
      "Custom trails",
      "Exclusive cosmetics",
      "Monthly crate keys",
      "Private vault",
    ],
  },
  {
    name: "Royalty",
    price: "$49.99",
    color: "text-arcane-gold",
    icon: Crown,
    features: [
      "All Archmage perks",
      "Unlimited homes",
      "Legendary cosmetics",
      "Custom title",
      "Staff priority support",
      "Beta access",
    ],
  },
]

const items = [
  { name: "Crate Key Bundle", price: "$4.99", icon: Package },
  { name: "Cosmetic Chest", price: "$2.99", icon: Gem },
  { name: "XP Booster (7 days)", price: "$3.99", icon: Star },
]

export default function StorePage() {
  return (
    <div className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
            Server Store
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Support Riven Realms and unlock exclusive perks. All purchases help keep the server running and fund new content.
          </p>
        </div>

        {/* Ranks Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8 text-center">
            Premium Ranks
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ranks.map((rank) => (
              <Card key={rank.name} className={`relative flex flex-col ${rank.popular ? 'ring-2 ring-[#c77dff]' : ''}`}>
                {rank.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c77dff] text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30`}>
                      <rank.icon className={`w-8 h-8 ${rank.color}`} />
                    </div>
                  </div>
                  <CardTitle className={`font-cinzel text-xl ${rank.color}`}>
                    {rank.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-foreground mt-2">
                    {rank.price}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {rank.features.map((feature, i) => (
                      <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="text-[#c77dff]">✦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={rank.popular ? "default" : "outline"}>
                    Purchase
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Items Section */}
        <section>
          <h2 className="text-2xl font-cinzel font-bold text-foreground mb-8 text-center">
            Items & Boosters
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {items.map((item) => (
              <Card key={item.name} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30">
                      <item.icon className="w-6 h-6 text-[#c77dff]" />
                    </div>
                  </div>
                  <h3 className="font-cinzel font-bold text-foreground mb-2">{item.name}</h3>
                  <div className="text-xl font-bold text-[#c77dff] mb-4">{item.price}</div>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-xs text-foreground/40">
          <p>All purchases are final. By purchasing, you agree to our Terms of Service.</p>
          <p className="mt-1">Ranks and perks are cosmetic and do not provide gameplay advantages.</p>
        </div>
      </div>
    </div>
  )
}

