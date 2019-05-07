import React, { useReducer, useRef } from 'react';
import { connect } from 'react-redux';
import withFormError from './FormWithErrorHOC';
import { initialAuthState, authReducer } from '../reducers/authReducer';
import { signUp } from '../actions/authActions';

const SignUpForm = () => {
    const [state, dispatch] = useReducer(authReducer, initialAuthState);
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const usernameRef = useRef();
    const phonenumberRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formObject = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
            username: usernameRef.current.value,
            phonenumber: phonenumberRef.current.value
        };
        dispatch(signUp(formObject));
    };

    return (
        <div id="wrapper">
            <form id="signup_form" onSubmit={onSubmitHandler}>
                <fieldset>
                    <legend>Signup Form</legend>
                    {withFormError(null, <input type="text" id="firstname" placeholder="First Name"
                        ref={firstnameRef} maxLength="24" required />)}
                    {withFormError(null, <input type="text" id="lastname" placeholder="Last Name"
                        ref={lastnameRef} maxLength="24" required />)}
                    {withFormError(null, <input type="email" id="email" placeholder="Email"
                        ref={emailRef} required />)}
                    {withFormError(null, <input type="password" id="password" placeholder="Password"
                        ref={passwordRef} maxLength="18" required />)}
                    <div className="small">
                  Your password should be between six and 18 characters long.{state.formObject ? state.formObject.firstname : 'no'}
                    </div>
                    {withFormError(null, <input type="password" id="password_confirmation"
                        ref={passwordConfirmationRef} placeholder="Confirm Password" maxLength="18" required />)}
                    {withFormError(null, <input type="text" id="username" placeholder="Username"
                        ref={usernameRef} maxLength="24" required />)}
                    {withFormError(null, <input type="tel" id="phonenumber" placeholder="Phone Number"
                        ref={phonenumberRef} maxLength="24" required />)}
                    <input type="submit" id="submit" value="Signup"/>
                </fieldset>
            </form>
        </div>
    );
};

export default connect(null)(SignUpForm);
