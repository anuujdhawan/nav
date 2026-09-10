import { Metadata } from 'next';
import BlogForm from '@/components/blog/BlogForm';

export const metadata: Metadata = {
  title: 'Create Blog Post - Navigator Immigration',
  description: 'Create a new immigration blog post.',
  robots: 'noindex, nofollow',
};

export default function CreateBlogPage() {
  return <BlogForm mode="create" />;
}
