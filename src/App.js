import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/CartProvider";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // Redirect is in version 5 of 'react-router-dom' not in version 6 , so we will use here Navigate

import StorePage from "./components/pages/Store/StorePage";
import AboutPage from "./components/pages/About/AboutPage";
import HomePage from "./components/pages/Home/HomePage";
import ContactUsPage from "./components/pages/ContactUs/ContactUsPage";
import LoginForm from "./components/pages/login/LoginForm";
import AuthContext from "./components/auth- context";


// const router = createBrowserRouter([
//   {path: '/', element: <Product onShow={showCartHandler}/>},
//   {path: '/about', element: <AboutPage />},
//   {path: '/home', element: <Home />}
// ])

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
