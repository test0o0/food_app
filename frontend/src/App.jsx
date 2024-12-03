import React from 'react';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './components/menu/CartPage';
import SignUpPage from './pages/Signup';

function App() {
  return (
    <Router> 
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/p" element={<ProductPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/browse-menu" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartData={new URLSearchParams(window.location.search).get("data")}
            />
          }
        />
      
      </Routes>
    </Router>
  );
}

export default App;