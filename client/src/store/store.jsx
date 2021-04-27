import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { weatherReducer } from './reducers/weatherReducer';
import { favReducer } from './reducers/favReducer';

const rootReducer = combineReducers({
    weatherReducer,
	favReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))