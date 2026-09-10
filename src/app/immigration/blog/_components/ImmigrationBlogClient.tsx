'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Calendar, ArrowRight, Search } from 'lucide-react'
import { formatStableDate } from '@/lib/formatting'
import type { BlogPost } from '@/lib/blogData'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export default function ImmigrationBlogClient({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 9

  const ivPosts = posts.filter(p => p.category !== 'Other Blogs')
  const categories = ['All', ...new Set(ivPosts.map(p => p.category))]

  const filtered = ivPosts.filter(p => {
    const q = searchQuery.toLowerCase()
    const matchesSearch = p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filtered.length / postsPerPage)
  const paginated = filtered.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading="All Immigration & Study Abroad Guides"
        description="Browse our complete library of study abroad and immigration guides covering Canada, UK, Australia, USA, and Europe."
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'Immigration Hub', href: '/immigration' }}
        showScrollIndicator={false}
      />
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchQuery}
                  onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1) }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
                />
              </div>
              <select
                value={activeCategory}
                onChange={e => { setActiveCategory(e.target.value); setCurrentPage(1) }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#436175]"
              >
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map(p => (
                <Link key={p.slug} href={`/immigration/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <BlogCardImage slug={p.slug} title={p.title} />
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-[#436175]/10 text-[#436175] text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#436175] group-hover:text-blue-600 mb-2 line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-2">{p.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-700">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatStableDate(p.date)}</span>
                      <span>{p.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-gray-500 py-12">No guides found matching your search.</p>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${page === currentPage ? 'bg-[#436175] text-white' : 'bg-white text-[#436175] hover:bg-gray-100'}`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <Link href="/immigration" className="inline-flex items-center text-[#436175] font-medium hover:text-blue-600">
                Back to Immigration Hub <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
