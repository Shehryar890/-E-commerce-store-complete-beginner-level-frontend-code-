import React, { useState, useEffect } from 'react';
import { IoSearch, IoClose } from 'react-icons/io5'; // Import the close icon
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsAction } from '../../store/mainstore'; // Adjust the import path as needed

const Search = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const searchFilteredProducts = useSelector(state => state.products.filteredProducts);
    const isOpen = useSelector(state => state.products.isOpen);

    useEffect(() => {
        dispatch(productsAction.setSearchQuery(query));
    }, [query, dispatch]);

    const handleChange = (e) => {
        setQuery(e.target.value || '');
    };

    const handleClose = () => {
        dispatch(productsAction.setIsOpen(false)); // Assuming you have this action to close the search
    };

    return (
        <div className={`fixed left-1/2 transform -translate-x-1/2 top-0 w-full max-w-3xl bg-white shadow-lg rounded-lg transition-transform transform ${isOpen ? 'translate-y-[100px] opacity-100' : 'translate-y-[-200px] opacity-0'} duration-500 ease-in-out z-50`}>
            <div className="flex items-center border-b border-gray-200 p-4">
                <IoSearch className="text-gray-500 mr-3" size={24} />
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search for products..."
                    className="flex-1 p-3 text-lg border-none outline-none bg-gray-100 rounded-md"
                />
                <IoClose
                    onClick={handleClose}
                    className="text-gray-500 ml-3 cursor-pointer"
                    size={24}
                />
            </div>
            {query && (
                <ul className="max-h-72 overflow-y-auto mt-2 px-4">
                    {searchFilteredProducts.map(product => (
                        <Link
                            to={`/product-details/${product.id}`}
                            key={product.id}
                            onClick={() => dispatch(productsAction.setSelected(product))}
                        >
                            <li className="flex items-center justify-evenly p-3 bg-gray-50 hover:bg-gray-100 rounded-md mb-2 shadow-sm transition-colors">
                                <img
                                    src={product.cover}
                                    alt={product.productName}
                                    className="w-16 h-16 object-cover rounded-lg mr-4"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.productName}</h3>
                                    <p className="text-gray-600">${product.price}</p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Search;
