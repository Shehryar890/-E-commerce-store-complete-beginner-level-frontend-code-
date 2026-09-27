// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/mainstore';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        country: '',
        street: '',
        town: '',
        postcode: '',
        zip: '',
        company: ''
    });
    
    const [errors, setErrors] = useState({});
    const [agreed, setAgreed] = useState(false); // To handle the terms and conditions checkbox
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPrice = useSelector(state => state.cart.totalPrice); // Get total price from Redux store

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setAgreed(e.target.checked);
    };

    const validateForm = () => {
        const { name, email, address, phone, country, street, town, postcode, zip } = formData;
        const newErrors = {};

        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!address) newErrors.address = 'Address is required';
        if (!phone) newErrors.phone = 'Phone number is required';
        if (!country) newErrors.country = 'Country is required';
        if (!street) newErrors.street = 'Street is required';
        if (!town) newErrors.town = 'Town is required';
        if (!postcode) newErrors.postcode = 'Postcode is required';
        if (!zip) newErrors.zip = 'ZIP code is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0 && agreed; // Ensure terms are agreed
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform checkout actions, e.g., dispatching an action
            dispatch(cartActions.clearCart());
            navigate('/'); // Redirect to a thank-you page or similar
        }
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className=" relative group  text-4xl font-bold mb-8 text-center">Checkout</h2>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Address */}
                    <div>
                        <label htmlFor="address" className="block text-lg font-semibold mb-1">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-lg font-semibold mb-1">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Country */}
                    <div>
                        <label htmlFor="country" className="block text-lg font-semibold mb-1">Country</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        >
                            <option value="">Select your country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="GB">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="ES">Spain</option>
                            <option value="NL">Netherlands</option>
                            <option value="SE">Sweden</option>
                            <option value="NO">Norway</option>
                            <option value="FI">Finland</option>
                            <option value="DK">Denmark</option>
                            <option value="BE">Belgium</option>
                            <option value="CH">Switzerland</option>
                            <option value="AT">Austria</option>
                            <option value="IE">Ireland</option>
                            <option value="PL">Poland</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="HU">Hungary</option>
                            <option value="RO">Romania</option>
                            <option value="BG">Bulgaria</option>
                            <option value="GR">Greece</option>
                            <option value="PT">Portugal</option>
                            <option value="TR">Turkey</option>
                            <option value="IL">Israel</option>
                            <option value="ZA">South Africa</option>
                            <option value="JP">Japan</option>
                            <option value="CN">China</option>
                            <option value="IN">India</option>
                            <option value="KR">South Korea</option>
                            <option value="SG">Singapore</option>
                            <option value="MY">Malaysia</option>
                            <option value="PH">Philippines</option>
                            <option value="TH">Thailand</option>
                            {/* Add more countries as needed */}
                        </select>
                        {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country}</p>}
                    </div>

                    {/* Street */}
                    <div>
                        <label htmlFor="street" className="block text-lg font-semibold mb-1">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.street && <p className="text-red-600 text-sm mt-1">{errors.street}</p>}
                    </div>

                    {/* Town */}
                    <div>
                        <label htmlFor="town" className="block text-lg font-semibold mb-1">Town</label>
                        <input
                            type="text"
                            id="town"
                            name="town"
                            value={formData.town}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.town && <p className="text-red-600 text-sm mt-1">{errors.town}</p>}
                    </div>

                    {/* Postcode */}
                    <div>
                        <label htmlFor="postcode" className="block text-lg font-semibold mb-1">Postcode</label>
                        <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.postcode && <p className="text-red-600 text-sm mt-1">{errors.postcode}</p>}
                    </div>

                    {/* ZIP */}
                    <div>
                        <label htmlFor="zip" className="block text-lg font-semibold mb-1">ZIP Code</label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                        {errors.zip && <p className="text-red-600 text-sm mt-1">{errors.zip}</p>}
                    </div>

                    {/* Company Name (Optional) */}
                    <div>
                        <label htmlFor="company" className="block text-lg font-semibold mb-1">Company Name (Optional)</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                </form>

                {/* Summary */}
                <div className="flex-none w-full md:w-1/3 space-y-4 h-48">
                    {/* Total Price */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h3 className="text-3xl font-bold mb-4 text-red-700">Order Summary</h3>
                        <p className="text-2xl font-bold mb-4">Total Price: <span className="text-xl">${totalPrice.toFixed(2)}</span></p>
                        <p className="text-lg mb-4">This is a description or some random text about the checkout process.</p>
                        
                        {/* Terms and Conditions */}
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={agreed}
                                onChange={handleCheckboxChange}
                                className="mr-2  3xl"
                            />
                            <label htmlFor="terms" className="text-1xl font-bold">I agree to the terms and conditions</label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
