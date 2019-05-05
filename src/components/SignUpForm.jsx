import React from 'react';

const SignUpForm = () => {
    return (
        <div id="wrapper">
            <form id="signup_form">
                <fieldset>
                    <legend>Signup Form</legend>
                    <div>
                        <input type="text" id="firstname" placeholder="First Name" maxLength="24" required />
                    </div>
                    <div>
                        <input type="text" id="lastname" placeholder="Last Name" maxLength="24" required />
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Email" required />
                    </div>
                    <div>
                        <input type="password" id="password" placeholder="Password" maxLength="18" required />
                    </div>
                    <div className="small">
                  Your password should be between six and 18 characters long.
                    </div>
                    <div>
                        <input type="password" id="password_confirmation" placeholder="Confirm Password"
                            maxLength="18" required />
                    </div>
                    <div>
                        <input type="text" id="username" placeholder="Username" maxLength="24" required />
                    </div>
                    <div>
                        <input type="tel" id="phonenumber" placeholder="Phone Number" maxLength="24" required />
                    </div>
                    <input type="submit" id="submit" value="Signup"/>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpForm;
