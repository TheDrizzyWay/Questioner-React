import React from 'react';
import imageSource from '../assets/images/meeting2.jpg';
import homeicon from '../assets/images/home.png';
import deleteicon from '../assets/images/delete.png';

const MeetupView = (props) => {
    return (
    <>
    <main>
        <div className="main_div">
            <div id="result"><p><span>Topic:</span> {props.topic}</p>
                <p><span>Date:</span> {props.happeningon}</p>
                <p><span>Location:</span> {props.location}</p>
                <div className="loc_image">
                    <p><span>Location Image:</span></p>
                    <img src={imageSource} alt="location.jpg" />
                </div>
                <div className="tags">
                    <p><span>Tags:</span></p>
                    <div>{props.tags}</div>
                </div>
                <p><span>Created on:</span> {props.date}</p>
                <p><span>Respondents:</span> {props.joinedUsers} user(s) have joined this meetup</p></div>
        </div>
    </main>
    <section>
        <div className="top">
            <div className="question">
                <p>Question: {props.body}</p>
                <p>Posted by: {props.postedby}</p>
                <p>Upvotes: {props.upvotes}</p>
                <p>Downvotes: {props.downvotes}</p>
            </div>
            <hr />
            <div className="question">
                <p>Question: {props.body}</p>
                <p>Posted by: {props.postedby}</p>
                <p>Upvotes: {props.upvotes}</p>
                <p>Downvotes: {props.downvotes}</p>
            </div>
        </div>
    </section>
    <section className="buttons">
        <button type="button" id="modal-button"><img src="images/edit.png" alt="edit" /></button>
        <p>Edit Meetup</p>
        <button type="button" id="delete-button"><img src={deleteicon} alt="delete" /></button>
        <p>Delete Meetup</p>
        <a href="adminhome.html">
            <button type="button" name="home-button"><img src={homeicon} alt="home" /></button>
        </a>
        <p>Home</p>
    </section>
    </>
    );
};

export default MeetupView;
