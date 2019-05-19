import React from 'react';
import withFormError from './FormWithErrorHOC';

const LoginForm = () => {
    return (
        <div id="wrapper">
            <form className="lower">
                <fieldset>
                    <legend>Login Form</legend>
                    {withFormError(null, <input type="text" id="email" placeholder="Email" required />)}
                    {withFormError(null, <input type="password" id="password" placeholder="Password" required />)}
                    <button type="submit" id="submit">Sign in</button>
                </fieldset>
            </form>
        </div>
    );
};

export default LoginForm;
