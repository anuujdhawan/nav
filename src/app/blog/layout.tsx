import { Metadata } from 'next'
import { ReactNode } from 'react'
import JsonLd from '@/components/seo/JsonLd'
import { getAllBlogPosts } from '@/lib/blogData'
import {

  buildBreadcrumbSchema,
  buildPageMetadata,
  buildWebPageSchema,
  coreSeoPages,
} from '@/lib/marketingSeo'

export const dynamic = "force-dynamic"

export const metadata: Metadata = buildPageMetadata(coreSeoPages.blog);

export default function BlogLayout({
  children,
}: {
  children: ReactNode
}) {
  const posts = getAllBlogPosts();
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: coreSeoPages.blog.h1,
    description: coreSeoPages.blog.description,
    url: 'https://navigatorglobals.com/immigration/blog',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://navigatorglobals.com/immigration/blog/${post.slug}`,
        name: post.title,
      })),
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://navigatorglobals.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://navigatorglobals.com/immigration/blog' },
      ],
    },
  };

  return (
    <>
      <JsonLd data={buildWebPageSchema(coreSeoPages.blog)} />
      <JsonLd data={collectionSchema} />
      <JsonLd data={buildBreadcrumbSchema(coreSeoPages.blog.breadcrumbs)} />
      <div className="min-h-screen">{children}</div>
    </>
  )
}
