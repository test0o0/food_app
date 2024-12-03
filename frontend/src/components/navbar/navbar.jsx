import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
      <Link to="/home" className="nav-link">Home</Link>
        <Link to="/browse-menu" className="nav-link">Browse Menu</Link>
        <Link to="/special-offers" className="nav-link">Special Offers</Link>
        <Link to="/restaurants" className="nav-link">Restaurants</Link>
        <Link to="/track-order" className="nav-link">Track Order</Link>
      </div>
      <div className="navbar-right">
        <button className='login-btn'>
        <img src="../image.png" className="icon-image" /> 
        Login/Signup
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
