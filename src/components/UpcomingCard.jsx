import React from 'react';

const UpcomingCard = (props) => {
    return (
        <div className="new_one">
            <p>| TOPIC: {props.topic}</p>
            <p>| DATE: {props.happeningon}</p>
            <p>| Location: {props.location}</p>
            <div className="rsvp">
                <span>RSVP: </span>
                <button className="rsvp_yes" data-id="${meetup.id}">Yes</button>
                <button className="rsvp_no" data-id="${meetup.id}">No</button>
                <button className="rsvp_maybe" data-id="${meetup.id}">Maybe</button>
            </div>
        </div>
    );
};

export default UpcomingCard;
