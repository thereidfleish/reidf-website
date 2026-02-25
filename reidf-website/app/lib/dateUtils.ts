export const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

/** Parses a date string like "Jan 2024 - Present" and returns a numeric value for sorting. */
export function parseDateValue(dates: string): number {
  const start = dates.split("-")[0].trim();
  if (start === "Present") return Date.now();
  const [mon, year] = start.split(" ");
  return parseInt(year) * 12 + (MONTHS[mon] ?? 0);
}
