'use client';

import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { brandPhoneDisplay, brandPhoneTel } from '@/lib/contactInfo';

const CitizenshipEnquiryForm = dynamic(
  () =>
    import('../../components/CitizenshipEnquiryForm.js').then(
      (mod) => mod.default as unknown as ComponentType
    ),
  {
    ssr: false,
  }
);

export default function LazyEnquiryForm() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return <CitizenshipEnquiryForm />;
  }

  return (
    <div className="relative z-20 mx-auto w-full max-w-sm rounded-2xl bg-[#e5e7eb] p-4 shadow-2xl">
      <div className="bg-gradient-to-r from-dark-blue-grey to-muted-brown-grey text-very-light-beige p-6 rounded-t-2xl -m-4 mb-6">
        <h2 className="text-center text-xl font-bold">Instant Enquiry</h2>
        <p className="text-sm text-center mt-1 opacity-90">Fastest way to start your case</p>
      </div>

      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-dark-blue-grey">
          Open the full enquiry form when you are ready.
        </p>

        <div className="grid gap-3">
          <a
            href={brandPhoneTel}
            className="inline-flex items-center justify-center rounded-lg border border-[#585a5e] bg-white px-4 py-3 text-sm font-semibold text-dark-blue-grey transition-colors hover:bg-gray-50"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call {brandPhoneDisplay}
          </a>

          <a
            href="mailto:info@navigatorglobals.com"
            className="inline-flex items-center justify-center rounded-lg border border-[#585a5e] bg-white px-4 py-3 text-sm font-semibold text-dark-blue-grey transition-colors hover:bg-gray-50"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email our team
          </a>

          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#436175] to-[#585a5e] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#585a5e] hover:to-[#436175]"
          >
            Open Full Enquiry Form
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
