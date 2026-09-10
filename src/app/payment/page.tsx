import StripePayment from '@/components/StripePayment';
import StripePaymentDemo from '@/components/StripePaymentDemo';
import { Metadata } from 'next';
import { isStripeCheckoutConfigured } from '@/lib/stripe';
import { brandPhoneDisplay, brandPhoneTel } from '@/lib/contactInfo';

export const metadata: Metadata = {
  title: 'Pay Online - Navigator Immigration',
  description: 'Secure online payment for Navigator Immigration services using Stripe.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'Pay Online - Navigator Immigration',
    description: 'Secure online payment for Navigator Immigration services using Stripe.',
    url: 'https://navigatorglobals.com/payment',
    type: 'website',
  },
};

export default function PaymentPage() {
  const hasStripeCheckout = isStripeCheckoutConfigured();
  const showDemoMode = !hasStripeCheckout && process.env.NODE_ENV !== 'production';

  return (
    <div
      className="min-h-screen bg-gray-50 px-4 pb-12 sm:px-6 lg:px-8"
      style={{
        paddingTop: 'calc(var(--top-bar-height, 44px) + max(var(--main-header-height, 80px), 80px) + 3rem)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Secure Online Payment
          </h1>
          
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Payment Information
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Important Notes:</h3>
              <ul className="list-disc list-inside text-blue-800 space-y-1">
                <li>All payments are processed securely through Stripe</li>
                <li>Your payment information is encrypted and protected</li>
                <li>You will receive a payment confirmation via email</li>
                <li>For payment inquiries, contact us at info@navigatorglobals.com</li>
              </ul>
            </div>
          </div>

          {hasStripeCheckout ? (
            <StripePayment />
          ) : showDemoMode ? (
            <StripePaymentDemo />
          ) : (
            <div className="max-w-md mx-auto rounded-lg border border-red-200 bg-red-50 p-6 text-center">
              <h2 className="text-2xl font-bold text-red-900 mb-3">Payments Temporarily Unavailable</h2>
              <p className="text-sm text-red-800">
                Our online payment service is temporarily unavailable. Please contact us and we will help you complete your payment securely.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Contact us at{' '}
            <a href="mailto:info@navigatorglobals.com" className="text-blue-600 hover:text-blue-800">
              info@navigatorglobals.com
            </a>{' '}
            or call{' '}
            <a href={brandPhoneTel} className="text-blue-600 hover:text-blue-800">
              {brandPhoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
