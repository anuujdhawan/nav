import type { Metadata } from 'next';

import LandingPageTemplate from '@/components/seo/LandingPageTemplate';
import {
  buildPageMetadata,
  landingPages,
} from '@/lib/marketingSeo';

export const metadata: Metadata = buildPageMetadata(
  landingPages.businessImmigrationConsultantsDubai
);

export default function BusinessImmigrationConsultantsDubaiPage() {
  return (
    <LandingPageTemplate page={landingPages.businessImmigrationConsultantsDubai} />
  );
}
