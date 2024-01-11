import React from 'react';

const ButtonTransparent = ({ buttonText, onClick }) => {
    const buttonStyle = {
        marginTop: '10px',
        padding: '10px 45px',
        borderRadius: '25px',
        border: '1px solid black',
        cursor: 'pointer',
        backgroundColor: 'transparent',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default ButtonTransparent;
