import "./App.css";
import React, { Suspense } from 'react'
import { useContext, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // Redirect is in version 5 of 'react-router-dom' not in version 6 , so we will use here Navigate
import AuthContext from "./components/auth- context";



const Navigationbar = React.lazy(() => import('./components/Navigationbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const Cart = React.lazy(() => import('./components/Cart/Cart'));
const CartProvider = React.lazy(() => import('./components/CartProvider'));
const StorePage = React.lazy(() => import('./components/pages/Store/StorePage'));
const AboutPage = React.lazy(() => import('./components/pages/About/AboutPage'));
const HomePage = React.lazy(() => import('./components/pages/Home/HomePage'));
const ContactUsPage = React.lazy(() => import('./components/pages/ContactUs/ContactUsPage'));
const LoginForm = React.lazy(() => import('./components/pages/login/LoginForm'));



function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const authCtx = useContext(AuthContext)


  const showCartHandler = () => {
    setIsCartShown(true);

  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  const router = createBrowserRouter([
    { path: "/", element: authCtx.isLoggedIn ?  <StorePage onShow={showCartHandler} /> : <Navigate to='/auth'/>},
    { path: "/about", element: <AboutPage /> },
    { path: "/home", element: <HomePage /> },
    { path: '/contact', element: <ContactUsPage />},
    { path: '/auth', element: <LoginForm />}
  ]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CartProvider>
        <div className="App">
          {isCartShown && <Cart onClose={hideCartHandler} />}
          <Navigationbar onShow={showCartHandler} />
        
          <RouterProvider router={router} />

          <Footer />
        </div>
      </CartProvider>
    </Suspense>
  );
}

export default App;
