import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart, AiOutlineAppstore, AiOutlineAppstoreAdd, AiOutlineEye } from 'react-icons/ai';
import { productsAction } from '../../store/mainstore';
import { previewAction, wishlistActions, cartActions } from '../../store/mainstore'; // Import cart actions

const ProductList = () => {
    

    const products = useSelector(state => state.products.filteredProducts || []);
    const wishlist = useSelector(state => state.wishlist.wishlist);
    const cart = useSelector(state => state.cart.cart); // Get cart from Redux state
    const [currentPage, setCurrentPage] = useState(1);
    const [viewStyle, setViewStyle] = useState('grid'); // State for view style
    const itemsPerPage = 9;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const dispatch = useDispatch();

    const handleLink = (product) => {
        dispatch(productsAction.setSelected(product));
    };

    const handleOpenModal = (product) => {
        dispatch(previewAction.openFunc(product));
    };

    const isInWishlist = (product) => {
        return wishlist.some((item) => item.id === product.id);
    };

    const isInCart = (product) => {
        return cart.some((item) => item.id === product.id); // Check if the product is in the cart
    };

    const handleWishlistToggle = (product) => {
        if (isInWishlist(product)) {
            dispatch(wishlistActions.removeFromWishlist(product.id));
        } else {
            dispatch(wishlistActions.addToWishlist(product));
        }
    };

    // Function to handle adding/removing product from cart
    const handleCartToggle = (product) => {
        if (isInCart(product)) {
            dispatch(cartActions.removeFromCart(product.id)); // If in cart, remove it
        } else {
            dispatch(cartActions.addToCart(product)); // If not in cart, add it
        }

                









    };

    const currentProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="container mx-auto px-4">
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

            <div className={`flex flex-col gap-8 ${viewStyle === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}`}>
                {currentProducts.length === 0 ? (
                    <p>No products available.</p>
                ) : (
                    currentProducts.map((product) => (
                        <div key={product.id} className={`relative ${viewStyle === 'list' ? 'flex flex-row items-center' : ''} bg-white rounded-lg shadow-lg overflow-hidden group`}>
                            <div className={`relative ${viewStyle === 'list' ? 'w-1/3' : 'w-full'}`}>
                                <Link to={`/product-details/${product.id}`} onClick={() => handleLink(product)}>
                                    <img src={product.cover} alt={product.productName} className={`w-full h-full object-cover bg-stone-200 ${viewStyle === 'list' ? 'rounded-l-lg' : 'transition-opacity duration-300 group-hover:opacity-70'}`} />
                                </Link>
                                <div className={`absolute top-2 right-2 flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                    <div onClick={() => handleWishlistToggle(product)} className="text-4xl text-red-600 cursor-pointer">
                                        {isInWishlist(product) ? <AiFillHeart /> : <AiOutlineHeart />}
                                    </div>
                                    <div className="text-3xl text-black cursor-pointer" onClick={() => handleOpenModal(product)}>
                                        <AiOutlineEye />
                                    </div>
                                </div>
                            </div>
                            <div className={`p-4 ${viewStyle === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 truncate">{product.productName}</h3>
                                    <p className="text-gray-500 text-2xl font-bold text-red-600 mb-2">${product.price}</p>
                                    <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                                </div>
                                <button 
                                    className="w-full bg-slate-950 text-white text-xl py-2 px-4 rounded-lg hover:bg-red-600 transition-colors" 
                                    onClick={() => handleCartToggle(product)}
                                >
                                    {isInCart(product) ? 'Remove from Cart' : 'Add to Cart'} {/* Button text changes based on cart status */}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="mx-2 px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-lg">
                    Previous
                </button>
                {[...Array(totalPages).keys()].map(pageNumber => (
                    <button key={pageNumber} onClick={() => setCurrentPage(pageNumber + 1)} className={`mx-1 px-4 py-2 rounded-lg text-lg font-bold ${currentPage === pageNumber + 1 ? 'bg-black text-white' : 'bg-white text-black border border-black hover:bg-gray-200'}`}>
                        {pageNumber + 1}
                    </button>
                ))}
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="mx-2 px-4 py-2 bg-orange-500 text-black rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-lg">
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;
