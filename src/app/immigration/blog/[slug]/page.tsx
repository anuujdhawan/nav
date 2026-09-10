import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Globe, ExternalLink } from 'lucide-react'
import JsonLd from '@/components/seo/JsonLd'
import { FaqSection } from '@/components/seo/PageSeoSections'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blogData'
import { formatStableDate } from '@/lib/formatting'
import { buildSpeakableSchema, coreSeoPages, siteUrl } from '@/lib/marketingSeo'
import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import BlogCardImage from '@/components/blog/BlogCardImage'

export default async function ImmigrationBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const relatedIds = post.relatedContent?.primary ?? []
  const relatedPosts = relatedIds
    .map(id => allPosts.find(p => p.id === id))
    .filter(Boolean) as typeof allPosts

  const speakableSchema = buildSpeakableSchema('#site-content', `${siteUrl}/immigration/blog/${slug}`)

  return (
    <div className="min-h-screen bg-gray-500">
      <ImmigrationHero
        heading={post.title}
        description={post.excerpt}
        primaryCta={{ label: 'Free Eligibility Check', href: '/contact' }}
        secondaryCta={{ label: 'Back to Guides', href: '/immigration/blog' }}
        showScrollIndicator={false}
      />
      <JsonLd data={speakableSchema} />
      <section className="py-16 bg-gray-500 [&_h1]:[color:white] [&_h2]:[color:white] [&_th]:[color:white]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/immigration/blog"
              className="inline-flex items-center text-[#436175] hover:text-gray-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>

            <article>
              <header className="mb-8">
                <div className="flex items-center space-x-4 text-sm text-gray-700 mb-4">
                  <span className="bg-[#436175]/10 text-[#436175] px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatStableDate(post.date)}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-[#436175] mb-6">
                  {post.title}
                </h1>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#436175]">{post.author}</p>
                    <p className="text-sm text-gray-700">Immigration Consultant</p>
                  </div>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <div className="rounded-2xl bg-[#f8f4ea] p-6 text-gray-700 leading-relaxed">
                  <p>{post.answer}</p>
                </div>
                <div className="mt-10 space-y-8 text-gray-700">
                  {(post.content?.sections ?? []).map(section => (
                    <section key={section.heading}>
                      <h2 className="mb-3 text-2xl font-bold text-[#436175]">{section.heading}</h2>
                      <p>{section.body}</p>
                      {section.bullets?.length ? (
                        <ul className="mt-4 space-y-2">
                          {section.bullets.map(bullet => (
                            <li key={bullet}>• {bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              </div>

              <footer className="mt-12 pt-8 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Tags:</span>
                    <div className="flex space-x-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="bg-[#585a5e] text-white px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </footer>

              {post.authorityLinks?.length ? (
                <section className="mt-10 bg-gray-50 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-[#436175] mb-3">Official Sources</h2>
                  <p className="text-sm text-gray-700 mb-4">
                    For accurate and up-to-date rules, always refer to the official government websites below. Navigator
                    Immigration Consultant uses these sources to keep its guidance current.
                  </p>
                  <ul className="space-y-2">
                    {post.authorityLinks.map(link => (
                      <li key={link.url}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#436175] font-medium hover:text-blue-600 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4 shrink-0" />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </article>

            {post.internalLinks?.length ? (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-[#436175] mb-6">Related Resources</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.internalLinks.map(link => (
                    <Link key={link.url} href={link.url} className="flex items-center gap-2 bg-gray-50 rounded-lg p-4 hover:shadow-sm transition-shadow text-[#436175]">
                      <Globe className="w-4 h-4 shrink-0" />
                      <span className="font-medium">{link.anchor}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-[#436175] mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map(p => (
                    <article key={p.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-36 overflow-hidden">
                        <BlogCardImage slug={p.slug} title={p.title} />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-[#436175] mb-2 group-hover:text-blue-600">
                          <Link href={`/immigration/blog/${p.slug}`}>{p.title}</Link>
                        </h3>
                        <p className="text-gray-700">{p.excerpt}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-16">
              <FaqSection items={post.faqs} />
            </div>

            <section className="mt-16 bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#436175] mb-4">Need Help With Your Application?</h2>
              <p className="text-gray-700 mb-6">
                Our Dubai team can help you navigate the visa process, review your documents, and create a personalized study abroad plan.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-[rgb(247,55,24)] text-[rgb(247,55,24)] font-semibold rounded-lg hover:bg-[rgb(247,55,24)] hover:text-white transition-colors"
              >
                Free Eligibility Check
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </section>

            <div className="mt-16">
              <Link href="/immigration" className="inline-flex items-center text-[#436175] font-medium hover:text-blue-600">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Immigration Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
