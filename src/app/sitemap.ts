import type { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blogData'
import { siteUrl } from '@/lib/marketingSeo'

export const dynamic = 'force-dynamic'

const staticRoutes: Array<[string, MetadataRoute.Sitemap[number]['changeFrequency'], number]> = [
  ['/', 'daily', 1],
  ['/success-stories', 'weekly', 0.9],
  ['/about', 'monthly', 0.8],
  ['/contact', 'monthly', 0.8],
  ['/skilled', 'monthly', 0.9],
  ['/visit-visa', 'monthly', 0.9],
  ['/student-visa', 'monthly', 0.9],
  ['/business-immigration', 'monthly', 0.9],
  ['/work-permits', 'monthly', 0.9],
  ['/study-visit', 'monthly', 0.8],
  ['/immigration-consultants-dubai', 'weekly', 0.95],
  ['/canada-pr', 'weekly', 0.92],
  ['/australia-pr', 'weekly', 0.92],
  ['/europe-work-permit', 'weekly', 0.91],
  ['/student-visa-consultants-dubai', 'weekly', 0.91],
  ['/schengen-visa', 'weekly', 0.9],
  ['/business-immigration-consultants-dubai', 'weekly', 0.9],
  ['/privacy-policy', 'yearly', 0.3],
  ['/terms-of-service', 'yearly', 0.3],
  ['/glossary', 'monthly', 0.7],
  ['/immigration', 'weekly', 0.95],
  ['/immigration/blog', 'weekly', 0.9],
  ['/immigration/canada-study-visa', 'weekly', 0.92],
  ['/immigration/uk-study-visa', 'weekly', 0.92],
  ['/immigration/australia-study-visa', 'weekly', 0.92],
  ['/immigration/study-abroad-consultant', 'weekly', 0.95],
  ['/immigration/geo/india', 'monthly', 0.75],
  ['/immigration/geo/india/kerala', 'monthly', 0.7],
  ['/immigration/geo/india/punjab', 'monthly', 0.7],
  ['/immigration/geo/india/tamil-nadu', 'monthly', 0.7],
  ['/immigration/geo/india/gujarat', 'monthly', 0.7],
  ['/immigration/geo/india/haryana', 'monthly', 0.7],
  ['/immigration/geo/india/uttar-pradesh', 'monthly', 0.7],
  ['/immigration/geo/gcc/uae', 'monthly', 0.75],
  ['/immigration/geo/gcc/saudi-arabia', 'monthly', 0.75],
  ['/immigration/geo/gcc/qatar', 'monthly', 0.7],
  ['/immigration/geo/gcc/kuwait', 'monthly', 0.7],
  ['/immigration/geo/gcc/oman', 'monthly', 0.7],
  ['/immigration/geo/gcc/bahrain', 'monthly', 0.7],
  ['/immigration/geo/south-asia/pakistan', 'monthly', 0.7],
  ['/immigration/geo/south-asia/bangladesh', 'monthly', 0.7],
  ['/immigration/geo/south-asia/nepal', 'monthly', 0.7],
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map(([path, changeFrequency, priority]) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }))

  const blogPages = getAllBlogPosts().map((post) => ({
    url: `${siteUrl}/immigration/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...blogPages]
}
