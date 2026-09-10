'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Calendar, ArrowRight, Search, CheckCircle } from 'lucide-react';
import { formatStableDate } from '@/lib/formatting';
import { coreSeoPages } from '@/lib/marketingSeo';
import type { BlogPost } from '@/lib/blogData';
import BlogCardImage from '@/components/blog/BlogCardImage';

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const seoPage = coreSeoPages.blog;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ['All Categories', ...new Set([...posts.map((post) => post.category), 'Other Blogs'])];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All Categories' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <section className="bg-gradient-to-br from-[#777758] to-[#436175]/20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mt-28 text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#436175] mb-6">
              {seoPage.h1}
            </h1>
            <p className="text-xl text-[#585a5e] mb-8">
              {seoPage.answer}
            </p>
            
              <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-light-brown-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175] focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-[#436175] mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category
                          ? 'bg-[#436175] text-white'
                          : 'text-[#585a5e] hover:bg-very-light-beige hover:text-orange-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paginatedPosts.map((post) => (
                  <article key={post.id} className="group bg-white border border-light-brown-grey rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#436175]/10 to-[#585a5e]/10">
                      <BlogCardImage slug={post.slug} title={post.title} />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-brown-grey mb-3">
                        <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatStableDate(post.date)}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-[#436175] mb-3 hover:text-orange-600 transition-colors">
                        <Link href={`/immigration/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-[#585a5e] mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-sm text-[#585a5e]">{post.author}</span>
                        </div>
                        
                        <Link
                          href={`/immigration/blog/${post.slug}`}
                          className="inline-flex items-center text-orange-600 hover:text-gray-600 font-medium text-sm"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex flex-wrap justify-center gap-2" aria-label="Blog pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-white border border-light-brown-grey text-[#585a5e] hover:bg-very-light-beige rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous page"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        currentPage === page
                          ? 'bg-[#436175] text-white'
                          : 'bg-white border border-light-brown-grey text-[#585a5e] hover:bg-very-light-beige'
                      }`}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-white border border-light-brown-grey text-[#585a5e] hover:bg-very-light-beige rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next page"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#436175] to-[#585a5e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get practical immigration guides, checklists, and service updates delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            {subscribed ? (
              <div className="flex items-center justify-center space-x-2 text-white">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-medium">Subscribed successfully!</span>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email) return;
                  setSubscribing(true);
                  try {
                    const controller = new AbortController();
                    const timeout = setTimeout(() => controller.abort(), 30000);
                    await fetch('/api/send-email', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      signal: controller.signal,
                      body: JSON.stringify({
                        to: 'info@navigatorglobals.com',
                        replyTo: email,
                        subject: 'New Blog Newsletter Subscription',
                        html: `<h2>New Newsletter Subscriber</h2><p><strong>Email:</strong> ${email}</p>`,
                      }),
                    });
                    clearTimeout(timeout);
                  } catch (_) {}
                  setSubscribing(false);
                  setSubscribed(true);
                  setEmail('');
                }}
                className="flex flex-col sm:flex-row gap-4 sm:space-x-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5f5dc] text-gray-900 w-full"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="px-6 py-3 bg-[#f5f5dc] text-[#436175] font-semibold rounded-lg hover:bg-white hover:text-[#585a5e] transition-colors disabled:opacity-50"
                >
                  {subscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
