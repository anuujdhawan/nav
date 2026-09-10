/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  output: 'standalone',
  devIndicators: false,
  transpilePackages: [],
  productionBrowserSourceMaps: false,
  
  // Security Headers
  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Only enforce HTTPS in production
          ...(isDevelopment ? [] : [
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=31536000; includeSubDomains; preload'
            }
          ]),
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://images.unsplash.com https://images.pexels.com https://picsum.photos https://fastly.picsum.photos; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; media-src 'self'; base-uri 'self'; form-action 'self'`
          }
        ]
      },
      // Cache-Control for static assets
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|eot|css|js)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      // Cache-Control for HTML pages
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      }
    ];
  },
  
  // SEO Redirects
  async redirects() {
    return [
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/immigration/blog',
        permanent: true,
      },
      {
        source: '/skilled-migration',
        destination: '/skilled',
        permanent: true,
      },
      {
        source: '/work-visa',
        destination: '/work-permits',
        permanent: true,
      },
      {
        source: '/study-visa',
        destination: '/student-visa',
        permanent: true,
      },
      {
        source: '/tourist-visa',
        destination: '/visit-visa',
        permanent: true,
      },
      {
        source: '/investor-visa',
        destination: '/business-immigration',
        permanent: true,
      },
      {
        source: '/pr-consultants',
        destination: '/skilled',
        permanent: true,
      },
      {
        source: '/immigration-consultants',
        destination: '/immigration-consultants-dubai',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
    ];
  },
  
  // Image Optimization Security
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
        pathname: '/**'
      }
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [70, 75],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Experimental Security Features
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    webpackMemoryOptimizations: true,
  }
};

module.exports = nextConfig;
