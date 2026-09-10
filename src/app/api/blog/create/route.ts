import { NextRequest, NextResponse } from 'next/server';
import { saveBlogPosts, getAllBlogPosts, BlogPost } from '@/lib/blogData';

const BLOG_CREATE_SECRET = process.env.BLOG_CREATE_SECRET;

const KNOWN_CATEGORIES = [
  'Canada Immigration',
  'Australia Immigration',
  'UK Immigration',
  'USA Immigration',
  'Europe Work',
  'Europe Study',
  'Student Visas',
  'Visit Visas',
  'Country Comparison',
  'Other Blogs',
];

function generateId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function POST(request: NextRequest) {
  try {
    if (!BLOG_CREATE_SECRET) {
      return NextResponse.json(
        { error: 'Server configuration error: Secret not set' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { secret, ...postData } = body;

    if (secret !== BLOG_CREATE_SECRET) {
      return NextResponse.json(
        { error: 'Invalid secret code' },
        { status: 401 }
      );
    }

    const requiredFields = [
      'title', 'excerpt', 'author', 'authorBio', 'date', 'category', 'readTime',
      'answer', 'content', 'faqs', 'tags', 'relatedContent',
    ];

    for (const field of requiredFields) {
      if (!postData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    if (postData.content && (!postData.content.sections || postData.content.sections.length === 0)) {
      return NextResponse.json(
        { error: 'At least one content section is required' },
        { status: 400 }
      );
    }

    if (!KNOWN_CATEGORIES.includes(postData.category)) {
      return NextResponse.json(
        { error: `Invalid category. Must be one of: ${KNOWN_CATEGORIES.join(', ')}` },
        { status: 400 }
      );
    }

    const newPost: BlogPost = {
      ...postData,
      id: generateId(postData.title as string),
      slug: postData.slug || generateId(postData.title as string),
    } as BlogPost;

    const existing = getAllBlogPosts();
    saveBlogPosts([...existing, newPost]);

    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      post: newPost,
    });
  } catch (error) {
    console.error('Blog creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
