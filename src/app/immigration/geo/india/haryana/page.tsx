import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Haryana',
  description: 'Study abroad and visa guidance for students from Haryana, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'haryana study abroad', 'study visa from haryana', 'haryana immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/india/haryana`,
  },
  openGraph: {
    title: 'Immigration Consultants in Haryana | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Haryana. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/india/haryana`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function HaryanaPage() {
  return (
    <GeoPage
      name="Haryana"
      region="india"
      description="Haryana has emerged as a major source of international students, particularly from cities like Gurugram and Faridabad, with strong preference for Canada and Australia. Navigator Immigration Consultant is a trusted immigration consultant in Haryana, helping students achieve their study abroad goals."
      overview="Haryana's proximity to Delhi's international education ecosystem gives its students a significant advantage. Cities like Gurugram, Faridabad, Panchkula, and Ambala have seen a surge in students choosing to study abroad, particularly in Canada and Australia. The state's strong English-medium education system, particularly in Gurugram's many international schools and CBSE-affiliated institutions, prepares students well for the academic demands of overseas study. Haryana's growing IT and business process outsourcing sectors also create strong career motivations for advanced international degrees in technology, business, and management fields. Navigator Immigration Consultant, as a known immigration consultant in Haryana, provides comprehensive support for aspiring international students."
      benefits={[
        "Proximity to Delhi gives Haryana students access to the capital's extensive study abroad infrastructure including embassies, test centres, and education fairs.",
        "Gurugram's corporate sector provides excellent internship and work experience opportunities that strengthen study abroad applications.",
        "The state has a strong network of international schools and CBSE institutions with excellent English-medium education.",
        "Haryana students have good access to education loans through banks with branches in Gurugram, Faridabad, and Panchkula.",
        "Growing preference for technology and management programs abroad, aligned with Haryana's industrial and IT sector growth.",
      ]}
      scholarships={[
        'Haryana government offers the Haryana State Scholarship for meritorious students pursuing higher education abroad, with preference for STEM and management programs.',
        'Many Gurugram-based corporate foundations offer scholarships for children of employees pursuing international education.',
        'University merit scholarships — Canadian and UK universities offer significant awards for Indian students from Haryana with strong CBSE scores.',
      ]}
      loanInfo="Haryana students benefit from proximity to Delhi's education loan market. SBI, HDFC Credila, Avanse, ICICI, and Axis Bank offer study abroad loans through branches in Gurugram and Faridabad. Loans up to INR 1.5 crores are available. Many professionals working in Gurugram's corporate sector qualify for preferential loan terms through employer banking partnerships. Collateral-free loans up to INR 7.5 lakhs are available under government schemes."
      faqs={[
        { q: 'Which study abroad destinations are popular in Haryana?', a: 'Canada is the most popular destination, particularly for SDS stream applicants. Australia and the UK are also popular choices. Students from Gurugram increasingly consider US universities for technology programs.' },
        { q: 'What is the typical academic profile of Haryana students going abroad?', a: 'Many have strong CBSE backgrounds with good scores in mathematics and science. Engineering, computer applications, and business management graduates are the most common profiles seeking master\'s programs abroad.' },
        { q: 'How do Haryana students prepare for study abroad?', a: 'Students typically use coaching centres in Gurugram or Delhi for IELTS/PTE/GRE preparation. Many attend education fairs in Delhi to connect directly with university representatives.' },
      ]}
    />
  )
}
