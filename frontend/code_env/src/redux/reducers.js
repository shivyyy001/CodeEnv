import { SET_USER_AUTHENTICATED, SET_USER_DETAILS } from './actions';

const initialUserState = {
    isAuthenticated: false,
    userDetails: JSON.parse(localStorage.getItem("userdetails")),
};

//UserReducer to define how to do actions for user.
export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SET_USER_AUTHENTICATED:
            return { ...state, isAuthenticated: action.payload };
        case SET_USER_DETAILS:
            return { ...state, userDetails: action.payload };
        default:
            return state;
    }
};
