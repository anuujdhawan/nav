import { NextRequest, NextResponse } from 'next/server';

// GET single SEO metadata
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    return NextResponse.json({
      success: false,
      error: 'Admin functionality temporarily disabled during build',
    });
  } catch (error) {
    console.error('Error fetching SEO metadata:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch SEO metadata' },
      { status: 500 }
    );
  }
}

// PUT update SEO metadata
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    return NextResponse.json({
      success: false,
      error: 'Admin functionality temporarily disabled during build',
    });
  } catch (error) {
    console.error('Error updating SEO metadata:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update SEO metadata' },
      { status: 500 }
    );
  }
}

// DELETE SEO metadata
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    return NextResponse.json({
      success: false,
      error: 'Admin functionality temporarily disabled during build',
    });
  } catch (error) {
    console.error('Error deleting SEO metadata:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete SEO metadata' },
      { status: 500 }
    );
  }
}
