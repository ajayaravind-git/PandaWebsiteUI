import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-4 gap-3'>
            <div className='col-span-1'>
                <h3 className='text-left font-medium'>CONTACT</h3>
                <ul className="text-left text-sm">
                    <li>&#8226; Email</li>
                    <li>&#8226; Phone</li>
                    <li>&#8226; Address</li>
                    <li>&#8226; Social Media</li>
                    <li>&#8226; Support</li>
                </ul>
            </div>

            <div className='col-span-1'>
                <h3 className='text-left font-medium'>MISSIONS</h3>
                <ul className="text-left text-sm">

                    <li>&#8226; Exploration</li>
                    <li>&#8226; Achievement</li>
                    <li>&#8226; Innovation</li>
                    <li>&#8226; Collaboration</li>
                    <li>&#8226; Success</li>
                </ul>
            </div>

            <div className='col-span-1'>
                <h3 className='text-left font-medium'>EXPERTS</h3>
                <ul className="text-left text-sm">

                    <li>&#8226; Skills</li>
                    <li>&#8226; Knowledge</li>
                    <li>&#8226; Experience</li>
                    <li>&#8226; Dedication</li>
                    <li>&#8226; Leadership</li>
                </ul>
            </div>

            <div className='col-span-1'>
                <h3 className='text-left font-medium'>LOCATIONS</h3>
                <ul className="text-left text-sm">

                    <li>&#8226; Headquarters</li>
                    <li>&#8226; Branch Offices</li>
                    <li>&#8226; Global Presence</li>
                    <li>&#8226; Facilities</li>
                    <li>&#8226; Accessibility</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
