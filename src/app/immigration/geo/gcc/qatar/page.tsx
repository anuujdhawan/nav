import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Qatar',
  description: 'Study abroad and visa guidance for students from Qatar, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'qatar study abroad', 'study visa from qatar', 'qatar immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/qatar`,
  },
  openGraph: {
    title: 'Immigration Consultants in Qatar | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Qatar. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/qatar`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function QatarPage() {
  return (
    <GeoPage
      name="Qatar"
      region="gcc"
      description="Navigator Immigration Consultant is a trusted immigration consultant in Qatar, a country that has invested heavily in education through Qatar Foundation and Education City, with many students choosing to continue their studies abroad at top global universities."
      overview="Navigator Immigration Consultant is a leading immigration consultant in Qatar, helping students access exceptional educational opportunities. Qatar has made remarkable investments in education, anchored by Qatar Foundation's Education City — a 2,500-acre campus hosting branch campuses of elite international universities including Georgetown, Carnegie Mellon, Texas A&M, Weill Cornell Medicine, and Northwestern. This unique ecosystem gives Qatari students early exposure to international education standards, making the transition to overseas study seamless. Many students from Qatar pursue undergraduate degrees at Education City's partner universities and then continue to master's and PhD programs abroad at leading institutions. The Qatar Scholarship Program and Qatar Foundation's initiatives provide comprehensive financial support for students pursuing international education."
      benefits={[
        'Education City in Doha hosts branch campuses of several top US universities, giving students a pathway to international education within Qatar before transferring abroad.',
        'Qatar Foundation and the Qatar Scholarship Program provide generous funding for students pursuing degrees at top international universities.',
        'Students graduating from Education City institutions have strong academic credentials recognized by graduate programs worldwide.',
        "Qatar's high per-capita income and strong banking sector make financial documentation for visa applications straightforward.",
        "The country's focus on knowledge economy development creates strong incentives for internationally educated graduates.",
      ]}
      scholarships={[
        'The Qatar Scholarship Program provides full funding for tuition, living expenses, and travel for Qatari students at top international universities.',
        'Qatar Foundation offers specialized scholarships for students pursuing programs aligned with Qatar National Vision 2030, including STEM, healthcare, and sustainable development.',
        'Education City partner universities often offer transfer scholarships for students transitioning from Doha branch campuses to main campuses abroad.',
      ]}
      loanInfo="Most Qatari students are funded through government scholarships or Qatar Foundation programs. For self-funded students, Qatari banks including Qatar National Bank (QNB), Doha Bank, and Commercial Bank offer education financing. Qatar's high per-capita income means many families self-fund international education. Financial documentation from Qatari banks is well-regarded by visa officers internationally due to the country's strong financial regulatory framework."
      faqs={[
        { q: 'What is Education City in Qatar?', a: 'Education City is a Qatar Foundation initiative hosting branch campuses of Georgetown, Carnegie Mellon, Texas A&M, Weill Cornell Medicine, Northwestern, and other top universities on a single 2,500-acre campus in Doha.' },
        { q: 'Which countries do Qatari students prefer for study abroad?', a: 'The United Kingdom, USA, and Canada are the most popular destinations. Many students continue from Education City branch campuses to main campuses abroad for advanced degrees.' },
        { q: 'What scholarships are available for Qatari students?', a: 'The Qatar Scholarship Program provides full funding for tuition, living expenses, and travel. Qatar Foundation also offers specialized scholarships for students pursuing programs aligned with Qatar National Vision 2030.' },
      ]}
    />
  )
}
