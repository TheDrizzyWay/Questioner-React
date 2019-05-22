import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tokenExpired from '../utils/tokenExpired';

export const AuthorizationHOC = ({ component: Component, ...rest }) => {
    const token = rest.auth.loggedIn ? rest.auth.loggedIn[0].token : null;
    return (<Route
        {...rest}
        render={() => {
            if (token && !tokenExpired(token)) {
                return <Component />;
            }
            return <Redirect to="/signin" />;
        }}
    />);
};

const mapStateToProps = state => ({
    auth: state.auth
});

AuthorizationHOC.propTypes = {
    component: PropTypes.func,
    token: PropTypes.string
};

export default connect(mapStateToProps)(AuthorizationHOC);
