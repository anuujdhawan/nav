import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Clock, DollarSign, Flag, FileText, BookOpen } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'UK Study Visa Guide 2026 | Navigator',
  description: 'UK Student Visa requirements, CAS, Graduate Route, costs, and application guidance for students applying from Dubai.',
  keywords: ['UK study visa', 'UK student visa', 'Tier 4 visa UK', 'study in UK from Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/uk-study-visa`,
  },
  openGraph: {
    title: 'UK Study Visa Guide 2026 | Navigator',
    description: 'Complete UK study visa guide for 2026. Tier 4 (Student Visa) requirements, CAS, Graduate Route visa, and cost of living.',
    url: `${siteUrl}/immigration/uk-study-visa`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function UkStudyVisaPillar() {
  const posts = getAllBlogPosts().filter(p => p.category === 'UK Immigration')

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="UK Study Visa"
        description="Your complete resource for studying in the UK — from CAS and Tier 4 visa requirements to the Graduate Route and settlement pathways."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'View UK Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">UK Student Visa Overview</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              The United Kingdom remains one of the world&apos;s leading study destinations, home to prestigious institutions like Oxford, Cambridge, Imperial College, and the Russell Group universities. Over 600,000 international students choose the UK annually, drawn by its academic excellence, rich cultural heritage, and strong career outcomes.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              The UK Student Visa (formerly Tier 4) allows international students to study at licensed sponsor institutions. The application requires a Confirmation of Acceptance for Studies from your university, proof of English language proficiency at CEFR B2 level, and financial evidence showing you can cover tuition fees and living costs. The UK&apos;s Graduate Route, introduced in 2021, allows graduates to stay and work for 2 years (3 years for PhD) after completing their studies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: DollarSign, label: 'Annual Tuition', value: '£15,000-£30,000' },
                { icon: Clock, label: 'Visa Processing', value: '3-8 weeks' },
                { icon: GraduationCap, label: 'Work During Study', value: '20 hours/week term' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-5 text-center">
                  <item.icon className="w-8 h-8 text-[#436175] mx-auto mb-3" />
                  <p className="text-xs text-gray-700 uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-[#436175]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Top UK Universities for International Students</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              The UK boasts some of the world&apos;s most prestigious institutions. Here are leading universities commonly targeted by students from the UAE, India, and the Gulf region:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">University</th>
                    <th className="p-3 font-semibold">QS Ranking 2026</th>
                    <th className="p-3 font-semibold">Popular Programs</th>
                    <th className="p-3 font-semibold">Est. Tuition (£/yr)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['University of Oxford', '#3', 'Law, PPE, Medicine, CS', '£28,000-£45,000'],
                    ['University of Cambridge', '#5', 'Engineering, Science, Law', '£27,000-£42,000'],
                    ['Imperial College London', '#6', 'Engineering, Medicine, CS', '£35,000-£50,000'],
                    ['University College London', '#9', 'Law, Economics, Medicine', '£25,000-£40,000'],
                    ['University of Edinburgh', '#22', 'Medicine, Law, Arts', '£24,000-£35,000'],
                    ['University of Manchester', '#27', 'Business, Engineering, CS', '£22,000-£32,000'],
                    ['King\'s College London', '#33', 'Medicine, Law, Business', '£25,000-£38,000'],
                    ['University of Glasgow', '#76', 'Engineering, Medicine, Law', '£21,000-£30,000'],
                    ['University of Birmingham', '#90', 'Business, Engineering, Law', '£20,000-£28,000'],
                  ].map(row => (
                    <tr key={row[0]} className="hover:bg-gray-200">
                      {row.map((cell, i) => (
                        <td key={i} className="p-3 text-gray-700">{cell}</td>
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Cost of Living in the UK</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Living costs vary significantly between London and other UK cities. Below is the monthly breakdown for international students:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Expense</th>
                    <th className="p-3 font-semibold">London (£/month)</th>
                    <th className="p-3 font-semibold">Other UK Cities (£/month)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Rent (shared apt)', '£700-£1,200', '£450-£800'],
                    ['Groceries & Food', '£350-£500', '£250-£400'],
                    ['Transport (monthly pass)', '£150', '£50-£100'],
                    ['Health Surcharge', '£776/yr', '£776/yr'],
                    ['Phone & Internet', '£60-£100', '£50-£80'],
                    ['Miscellaneous', '£200-£400', '£150-£300'],
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

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Scholarships for UK Study</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Several scholarships and financial aid options are available for international students seeking to study in the UK:
            </p>
            <div className="space-y-4">
              {[
                { name: 'Chevening Scholarships', amount: 'Full tuition + living + travel', eligibility: 'UK Foreign Office — future leaders with strong academic backgrounds' },
                { name: 'Commonwealth Scholarships', amount: 'Full tuition + living + airfare', eligibility: 'Students from Commonwealth countries including India, Pakistan, Bangladesh' },
                { name: 'GREAT Scholarships', amount: '£10,000 tuition', eligibility: 'Students from selected countries including India, UAE, Pakistan' },
                { name: 'Gates Cambridge Scholarship', amount: 'Full tuition + living costs', eligibility: 'Cambridge University — outstanding graduate applicants' },
                { name: 'Rhodes Scholarship', amount: 'Full tuition + living + travel', eligibility: 'Oxford University — exceptional students from select countries' },
              ].map(s => (
                <div key={s.name} className="bg-white rounded-xl p-5">
                  <h3 className="font-semibold text-[#436175] mb-1">{s.name}</h3>
                  <p className="text-sm text-gray-700"><span className="font-medium">Amount:</span> {s.amount}</p>
                  <p className="text-sm text-gray-700"><span className="font-medium">Eligibility:</span> {s.eligibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Required Documents for UK Student Visa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: 'Valid passport with at least one blank page' },
                { icon: FileText, text: 'CAS (Confirmation of Acceptance for Studies) from licensed sponsor' },
                { icon: FileText, text: 'Financial evidence showing funds held for 28 consecutive days' },
                { icon: FileText, text: 'IELTS/PTE/TOEFL test results (CEFR B2 level minimum)' },
                { icon: FileText, text: 'Academic qualifications and transcripts' },
                { icon: FileText, text: 'ATAS certificate (if required for your course)' },
                { icon: FileText, text: 'Tuberculosis test results (if from a listed country)' },
                { icon: FileText, text: 'Parental consent (if under 18)' },
                { icon: FileText, text: 'Visa application fee receipt (£490)' },
                { icon: FileText, text: 'IHS surcharge payment confirmation (£776/year)' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Common UK Student Visa Refusal Reasons</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              UK Student Visa refusals can often be prevented by understanding the most common rejection causes:
            </p>
            <div className="space-y-4">
              {[
                { reason: 'Insufficient Financial Evidence', solution: 'Funds must be held for 28 consecutive days before application. Ensure bank statements clearly show the required amount. Parent/sponsor funds require additional documentation.' },
                { reason: 'CAS Issues', solution: 'Confirm your CAS number is correct and all course details match your actual offer. CAS can only be used for one application — do not apply with outdated CAS information.' },
                { reason: 'Credibility Interview Concerns', solution: 'Be prepared to explain your choice of university, course relevance to your career, and genuine student intent. Review your application before the interview.' },
                { reason: 'Incorrect English Language Evidence', solution: 'Ensure your test meets UKVI SELT requirements (IELTS for UKVI or PTE Academic UKVI). Standard IELTS is not accepted for visa purposes.' },
                { reason: 'Missing or Incorrect Documents', solution: 'Use the online document checklist and have a registered immigration advisor review your application before submission.' },
              ].map(item => (
                <div key={item.reason} className="bg-white rounded-xl p-5">
                  <h3 className="font-semibold text-[#436175] mb-2">{item.reason}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">UK Student Visa Application Timeline</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Follow this timeline for a smooth UK student visa application for a September intake:
            </p>
            <div className="space-y-4">
              {[
                { month: 'January-February', tasks: 'Research universities and courses. Check UKVI SELT requirements. Begin IELTS/PTE preparation.' },
                { month: 'March-April', tasks: 'Take English language tests (IELTS for UKVI). Submit UCAS or direct university applications. Prepare personal statement.' },
                { month: 'May-June', tasks: 'Receive CAS from chosen university. Arrange financial documents with 28-day holding period. Apply for ATAS if required.' },
                { month: 'July-August', tasks: 'Submit visa application online. Pay IHS surcharge. Book UKVCAS appointment for biometrics. Prepare for credibility interview.' },
                { month: 'September', tasks: 'Arrive in UK up to 1 month before course start. Collect BRP. Register with university and NHS. Open UK bank account.' },
              ].map(item => (
                <div key={item.month} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-28 shrink-0">
                    <span className="inline-block bg-[#436175]/10 text-[#436175] text-sm font-semibold px-3 py-1 rounded-full">{item.month}</span>
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
            <h2 className="text-3xl font-bold text-[#436175] mb-8">Step-by-Step Application Process</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Choose Your Course and University', body: 'Research UK universities and programs that match your academic profile and career aspirations. Consider factors like Russell Group membership, program rankings, location, and career support services.' },
                { step: '2', title: 'Receive Your CAS Letter', body: 'Once accepted, your university issues a Confirmation of Acceptance for Studies — a unique reference number you need for your visa application. Apply no earlier than 6 months before your course start date.' },
                { step: '3', title: 'Prepare Financial Evidence', body: "Show funds held for 28 consecutive days before applying: £1,334/month for London living costs, £1,023/month outside London, plus remaining tuition fees. Funds can be in your account or a parent/sponsor's account." },
                { step: '4', title: 'Submit Your Visa Application', body: 'Apply online via UKVI, pay the application fee of £490 and Immigration Health Surcharge (£776/year), and verify your identity using the UK Immigration ID Check app or at a visa application centre.' },
                { step: '5', title: 'Plan Your Arrival', body: "Once approved, you can arrive up to 1 month before your course starts (if over 6 months). Arrange accommodation through your university's accommodation office or private rental." },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Post-Study Work & Settlement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: 'Graduate Route Visa', body: 'Stay 2 years (3 years for PhD) after graduation to work or look for work at any skill level without employer sponsorship. No job offer required to apply.' },
                { icon: FileText, title: 'Skilled Worker Visa', body: 'After your Graduate Route visa, switch to a Skilled Worker Visa with employer sponsorship. Five years on this visa qualifies you for Indefinite Leave to Remain.' },
                { icon: BookOpen, title: 'Settlement & Citizenship', body: 'After 5 years of continuous residence with ILR, you can apply for British citizenship. The UK also offers fast-track settlement for Global Talent visa holders.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-6 text-center">
                  <item.icon className="w-10 h-10 text-[#436175] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#436175] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">UK Study Visa Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map(p => (
                <Link key={p.slug} href={`/immigration/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <BlogCardImage slug={p.slug} title={p.title} />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[#436175] mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">{p.excerpt}</p>
                    <span className="text-sm text-[#436175] font-medium">{p.readTime} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#436175] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'What is a CAS letter and how do I get one?', a: 'Confirmation of Acceptance for Studies is a unique reference number issued by your UK university after you accept their offer. It confirms your sponsorship for a Student Visa and includes course details, duration, and fees.' },
                { q: 'How much bank balance do I need for a UK student visa?', a: 'You need tuition fees plus living costs: £1,334/month for London (up to 9 months) or £1,023/month outside London (up to 9 months). Funds must be held for 28 consecutive days before applying.' },
                { q: 'Can I work in the UK while studying?', a: 'Yes, international students can work up to 20 hours per week during term time and full-time during holidays. PhD students can work more subject to course requirements.' },
                { q: 'What is the UK Graduate Route?', a: 'The Graduate Route allows international graduates to stay and work at any skill level for 2 years (3 years for PhD) after completing their degree. No employer sponsorship is needed.' },
                { q: 'Can I switch from Student Visa to a work visa easily?', a: 'Yes, you can switch to a Skilled Worker Visa from within the UK without leaving. After 5 years on Skilled Worker Visa, you qualify for Indefinite Leave to Remain, then citizenship after 12 more months.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in the UK?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our Dubai-based team provides end-to-end support for UK student visa applications — from university selection and CAS guidance to financial documentation and visa submission. Book a free consultation today.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
