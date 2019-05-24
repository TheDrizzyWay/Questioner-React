import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MeetupCard from './MeetupCard';
import Spinner from './Spinner';
import Pagination from '../components/Pagination';
import createicon from '../assets/images/create-new.png';
import { getMeetups } from '../actions';

const AdminHome = (props) => {
    useEffect(() => {
        props.getMeetups();
    }, []);

    const { isLoading, meetups } = props;
    return (
      <>
        <div className="create">
            <button id="modal-button"><img src={createicon} alt="create icon" /></button>
            <p>Create a new meetup</p>
        </div>
        {isLoading && <Spinner style={{ float: 'center' }} />}
        <section>
            <p>My meetups</p>
            <div className="meet_container">
                {meetups.paginatedResult ? (
                    <Grid container direction="row" spacing={0}
                        style={{ padding: 24, justifyContent: 'space-between' }}>
                        {meetups.paginatedResult.map(({ id, ...rest }) => (
                            <MeetupCard key={id} {...rest} />
                        ))}
                    </Grid>
                ) : (<div>'No meetups created yet.'</div>)}
            </div>
        </section>
        <Pagination />
      </>
    );
};

const mapStateToProps = state => ({
    meetups: state.meetups.meetups,
    isLoading: state.meetups.isLoading
});

AdminHome.propTypes = {
    getMeetups: PropTypes.func.isRequired,
    meetups: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isLoading: PropTypes.bool
};

export default connect(mapStateToProps, { getMeetups })(AdminHome);
