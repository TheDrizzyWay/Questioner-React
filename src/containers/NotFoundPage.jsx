import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="notfound-bg" />
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>
                  This is not the page you are looking for.<br/>
                  Unless you are looking for a blue page with the number '404' on it.<br/>
                  If that's the case, congratulations...you totally found it!
                </h2>
                <Link to="/" className="home-btn">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
