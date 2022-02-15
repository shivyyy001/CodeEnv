export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_USER_AUTHENTICATED = 'SET_USER_AUTHENTICATED';

export const setUserAuthenticated = (payload) => {
    return {
        type: SET_USER_AUTHENTICATED,
        payload: payload,
    };
};

export const setUserDetails = (payload) => {
    return {
        type: SET_USER_DETAILS,
        payload: payload,
    };
};
