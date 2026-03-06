export const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  January: 0, February: 1, March: 2, April: 3, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

/**
 * Parses a date string and returns a numeric value for sorting.
 * Handles "Jan 2024", "Jan 2024 - Present", and "December 27th, 2021" formats.
 */
export function parseDateValue(dates: string): number {
  const start = dates.split("-")[0].trim();
  if (start === "Present") return Date.now();
  const parts = start.split(" ").filter((p) => p.length > 0);
  const mon = parts[0];
  const year = parseInt(parts[parts.length - 1].replace(/\D/g, ""));
  return year * 12 + (MONTHS[mon] ?? 0);
}

/** Sorts an array of items by their `dates` field. */
export function sortByDate<T extends { dates: string }>(items: T[], newestFirst: boolean): T[] {
  return [...items].sort((a, b) => {
    const diff = parseDateValue(a.dates) - parseDateValue(b.dates);
    return newestFirst ? -diff : diff;
  });
}

