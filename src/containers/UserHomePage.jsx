import React from 'react';
import TopBar from '../components/TopBar';
import UserHome from '../components/UserHome';
import Footer from '../components/Footer';
import '../assets/styles/userhome.scss';

const UserHomePage = () => {
    return (
        <div className="uhpg">
            <TopBar section="User Dashboard" />
            <UserHome />
            <Footer />
        </div>
    );
};

export default UserHomePage;
