import { createStore } from 'redux';
import { RootReducer } from './rootReducer';

//Redux store to store the states of app at one place.
export const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
