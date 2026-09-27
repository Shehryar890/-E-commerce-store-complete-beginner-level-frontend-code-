import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ options, isVisible, setVisible }) => {
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleItemClick = (option) => {
        navigate('/');
    };

    const handleMouseEnter = () => {
        setVisible(true); // Show the dropdown when mouse enters
    };

    const handleMouseLeave = () => {
        setVisible(false); // Hide the dropdown when mouse leaves
    };

    return (
        <div
            ref={dropdownRef}
            className={`  md:absolute bg-white    text-lg   text-black py-2 px-4 rounded-lg shadow-xl transform transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 invisible'
            }`}
            style={{ top: '100%', left: 0, width: '200px' }} // Adjusted width and position
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ul className="  md: space-y-2 text-sm      text-lg">
                {options.map((option, index) => (
                    <li 
                        key={index} 
                        className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
                        onClick={() => handleItemClick(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
