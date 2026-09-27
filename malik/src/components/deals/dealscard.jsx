import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const DealCard = ({ product }) => {

    return (

        <Link  
            to={`/shop`}
            className="relative flex flex-col bg-white rounded-lg shadow-lg w-[400px] h-[800px] group overflow-hidden"
        >
            {/* Heart Icon */}
            <div className="absolute top-3 right-3 text-3xl text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <AiOutlineHeart />
            </div>
            {/* Product Image */}
            <img
                src={product.cover}
                alt={product.productName}
                className="w-full h-3/4 object-contain  bg-stone-200"
            />
            {/* Product Details */}
            <div className="p-4 flex flex-col justify-between h-1/4 bg-white">
                <h3 className="text-lg font-bold mb-2 truncate">{product.productName}</h3>
                <p className="text-gray-500 text-xl font-bold text-red-600 mb-2">
                    ${product.price}
                </p>
                <p className="text-sm text-gray-700 mb-4 truncate">{product.description}</p>
   
                {product.sale && !product.soldOut && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        Sale
                    </span>
                )}
            </div>
        </Link>
    );
};

export default DealCard;
