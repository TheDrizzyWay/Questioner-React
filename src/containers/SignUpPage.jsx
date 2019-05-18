import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';
import '../assets/styles/signup.scss';

const SignUpPage = () => {
    return (
        <div className="spg">
            <Header children="Questioner" />
            <SignUpForm />
            <span>Already a member? Login below.</span>
            <Link to="/signin">LOGIN</Link>
            <Footer />
        </div>
    );
};

export default SignUpPage;
