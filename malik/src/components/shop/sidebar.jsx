import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsAction }  from '../../store/mainstore';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { category, color, priceRange } = useSelector(state => state.products);

    const handleCategoryChange = (category) => {
        dispatch(productsAction.filterByCategory(category));
    };

    const handleColorChange = (color) => {
        dispatch(productsAction.filterByColor(color));
    };

    const handlePriceChange = (priceRange) => {
        dispatch(productsAction.filterByPrice(priceRange));
    };

    const handleClearFilters = () => {
        dispatch(productsAction.clearFilters());
    };

    return (
        <div className="w-1/4 bg-transparent shadow-lg p-6 flex flex-col space-y-10 items-center">
            <button onClick={handleClearFilters} className="mb-6 p-2 bg-red-500 font-bld text-2xl  hover:bg-red-700 text-white rounded">Clear Filters</button>

            <div className="categories w-full">
                <h1 className="text-2xl font-bold mb-6 bg-gray-200 w-full py-3 text-center">Categories</h1>
                <div className="flex flex-col space-y-6 items-start">
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="category"
                            checked={category === 'Men'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handleCategoryChange('Men')}
                        />
                        <span>Men</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="category"
                            checked={category === 'Women'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handleCategoryChange('Women')}
                        />
                        <span>Women</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="category"
                            checked={category === 'Kids'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handleCategoryChange('Kids')}
                        />
                        <span>Kids</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="category"
                            checked={category === 'all'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handleCategoryChange('all')}
                        />
                        <span>All</span>
                    </label>
                </div>
            </div>

            <div className="color w-full">
                <h1 className="text-2xl font-bold mb-6 bg-gray-200 w-full py-3 text-center">Color</h1>
                <div className="flex flex-col space-y-6 items-start">
                    <label className="flex items-center text-3xl">
                        <input
                            type="checkbox"
                            checked={color === 'red'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handleColorChange('red')}
                        />
                        <span>Red</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="checkbox"
                            checked={color === 'blue'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handleColorChange('blue')}
                        />
                        <span>Blue</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="checkbox"
                            checked={color === 'black'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handleColorChange('black')}
                        />
                        <span>Black</span>
                    </label>
                </div>
            </div>

            <div className="price-range w-full">
                <h1 className="text-2xl font-bold mb-6 bg-gray-200 w-full py-3 text-center">Price Range</h1>
                <div className="flex flex-col space-y-6 items-start">
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="priceRange"
                            checked={priceRange === 'under-50'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handlePriceChange('under-50')}
                        />
                        <span>$0 - $50</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="priceRange"
                            checked={priceRange === '51-100'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handlePriceChange('51-100')}
                        />
                        <span>$51 - $100</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="priceRange"
                            checked={priceRange === '101-200'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handlePriceChange('101-200')}
                        />
                        <span>$101 - $200</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="priceRange"
                            checked={priceRange === '201-500'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handlePriceChange('201-500')}
                        />
                        <span>$201 - $500</span>
                    </label>
                    <label className="flex items-center text-3xl">
                        <input
                            type="radio"
                            name="priceRange"
                            checked={priceRange === 'over-500'}
                            className="mr-4 w-6 h-6"
                            onChange={() => handlePriceChange('over-500')}
                        />
                        <span>Over $500</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
