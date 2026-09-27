// src/components/ContactUs.jsx
import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        review: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Display thank you message on submit
        // Reset form if needed
        setFormData({ name: '', email: '', review: '' });
    };

    return (
        <div className="relative bg-gray-100">
            {/* Full-Size Centered Image with Black Dropfilter */}
            <div className="relative w-full h-96">
                <img 
                    src="./pexels-photo-9850405.webp" 
                    alt="Contact Us Background"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-50" // Black drop filter
                />
                <div className="absolute inset-0 flex items-center justify-center h-[400px]">
                    <h1 className="text-white text-4xl font-bold">Get in Touch</h1>
                </div>
            </div>

            {/* Centered Contact Form */}
            <div className="relative mt-[-100px] max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md z-10 ">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {/* Left Side */}
                    <div className="flex-1 md:w-1/3 bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <h3 className="text-3xl font-semibold mb-2">Headquarters</h3>
                        <p className="mb-4">1234 Main Street, City, Country</p>
                        <h3 className="text-3xl font-semibold mb-2">Write to Us</h3>
                        <p className="mb-4">Email: contact@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    {/* Right Side - Form */}
                    <div className="flex-1 md:w-2/3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">We'd Love to Hear from You!</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Name and Email */}
                            <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                                <div className="flex-1 mb-4 md:mb-0">
                                    <label htmlFor="name" className="block text-lg font-semibold mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className="block text-lg font-semibold mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg p-2"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Review */}
                            <div className="mb-4">
                                <label htmlFor="review" className="block text-lg font-semibold mb-1">Your Review</label>
                                <textarea
                                    id="review"
                                    name="review"
                                    value={formData.review}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full border border-gray-300 rounded-lg p-
2"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Thank You Message */}
                        {submitted && <p className="mt-4 text-green-600 font-semibold">Thanks for sharing your review!</p>}
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
