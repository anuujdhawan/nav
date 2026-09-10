import { NextRequest, NextResponse } from 'next/server';

// POST bulk operations (create/update/delete)
export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({
      success: false,
      error: 'Admin functionality temporarily disabled during build',
    });
  } catch (error) {
    console.error('Error in bulk SEO operation:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to perform bulk operation' },
      { status: 500 }
    );
  }
}
