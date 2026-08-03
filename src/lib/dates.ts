/** Shared date helpers for content collections. */

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' }).format(date);
}

/** Descending by date; entries without a date sort last. */
export function sortByDate<T extends { data: { date?: Date } }>(a: T, b: T): number {
	return (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0);
}
