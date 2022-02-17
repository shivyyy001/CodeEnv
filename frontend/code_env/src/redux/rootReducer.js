import { combineReducers } from 'redux';
import { userReducer } from './reducers';

//Combining the reducers.
export const RootReducer = combineReducers({ userReducer });
