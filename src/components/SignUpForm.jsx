import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withFormError from './FormWithErrorHOC';
import { signUp, clearError } from '../actions';
import Spinner from './Spinner';

const SignUpForm = (props) => {
    const initialFormState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        username: '',
        phonenumber: ''
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
        const { signUp } = props;
        signUp(info);
    };

    const { auth } = props;
    const spinner = auth.isLoading ? <Spinner size={25} /> : null;

    return (
        <div id="wrapper">
            <form id="signup_form" onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Signup Form</legend>
                    {withFormError(auth.firstname ? auth.firstname[0] : null,
                        <input type="text" id="firstname"
                            placeholder="First Name" value={info.firstname}
                            maxLength="24" onChange={onChangeHandler}
                            onFocus={clearErrorHandler} required />)}

                    {withFormError(auth.lastname ? auth.lastname[0] : null,
                        <input type="text" id="lastname" placeholder="Last Name" value={info.lastname}
                            maxLength="24" onChange={onChangeHandler} required />)}

                    {withFormError(auth.email ? auth.email[0] : null, <input type="email" id="email" placeholder="Email"
                        value={info.email} onChange={onChangeHandler} required />)}

                    {withFormError(auth.password ? auth.password[0] : null,
                        <input type="password" id="password" placeholder="Password" value={info.password}
                            maxLength="18" onChange={onChangeHandler} required />)}

                    <div className="small">
                  Your password should be between six and 18 characters long.
                    </div>

                    {withFormError(auth.password_confirmation ? auth.password_confirmation[0] : null,
                        <input type="password" id="password_confirmation" value={info.passwordConfirmation}
                            placeholder="Confirm Password" maxLength="18" onChange={onChangeHandler} required />)}

                    {withFormError(auth.username ? auth.username[0] : null, <input type="text" id="username"
                        placeholder="Username" value={info.username} maxLength="24"
                        onChange={onChangeHandler} required />)}

                    {withFormError(auth.phonenumber ? auth.phonenumber[0] : null, <input type="tel" id="phonenumber"
                        placeholder="Phone Number" value={info.phonenumber} maxLength="24"
                        onChange={onChangeHandler} required />)}
                    <button type="submit" id="submit" disabled={!!auth.isLoading}>
                        {auth.isLoading ? 'Loading... ' : 'Submit'}{spinner}
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});


SignUpForm.propTypes = {
    auth: PropTypes.object,
    signUp: PropTypes.func,
    clearError: PropTypes.func
};

export default connect(mapStateToProps, { signUp, clearError })(SignUpForm);
