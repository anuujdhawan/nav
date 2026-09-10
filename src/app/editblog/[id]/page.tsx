import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost } from '@/lib/blogData';
import BlogForm from '@/components/blog/BlogForm';

export const metadata: Metadata = {
  title: 'Edit Blog Post - Navigator Immigration',
  robots: 'noindex, nofollow',
};

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);
  if (!post) notFound();
  return <BlogForm mode="edit" initialData={post} />;
}
