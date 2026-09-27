import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Import Swiper modules directly from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules';

// Create settings for Swiper
const settings = {
    direction: 'vertical',
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: { delay: 3000 },
    pagination: {
        clickable: true,
        el: '.custom-swiper-pagination',
        renderBullet: (index, className) => `<span class="${className}"></span>`,
    },
};

const SliderImage = () => {
    const promotionItems = useSelector(state => state.img.promotions);

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <Swiper {...settings} modules={[Pagination, Autoplay]} className="w-full h-full">
                {promotionItems.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col md:flex-row items-center justify-center p-2 md:p-6  text-black"
                    >
                        {/* Text Section */}
                        <div className="tags w-full md:w-1/2 p-2 md:p-6 text-black text-center md:text-left">
                            <h3 className="text-xl md:text-5xl font-bold mb-1 md:mb-4">
                                {item.title}
                            </h3>
                            <p className="text-sm md:text-3xl mb-1 md:mb-2 leading-tight">
                                {item.description}
                            </p>
                            <p className="text-sm md:text-3xl mb-1 md:mb-2 leading-tight">
                                {item.delivery}
                            </p>
                            <p className="text-sm md:text-3xl leading-tight">
                                {item.shopNow}
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="flex justify-center items-center w-[200px] h-[300px] md:w-[700px] md:h-[900px]">
                            <img
                                src={item.cover}
                                alt={item.title}
                                className="object-contain w-full h-full"
                                style={{ backgroundColor: 'transparent', border: 'none' }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Custom pagination styling */}
            <div className="custom-swiper-pagination"></div>
        </div>
    );
};

export default SliderImage;
