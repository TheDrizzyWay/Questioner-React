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
        displayModal, showCreateModal, clearCreated,
        closeCreateModal, createLoading
    } = props;

    return (
      <>
      <CreateMeetupModal
          createMeetup={createMeetup}
          createError={createError}
          clearCreateError={clearCreateError}
          created={created}
          clearCreated={clearCreated}
          displayModal={displayModal}
          showCreateModal={showCreateModal}
          closeCreateModal={closeCreateModal}
          createLoading={createLoading}
      />
        <section>
            {isLoading && <Spinner spinclass="center" />}
            <p>My meetups</p>
            <div className="meet_container">
                {meetups.paginatedResult ? (
                    <Grid container direction="row" spacing={0}
                        style={{ padding: 24, justifyContent: 'space-between' }}>
                        {meetups.paginatedResult.map(({ id, ...rest }) => (
                            <MeetupCard key={id} id={id} {...rest} />
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
    displayModal: state.modals.displayModal
});

const mapDispatchToProps = {
    getMeetups: actions.getMeetups,
    createMeetup: actions.createMeetup,
    clearCreateError: actions.clearCreateError,
    clearCreated: actions.clearCreated,
    showCreateModal: actions.showCreateModal,
    closeCreateModal: actions.closeCreateModal
};

AdminHome.propTypes = {
    getMeetups: PropTypes.func.isRequired,
    meetups: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    isLoading: PropTypes.bool,
    createMeetup: PropTypes.func,
    clearCreateError: PropTypes.func,
    createError: PropTypes.any,
    created: PropTypes.bool,
    clearCreated: PropTypes.func,
    displayModal: PropTypes.bool,
    showCreateModal: PropTypes.func,
    closeCreateModal: PropTypes.func,
    createLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
