// src/components/CartPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Use Link for potential product detail navigation
import { cartActions } from '../../store/mainstore'; // Import cart actions
import { MdDelete } from 'react-icons/md'; // Import delete icon
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Import increment and decrement icons

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart); // Access cart state
  const totalPrice = useSelector(state => state.cart.totalPrice); // Access total price
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(cartActions.removeFromCart(productId)); // Remove product from cart
  };

  const handleIncrement = (productId) => {
    dispatch(cartActions.incrementQuantity({ id: productId })); // Increment product quantity
  };

  const handleDecrement = (productId) => {
    dispatch(cartActions.decrementQuantity({ id: productId })); // Decrement product quantity
  };

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-xl">Your cart is empty.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-7xl font-bold text-center mb-10">Your Cart</h2>

      <div className="flex flex-col space-y-6 items-center">
        {cart.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-2/3 p-6 rounded-lg border-t-2"
          >
            <div className="flex flex-row items-center justify-between space-x-4">
              <Link to={`/product-details/${product.id}`} className="w-1/4">
                <img
                  src={product.cover}
                  alt={product.productName}
                  className="w-full h-48 object-contain rounded-lg"
                />
              </Link>

              <div className="flex-1 text-left sm:ml-6">
                <h3 className="text-2xl font-bold">{product.productName}</h3>
                <p className="text-gray-500 text-lg font-bold text-red-600">
                  ${product.price}
                </p>
                <div className="flex  items-center  h-14 space-x-2  bg-slate-600 w-20">
                  <button
                    onClick={() => handleDecrement(product.id)}
                    className="text-white text-xl hover:text-red-600 ml-3"
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="text-3-xl  text-white font-bold ">{product.quantity}</p>
                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="text-white text-xl hover:text-green-600"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <p className="text-lg">Total: ${product.price * product.quantity}</p>
              </div>

              <div className="flex space-x-4 items-center">
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="cursor-pointer text-gray-600 text-3xl hover:text-red-600"
                >
                  <MdDelete className="text-red-700" />
                </button>
              </div>
            </div>

            <hr className="mt-6 border-t-2 border-gray-300" />
          </div>
        ))}

        <div className="text-3xl font-bold mt-10">
          Total Price: ${totalPrice.toFixed(2)}
        </div>

        <div className="mt-10">
          <Link to="/checkout">
            <button className="py-3 px-6 bg-black text-white text-xl font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
            Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
