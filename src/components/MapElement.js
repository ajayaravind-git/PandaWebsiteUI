import React from 'react';

const MapElement = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1488375634201-b85b28653a79?q=80&w=2258&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const containerStyle = {
        width: '300px', // Adjust the width as needed
        height: '300px', // Adjust the height as needed
        borderRadius: '50%', // Make the container completely rounded
        overflow: 'hidden', // Ensure the image stays within the rounded container
    };

    const imageStyle = {
        width: '100%', // Make the image fill the container
        height: '100%', // Make the image fill the container
        objectFit: 'cover', // Ensure the image covers the container while maintaining aspect ratio
        borderRadius: '50%', // Make the image completely rounded
    };

    return (
        <div style={containerStyle}>
            <img src={imageUrl} alt="Map" style={imageStyle} />
        </div>
    );
};

export default MapElement;
