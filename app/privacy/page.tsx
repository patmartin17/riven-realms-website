import { ParchmentCard } from "@/components/ParchmentCard"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for HytaleHighlights.",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="page-header">
        <h1 className="page-title text-4xl mb-4 text-center">Privacy Policy</h1>
        <p className="page-subtitle text-lg text-center">Last Updated: December 13, 2025</p>
      </div>

      <ParchmentCard className="p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">1. Introduction</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            At HytaleHighlights, we value your privacy. This Privacy Policy explains how we collect, use, 
            and protect your personal information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">2. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 font-serif">
            <li><strong>Account Information:</strong> Username, email address, and password (hashed).</li>
            <li><strong>Usage Data:</strong> IP address, browser type, and pages visited (for analytics).</li>
            <li><strong>User Content:</strong> Reviews, comments, and server submissions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">3. How We Use Your Information</h2>
          <p className="text-stone-700 leading-relaxed font-serif mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 font-serif">
            <li>Provide and improve our services.</li>
            <li>Process server submissions and verify ownership.</li>
            <li>Prevent fraud and abuse (e.g., vote manipulation).</li>
            <li>Communicate with you regarding updates or support.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">4. Cookies and Tracking</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            We use cookies to maintain your login session and gather anonymous analytics. You can control 
            cookies through your browser settings, but some features may not work properly without them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">5. Data Sharing</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            We do not sell your personal data. We may share data with trusted service providers (e.g., hosting, analytics) 
            who assist in operating the Site, or if required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">6. Data Security</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            We implement reasonable security measures to protect your data. However, no method of transmission 
            over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">7. Your Rights</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            You may request to access, correct, or delete your personal information by contacting us.
          </p>
        </section>

        <section className="pt-6 border-t border-stone-300">
          <p className="text-stone-600 font-serif text-sm">
            Questions about privacy? <Link href="/contact" className="text-amber-700 hover:underline font-bold">Contact Us</Link>.
          </p>
        </section>
      </ParchmentCard>
    </div>
  )
}
