import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import MeetupCard from './MeetupCard';
import CreateMeetupModal from './modals/CreateMeetupModal';
import Spinner from './Spinner';
import Pagination from '../components/Pagination';
import * as actions from '../actions';

export const AdminHome = (props) => {
    useEffect(() => {
        props.getMeetups();
    }, []);

    const {
        isLoading, meetups, createMeetup,
        clearCreateError, createError, created,
        toggleCreateModal, showCreateModal
    } = props;

    return (
      <>
      <CreateMeetupModal
          createMeetup={createMeetup}
          createError={createError}
          clearCreateError={clearCreateError}
          created={created}
          toggleCreateModal={toggleCreateModal}
          showCreateModal={showCreateModal}
      />
        <section>
            {isLoading && <Spinner spinclass="center" />}
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
    isLoading: state.meetups.isLoading,
    createLoading: state.meetups.createLoading,
    createError: state.meetups.createError,
    created: state.meetups.created,
    showCreateModal: state.modals.showCreateModal
});

const mapDispatchToProps = {
    getMeetups: actions.getMeetups,
    createMeetup: actions.createMeetup,
    clearCreateError: actions.clearCreateError,
    toggleCreateModal: actions.toggleCreateModal
};

AdminHome.propTypes = {
    getMeetups: PropTypes.func.isRequired,
    meetups: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isLoading: PropTypes.bool,
    createMeetup: PropTypes.func,
    clearCreateError: PropTypes.func,
    createError: PropTypes.any,
    created: PropTypes.bool,
    toggleCreateModal: PropTypes.func,
    showCreateModal: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
