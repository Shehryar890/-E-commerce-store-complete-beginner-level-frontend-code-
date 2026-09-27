import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick'; // Correct import
import FeatureCard from './featureCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
    const products = useSelector(state => state.trending.trending || []);

    const sliderSettings = {
        slidesToShow: 4,        // Show 4 slides at a time
        slidesToScroll: 1,      // Scroll one slide at a time
        infinite: true,         // Enable infinite scrolling
        arrows: true,           // Show navigation arrows
        dots: true,             // Show pagination dots
        speed: 500,             // Animation speed in milliseconds
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 3000,    // Autoplay speed in milliseconds
        pauseOnHover: true,     // Pause autoplay on hover
        cssEase: 'ease-in-out', // Animation easing function
    };

    return (
        <div className="mt-20 px-4">
            <Slider {...sliderSettings} className="w-full">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="px-2">
                            <FeatureCard product={product} />
                        </div>
                    ))
                ) : (
                    <p className="text-center w-full">No featured products available.</p>
                )}
            </Slider>
        </div>
    );
};

export default Featured;
