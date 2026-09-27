import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import DealCard from './dealscard'; // Ensure this import matches the file name
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Dealsdiv = () => {
    const products = useSelector(state => state.deals || []);

    const sliderSettings = {
        slidesToShow: 3, // Adjust for the number of cards per view
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: 'ease-in-out',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="mt-20 px-4">
            <Slider {...sliderSettings} className="w-full">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="px-4 flex justify-center">
                            <DealCard product={product} />
                        </div>
                    ))
                ) : (
                    <p className="text-center w-full">No deals available.</p>
                )}
            </Slider>
        </div>
    );
};

export default Dealsdiv;
