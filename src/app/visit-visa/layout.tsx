import { Metadata } from 'next'
import { ReactNode } from 'react'
import JsonLd from '@/components/seo/JsonLd'
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildHowToSchema,
  buildPageMetadata,
  buildServiceSchema,
  buildSpeakableSchema,
  buildVideoObjectSchema,
  buildWebPageSchemaWithReview,
  coreSeoPages,
  siteUrl,
} from '@/lib/marketingSeo'

export const metadata: Metadata = buildPageMetadata(coreSeoPages.visitVisa);

const visitSteps = [
  { position: 1, name: 'Eligibility Check', text: 'We assess your travel purpose and eligibility for the visitor visa category that matches your needs.', url: `${siteUrl}/visit-visa#overview` },
  { position: 2, name: 'Document Preparation', text: 'Our team helps you gather and prepare all necessary documents including passport, itinerary, proof of funds, and travel insurance.', url: `${siteUrl}/visit-visa#requirements` },
  { position: 3, name: 'Application Submission', text: 'We submit your visitor visa application with all supporting documents to the relevant embassy or consulate.', url: `${siteUrl}/visit-visa#process` },
  { position: 4, name: 'Application Follow-up', text: 'We track your application progress and keep you informed of any updates or additional requirements.', url: `${siteUrl}/visit-visa#process` },
  { position: 5, name: 'Visa Approval & Travel', text: 'We assist with travel arrangements and pre-departure guidance once your visa is approved.', url: `${siteUrl}/visit-visa#contact` },
];

export default function VisitVisaLayout({
  children,
}: {
  children: ReactNode
}) {
  const lastReviewed = new Date().toISOString().split('T')[0];
  const serviceSchema = buildServiceSchema(coreSeoPages.visitVisa);
  const faqSchema = buildFaqSchema(coreSeoPages.visitVisa.faqs);
  const howToSchema = buildHowToSchema(visitSteps, 'Visit Visa');
  const videoSchema = buildVideoObjectSchema(
    '/videos/visit-visa.mp4',
    'Visit Visa Program Overview - Navigator Immigration',
    'Watch our visit visa program overview to learn how to apply for tourist visas, family visit visas, and Schengen visas from Dubai with expert document support.',
    `${siteUrl}/title.jpeg`
  );
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.visitVisa, lastReviewed);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/visit-visa`);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.visitVisa.breadcrumbs)} />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={howToSchema} />
      <JsonLd data={videoSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={speakableSchema} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
