import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  // Redirect www to non-www
  if (hostname.startsWith('www.')) {
    const nonWwwUrl = request.nextUrl.clone()
    nonWwwUrl.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(nonWwwUrl, { status: 301 })
  }

  // Redirect HTTP to HTTPS
  if (request.headers.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    const httpsUrl = request.nextUrl.clone()
    httpsUrl.protocol = 'https'
    return NextResponse.redirect(httpsUrl, { status: 301 })
  }

  // Keep internal routes out of search results without returning a soft-200 homepage.
  const userAgent = request.headers.get('user-agent') || ''
  const isBot = /bot|crawl|spider|scrape|curl|wget|python-requests/i.test(userAgent)

  if (isBot && (pathname.startsWith('/api/') || pathname.startsWith('/_next/') || pathname.startsWith('/admin'))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  // Add security headers
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.png|favicon-512.png|apple-touch-icon.png|img/|videos/).*)',
  ],
}
