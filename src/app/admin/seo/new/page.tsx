import SeoForm from '@/components/SeoForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add SEO Metadata - Admin',
  description: 'Add new SEO metadata for a page',
  robots: 'noindex, nofollow',
};

export default function NewSeoMetadataPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add SEO Metadata</h1>
          <p className="text-gray-600 mt-2">Create SEO metadata for a new page</p>
        </div>
        <SeoForm />
      </div>
    </div>
  );
}
