import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiOutlineAppstore, AiOutlineAppstoreAdd, AiOutlineEye } from 'react-icons/ai';

const ProductList = () => {
    const products = useSelector(state => state.products.filteredProducts || []);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewStyle, setViewStyle] = useState('grid'); // State for view style
    const itemsPerPage = 9;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="container mx-auto px-4">
            {/* Icons to toggle view styles */}
            <div className="flex justify-center space-x-4 mb-6">
                <AiOutlineAppstore
                    onClick={() => setViewStyle('grid')}
                    className={`text-3xl cursor-pointer ${viewStyle === 'grid' ? 'text-black' : 'text-gray-500'}`}
                />
                <AiOutlineAppstoreAdd
                    onClick={() => setViewStyle('list')}
                    className={`text-3xl cursor-pointer ${viewStyle === 'list' ? 'text-black' : 'text-gray-500'}`}
                />
            </div>

            {/* Conditional styling based on viewStyle */}
            <div className={`flex flex-col gap-8 ${viewStyle === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
                {currentProducts.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className={`relative ${viewStyle === 'list' ? 'flex flex-row items-center' : ''} bg-white rounded-lg shadow-lg overflow-hidden group`}
                        >
                            {/* Image Section */}
                            <div className={`relative ${viewStyle === 'list' ? 'w-1/3' : 'w-full'}`}>
                                <img
                                    src={product.cover}
                                    alt={product.productName}
                                    className={`w-full h-full object-cover bg-stone-200 ${viewStyle === 'list' ? 'rounded-l-lg' : 'transition-opacity duration-300 group-hover:opacity-70'}`}
                                />
                                {/* Container for Heart and Eye Icons */}
                                <div className={`absolute top-2 right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    {/* Heart Icon on Image */}
                                    <div className="text-4xl text-red-600 cursor-pointer">
                                        <AiOutlineHeart />
                                    </div>
                                    {/* Eye Icon on Image */}
                                    <div className="text-3xl text-black cursor-pointer">
                                        <AiOutlineEye />
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className={`p-4 ${viewStyle === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 truncate">{product.productName}</h3>
                                    <p className="text-gray-500 text-2xl font-bold text-red-600 mb-2">
                                        ${product.price}
                                    </p>
                                    <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                                </div>
                                <button className="w-full bg-slate-950 text-white text-xl py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="flex justify-center items-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mx-2 px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber + 1)}
                        className={`mx-1 px-4 py-2 rounded-lg text-lg font-bold ${
                            currentPage === pageNumber + 1
                                ? 'bg-black text-white'
                                : 'bg-white text-black border border-black hover:bg-gray-200'
                        }`}
                    >
                        {pageNumber + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="mx-2 px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;
