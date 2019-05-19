import React from 'react';
import PropTypes from 'prop-types';

const ToastMessage = ({ message }) => (
    <p>{message}</p>
);

ToastMessage.propTypes = {
    message: PropTypes.string
};

export default ToastMessage;
