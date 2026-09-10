import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Bahrain',
  description: 'Study abroad and visa guidance for students from Bahrain, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'bahrain study abroad', 'study visa from bahrain', 'bahrain immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/bahrain`,
  },
  openGraph: {
    title: 'Immigration Consultants in Bahrain | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Bahrain. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/bahrain`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function BahrainPage() {
  return (
    <GeoPage
      name="Bahrain"
      region="gcc"
      description="Navigator Immigration Consultant is a trusted immigration consultant in Bahrain, a country with a well-established international education tradition, strong connections to UK and US universities, and growing interest in Canadian education."
      overview="Navigator Immigration Consultant is a trusted immigration consultant in Bahrain, providing expert support for students pursuing education abroad. Bahrain has a long tradition of international education, supported by the Kingdom's strong economic foundation and the Ministry of Education's scholarship programs. Bahraini students have historically favoured the United Kingdom and the United States for higher education, but Canada and Australia are attracting growing interest due to their post-study work options and clear immigration pathways. The country's English-medium education system, with many schools following British and American curricula, prepares students well for overseas study. Bahrain's banking sector is sophisticated and well-equipped to support the financial documentation required for study visa applications."
      benefits={[
        "Bahrain's Ministry of Education provides scholarship support for Bahraini students at approved international universities across multiple destinations.",
        'English-medium education is widely available, with many Bahraini schools following British GCSE/A-Level and American curricula.',
        "Bahrain's well-developed banking sector makes financial documentation for visa applications straightforward.",
        "The Kingdom's small size and close-knit community mean strong support networks exist for students and their families.",
        'Bahraini students have historically strong representation in UK universities, with well-established alumni networks.',
      ]}
      scholarships={[
        'Ministry of Education Scholarships — Bahraini government provides funding for students at approved international universities across multiple destinations, covering tuition and living expenses.',
        'Bahrain Petroleum Company (BAPCO) and other major employers offer scholarship programs for employees and their dependents.',
        'Some UK and US universities offer dedicated scholarship programs for Bahraini applicants based on academic merit.',
      ]}
      loanInfo="Bahraini students are typically funded through government scholarships or family resources. Bahraini banks including Bank of Bahrain and Kuwait (BBK), National Bank of Bahrain (NBB), and Ahli United Bank offer education financing options. Bahrain's sophisticated banking sector and strong regulatory framework mean financial documentation from Bahraini banks is well-received by visa officers internationally."
      faqs={[
        { q: 'Which countries do Bahraini students prefer?', a: 'The United Kingdom has traditionally been the most popular destination for Bahraini students. The USA, Canada, and Australia are also significant destinations, with Canada growing rapidly in popularity.' },
        { q: 'What scholarships are available for Bahraini students?', a: 'The Ministry of Education offers scholarships for students meeting academic requirements. Some universities also offer merit-based scholarships specifically for Bahraini applicants.' },
        { q: 'What programs do Bahraini students typically pursue?', a: 'Medicine, engineering, business administration, computer science, and law are popular choices. Finance and accounting programs also attract many Bahraini students given the Kingdom\'s role as a regional financial centre.' },
      ]}
    />
  )
}
