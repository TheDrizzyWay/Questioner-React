import React from 'react';
import Grid from '@material-ui/core/Grid';
import MeetupCard from './MeetupCard';
import createicon from '../assets/images/create-new.png';

const AdminHome = () => {
    return (
      <>
        <div className="create">
            <button id="modal-button"><img src={createicon} alt="create icon" /></button>
            <p>Create a new meetup</p>
        </div>
        <section>
            <p>My meetups</p>
            <div className="meet_container">
                <Grid container direction="row" spacing={0} style={{ padding: 24, justifyContent: 'space-between' }}>
                    <MeetupCard />
                    <MeetupCard />
                    <MeetupCard />
                    <MeetupCard />
                    <MeetupCard />
                    <MeetupCard />
                </Grid>
            </div>
        </section>
      </>
    );
};

export default AdminHome;
