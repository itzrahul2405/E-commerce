import './App.css';
import Navigationbar from './components/Navigationbar';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Header />
      <Product />     
      <Footer />
    </div>
  );
}

export default App;
