import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Uttar Pradesh',
  description: 'Study abroad and visa guidance for students from Uttar Pradesh, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'uttar pradesh study abroad', 'study visa from uttar pradesh', 'uttar pradesh immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/uttar-pradesh`,
  },
  openGraph: {
    title: 'Immigration Consultants in Uttar Pradesh | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Uttar Pradesh. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/india/uttar-pradesh`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function UttarPradeshPage() {
  return (
    <GeoPage
      name="Uttar Pradesh"
      region="india"
      description="Uttar Pradesh, particularly from cities like Lucknow, Noida, and Varanasi, has a rapidly growing international student population choosing Canada, UK, and Australia. Navigator Immigration Consultant is a trusted immigration consultant in Uttar Pradesh, guiding students toward international education opportunities."
      overview="Uttar Pradesh is experiencing rapid growth in study abroad aspirations, driven by rising aspirations, improved economic conditions, and better access to information. Cities like Lucknow, Noida, Ghaziabad, Varanasi, and Agra are emerging as significant sources of international students. Noida, in particular, benefits from its proximity to Delhi's education ecosystem while developing its own study abroad infrastructure. The state's large student population and growing middle class are creating increasing demand for international education across programs. Canada remains the top choice due to its favourable visa policies and post-study work options, followed by the UK and Australia. Navigator Immigration Consultant, a reliable immigration consultant in Uttar Pradesh, helps students access global education opportunities."
      benefits={[
        "UP's large and diverse student population means strong competition drives higher preparation standards and better outcomes.",
        "Noida and Lucknow have growing study abroad ecosystems with test preparation centres, visa consultancies, and regular education fairs.",
        "The state's improving economic conditions are enabling more families to invest in international education.",
        "Active alumni networks from international universities in Noida and Lucknow provide mentorship and guidance.",
        "Government and private scholarship programs are increasingly accessible to students from UP with strong academic records.",
      ]}
      scholarships={[
        'The Uttar Pradesh government offers scholarships for meritorious students from economically weaker sections pursuing higher education abroad through various welfare department schemes.',
        'Students from UP are eligible for national-level scholarships including the National Overseas Scholarship for scheduled castes and tribes.',
        'Many private trusts and educational foundations based in Lucknow and Noida offer financial support for students from UP pursuing international education.',
      ]}
      loanInfo="SBI, HDFC Credila, Avanse, ICICI, and Bank of Baroda offer education loans for study abroad through branches across UP. Noida and Lucknow have the most developed education loan infrastructure. Loans up to INR 1.5 crores are available with collateral. Students from smaller UP cities may need to travel to Lucknow or Noida for loan processing. Government schemes offer collateral-free loans up to INR 7.5 lakhs for eligible students."
      faqs={[
        { q: 'Which cities in UP have the most students going abroad?', a: 'Noida, Lucknow, Ghaziabad, Varanasi, and Agra have the highest numbers of students pursuing international education. Noida benefits significantly from its proximity to Delhi.' },
        { q: 'What programs do UP students typically choose?', a: 'Engineering, computer science, business management, and healthcare programs are popular. Data science and artificial intelligence programs are growing rapidly in popularity.' },
        { q: 'What are the main challenges for UP students?', a: 'Access to quality test preparation in smaller cities can be limited. Financial documentation for visa applications can be more challenging for families without established banking relationships.' },
      ]}
    />
  )
}
