import Link from 'next/link'
import { ArrowRight, GraduationCap, CheckCircle, FileText, Clock, BookOpen, Award, DollarSign } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

interface GeoFaq {
  q: string
  a: string
}

interface GeoPageProps {
  region: string
  name: string
  description: string
  overview: string
  benefits: string[]
  faqs: GeoFaq[]
  scholarships: string[]
  loanInfo: string
}

export default function GeoPage({ name, description, overview, benefits, faqs, scholarships, loanInfo }: GeoPageProps) {
  const posts = getAllBlogPosts().filter(p =>
    (p.seoMeta?.geoTarget ?? []).some(t => t.toLowerCase().includes(name.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading={`Navigator Immigration Consultant | Study Abroad from ${name}`}
        description={description}
        primaryCta={{ label: 'Free Consultation', href: '/contact' }}
        secondaryCta={{ label: 'Browse All Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#436175]/10 border-l-4 border-[#436175] rounded-r-lg p-4 mb-6">
              <p className="text-white text-sm font-medium">
                Navigator Immigration Consultant — your trusted <strong>immigration consultant in {name}</strong> — provides expert guidance for students pursuing international education.
              </p>
            </div>
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Why Students from {name} Choose to Study Abroad</h2>
            <p className="text-[#e5e7eb] leading-relaxed">{overview}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {benefits.map(h => (
                <div key={h} className="bg-white rounded-xl p-5">
                  <p className="text-gray-700 text-sm leading-relaxed">{h}</p>
                </div>
              ))}
              <div className="bg-white rounded-xl p-5 border-2 border-[#436175]/20">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Navigator Immigration Consultant</strong> — your trusted <strong>immigration consultant in {name}</strong> — offers expert guidance on university selection, visa applications, and pre-departure planning for students from {name}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Scholarships & Financial Aid for Students from {name}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Funding your international education is a critical step. Here are the main scholarship and financial aid options available to students from {name}:
            </p>
            <div className="space-y-4">
              {scholarships.map(s => (
                <div key={s} className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4">
                  <Award className="w-6 h-6 text-[#436175] shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-[#436175] shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#436175] mb-2">Education Loan Information</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{loanInfo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">English Language Test Preparation</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Most international universities require proof of English proficiency through standardized tests. Here&apos;s what you need to know about the main options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'IELTS Academic', score: '6.0-7.5 overall', format: 'Paper or computer, 2hr 45min', tip: 'The most widely accepted test. Book your test 4-6 weeks before your application deadline.' },
                { title: 'PTE Academic', score: '50-70', format: 'Computer-only, 2hr', tip: 'Results delivered in 48 hours. Growing acceptance at Canadian, UK, and Australian universities.' },
                { title: 'TOEFL iBT', score: '80-100', format: 'Internet-based, 3hr', tip: 'Preferred by US universities. Also accepted by most Canadian and Australian institutions.' },
              ].map(t => (
                <div key={t.title} className="bg-white rounded-xl p-5">
                  <h3 className="font-semibold text-[#436175] mb-2">{t.title}</h3>
                  <p className="text-sm text-gray-700"><span className="font-medium">Typical score:</span> {t.score}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Format:</span> {t.format}</p>
                  <p className="text-sm text-gray-700 mt-2"><span className="font-medium">Tip:</span> {t.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Required Documents for Student Visa Application</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: 'Valid passport with at least 2 blank pages (valid for entire study period)' },
                { icon: FileText, text: 'Letter of acceptance from the university or college' },
                { icon: FileText, text: 'Proof of financial support (bank statements, scholarship letter, or education loan)' },
                { icon: FileText, text: 'English language test results (IELTS, PTE, or TOEFL)' },
                { icon: FileText, text: 'Academic transcripts and degree certificates from previous institutions' },
                { icon: FileText, text: 'Statement of purpose explaining your study plans and career goals' },
                { icon: FileText, text: 'Medical examination report and police clearance certificate' },
                { icon: FileText, text: 'Visa application fee payment receipt' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <item.icon className="w-5 h-5 text-[#436175] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Your Study Abroad Timeline</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Use this timeline to plan every stage of your study abroad journey — from initial research to arriving at your university:
            </p>
            <div className="space-y-4">
              {[
                { period: '12-18 Months Before', title: 'Research & Planning', tasks: 'Research countries, universities, and programs. Check entry requirements, tuition fees, and scholarship deadlines. Begin language test preparation.' },
                { period: '8-12 Months Before', title: 'Applications & Tests', tasks: 'Take IELTS/PTE/TOEFL exams. Apply to shortlisted universities. Prepare your statement of purpose and gather recommendation letters.' },
                { period: '4-8 Months Before', title: 'Acceptance & Visa', tasks: 'Receive offer letters. Compare options and confirm acceptance. Start visa application process. Arrange financial documentation.' },
                { period: '1-4 Months Before', title: 'Pre-Departure', tasks: 'Receive visa approval. Book flights and accommodation. Purchase health insurance. Pack essential documents and belongings.' },
                { period: 'Arrival', title: 'Settle In', tasks: 'Attend university orientation. Open a local bank account. Register for healthcare. Explore your new city and connect with student communities.' },
              ].map(item => (
                <div key={item.period} className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl p-5">
                  <div className="sm:w-44 shrink-0">
                    <span className="inline-block bg-[#436175] text-white text-xs font-semibold px-3 py-1 rounded-full">{item.period}</span>
                    <p className="text-sm font-semibold text-[#436175] mt-2">{item.title}</p>
                  </div>
                  <p className="text-sm text-gray-700">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Pre-Departure Checklist</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: 'Confirm your flight booking and airport pickup arrangements' },
                { icon: CheckCircle, text: 'Arrange temporary or permanent accommodation' },
                { icon: CheckCircle, text: 'Purchase health insurance for your destination country' },
                { icon: CheckCircle, text: 'Inform your bank about international travel to prevent card blocks' },
                { icon: CheckCircle, text: 'Pack essential documents: passport, visa, acceptance letter, transcripts' },
                { icon: CheckCircle, text: 'Carry sufficient local currency for your first week' },
                { icon: CheckCircle, text: 'Download essential apps: maps, transport, banking, messaging' },
                { icon: CheckCircle, text: 'Join your university\'s international student groups on social media' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <item.icon className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[#436175] mb-6">
                Relevant Guides for Students from {name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map(p => (
                  <Link key={p.slug} href={`/immigration/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow border border-[#436175]/10">
                    <div className="relative h-36 overflow-hidden">
                      <BlogCardImage slug={p.slug} title={p.title} />
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-[#436175]/10 text-[#436175] text-xs font-medium px-2.5 py-1 rounded-full mb-2">{p.category}</span>
                      <h3 className="text-base font-semibold text-[#436175] mb-2">{p.title}</h3>
                      <span className="text-sm text-[#436175] font-medium">{p.readTime} →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#436175] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <details key={faq.q} className="bg-white rounded-xl p-5 group shadow-sm">
                  <summary className="font-semibold text-[#436175] cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                </details>
              ))}
              <details className="bg-white rounded-xl p-5 group shadow-sm border-2 border-[#436175]/10">
                <summary className="font-semibold text-[#436175] cursor-pointer list-none flex items-center justify-between">
                  How can Navigator Immigration Consultant help students from {name}?
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  <strong>Navigator Immigration Consultant</strong> is a leading <strong>immigration consultant in {name}</strong>, helping students with university selection, admission guidance, SOP preparation, visa application support, financial documentation, and pre-departure planning. Our team provides end-to-end guidance for students from {name} seeking to study in Canada, UK, Australia, USA, and Europe.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#436175]">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Your Immigration Consultant in {name}</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Navigator Immigration Consultant is your trusted <strong>immigration consultant in {name}</strong>. Our team understands the unique needs of students from {name} and provides personalized guidance on university selection, visa applications, and pre-departure planning.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
