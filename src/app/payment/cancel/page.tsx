import { Metadata } from 'next';
import Link from 'next/link';
import { brandPhoneDisplay, brandPhoneTel } from '@/lib/contactInfo';

export const metadata: Metadata = {
  title: 'Payment Cancelled - Navigator Immigration',
  description: 'Your payment has been cancelled.',
  robots: 'noindex, nofollow',
};

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
            <svg
              className="h-8 w-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-8">
          Your payment has been cancelled. No charges were made to your account. You can try again anytime or contact us for assistance.
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
          <p>Need help with your payment? Contact us at:</p>
          <p className="mt-1">
            <a href="mailto:info@navigatorglobals.com" className="text-blue-600 hover:text-blue-800">
              info@navigatorglobals.com
            </a>
          </p>
          <p className="mt-1">
            <a href={brandPhoneTel} className="text-blue-600 hover:text-blue-800">
              {brandPhoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
