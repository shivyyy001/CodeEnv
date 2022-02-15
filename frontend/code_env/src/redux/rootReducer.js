import { combineReducers } from 'redux';
import { userReducer } from './reducers';

export const RootReducer = combineReducers({ userReducer });
