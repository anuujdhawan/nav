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

export const metadata: Metadata = buildPageMetadata(coreSeoPages.studentVisa);

const studentSteps = [
  { position: 1, name: 'Eligibility Check', text: 'We assess your academic profile and identify suitable study programs and destinations.', url: `${siteUrl}/student-visa#overview` },
  { position: 2, name: 'University Application', text: 'We help you apply to universities and secure admission offers from designated learning institutions.', url: `${siteUrl}/student-visa#destinations` },
  { position: 3, name: 'Document Preparation', text: 'Our team assists with all required documents including SOP, proof of funds, academic records, and language test results.', url: `${siteUrl}/student-visa#requirements` },
  { position: 4, name: 'Visa Application', text: 'We submit your student visa application with all supporting documents to the immigration authorities.', url: `${siteUrl}/student-visa#process` },
  { position: 5, name: 'Pre-Departure Support', text: 'We assist with travel arrangements, accommodation planning, and settlement guidance for your new country.', url: `${siteUrl}/student-visa#contact-section` },
];

export default function StudentVisaLayout({
  children,
}: {
  children: ReactNode
}) {
  const lastReviewed = new Date().toISOString().split('T')[0];
  const serviceSchema = buildServiceSchema(coreSeoPages.studentVisa);
  const faqSchema = buildFaqSchema(coreSeoPages.studentVisa.faqs);
  const howToSchema = buildHowToSchema(studentSteps, 'Student Visa');
  const videoSchema = null;
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.studentVisa, lastReviewed);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/student-visa`);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.studentVisa.breadcrumbs)} />
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
