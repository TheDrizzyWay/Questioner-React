import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tokenExpired from '../utils/tokenExpired';

export const AdminHOC = ({ component: Component, ...rest }) => {
    const token = rest.auth.loggedIn ? rest.auth.loggedIn[0].token : null;
    const isadmin = rest.auth.loggedIn ? rest.auth.loggedIn[0].isadmin : null;
    return (<Route
        {...rest}
        render={() => {
            if (token && !tokenExpired(token) && isadmin) {
                return <Component />;
            }
            return <Redirect to="/signin" />;
        }}
    />);
};

const mapStateToProps = state => ({
    auth: state.auth
});

AdminHOC.propTypes = {
    auth: PropTypes.object,
    component: PropTypes.func
};

export default connect(mapStateToProps)(AdminHOC);
