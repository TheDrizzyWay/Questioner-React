import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import '../assets/styles/signup.scss';

const SignUpPage = () => {
    return (
        <div className="spg">
            <Header children="Questioner" />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default SignUpPage;
