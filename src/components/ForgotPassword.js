import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const buttonStyle = {
        width: '30%',
        marginTop: '10px',
        padding: '10px 2px',
        borderRadius: '25px',
        border: '1px solid black',
        cursor: 'pointer',
        backgroundColor: 'transparent',
    };

    const handleSendLink = () => {
        // Perform logic for sending the password reset link
        // For demonstration purposes, we'll just toggle the message and update the button text
        setShowMessage(true);
    };

    const handleResendLink = () => {
        // Perform logic for resending the password reset link
        // For demonstration purposes, we'll just toggle the message and update the button text
        setShowMessage(false);
    };

    return (
        <div className="text-center flex flex-col">
            <h1 className="font-bold text-2xl mb-10">Forgot Password</h1>
            <input
                type="email"
                className="border p-2 ml-24 mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {!showMessage && (<button className='ml-24' style={buttonStyle} onClick={handleSendLink}>
                {showMessage ? 'Resend Link' : 'Send Link'}
            </button>)}
            {showMessage && (
                <p className="text-sm text-gray-500 mt-2">
                    Didn't receive the link?{' '}
                    <button className="text-blue-500" onClick={handleResendLink}>
                        Resend it.
                    </button>
                </p>
            )}
        </div>
    );
};

export default ForgotPassword;
