import { Metadata } from 'next'
import { ReactNode } from 'react'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import JsonLd from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Immigration & Study Abroad Resources | Navigator Immigration Consultant',
  description: 'Expert guides on study abroad, student visas, and immigration pathways to Canada, UK, Australia, USA, and Europe. Free eligibility check from Navigator Immigration in Dubai.',
  keywords: ['study abroad Dubai', 'student visa resources', 'immigration guides', 'study in Canada from Dubai', 'study in UK from UAE', 'overseas education consultants Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration`,
  },
  openGraph: {
    title: 'Immigration & Study Abroad Resources',
    description: 'Expert guides on study abroad, student visas, and immigration pathways from Navigator Immigration in Dubai.',
    url: `${siteUrl}/immigration`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function ImmigrationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/immigration#collection`,
        name: 'Immigration & Study Abroad Resources',
        description: 'Expert guides on study abroad, student visas, and immigration pathways to Canada, UK, Australia, USA, and Europe.',
        publisher: {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: siteName,
        },
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
      }} />
      {children}
    </>
  )
}
