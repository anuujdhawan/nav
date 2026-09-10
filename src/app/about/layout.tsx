import { Metadata } from 'next'
import { ReactNode } from 'react'
import JsonLd from '@/components/seo/JsonLd'
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  buildSpeakableSchema,
  buildWebPageSchema,
  coreSeoPages,
  siteUrl,
} from '@/lib/marketingSeo'

export const metadata: Metadata = buildPageMetadata(coreSeoPages.about);

export default function AboutLayout({
  children,
}: {
  children: ReactNode
}) {
  const faqSchema = buildFaqSchema(coreSeoPages.about.faqs);
  const serviceSchema = buildServiceSchema(coreSeoPages.about);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/about`);

  return (
    <>
      <JsonLd data={buildWebPageSchema(coreSeoPages.about)} />
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.about.breadcrumbs)} />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={speakableSchema} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
