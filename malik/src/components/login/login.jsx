import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        navigate('/');
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        navigate('/');
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
            <div className="w-[900px] h-[800px] p-8">
                <h2 className="text-5xl font-bold mb-6 mt-10 text-black text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>
                {isLogin ? (
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="loginEmail" className="block text-lg font-bold text-black text-lg">Email</label>
                            <input
                                type="email"
                                id="loginEmail"
                                name="email"
                                value={loginData.email}
                                onChange={handleLoginChange}
                                required
                                className="mt-1 block w-full h-14 px-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="loginPassword"
                                name="password"
                                value={loginData.password}
                                onChange={handleLoginChange}
                                required
                                className="mt-1 block w-full px-3 h-14 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                        >
                            Login
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleSignupSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="signupEmail"
                                name="email"
                                value={signupData.email}
                                onChange={handleSignupChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="signupPassword"
                                name="password"
                                value={signupData.password}
                                onChange={handleSignupChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="signupConfirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                id="signupConfirmPassword"
                                name="confirmPassword"
                                value={signupData.confirmPassword}
                                onChange={handleSignupChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
                        >
                            Sign Up
                        </button>
                    </form>
                )}
                <div className="mt-4 text-center">
                    {isLogin ? (
                        <p className="text-sm text-gray-600">
                            Don't have an account? 
                            <button
                                onClick={() => setIsLogin(false)}
                                className="text-indigo-600 hover:text-indigo-700 ml-1"
                            >
                                Sign Up
                            </button>
                        </p>
                    ) : (
                        <p className="text-sm text-gray-600">
                            Already have an account? 
                            <button
                                onClick={() => setIsLogin(true)}
                                className="text-indigo-600 hover:text-indigo-700 ml-1"
                            >
                                Login
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginSignupPage;
