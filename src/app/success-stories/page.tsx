import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CirclePlay, FileCheck2, ShieldCheck } from 'lucide-react';
import { successStories } from '@/lib/successStories';
import JsonLd from '@/components/seo/JsonLd';
import { buildBreadcrumbSchema, siteUrl } from '@/lib/marketingSeo';

export const metadata: Metadata = {
  title: 'Immigration Consultant Success Stories Dubai | Navigator',
  description:
    'See documented immigration consultant case studies from Dubai, including Australia visas, skilled migration, student visas, and Europe work permits.',
  alternates: { canonical: 'https://navigatorglobals.com/success-stories' },
  openGraph: {
    title: 'Immigration Consultant Success Stories Dubai | Navigator',
    description: 'Documented immigration consultant case studies and client outcomes supported from Dubai.',
    url: 'https://navigatorglobals.com/success-stories',
    type: 'website',
  },
};

export default function SuccessStoriesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Success Stories', path: '/success-stories' },
  ]);
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/success-stories#collection`,
    name: 'Immigration Consultant Success Stories Dubai',
    description: 'Documented immigration consultant case studies and client outcomes supported from Dubai.',
    url: `${siteUrl}/success-stories`,
    isPartOf: { '@id': `${siteUrl}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: successStories.length,
      itemListElement: successStories.map((story, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: story.title,
        url: `${siteUrl}/success-stories#${story.slug}`,
      })),
    },
  };

  return (
    <main className="success-stories-page bg-[#f5f5dc]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />
      <section className="relative overflow-hidden bg-[#2C353F] pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(247,55,24,0.18),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(67,97,117,0.4),transparent_38%)]" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-[#F6B44B]" /> Navigator casebook
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-7xl">
              Immigration Consultant Success Stories <span className="text-[#F6B44B]">in Dubai.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Explore documented client outcomes supported by Navigator Immigration Consultant in Dubai, covering Australia visas, skilled migration, student visas, sponsored pathways, and Europe work permits.
            </p>

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat value="21" label="documented outcomes" />
              <Stat value="9" label="pathway types" />
              <Stat value="3" label="destinations" />
              <Stat value="1" label="video review" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#2C353F]/10 bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#F73718]">How our casebook works</p>
            <h2 className="text-3xl font-semibold text-[#2C353F] sm:text-4xl">What these immigration consultant case studies show</h2>
            <p className="mt-5 text-base leading-8 text-[#585a5e]">
              An immigration consultant helps applicants understand eligibility, organise evidence, and present a complete application for the right visa pathway. These case studies show the type of preparation Navigator supports from Dubai, including skilled migration assessments, employer-sponsored visas, student visa planning, and Europe work-permit documentation.
            </p>
            <p className="mt-4 text-base leading-8 text-[#585a5e]">
              Every outcome is presented in a privacy-conscious format. An invitation, skills assessment, permit, or visa grant represents a different stage of the process, and results depend on each applicant&apos;s profile, documents, destination rules, and decision-maker. Explore the relevant <Link href="/immigration-consultants-dubai" className="font-semibold text-[#436175] underline decoration-[#F73718] underline-offset-4">immigration consultant services in Dubai</Link> or review our <Link href="/about" className="font-semibold text-[#436175] underline decoration-[#F73718] underline-offset-4">team and company background</Link> before booking a consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" id="stories">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#F73718]">Selected outcomes</p>
              <h2 className="text-3xl font-semibold text-[#2C353F] sm:text-4xl">Proof of careful preparation</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#585a5e]">
                Each case is presented as a compact story: the pathway, the outcome, and a public-safe preview of the supporting evidence.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center text-sm font-bold text-[#2C353F] transition hover:text-[#F73718]">
              Start your own case
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {successStories.map((story) => (
              <article
                key={story.slug}
                id={story.slug}
                className={`group scroll-mt-32 overflow-hidden rounded-[1.4rem] border border-[#2C353F]/10 bg-white shadow-[0_18px_45px_rgba(44,53,63,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(44,53,63,0.14)] ${story.video ? 'md:col-span-2 xl:col-span-3 lg:grid lg:grid-cols-[minmax(18rem,28rem)_minmax(0,1fr)]' : 'flex flex-col'}`}
              >
                <div className={`relative overflow-hidden ${story.video ? 'aspect-[9/16] bg-[#0f1720]' : 'h-72 bg-[#eef0ec]'}`}>
                  {story.video ? (
                    <video
                      className="success-story-video absolute inset-0 h-full w-full object-contain"
                      controls
                      playsInline
                      preload="metadata"
                      poster={story.poster}
                      aria-label={`Client video review: ${story.title}`}
                    >
                      <source src={story.video} type="video/webm" />
                      Your browser does not support the video element.
                    </video>
                  ) : (
                    <Image src={story.evidence} alt={story.evidenceAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-contain p-7 transition duration-500 group-hover:scale-[1.02]" />
                  )}
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#2C353F] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">{story.destination}</span>
                    {story.video ? <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F6B44B] px-3 py-1.5 text-xs font-bold text-[#2C353F]"><CirclePlay className="h-3.5 w-3.5" /> Watch</span> : null}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F73718]">{story.category}</span>
                    <span className="text-xs font-semibold text-[#585a5e]/65">{story.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight text-[#2C353F]">{story.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#585a5e]">{story.summary}</p>

                  <div className="mt-6 border-t border-[#2C353F]/10 pt-5">
                    <div className="flex items-start gap-3">
                      {story.video ? <CirclePlay className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#436175]" /> : <FileCheck2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#436175]" />}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#585a5e]/60">Outcome</p>
                        <p className="mt-1 text-sm font-semibold text-[#2C353F]">{story.outcome}</p>
                      </div>
                    </div>
                    <Link href={serviceHref(story.category)} className="mt-4 inline-flex items-center text-sm font-semibold text-[#436175] hover:text-[#F73718]">
                      Explore {serviceLabel(story.category)}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a href={story.video || story.evidence} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center text-sm font-bold text-[#2C353F] transition hover:text-[#F73718]">
                      {story.video ? 'Open client review' : 'View evidence preview'}
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2C353F] py-16 text-white sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#F6B44B]">Your next chapter</p>
              <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">Let’s make your pathway easier to navigate.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">Bring us your profile, your questions, and your destination. We’ll help you understand the next practical step.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#F73718] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#d92d12]">
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4">
    <p className="text-2xl font-semibold text-[#F6B44B] sm:text-3xl">{value}</p>
    <p className="mt-1 text-xs leading-5 text-white/55">{label}</p>
  </div>
);

function serviceHref(category: string) {
  if (category === 'Student visa') return '/student-visa-consultants-dubai';
  if (category === 'Europe work permit') return '/europe-work-permit';
  if (category === 'Visit visa') return '/visit-visa';
  if (category === 'Employer-sponsored visa' || category === 'Permanent visa' || category === 'Skilled migration' || category === 'Skills assessment' || category === 'Visa outcome') return '/australia-pr';
  return '/immigration-consultants-dubai';
}

function serviceLabel(category: string) {
  if (category === 'Student visa') return 'student visa guidance';
  if (category === 'Europe work permit') return 'Europe work permits';
  if (category === 'Visit visa') return 'visit visa guidance';
  if (category === 'Employer-sponsored visa') return 'Australia employer-sponsored visas';
  if (category === 'Permanent visa' || category === 'Skilled migration' || category === 'Skills assessment' || category === 'Visa outcome') return 'Australia PR services';
  return 'immigration consultant services';
}
