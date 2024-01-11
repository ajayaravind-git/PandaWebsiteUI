import React from 'react';

const DomeStyledImage = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1574167455363-acc39a6c1d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const containerStyle = {
        position: 'relative',
        width: '400px',
        height: '350px',
        overflow: 'hidden',
        boxShadow: '-60px -16px 10px teal',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%'

    };


    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%'


    };

    return (
        <div style={containerStyle}>
            <img src={imageUrl} alt="Dome Styled Image" style={imageStyle} />
        </div>
    );
};

export default DomeStyledImage;
