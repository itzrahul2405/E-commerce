import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/CartProvider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StorePage from "./components/pages/Store/StorePage";
import AboutPage from "./components/pages/About/AboutPage";
import HomePage from "./components/pages/Home/HomePage";
import ContactUsPage from "./components/pages/ContactUs/ContactUsPage";

// const router = createBrowserRouter([
//   {path: '/', element: <Product onShow={showCartHandler}/>},
//   {path: '/about', element: <AboutPage />},
//   {path: '/home', element: <Home />}
// ])

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  const router = createBrowserRouter([
    { path: "/", element: <StorePage onShow={showCartHandler} /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/home", element: <HomePage /> },
    { path: '/contact', element: <ContactUsPage />}
  ]);

  return (
    <CartProvider>
      <div className="App">
        {isCartShown && <Cart onClose={hideCartHandler} />}
        <Navigationbar onShow={showCartHandler} />
      
        <RouterProvider router={router} />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
