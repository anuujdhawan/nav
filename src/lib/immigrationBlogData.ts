export type ImmigrationBlogPost = {
  slug: string;
  title: string;
  description: string;
  country: string;
  category: string;
  content: string;
  keywords: string[];
  internalLinks: string[];
  cta: {
    primary: string;
    secondary: string;
  };
};

function isServer(): boolean {
  return typeof globalThis.window === 'undefined';
}

function loadImmigrationBlogs(): ImmigrationBlogPost[] {
  if (!isServer()) return [];
  try {
    const { readFileSync } = require('fs') as typeof import('fs');
    const { join } = require('path') as typeof import('path');
    const raw = readFileSync(join(process.cwd(), 'src', 'data', 'immigrationBlogs.json'), 'utf-8');
    return JSON.parse(raw) as ImmigrationBlogPost[];
  } catch {
    return [];
  }
}

export function getAllImmigrationBlogPosts(): ImmigrationBlogPost[] {
  return loadImmigrationBlogs();
}

export function getImmigrationBlogPost(slug: string): ImmigrationBlogPost | undefined {
  const posts = loadImmigrationBlogs();
  return posts.find((post) => post.slug === slug);
}

export function getImmigrationBlogPostsByCountry(country: string): ImmigrationBlogPost[] {
  const posts = loadImmigrationBlogs();
  return posts.filter((post) => post.country === country);
}

export function getImmigrationBlogPostsByCategory(category: string): ImmigrationBlogPost[] {
  const posts = loadImmigrationBlogs();
  return posts.filter((post) => post.category === category);
}

export function generateImmigrationBlogStaticParams(): { slug: string }[] {
  const posts = loadImmigrationBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}
