import React from 'react';
import withFormError from './FormWithErrorHOC';

const SignUpForm = () => {
    return (
        <div id="wrapper">
            <form id="signup_form">
                <fieldset>
                    <legend>Signup Form</legend>
                    {withFormError(null, <input type="text" id="firstname" placeholder="First Name"
                        maxLength="24" required />)}
                    {withFormError(null, <input type="text" id="lastname" placeholder="Last Name"
                        maxLength="24" required />)}
                    {withFormError(null, <input type="email" id="email" placeholder="Email" required />)}
                    {withFormError(null, <input type="password" id="password" placeholder="Password"
                        maxLength="18" required />)}
                    <div className="small">
                  Your password should be between six and 18 characters long.
                    </div>
                    {withFormError(null, <input type="password" id="password_confirmation"
                        placeholder="Confirm Password" maxLength="18" required />)}
                    {withFormError(null, <input type="text" id="username" placeholder="Username"
                        maxLength="24" required />)}
                    {withFormError(null, <input type="tel" id="phonenumber" placeholder="Phone Number"
                        maxLength="24" required />)}
                    <input type="submit" id="submit" value="Signup"/>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpForm;
