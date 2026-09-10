import Link from 'next/link';

import type { SeoPageConfig } from '@/lib/marketingSeo';

import JsonLd from './JsonLd';
import {
  ComparisonTable,
  ComplianceNotice,
  ContentSections,
  FaqSection,
  LocalSeoBlock,
  RelatedLinksSection,
  TrustSection,
} from './PageSeoSections';
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildSpeakableSchema,
  buildWebPageSchemaWithReview,
} from '@/lib/marketingSeo';

type LandingPageTemplateProps = {
  page: SeoPageConfig;
};

export default function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  const lastReviewed = new Date().toISOString().split('T')[0];
  const breadcrumbSchema = buildBreadcrumbSchema(page.breadcrumbs);
  const faqSchema = buildFaqSchema(page.faqs);
  const serviceSchema = buildServiceSchema(page);
  const webpageSchema = buildWebPageSchemaWithReview(page, lastReviewed);
  const speakableSchema = buildSpeakableSchema('#site-content', absoluteUrl(page.path));

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={webpageSchema} />
      <JsonLd data={speakableSchema} />

      <div className="min-h-screen bg-[#f5f5dc]">
        <section className="bg-gradient-to-br from-[#2c353f] via-[#436175] to-[#585a5e] pt-48 pb-24 lg:pt-36 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f7d7be]">
                Navigator Immigration Consultant Dubai
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">{page.h1}</h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-white/90">{page.answer}</p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#f7d7be] px-8 py-4 font-semibold text-[#223040] transition-colors hover:bg-white"
                >
                  {page.ctaLabel ?? 'Book Consultation'}
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Visit Our Dubai Office
                </Link>
              </div>
            </div>
          </div>
        </section>

        {page.sections?.length ? <ContentSections sections={page.sections} /> : null}
        {page.complianceNote ? <ComplianceNotice note={page.complianceNote} /> : null}
        {page.table ? <ComparisonTable table={page.table} /> : null}
        <FaqSection items={page.faqs} />
        <TrustSection points={page.trustPoints} />
        <RelatedLinksSection links={page.relatedLinks} />
        {page.localBlock ? <LocalSeoBlock text={page.localBlock} /> : null}
      </div>
    </>
  );
}
