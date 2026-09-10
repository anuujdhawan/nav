'use client';

import { useState } from 'react';
import { paymentCurrencyLabel } from '@/lib/paymentCurrency';

const StripePaymentDemo = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!amount || !email || !description) {
      alert('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Demo mode - show what would happen
    setTimeout(() => {
      alert(`Demo: Payment of ${paymentCurrencyLabel} ${amount} would be processed for ${email}\n\nIn production, this would redirect to Stripe checkout.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-sm text-yellow-800">
          <strong>Demo Mode:</strong> This is a demonstration. Configure Stripe keys in .env to enable real payments.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Secure Payment</h2>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter amount"
          />
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Consultation fee, Application processing, etc."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {loading ? 'Processing...' : 'Pay with Stripe (Demo)'}
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

export default StripePaymentDemo;
