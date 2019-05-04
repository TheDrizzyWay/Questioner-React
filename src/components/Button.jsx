import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonComponent = ({ name, onClick, type, disabled, className, children, variant, color }) => {
    return (
        <Button
            type={type}
            name={name}
            disabled={disabled}
            onClick={onClick}
            className={className}
            variant={variant}
            color={color}
        >
            {children}
        </Button>
    );
};

ButtonComponent.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string
};

export default ButtonComponent;
