import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div id="notfound">
            <div className="notfound-bg" />
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>So many things exist but not this page.</h2>
                <Link to="/" className="home-btn">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
