import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import ProductList from './components/productsList';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Slider />
      <ProductList/>
          </>
        }/>
        <Route path="/About" element={<About/>}/>
        <Route path="product/:ProductId" element={<ProductDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;