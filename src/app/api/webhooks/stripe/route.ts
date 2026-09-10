import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createStripeClient, getStripeSecretKey, getStripeWebhookSecret } from '@/lib/stripe';

export const runtime = 'nodejs';

// Payment event logger
const logPaymentEvent = (event: Stripe.Event, status: string, details?: any) => {
  const log = {
    timestamp: new Date().toISOString(),
    eventType: event.type,
    eventId: event.id,
    status,
    details: details || {},
    session: event.data.object as Stripe.Checkout.Session,
  };
  
  console.log('Stripe Webhook Event:', JSON.stringify(log, null, 2));
  
  // In production, you'd want to store this in a database
  // For now, we'll just log it
};

export async function GET() {
  return NextResponse.json({ status: 'ok', message: 'Stripe webhook endpoint is alive.' });
}

export async function POST(request: NextRequest) {
  try {
    if (!getStripeSecretKey()) {
      console.error('Missing STRIPE_SECRET_KEY environment variable.');
      return NextResponse.json(
        { error: 'Stripe secret key is not configured.' },
        { status: 500 }
      );
    }

    const webhookSecret = getStripeWebhookSecret();

    if (!webhookSecret) {
      console.error('Missing STRIPE_WEBHOOK_SECRET environment variable.');
      return NextResponse.json(
        { error: 'Stripe webhook secret is not configured.' },
        { status: 500 }
      );
    }

    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      console.error('Missing stripe-signature header.');
      return NextResponse.json(
        { error: 'Missing Stripe signature header.' },
        { status: 400 }
      );
    }

    let event: Stripe.Event;

    // Verify webhook signature
    try {
      const stripe = createStripeClient();
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        logPaymentEvent(event, 'completed', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          amount: session.amount_total,
          currency: session.currency,
          paymentStatus: session.payment_status,
        });

        // Here you would typically:
        // 1. Update your database with the payment status
        // 2. Send confirmation emails
        // 3. Update user account status
        // 4. Fulfill the service/product

        console.log(`Payment completed for session ${session.id}`);
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        
        logPaymentEvent(event, 'expired', {
          sessionId: session.id,
          customerEmail: session.customer_email,
        });

        console.log(`Payment session expired: ${session.id}`);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        logPaymentEvent(event, 'failed', {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          lastPaymentError: paymentIntent.last_payment_error,
        });

        console.log(`Payment failed: ${paymentIntent.id}`);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        logPaymentEvent(event, 'succeeded', {
          paymentIntentId: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
        });

        console.log(`Payment succeeded: ${paymentIntent.id}`);
        break;
      }

      default: {
        console.log(`Unhandled event type: ${event.type}`);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
