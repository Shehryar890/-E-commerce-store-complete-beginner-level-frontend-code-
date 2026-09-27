import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams
import { IoStarSharp, IoStarOutline } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { cartActions, productsAction } from '../../store/mainstore'; // Import actions

const ProductDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selectedProduct);
  const cart = useSelector(state => state.cart.cart);

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleCartToggle = (product) => {
    if (isInCart(product)) {
        dispatch(cartActions.removeFromCart(product.id));
    } else {
        dispatch(cartActions.addToCart(product));
    }
  };

  useEffect(() => {
    if (id) {
      // Set selected product based on ID from URL
      const selectedProduct = products.find(product => product.id === id);
      dispatch(productsAction.setSelected(selectedProduct));
    }
  }, [id, dispatch]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <p className="text-2xl text-gray-700">No product selected.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gray-50">
      {/* Cover Section */}
      <div className="flex flex-col lg:flex-row rounded-lg h-auto max-w-5xl w-full p-8 bg-white shadow-lg border border-gray-200">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center mb-6 lg:mb-0 lg:pr-8">
          <img
            src={product.cover.startsWith('./') ? product.cover.replace('./', '/') : product.cover}
            alt={product.productName}
            className="w-full max-w-sm rounded-lg object-cover border border-gray-300"
            onError={(e) => e.target.src = '/images/placeholder.jpg'}
          />
        </div>
        
        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Product Name */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.productName}</h1>

          {/* Rating and Stock */}
          <div className="flex items-center gap-6 mb-4">
            {/* Rating */}
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) =>
                i < product.rating ? (
                  <IoStarSharp key={i} className="text-2xl" />
                ) : (
                  <IoStarOutline key={i} className="text-2xl" />
                )
              )}
            </div>
            
            {/* Stock */}
            <span
              className={`text-lg font-semibold ${product.stock === 'inStock' ? 'text-green-600' : 'text-red-600'}`}
            >
              {product.stock === 'inStock' ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-red-600 mb-4">{`$${product.price}`}</p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-6">
            <button 
              className="w-full bg-slate-950 text-white text-xl py-2 px-4 rounded-lg hover:bg-red-600 transition-colors" 
              onClick={() => handleCartToggle(product)}
            >
              {isInCart(product) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg">
              Add to Wishlist
            </button>
          </div>
          <p className="text-lg font-semibold mb-6">Fabric :<span className='text-red-600 text-2xl font-bold'>{product.fabric}</span></p>
          <p className="text-3xl font-bold text-black mb-6">Sku: <span className='text-lg font-semibold'>{product.sku}</span></p>
          
          {/* Share Buttons */}
          <div className="flex gap-4 text-xl">
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 cursor-pointer hover:text-blue-700 transition-colors" />
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 cursor-pointer hover:text-blue-500 transition-colors" />
            <FontAwesomeIcon icon={faPinterestP} className="text-red-600 cursor-pointer hover:text-red-700 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
