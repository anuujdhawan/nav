export type BlogSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorBio: string;
  date: string;
  category: string;
  readTime: string;
  answer: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    focusKeyword: string;
    secondaryKeywords: string[];
  };
  seoMeta: {
    intent: 'informational' | 'transactional' | 'navigational';
    funnelStage: 'TOFU' | 'MOFU' | 'BOFU';
    geoTarget: string[];
    pillarTopic: string;
    contentCluster: string;
  };
  content: {
    sections: BlogSection[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  tags: string[];
  relatedContent: {
    primary: string[];
    secondary: string[];
  };
  linkPriority: {
    primaryWeight: number;
    secondaryWeight: number;
  };
  internalLinks: {
    url: string;
    anchor: string;
  }[];
  authorityLinks?: {
    label: string;
    url: string;
  }[];
  conversion: {
    ctaPrimary: string;
    ctaSecondary: string;
    formEnabled: boolean;
  };
  schema: {
    type: 'Article';
    faqEnabled: boolean;
  };
  seoControl: {
    index: boolean;
    follow: boolean;
    canonical: string;
  };
  quality: {
    tone: string;
    readability: string;
    aiGenerated: boolean;
  };
};

function isServer(): boolean {
  return typeof globalThis.window === 'undefined';
}

function loadFromJson(): BlogPost[] {
  if (!isServer()) return [];
  try {
    const { readFileSync } = require('fs') as typeof import('fs');
    const { join } = require('path') as typeof import('path');
    const raw = readFileSync(join(process.cwd(), 'data', 'blogs.json'), 'utf-8');
    return JSON.parse(raw) as BlogPost[];
  } catch (e) {
    return [];
  }
}

function saveToJson(posts: BlogPost[]): void {
  if (!isServer()) return;
  const { writeFileSync } = require('fs') as typeof import('fs');
  const { join } = require('path') as typeof import('path');
  writeFileSync(join(process.cwd(), 'data', 'blogs.json'), JSON.stringify(posts, null, 2), 'utf-8');
}

let _cachedPosts: BlogPost[] | null = null;

function readAllPosts(): BlogPost[] {
  if (_cachedPosts) return _cachedPosts;
  _cachedPosts = loadFromJson();
  return _cachedPosts;
}

export const blogPosts: BlogPost[] = loadFromJson();

export function getBlogPost(id: string): BlogPost | undefined {
  const fresh = loadFromJson();
  if (fresh.length > 0) {
    _cachedPosts = fresh;
    return fresh.find((post) => post.id === id);
  }
  return blogPosts.find((post) => post.id === id);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fresh = loadFromJson();
  if (fresh.length > 0) {
    _cachedPosts = fresh;
    return fresh.find((post) => post.slug === slug);
  }
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  const fresh = loadFromJson();
  if (fresh.length > 0) {
    _cachedPosts = fresh;
    return fresh;
  }
  return blogPosts;
}

export function saveBlogPosts(posts: BlogPost[]): void {
  saveToJson(posts);
  _cachedPosts = posts;
}
