export function searchString(item: string, searchText: string): boolean {
	return (
		!isEmptyStringOrNotDefined(item) &&
		searchText !== null &&
		searchText !== undefined &&
		sanitizeString(item).includes(sanitizeString(searchText))
	);
}

export function isEmptyStringOrNotDefined(value: string): boolean {
	return ['', null, undefined].includes(value);
}

export function sanitizeString(str: string): string {
	if (!str) {
		return '';
	}
	return str
		.toString()
		.toLowerCase()
		.normalize('NFD')
		.replace(/\p{Diacritic}/gu, '');
}
