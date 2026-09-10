import type { Metadata } from 'next';

import LandingPageTemplate from '@/components/seo/LandingPageTemplate';
import {
  buildPageMetadata,
  landingPages,
} from '@/lib/marketingSeo';

export const metadata: Metadata = buildPageMetadata(
  landingPages.studentVisaConsultantsDubai
);

export default function StudentVisaConsultantsDubaiPage() {
  return <LandingPageTemplate page={landingPages.studentVisaConsultantsDubai} />;
}
