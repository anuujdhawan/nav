import { Metadata } from 'next'
import { ReactNode } from 'react'
import { getBlogPostBySlug } from '@/lib/blogData'
import { buildBlogMetadata, buildAuthorPersonSchema, brandLogo, defaultOgImage, siteUrl, siteName } from '@/lib/marketingSeo'
import JsonLd from '@/components/seo/JsonLd'

interface Props {
  children: ReactNode
  params: Promise<{ slug: string }>
}

export default async function ImmigrationBlogLayout({ children, params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  return (
    <div className="min-h-screen">
      {post && (
        <>
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${siteUrl}/immigration/blog/${post.slug}#article`,
            headline: post.title,
            description: post.excerpt,
            author: {
              '@type': 'Person',
              '@id': `${siteUrl}/immigration/blog/${post.slug}#author`,
              name: post.author,
              description: post.authorBio,
              worksFor: {
                '@type': 'Organization',
                name: siteName,
              },
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${siteUrl}/immigration/blog/${post.slug}`,
            },
            publisher: {
              '@type': 'Organization',
              '@id': `${siteUrl}/#organization`,
              name: siteName,
                 logo: {
                 '@type': 'ImageObject',
                 url: `${siteUrl}${brandLogo}`,
               },
            },
            image: {
               '@type': 'ImageObject',
               url: `${siteUrl}${defaultOgImage}`,
               width: 942,
               height: 938,
             },
            wordCount: (post.content?.sections ?? []).reduce((c, s) => c + s.body.split(/\s+/).length + s.heading.split(/\s+/).length + (s.bullets?.reduce((b, bullet) => b + bullet.split(/\s+/).length, 0) ?? 0), 0),
            articleSection: post.category,
            isPartOf: {
              '@id': `${siteUrl}/#website`,
            },
          }} />
          <JsonLd data={buildAuthorPersonSchema(post.author, post.authorBio ?? '', undefined)} />
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Immigration', item: `${siteUrl}/immigration` },
              { '@type': 'ListItem', position: 3, name: 'Blog', item: `${siteUrl}/immigration/blog` },
              { '@type': 'ListItem', position: 4, name: post.title, item: `${siteUrl}/immigration/blog/${post.slug}` },
            ],
          }} />
          {post.faqs.length > 0 && (
            <JsonLd data={{
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }} />
          )}
        </>
      )}
      {children}
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  return buildBlogMetadata(
    post ?? {
      title: `Immigration Guide | ${slug.replace(/-/g, ' ')}`,
      excerpt: 'Read an immigration guide covering visa pathways, document planning, and study abroad options.',
      answer: 'This guide explains a practical immigration topic and links readers to the most relevant service page for consultation.',
      date: new Date().toISOString(),
      tags: ['immigration guide', 'study abroad'],
    },
    `/immigration/blog/${slug}`,
  )
}
