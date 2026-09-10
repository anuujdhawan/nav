import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import {
  buildBreadcrumbSchema,
  buildDefinedTermSchema,
  buildPageMetadata,
  buildWebPageSchemaWithReview,
  siteName,
} from '@/lib/marketingSeo';
import { glossaryTerms } from '@/lib/glossaryData';

const glossaryConfig = {
  path: '/glossary' as const,
  title: 'Immigration Glossary | PR, Visa & Immigration Terms Explained | Navigator Immigration',
  description: 'Comprehensive glossary of immigration terms including PR, Express Entry, PNP, ECA, CRS, SOP, COE, NOC, ANZSCO, and more. Expert definitions from Navigator Immigration in Dubai.',
  keywords: [
    'immigration glossary',
    'PR meaning',
    'Express Entry definition',
    'PNP meaning immigration',
    'ECA assessment',
    'CRS score meaning',
    'SOP visa definition',
    'COE student visa',
    'NOC code immigration',
    'immigration terms glossary',
  ],
  h1: 'Immigration Glossary — Key Terms & Definitions',
  answer: 'Your comprehensive guide to immigration terminology. Understand key terms like PR (Permanent Residence), Express Entry, PNP, CRS score, ECA, SOP, and more. Navigator Immigration explains the language of immigration to help you navigate your visa and PR journey.',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Glossary', path: '/glossary' },
  ],
  faqs: [],
  relatedLinks: [],
  trustPoints: [],
  pageType: 'WebPage' as const,
};

export const metadata: Metadata = buildPageMetadata(glossaryConfig);

export default function GlossaryPage() {
  const definedTermSchema = buildDefinedTermSchema(glossaryTerms);
  const breadcrumbSchema = buildBreadcrumbSchema(glossaryConfig.breadcrumbs);
  const webpageSchema = buildWebPageSchemaWithReview(glossaryConfig, '2026-06-15');

  const groupedTerms: Record<string, typeof glossaryTerms> = {};
  glossaryTerms.forEach((term) => {
    const firstLetter = term.name[0].toUpperCase();
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = [];
    }
    groupedTerms[firstLetter].push(term);
  });

  const sortedLetters = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={definedTermSchema} />
      <JsonLd data={webpageSchema} />

      <section className="bg-gradient-to-br from-[#2c353f] via-[#436175] to-[#585a5e] py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f7d7be]">
              {siteName}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">{glossaryConfig.h1}</h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-white/90">{glossaryConfig.answer}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-wrap gap-3">
              {sortedLetters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#f8f4ea] text-sm font-bold text-[#436175] transition-colors hover:bg-[#436175] hover:text-white"
                >
                  {letter}
                </a>
              ))}
            </div>

            {sortedLetters.map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-32">
                <h2 className="mb-6 text-2xl font-bold text-[#436175]">{letter}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {groupedTerms[letter].map((term) => (
                    <article
                      key={term.name}
                      className="rounded-2xl border border-[#436175]/10 bg-[#f8f4ea] p-6 shadow-sm"
                    >
                      <h3 className="mb-3 text-xl font-bold text-[#223040]">{term.name}</h3>
                      <p className="text-[#4b5563]">{term.description}</p>
                      {term.url && (
                        <Link
                          href={term.url}
                          className="mt-3 inline-flex items-center text-sm font-semibold text-[#436175] hover:text-[#585a5e]"
                        >
                          Learn more →
                        </Link>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2c353f] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Need Help with Your Immigration Journey?</h2>
          <p className="mb-8 text-lg text-white/80">
            Our Dubai team can help you understand which visa pathway fits your profile.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-[#f7d7be] px-8 py-4 font-semibold text-[#223040] transition-colors hover:bg-white"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
