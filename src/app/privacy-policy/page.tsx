import { Metadata } from 'next'
import { siteName, siteUrl } from '@/lib/marketingSeo'
import { brandPhoneDisplay } from '@/lib/contactInfo'

export const metadata: Metadata = {
  title: 'Privacy Policy | Navigator Immigration Consultant',
  description: `Read the ${siteName} privacy policy to understand how we collect, use, and protect your personal information when you use our website and services.`,
  robots: 'index, follow',
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy | Navigator Immigration Consultant',
    description: `Read the ${siteName} privacy policy to understand how we collect, use, and protect your personal information.`,
    url: `${siteUrl}/privacy-policy`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
  keywords: ['privacy policy', 'data protection', 'Navigator Immigration privacy'],
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mt-28">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-[#585a5e]">
            <p className="text-sm text-muted-brown-grey">Last updated: June 2026</p>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">1. Introduction</h2>
              <p>{siteName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">2. Information We Collect</h2>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Fill out a contact or consultation form</li>
                <li>Subscribe to our newsletter</li>
                <li>Submit an inquiry through our website</li>
                <li>Communicate with us via email, phone, or WhatsApp</li>
              </ul>
              <p className="mt-2">This information may include your name, email address, phone number, country of residence, and details about your immigration inquiry.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To respond to your inquiries and provide consultation services</li>
                <li>To send relevant immigration updates and newsletters (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">4. Data Protection</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">5. Third-Party Disclosure</h2>
              <p>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to provide our services (e.g., processing visa applications with relevant authorities).</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">6. Cookies</h2>
              <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#436175] mb-3">8. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
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
