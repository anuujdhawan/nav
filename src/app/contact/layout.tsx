import { Metadata } from 'next'
import { ReactNode } from 'react'
import JsonLd from '@/components/seo/JsonLd'
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildSpeakableSchema,
  buildWebPageSchemaWithReview,
  coreSeoPages,
  siteUrl,
} from '@/lib/marketingSeo'

export const metadata: Metadata = buildPageMetadata(coreSeoPages.contact);

export default function ContactLayout({
  children,
}: {
  children: ReactNode
}) {
  const faqSchema = buildFaqSchema(coreSeoPages.contact.faqs);
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.contact, '2026-06-01');
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/contact`);

  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.contact.breadcrumbs)} />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={speakableSchema} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
