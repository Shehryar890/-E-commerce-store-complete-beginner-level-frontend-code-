import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const DealCard = ({ product }) => {
    return (
        <Link
            to={`/shop`}
            className="relative flex flex-col items-center bg-white rounded-lg shadow-lg w-full h-full group"
        >
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 text-4xl text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <AiOutlineHeart />
            </div>
            {/* Product Image */}
            <img
                src={product.cover}
                alt={product.productName}
                className="w-full h-2/3 object-contain bg-stone-200"
            />
            {/* Product Details */}
            <div className="p-4 flex flex-col justify-between h-1/3">
                <h3 className="text-xl font-bold mb-2 truncate">{product.productName}</h3>
                <p className="text-gray-500 text-2xl font-bold text-red-600 mb-2">
                    ${product.price}
                </p>
                <p className="text-lg text-gray-700 mb-4">{product.description}</p>
         
                {product.sale && !product.soldOut && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                        Sale
                    </span>
                )}
            </div>
        </Link>
    );
};

export default DealCard;
