import type { Metadata } from 'next';

import LandingPageTemplate from '@/components/seo/LandingPageTemplate';
import {
  buildPageMetadata,
  landingPages,
} from '@/lib/marketingSeo';

export const metadata: Metadata = buildPageMetadata(landingPages.australiaPr);

export default function AustraliaPrPage() {
  return <LandingPageTemplate page={landingPages.australiaPr} />;
}
