import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Bangladesh',
  description: 'Study abroad and visa guidance for students from Bangladesh, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'bangladesh study abroad', 'study visa from bangladesh', 'bangladesh immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/south-asia/bangladesh`,
  },
  openGraph: {
    title: 'Immigration Consultants in Bangladesh | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Bangladesh. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/south-asia/bangladesh`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function BangladeshPage() {
  return (
    <GeoPage
      name="Bangladesh"
      region="south-asia"
      description="Bangladesh has a rapidly growing international student population with increasing preference for Canada, UK, and Australia for higher education across STEM and business fields. Navigator Immigration Consultant is a trusted immigration consultant in Bangladesh, helping students from Dhaka and Chittagong achieve their study abroad goals."
      overview="Bangladesh has seen remarkable growth in its international student population, with tens of thousands of Bangladeshi students now studying abroad annually. Canada, the UK, and Australia are the top destinations, with Canada's SDS program offering fast-track processing for eligible Bangladeshi applicants. Dhaka and Chittagong have well-developed study abroad infrastructure, including test preparation centres for IELTS and PTE, education consultancies, and regular university recruitment fairs. As a leading immigration consultant in Bangladesh, Navigator Immigration Consultant supports students with course selection, application processing, and visa guidance. Bangladeshi students are particularly strong in engineering, computer science, business, and public health programs. The country's growing economy and expanding middle class are enabling more families to invest in international education for their children."
      benefits={[
        'Bangladesh benefits from Canada SDS eligibility, providing faster study permit processing for qualifying applicants with strong academic and financial profiles.',
        'English-medium education is well-established in Bangladesh, particularly in Dhaka\'s top schools and colleges, preparing students for international academic environments.',
        "The country's growing economy is expanding the middle class and making international education accessible to more families.",
        'Dhaka has regular international education fairs featuring representatives from Canadian, UK, Australian, and US universities.',
        'Bangladeshi diaspora communities in the UK, Canada, and Australia provide valuable support networks for new students.',
      ]}
      scholarships={[
        'Commonwealth Scholarships — available for Bangladeshi students for master\'s and PhD programs in the UK, covering full tuition, living expenses, and airfare.',
        'Australia Awards Scholarships — Australian government scholarships for Bangladeshi students pursuing master\'s and PhD programs at Australian universities.',
        'Chevening Scholarships — UK government scholarships for one-year master\'s programs for Bangladeshi students with strong academic and leadership profiles.',
      ]}
      loanInfo="Major Bangladeshi banks including Sonali Bank, Janata Bank, Dutch-Bangla Bank, and BRAC Bank offer education loans for overseas study. The Bangladesh Bank has guidelines for education loans that encourage banks to offer favorable terms. Loans typically cover tuition, living expenses, and travel costs. Many Bangladeshi students also use personal savings or family support for funding. Financial evidence for visa applications typically requires maintaining funds in bank accounts for 4-6 months with clear documentation of source of funds."
      faqs={[
        { q: 'Is Bangladesh eligible for Canada SDS?', a: 'Yes, Bangladeshi students can apply for the Student Direct Stream for Canada, which offers faster processing (20 calendar days) with IELTS 6.0 each band and GIC of CAD $20,635.' },
        { q: 'What programs do Bangladeshi students typically pursue abroad?', a: 'Computer science, engineering, business administration, public health, and data science are among the most popular choices. There is also growing interest in environmental science and renewable energy programs.' },
        { q: 'What financial options are available for Bangladeshi students?', a: 'Major Bangladeshi banks offer education loans for overseas study. Some universities also offer merit-based scholarships for international students from Bangladesh. External scholarships like Commonwealth and Chevening are also popular.' },
      ]}
    />
  )
}
