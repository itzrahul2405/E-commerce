import './App.css';
import Navigationbar from './components/Navigationbar';
import Header from './components/Header';
import Product from './components/Product/Product';
import Footer from './components/Footer';
import { useState } from 'react';
import Cart from './components/Cart/Cart';


function App() {

  const [isCartShown, setIsCartShown] = useState(false)
  const showCartHandler = () => {
    setIsCartShown(true)
  }

  const hideCartHandler = () => {
    setIsCartShown(false)
  }

  return (
    <div className="App">
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Navigationbar onShow={showCartHandler}/>
      <Header />
      <Product />     
      <Footer />
    </div>
  );
}

export default App;
