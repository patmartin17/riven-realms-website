import Link from "next/link"
import { ParchmentCard } from "@/components/ParchmentCard"
import { WoodenButton } from "@/components/WoodenButton"
import { Mail, MessageCircle, Twitter, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the HytaleHighlights team for support, partnerships, or feedback.",
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "For general inquiries",
    value: "support@hytalehighlights.com",
    link: "mailto:support@hytalehighlights.com",
  },
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Join our community",
    value: "discord.gg/hytalehighlights",
    link: "https://discord.gg/hytalehighlights",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Follow for updates",
    value: "@HytaleHighlights",
    link: "https://twitter.com/HytaleHighlights",
  },
]

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "server", label: "Server Listing" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Feedback" },
  { value: "report", label: "Report an Issue" },
  { value: "other", label: "Other" },
]

export default function ContactPage() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title text-4xl mb-4 text-center">Contact Us</h1>
        <p className="page-subtitle text-lg text-center max-w-2xl mx-auto">
          Have a question, suggestion, or need help? We&apos;d love to hear from you.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method) => (
          <ParchmentCard
            key={method.title}
            href={method.link}
            className="text-center group flex flex-col items-center p-8 hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="bg-stone-200 p-4 rounded-full mb-4">
              <method.icon className="w-8 h-8 text-amber-800" />
            </div>
            <h3 className="font-bold text-ink text-xl mb-2 group-hover:text-amber-700 transition-colors">
              {method.title}
            </h3>
            <p className="text-stone-600 font-serif mb-2">{method.description}</p>
            <span className="text-amber-800 font-bold text-sm">{method.value}</span>
          </ParchmentCard>
        ))}
      </div>

      {/* Contact Form */}
      <ParchmentCard className="max-w-3xl mx-auto">
        <h2 className="section-title text-2xl mb-6 text-center border-b border-stone-300 pb-4">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-ink font-bold mb-2 font-cinzel">
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-[#fcf8f0] border border-stone-300 rounded p-3 text-ink focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all font-serif placeholder:text-stone-400"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-ink font-bold mb-2 font-cinzel">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#fcf8f0] border border-stone-300 rounded p-3 text-ink focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all font-serif placeholder:text-stone-400"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div>
            <label htmlFor="type" className="block text-ink font-bold mb-2 font-cinzel">
              Inquiry Type <span className="text-red-600">*</span>
            </label>
            <select
              id="type"
              name="type"
              required
              className="w-full bg-[#fcf8f0] border border-stone-300 rounded p-3 text-ink focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all font-serif"
            >
              <option value="">Select an option...</option>
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-ink font-bold mb-2 font-cinzel">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full bg-[#fcf8f0] border border-stone-300 rounded p-3 text-ink focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all font-serif placeholder:text-stone-400"
              placeholder="Brief description of your inquiry"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-ink font-bold mb-2 font-cinzel">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full bg-[#fcf8f0] border border-stone-300 rounded p-3 text-ink focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all font-serif placeholder:text-stone-400 resize-y"
              placeholder="Please provide as much detail as possible..."
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-stone-300">
            <p className="text-sm text-stone-500 font-serif">
              <span className="text-red-600">*</span> Required fields
            </p>
            <WoodenButton type="submit" className="w-full sm:w-auto">
              Send Message
            </WoodenButton>
          </div>
        </form>
      </ParchmentCard>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title text-2xl text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I list my server on HytaleHighlights?",
              answer: "Visit our Submit Server page and fill out the server information form. Listings are reviewed within 24-48 hours.",
            },
            {
              question: "How can I report an issue with a server listing?",
              answer: "Use the 'Report Issue' button on the server's page or contact us through this form with details.",
            },
            {
              question: "How long does it take to get a response?",
              answer: "We typically respond within 24-48 hours for support inquiries and 3-5 business days for partnership requests.",
            },
            {
              question: "Can I advertise my server on HytaleHighlights?",
              answer: "Yes! We offer featured placement and promotional opportunities. Select 'Partnership' in the inquiry type above.",
            },
          ].map((faq, index) => (
            <ParchmentCard key={index} className="p-6">
              <h3 className="font-bold text-ink text-lg mb-2">{faq.question}</h3>
              <p className="text-stone-600 font-serif">{faq.answer}</p>
            </ParchmentCard>
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded shadow-sm max-w-3xl mx-auto flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
        <div>
          <div className="font-bold text-ink text-lg mb-1">Need Urgent Help?</div>
          <div className="text-stone-700 font-serif">
            For urgent matters, join our Discord server for real-time support from our team and community. 
            <a href="https://discord.gg/hytalehighlights" target="_blank" rel="noopener noreferrer" className="text-amber-700 font-bold hover:underline ml-1">
              Join Discord →
            </a>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="text-center pt-8 border-t border-stone-800/20">
        <h3 className="font-bold text-ink mb-4">Looking for Something Else?</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/terms" className="text-stone-600 hover:text-amber-800 hover:underline font-serif">Terms of Service</Link>
          <Link href="/privacy" className="text-stone-600 hover:text-amber-800 hover:underline font-serif">Privacy Policy</Link>
          <Link href="/dmca" className="text-stone-600 hover:text-amber-800 hover:underline font-serif">DMCA Policy</Link>
          <Link href="/about" className="text-stone-600 hover:text-amber-800 hover:underline font-serif">About Us</Link>
        </div>
      </div>
    </div>
  )
}
