import React from 'react';
import PropTypes from 'prop-types';


const Button = ({
    onClick,
    className,
    children
}) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>

Button.defaultProps = {
    className: '',
};


export default Button