import React from 'react';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';
import '../assets/styles/signup.scss';

const SignUpPage = () => {
    return (
        <div className="spg">
            <Header children="Questioner" />
            <SignUpForm />
            <Footer />
        </div>
    );
};

export default SignUpPage;
