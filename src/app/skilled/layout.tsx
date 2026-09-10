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
  buildWebPageSchemaWithReview,
  coreSeoPages,
  siteUrl,
} from '@/lib/marketingSeo'

export const metadata: Metadata = buildPageMetadata(coreSeoPages.skilled);

const skilledSteps = [
  { position: 1, name: 'Eligibility Check', text: 'Evaluate your profile and calculate CRS or points score for Canada PR or Australia PR pathways.', url: `${siteUrl}/skilled#canada-overview` },
  { position: 2, name: 'Document Preparation', text: 'Gather and prepare all required documents including language test results, educational assessments, and work experience proofs.', url: `${siteUrl}/skilled#requirements` },
  { position: 3, name: 'Application Submission', text: 'Submit your Express Entry profile or Expression of Interest (EOI) to the immigration authorities.', url: `${siteUrl}/skilled#process` },
  { position: 4, name: 'Medical & Security Checks', text: 'Complete medical examinations and police clearance certificates as required by the immigration authorities.', url: `${siteUrl}/skilled#requirements` },
  { position: 5, name: 'Visa Approval & Settlement', text: 'Receive your permanent resident visa and prepare for settlement with pre-departure guidance.', url: `${siteUrl}/skilled#process` },
];

export default function SkilledLayout({
  children,
}: {
  children: ReactNode
}) {
  const lastReviewed = new Date().toISOString().split('T')[0];
  const serviceSchema = buildServiceSchema(coreSeoPages.skilled);
  const faqSchema = buildFaqSchema(coreSeoPages.skilled.faqs);
  const howToSchema = buildHowToSchema(skilledSteps, 'Skilled Immigration (Canada PR & Australia PR)');
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.skilled, lastReviewed);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/skilled`);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.skilled.breadcrumbs)} />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={howToSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={speakableSchema} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
