'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, CirclePlay, Quote, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { featuredSuccessStories } from '@/lib/successStories';

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const story = featuredSuccessStories[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredSuccessStories.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActiveIndex((current) => (current + direction + featuredSuccessStories.length) % featuredSuccessStories.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#2C353F] py-20 text-white sm:py-24">
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#F73718]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#436175]/30 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-[#F6B44B]" />
              Client outcomes, carefully presented
            </div>
            <h2 className="mb-6 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Real journeys. <span className="text-[#F6B44B]">Documented outcomes.</span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              A selection of recent visa, skilled migration, and work-permit outcomes supported by Navigator. Every story is shared with sensitive details minimised.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/success-stories"
                className="inline-flex items-center rounded-full bg-[#F73718] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d92d12]"
              >
                Explore all stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <span className="text-sm text-white/45">{successStoriesCountLabel()}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-white/15 bg-[#17212b] shadow-2xl">
              <div className="grid min-h-[26rem] md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[19rem] overflow-hidden bg-[#0f1720] md:min-h-full">
                  <Image
                    key={story.evidence}
                    src={story.poster || story.evidence}
                    alt={story.poster ? `Preview image for ${story.title}` : story.evidenceAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 38vw"
                    className="object-contain p-8 transition-opacity duration-500"
                  />
                  <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                    <span className="rounded-full bg-[#F6B44B] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2C353F]">
                      {story.destination}
                    </span>
                    {story.video ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                        <CirclePlay className="h-3.5 w-3.5" /> Video review
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#F6B44B]">{story.category}</p>
                    <Quote className="mb-5 h-8 w-8 text-white/20" />
                    <h3 className="mb-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">{story.title}</h3>
                    <p className="text-base leading-7 text-white/65">{story.summary}</p>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-white/40">Outcome</p>
                      <p className="mt-1 text-sm font-semibold text-white">{story.outcome}</p>
                    </div>
                    <Link
                      href={`/success-stories#${story.slug}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#F6B44B] hover:text-[#F6B44B]"
                      aria-label={`View ${story.title}`}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2" role="tablist" aria-label="Featured success stories">
                {featuredSuccessStories.map((featuredStory, index) => (
                  <button
                    key={featuredStory.slug}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`Show ${featuredStory.title}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-9 bg-[#F6B44B]' : 'w-2 bg-white/25 hover:bg-white/45'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-white/40 hover:text-white"
                  aria-label="Previous featured success story"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-white/40 hover:text-white"
                  aria-label="Next featured success story"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const successStoriesCountLabel = () => '21 documented outcomes';

export default SuccessStoriesSection;
