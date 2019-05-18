import React from 'react';
import TopBar from '../components/TopBar';
import AdminHome from '../components/AdminHome';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import '../assets/styles/adminhome.scss';

const AdminHomePage = () => {
    return (
        <div className="ahpg">
            <TopBar section="Admin Section" />
            <AdminHome />
            <Pagination />
            <Footer />
        </div>
    );
};

export default AdminHomePage;
