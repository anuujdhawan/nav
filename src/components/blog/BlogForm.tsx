"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { BlogPost, BlogSection } from '@/lib/blogData';

const BLOG_CREATE_SECRET = process.env.BLOG_CREATE_SECRET || '';

const KNOWN_CATEGORIES = [
  'Canada Immigration',
  'Australia Immigration',
  'UK Immigration',
  'USA Immigration',
  'Europe Work',
  'Europe Study',
  'Student Visas',
  'Visit Visas',
  'Country Comparison',
  'Other Blogs',
];

const INTENT_OPTIONS = ['informational', 'transactional', 'navigational'] as const;
const FUNNEL_OPTIONS = ['TOFU', 'MOFU', 'BOFU'] as const;

const emptySection: BlogSection = { heading: '', body: '', bullets: [] };
const emptyFaq = { question: '', answer: '' };
const emptyInternalLink = { url: '', anchor: '' };

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function cloneDeep<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

function getDefaultFormData(initialData?: BlogPost): BlogPost {
  if (initialData) return cloneDeep(initialData);
  return {
    id: '',
    slug: '',
    title: '',
    excerpt: '',
    author: '',
    authorBio: '',
    date: new Date().toISOString().split('T')[0],
    category: '',
    readTime: '',
    answer: '',
    seo: {
      metaTitle: '',
      metaDescription: '',
      focusKeyword: '',
      secondaryKeywords: [],
    },
    seoMeta: {
      intent: 'informational',
      funnelStage: 'TOFU',
      geoTarget: [],
      pillarTopic: '',
      contentCluster: '',
    },
    content: {
      sections: [{ ...emptySection }],
    },
    faqs: [],
    tags: [],
    relatedContent: {
      primary: [],
      secondary: [],
    },
    linkPriority: {
      primaryWeight: 1,
      secondaryWeight: 0.5,
    },
    internalLinks: [],
    conversion: {
      ctaPrimary: '',
      ctaSecondary: '',
      formEnabled: true,
    },
    schema: {
      type: 'Article',
      faqEnabled: true,
    },
    seoControl: {
      index: true,
      follow: true,
      canonical: '',
    },
    quality: {
      tone: 'professional',
      readability: 'medium',
      aiGenerated: false,
    },
  };
}

interface BlogFormProps {
  mode: 'create' | 'edit';
  initialData?: BlogPost;
  onSuccess?: () => void;
}

export default function BlogForm({ mode, initialData, onSuccess }: BlogFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<BlogPost>(() => getDefaultFormData(initialData));
  const [secretCode, setSecretCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showSeo, setShowSeo] = useState(false);
  const [showSeoMeta, setShowSeoMeta] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateField = <K extends keyof BlogPost>(key: K, value: BlogPost[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    if (error) setError('');
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      ...(mode === 'create' ? { slug: generateSlug(title) } : {}),
    }));
    if (error) setError('');
  };

  const handleSectionChange = (index: number, field: keyof BlogSection, value: string | string[]) => {
    setFormData(prev => {
      const sections = [...prev.content.sections];
      sections[index] = { ...sections[index], [field]: value };
      return { ...prev, content: { ...prev.content, sections } };
    });
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      content: {
        ...prev.content,
        sections: [...prev.content.sections, { ...emptySection }],
      },
    }));
  };

  const removeSection = (index: number) => {
    setFormData(prev => ({
      ...prev,
      content: {
        ...prev.content,
        sections: prev.content.sections.filter((_, i) => i !== index),
      },
    }));
  };

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setFormData(prev => {
      const faqs = [...prev.faqs];
      faqs[index] = { ...faqs[index], [field]: value };
      return { ...prev, faqs };
    });
  };

  const addFaq = () => {
    setFormData(prev => ({ ...prev, faqs: [...prev.faqs, { ...emptyFaq }] }));
  };

  const removeFaq = (index: number) => {
    setFormData(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  const handleInternalLinkChange = (index: number, field: 'url' | 'anchor', value: string) => {
    setFormData(prev => {
      const links = [...prev.internalLinks];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, internalLinks: links };
    });
  };

  const addInternalLink = () => {
    setFormData(prev => ({
      ...prev,
      internalLinks: [...prev.internalLinks, { ...emptyInternalLink }],
    }));
  };

  const removeInternalLink = (index: number) => {
    setFormData(prev => ({
      ...prev,
      internalLinks: prev.internalLinks.filter((_, i) => i !== index),
    }));
  };

  const handleCommaField = (field: 'tags' | 'seo.secondaryKeywords' | 'seoMeta.geoTarget' | 'relatedContent.primary' | 'relatedContent.secondary', value: string) => {
    const arr = value.split(',').map(s => s.trim()).filter(Boolean);
    if (field === 'tags') {
      updateField('tags', arr);
    } else if (field === 'seo.secondaryKeywords') {
      setFormData(prev => ({
        ...prev,
        seo: { ...prev.seo, secondaryKeywords: arr },
      }));
    } else if (field === 'seoMeta.geoTarget') {
      setFormData(prev => ({
        ...prev,
        seoMeta: { ...prev.seoMeta, geoTarget: arr },
      }));
    } else if (field === 'relatedContent.primary') {
      setFormData(prev => ({
        ...prev,
        relatedContent: { ...prev.relatedContent, primary: arr },
      }));
    } else if (field === 'relatedContent.secondary') {
      setFormData(prev => ({
        ...prev,
        relatedContent: { ...prev.relatedContent, secondary: arr },
      }));
    }
  };

  const getCommaString = (arr: string[] | undefined): string => {
    return (arr || []).join(', ');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.excerpt || !formData.answer || !formData.category) {
      setError('Please fill in all required fields (Title, Excerpt, Answer, Category)');
      return;
    }

    if (mode === 'create' && secretCode !== BLOG_CREATE_SECRET) {
      setError('Invalid secret code');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const body: Record<string, unknown> = { ...formData as unknown as Record<string, unknown> };
      if (mode === 'create') {
        body.secret = secretCode;
      } else {
        body.secret = BLOG_CREATE_SECRET;
      }

      const endpoint = mode === 'create' ? '/api/blog/create' : '/api/blog/edit';
      const response = await fetch(endpoint, {
        method: mode === 'create' ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || `Failed to ${mode} blog`);

      setSuccess(true);
      setTimeout(() => {
        if (onSuccess) onSuccess();
        else router.push('/blog');
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : `Failed to ${mode} blog`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5dc] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#436175] mb-8 text-center">
            {mode === 'create' ? 'Create New Blog Post' : `Edit Blog Post: ${formData.title}`}
          </h1>

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Blog {mode === 'create' ? 'created' : 'updated'} successfully! Redirecting...
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Secret Code — only shown in create mode */}
            {mode === 'create' && (
              <div>
                <label className="block text-sm font-medium text-[#436175] mb-2">
                  Secret Code *
                </label>
                <input
                  type="password"
                  value={secretCode}
                  onChange={e => setSecretCode(e.target.value)}
                  required
                  placeholder="Enter your secret code"
                  className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                />
                <p className="text-xs text-gray-500 mt-1">
                  The secret code is configured in the environment variables.
                </p>
              </div>
            )}

            {/* Basic Information */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#436175] mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#436175] mb-1">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={e => handleTitleChange(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#436175] mb-1">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={e => updateField('slug', e.target.value)}
                    placeholder="auto-generated from title"
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#436175] mb-1">Excerpt *</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={e => updateField('excerpt', e.target.value)}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Author *</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={e => updateField('author', e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Author Bio *</label>
                  <textarea
                    value={formData.authorBio}
                    onChange={e => updateField('authorBio', e.target.value)}
                    required
                    rows={3}
                    placeholder="Brief bio (SEO: Person schema)"
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Date *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={e => updateField('date', e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={e => updateField('category', e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  >
                    <option value="">Select a category</option>
                    {KNOWN_CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Read Time *</label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={e => updateField('readTime', e.target.value)}
                    required
                    placeholder="e.g., 5 min read"
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
              </div>
            </div>

            {/* Answer */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#436175] mb-4">Answer (Featured Snippet)</h2>
              <textarea
                value={formData.answer}
                onChange={e => updateField('answer', e.target.value)}
                required
                rows={4}
                placeholder="Brief answer shown in search results — target featured snippet"
                className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
              />
            </div>

            {/* Content Sections */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#436175]">Content Sections</h2>
                <button
                  type="button"
                  onClick={addSection}
                  className="px-4 py-2 bg-[#436175] text-white rounded-lg hover:bg-[#585a5e] transition-colors"
                >
                  Add Section
                </button>
              </div>

              {formData.content.sections.map((section, si) => (
                <div key={si} className="bg-white p-4 rounded-lg border border-light-brown-grey mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-[#436175]">Section {si + 1}</h3>
                    <button type="button" onClick={() => removeSection(si)} className="text-red-600 hover:text-red-800">Remove</button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Heading</label>
                      <input
                        type="text"
                        value={section.heading}
                        onChange={e => handleSectionChange(si, 'heading', e.target.value)}
                        className="w-full px-3 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Body</label>
                      <textarea
                        value={section.body}
                        onChange={e => handleSectionChange(si, 'body', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Bullets (one per line)</label>
                      {(section.bullets || []).map((bullet, bi) => (
                        <div key={bi} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={bullet}
                            onChange={e => {
                              const newBullets = [...(section.bullets || [])];
                              newBullets[bi] = e.target.value;
                              handleSectionChange(si, 'bullets', newBullets);
                            }}
                            className="flex-1 px-3 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newBullets = (section.bullets || []).filter((_, i) => i !== bi);
                              handleSectionChange(si, 'bullets', newBullets);
                            }}
                            className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          const newBullets = [...(section.bullets || []), ''];
                          handleSectionChange(si, 'bullets', newBullets);
                        }}
                        className="px-3 py-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200"
                      >
                        Add Bullet
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#436175]">FAQs</h2>
                <button
                  type="button"
                  onClick={addFaq}
                  className="px-4 py-2 bg-[#436175] text-white rounded-lg hover:bg-[#585a5e] transition-colors"
                >
                  Add FAQ
                </button>
              </div>

              {formData.faqs.map((faq, fi) => (
                <div key={fi} className="bg-white p-4 rounded-lg border border-light-brown-grey mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium text-[#436175]">FAQ {fi + 1}</h3>
                    <button type="button" onClick={() => removeFaq(fi)} className="text-red-600 hover:text-red-800">Remove</button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Question</label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={e => handleFaqChange(fi, 'question', e.target.value)}
                        className="w-full px-3 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Answer</label>
                      <textarea
                        value={faq.answer}
                        onChange={e => handleFaqChange(fi, 'answer', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags & Related Content */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#436175] mb-4">Tags & Related Content</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Tags (comma-separated) *</label>
                  <input
                    type="text"
                    value={getCommaString(formData.tags)}
                    onChange={e => handleCommaField('tags', e.target.value)}
                    placeholder="e.g., Canada PR, Express Entry, Dubai"
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Related Posts — Primary (comma-separated IDs)</label>
                  <input
                    type="text"
                    value={getCommaString(formData.relatedContent.primary)}
                    onChange={e => handleCommaField('relatedContent.primary', e.target.value)}
                    placeholder="e.g., canada-pr-from-dubai, express-entry-vs-pnp"
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#436175] mb-1">Related Posts — Secondary (comma-separated IDs)</label>
                  <input
                    type="text"
                    value={getCommaString(formData.relatedContent.secondary)}
                    onChange={e => handleCommaField('relatedContent.secondary', e.target.value)}
                    placeholder="secondary related post IDs"
                    className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                  />
                </div>
              </div>
            </div>

            {/* SEO Section — collapsible */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <button
                type="button"
                onClick={() => setShowSeo(!showSeo)}
                className="w-full flex justify-between items-center"
              >
                <h2 className="text-xl font-semibold text-[#436175]">SEO Settings</h2>
                <span className="text-[#436175]">{showSeo ? '▲' : '▼'}</span>
              </button>
              {showSeo && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#436175] mb-1">Meta Title</label>
                    <input
                      type="text"
                      value={formData.seo.metaTitle}
                      onChange={e => setFormData(prev => ({ ...prev, seo: { ...prev.seo, metaTitle: e.target.value } }))}
                      className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#436175] mb-1">Meta Description</label>
                    <textarea
                      value={formData.seo.metaDescription}
                      onChange={e => setFormData(prev => ({ ...prev, seo: { ...prev.seo, metaDescription: e.target.value } }))}
                      rows={2}
                      className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#436175] mb-1">Focus Keyword</label>
                    <input
                      type="text"
                      value={formData.seo.focusKeyword}
                      onChange={e => setFormData(prev => ({ ...prev, seo: { ...prev.seo, focusKeyword: e.target.value } }))}
                      className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#436175] mb-1">Secondary Keywords (comma-separated)</label>
                    <input
                      type="text"
                      value={getCommaString(formData.seo.secondaryKeywords)}
                      onChange={e => handleCommaField('seo.secondaryKeywords', e.target.value)}
                      className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* SEO Meta — collapsible */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <button
                type="button"
                onClick={() => setShowSeoMeta(!showSeoMeta)}
                className="w-full flex justify-between items-center"
              >
                <h2 className="text-xl font-semibold text-[#436175]">SEO Meta (Content Strategy)</h2>
                <span className="text-[#436175]">{showSeoMeta ? '▲' : '▼'}</span>
              </button>
              {showSeoMeta && (
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Intent</label>
                      <select
                        value={formData.seoMeta.intent}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          seoMeta: { ...prev.seoMeta, intent: e.target.value as 'informational' | 'transactional' | 'navigational' },
                        }))}
                        className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                      >
                        {INTENT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Funnel Stage</label>
                      <select
                        value={formData.seoMeta.funnelStage}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          seoMeta: { ...prev.seoMeta, funnelStage: e.target.value as 'TOFU' | 'MOFU' | 'BOFU' },
                        }))}
                        className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                      >
                        {FUNNEL_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#436175] mb-1">Geo Target (comma-separated countries/regions)</label>
                    <input
                      type="text"
                      value={getCommaString(formData.seoMeta.geoTarget)}
                      onChange={e => handleCommaField('seoMeta.geoTarget', e.target.value)}
                      placeholder="e.g., India, UAE, Pakistan"
                      className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#436175] mb-1">Pillar Topic</label>
                    <input
                      type="text"
                      value={formData.seoMeta.pillarTopic}
                      onChange={e => setFormData(prev => ({
                        ...prev,
                        seoMeta: { ...prev.seoMeta, pillarTopic: e.target.value },
                      }))}
                      className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#436175] mb-1">Content Cluster</label>
                    <input
                      type="text"
                      value={formData.seoMeta.contentCluster}
                      onChange={e => setFormData(prev => ({
                        ...prev,
                        seoMeta: { ...prev.seoMeta, contentCluster: e.target.value },
                      }))}
                      className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Advanced Settings — collapsible */}
            <div className="bg-gray-50 border border-light-brown-grey rounded-lg p-6">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex justify-between items-center"
              >
                <h2 className="text-xl font-semibold text-[#436175]">Advanced Settings</h2>
                <span className="text-[#436175]">{showAdvanced ? '▲' : '▼'}</span>
              </button>
              {showAdvanced && (
                <div className="mt-4 space-y-6">
                  {/* Link Priority */}
                  <div className="bg-white p-4 rounded-lg border border-light-brown-grey">
                    <h3 className="font-medium text-[#436175] mb-3">Link Priority</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#436175] mb-1">Primary Weight</label>
                        <input
                          type="number"
                          value={formData.linkPriority.primaryWeight}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            linkPriority: { ...prev.linkPriority, primaryWeight: Number(e.target.value) },
                          }))}
                          min={0}
                          max={10}
                          step={0.1}
                          className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#436175] mb-1">Secondary Weight</label>
                        <input
                          type="number"
                          value={formData.linkPriority.secondaryWeight}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            linkPriority: { ...prev.linkPriority, secondaryWeight: Number(e.target.value) },
                          }))}
                          min={0}
                          max={10}
                          step={0.1}
                          className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Internal Links */}
                  <div className="bg-white p-4 rounded-lg border border-light-brown-grey">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-[#436175]">Internal Links</h3>
                      <button
                        type="button"
                        onClick={addInternalLink}
                        className="px-3 py-1 bg-[#436175] text-white rounded hover:bg-[#585a5e] transition-colors text-sm"
                      >
                        Add Link
                      </button>
                    </div>
                    {formData.internalLinks.map((link, li) => (
                      <div key={li} className="flex gap-2 mb-2 items-start">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={link.url}
                            onChange={e => handleInternalLinkChange(li, 'url', e.target.value)}
                            placeholder="/immigration/..."
                            className="w-full px-3 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175] text-sm"
                          />
                        </div>
                        <div className="flex-1">
                          <input
                            type="text"
                            value={link.anchor}
                            onChange={e => handleInternalLinkChange(li, 'anchor', e.target.value)}
                            placeholder="Anchor text"
                            className="w-full px-3 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175] text-sm"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeInternalLink(li)}
                          className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Conversion */}
                  <div className="bg-white p-4 rounded-lg border border-light-brown-grey">
                    <h3 className="font-medium text-[#436175] mb-3">Conversion</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#436175] mb-1">Primary CTA</label>
                        <input
                          type="text"
                          value={formData.conversion.ctaPrimary}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            conversion: { ...prev.conversion, ctaPrimary: e.target.value },
                          }))}
                          placeholder="e.g., Free Eligibility Check"
                          className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#436175] mb-1">Secondary CTA</label>
                        <input
                          type="text"
                          value={formData.conversion.ctaSecondary}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            conversion: { ...prev.conversion, ctaSecondary: e.target.value },
                          }))}
                          placeholder="e.g., WhatsApp Consultation"
                          className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.conversion.formEnabled}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            conversion: { ...prev.conversion, formEnabled: e.target.checked },
                          }))}
                          className="rounded border-light-brown-grey text-[#436175] focus:ring-[#436175]"
                        />
                        <span className="text-sm font-medium text-[#436175]">Enable Conversion Form</span>
                      </label>
                    </div>
                  </div>

                  {/* Schema */}
                  <div className="bg-white p-4 rounded-lg border border-light-brown-grey">
                    <h3 className="font-medium text-[#436175] mb-3">Schema</h3>
                    <label className="flex items-center space-x-2 cursor-pointer mb-2">
                      <input
                        type="checkbox"
                        checked={formData.schema.faqEnabled}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          schema: { ...prev.schema, faqEnabled: e.target.checked },
                        }))}
                        className="rounded border-light-brown-grey text-[#436175] focus:ring-[#436175]"
                      />
                      <span className="text-sm font-medium text-[#436175]">Enable FAQ Schema</span>
                    </label>
                    <p className="text-xs text-gray-500">Type is always &quot;Article&quot;</p>
                  </div>

                  {/* SEO Control */}
                  <div className="bg-white p-4 rounded-lg border border-light-brown-grey">
                    <h3 className="font-medium text-[#436175] mb-3">SEO Control</h3>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.seoControl.index}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            seoControl: { ...prev.seoControl, index: e.target.checked },
                          }))}
                          className="rounded border-light-brown-grey text-[#436175] focus:ring-[#436175]"
                        />
                        <span className="text-sm font-medium text-[#436175]">Index</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.seoControl.follow}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            seoControl: { ...prev.seoControl, follow: e.target.checked },
                          }))}
                          className="rounded border-light-brown-grey text-[#436175] focus:ring-[#436175]"
                        />
                        <span className="text-sm font-medium text-[#436175]">Follow</span>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#436175] mb-1">Canonical URL</label>
                      <input
                        type="text"
                        value={formData.seoControl.canonical}
                        onChange={e => setFormData(prev => ({
                          ...prev,
                          seoControl: { ...prev.seoControl, canonical: e.target.value },
                        }))}
                        placeholder="leave empty for self-referencing"
                        className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                      />
                    </div>
                  </div>

                  {/* Quality */}
                  <div className="bg-white p-4 rounded-lg border border-light-brown-grey">
                    <h3 className="font-medium text-[#436175] mb-3">Quality</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#436175] mb-1">Tone</label>
                        <input
                          type="text"
                          value={formData.quality.tone}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            quality: { ...prev.quality, tone: e.target.value },
                          }))}
                          placeholder="e.g., professional, conversational"
                          className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#436175] mb-1">Readability</label>
                        <input
                          type="text"
                          value={formData.quality.readability}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            quality: { ...prev.quality, readability: e.target.value },
                          }))}
                          placeholder="e.g., easy, medium, advanced"
                          className="w-full px-4 py-2 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                        />
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.quality.aiGenerated}
                          onChange={e => setFormData(prev => ({
                            ...prev,
                            quality: { ...prev.quality, aiGenerated: e.target.checked },
                          }))}
                          className="rounded border-light-brown-grey text-[#436175] focus:ring-[#436175]"
                        />
                        <span className="text-sm font-medium text-[#436175]">AI-Generated</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting
                  ? (mode === 'create' ? 'Creating...' : 'Updating...')
                  : (mode === 'create' ? 'Submit Blog' : 'Update Blog')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
