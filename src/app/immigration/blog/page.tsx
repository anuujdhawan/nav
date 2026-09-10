import { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl, siteName } from '@/lib/marketingSeo'
import ImmigrationBlogClient from './_components/ImmigrationBlogClient'

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Immigration Blog | Navigator',
  description: 'Practical study visa, immigration, and study-abroad guides for Canada, the UK, Australia, the USA, and Europe.',
  keywords: ['immigration blog', 'study abroad blog', 'student visa guide', 'immigration consultant Dubai'],
  alternates: {
    canonical: `${siteUrl}/immigration/blog`,
  },
  openGraph: {
    title: 'Immigration Blog | Navigator',
    description: 'Expert articles on study visas, immigration pathways, and studying abroad from Canada, UK, Australia, and beyond.',
    url: `${siteUrl}/immigration/blog`,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
}

export default function ImmigrationBlogPage() {
  const posts = getAllBlogPosts()
  return <ImmigrationBlogClient posts={posts} />
}
