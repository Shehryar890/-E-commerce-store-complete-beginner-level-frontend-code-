import React from 'react';

const Image = () => {
    return (
        <div className="relative w-full h-96 mt-40">
            {/* Image */}
            <img 
                src="/pexels-photo-19599227.webp" 
                alt="Descriptive alt text" 
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Blur Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 w-full h-full"></div>

            {/* Move Button to Right with White Text */}
            <div className="absolute inset-0  right-40 flex items-center justify-end pr-12">
                <a
                    href="#shop" 
                    className="relative group text-white text-4xl font-bold py-4 px-8 hover:underline transition-all"
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default Image;
