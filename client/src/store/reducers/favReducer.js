const initialState = {
	fav : []
};

export function favReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'AAA':
			return {
				fav : []
			};

		default:
			return state
	}
}