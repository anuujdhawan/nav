import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Punjab',
  description: 'Study abroad and visa guidance for students from Punjab, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'punjab study abroad', 'study visa from punjab', 'punjab immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/punjab`,
  },
  openGraph: {
    title: 'Immigration Consultants in Punjab | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Punjab. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/india/punjab`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function PunjabPage() {
  return (
    <GeoPage
      name="Punjab"
      region="india"
      description="Punjab has a long history of international migration with strong diaspora communities in Canada, UK, Australia, and the USA. Students from Punjab are among the largest groups studying abroad. Navigator Immigration Consultant is a trusted immigration consultant in Punjab, assisting students with their international education journey."
      overview="Punjab has one of the strongest traditions of international migration in India, and this extends powerfully into study abroad. Students from Punjab form one of the largest regional groups of Indian students overseas, particularly in Canada where the Punjabi diaspora community is over 600,000 strong. Cities like Chandigarh, Amritsar, Ludhiana, and Jalandhar have thriving study abroad ecosystems with numerous coaching centres, visa consultancies, and education loan providers. The Canada SDS stream is particularly popular among Punjab students, with many taking advantage of the faster 20-day processing time and the strong community support available in Canadian cities like Brampton, Surrey, and Calgary. Navigator Immigration Consultant is a dedicated immigration consultant in Punjab, providing expert guidance and support to students throughout the process."
      benefits={[
        'The large Punjabi diaspora in Canada provides exceptional community support — students arrive to established networks, cultural organizations, and familiar community resources.',
        'Punjab has a well-developed education loan ecosystem, with major banks like SBI, HDFC, and ICICI offering specialized study abroad loan products with minimal collateral requirements.',
        'The state has excellent test preparation infrastructure, with high-quality IELTS, PTE, and CELPIP coaching centres in all major cities.',
        'Punjab students have strong Canada visa success rates due to well-documented financial profiles and clear home ties demonstrating intent to return.',
        'Agriculture, business, and engineering programs are particularly popular, leveraging Punjab\'s strengths in these fields.',
      ]}
      scholarships={[
        'Punjab government offers the Punjab Scholarship Scheme for meritorious students from economically weaker sections pursuing higher education abroad.',
        'Various Punjabi cultural and religious organizations offer financial support for students from the community pursuing international education.',
        'University-specific scholarships — Canadian and UK universities often have dedicated scholarships for Indian students, with many Punjabi students qualifying based on strong academic records.',
      ]}
      loanInfo="Punjab has one of India's most developed education loan markets. SBI, HDFC Credila, Avanse, and ICICI offer specialized study abroad loans up to INR 1.5 crores. Many lenders offer collateral-free loans up to INR 7.5 lakhs for students with strong academic profiles. Punjab-based cooperative banks and credit unions also offer competitive rates. The loan processing time in Punjab is typically 1-3 weeks for well-documented applications."
      faqs={[
        { q: 'Why is Canada so popular among Punjab students?', a: 'Canada\'s large Punjabi community (over 600,000) provides strong family and community support. The SDS stream also offers fast 20-day processing, and Canada\'s PGWP and clear PR pathways align well with many Punjabi families\' long-term settlement goals.' },
        { q: 'What education loan options are available in Punjab?', a: 'SBI, HDFC Credila, Avanse, and ICICI offer study abroad loans up to INR 1.5 crores. Many lenders offer collateral-free loans up to INR 7.5 lakhs for students with strong academic profiles and admission to top universities.' },
        { q: 'Which Canadian cities do Punjab students prefer?', a: 'Brampton and Surrey have the largest Punjabi communities, making them popular choices. Calgary, Edmonton, and Winnipeg are also increasingly popular due to lower living costs and strong job markets.' },
      ]}
    />
  )
}
