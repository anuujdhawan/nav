import { getAllBlogPosts } from '@/lib/blogData';
import type { BlogPost } from '@/lib/blogData';
import BlogClient from './_components/BlogClient';

export const dynamic = "force-dynamic"


export default function BlogPage() {
  const posts: BlogPost[] = getAllBlogPosts();
  return <BlogClient posts={posts} />;
}
