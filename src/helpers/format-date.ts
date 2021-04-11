/**
 * Formats a date. Example: `Apr 13, 2018, 12:30 PM`
 *
 * @param dateAsNumber The date to format, in milliseconds since the epoch
 */
export function formatDate(dateAsNumber: number): string {
  return new Date(dateAsNumber).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    dayPeriod: 'long',
  });
}
