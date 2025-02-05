import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaCloudUploadAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <section className="bg-primary text-white min-h-screen flex flex-col justify-center items-center px-6 md:px-12 font-poppins">
                {/* Hero Content */}
                <div className="text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Find Your <span className="text-secondary">Perfect Job</span> Match
                    </h1>
                    <p className="text-lg md:text-xl opacity-80 mt-2 font-inter">
                        Find Jobs, Employment & Career Opportunities
                    </p>
                </div>

                {/* Search Bar */}
                <div className="bg-white p-4 rounded-lg shadow-lg mt-6 flex flex-col md:flex-row w-full max-w-3xl">
                    <div className="flex items-center border-b md:border-b-0 md:border-r px-3 py-2 w-full">
                        <FaSearch className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Job title, keywords..."
                            className="w-full outline-none text-gray-700 font-inter"
                        />
                    </div>
                    <div className="flex items-center px-3 py-2 w-full">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Job locations"
                            className="w-full outline-none text-gray-700 font-inter"
                        />
                    </div>
                    <button className="bg-secondary text-primary px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
                        Find Jobs
                    </button>
                </div>

                {/* Popular Searches */}
                <p className="mt-4 text-sm opacity-80">
                    Popular Searches: <span className="text-secondary">Designer, Developer, Web, iOS, PHP, Senior, Engineer</span>
                </p>

                {/* Upload CV Section */}
                <div className="mt-8 flex items-center space-x-2">
                    <FaCloudUploadAlt className="text-xl text-secondary" />
                    <span className="font-inter">Upload Your CV</span>
                </div>
            </section>
        </>
    )
}

export default Home
