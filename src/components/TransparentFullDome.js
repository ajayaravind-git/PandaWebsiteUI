import React from 'react';

const TransparentFullDome = ({ number, task, description }) => {
    const rectangleStyle = {
        width: '300px', // Adjust the width as needed
        height: '300px', // Adjust the height as needed
        background: 'transparent',
        border: '1.1px solid black',
        borderTopLeftRadius: '40%',
        borderTopRightRadius: '40%'
    };

    return (
        <div style={rectangleStyle} className='flex flex-col justify-center'>
            <h2 className='text-xs mb-4 '>{number}</h2>
            <h1 className='text-lg font-medium mb-3'>{task}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    );
}

export default TransparentFullDome;
