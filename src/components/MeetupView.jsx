import React, { useEffect } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import formatDate from '../utils/formatDate';
import Spinner from './Spinner';
import imageSource from '../assets/images/No_image.svg.png';
import homeicon from '../assets/images/home.png';
import deleteicon from '../assets/images/delete.png';
import editicon from '../assets/images/edit.png';

export const MeetupView = (props) => {
    useEffect(() => {
        const { getOneMeetup, match: { params: id } } = props;
        getOneMeetup(id.id, 10);
    }, []);

    const { oneLoading, meetup, oneError } = props;
    let { topQuestions } = props;
    topQuestions = topQuestions || [];
    return (
    <>
    {oneError === 'Meetup not found' && <Redirect to="/notfound" />}
    <main>
        {oneLoading && <Spinner spinclass="center" />}
        {meetup && <div className="main_div">
            <div id="result"><p><span>Topic:</span> {meetup.topic}</p>
                <p><span>Date:</span> {meetup.happeningon}</p>
                <p><span>Location:</span> {meetup.location}</p>
                <div className="loc_image">
                    <p><span>Location Image:</span></p>
                    <img src={meetup.image || imageSource} alt="location.jpg" />
                </div>
                <div className="tags">
                    <p><span>Tags:</span></p>
                    <div>{meetup.tags && meetup.tags.map(tag => tag + ' ')}</div>
                </div>
                <p><span>Created on:</span> {formatDate(meetup.createdon)}</p>
                <p><span>Respondents:</span> {meetup.joinedUsers} user(s) have joined this meetup</p></div>
        </div>}
    </main>
    <section>
        <div className="top">
            {topQuestions.length ? (
                topQuestions.map(question => (
                    <div className="question" key={question.id}>
                        <p>Question: {question.body}</p>
                        <p>Posted by: {question.postedby}</p>
                        <p>Upvotes: {question.upvotes}</p>
                        <p>Downvotes: {question.downvotes}</p>
                        <hr />
                    </div>
                ))
            ) : <p style={{ textAlign: 'center' }}>No questions available yet.</p>}
        </div>
    </section>
    <section className="buttons">
        <button type="button" id="modal-button"><img src={editicon} alt="edit" /></button>
        <button type="button" id="delete-button"><img src={deleteicon} alt="delete" /></button>
        <Link to="/adminhome">
            <button type="button" name="home-button"><img src={homeicon} alt="home" /></button>
        </Link>
    </section>
    </>
    );
};

const mapStateToProps = state => ({
    oneLoading: state.meetups.oneLoading,
    meetup: state.meetups.meetup,
    oneError: state.meetups.oneError,
    topQuestions: state.meetups.topQuestions
});

const mapDispatchToProps = {
    getOneMeetup: actions.getOneMeetup
};

MeetupView.propTypes = {
    oneLoading: PropTypes.bool,
    meetup: PropTypes.object,
    oneError: PropTypes.any,
    topQuestions: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MeetupView));
