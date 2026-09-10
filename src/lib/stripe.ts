import 'server-only';

import Stripe from 'stripe';

const PLACEHOLDER_ENV_VALUES = new Set([
  'pk_test_your_publishable_key_here',
  'pk_live_your_publishable_key_here',
  'sk_test_your_secret_key_here',
  'sk_live_your_secret_key_here',
  'sk_live_your_stripe_secret_key_here',
  'whsec_your_test_webhook_secret_here',
  'whsec_your_live_webhook_secret_here',
  'whsec_your_webhook_secret_here',
  'whsec_your_stripe_webhook_secret_here',
  'your_stripe_secret_key',
  'your_stripe_webhook_secret',
]);

function getConfiguredEnvValue(value?: string | null) {
  const trimmedValue = value?.trim();

  if (!trimmedValue || PLACEHOLDER_ENV_VALUES.has(trimmedValue)) {
    return null;
  }

  return trimmedValue;
}

export function getStripePublishableKey() {
  return getConfiguredEnvValue(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
}

export function getStripeSecretKey() {
  return getConfiguredEnvValue(process.env.STRIPE_SECRET_KEY);
}

export function getStripeWebhookSecret() {
  return getConfiguredEnvValue(process.env.STRIPE_WEBHOOK_SECRET);
}

export function isStripeCheckoutConfigured() {
  return Boolean(getStripeSecretKey());
}

export function isStripeWebhookConfigured() {
  return Boolean(getStripeSecretKey() && getStripeWebhookSecret());
}

export function getStripeBaseUrl() {
  const configuredBaseUrl =
    getConfiguredEnvValue(process.env.NEXT_PUBLIC_BASE_URL) ||
    getConfiguredEnvValue(process.env.NEXT_PUBLIC_SITE_URL) ||
    getConfiguredEnvValue(process.env.SITE_URL);
  const vercelUrl = getConfiguredEnvValue(process.env.VERCEL_URL);
  const fallbackBaseUrl = vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000';

  return (configuredBaseUrl || fallbackBaseUrl).replace(/\/+$/, '');
}

export function createStripeClient() {
  const secretKey = getStripeSecretKey();

  if (!secretKey) {
    throw new Error('Stripe secret key is not configured.');
  }

  return new Stripe(secretKey);
}
