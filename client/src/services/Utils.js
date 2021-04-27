function numToDay(num) {
	switch (num) {
		case 0:
			return "Sun";
		case 1:
			return "Mon";
		case 2:
			return "Tue";
		case 3:
			return "Wed";
		case 4:
			return "Thu";
		case 5:
			return "Fri";
		case 6:
			return "Sat";
		default:
			return "NaN";
	}
}

function ferToC(f) {
	return (f - 32) * (5 / 9);
}

export const Utils = { numToDay, ferToC };
