import React from "react";
import { useSelector } from "react-redux";
import Head from "../header/header/head";
import Sidebar from "./sidebar";
import ProductList from "./productlist";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import CartPreview from "./cartpreview";


const Shop = () => {
  const { category } = useSelector((state) => state.products);

  // Dynamic breadcrumb
  const breadcrumb = category && category !== "all" ? ` / ${category}` : "";

  // Dynamic h1 title
  const title = category && category !== "all" ? category : "Shop";

  return (
    <>
      <Head />

      {/* Centered Breadcrumb navigation */}
      <div className="flex justify-center">
        <div className="px-8 py-4 text-2xl font-semibold text-3xl mb-16">
          {/* "Home" link always stays silver unless clicked */}
          <Link 
            to="/" 
            className="hover:underline text-gray-500"
          >
            Home
          </Link>
          <span> / </span>

          {/* "Shop" link changes color based on category selection */}
          <Link 
            to="/shop" 
            className={`hover:underline ${category && category !== 'all' ? 'text-gray-500' : 'text-black'}`}
          >
            Shop
          </Link>

          {/* Display the selected category if not 'all' */}
          {category && category !== "all" && (
            <>
              <span> / </span>
              <span className="text-black capitalize">{category}</span>
            </>
          )}
        </div>
      </div>

      {/* Centered Dynamic title */}
      <div className="flex justify-center text-5xl ">
        <h1 className="text-5xl font-bold text-center my-8 capitalize underline text-red-700">{title}</h1>
      </div>

      {/* Use flex to align Sidebar and ProductList side by side */}
      <div className="flex">
        <Sidebar />

        {/* ProductList should take the remaining space */}
        <div className="flex-grow p-8">
          <ProductList />
       
        </div>
        <CartPreview/>
      </div>
   

      <Footer />
    </>
  );
};

export default Shop;
