import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import HomeContent from '../components/HomeContent';
import { getAllBlogPosts } from '@/lib/blogData';
import type { BlogPost } from '@/lib/blogData';
import {

  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
  buildSpeakableSchema,
  buildWebPageSchemaWithReview,
  coreSeoPages,
} from '@/lib/marketingSeo';

export const dynamic = "force-dynamic"

export const metadata: Metadata = buildPageMetadata(coreSeoPages.home);

export default function Home() {
  const allPosts: BlogPost[] = getAllBlogPosts();
  const latestPosts = [...allPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const serviceSchema = buildServiceSchema(coreSeoPages.home);
  const faqSchema = buildFaqSchema(coreSeoPages.home.faqs);
  const webpageSchema = buildWebPageSchemaWithReview(coreSeoPages.home, '2026-06-10');
  const speakableSchema = buildSpeakableSchema('#site-content', 'https://navigatorglobals.com/');

  return (
    <>
      {serviceSchema ? <JsonLd data={serviceSchema} /> : null}
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <JsonLd data={webpageSchema} />
      <JsonLd data={speakableSchema} />
      <HomeContent latestPosts={latestPosts} />
    </>
  );
}
