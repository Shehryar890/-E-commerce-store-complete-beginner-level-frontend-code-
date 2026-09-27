import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { previewAction } from '../../store/mainstore'; // Import previewAction
import { AiOutlineClose } from 'react-icons/ai';

const Preview = () => {
    const dispatch = useDispatch();
    const { isPreview, isProduct } = useSelector(state => state.preview);
    const [show, setShow] = useState(isPreview);

    useEffect(() => {
        setShow(isPreview);
    }, [isPreview]);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            dispatch(previewAction.closeFunc()); // Close the preview modal
        }, 300); // Duration of the transition
    };

    if (!show || !isProduct) {
        return null; // Don't render if not previewing
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                className={`bg-white p-6 rounded-lg shadow-lg relative max-w-screen-lg w-full h-3/4 flex flex-col transition-transform duration-300 ${show ? 'scale-100' : 'scale-90'}`}
            >
                <AiOutlineClose 
                    onClick={handleClose} 
                    className="absolute top-6 right-8 text-3xl cursor-pointer text-gray-700 hover:bg-red-600 rounded text-white" 
                />
                <img
                    src={isProduct.cover}
                    alt={isProduct.productName}
                    className="w-full h-1/2 object-contain bg-slate-400 border-b-2 rounded-t-lg"
                />
                <div className="w-full h-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{isProduct.productName}</h2>
                        <p className="text-red-600 text-3xl font-bold mb-4">${isProduct.price}</p>
                        <p className="text-base text-gray-700 mb-6 font-bold text-6xl">{isProduct.description}</p>
                    </div>
                    <button className="w-full bg-black text-white text-xl py-3 rounded-lg hover:bg-red-600 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Preview;
