import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import ContactUs from './components/pages/ContactUs'
import Smartphones from './components/pages/Smartphones'
import Laptops from './components/pages/Laptops'
import Cameras from './components/pages/Cameras'
import Cart from './components/pages/Cart'
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    
    <ShopContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/products' exact Component={Products} />
        <Route path='/contact' exact Component={ContactUs} />
        <Route path='/smartphones' exact Component={Smartphones} />
        <Route path='/laptops' exact Component={Laptops} />
        <Route path='/cameras' exact Component={Cameras} />
        <Route path='/cart' exact Component={Cart} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ShopContextProvider>
    
  );
}

export default App;
