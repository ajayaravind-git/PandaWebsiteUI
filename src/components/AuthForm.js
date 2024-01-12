import React, { useState } from 'react';
import OutlinedDome from './OutlinedDome';
import { Link } from 'react-router-dom';
import './AuthForm.css'

const AuthForm = ({ createorlog }) => {
    const [isLogin, setLogin] = useState(createorlog);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);


    const buttonStyle = {
        marginTop: '10px',
        padding: '10px 45px',
        borderRadius: '25px',
        border: '1px solid black',
        cursor: 'pointer',
        backgroundColor: 'transparent',
    };

    const handleSwitch = () => {
        setLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { isLogin, username, password, confirmPassword, email, rememberMe, termsAgreed });
    };


    return (
        <div className='flex flex-col  items-center'>
            <div className='mb-10 mt-20'>
                <button type="button" onClick={handleSwitch}>
                    {isLogin ? 'Create a new account' : 'Already have an account?'}
                </button>
            </div>

            <OutlinedDome>

                <h2 className='font-bold text-center mb-10 pb-10 pt-10'>
                    {isLogin ? (
                        <>
                            Login to your existing account <br />

                        </>
                    ) : (
                        <>
                            Create your free account <br />
                            <span className='text-sm'>Takes less than <span style={{ color: 'red' }}>5 minutes...</span></span>
                        </>
                    )}
                </h2>
                <form onSubmit={handleSubmit}>
                    {isLogin ? (
                        <>


                            <input className='ml-24 mb-5' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username' />

                            <br></br>


                            <input className='ml-24 mb-5' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />

                            <div className='ml-24 mb-20'>
                                <br></br>
                                <Link to={'/fpassword'}>Forgot Password?</Link>
                            </div>
                        </>
                    ) : (
                        <>


                            <input className='ml-24 mb-5' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter new username' />


                            <br></br>


                            <input className='ml-24 mb-5' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter new password' />


                            <br></br>


                            <input className='ml-24 mb-5' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm new password' />


                            <br></br>


                            <input className='ml-24 mb-5' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />

                            <br></br>

                            <div className='ml-24'>
                                <label className='text-sm'>
                                    <input className='mr-2' type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                                    I'm an Expert
                                </label>
                            </div>

                            <br></br>

                            <div className='ml-24'>
                                <label className='text-sm'>
                                    <input className='mr-2' type="checkbox" checked={termsAgreed} onChange={() => setTermsAgreed(!termsAgreed)} />
                                    I'm an organisation in Africa
                                </label>
                            </div>
                            <br></br>
                        </>
                    )}

                    <button type="submit" className='ml-24' style={buttonStyle}>{isLogin ? 'Login' : 'Join PANDA'}</button>
                </form>

            </OutlinedDome>

        </div >
    );
};

export default AuthForm;
