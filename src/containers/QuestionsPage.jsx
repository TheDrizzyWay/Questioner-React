import React from 'react';
import TopBar from '../components/TopBar';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import '../assets/styles/questions.scss';

const QuestionsPage = () => {
    return (
        <div className="qpg">
            <TopBar section="Questions Page" />
            <Questions />
            <Footer />
        </div>
    );
};

export default QuestionsPage;
