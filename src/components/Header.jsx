import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
    return (
        <div className="header_container">
            <header>
                <h1>{children}</h1>
            </header>
        </div>
    );
};

Header.propTypes = {
    children: PropTypes.any
};

export default Header;
