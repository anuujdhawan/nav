const stableDateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatStableDate(value: string | number | Date): string {
  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return stableDateFormatter.format(date);
}

export function createSubmissionReference(prefix = 'NAV'): string {
  const token = Math.random().toString(36).slice(2, 10).toUpperCase();
  return `${prefix}-${token}`;
}
