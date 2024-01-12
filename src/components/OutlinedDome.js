import React, { Children } from 'react';

const OutlinedDome = ({ children }) => {
    const rectangleStyle = {
        width: '500px',
        height: '600px',
        background: 'transparent',
        outline: '1.1px solid lightgrey',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%'
    };

    return (
        <div style={rectangleStyle} className='flex flex-col justify-center'>
            {children}
        </div>
    );
}

export default OutlinedDome;
