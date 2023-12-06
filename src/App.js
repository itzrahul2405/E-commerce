import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/CartProvider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderStore from "./components/pages/Store/headerStore";
import HeaderAbout from "./components/pages/About/headerAbout";
import HeaderHome from "./components/pages/Home/headerHome";

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
    { path: "/", element: <HeaderStore onShow={showCartHandler} /> },
    { path: "/about", element: <HeaderAbout /> },
    { path: "/home", element: <HeaderHome /> },
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
