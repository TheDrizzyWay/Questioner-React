import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import withFormError from './FormWithErrorHOC';
import { login, clearError } from '../actions';
import Spinner from './Spinner';

export const LoginForm = (props) => {
    const initialFormState = {
        email: '',
        password: ''
    };

    const [info, setInfo] = useState(initialFormState);

    const onChangeHandler = ({ target: { id, value } }) => {
        setInfo({ ...info, [id]: value });
    };

    const clearErrorHandler = ({ target: { id } }) => {
        const { clearError } = props;
        clearError(id);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { login } = props;
        login(info);
    };

    const { auth } = props;
    const redirect = () => {
        const path = auth.loggedIn[0].isadmin ? '/adminhome' : 'userhome';
        return <Redirect to={path} />;
    };
    const spinner = auth.isLoading ? <Spinner size={23} /> : null;

    return (
        <div id="wrapper">
            {auth.loggedIn && redirect()}
            <form className="lower" onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    {withFormError(auth.email ? auth.email[0] : null,
                        <input type="text" id="email" placeholder="Email" onChange={onChangeHandler}
                            onFocus={clearErrorHandler} required />)}

                    {withFormError(auth.password ? auth.password[0] : null,
                        <input type="password" id="password" placeholder="Password" onChange={onChangeHandler}
                            onFocus={clearErrorHandler} required />)}

                    <button type="submit" id="submit" disabled={!!auth.isLoading}>
                        {auth.isLoading ? 'Loading... ' : 'Login'}
                    </button>{spinner}
                </fieldset>
            </form>
            <span>Don't have an account? Sign up using the link below.</span>
            <Link to="/signup" hidden={!!auth.signedUp}>SIGN UP</Link>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

LoginForm.propTypes = {
    auth: PropTypes.object,
    login: PropTypes.func,
    clearError: PropTypes.func
};

export default connect(mapStateToProps, { login, clearError })(LoginForm);
