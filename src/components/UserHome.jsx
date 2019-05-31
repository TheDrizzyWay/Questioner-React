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
                    <JoinedCard />
                    <JoinedCard />
                    <Pagination />
                </div>
            </div>
        </main>
        </>
    );
};

export default UserHome;
