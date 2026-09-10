import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopBar from "../components/TopBar";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import DeferredChatBot from "../components/DeferredChatBot";
import JsonLd from '@/components/seo/JsonLd';
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildWebsiteSchema,
  defaultOgImage,
  siteName,
  siteUrl,
} from '@/lib/marketingSeo';


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Navigator Immigration Consultant | Immigration Consultants in Dubai',
  description:
    'Navigator Immigration Consultant is a Dubai-based immigration consultancy for Canada PR, Australia PR, student visas, Europe work permits, visit visas, and business immigration.',
  keywords: [
    'immigration consultants in Dubai',
    'visa consultants in Dubai',
    'Canada PR consultants in Dubai',
    'Australia PR consultants in Dubai',
    'student visa consultants in Dubai',
    'Europe work permit consultants in Dubai',
    'business immigration consultants Dubai',
    'Navigator Immigration Consultant',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: 'index, follow',
  openGraph: {
    title: 'Navigator Immigration Consultant | Immigration Consultants in Dubai',
    description:
      'Navigator Immigration Consultant is a Dubai-based immigration consultancy for Canada PR, Australia PR, student visas, Europe work permits, visit visas, and business immigration.',
    url: `${siteUrl}/`,
    siteName,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Navigator Immigration Consultant in Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navigator Immigration Consultant | Immigration Consultants in Dubai',
    description:
      'Navigator Immigration Consultant offers Canada PR, Australia PR, student visas, Europe work permits, visit visas, and business immigration guidance from Dubai.',
    images: [defaultOgImage],
  },
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      'en': `${siteUrl}/`,
      'x-default': `${siteUrl}/`,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
      { url: '/favicon.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-512.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'ftVAc0-q66Z6wB89bjjXrTLXJ1hFI9OfPQAnpDT5im0',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#436175" />

        {/* Strip bis_skin_checked attributes — non-blocking */}
        <Script id="bis-skin-remover" strategy="afterInteractive" suppressHydrationWarning>
          {`
            try {
              var bisRemover = new MutationObserver(function() {
                var els = document.querySelectorAll('[bis_skin_checked]');
                for (var i = 0; i < els.length; i++) {
                  els[i].removeAttribute('bis_skin_checked');
                }
              });
              bisRemover.observe(document.documentElement, {attributes: true, subtree: true, attributeFilter: ['bis_skin_checked']});
            } catch(e) {}
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LP61V70NXQ"
          strategy="lazyOnload"
          suppressHydrationWarning
        />
        <Script id="google-analytics" strategy="lazyOnload" suppressHydrationWarning>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LP61V70NXQ');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildLocalBusinessSchema()} />
        <JsonLd data={buildWebsiteSchema()} />
        <TopBar />
        <MainHeader />
        <div id="site-content"  >{children}</div>
        <Footer />
        <DeferredChatBot />
      </body>
    </html>
  );
}
