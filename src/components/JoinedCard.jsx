import React from 'react';
import { Link } from 'react-router-dom';

const JoinedCard = (props) => {
    return (
        <div className="new_one">
            <div className="join-card">
                <p>| TOPIC: {props.topic}</p>
                <p>| DATE: {props.happeningon}</p>
                <p>{props.joinedUsers} 0 user(s) have joined this meetup.</p>
                <div className="rsvp">
                    <Link to="#"><button>Meetup Details</button></Link>
                    <Link to="#"><button>Questions</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JoinedCard;
