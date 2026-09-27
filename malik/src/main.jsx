// index.js or App.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductHome from './components/productsdetails/producthome.jsx';
import App from './App.jsx';
import Shop from './components/shop/shophome.jsx';
import mainStore from './store/mainstore.jsx';
import "./index.css";
import Preview from './components/shop/preview.jsx';
import WhislistHome from './components/whislist/whislisthome.jsx';
import CheckoutHome from './components/checkout/checkouthome.jsx';
import ContactHome from './components/contact/contacthome.jsx';
import BlogPost from './components/cats/blogfile/blog.jsx';
import BlogHome from './components/cats/blogfile/bloghome.jsx';
import LoginHome from './components/login/loginhome.jsx';

import CartHome from './components/cats/carthome.jsx';
// Set up your routes
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/shop', element: <Shop /> },
  { path: '/men', element: <Shop category="Men" /> },
  { path: '/kid', element: <Shop category="Kids" /> },
  { path: '/women', element: <Shop category="Women" /> },
  { path: '/product-details/:productId', element: <ProductHome /> },
  {path:'/favourite' , element: <WhislistHome/>},
  {path:'/cart' , element: <CartHome/>},
  {path:'/checkout' , element: <CheckoutHome/>},
  {path:'/contact', element: <ContactHome/>},
  {path:"/blog", element: <BlogHome/>},
  {path:"/user", element:<LoginHome/>}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mainStore}>
      <RouterProvider router={router} />
      <Preview /> {/* Add this line to see the preview */}
    </Provider>
  </StrictMode>
);
