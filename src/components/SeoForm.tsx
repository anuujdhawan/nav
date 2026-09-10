'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SeoFormData {
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
}

interface SeoFormProps {
  initialData?: SeoFormData & { id?: number };
  isEdit?: boolean;
}

const defaultFormData: SeoFormData = {
  page: '',
  route: '',
  title: '',
  description: '',
  keywords: '',
  ogTitle: '',
  ogDescription: '',
  ogImage: '',
  twitterTitle: '',
  twitterDescription: '',
  twitterImage: '',
  canonicalUrl: '',
  robots: 'index, follow',
  author: '',
  status: 'active',
};

const SeoForm: React.FC<SeoFormProps> = ({ initialData, isEdit = false }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SeoFormData>(() => initialData ?? defaultFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEdit 
        ? `/api/admin/seo/${initialData?.id}`
        : '/api/admin/seo';
      
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        router.push('/admin');
      } else {
        alert(result.error || 'Failed to save SEO metadata');
      }
    } catch (error) {
      console.error('Error saving SEO metadata:', error);
      alert('Failed to save SEO metadata');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {isEdit ? 'Edit SEO Metadata' : 'Add New SEO Metadata'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Basic Information
              </h3>
              
              <div>
                <label htmlFor="page" className="block text-sm font-medium text-gray-700 mb-1">
                  Page Name *
                </label>
                <input
                  type="text"
                  id="page"
                  name="page"
                  required
                  value={formData.page}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Home Page, About Us"
                />
              </div>

              <div>
                <label htmlFor="route" className="block text-sm font-medium text-gray-700 mb-1">
                  Route *
                </label>
                <input
                  type="text"
                  id="route"
                  name="route"
                  required
                  value={formData.route}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., /, /about, /contact"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  maxLength={255}
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Page title (50-60 characters recommended)"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={3}
                  maxLength={255}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Meta description (150-160 characters recommended)"
                />
              </div>

              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                  Keywords
                </label>
                <textarea
                  id="keywords"
                  name="keywords"
                  rows={2}
                  value={formData.keywords}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Comma-separated keywords"
                />
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Open Graph & Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Open Graph & Social Media
              </h3>

              <div>
                <label htmlFor="ogTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  OG Title
                </label>
                <input
                  type="text"
                  id="ogTitle"
                  name="ogTitle"
                  value={formData.ogTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Open Graph title"
                />
              </div>

              <div>
                <label htmlFor="ogDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  OG Description
                </label>
                <textarea
                  id="ogDescription"
                  name="ogDescription"
                  rows={2}
                  value={formData.ogDescription}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Open Graph description"
                />
              </div>

              <div>
                <label htmlFor="ogImage" className="block text-sm font-medium text-gray-700 mb-1">
                  OG Image
                </label>
                <input
                  type="url"
                  id="ogImage"
                  name="ogImage"
                  value={formData.ogImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label htmlFor="twitterTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter Title
                </label>
                <input
                  type="text"
                  id="twitterTitle"
                  name="twitterTitle"
                  value={formData.twitterTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Twitter card title"
                />
              </div>

              <div>
                <label htmlFor="twitterDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter Description
                </label>
                <textarea
                  id="twitterDescription"
                  name="twitterDescription"
                  rows={2}
                  value={formData.twitterDescription}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Twitter card description"
                />
              </div>

              <div>
                <label htmlFor="twitterImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Twitter Image
                </label>
                <input
                  type="url"
                  id="twitterImage"
                  name="twitterImage"
                  value={formData.twitterImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/twitter-image.jpg"
                />
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
              Advanced Settings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="canonicalUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Canonical URL
                </label>
                <input
                  type="url"
                  id="canonicalUrl"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/canonical-url"
                />
              </div>

              <div>
                <label htmlFor="robots" className="block text-sm font-medium text-gray-700 mb-1">
                  Robots Meta Tag
                </label>
                <select
                  id="robots"
                  name="robots"
                  value={formData.robots}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="index, follow">Index, Follow</option>
                  <option value="index, nofollow">Index, No Follow</option>
                  <option value="noindex, follow">No Index, Follow</option>
                  <option value="noindex, nofollow">No Index, No Follow</option>
                </select>
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Author name"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/admin')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            >
              {loading ? 'Saving...' : isEdit ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeoForm;
