import { brandLogo, siteUrl } from '@/lib/marketingSeo';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <image:image>
      <image:loc>${siteUrl}${brandLogo}</image:loc>
      <image:caption>Navigator Immigration Consultant Logo</image:caption>
      <image:title>Navigator Immigration Consultant</image:title>
    </image:image>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
