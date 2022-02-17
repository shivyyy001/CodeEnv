import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

//Function to return original route if user is authenticated but if not then to redirect to login page.
const AuthenticatedRoute = (props) => {
    const isAuthenticated =
        useSelector((state) => state.userReducer.isAuthenticated) ||
        localStorage.getItem('isAuthenticated');

    return <>{isAuthenticated ? <Route {...props} /> : <Redirect to="/" />}</>;
};

export default AuthenticatedRoute;
