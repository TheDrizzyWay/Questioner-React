import React from 'react';
import UpcomingCard from './UpcomingCard';
import JoinedCard from './JoinedCard';
import Pagination from './Pagination';

const UserHome = () => {
    return (
      <>
        <main>
            <div className="wrapper">
                <div className="new_meetups">
                    <div className="new_header">
                        <p>New Meetups</p>
                    </div>
                    <UpcomingCard />
                    <UpcomingCard />
                    <Pagination />
                </div>
                <div className="joined">
                    <div className="new_header">
                        <p>Joined Meetups</p>
                    </div>
                    <JoinedCard />
                    <JoinedCard />
                    <Pagination />
                </div>
            </div>
        </main>
        <div className="low_links">
            <a href="profile.html" className="profile">View Profile</a>
        </div>
        </>
    );
};

export default UserHome;
