import React from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';
import '../assets/styles/signup.css';

const SignUpPage = () => {
    return (
        <div className="spg">
            <Header />
            <SignUpForm />
            <span>Already a member? Login below.</span>
            <a href="signin.html">LOGIN</a>
            <Footer />
        </div>
    );
};

export default SignUpPage;
