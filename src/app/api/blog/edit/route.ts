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

export async function PUT(request: NextRequest) {
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
      'id', 'title', 'excerpt', 'author', 'authorBio', 'date', 'category', 'readTime',
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

    const existing = getAllBlogPosts();
    const index = existing.findIndex((p) => p.id === postData.id);

    if (index === -1) {
      return NextResponse.json(
        { error: `Blog post not found: ${postData.id}` },
        { status: 404 }
      );
    }

    existing[index] = postData as BlogPost;
    saveBlogPosts(existing);

    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully',
      post: postData,
    });
  } catch (error) {
    console.error('Blog update error:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}
