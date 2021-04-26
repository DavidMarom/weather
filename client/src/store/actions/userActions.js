export function updateUser(newUser) {
	return dispatch => {
		dispatch({ type: 'UPDATE_USER', newUser });
	};
}