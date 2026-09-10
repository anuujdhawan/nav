import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Pakistan',
  description: 'Study abroad and visa guidance for students from Pakistan, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'pakistan study abroad', 'study visa from pakistan', 'pakistan immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/south-asia/pakistan`,
  },
  openGraph: {
    title: 'Immigration Consultants in Pakistan | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Pakistan. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/south-asia/pakistan`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function PakistanPage() {
  return (
    <GeoPage
      name="Pakistan"
      region="south-asia"
      description="Pakistan is a major source of international students, particularly for Canada, UK, and Australia. Students from Pakistan benefit from strong English skills and growing scholarship opportunities. Navigator Immigration Consultant is a trusted immigration consultant in Pakistan, specializing in study abroad guidance and visa support for students across Karachi, Lahore, and Islamabad."
      overview="Pakistan has emerged as one of the fastest-growing sources of international students globally, with over 80,000 Pakistani students studying abroad annually. Canada, the UK, and Australia are the top destinations, with Canada's SDS program being particularly attractive for its fast 20-day processing time. Pakistani students are known for their strong English language skills, rigorous academic preparation, and high performance in STEM fields. Cities like Karachi, Lahore, Islamabad, and Rawalpindi have thriving study abroad ecosystems with numerous test preparation centres, education consultancies, and regular university recruitment events. Navigator Immigration Consultant Pakistan provides expert guidance to students navigating this process, helping with university selection, application support, and visa documentation. The Higher Education Commission of Pakistan also provides scholarships for doctoral and postgraduate studies abroad."
      benefits={[
        'Pakistan is an SDS-eligible country for Canada, offering fast 20-day study permit processing for qualified applicants meeting enhanced requirements.',
        'English is widely spoken and taught in Pakistan, giving students a strong foundation for language proficiency tests like IELTS and PTE.',
        'The Higher Education Commission of Pakistan offers scholarships for PhD and master\'s programs at top international universities.',
        'Major Pakistani cities have well-developed study abroad infrastructure with test preparation centres, visa consultancies, and education loan providers.',
        'Active diaspora communities in Canada, the UK, and Australia provide strong support networks for Pakistani students arriving abroad.',
      ]}
      scholarships={[
        'Higher Education Commission (HEC) Pakistan — offers scholarships for PhD, master\'s, and undergraduate studies at top international universities, covering tuition, living expenses, and travel.',
        'Commonwealth Scholarships — available for Pakistani students for master\'s and PhD programs in the UK, covering full tuition, living costs, and airfare.',
        'Chevening Scholarships — UK government scholarship for one-year master\'s programs, highly competitive among Pakistani applicants with leadership potential.',
      ]}
      loanInfo="Major Pakistani banks including HBL (Habib Bank), MCB, UBL (United Bank Limited), and National Bank of Pakistan offer education loans for overseas study. The State Bank of Pakistan has a refinancing scheme for education loans that encourages banks to offer competitive rates. Loans typically cover tuition, living expenses, and travel. The HEC also provides interest-free loans for eligible students at partner universities abroad. Financial documentation from Pakistani banks requires maintaining funds for 4-6 months before visa application."
      faqs={[
        { q: 'Can Pakistani students apply for Canada SDS?', a: 'Yes, Pakistan is an SDS-eligible country. Requirements include IELTS Academic 6.0 in each band and a GIC of CAD $20,635. SDS applications are processed within 20 calendar days.' },
        { q: 'What education loans are available for Pakistani students?', a: 'Major Pakistani banks including HBL, MCB, and UBL offer education loans for study abroad. The HEC also provides interest-free loans for eligible students at partner universities.' },
        { q: 'Which destinations are most popular for Pakistani students?', a: 'Canada is the top choice due to SDS fast processing and clear PR pathways. The UK and Australia are also very popular. The USA attracts many students for graduate programs in engineering and technology.' },
      ]}
    />
  )
}
