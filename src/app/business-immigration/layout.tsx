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

export const metadata: Metadata = buildPageMetadata(coreSeoPages.businessImmigration);

const businessSteps = [
  { position: 1, name: 'Initial Consultation', text: 'Evaluate your eligibility, investment capacity, and identify the best business immigration or investor visa option.', url: `${siteUrl}/business-immigration#overview` },
  { position: 2, name: 'Business Plan Development', text: 'Develop a comprehensive business plan or investment strategy aligned with the program requirements.', url: `${siteUrl}/business-immigration#investment` },
  { position: 3, name: 'Due Diligence & Documentation', text: 'Complete background checks, source-of-funds verification, and prepare all legal and financial documents.', url: `${siteUrl}/business-immigration#requirements` },
  { position: 4, name: 'Investment Execution', text: 'Make the required investment or business establishment as per the program guidelines.', url: `${siteUrl}/business-immigration#investment` },
  { position: 5, name: 'Application & Approval', text: 'Submit your residency or citizenship application and receive approval with settlement support.', url: `${siteUrl}/business-immigration#process` },
  { position: 6, name: 'Post-Approval Support', text: 'We assist with family inclusion, compliance requirements, and ongoing support after visa approval.', url: `${siteUrl}/business-immigration#contact` },
];

export default function BusinessImmigrationLayout({
  children,
}: {
  children: ReactNode
}) {
  const lastReviewed = new Date().toISOString().split('T')[0];
  const serviceSchema = buildServiceSchema(coreSeoPages.businessImmigration);
  const faqSchema = buildFaqSchema(coreSeoPages.businessImmigration.faqs);
  const howToSchema = buildHowToSchema(businessSteps, 'Business Immigration & Investor Visa');
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.businessImmigration, lastReviewed);
  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/business-immigration`);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema(coreSeoPages.businessImmigration.breadcrumbs)}
      />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={howToSchema} />
      <JsonLd data={webpageSchema} />
      <JsonLd data={speakableSchema} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
