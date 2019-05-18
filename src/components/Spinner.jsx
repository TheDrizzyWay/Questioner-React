import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const Spinner = ({ color, size, thickness }) => {
    return (
        <CircularProgress
            color={color}
            size={size}
            thickness={thickness}
        />
    );
};

Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number
};

export default Spinner;
