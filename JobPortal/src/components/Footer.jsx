import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-primary text-white py-8 px-6 md:px-12 font-inter">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold font-poppins">Superio</h2>
                        <p className="opacity-80 text-sm mt-2">
                            Your trusted job portal to find the best opportunities.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="mt-6 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-secondary transition">About</a>
                        <a href="#" className="hover:text-secondary transition">Jobs</a>
                        <a href="#" className="hover:text-secondary transition">Employers</a>
                        <a href="#" className="hover:text-secondary transition">Contact</a>
                    </div>

                    {/* Copyright */}
                    <p className="mt-6 md:mt-0 text-sm opacity-70">&copy; 2025 Superio. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
