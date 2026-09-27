import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram, FaTwitter } from 'react-icons/fa'; 
// Import icons
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-12 mt-36">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
                {/* MrMalik Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">MrMalik</h2>
                    <p className="mb-6 text-gray-700 text-xl">
                        Welcome to MrMalik, where we offer high-quality products and exceptional service. For any inquiries, feel free to reach out to us!
                    </p>
                    <p className="mb-3 text-xl">
                        <span className="font-semibold">Phone:</span> +123 456 7890
                    </p>
                    <p className="mb-3 text-xl">
                        <span className="font-semibold">Hours:</span>
                    </p>
                    <ul className="text-gray-600 text-xl">
                        <li>Monday - Friday: 8:00 AM - 3:00 PM</li>
                        <li>Saturday - Sunday: 9:00 AM - 12:00 PM</li>
                    </ul>
                </div>

                {/* Sign Up Section */}
                <div className="flex flex-col items-start">
                    <h2 className="text-4xl font-bold mb-6">Sign Up</h2>
                    <p className="mb-6 text-gray-700 text-xl">
                        Enter your email to stay updated with our latest offers and products.
                    </p>
                    <div className="flex w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-6 py-4 rounded-l-md w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 text-xl"
                        />
                        <button className="px-6 py-4 bg-black   w-full text-white font-bold rounded-r-md hover:bg-red-600 transition-colors text-xl">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-300 pt-6 text-center text-gray-600 flex flex-col items-center">
                <p className="text-xl">&copy; {new Date().getFullYear()} MrMalik. All rights reserved.</p>
                <div className="mt-4 flex space-x-6">
                    <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-3xl">
                        <FaFacebookF />
                </Link>
                    <Link to="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 text-3xl">
                        <FaPinterestP />
                    </Link>
                    <Link to ="https://www.instagram.com/_sherymalik_/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-3xl">
                        <FaInstagram />
                       </Link>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-3xl">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
