import { storageService } from "../../services/storageService";

let arr = [];
if (storageService.loadFromStorage('favs')) {
	arr = storageService.loadFromStorage('favs');

}


const initialState = {
	favs: arr,
};

export function favReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'GET_FAV':
			return state

		case 'ADD_FAV':
			return { favs: [...state.favs, action.key] }

		case 'REMOVE_FAV':
			return { favs: state.favs.filter(el => action.key !== el) }

		default:
			return state
	}
}

