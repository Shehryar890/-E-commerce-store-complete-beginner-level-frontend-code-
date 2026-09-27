import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAction } from '../../../store/mainstore'; // Import actions for the sidebar
import { HiX } from 'react-icons/hi'; // Close icon
import { Link } from 'react-router-dom'; // Ensure proper imports

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state) => state.open.isOpen);
    const sidebarRef = useRef(null);
    const navItemsRef = useRef([]);

    const handleCloseSidebar = () => {
        dispatch(openAction.onClose());
    };

    const handleLinkClick = () => {
        handleCloseSidebar(); // Close sidebar when any link is clicked
    };

    return (
        <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 w-80 h-full bg-white text-black font-bold text-4xl py-12 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out shadow-lg z-50`}
        >
            <div className="flex items-center justify-between p-4 text-5xl border-b border-gray-700">
                <h2 className="text-2xl font-bold">Menu</h2>
                <HiX
                    className="text-3xl cursor-pointer"
                    onClick={handleCloseSidebar}
                />
            </div>
            <nav className="flex flex-col items-center p-4 space-y-4 text-xl">
                <Link
                    to="/"
                    className="hover:text-gray-300 md:text-2xl p-10 text-5xl mt-8"
                    onClick={handleLinkClick}
                    ref={(el) => navItemsRef.current.push(el)}
                >
                    Home
                </Link>

                <Link
                    to="/shop"
                    className="hover:text-gray-300 md:text-2xl p-10"
                    onClick={handleLinkClick}
                    ref={(el) => navItemsRef.current.push(el)}
                >
                    Shop
                </Link>

                <Link   to="/product"
                    href="#product"
                    className="hover:text-gray-300 md:text-2xl p-10"
                    onClick={handleLinkClick}
                    ref={(el) => navItemsRef.current.push(el)}
                
                 
                  >   Product  </Link>

           <Link
                    to="/blog"
                    className="hover:text-gray-300 md:text-2xl p-10"
                    onClick={handleLinkClick}
                    ref={(el) => navItemsRef.current.push(el)}
                >
                    Blog
                    </Link>

                <Link to="/contact" 
                 
                    className="hover:text-gray-300 md:text-2xl p-10"
                    onClick={handleLinkClick}
                    ref={(el) => navItemsRef.current.push(el)}
                
                   
                   >  Contact Us</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
