import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={props => {
                return JSON.parse(localStorage.getItem('login')) ? <Component {...props} /> : <Redirect to="/signup" />
            }}
        >
        </Route>
    )
}