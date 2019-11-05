import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const ProtectedRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);
