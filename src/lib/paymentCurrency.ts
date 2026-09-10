export const paymentCurrencyCode = 'aed';
export const paymentCurrencyLabel = 'AED';

export function formatPaymentAmount(amountInMinorUnits: number) {
  return `${paymentCurrencyLabel} ${(amountInMinorUnits / 100).toFixed(2)}`;
}
