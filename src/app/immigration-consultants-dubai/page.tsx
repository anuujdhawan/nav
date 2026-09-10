import type { Metadata } from 'next';

import LandingPageTemplate from '@/components/seo/LandingPageTemplate';
import {
  buildPageMetadata,
  landingPages,
} from '@/lib/marketingSeo';

export const metadata: Metadata = buildPageMetadata(
  landingPages.immigrationConsultantsDubai
);

export default function ImmigrationConsultantsDubaiPage() {
  return <LandingPageTemplate page={landingPages.immigrationConsultantsDubai} />;
}
