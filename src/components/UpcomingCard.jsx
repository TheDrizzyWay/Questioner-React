import React from 'react';
import { LocationCitySharp } from '@material-ui/icons';
import { CalendarTodayTwoTone } from '@material-ui/icons';
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
                                    <LocationCitySharp
                                        style={{ display: 'inline-flex', verticalAlign: 'middle',
                                            fill: '#00bfff' }}/>{' '}
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Curabitur ornare auctor.</p><br />
                                <p><CalendarTodayTwoTone style={{ display: 'inline-flex', verticalAlign: 'middle',
                                    fill: '#00bfff' }}/>
                                {' '}2nd of June, 2019 by 10:00 AM
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ width: '95%', margin: 'auto' }}>
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
