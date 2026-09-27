import React, { useState } from 'react';
import { IoStarOutline, IoStar } from 'react-icons/io5';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [showNotification, setShowNotification] = useState(false);
  const [rating, setRating] = useState(0); // State to track rating

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setShowNotification(true); // Show notification
    setTimeout(() => {
      setShowNotification(false); // Hide notification after 3 seconds
    }, 3000);
  };

  const handleStarClick = (index) => {
    setRating(index + 1); // Update rating based on clicked star
  };

  return (
    <div className="relative flex flex-col items-center mt-8 p-4 border-t border-gray-200">
      {/* Notification Popup */}
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-center p-4 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
          showNotification ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p>Review Submitted</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-4">
        <button
          className={`px-6 py-2 text-lg font-semibold ${
            activeTab === 'details' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => handleTabClick('details')}
        >
          Details
        </button>
        <button
          className={`px-6 py-2 text-lg font-semibold ${
            activeTab === 'review' ? 'border-b-2 border-black' : ''
          }`}
          onClick={() => handleTabClick('review')}
        >
          Review
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full max-w-4xl">
        {activeTab === 'details' ? (
          <div className="text-lg text-gray-600 text-center">
            <p>
              Discover the excellence of this product, meticulously designed with the finest materials. Our product promises exceptional quality and durability, ensuring you receive value for your investment. From its innovative features to its sleek design, every aspect is crafted to enhance your experience. Enjoy unparalleled performance and reliability that stands out in its category. Experience the best of what we offer and make an informed choice with confidence. Your satisfaction is our priority.
            </p>
          </div>
        ) : (
          <div className="text-lg text-gray-600 text-center">
            <h2 className="text-2xl font-bold mb-4">Review</h2>
            <p className="mb-4">There are no reviews yet. Be the first to write one!</p>
            <p className="mb-6">Your email will not be published.</p>

            {/* Rating Stars */}
            <div className="flex justify-center gap-2 mb-4">
              {/* First Star */}
              <IoStarOutline
                className={`text-2xl ${rating >= 1 ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleStarClick(0)}
              />

              {/* Second Star */}
              <IoStarOutline
                className={`text-2xl ${rating >= 2 ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleStarClick(1)}
              />

              {/* Third Star */}
              <IoStarOutline
                className={`text-2xl ${rating >= 3 ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleStarClick(2)}
              />

              {/* Fourth Star */}
              <IoStarOutline
                className={`text-2xl ${rating >= 4 ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleStarClick(3)}
              />

              {/* Fifth Star */}
              <IoStarOutline
                className={`text-2xl ${rating >= 5 ? 'text-yellow-500' : 'text-gray-400'}`}
                onClick={() => handleStarClick(4)}
              />
            </div>

            {/* Review Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <textarea
                placeholder="Write your review here..."
                className="p-4 border border-gray-300 rounded-lg h-40"
              />
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 border border-gray-300 rounded-lg flex-1"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 border border-gray-300 rounded-lg flex-1"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded-lg text-lg hover:bg-red-700"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
