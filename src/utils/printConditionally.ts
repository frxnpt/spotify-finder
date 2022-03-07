export function printConditionally<T>(condition: boolean, a: T, b: T) {
	if (condition) {
		return a
	} else {
		return b
	}
}
