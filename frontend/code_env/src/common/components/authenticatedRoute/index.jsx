import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
    const isAuthenticated =
        useSelector((state) => state.userReducer.isAuthenticated) ||
        localStorage.getItem('isAuthenticated');

    return <>{isAuthenticated ? <Route {...props} /> : <Redirect to="/" />}</>;
};

export default AuthenticatedRoute;
