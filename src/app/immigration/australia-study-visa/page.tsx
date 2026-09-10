import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, GraduationCap, Clock, DollarSign, Flag, FileText, BookOpen } from 'lucide-react'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Australia Study Visa Guide 2026 | Navigator',
  description: 'Australia Student Visa 500, Genuine Student, 485 Graduate Visa, costs, and PR pathways for applicants from Dubai.',
  keywords: ['Australia study visa', 'Subclass 500 visa', 'Australia student visa', 'study in Australia from Dubai', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/australia-study-visa`,
  },
  openGraph: {
    title: 'Australia Study Visa Guide 2026 | Navigator',
    description: 'Complete Australia study visa guide for 2026. Subclass 500 visa, Genuine Student requirement, 485 Graduate Visa, and PR pathways.',
    url: `${siteUrl}/immigration/australia-study-visa`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function AustraliaStudyVisaPillar() {
  const posts = getAllBlogPosts().filter(p => p.category === 'Australia Immigration')

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="Australia Study Visa"
        description="Your complete resource for studying in Australia — from Subclass 500 and Genuine Student requirements to the 485 Temporary Graduate Visa and PR pathways."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'View Australia Guides', href: '/immigration/blog' }}
      />

      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Australia Student Visa Overview</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Australia is consistently ranked among the top three study destinations globally, attracting over 700,000 international students annually. With world-class universities, a sunny climate, and strong post-study work options, Australia offers an exceptional education experience. The country is particularly popular for its strong research programs across STEM, healthcare, and business disciplines.
            </p>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              The Subclass 500 Student Visa is the primary visa for international students. It requires a Confirmation of Enrolment from a CRICOS-registered institution, meeting the Genuine Student requirement, demonstrating English proficiency, and maintaining Overseas Student Health Cover for your entire stay. Australia&apos;s Temporary Graduate Visa (Subclass 485) allows graduates to work for 2-4 years after study, with extended rights for select degrees.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                { icon: DollarSign, label: 'Annual Tuition', value: 'AUD $28,000-$45,000' },
                { icon: Clock, label: 'Visa Processing', value: '4-8 weeks' },
                { icon: GraduationCap, label: 'Work During Study', value: '48 hrs/fortnight' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Top Australian Universities for International Students</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Australia is home to several world-class universities that consistently rank among the global top 100. Here are the leading institutions for international students:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">University</th>
                    <th className="p-3 font-semibold">QS Ranking 2026</th>
                    <th className="p-3 font-semibold">Popular Programs</th>
                    <th className="p-3 font-semibold">Est. Tuition (AUD/yr)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['University of Melbourne', '#14', 'Medicine, Engineering, Law', '$35,000-$50,000'],
                    ['University of Sydney', '#19', 'Business, Engineering, Health', '$38,000-$52,000'],
                    ['University of New South Wales', '#19', 'Engineering, Business, Law', '$35,000-$48,000'],
                    ['Australian National University', '#30', 'Science, Arts, Law', '$34,000-$46,000'],
                    ['Monash University', '#37', 'Engineering, Medicine, Business', '$32,000-$45,000'],
                    ['University of Queensland', '#40', 'Medicine, Engineering, Science', '$32,000-$44,000'],
                    ['University of Adelaide', '#82', 'Engineering, Science, Medicine', '$30,000-$42,000'],
                    ['University of Technology Sydney', '#90', 'IT, Business, Design', '$28,000-$40,000'],
                    ['RMIT University', '#123', 'Design, Engineering, Business', '$28,000-$38,000'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Cost of Living in Australia</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Living costs in Australia vary by city. Below is the monthly cost breakdown for international students:
            </p>
            <div className="overflow-x-auto rounded-xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#436175] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Expense</th>
                    <th className="p-3 font-semibold">Sydney (AUD/month)</th>
                    <th className="p-3 font-semibold">Melbourne (AUD/month)</th>
                    <th className="p-3 font-semibold">Other Cities (AUD/month)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#f5f5dc]">
                  {[
                    ['Rent (shared apt)', '$900-$1,500', '$800-$1,400', '$600-$900'],
                    ['Groceries & Food', '$400-$600', '$400-$600', '$350-$500'],
                    ['Transport (monthly pass)', '$130-$180', '$130-$175', '$80-$130'],
                    ['OSHC Insurance', '$600/yr', '$600/yr', '$600/yr'],
                    ['Phone & Internet', '$60-$100', '$60-$100', '$50-$80'],
                    ['Miscellaneous', '$250-$400', '$250-$400', '$200-$350'],
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Scholarships for Studying in Australia</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Several Australian scholarships can help reduce the cost of your education:
            </p>
            <div className="space-y-4">
              {[
                { name: 'Australia Awards Scholarships', amount: 'Full tuition + living + airfare', eligibility: 'Government-funded — students from developing countries including India, Pakistan, Bangladesh' },
                { name: 'Destination Australia Program', amount: 'Up to AUD $15,000/year', eligibility: 'Students studying at regional campuses' },
                { name: 'University of Melbourne International Scholarship', amount: 'Full or partial tuition', eligibility: 'High-achieving international students' },
                { name: 'UNSW International Scholarships', amount: 'Up to AUD $20,000/year', eligibility: 'Academic excellence — automatic consideration with application' },
                { name: 'Monash International Merit Scholarship', amount: 'AUD $10,000-$50,000', eligibility: 'Outstanding academic results and leadership potential' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Required Documents for Australia Student Visa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: FileText, text: 'Valid passport' },
                { icon: FileText, text: 'Confirmation of Enrolment (CoE) from CRICOS-registered institution' },
                { icon: FileText, text: 'Financial evidence showing AUD $24,505 living costs + tuition + travel' },
                { icon: FileText, text: 'IELTS/PTE/TOEFL language test results' },
                { icon: FileText, text: 'Genuine Student (GS) statement and supporting evidence' },
                { icon: FileText, text: 'Academic transcripts and completion certificates' },
                { icon: FileText, text: 'Overseas Student Health Cover (OSHC) policy' },
                { icon: FileText, text: 'Biometrics (fingerprints and photograph)' },
                { icon: FileText, text: 'Health examination results' },
                { icon: FileText, text: 'Visa application fee receipt (AUD $710)' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Common Australia Student Visa Refusal Reasons</h2>
            <p className="text-[#e5e7eb] mb-6 leading-relaxed">
              Australia&apos;s Department of Home Affairs assesses student visa applications carefully. Here are common reasons for refusal and how to avoid them:
            </p>
            <div className="space-y-4">
              {[
                { reason: 'Failed Genuine Student Requirement', solution: 'Prepare a comprehensive GS statement explaining your academic background, career goals, chosen program relevance, and strong ties to your home country. Include supporting evidence.' },
                { reason: 'Insufficient Financial Capacity', solution: 'Demonstrate AUD $24,505 annual living costs plus full first-year tuition plus travel. Funds must be genuine and accessible. Education loans are acceptable with proper documentation.' },
                { reason: 'Inadequate English Proficiency', solution: 'Meet minimum IELTS 6.0 overall (5.5 each band) for direct entry. Lower scores may qualify for packaged ELICOS programs. Consider PTE Academic (50+) or TOEFL iBT (60+).' },
                { reason: 'Health or Character Concerns', solution: 'Complete all required health examinations upfront. Provide police clearance certificates. Disclose any previous visa refusals or immigration history.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Australia Student Visa Application Timeline</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Plan your Australia student visa application with this recommended timeline for a February or July intake:
            </p>
            <div className="space-y-4">
              {[
                { month: '6-8 months before', tasks: 'Research universities and CRICOS-registered programs. Check Genuine Student requirements. Begin test preparation.' },
                { month: '4-6 months before', tasks: 'Take IELTS/PTE. Apply to shortlisted universities. Prepare academic documents and GS statement.' },
                { month: '2-4 months before', tasks: 'Receive CoE. Arrange OSHC. Prepare financial evidence. Submit visa application via ImmiAccount.' },
                { month: '1-2 months before', tasks: 'Complete biometrics and health examination. Track application status. Arrange accommodation and flights.' },
                { month: 'Arrival', tasks: 'Arrive up to 90 days before course start. Attend orientation. Open Australian bank account. Register for OSHC card.' },
              ].map(item => (
                <div key={item.month} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-36 shrink-0">
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
                { step: '1', title: 'Choose Your Institution and Program', body: 'Select a CRICOS-registered institution and a program that matches your academic background and career goals. Australia offers a wide range of programs from vocational education to doctoral research degrees.' },
                { step: '2', title: 'Receive Your Confirmation of Enrolment', body: 'Once accepted, your institution issues a CoE — a document confirming your enrollment details. You need this CoE to apply for your Subclass 500 visa.' },
                { step: '3', title: 'Meet the Genuine Student Requirement', body: 'The GS requirement assesses your genuine intention to study in Australia based on your academic background, career plans, economic circumstances, and ties to your home country.' },
                { step: '4', title: 'Submit Your Visa Application', body: 'Apply online via ImmiAccount with your CoE, OSHC policy, financial evidence showing AUD $24,505 for living costs, English test results, and biometrics. Processing typically takes 4-8 weeks.' },
                { step: '5', title: 'Prepare for Your Move', body: "Arrange accommodation (on-campus or private rental), open an Australian bank account, purchase OSHC, and join your institution's orientation program. You can enter Australia up to 90 days before your course starts." },
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
                { icon: Clock, title: 'Subclass 485 Visa', body: 'The Temporary Graduate Visa allows 2-4 years of work after study depending on qualification level. Extended post-study work rights apply to select degrees in priority areas.' },
                { icon: FileText, title: 'Skilled Migration Options', body: 'Australian work experience on the 485 visa helps qualify for PR through Subclass 189 (Skilled Independent), 190 (State Nominated), or 491 (Regional) skilled migration pathways.' },
                { icon: BookOpen, title: 'Skills Assessment & Points Test', body: 'Most PR pathways require a skills assessment in your occupation and a points test covering age, English ability, work experience, education, and Australian study credits.' },
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
            <h2 className="text-3xl font-bold text-[#436175] mb-6">Australia Study Visa Guides</h2>
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
                { q: 'What is the Genuine Student requirement for Australia?', a: 'The GS requirement assesses your genuine intention to study in Australia based on your academic background, career plans, economic circumstances, and ties to your home country. It replaced the GTE (Genuine Temporary Entrant) requirement.' },
                { q: 'How much money do I need for an Australia student visa?', a: "You need AUD $24,505 per year for living costs plus first-year tuition fees and approximately AUD $2,000-$3,000 for travel costs. Funds can be in your account, a sponsor's account, or through an education loan." },
                { q: 'Can I work while studying in Australia?', a: "Yes, international students can work 48 hours per fortnight during term time and unlimited hours during scheduled breaks. PhD and master's research students have unlimited work rights." },
                { q: 'What is the Subclass 485 visa?', a: "The Temporary Graduate Visa allows graduates to work 2-4 years after study. Post-Study Work Stream: 2 years for bachelor's, 2-3 years for master's, 4 years for PhD. Graduate Work Stream: 18 months." },
                { q: 'Can I apply for PR after studying in Australia?', a: 'Yes, skilled work experience on the 485 visa can help you qualify for skilled migration PR pathways like Subclass 189 (Skilled Independent), 190 (State Nominated), or 491 (Regional) visas.' },
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Study in Australia?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our Dubai team offers comprehensive Australia student visa guidance — from choosing the right CRICOS-registered program to preparing your Genuine Student statement and visa application. Schedule a free consultation today.
          </p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-[#436175] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
