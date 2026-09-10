import { NextRequest, NextResponse } from 'next/server';

// GET all SEO metadata
export async function GET(request: NextRequest) {
  try {
    // Return mock data for now to avoid build issues
    return NextResponse.json({
      success: true,
      data: [],
      pagination: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 0,
      },
    });
  } catch (error) {
    console.error('Error fetching SEO metadata:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch SEO metadata' },
      { status: 500 }
    );
  }
}

// POST new SEO metadata
export async function POST(request: NextRequest) {
  try {
    return NextResponse.json({
      success: false,
      error: 'Admin functionality temporarily disabled during build',
    });
  } catch (error) {
    console.error('Error creating SEO metadata:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create SEO metadata' },
      { status: 500 }
    );
  }
}
