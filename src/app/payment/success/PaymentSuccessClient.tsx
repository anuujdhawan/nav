'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { formatStableDate } from '@/lib/formatting';
import { formatPaymentAmount } from '@/lib/paymentCurrency';

interface SessionData {
  id: string;
  status: string;
  payment_status: string;
  amount_total: number;
  currency: string;
  customer_email: string;
  created: number;
  metadata: Record<string, string>;
}

export default function PaymentSuccessClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) {
        setError('No session ID found');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/checkout-session?session_id=${sessionId}`);
        const data = await response.json();

        if (response.ok) {
          setSessionData(data.session);
          
          // Verify payment was actually successful
          if (data.session.payment_status !== 'paid') {
            setError(`Payment status: ${data.session.payment_status}. Please contact support if this is an error.`);
          }
        } else {
          setError(data.error || 'Failed to verify payment');
        }
      } catch (err) {
        console.error('Error verifying payment:', err);
        setError('Unable to verify payment status');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Verifying Payment...</h2>
          <p className="text-gray-600">Please wait while we confirm your payment status.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100">
              <svg
                className="h-8 w-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Verification Issue
          </h1>

          <p className="text-gray-600 mb-6">
            {error}
          </p>

          <div className="space-y-4">
            <Link
              href="/payment"
              className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Try Payment Again
            </Link>

            <Link
              href="/"
              className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Return to Homepage
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Session ID: {sessionId}</p>
            <p className="mt-1">
              Contact us at{' '}
              <a href="mailto:info@navigatorglobals.com" className="text-blue-600 hover:text-blue-800">
                info@navigatorglobals.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>

        {sessionData && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg text-left">
            <h3 className="font-semibold text-gray-800 mb-2">Payment Details:</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p><strong>Amount:</strong> {formatPaymentAmount(sessionData.amount_total)}</p>
              <p><strong>Email:</strong> {sessionData.customer_email}</p>
              <p><strong>Status:</strong> {sessionData.payment_status}</p>
              <p><strong>Transaction ID:</strong> {sessionData.id}</p>
              <p><strong>Date:</strong> {formatStableDate(sessionData.created * 1000)}</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Return to Homepage
          </Link>

          <Link
            href="/contact"
            className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>For any questions about your payment, contact us at:</p>
          <p className="mt-1">
            <a href="mailto:info@navigatorglobals.com" className="text-blue-600 hover:text-blue-800">
              info@navigatorglobals.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
