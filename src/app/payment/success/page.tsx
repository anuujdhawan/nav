import { Metadata } from 'next';
import { Suspense } from 'react';
import PaymentSuccessClient from './PaymentSuccessClient';

export const metadata: Metadata = {
  title: 'Payment Successful - Navigator Immigration',
  description: 'Your payment has been successfully processed.',
  robots: 'noindex, nofollow',
};

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading payment confirmation...</div>}>
      <PaymentSuccessClient />
    </Suspense>
  );
}
