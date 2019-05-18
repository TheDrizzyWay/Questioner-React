import React from 'react';

const JoinedCard = (props) => {
    return (
        <div className="new_one">
            <p>| TOPIC: {props.topic}</p>
            <p>| DATE: {props.happeningon}</p>
            <p>{props.joinedUsers} user(s) have joined this meetup.</p>
            <div className="rsvp">
                <a href="userview.html?id=${result.id}"><button>Meetup Details</button></a>
                <a href="usermeetups.html?id=${result.id}" data-id="${result.id}"><button>Questions</button></a>
            </div>
        </div>
    );
};

export default JoinedCard;
