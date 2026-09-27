// src/components/CartPreview.jsx
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/mainstore';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const CartPreview = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice, isOpen } = useSelector(state => state.cart);
    const previewRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(previewRef.current, 
                { opacity: 0, x: 300 }, 
                { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
            );
        } else {
            gsap.to(previewRef.current, 
                { opacity: 0, x: 300, duration: 0.5, ease: 'power2.in' }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        dispatch(cartActions.closeCart());
    };

    return (
        <div 
            ref={previewRef} 
            className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-6 z-50 transition-transform duration-500"
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Cart</h2>
                <AiOutlineClose 
                    className="text-3xl cursor-pointer hover:text-red-600" 
                    onClick={handleClose} 
                />
            </div>
            <div className="overflow-y-auto h-[calc(100%-80px)]">
                {cart.length === 0 ? (
                    <p className="text-xl text-center">Your cart is empty.</p>
                ) : (
                    <div>
                        {cart.map(item => (
                            <div 
                                key={item.id} 
                                className="flex items-center justify-between border-b py-4 mb-4"
                            >
                                <img 
                                    src={item.cover} 
                                    alt={item.productName} 
                                    className="w-24 h-24 object-contain rounded-lg"
                                />
                                <div className="ml-6">
                                    <h3 className="text-xl font-bold">{item.productName}</h3>
                                    <p className="text-lg text-gray-700">${item.price}</p>
                                    <p className="text-lg text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <button
                                    className="text-red-600 hover:text-red-800 text-lg"
                                    onClick={() => dispatch(cartActions.removeFromCart(item.id))}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="mt-6">
                            <p className="text-2xl font-bold">Total: ${totalPrice}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-end items-center">
            <div className="absolute bottom-6         right-6 left-6">
                     <Link  to="/cart" ><button
                    className="w-full py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => {/* Add checkout functionality here */}}
                >
                    Checkout
                </button>
                </Link>   
             <Link  to="/cart" ><button
                    className="w-full py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => {/* Add checkout functionality here */}}
                >
                    Checkout
                </button>
                </Link>   
            </div>
            <div className="absolute bottom-6 right-6 left-6">
                     <Link  to="/cart" ><button
                    className="w-full py-3 bg-black text-white text-xl font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
                    onClick={() => {/* Add checkout functionality here */}}
                >
                ViewCart
                </button>
                </Link>   
             <Link  to="/checkout" ><button
                    className="w-full py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => {/* Add checkout functionality here */}}
                >
                    Checkout
                </button>
                </Link>   
            </div>
            </div>
        </div>
    );
};

export default CartPreview;
