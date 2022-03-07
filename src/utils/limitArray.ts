export function limitArray<T>(array: T[], limit?: number): T[] {
	if (!limit) return array;
	return array.slice(0, limit);
};