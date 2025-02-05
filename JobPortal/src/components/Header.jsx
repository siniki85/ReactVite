import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="bg-primary text-white py-4 px-6 md:px-12 font-poppins">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold">
                        <Link to="/">Superio</Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex space-x-6 text-lg font-inter">
                        <a href="#" className="hover:text-secondary transition flex items-center">
                            Find Jobs <FaChevronDown className="ml-1 text-sm" />
                        </a>
                        <a href="#" className="hover:text-secondary transition flex items-center">
                            Employers <FaChevronDown className="ml-1 text-sm" />
                        </a>
                        <a href="#" className="hover:text-secondary transition">
                            Blog
                        </a>
                        <a href="#" className="hover:text-secondary transition">
                            About
                        </a>
                    </nav>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-primary transition">
                            <Link to="/login">Login/Register</Link>
                        </button>
                        <button className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition">
                            Add Job
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
