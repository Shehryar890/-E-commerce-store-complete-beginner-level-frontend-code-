import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// Import delete icon
import { wishlistActions } from '../../store/mainstore';
import { MdDelete } from "react-icons/md";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist); // Access the wishlist state
  const dispatch = useDispatch();

  const handleWishlistToggle = (product) => {
    dispatch(wishlistActions.removeFromWishlist(product.id)); // Remove from wishlist
  };

  if (wishlist.length === 0) {
    return <p className="text-center mt-10 text-xl">Your wishlist is empty.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-7xl font-bold text-center mb-10">Your Wishlist</h2>

      {/* Center the wishlist container */}
      <div className="flex flex-col space-y-6 items-center">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-2/3 p-6 rounded-lg  border-t-2"
          >
            {/* Use flexbox for row layout */}
            <div className="flex flex-row items-center justify-between space-x-4">
              {/* Product Image */}
              <Link to={`/product-details/${product.id}`} className="w-1/4">
                <img
                  src={product.cover}
                  alt={product.productName}
                  className="w-full h-48 object-contain rounded-lg"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-1 text-left sm:ml-6">
                <h3 className="text-2xl font-bold">{product.productName}</h3>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-gray-700">${product.price}</p>

              {/* Stock Status */}
              <p
                className={`text-lg font-bold ${
                  product.inStock ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>

              {/* Actions (Add to cart and Remove from wishlist) */}
              <div className="flex space-x-4 items-center">
                <button className="bg-black w-[200px] text-white px-4 py-2 rounded-lg hover:bg-red-600">
                  Add to Cart
                </button>
                <div
                  onClick={() => handleWishlistToggle(product)}
                  className="cursor-pointer text-gray-600 text-3xl hover:text-red-600"
                >
                  <MdDelete  className='text-red-700 bg-none text-3xl'    /> {/* Delete icon */}
                </div>
              </div>
            </div>

            {/* Bottom border for each wishlist item */}
            <hr className="mt-6 border-t-2 border-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
