import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in UAE',
  description: 'Study abroad and visa guidance for students from the UAE, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'uae study abroad', 'study visa from uae', 'uae immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/uae`,
  },
  openGraph: {
    title: 'Immigration Consultants in UAE | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from UAE. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/uae`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function UAEPage() {
  return (
    <GeoPage
      name="UAE"
      region="gcc"
      description="Navigator Immigration Consultant is a trusted immigration consultant in UAE, a country with a world-class education system and strong English proficiency, making it an ideal base for students pursuing higher education abroad. Dubai residents have easy access to visa centres for Canada, UK, USA, and Australia."
      overview="Navigator Immigration Consultant is a trusted immigration consultant in UAE, providing expert guidance to residents seeking to study abroad. The UAE has established itself as a major source of international students, with thousands of UAE residents choosing to study abroad each year. The country's strong English-medium education system, international school curriculum (IGCSE, IB, American), and multicultural environment give UAE students a significant advantage when applying to overseas universities. Dubai and Abu Dhabi residents benefit from having visa application centres for Canada (VFS), the UK, the USA (embassy in Abu Dhabi), and Australia right in the city. UAE residents also enjoy strong banking relationships that make financial documentation straightforward, and many international universities actively recruit from UAE schools through dedicated liaison offices."
      benefits={[
        'Visa application centres for all major study destinations are located in Dubai and Abu Dhabi, eliminating the need for travel to apply.',
        'UAE residents benefit from strong English proficiency developed through English-medium schooling from kindergarten through Grade 12.',
        'Established banking relationships in the UAE make it straightforward to produce the financial evidence required for visa applications.',
        'International schools in the UAE follow British, American, IB, and Indian curricula that are well-recognized by global universities.',
        'Many top universities host recruitment events in Dubai, and some maintain dedicated regional offices in the UAE.',
      ]}
      scholarships={[
        'UAE government scholarships are available through various entities for Emirati students pursuing international education at top-ranked universities.',
        'Many UAE-based private companies offer sponsorship and scholarship programs for children of employees studying abroad.',
        'International universities often have dedicated scholarship programs for UAE nationals and residents, recognizing the strong academic preparation in UAE schools.',
      ]}
      loanInfo="UAE banks including Emirates NBD, ADCB, Mashreq, and Abu Dhabi Islamic Bank offer education loans for UAE residents studying abroad. Loans typically cover tuition, accommodation, and living expenses. The strong banking infrastructure in the UAE means financial documentation for visa applications is straightforward. Many UAE residents use their savings or employer-provided education benefits to fund international education. Salary transfer letters and bank statements from UAE banks are widely accepted by visa officers."
      faqs={[
        { q: 'Can UAE residents apply for Canada SDS?', a: 'Yes, SDS is available for UAE residents. Requirements include IELTS 6.0 each band and a GIC of CAD $20,635. Processing takes approximately 20 days via VFS Dubai.' },
        { q: 'What documents do UAE residents need for a student visa?', a: 'Valid passport with UAE residence visa, Emirates ID, school/college transcripts, IELTS/PTE scores, 3-6 months of UAE bank statements or sponsor letter, and university acceptance letter.' },
        { q: 'Which study destinations are most popular among UAE students?', a: 'Canada is the top choice due to strong educational reputation and PR pathways. The UK is popular for its proximity (7-hour flight) and prestigious universities. Australia and the USA also attract significant numbers.' },
      ]}
    />
  )
}
