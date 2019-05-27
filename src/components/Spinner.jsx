import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import '../assets/styles/spinner.scss';

const Spinner = ({ color, size, spinclass }) => {
    return (
        <div className={spinclass}>
            <CircularProgress color={color} size={size} />
        </div>
    );
};

Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    spinclass: PropTypes.string
};

export default Spinner;
