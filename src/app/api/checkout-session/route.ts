import { NextRequest, NextResponse } from 'next/server';
import { createStripeClient, getStripeSecretKey } from '@/lib/stripe';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    if (!getStripeSecretKey()) {
      return NextResponse.json(
        { error: 'Payment verification is not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const stripe = createStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent'],
    });

    // Log the session retrieval for tracking
    console.log('Session retrieved:', {
      sessionId: session.id,
      status: session.status,
      paymentStatus: session.payment_status,
      amount: session.amount_total,
      customerEmail: session.customer_email,
    });

    return NextResponse.json({
      session: {
        id: session.id,
        status: session.status,
        payment_status: session.payment_status,
        amount_total: session.amount_total,
        currency: session.currency,
        customer_email: session.customer_email,
        created: session.created,
        metadata: session.metadata,
      },
    });
  } catch (error: any) {
    console.error('Error retrieving checkout session:', error);

    if (error?.type === 'StripeInvalidRequestError') {
      return NextResponse.json(
        { error: 'Checkout session not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to retrieve session' },
      { status: 500 }
    );
  }
}
