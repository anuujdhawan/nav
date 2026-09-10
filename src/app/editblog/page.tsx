import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blogData';
import EditBlogClient from './EditBlogClient';

export const dynamic = "force-dynamic"


export const metadata: Metadata = {
  title: 'Manage Blog Posts - Navigator Immigration',
  description: 'Admin dashboard for managing immigration blog posts.',
  robots: 'noindex, nofollow',
};

export default function EditBlogPage() {
  const posts = getAllBlogPosts();
  return <EditBlogClient posts={posts} />;
}
