import { Metadata } from 'next'
import { siteName, siteUrl } from '@/lib/marketingSeo'
import { brandPhoneDisplay } from '@/lib/contactInfo'

export const metadata: Metadata = {
  title: 'Terms of Service | Navigator Immigration Consultant',
  description: `Read the ${siteName} terms of service governing the use of our website and immigration consultation services.`,
  robots: 'index, follow',
  alternates: {
    canonical: `${siteUrl}/terms-of-service`,
  },
  openGraph: {
    title: 'Terms of Service | Navigator Immigration Consultant',
    description: `Read the ${siteName} terms of service governing the use of our website and immigration consultation services.`,
    url: `${siteUrl}/terms-of-service`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
  keywords: ['terms of service', 'immigration consultant terms', 'Navigator Immigration terms'],
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mt-28">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-[#585a5e]">
            <p className="text-sm text-muted-brown-grey">Last updated: June 2026</p>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the {siteName} website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">2. Services Description</h2>
              <p>{siteName} provides immigration consultancy services including but not limited to eligibility assessment, document preparation guidance, application strategy consultation, and visa pathway advice for various immigration programs.</p>
              <p className="mt-2">We do not guarantee visa approval, as all decisions are made by relevant government authorities based on their own criteria and discretion.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">3. User Responsibilities</h2>
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate and truthful information</li>
                <li>Not misuse our website or services for unlawful purposes</li>
                <li>Not attempt to circumvent any security measures</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">4. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, images, and software, is the property of {siteName} and is protected by applicable copyright and intellectual property laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">5. Limitation of Liability</h2>
              <p>{siteName} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amount paid by you for our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">6. Disclaimer</h2>
              <p>Immigration laws and policies are subject to change without notice. The information provided on this website is for general informational purposes and may not reflect the most current developments. You should verify any information with relevant authorities before making decisions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">7. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai, UAE.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services after changes constitutes acceptance of the new terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">9. Contact</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2">Email: info@navigatorglobals.com</p>
              <p>Phone: {brandPhoneDisplay}</p>
              <p>Address: 606, Latifa Towers, Trade Center 1, Sheikh Zayed Road, Dubai, UAE</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
