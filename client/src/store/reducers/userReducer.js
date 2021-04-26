const initialState = {
	user: 'NO NAME'
};

export function userReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'UPDATE_USER':
			return { user : action.newUser};

		default:
			return state
	}
}