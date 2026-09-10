import { NextRequest, NextResponse } from 'next/server';
import { saveBlogPosts, getAllBlogPosts } from '@/lib/blogData';

const BLOG_CREATE_SECRET = process.env.BLOG_CREATE_SECRET;

export async function DELETE(request: NextRequest) {
  try {
    if (!BLOG_CREATE_SECRET) {
      return NextResponse.json(
        { error: 'Server configuration error: Secret not set' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { secret, postId } = body;

    if (secret !== BLOG_CREATE_SECRET) {
      return NextResponse.json(
        { error: 'Invalid secret code' },
        { status: 401 }
      );
    }

    if (!postId) {
      return NextResponse.json(
        { error: 'Missing required field: postId' },
        { status: 400 }
      );
    }

    const existing = getAllBlogPosts();
    const filtered = existing.filter((p) => p.id !== postId);

    if (filtered.length === existing.length) {
      return NextResponse.json(
        { error: `Blog post not found: ${postId}` },
        { status: 404 }
      );
    }

    saveBlogPosts(filtered);

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
      postId: postId,
    });
  } catch (error) {
    console.error('Blog delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}