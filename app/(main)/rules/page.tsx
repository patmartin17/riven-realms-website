import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scroll, Shield, AlertTriangle, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Server Rules",
  description: "Read the Riven Realms server rules to ensure a positive experience for everyone in our community.",
}

const rules = [
  {
    number: 1,
    title: "Respect All Members",
    description: "Treat everyone with kindness and respect. Harassment, bullying, discrimination, or hate speech of any kind will not be tolerated. This includes but is not limited to racism, sexism, homophobia, and transphobia.",
  },
  {
    number: 2,
    title: "No Spam or Flooding",
    description: "Do not spam chat messages or flood the chat with repeated text. Avoid sending multiple messages in quick succession. Keep conversations relevant and meaningful. Excessive caps lock, repeated messages, or chat flooding will result in action.",
  },
  {
    number: 3,
    title: "Keep Content Appropriate",
    description: "No NSFW, explicit, or inappropriate content in chat or builds. This includes discussions, usernames, or any material that is sexual, violent, or otherwise inappropriate for a general audience. Keep the server safe for all ages.",
  },
  {
    number: 4,
    title: "No Unauthorized Advertising",
    description: "Do not advertise other servers, services, products, or social media without explicit staff permission. Self-promotion in designated areas is allowed, but excessive promotion is considered spam.",
  },
  {
    number: 5,
    title: "No Cheating, Exploiting, or Hacking",
    description: "Do not discuss, share, promote, or use cheats, exploits, hacks, or any unauthorized modifications for the Hytale server. This includes duping, glitch abuse, or any method that gives unfair advantages.",
  },
  {
    number: 6,
    title: "Respect Staff Decisions",
    description: "Staff decisions are final. If you disagree with a moderation action, discuss it privately with staff. Public arguments, backseat moderation, or challenging staff decisions in public chat is not allowed.",
  },
  {
    number: 7,
    title: "No Impersonation",
    description: "Do not impersonate staff members, other players, or any public figures. Using similar usernames or claiming to be someone else is strictly prohibited and will result in immediate action.",
  },
  {
    number: 8,
    title: "Keep Personal Information Private",
    description: "Do not share personal information such as addresses, phone numbers, real names, or other private details. Respect others' privacy and do not ask for personal information from other players.",
  },
  {
    number: 9,
    title: "No Drama or Toxicity",
    description: "Keep drama and personal conflicts out of public chat. If you have an issue with another player, handle it privately or contact staff. Toxic behavior, starting arguments, or creating unnecessary drama will not be tolerated.",
  },
  {
    number: 10,
    title: "Report Rule Violations",
    description: "If you see someone breaking the rules, report it to staff. Do not take matters into your own hands or engage in public callouts. Let staff handle moderation appropriately.",
  },
  {
    number: 11,
    title: "Have Fun and Be Positive",
    description: "This is a gaming community built for fun and friendship. Be friendly, help new players, share your builds and experiences, and contribute positively to the community. We're all here to enjoy Hytale together!",
  },
]

export default function RulesPage() {
  return (
    <div className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30">
              <Scroll className="w-12 h-12 text-[#c77dff]" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
            Server Rules
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Please read and follow these rules to ensure a positive experience for everyone.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule) => (
            <Card key={rule.number} className="p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/5 via-transparent to-[#c77dff]/5" />
              <CardContent className="p-0 relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#c77dff]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-cinzel font-bold text-[#c77dff]">
                        Rule {rule.number}
                      </span>
                    </div>
                    <h3 className="font-cinzel font-bold text-lg text-foreground mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Section */}
        <div className="space-y-6">
          {/* Warning Card */}
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
            <CardContent className="p-0 relative z-10">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[#c77dff] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-cinzel font-bold text-foreground text-lg mb-2">
                    ⚠️ Breaking these rules may result in warnings, mutes, or bans.
                  </h3>
                  <p className="text-foreground/70">
                    All moderation actions are at the discretion of our staff team. Repeated violations will result in more severe consequences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Card */}
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
            <CardContent className="p-0 relative z-10">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-[#c77dff] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-cinzel font-bold text-foreground text-lg mb-2">
                    💬 Questions?
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    If you have questions about these rules or need clarification, contact a staff member through our Discord server.
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://discord.com/invite/FMm9cBx3YU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Join Discord
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
