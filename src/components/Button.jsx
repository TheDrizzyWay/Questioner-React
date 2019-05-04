import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ButtonComponent = ({ name, onClick, type, disabled, className, children }) => {
    return (
        <Button
            type={type}
            name={name}
            disabled={disabled}
            onClick={onClick}
            className={className}
        >
            {children}
        </Button>
    );
};

export default ButtonComponent;
