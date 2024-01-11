import React from 'react';
import { Link } from 'react-router-dom';

const ButtonTransparent = ({ buttonText, destination }) => {
    const buttonStyle = {
        marginTop: '10px',
        padding: '10px 45px',
        borderRadius: '25px',
        border: '1px solid black',
        cursor: 'pointer',
        backgroundColor: 'transparent',
    };

    return (
        <Link to={destination}>
            <button style={buttonStyle} >
                {buttonText}
            </button>
        </Link>
    );
};

export default ButtonTransparent;
