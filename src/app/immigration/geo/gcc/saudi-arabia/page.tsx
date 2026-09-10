import type { Metadata } from 'next'
import GeoPage from '../../_components/GeoPage'
import { siteUrl, siteName } from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Consultants in Saudi Arabia',
  description: 'Study abroad and visa guidance for students from Saudi Arabia, provided by Navigator Immigration Consultant in Dubai.',
  keywords: ['immigration consultant Dubai', 'saudi arabia study abroad', 'study visa from saudi arabia', 'saudi arabia immigration consultant', 'Navigator Immigration Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/geo/gcc/saudi-arabia`,
  },
  openGraph: {
    title: 'Immigration Consultants in Saudi Arabia | Navigator Immigration Dubai',
    description: 'Expert study abroad and visa guidance for students from Saudi Arabia. Trusted immigration consultant in Dubai.',
    url: `${siteUrl}/immigration/geo/gcc/saudi-arabia`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function SaudiArabiaPage() {
  return (
    <GeoPage
      name="Saudi Arabia"
      region="gcc"
      description="Navigator Immigration Consultant is a trusted immigration consultant in Saudi Arabia, a country with a rapidly growing international student population and strong government scholarship programs supporting study abroad in Canada, UK, USA, and Australia."
      overview="Navigator Immigration Consultant is a trusted immigration consultant in Saudi Arabia, guiding students through scholarship-funded overseas education. Saudi Arabia has made international education a strategic priority, with the Custodian of the Two Holy Mosques Scholarship Program and other government initiatives sending thousands of Saudi students to top universities worldwide. The King Abdullah Scholarship Program has been instrumental in creating a generation of Saudi graduates from leading international institutions. Students from Saudi Arabia typically pursue degrees in medicine, engineering, computer science, and business administration. The country's Vision 2030 initiative has further emphasized international education as a key driver of economic diversification and knowledge transfer, creating unprecedented opportunities for Saudi students abroad."
      benefits={[
        'The Custodian of the Two Holy Mosques Scholarship Program provides full funding for tuition, living expenses, and health insurance for eligible Saudi students at top international universities.',
        "Saudi Arabia's Vision 2030 initiative strongly supports international education as a pathway for economic diversification and skills development.",
        'English-language programs are widely available at Saudi universities, preparing students for the academic language demands of overseas study.',
        'Saudi cultural missions in major study destinations (Canada, UK, USA, Australia) provide comprehensive support services for Saudi students abroad.',
        'Graduates of international programs are highly valued in Saudi Arabia\'s growing private sector and government organizations.',
      ]}
      scholarships={[
        'The Custodian of the Two Holy Mosques Scholarship Program — Saudi Arabia\'s flagship scholarship providing full tuition, monthly stipend, health insurance, and annual airfare for students at top international universities.',
        'Saudi Aramco and other major Saudi corporations offer scholarship programs for employees and their children pursuing international education.',
        'The Saudi Cultural Mission in each destination country provides additional financial support services and manages scholarship administration.',
      ]}
      loanInfo="The majority of Saudi students studying abroad are funded through government scholarships, which cover full tuition, living expenses, health insurance, and travel. For self-funded students, Saudi banks including National Commercial Bank, Al Rajhi Bank, and Riyad Bank offer education financing options. Saudi students typically provide sponsor letters from their employer or government entity as financial evidence for visa applications. The strong government backing makes financial documentation straightforward for Saudi applicants."
      faqs={[
        { q: 'What is the Custodian of the Two Holy Mosques Scholarship?', a: "It is Saudi Arabia's flagship international scholarship program providing full funding for Saudi students at top-ranked universities worldwide. It covers tuition, monthly stipend, health insurance, and airfare." },
        { q: 'Which countries do Saudi students prefer?', a: 'The USA, United Kingdom, Canada, and Australia are the most popular destinations. Malaysia is also a significant destination for Saudi students seeking quality education at lower costs.' },
        { q: 'What programs do Saudi students typically pursue?', a: 'Medicine, engineering, computer science, business administration, and data science are popular choices. Saudi students increasingly pursue specialized master\'s and PhD programs aligned with Vision 2030 priorities.' },
      ]}
    />
  )
}
