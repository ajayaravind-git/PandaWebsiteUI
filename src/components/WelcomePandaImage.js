import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePandaImage = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <img
                src="https://images.unsplash.com/photo-1551847812-f815b31ae67c?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Welcome to Pandas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '20%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 1,
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.8)', // Adjust the values as needed
                }}

            >
                <Link to={'/'}><h1 className='text-4xl' style={{ fontFamily: 'Poppins' }}>Welcome to<span className='font-bold'> PANDAS</span></h1></Link>
            </div>
        </div>
    );
};

export default WelcomePandaImage;
