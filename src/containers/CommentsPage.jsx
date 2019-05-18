import React from 'react';
import TopBar from '../components/TopBar';
import Comments from '../components/Comments';
import Footer from '../components/Footer';
import '../assets/styles/questions.scss';

const CommentsPage = () => {
    return (
        <div className="qpg">
            <TopBar section="Comments Section" />
            <Comments />
            <Footer />
        </div>
    );
};

export default CommentsPage;
