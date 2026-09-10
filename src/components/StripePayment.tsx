'use client';

import { useState } from 'react';
import { paymentCurrencyLabel } from '@/lib/paymentCurrency';

const StripePayment = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount), // Send as decimal, API will convert to minor units
          email,
          description,
        }),
      });

      const session = await response.json();

      if (response.ok) {
        if (!session.url) {
          throw new Error('Stripe checkout URL was not returned');
        }

        window.location.href = session.url;
      } else {
        // Handle specific field errors
        if (session.field) {
          setFieldErrors({ [session.field]: session.error });
        } else {
          setError(session.error || 'Failed to create payment session. Please try again.');
        }
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      setError('Payment failed. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (field: string) => {
    return fieldErrors[field] || '';
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Secure Payment</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}
      
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount ({paymentCurrencyLabel})
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            step="0.01"
            required
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              fieldErrors.amount ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter amount"
          />
          {getErrorMessage('amount') && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage('amount')}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              fieldErrors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your@email.com"
          />
          {getErrorMessage('email') && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage('email')}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Payment Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={3}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              fieldErrors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Consultation fee, Application processing, etc."
          />
          {getErrorMessage('description') && (
            <p className="mt-1 text-sm text-red-600">{getErrorMessage('description')}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {loading ? 'Processing...' : 'Pay with Stripe'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Powered by Stripe. Your payment information is secure and encrypted.
        </p>
      </div>
    </div>
  );
};

export default StripePayment;
