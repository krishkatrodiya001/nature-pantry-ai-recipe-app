import React from 'react';

// Button component
const Button = ({ label, emoji }) => {
    return (
        <button className="tooltip-button" title={`Add ${label}`} aria-label={`Add ${label}`} alt={`Add ${label}`}>
            {emoji}
        </button>
    );
}

export default Button;
