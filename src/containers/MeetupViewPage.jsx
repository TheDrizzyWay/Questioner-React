import React from 'react';
import TopBar from '../components/TopBar';
import MeetupView from '../components/MeetupView';
import Footer from '../components/Footer';
import '../assets/styles/view.scss';

const MeetupViewPage = () => {
    return (
        <div className="mpg">
            <TopBar section="Meetup Details" />
            <MeetupView />
            <Footer />
        </div>
    );
};

export default MeetupViewPage;
