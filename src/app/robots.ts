import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/marketingSeo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/_next', '/static', '/editblog', '/createblog'],
      },
    ],
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/sitemap-image`],
    host: siteUrl,
  }
}
