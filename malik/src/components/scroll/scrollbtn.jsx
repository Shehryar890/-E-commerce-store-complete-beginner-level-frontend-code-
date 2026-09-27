import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Scroll = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4  hover:bg-black text-lg   bg-red-600 text-white p-5   shadow-md ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
};

export default Scroll;
