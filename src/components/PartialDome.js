import React from 'react';

const PartialDome = ({ number, task, description }) => {
    const rectangleStyle = {
        width: '170px', // Adjust the width as needed
        height: '180px', // Adjust the height as needed
        background: 'transparent',
        borderTop: '1.3px solid black',
        outline: '1.1px solid lightgrey',
        borderTopLeftRadius: '40%',
        borderTopRightRadius: '40%'
    };

    return (
        <div style={rectangleStyle} className='flex flex-col justify-center'>
            <h2 className='text-3xl mb-1 '>*</h2>
            <h1 className='text-sm font-medium mb-3'>{task}</h1>
            <p className='text-xs'>{description}</p>
        </div>
    );
}

export default PartialDome;
