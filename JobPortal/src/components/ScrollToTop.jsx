import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 5 ? setIsVisible(true) : setIsVisible(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div
                onClick={scrollToTop}
                className={`fixed bottom-5 right-5 bg-white text-blue rounded-full p-4 cursor-pointer transition-all transform hover:scale-110 hover:bg-white-600 shadow-lg 
                ${isVisible ? 'opacity-100' : 'opacity-0'}`}  
                style={{ transition: 'opacity 0.3s ease' }}
            >
                <FaArrowUp size={24} />
            </div>
        </>
    );
}

export default ScrollToTop
