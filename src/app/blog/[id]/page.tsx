import { notFound, redirect } from 'next/navigation';
import { getBlogPost } from '@/lib/blogData';

export default async function LegacyBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    notFound();
  }

  redirect(`/immigration/blog/${post.slug}`);
}
