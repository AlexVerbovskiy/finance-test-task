import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
    productsReducer,
    mainReducer
} from 'reducers';

export const store = createStore(combineReducers({
    products: productsReducer,
    main: mainReducer
}), applyMiddleware(thunk));