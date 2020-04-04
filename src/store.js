import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import AppData from './reducers/fetchAllCharacters';
import SelectedFilters from './reducers/filterCharacters';
import sortCharacter from './reducers/sortCharacters';
import searchCharacters from './reducers/searchCharacters';

let rootReducer = combineReducers({
	appData: AppData,
	filters: SelectedFilters,
	sortBy: sortCharacter,
	search: searchCharacters
})

export default function configureStore() {
	return createStore(  rootReducer,
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
};