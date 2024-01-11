// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <nav className="bg-transparent p-2">
            <div className="container mx-auto flex justify-between items-center">

                {/* Navbar options */}
                <div className="hidden md:flex space-x-10 order-1">
                    <Link to="/" className="text-black text-sm hover:underline">Home</Link>
                    <Link to="/about" className="text-black text-sm hover:underline">About</Link>
                    <Link to="/services" className="text-black text-sm hover:underline">Services</Link>
                    <Link to="/portfolio" className="text-black text-sm hover:underline">Portfolio</Link>
                    <Link to="/contact" className="text-black text-sm hover:underline">Contact</Link>
                    <Link to="/blog" className="text-black text-sm hover:underline">Blog</Link>
                    <Link to="/faq" className="text-black text-sm hover:underline">FAQ</Link>
                    <Link to="/login" className="text-black text-sm hover:underline">Login</Link>
                </div>

                {/* Mobile navigation */}
                <div className="md:hidden order-2 ml-auto">
                    <button className="text-black focus:outline-none" onClick={toggleMobileNav}>
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 8h16" className="stroke-current"></path>
                            <path d="M4 12h16" className="stroke-current mt-2"></path>
                            <path d="M4 16h16" className="stroke-current mt-2"></path>
                        </svg>
                    </button>

                    {/* Mobile navigation links */}
                    {mobileNavOpen && (
                        <div className="mt-2">
                            <Link to="/" className="block text-black text-sm hover:underline">Home</Link>
                            <Link to="/about" className="block text-black text-sm hover:underline">About</Link>
                            <Link to="/services" className="block text-black text-sm hover:underline">Services</Link>
                            <Link to="/portfolio" className="block text-black text-sm hover:underline">Portfolio</Link>
                            <Link to="/contact" className="block text-black text-sm hover:underline">Contact</Link>
                            <Link to="/blog" className="block text-black text-sm hover:underline">Blog</Link>
                            <Link to="/faq" className="block text-black text-sm hover:underline">FAQ</Link>
                            <Link to="/login" className="block text-black text-sm hover:underline">Login</Link>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
