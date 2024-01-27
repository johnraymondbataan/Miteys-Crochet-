import { MdOutlineShoppingCart } from 'react-icons/md';
import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { NavbarRoutes } from './navbar-routes';
import Logo from './logo';


export const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" font-sans  text-xl fixed top-0 bg-white w-full py-3 shadow z-50" >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />

                {/* Navbar Routes for medium and larger screens */}
                <div className="hidden md:flex">
                    <NavbarRoutes />
                </div>

                {/* Icons for all screen sizes */}
                <div className="flex gap-3 text-gray-500">
                    <a href="/cart">   <MdOutlineShoppingCart className="h-6 w-6 hover:text-black transition" /></a>
                    <FaRegUserCircle
                        onClick={toggleDropdown}
                        className="h-6 w-6 hover:text-black transition cursor-pointer"
                    />

                    {isOpen && (
                        <div className="absolute top-16 right-1 md:top-14 md:right-5 lg:right-1 xl:right-1 w-24 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                   Profile
                                </a>
                                <a href="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Home
                                </a>
                                <a href="/shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Shop
                                </a>
                                <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    About
                                </a>
                                <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Contact
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Sign Out
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};