import React from 'react';
import meetingimage from '../assets/images/meeting2.jpg';

const UpcomingCard = (props) => {
    return (
        <div className="new_one">
            <div className="upcoming-card">
                <div className="card z-depth-4">
                    <div className="card-image">
                        <img src={meetingimage} alt="location-img" />
                        <span className="card-title"><span>Sample Topic</span></span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12">
                                <p>
                                    <strong>Location:</strong> <br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare auctor metus vel mollis.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ width: '95%', margin: 'auto' }}>
                                <span>RSVP:</span>
                                <button className="rsvp">YES</button>
                                <button className="rsvp">NO</button>
                                <button className="rsvp">MAYBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCard;
