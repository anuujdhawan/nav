import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Study Visit Programs | Navigator",
  description: "Study visits, short educational travel, language courses, and cultural exchange programs for international students.",
  keywords: [
    "study visit Canada",
    "educational travel",
    "student exchange program",
    "language course abroad",
    "cultural exchange",
    "short-term study program",
    "study tour",
    "educational tourism",
    "student visitor visa",
    "Navigator Immigration"
  ],
  authors: [{ name: "Navigator Immigration" }],
  creator: "Navigator Immigration",
  robots: "index, follow",
  openGraph: {
    title: "Study Visit Programs | Navigator",
    description: "Study visits and educational travel programs for international students, including language and cultural exchange.",
    url: 'https://navigatorglobals.com/study-visit',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/title.jpeg',
        width: 1200,
        height: 630,
        alt: 'Study Visit Programs - Navigator Immigration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Visit Programs | Navigator',
    description: 'Study visits and educational travel programs for international students.',
    images: ['/title.jpeg'],
  },
  alternates: {
    canonical: 'https://navigatorglobals.com/study-visit',
  },
};

export default function StudyVisitLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
