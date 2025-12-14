import { ParchmentCard } from "@/components/ParchmentCard"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for using HytaleHighlights.",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="page-header">
        <h1 className="page-title text-4xl mb-4 text-center">Terms of Service</h1>
        <p className="page-subtitle text-lg text-center">Last Updated: December 13, 2025</p>
      </div>

      <ParchmentCard className="p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">1. Acceptance of Terms</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            By accessing or using HytaleHighlights ("the Site"), you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">2. User Accounts</h2>
          <p className="text-stone-700 leading-relaxed font-serif mb-4">
            To access certain features of the Site, you may be required to create an account. You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 font-serif">
            <li>Maintaining the confidentiality of your account credentials.</li>
            <li>All activities that occur under your account.</li>
            <li>Providing accurate and up-to-date information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">3. Server Listings</h2>
          <p className="text-stone-700 leading-relaxed font-serif mb-4">
            Server owners may list their Hytale servers on our platform. By submitting a server, you agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 font-serif">
            <li>You are the owner or authorized representative of the server.</li>
            <li>The server complies with Hytale's EULA and guidelines.</li>
            <li>You will not use bots or fake accounts to artificially inflate votes or ratings.</li>
            <li>We reserve the right to remove any listing that violates these terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">4. User Content</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            You retain ownership of content you post (reviews, comments, etc.), but grant HytaleHighlights a 
            license to display, distribute, and modify such content for the operation of the Site. 
            Content must not be illegal, abusive, or violate third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">5. Prohibited Conduct</h2>
          <p className="text-stone-700 leading-relaxed font-serif mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 font-serif">
            <li>Use the Site for any illegal purpose.</li>
            <li>Attempt to bypass security measures or access unauthorized areas.</li>
            <li>Harass, abuse, or harm other users.</li>
            <li>Scrape or collect data from the Site without permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">6. Disclaimer</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            The Site is provided "as is" without warranties of any kind. We are not responsible for the 
            content or actions of third-party servers listed on our platform. We are not affiliated with 
            Mojang or Hytale.
          </p>
        </section>

        <section className="pt-6 border-t border-stone-300">
          <p className="text-stone-600 font-serif text-sm">
            Questions about these terms? <Link href="/contact" className="text-amber-700 hover:underline font-bold">Contact Us</Link>.
          </p>
        </section>
      </ParchmentCard>
    </div>
  )
}
