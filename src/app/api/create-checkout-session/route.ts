import { NextRequest, NextResponse } from 'next/server';
import { createStripeClient, getStripeBaseUrl, getStripeSecretKey } from '@/lib/stripe';
import { paymentCurrencyCode } from '@/lib/paymentCurrency';

export const runtime = 'nodejs';

function parseAmountToMinorUnits(amount: unknown) {
  const numericAmount = typeof amount === 'number' ? amount : parseFloat(String(amount));

  if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    return null;
  }

  return Math.round(numericAmount * 100);
}

export async function POST(request: NextRequest) {
  try {
    const { amount, email, description } = await request.json();
    const stripeSecretKey = getStripeSecretKey();
    const normalizedEmail = typeof email === 'string' ? email.trim() : '';
    const normalizedDescription = typeof description === 'string' ? description.trim() : '';

    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: 'Payment service is not configured. Please contact support.', type: 'config_error' },
        { status: 503 }
      );
    }

    // Enhanced validation with specific error messages
    if (amount === undefined || amount === null || amount === '') {
      return NextResponse.json(
        { error: 'Amount is required', field: 'amount' },
        { status: 400 }
      );
    }

    if (!normalizedEmail) {
      return NextResponse.json(
        { error: 'Email address is required', field: 'email' },
        { status: 400 }
      );
    }

    if (!normalizedDescription) {
      return NextResponse.json(
        { error: 'Payment description is required', field: 'description' },
        { status: 400 }
      );
    }

    // Validate amount
    const amountInMinorUnits = parseAmountToMinorUnits(amount);
    if (!amountInMinorUnits) {
      return NextResponse.json(
        { error: 'Amount must be a positive number', field: 'amount' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address', field: 'email' },
        { status: 400 }
      );
    }

    // Validate description length
    if (normalizedDescription.length < 3) {
      return NextResponse.json(
        { error: 'Description must be at least 3 characters long', field: 'description' },
        { status: 400 }
      );
    }

    if (normalizedDescription.length > 200) {
      return NextResponse.json(
        { error: 'Description must be less than 200 characters', field: 'description' },
        { status: 400 }
      );
    }

    // Log the session creation attempt
    console.log('Creating Stripe checkout session:', {
      amount: amountInMinorUnits,
      email: normalizedEmail,
      description: normalizedDescription,
      timestamp: new Date().toISOString(),
    });

    const stripe = createStripeClient();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: paymentCurrencyCode,
            product_data: {
              name: 'Navigator Immigration Service',
              description: normalizedDescription,
              images: [],
            },
            unit_amount: amountInMinorUnits,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${getStripeBaseUrl()}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getStripeBaseUrl()}/payment/cancel`,
      customer_email: normalizedEmail,
      metadata: {
        description: normalizedDescription,
        source: 'website',
        amount: (amountInMinorUnits / 100).toFixed(2),
      },
    });

    // Log successful session creation
    console.log('Stripe checkout session created successfully:', {
      sessionId: session.id,
      amount: amountInMinorUnits,
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      id: session.id,
      url: session.url,
    });
  } catch (error: any) {
    console.error('Stripe session creation error:', {
      error: error.message,
      type: error.type,
      code: error.code,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    // Return specific error messages based on Stripe error types
    if (error.type === 'StripeCardError') {
      return NextResponse.json(
        { error: 'Card information is invalid. Please check your details and try again.', type: 'card_error' },
        { status: 400 }
      );
    }

    if (error.type === 'StripeRateLimitError') {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.', type: 'rate_limit' },
        { status: 429 }
      );
    }

    if (error.type === 'StripeInvalidRequestError') {
      return NextResponse.json(
        { error: 'Invalid payment request. Please check your information and try again.', type: 'invalid_request' },
        { status: 400 }
      );
    }

    if (error.type === 'StripeAPIError') {
      return NextResponse.json(
        { error: 'Payment service is temporarily unavailable. Please try again later.', type: 'api_error' },
        { status: 503 }
      );
    }

    if (error.type === 'StripeConnectionError') {
      return NextResponse.json(
        { error: 'Unable to connect to payment service. Please check your connection and try again.', type: 'connection_error' },
        { status: 503 }
      );
    }

    if (error.type === 'StripeAuthenticationError') {
      return NextResponse.json(
        { error: 'Payment service configuration error. Please contact support.', type: 'auth_error' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Payment processing failed. Please try again or contact support if the problem persists.', type: 'unknown_error' },
      { status: 500 }
    );
  }
}
