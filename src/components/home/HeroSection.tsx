'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Award, CheckCircle } from 'lucide-react';
import { coreSeoPages } from '@/lib/marketingSeo';
import HeroVideoBackground from './HeroVideoBackground';
import LazyEnquiryForm from './LazyEnquiryForm';
import heroPoster from '../../../public/videoScreenshots/11300218-uhd_3840_2160_24fps.jpg';

const HeroSection = () => {
  const homeSeo = coreSeoPages.home;
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const loadVideo = () => {
    if (shouldLoadVideo) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    setShouldLoadVideo(true);
  };

  const handleMouseEnter = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      loadVideo();
    }
  };

  const handleTouchStart = () => {
    loadVideo();
  };

  return (
    <section
      suppressHydrationWarning
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-40 lg:pt-32"
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
    >
      <Image
        src={heroPoster}
        alt=""
        aria-hidden="true"
        fill
        priority
        quality={70}
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <HeroVideoBackground enabled={shouldLoadVideo} poster={heroPoster.src} />

      <div className="absolute inset-0">
        <div
          className="absolute left-8 top-16 h-72 w-72 rounded-full bg-[#585a5e]/30 blur-3xl animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-6 h-[24rem] w-[24rem] rounded-full bg-[#436175]/35 blur-3xl animate-pulse [animation-delay:700ms]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 xl:w-3/5 text-left">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-md">
              Immigration Consultants in Dubai
            </p>

            <h1 className="hero-heading mb-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:mb-6 lg:text-5xl">
              {homeSeo.h1}
            </h1>

            <p className="hero-subtitle mb-6 max-w-3xl text-base font-normal leading-relaxed text-white/90 sm:text-lg lg:mb-8">
              {homeSeo.answer}
            </p>

            <div className="hero-cta-buttons mb-6 flex flex-col gap-4 sm:flex-row lg:mb-8">
              <div className="transition-transform duration-200 hover:scale-[1.02]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform transition-all duration-300 shadow-xl text-sm lg:text-base"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              </div>
              <div className="transition-transform duration-200 hover:scale-[1.02]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#436175] to-[#585a5e] text-white font-semibold rounded-lg hover:from-[#585a5e] hover:to-[#436175] transform transition-all duration-300 shadow-xl text-sm lg:text-base"
              >
                Check Visa Eligibility
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-white sm:h-5 sm:w-5" />
                <span className="text-xs text-white sm:text-sm">Free Immigration Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 flex-shrink-0 text-white sm:h-5 sm:w-5" />
                <span className="text-xs text-white sm:text-sm">Dubai Office at Sheikh Zayed Road</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 flex-shrink-0 text-white sm:h-5 sm:w-5" />
                <span className="text-xs text-white sm:text-sm">15+ Years Experience</span>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full lg:mt-0 lg:w-1/2 xl:w-2/5">
            <LazyEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
