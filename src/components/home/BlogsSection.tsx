import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatStableDate } from '@/lib/formatting';
import type { BlogPost } from '@/lib/blogData';
import BlogCardImage from '@/components/blog/BlogCardImage';

const BlogsSection = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="py-24 bg-[#f5f5dc]">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-dark-blue-grey mb-6">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-dark-blue-grey/80 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest immigration news, tips, and success stories from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/immigration/blog/${post.slug}`}
              className="block"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#436175]/10 to-[#585a5e]/10">
                  <BlogCardImage slug={post.slug} title={post.title} />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-accent-orange-red text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white px-3 py-1 rounded-full shadow-lg">
                      <span className="text-xs font-bold text-dark-blue-grey">{post.author}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-dark-blue-grey mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-dark-blue-grey/70 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-dark-blue-grey/60">
                    <div className="flex items-center space-x-4">
                      <span>{formatStableDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="flex items-center text-[#436175] font-medium group-hover:text-gray-600 transition-colors duration-200">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
              href="/immigration/blog"
            className="inline-flex items-center justify-center px-8 py-3 border-white text-white font-semibold rounded-xl bg-gradient-to-r from-[#436175] to-[#585a5e] hover:border-[#436175] hover:bg-[#436175] hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
