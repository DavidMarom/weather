export function addFav( key ) {
    return dispatch => {
        dispatch({ type: 'ADD_FAV', key })
    }
}
export function removeFav( key ) {
    return dispatch => {
        dispatch({ type: 'REMOVE_FAV', key })
    }
}

// export function loadStorage() {
//     return dispatch => {
//         dispatch({ type: 'LOAD_STORAGE' })
//     }
// }

