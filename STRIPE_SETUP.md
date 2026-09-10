# Stripe Payment Integration Setup Guide

## 1. Create a Stripe Account

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Sign up for a new account or log in to your existing account
3. Complete the verification process

## 2. Get Your Stripe API Keys

1. In your Stripe Dashboard, go to **Developers** → **API keys**
2. You'll see two sets of keys:
   - **Test keys** (for development)
   - **Live keys** (for production)

### Test Keys (for development):
- **Publishable key**: Starts with `pk_test_`
- **Secret key**: Starts with `sk_test_`

### Live Keys (for production):
- **Publishable key**: Starts with `pk_live_`
- **Secret key**: Starts with `sk_live_`

## 3. Set Up Environment Variables

Create a `.env` file in your project root (if it doesn't exist):

### For Development (Test Mode):
```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_test_webhook_secret_here

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### For Production (Live Mode):
```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51TFFNn2HOflo4dUkyoqNCxbKub0pMSs9ghBDZXltlV9QSnbGxIiDcNrnTXK5ssFaHg7oegaMUJ07hY1haZ6kSPN300PcKc0xcx
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret_here

# Base URL (update for production)
NEXT_PUBLIC_BASE_URL=https://navigatorglobals.com
```

**Important**: 
- For development, use test keys starting with `pk_test_` and `sk_test_`
- For production, use live keys starting with `pk_live_` and `sk_live_`
- The live publishable key is already configured above
- You still need to add your live secret key and webhook secret
- Update the base URL to your production domain
- For cPanel/standalone deployments, the production server must receive `STRIPE_SECRET_KEY` at runtime through the Node app environment variables or the root `.env` file. A key that exists only on your local computer will not be available after upload.

## 4. Test the Payment Flow

### For Testing (Test Mode):

1. Use Stripe test card numbers:
   - **Card Number**: `4242 4242 4242 4242`
   - **Expiry**: Any future date
   - **CVC**: Any 3 digits
   - **ZIP**: Any 5 digits

2. More test cards available at: [Stripe Testing Docs](https://stripe.com/docs/testing)

### Testing Steps:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/payment` in your browser

3. Fill out the payment form:
   - Amount: Enter any amount (e.g., 100)
   - Email: Enter your email
   - Description: Enter a description

4. Click "Pay with Stripe"

5. You'll be redirected to Stripe's checkout page

6. Use the test card details to complete the payment

7. You should be redirected to the success page

## 5. Going Live

1. **Activate your Stripe account** in the dashboard
2. **Use the provided live publishable key** in your `.env`
3. **Add your live secret key** from Stripe Dashboard to `.env`
4. **Configure webhook endpoint** with your live webhook secret
5. **Update the base URL** to your production domain (`https://navigatorglobals.com`)
6. **Test with real payments** (small amounts first)
7. **Restart the Node app** after changing environment variables so the server process reloads the Stripe keys

**Live Configuration Checklist:**
- [ ] Live publishable key: `pk_live_51TFFNn2HOflo4dUkyoqNCxbKub0pMSs9ghBDZXltlV9QSnbGxIiDcNrnTXK5ssFaHg7oegaMUJ07hY1haZ6kSPN300PcKc0xcx`
- [ ] Live secret key: `sk_live_...` (add from Stripe Dashboard)
- [ ] Live webhook secret: `whsec_...` (add from Stripe Dashboard)
- [ ] Base URL: `https://navigatorglobals.com`
- [ ] Webhook endpoint: `https://navigatorglobals.com/api/webhooks/stripe`

## 6. Security Notes

- **Never commit your `.env` file** to version control
- **Always use HTTPS** in production
- **Validate amounts** on the server side
- **Implement webhook handlers** for payment confirmations

## 7. Webhook Setup (Recommended)

The webhook endpoint is now implemented at `/api/webhooks/stripe` and handles the following events:

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Add a webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Set the webhook secret in your environment variables:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   ```
4. The webhook automatically handles these events:
   - `checkout.session.completed` - Logs successful payments
   - `checkout.session.expired` - Logs expired sessions
   - `payment_intent.succeeded` - Logs successful payment intents
   - `payment_intent.payment_failed` - Logs failed payments

**Webhook Features:**
- Automatic payment logging with detailed information
- Signature verification for security
- Error handling and logging
- Ready for database integration (add your database calls in the webhook handlers)

## 8. Troubleshooting

### Common Issues:

1. **"Invalid API key"**: Check your environment variables
2. **"No such checkout session"**: Ensure your base URL is correct
3. **"Redirect loop"**: Check if Stripe keys are properly loaded
4. **TypeScript errors**: Ensure all packages are properly installed
5. **"Payment service is not configured"**: The server cannot read `STRIPE_SECRET_KEY`, or it is still set to a placeholder such as `sk_live_your_stripe_secret_key_here`. Add the real secret key to the production runtime and restart the app.

### Debug Steps:

1. Check browser console for errors
2. Verify environment variables are loaded
3. Check Stripe Dashboard for API requests
4. Test with different amounts and descriptions

## 9. Support

- Stripe Documentation: [stripe.com/docs](https://stripe.com/docs)
- Stripe Support: [support.stripe.com](https://support.stripe.com)
- For project-specific issues, check the console logs and API responses

---

**Next Steps**:
1. Set up your Stripe account
2. Add your API keys to `.env`
3. Test the payment flow
4. Configure webhooks for production
5. Go live with real payments
