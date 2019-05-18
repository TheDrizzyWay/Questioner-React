import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import '../assets/styles/signup.scss';

const SignUpPage = () => {
    return (
        <div className="spg">
            <Header children="Questioner" />
            <LoginForm />
            <span>Don't have an account? Sign up using the link below.</span>
            <Link to="/signup">SIGN UP</Link>
            <Footer />
        </div>
    );
};

export default SignUpPage;
