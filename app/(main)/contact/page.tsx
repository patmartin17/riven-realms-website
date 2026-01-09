import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Twitter, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Contact Us",
  description: "Get support through Discord or contact us for other inquiries via email.",
}

export default function ContactPage() {
  return (
    <div className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
            Contact Us
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            All support requests and tickets should be submitted through Discord. For other inquiries, please use email.
          </p>
        </div>

        {/* Main Support Section - Discord */}
        <Card className="p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
          <CardContent className="p-0 relative z-10">
            <div className="text-center mb-8">
              <div className="p-4 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 inline-block mb-6">
                <MessageCircle className="w-12 h-12 text-[#c77dff]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
                Support & Tickets
              </h2>
              <p className="text-foreground/70 text-lg mb-2 max-w-2xl mx-auto">
                <strong className="text-foreground">All support requests, tickets, and technical assistance</strong> should be submitted through our Discord server.
              </p>
              <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
                We will respond within 24 hours to help with any issues, questions, or concerns you may have.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a
                  href="https://discord.com/invite/FMm9cBx3YU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Join Discord for Support
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
            
            {/* Response Time Note */}
            <p className="text-center text-foreground/50 text-sm mt-6">
              Typical response time: within 24 hours
            </p>
          </CardContent>
        </Card>

        {/* Other Inquiries Section - Email */}
        <Card className="p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
          <CardContent className="p-0 relative z-10 text-center">
            <div className="p-4 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 inline-block mb-6">
              <Mail className="w-12 h-12 text-[#c77dff]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
              Other Inquiries
            </h2>
            <p className="text-foreground/70 text-lg mb-2 max-w-2xl mx-auto">
              For business inquiries, partnerships, media requests, or other non-support related matters, please contact us via email.
            </p>
            <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
              Please note: <strong className="text-foreground">Support requests should be submitted through Discord, not email.</strong>
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a
                href="mailto:RivenRealms@gmail.com"
                className="flex items-center gap-2"
              >
                Send Email
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-foreground/60 text-sm mt-4">
              RivenRealms@gmail.com
            </p>
          </CardContent>
        </Card>

        {/* Follow Us on X */}
        <Card className="p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-arcane-purple/10 via-transparent to-[#c77dff]/5" />
          <CardContent className="p-0 relative z-10 text-center">
            <div className="p-4 rounded-lg bg-arcane-purple/15 border border-arcane-purple/30 inline-block mb-6">
              <Twitter className="w-12 h-12 text-[#c77dff]" />
            </div>
            <h2 className="text-2xl font-cinzel font-bold text-[#c77dff] text-glow mb-4">
              Follow Us on X
            </h2>
            <p className="text-foreground/60 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest news, announcements, and community highlights from Riven Realms.
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a
                href="https://x.com/Riven_Realms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Follow @Riven_Realms
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
