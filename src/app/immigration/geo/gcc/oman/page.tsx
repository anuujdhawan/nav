import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Oman',
  description: 'Study abroad and visa guidance for students from Oman, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'oman study abroad', 'study visa from oman', 'oman immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/oman`,
  },
  openGraph: {
    title: 'Immigration Consultants in Oman | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Oman. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/oman`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function OmanPage() {
  return (
    <GeoPage
      name="Oman"
      region="gcc"
      description="Navigator Immigration Consultant is a trusted immigration consultant in Oman, a country that encourages international education through government scholarship programs, with students pursuing studies in Canada, UK, USA, and Australia across diverse fields."
      overview="Navigator Immigration Consultant is a leading immigration consultant in Oman, assisting students with their journey to study abroad. Oman has a growing international student population supported by the Ministry of Higher Education's scholarship programs and the country's strong emphasis on educational development. Omani students pursuing international education are typically supported through the government's overseas scholarship program, which covers tuition, living expenses, and travel for students admitted to approved programs at recognized international universities. The UK has traditionally been the most popular destination for Omani students due to historical ties and proximity, but Canada, Australia, and the USA are attracting increasing interest. Omani students commonly pursue medicine, engineering, information technology, and business programs."
      benefits={[
        'The Omani Ministry of Higher Education provides scholarships for qualified students at approved international universities, covering full tuition and living expenses.',
        "Oman's strong English-medium education system, particularly in private schools and colleges, prepares students for international academic environments.",
        "The UK's proximity (approximately 7-8 hours from Muscat) makes it a convenient destination for Omani students and their families.",
        'Omani student associations in major study destinations provide community support and cultural connection.',
        'The growing Omani private sector values graduates with international education, creating strong career incentives.',
      ]}
      scholarships={[
        'Ministry of Higher Education Overseas Scholarships — full funding for Omani students at approved international universities, covering tuition, monthly stipend, health insurance, and annual airfare.',
        'Petroleum Development Oman (PDO) and other major Omani employers offer scholarship programs for employees and their children.',
        'Some international universities offer merit-based scholarships specifically for Omani applicants based on academic excellence.',
      ]}
      loanInfo="Most Omani students are funded through government scholarships. For self-funded students, Omani banks including Bank Muscat, Oman Arab Bank, and National Bank of Oman offer education loans. The Omani government also provides interest-free loans through the Ministry of Higher Education for students pursuing approved programs abroad. Financial documentation from Omani banks is widely accepted by visa officers for study permit applications."
      faqs={[
        { q: 'What scholarships are available for Omani students?', a: 'The Ministry of Higher Education offers overseas scholarships for eligible students. These typically cover full tuition, monthly stipend, health insurance, and annual airfare. Applications are managed through the Ministry.' },
        { q: 'Which countries are popular among Omani students?', a: 'The United Kingdom is historically the most popular destination due to strong educational and cultural ties. Canada and Australia are growing in popularity, particularly for their post-study work options.' },
        { q: 'What programs do Omani students typically choose?', a: 'Medicine, engineering, information technology, business administration, and education are among the most common fields of study for Omani students abroad.' },
      ]}
    />
  )
}
