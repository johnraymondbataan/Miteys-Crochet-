// import { MdOutlineShoppingCart } from 'react-icons/md';
import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

import Logo from './logo';

export const Adminbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-lg fixed top-0 bg-white w-full py-3 shadow z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />
                {/* Icons for all screen sizes */}
                <div className="flex gap-2 text-gray-500">
                    <p className='text-lg'>Admin</p>
                    <FaRegUserCircle
                        onClick={toggleDropdown}
                        className="h-7 w-7 hover:text-black transition cursor-pointer"
                    />

                    {isOpen && (
                        <div className="absolute top-16 right-1 md:top-14 md:right-5 lg:right-1 xl:right-1 w-24 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a href="/homepage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Homepage
                                </a>
                                <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Dashboard
                                </a>
                                <a href="/feedback" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Feedback
                                </a>
                                <a href="/view" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    User list
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Sign Out
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navbar Routes for smaller screens */}
           
        </div>
    );
};