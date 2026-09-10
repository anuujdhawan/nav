import type { Metadata } from 'next';

import LandingPageTemplate from '@/components/seo/LandingPageTemplate';
import {
  buildPageMetadata,
  landingPages,
} from '@/lib/marketingSeo';

export const metadata: Metadata = buildPageMetadata(landingPages.europeWorkPermit);

export default function EuropeWorkPermitPage() {
  return <LandingPageTemplate page={landingPages.europeWorkPermit} />;
}
