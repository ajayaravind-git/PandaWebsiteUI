// Navbar.js

import React, { useState } from 'react';

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
                    <a href="/" className="text-black text-sm">Home</a>
                    <a href="/about" className="text-black text-sm">About</a>
                    <a href="/services" className="text-black text-sm">Services</a>
                    <a href="/portfolio" className="text-black text-sm">Portfolio</a>
                    <a href="/contact" className="text-black text-sm">Contact</a>
                    <a href="/blog" className="text-black text-sm">Blog</a>
                    <a href="/faq" className="text-black text-sm">FAQ</a>
                    <a href="/login" className="text-black text-sm">Login</a>
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
                            <a href="/" className="block text-black text-sm">Home</a>
                            <a href="/about" className="block text-black text-sm">About</a>
                            <a href="/services" className="block text-black text-sm">Services</a>
                            <a href="/portfolio" className="block text-black text-sm">Portfolio</a>
                            <a href="/contact" className="block text-black text-sm">Contact</a>
                            <a href="/blog" className="block text-black text-sm">Blog</a>
                            <a href="/faq" className="block text-black text-sm">FAQ</a>
                            <a href="/login" className="block text-black text-sm">Login</a>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
