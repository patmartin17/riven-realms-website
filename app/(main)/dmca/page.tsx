import { ParchmentCard } from "@/components/ParchmentCard"
import Link from "next/link"

export const metadata = {
  title: "DMCA Policy",
  description: "Read the DMCA Policy for HytaleHighlights.",
}

export default function DMCAPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="page-header">
        <h1 className="page-title text-4xl mb-4 text-center">DMCA Policy</h1>
        <p className="page-subtitle text-lg text-center">Digital Millennium Copyright Act Notice</p>
      </div>

      <ParchmentCard className="p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">1. Policy Statement</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            HytaleHighlights respects the intellectual property rights of others and expects its users to do the same. 
            It is our policy to respond to clear notices of alleged copyright infringement that comply with the 
            Digital Millennium Copyright Act (DMCA).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">2. Reporting Infringement</h2>
          <p className="text-stone-700 leading-relaxed font-serif mb-4">
            If you believe your copyrighted work has been copied in a way that constitutes copyright infringement 
            and is accessible on this Site, please notify our Copyright Agent with the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 font-serif">
            <li>Electronic or physical signature of the copyright owner or authorized person.</li>
            <li>Identification of the copyrighted work claimed to have been infringed.</li>
            <li>Identification of the material that is claimed to be infringing and its location on the Site.</li>
            <li>Your contact information (address, phone number, email).</li>
            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner.</li>
            <li>A statement, made under penalty of perjury, that the information is accurate and you are authorized to act.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">3. Submit a Notification</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            Please send DMCA notifications to our designated Copyright Agent at:
          </p>
          <div className="mt-4 p-4 bg-stone-200/50 rounded border border-stone-300">
            <p className="font-bold text-ink">Copyright Agent</p>
            <p className="text-stone-700">HytaleHighlights Legal Dept.</p>
            <p className="text-stone-700">Email: <a href="mailto:legal@hytalehighlights.com" className="text-amber-700 hover:underline">legal@hytalehighlights.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">4. Counter-Notification</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            If you believe your content was removed by mistake or misidentification, you may submit a counter-notification 
            containing your contact info, identification of the removed material, and a statement under penalty of perjury 
            that you have a good faith belief the removal was a mistake.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink mb-4 font-cinzel">5. Repeat Infringers</h2>
          <p className="text-stone-700 leading-relaxed font-serif">
            In accordance with the DMCA and other applicable law, we have a policy of terminating, in appropriate circumstances, 
            users who are deemed to be repeat infringers.
          </p>
        </section>
      </ParchmentCard>
    </div>
  )
}
