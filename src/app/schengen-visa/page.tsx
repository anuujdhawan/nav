import type { Metadata } from 'next';

import LandingPageTemplate from '@/components/seo/LandingPageTemplate';
import {
  buildPageMetadata,
  landingPages,
} from '@/lib/marketingSeo';

export const metadata: Metadata = buildPageMetadata(landingPages.schengenVisa);

export default function SchengenVisaPage() {
  return <LandingPageTemplate page={landingPages.schengenVisa} />;
}
