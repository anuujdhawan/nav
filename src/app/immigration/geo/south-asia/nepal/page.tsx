import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Nepal',
  description: 'Study abroad and visa guidance for students from Nepal, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'nepal study abroad', 'study visa from nepal', 'nepal immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/south-asia/nepal`,
  },
  openGraph: {
    title: 'Immigration Consultants in Nepal | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Nepal. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/south-asia/nepal`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function NepalPage() {
  return (
    <GeoPage
      name="Nepal"
      region="south-asia"
      description="Nepal has a long tradition of students pursuing higher education abroad, particularly in Canada, Australia, and the UK, with strong community support networks. Navigator Immigration Consultant is a trusted immigration consultant in Nepal, supporting students from Kathmandu and Pokhara with their overseas education journey."
      overview="Nepal has one of the highest per-capita rates of international student mobility in South Asia, with tens of thousands of Nepali students studying abroad annually. Canada has become the top destination for Nepali students in recent years, thanks to supportive visa policies, strong diaspora communities, and growing awareness of Canadian education options. Australia and the UK also attract significant numbers. Nepali students are particularly well-regarded for their strong work ethic, English proficiency, and excellence in healthcare, engineering, and IT programs. Kathmandu and Pokhara have thriving study abroad ecosystems with numerous private consultancies, language test centres, and regular education fairs. Navigator Immigration Consultant Nepal is a trusted immigration consultant helping students navigate the application process, from university shortlisting to visa filing."
      benefits={[
        'Nepali students have strong Canada study permit success rates due to clear academic documentation, well-prepared financial profiles, and demonstrated home ties.',
        'English is widely taught in Nepali schools and colleges, giving students a strong foundation for IELTS and PTE exams.',
        'The Nepali diaspora in Canada, Australia, and the UK provides strong community support — from airport pickup to accommodation and cultural connections.',
        'Kathmandu has a mature study abroad infrastructure with numerous experienced consultancies, test preparation centres, and education loan providers.',
        'Nepali students have an excellent reputation in international universities for their diligence, academic performance, and research capabilities.',
      ]}
      scholarships={[
        'Australia Awards Scholarships — Australian government scholarships for Nepali students pursuing master\'s and PhD programs at Australian universities, covering full tuition and living expenses.',
        'Commonwealth Scholarships — available for Nepali students for master\'s and PhD programs in the UK, covering tuition, living costs, and airfare.',
        'Various Canadian and Australian universities offer merit-based scholarships for Nepali students with strong academic records, particularly in STEM fields.',
      ]}
      loanInfo="Nepali banks including Nepal Bank Limited, Nepal Investment Bank, Kumari Bank, and Himalayan Bank offer education loans for overseas study. Loans typically cover tuition, living expenses, and travel. Many Nepali students also fund their education through family savings and support from relatives abroad. The financial documentation for visa applications needs to clearly show the source of funds. Some international universities offer need-based financial aid for Nepali students."
      faqs={[
        { q: 'Which study destinations are most popular for Nepali students?', a: 'Canada is now the top destination due to favourable visa policies and strong diaspora communities. Australia and the UK follow closely. Japan and South Korea are also attracting growing numbers of Nepali students.' },
        { q: 'What programs do Nepali students typically pursue?', a: 'Nursing, IT, computer science, business management, engineering, and public health are popular choices. Nepal has a strong tradition in healthcare education, making nursing and medicine common pathways.' },
        { q: 'What financial support is available for Nepali students?', a: 'Nepali banks offer education loans for overseas study. Some universities provide merit scholarships, and external scholarships like the Australia Awards and Commonwealth Scholarships are available for eligible applicants.' },
      ]}
    />
  )
}
