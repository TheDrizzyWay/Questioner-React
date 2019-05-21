import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const Spinner = ({ color, size }) => {
    return <CircularProgress color={color} size={size} />;
};

Spinner.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number
};

export default Spinner;
