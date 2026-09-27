import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAction } from '../../../store/mainstore'; // Import actions for the sidebar
import { productsAction } from '../../../store/mainstore'; // Import actions for products
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './sideBar'; // Import the Sidebar component
import Search from '../../search/search'; // Import the Search component
import { Link } from "react-router-dom"


const Head = () => {
    const dispatch = useDispatch();
    const searchOpen = useSelector((state) => state.products.isOpen);
    const  cart  = useSelector((state) => state.cart.cart.length);
    const  likes = useSelector((state) => state.wishlist.wishlist.length)

    const handleSidebarToggle = () => {
        dispatch(openAction.onOpen());
    };

    const handleSearchToggle = () => {
        dispatch(productsAction.toggleSearch());
    };

    return (
        <div className="sticky top-0 left-0 w-full bg-slate-100 border-b border-x-slate-600 z-50">
            <div className="flex items-center justify-center text-sm h-40 w-full md:bg-slate-100 items-center justify-evenly font-roboto text-2xl">
                <div className="hidden md:flex text-4xl items-center space-x-7">
                    <span className="relative group" onClick={handleSidebarToggle}>
                        <RxHamburgerMenu />
                    </span>
                    <span className="relative group">New Arrivals</span>
                <Link to="/men"       > <span className="relative group">Men</span></Link>   
                    <span className="relative group">Women</span>
                    <span className="relative group">Kid</span>
                </div>
                <div className="font-bold text-4xl md:text-7xl">
                   <Link to= "/" ><h1 className="relative group">MrMalik</h1></Link> 
                </div>
                <div className="flex text-lg md:text-6xl gap-7 relative">
                    <div className="relative flex items-center">
                        <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs md:text-sm px-1 rounded-full">
                         {likes}
                        </span>
                        <Link to='/favourite'><CiHeart /></Link>
                    </div>
                    <div className="relative flex items-center">
                        <span className="absolute -top-3 -right-2 text-white bg-red-800 text-xs md:text-sm px-1 rounded-full">
                        {cart}
                        </span>
                        <Link to="/cart"><IoCartSharp /></Link>
                    </div>
                    <div className="relative flex items-center">
                        <CiSearch onClick={handleSearchToggle} className="cursor-pointer" />
                    </div>
                  <Link to="/user"   >  <CiUser /></Link>
                </div>
                <Sidebar /> {/* Include the Sidebar component */}
            </div>
            {searchOpen && <Search />} {/* Render the Search component when searchOpen is true */}
        </div>
    );
};

export default Head;
