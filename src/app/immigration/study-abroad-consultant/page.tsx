import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Globe, Users, FileText, BookOpen, Award, Star } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Study Abroad Consultant Dubai | Navigator',
  description: 'Study abroad consultants in Dubai for Canada, the UK, Australia, the USA, and Europe. Free planning consultation.',
  keywords: ['study abroad consultant Dubai', 'overseas education consultants Dubai', 'study abroad agency Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/study-abroad-consultant`,
  },
  openGraph: {
    title: 'Study Abroad Consultant Dubai | Navigator',
    description: 'Expert study abroad consultants in Dubai for Canada, UK, Australia, USA, and Europe. 15+ years experience, 95% visa success rate.',
    url: `${siteUrl}/immigration/study-abroad-consultant`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function StudyAbroadConsultantPillar() {
  const posts = getAllBlogPosts()

  const countries = [
    { name: 'Canada', flag: '🇨🇦', desc: 'SDS stream, 3-year PGWP, clear PR pathways. 320,000+ Indian students.' },
    { name: 'United Kingdom', flag: '🇬🇧', desc: 'Graduate Route, 2-year post-study work, Russell Group universities.' },
    { name: 'Australia', flag: '🇦🇺', desc: 'Subclass 485 visa, 2-4 year work rights, skilled migration PR.' },
    { name: 'USA', flag: '🇺🇸', desc: 'F1 visa, OPT/STEM extension, world\'s top-ranked universities.' },
    { name: 'Germany', flag: '🇩🇪', desc: 'Tuition-free public universities, 18-month job seeker visa.' },
    { name: 'Ireland', flag: '🇮🇪', desc: 'Stamp 2 permission, Third Level Graduate Scheme, tech hub.' },
  ]

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="Study Abroad Consultant Dubai"
        description="Expert study abroad guidance from Dubai. Get personalized support for university selection, visa applications, financial planning, and pre-departure preparation."
        primaryCta={{ label: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Browse All Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Your Study Abroad Journey Starts Here</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Navigator Immigration is a Dubai-based consultancy with over 15 years of experience helping students from the UAE, India, and across the Gulf region achieve their dream of studying abroad. Our team understands the unique challenges that international students face — from choosing the right country and university to navigating complex visa requirements and preparing for life in a new country.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              We provide end-to-end guidance tailored to each student&apos;s academic background, career goals, and budget. Whether you&apos;re aiming for a bachelor&apos;s degree in Canada, a master&apos;s in the UK, or a PhD in Australia, we create a personalized roadmap that maximizes your chances of admission and visa approval.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Study Abroad Cost Comparison by Country</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed text-center">
              Compare the costs of studying in different countries to find the best fit for your budget:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Country</th>
                    <th className="p-3 font-semibold">Avg. Tuition (USD/yr)</th>
                    <th className="p-3 font-semibold">Living Costs (USD/yr)</th>
                    <th className="p-3 font-semibold">Post-Study Work</th>
                    <th className="p-3 font-semibold">PR Pathway</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Canada', '$13,000-$28,000', '$12,000-$15,000', 'Up to 3 years (PGWP)', 'CEC, PNP, Express Entry'],
                    ['United Kingdom', '$18,000-$35,000', '$13,000-$16,000', '2 years (Graduate Route)', 'Skilled Worker > ILR'],
                    ['Australia', '$16,000-$25,000', '$12,000-$16,000', '2-4 years (485 visa)', 'Skilled Migration > PR'],
                    ['USA', '$18,000-$40,000', '$12,000-$18,000', '1-3 years (OPT)', 'H1B > Employment GC'],
                    ['Germany', '$500-$1,500', '$8,000-$11,000', '18 months job seeker', 'Blue Card > Settlement'],
                    ['Ireland', '$12,000-$25,000', '$11,000-$15,000', '1-2 years (Third Level)', 'Stamp 4 > Citizenship'],
                  ].map(row => (
                    <tr key={row[0]} className="hover:bg-gray-200">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-3 text-gray-700 ${i === 0 ? 'font-medium text-[#436175]' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Why Work With Navigator Immigration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Star, title: '15+ Years Experience', body: 'Our team has been guiding students from the UAE, India, and the Gulf region since 2009. We understand the unique educational systems, financial landscapes, and visa requirements for each market we serve.' },
                { icon: Award, title: '95% Visa Success Rate', body: 'Our meticulous document review process and deep understanding of visa officer expectations help us maintain an exceptional approval rate across Canada, UK, Australia, and US student visas.' },
                { icon: Globe, title: 'Multi-Country Expertise', body: 'We provide guidance for 6+ study destinations including Canada, UK, Australia, USA, Germany, and Ireland. Our advisors stay current with changing immigration policies and university requirements.' },
                { icon: Users, title: 'Personalized One-on-One Support', body: 'Every student receives a dedicated case manager who provides personalized support throughout the entire process — from initial consultation to post-arrival follow-up.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <item.icon className="w-10 h-10 text-[#436175] mb-4" />
                  <h3 className="text-lg font-semibold text-[#436175] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Testimonials from Our Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Aisha M., Dubai', dest: 'Canada — University of Toronto', text: 'Navigator Immigration helped me through every step of my Canada study permit application. The team was meticulous with my documents and my visa was approved in just 3 weeks through the SDS stream.' },
                { name: 'Rahul K., Abu Dhabi', dest: 'UK — University of Manchester', text: 'I was confused about choosing between the UK and Australia but the Navigator team provided detailed cost and career comparisons that helped me make the right decision. My CAS and visa process was seamless.' },
                { name: 'Fatima A., Sharjah', dest: 'Australia — University of Melbourne', text: 'The Genuine Student requirement was my biggest concern but Navigator helped me prepare a strong GS statement. My visa was granted without any additional requests for information.' },
                { name: 'Priya S., Dubai', dest: 'Germany — TU Munich', text: 'Navigator handled everything from my blocked account to health insurance. Their knowledge of the German student visa process was impressive. I highly recommend their services.' },
              ].map(t => (
                <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">&quot;{t.text}&quot;</p>
                  <div className="border-t border-[#436175]/20 pt-3">
                    <p className="font-semibold text-[#436175] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-700">{t.dest}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">English Language Requirements by Country</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Most study destinations require English language proficiency testing. Here are the minimum requirements for each country:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Country</th>
                    <th className="p-3 font-semibold">IELTS Academic</th>
                    <th className="p-3 font-semibold">PTE Academic</th>
                    <th className="p-3 font-semibold">TOEFL iBT</th>
                    <th className="p-3 font-semibold">Alternative</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Canada (SDS)', '6.0 each band', '60+', '83+', 'CAEL 60+ / TEF Canada'],
                    ['Canada (Regular)', '6.0 overall', '55+', '80+', 'Duolingo 115+'],
                    ['United Kingdom', '6.5 overall (6.0 min)', '58+', '88+', 'LanguageCert B2'],
                    ['Australia', '6.0 overall (5.5 min)', '50+', '60+', 'CAE 169+'],
                    ['USA', '6.5 overall', '58+', '80+', 'Duolingo 105+'],
                    ['Germany (English programs)', '6.5 overall', '59+', '80+', 'Cambridge C1 Advanced'],
                  ].map(row => (
                    <tr key={row[0]} className="hover:bg-gray-200">
                      {row.map((cell, i) => (
                        <td key={i} className={`p-3 text-gray-700 ${i === 0 ? 'font-medium text-[#436175]' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: 'University & Program Selection', body: 'We analyze your academic profile, career ambitions, and budget to recommend the best-fit countries, universities, and programs. Our team stays current with admission requirements, scholarship opportunities, and application deadlines across all major study destinations.' },
                { icon: FileText, title: 'Visa Application Support', body: 'From document preparation and financial evidence structuring to interview coaching and application review, we guide you through every step of the visa process. We help with SDS applications, CAS letters, CoE submissions, and F1 visa interviews.' },
                { icon: BookOpen, title: 'Pre-Departure & Post-Arrival', body: 'We assist with accommodation arrangements, bank account setup, health insurance enrollment, and travel planning. Our support continues after you arrive — we help you connect with student communities and understand local systems.' },
              ].map(s => (
                <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <s.icon className="w-10 h-10 text-[#436175] mb-4" />
                  <h3 className="text-lg font-semibold text-[#436175] mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Countries We Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {countries.map(c => (
                <div key={c.name} className="bg-white rounded-xl p-5">
                  <p className="text-2xl mb-2">{c.flag}</p>
                  <h3 className="font-semibold text-[#436175] mb-1">{c.name}</h3>
                  <p className="text-sm text-gray-700">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8">How We Work</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Free Initial Consultation', body: 'We discuss your academic background, career goals, preferred study destinations, and budget. This helps us understand your profile and create a tailored study abroad strategy.' },
                { step: '2', title: 'University Shortlisting & Applications', body: 'Based on your profile, we shortlist suitable universities and programs, help you prepare strong applications, review your statement of purpose, and track deadlines.' },
                { step: '3', title: 'Visa Preparation & Submission', body: 'Our visa team guides you through document collection, financial evidence preparation, and application form filling. We review everything before submission to maximize approval chances.' },
                { step: '4', title: 'Pre-Departure Support', body: 'Once your visa is approved, we help with travel arrangements, accommodation booking, bank account opening, and connect you with student networks in your destination country.' },
              ].map(item => (
                <div key={item.step} className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#436175] text-white flex items-center justify-center font-bold shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#436175] mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">All Study Abroad Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(0, 12).map(p => (
                <Link key={p.slug} href={`/immigration/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-36 overflow-hidden">
                    <BlogCardImage slug={p.slug} title={p.title} />
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-[#436175]/10 text-[#436175] text-xs font-medium px-2.5 py-1 rounded-full mb-2">{p.category}</span>
                    <h3 className="text-base font-semibold text-[#436175] mb-2 line-clamp-2">{p.title}</h3>
                    <span className="text-sm text-[#436175] font-medium">{p.readTime} →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/immigration/blog" className="inline-flex items-center text-[#436175] font-medium hover:text-blue-600">
                View All Guides <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#436175] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How early should I start planning for study abroad?', a: 'We recommend starting 12-18 months before your intended intake. This gives enough time for test preparation, university applications, scholarship deadlines, and visa processing. For September intake, start research in January of the previous year.' },
                { q: 'What documents do I need for a student visa application?', a: 'Typically: valid passport, university acceptance letter, financial statements (3-6 months bank statements or education loan letter), English test scores, academic transcripts, statement of purpose, passport photos, and visa application fee receipt.' },
                { q: 'Can I work while studying abroad?', a: 'Yes, most countries allow part-time work during studies: Canada 24 hrs/week, UK 20 hrs/week, Australia 48 hrs/fortnight, Germany 120 full days/year. These limits help you gain work experience and supplement living costs.' },
                { q: 'How do I choose between study destinations?', a: 'Consider tuition costs, living expenses, post-study work options, PR pathways, language requirements, climate, cultural fit, and career opportunities in your field. We help you weigh these factors based on your priorities.' },
              ].map(faq => (
                <details key={faq.q} className="bg-white rounded-xl p-5 group">
                  <summary className="font-semibold text-[#436175] cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#436175]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Study Abroad Journey Today</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re in Dubai, anywhere in the UAE, India, or across the Gulf region, our team is ready to help you achieve your international education goals. Book a free consultation to discuss your study abroad plans.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
