import type { Metadata } from 'next'
import GeoPage from '../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in India',
  description: 'Study abroad and visa guidance for students from India, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'india study abroad', 'study visa from india', 'india immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india`,
  },
  openGraph: {
    title: 'Immigration Consultants in India | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from India. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/india`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function IndiaPage() {
  return (
    <GeoPage
      name="India"
      region="india"
      description="India is the world's largest source of international students, with over 1.3 million Indian students studying abroad. Canada, UK, Australia, and the USA are the top destinations. Navigator Immigration Consultant is a trusted immigration consultant in India, helping students achieve their study abroad goals."
      overview="India has the world's largest international student population, with over 1.3 million students pursuing higher education abroad in 2025. This number continues to grow by 15-20% annually, driven by rising aspirations, a growing middle class, and increasing awareness of global education opportunities. Indian students are highly regarded for their strong academic foundations, particularly in STEM fields, and consistently perform well at top international universities. Major study hubs include Delhi NCR, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, and Ahmedabad — each with thriving study abroad ecosystems including test preparation centres, visa consultancies, and regular international education fairs. Canada remains the top destination for Indian students, followed by the UK, USA, Australia, and Germany. Navigator Immigration Consultant, as a trusted immigration consultant in India, provides expert guidance throughout this journey."
      benefits={[
        'India has a vast and mature study abroad ecosystem with experienced consultants, test preparation centres, and education loan providers in every major city.',
        'The Indian diaspora in Canada, UK, USA, and Australia provides strong community support networks for new international students arriving abroad.',
        'Indian students have access to a wide range of education loans from public and private sector banks, with specialized products for study abroad.',
        'The Indian education system produces graduates with strong STEM foundations who are highly sought after by international universities and employers.',
        "India's growing economy and expanding middle class are enabling more families to invest in international education as a pathway to global careers.",
      ]}
      scholarships={[
        'National Overseas Scholarship — Government of India scholarship for students from Scheduled Castes, Scheduled Tribes, and Other Backward Classes pursuing master\'s and PhD programs abroad.',
        'Chevening Scholarships — UK government scholarship for one-year master\'s programs at UK universities, highly competitive among Indian applicants.',
        'Commonwealth Scholarships — available for Indian students for master\'s and PhD programs in the UK, covering full tuition, living costs, and airfare.',
        'Australia Awards Scholarships — Australian government scholarships for master\'s and PhD programs at Australian universities.',
      ]}
      loanInfo="India has one of the most developed education loan markets in the world. Major public sector banks (SBI, Bank of Baroda, Canara Bank) and private sector banks (HDFC Credila, Avanse, ICICI, Axis) offer specialized study abroad loans up to INR 1.5 crores. The Indian government's Vidya Lakshmi portal provides a single-window platform for education loan applications. Collateral-free loans up to INR 7.5 lakhs are available under the Central Sector Interest Subsidy Scheme for eligible students from economically weaker sections. Loan processing typically takes 1-4 weeks depending on the amount and documentation."
      faqs={[
        { q: 'Which countries are most popular for Indian students?', a: 'Canada is the top destination with over 400,000 Indian students, followed by the UK (180,000+), USA (150,000+), Australia (130,000+), and Germany (25,000+). Canada\'s SDS stream and clear PR pathways make it particularly attractive.' },
        { q: 'What documents do Indian students need for a study visa?', a: 'Valid passport, university acceptance letter, 3-6 months bank statements or education loan letter, IELTS/PTE scores, academic transcripts, statement of purpose, and visa application fee receipt. Specific requirements vary by destination country.' },
        { q: 'What is the Canada SDS stream and how does it benefit Indian students?', a: 'SDS (Student Direct Stream) offers faster 20-day processing for Indian students meeting enhanced requirements: IELTS 6.0 each band, GIC of CAD $20,635, and upfront medical examination. Over 60% of Indian student visa applications to Canada use SDS.' },
        { q: 'What education loans are available for Indian students?', a: 'Most major Indian banks offer study abroad loans up to INR 1.5 crores. SBI, HDFC Credila, Avanse, and ICICI are popular choices. Collateral-free loans up to INR 7.5 lakhs are available under government schemes for eligible students.' },
      ]}
    />
  )
}
