import type { Metadata } from 'next';

import LandingPageTemplate from '@/components/seo/LandingPageTemplate';
import {
  buildPageMetadata,
  landingPages,
} from '@/lib/marketingSeo';

export const metadata: Metadata = buildPageMetadata(landingPages.canadaPr);

export default function CanadaPrPage() {
  return <LandingPageTemplate page={landingPages.canadaPr} />;
}
