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

export const metadata: Metadata = buildPageMetadata(coreSeoPages.workPermits);

const workPermitSteps = [
  { position: 1, name: 'Eligibility Check', text: 'We assess your eligibility and identify the best Europe work permit option for your profile and career goals.', url: `${siteUrl}/work-permits#overview` },
  { position: 2, name: 'Document Preparation', text: 'Our team helps you gather and prepare all necessary documents including employment proof, qualifications, and passport records.', url: `${siteUrl}/work-permits#requirements` },
  { position: 3, name: 'Application Submission', text: 'We submit your work permit application with all supporting documents to the relevant European immigration authority.', url: `${siteUrl}/work-permits#process` },
  { position: 4, name: 'Application Follow-up', text: 'We track your application progress and keep you informed of any updates or additional requirements.', url: `${siteUrl}/work-permits#process` },
  { position: 5, name: 'Approval & Settlement', text: 'We assist with post-approval requirements including travel arrangements and settlement support in your destination country.', url: `${siteUrl}/work-permits#contact` },
];

export default function WorkPermitsLayout({
  children,
}: {
  children: ReactNode
}) {
  const lastReviewed = new Date().toISOString().split('T')[0];
  const serviceSchema = buildServiceSchema(coreSeoPages.workPermits);
  const faqSchema = buildFaqSchema(coreSeoPages.workPermits.faqs);
  const howToSchema = buildHowToSchema(workPermitSteps, 'Europe Work Permit');
  const videoSchema = buildVideoObjectSchema(
    '/videos/work-visa.mp4',
    'Europe Work Permit Overview - Navigator Immigration',
    'Watch our Europe work permit overview to learn how skilled professionals can work in Germany, Poland, Portugal, and other EU countries with expert guidance.',
    `${siteUrl}/title.jpeg`
  );
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.workPermits, lastReviewed);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/work-permits`);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.workPermits.breadcrumbs)} />
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
