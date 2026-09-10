import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Clock, DollarSign, Flag, FileText, BookOpen } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Canada Study Visa Guide 2026 | Navigator',
  description: 'Canada study visa requirements, SDS, PGWP, costs, and PR pathways for students applying from Dubai and the UAE.',
  keywords: ['Canada study visa', 'Canada study permit', 'SDS Canada', 'study in Canada from Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/canada-study-visa`,
  },
  openGraph: {
    title: 'Canada Study Visa Guide 2026 | Navigator',
    description: 'Complete Canada study visa guide for 2026. SDS stream, study permit requirements, PGWP, cost of living, and PR pathways.',
    url: `${siteUrl}/immigration/canada-study-visa`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function CanadaStudyVisaPillar() {
  const posts = getAllBlogPosts().filter(p => p.category === 'Canada Immigration')

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="Canada Study Visa"
        description="Your complete resource for studying in Canada — from SDS and study permit requirements to PGWP and permanent residency pathways."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'View Canada Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Canada Study Permit Overview</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Canada is one of the most popular study destinations globally, welcoming over 800,000 international students each year. The country offers world-class education at competitive costs, a welcoming multicultural society, and one of the most generous post-study work programs anywhere. Indian students make up the single largest international student group in Canada, with over 320,000 choosing Canadian universities and colleges annually.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              To study in Canada, most international students need a study permit. The application process requires acceptance from a Designated Learning Institution, proof of financial support, a clean criminal record, and in some cases, a medical examination. The Student Direct Stream offers faster 20-day processing for applicants from select countries including India, Pakistan, the Philippines, and Vietnam.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: DollarSign, label: 'Annual Tuition', value: 'CAD $25,000-$50,000' },
                { icon: Clock, label: 'Processing Time', value: '20 days (SDS) / 8-12 weeks (Regular)' },
                { icon: GraduationCap, label: 'Work During Study', value: '24 hours/week off-campus' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Top Canadian Universities for International Students</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Canada is home to some of the world&apos;s top-ranked universities and colleges. Here are the leading institutions commonly chosen by international students from the UAE, India, and the Gulf region:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">University</th>
                    <th className="p-3 font-semibold">QS Ranking 2026</th>
                    <th className="p-3 font-semibold">Popular Programs</th>
                    <th className="p-3 font-semibold">Est. Tuition (CAD/yr)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['University of Toronto', '#21', 'Engineering, Business, CS', '$45,000-$60,000'],
                    ['University of British Columbia', '#34', 'Arts, Sciences, Commerce', '$35,000-$55,000'],
                    ['McGill University', '#30', 'Medicine, Law, Engineering', '$30,000-$50,000'],
                    ['University of Alberta', '#96', 'Engineering, Science, Business', '$25,000-$40,000'],
                    ['University of Waterloo', '#115', 'CS, Engineering, Math', '$35,000-$55,000'],
                    ['University of Montreal', '#118', 'Health, Arts, Science', '$22,000-$35,000'],
                    ['Simon Fraser University', '#323', 'Business, CS, Arts', '$25,000-$35,000'],
                    ['Humber College', '—', 'Diplomas, Degrees, PG Cert', '$14,000-$22,000'],
                    ['Seneca College', '—', 'Diplomas, Graduate Certificates', '$14,000-$20,000'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Cost of Living in Canada</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Understanding living costs is crucial for financial planning. Below is a monthly breakdown for international students in major Canadian cities:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Expense</th>
                    <th className="p-3 font-semibold">Toronto (CAD/month)</th>
                    <th className="p-3 font-semibold">Vancouver (CAD/month)</th>
                    <th className="p-3 font-semibold">Smaller Cities (CAD/month)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Rent (shared apt)', '$800-$1,400', '$850-$1,500', '$500-$800'],
                    ['Groceries & Food', '$400-$600', '$400-$600', '$300-$500'],
                    ['Transport (monthly pass)', '$130', '$100', '$80-$100'],
                    ['Health Insurance', '$65-$100', '$65-$100', '$65-$100'],
                    ['Phone & Internet', '$80-$120', '$80-$120', '$70-$100'],
                    ['Miscellaneous', '$200-$400', '$200-$400', '$150-$300'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Scholarships & Financial Aid for Canada</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Several scholarships help reduce the cost of studying in Canada for international students. These awards are merit-based, need-based, or program-specific:
            </p>
            <div className="space-y-4">
              {[
                { name: 'Lester B. Pearson International Scholarship', amount: 'Full tuition + living costs', eligibility: 'University of Toronto — exceptional academic achievement' },
                { name: 'UBC International Leader of Tomorrow Award', amount: 'Up to full tuition', eligibility: 'UBC — demonstrated leadership and academic excellence' },
                { name: 'McGill University Entrance Scholarships', amount: '$8,500-$12,000 CAD', eligibility: 'McGill — automatic consideration for first-year applicants' },
                { name: 'Vanier Canada Graduate Scholarship', amount: '$50,000 CAD/year', eligibility: 'PhD students — Canadian and international' },
                { name: 'Ontario Trillium Scholarship', amount: '$40,000 CAD/year', eligibility: 'PhD students at Ontario universities' },
                { name: 'Provincial Health Care Coverage', amount: 'Varies by province', eligibility: 'International students with valid study permits' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Required Documents for Canada Study Permit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: 'Valid passport (must be valid for entire study period)' },
                { icon: FileText, text: 'Letter of acceptance from a Designated Learning Institution' },
                { icon: FileText, text: 'Proof of financial support (bank statements, GIC certificate)' },
                { icon: FileText, text: 'IELTS/PTE/CAEL/TOEFL language test results' },
                { icon: FileText, text: 'Statement of purpose explaining study plans' },
                { icon: FileText, text: 'Academic transcripts and certificates' },
                { icon: FileText, text: 'Medical examination report (if applicable)' },
                { icon: FileText, text: 'Police clearance certificate' },
                { icon: FileText, text: 'Digital passport-sized photographs' },
                { icon: FileText, text: 'Visa application fee receipt (CAD $150)' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Common Reasons for Canada Study Permit Refusal</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Understanding common reasons for study permit refusals can help you prepare a stronger application. Here are the most frequent rejection causes and how to address them:
            </p>
            <div className="space-y-4">
              {[
                { reason: 'Insufficient Financial Proof', solution: 'Ensure bank statements cover first-year tuition + CAD $20,635 living costs. For SDS, the GIC is mandatory. Maintain funds for at least 4 months before applying.' },
                { reason: 'Weak Ties to Home Country', solution: 'Demonstrate family connections, property ownership, employment prospects, or business ties in your home country. A strong statement of purpose explaining your intent to return is essential.' },
                { reason: 'Incomplete or Inconsistent Documents', solution: 'Double-check all required documents. Ensure name consistency across all documents, translate non-English documents, and provide clear bank transaction histories.' },
                { reason: 'Purpose of Visit Not Clear', solution: 'Write a compelling statement of purpose connecting your chosen program to your career goals. Explain why this specific program at this specific institution.' },
                { reason: 'Low IELTS or Academic Scores', solution: 'Retake the IELTS to meet minimum requirements (6.0 each band for SDS). Consider enrolling in a preparatory program if your academic scores fall short.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Canada Study Visa Application Timeline</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Planning ahead is key to a smooth application process. Below is the recommended timeline for a September intake:
            </p>
            <div className="space-y-4">
              {[
                { month: 'January-February', tasks: 'Research universities and programs. Begin IELTS/PTE preparation. Contact shortlisted universities for program details.' },
                { month: 'March-April', tasks: 'Take English language tests. Start university applications. Gather academic transcripts and prepare statement of purpose.' },
                { month: 'May-June', tasks: 'Receive acceptance letters. Open GIC account for SDS. Arrange financial documents. Apply for study permit through IRCC.' },
                { month: 'July-August', tasks: 'Attend visa interview if required. Book flights and accommodation. Purchase health insurance. Register for orientation.' },
                { month: 'September', tasks: 'Arrive in Canada up to 4 weeks before program start. Activate GIC. Open bank account. Attend orientation.' },
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
                { step: '1', title: 'Research and Choose Your Program', body: 'Identify Canadian universities or colleges that offer programs aligned with your academic background and career goals. Consider factors like tuition fees, location, program duration, and post-graduation work eligibility.' },
                { step: '2', title: 'Apply to a Designated Learning Institution', body: 'Submit applications to your chosen DLIs. Once accepted, the institution will issue a letter of acceptance that you need for your study permit application.' },
                { step: '3', title: 'Gather Required Documents', body: 'Prepare your passport, acceptance letter, proof of financial support (bank statements, GIC of CAD $20,635 for SDS), academic transcripts, language test scores (IELTS 6.0 each band for SDS), and a statement of purpose.' },
                { step: '4', title: 'Submit Study Permit Application', body: 'Apply online through the IRCC website. If eligible for SDS, processing takes about 20 calendar days. Regular applications take 8-12 weeks from India and 10-14 weeks from the UAE.' },
                { step: '5', title: 'Prepare for Departure', body: 'Once your permit is approved, arrange accommodation, book flights, purchase health insurance, and plan your arrival. You can enter Canada up to 4 weeks before your program starts.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-8 text-center">Post-Study Work & PR Pathways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: 'PGWP (Post-Graduation Work Permit)', body: 'Graduates from eligible Canadian DLIs can obtain an open work permit valid for up to 3 years, depending on program duration. The PGWP allows you to work for any employer anywhere in Canada.' },
                { icon: FileText, title: 'Canadian Experience Class', body: 'One year of skilled work experience in Canada qualifies you for Express Entry through the Canadian Experience Class, the fastest route to permanent residency for graduates.' },
                { icon: BookOpen, title: 'Provincial Nominee Programs', body: 'Many Canadian provinces have dedicated streams for international graduates. PNPs offer additional pathways to PR with lower CRS score requirements.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Canada Study Visa Guides</h2>
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
                { q: 'What IELTS score do I need for a Canada student visa?', a: 'For the SDS stream, you need IELTS Academic 6.0 in each band. For regular stream applications, IELTS 6.0 overall is generally accepted. PTE Academic (60+), CAEL (60+), and TOEFL iBT (83+) are also accepted for SDS.' },
                { q: 'How much money do I need to show for a Canada study permit?', a: 'You need to demonstrate funds covering first-year tuition plus living costs of CAD $20,635 (outside Quebec) or CAD $13,421 (Quebec). For SDS, a Guaranteed Investment Certificate of CAD $20,635 is mandatory.' },
                { q: 'Can I work while studying in Canada?', a: 'International students can work 24 hours per week off-campus during regular academic sessions and full-time during scheduled breaks like summer and winter holidays.' },
                { q: 'How long does it take to get Canada PR after studying?', a: 'After completing your studies and gaining 1 year of skilled work experience on PGWP, you can apply for PR through the Canadian Experience Class. The entire process from study to PR typically takes 3-5 years.' },
                { q: 'What is the difference between SDS and regular study permit?', a: 'SDS offers faster processing (20 days vs 8-12 weeks) but requires higher IELTS scores (6.0 each band vs 6.0 overall) and a mandatory GIC of CAD $20,635. SDS is available to residents of select countries including India, Pakistan, and the Philippines.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Canada Study Journey?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our team in Dubai has helped hundreds of students navigate the Canada study permit process — from university selection to visa approval and pre-departure preparation. Book a free consultation to discuss your profile.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
