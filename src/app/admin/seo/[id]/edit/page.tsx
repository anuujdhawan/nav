'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import SeoForm from '@/components/SeoForm';

interface SeoMetadata {
  id: number;
  page: string;
  route: string;
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  robots?: string;
  author?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export default function EditSeoMetadataPage() {
  const params = useParams();
  const [seoData, setSeoData] = useState<SeoMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeoData = async () => {
      try {
        const response = await fetch(`/api/admin/seo/${params.id}`);
        const result = await response.json();

        if (result.success) {
          setSeoData(result.data);
        } else {
          setError(result.error || 'Failed to fetch SEO metadata');
        }
      } catch (error) {
        console.error('Error fetching SEO data:', error);
        setError('Failed to fetch SEO metadata');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchSeoData();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading SEO metadata...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <h3 className="text-lg font-semibold text-red-800">Error</h3>
            <p className="text-red-600">{error}</p>
            <a
              href="/admin"
              className="mt-4 inline-block text-red-600 hover:text-red-800 underline"
            >
              Back to Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit SEO Metadata</h1>
          <p className="text-gray-600 mt-2">Update SEO metadata for {seoData?.page}</p>
        </div>
        {seoData && <SeoForm initialData={seoData} isEdit={true} />}
      </div>
    </div>
  );
}
