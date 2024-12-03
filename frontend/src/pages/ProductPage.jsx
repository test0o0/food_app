import React from 'react';
import Navbar from '../components/navbar/navbar';
import './ProductPage.css';
import Menu from '../components/menu/menu';
import Info from '../components/info/info';
import Map from '../components/maps/maps';
import CustomerReviews from '../components/C-reviews/reviews';
const ProductPage = () => {
    return (
      <div className="productpage-container">
        <Navbar />
        <img 
          src="/banners.png"
          alt="Banner" 
          className="banner" 
        />
        <div className="offers-menu">
          <input
            type="text"
            placeholder="Search from menu..."
            className="menu-search"
          />
          <ul className="menu-list">
            <li className="menu-item active">Offers</li>
            <li className="menu-item">Burgers</li>
            <li className="menu-item">Fries</li>
            <li className="menu-item">Snacks</li>
            <li className="menu-item">Salads</li>
            <li className="menu-item">Cold drinks</li>
            <li className="menu-item">Happy Meal®</li>
            <li className="menu-item">Desserts</li>
            <li className="menu-item">Hot drinks</li>
            <li className="menu-item">Sauces</li>
            <li className="menu-item">Order</li>
          </ul>
        </div>

    <div className="deals-wrapper">
     
      <div className="deals-header">
        <div className="deals-heading">
          <span className="deal-title">Up to -40% Off Order.uk exclusive deals</span>
        </div>
        <div className="deals-categories">
          <span className="category active">Vegan</span>
          <span className="category">Sushi</span>
          <span className="category">Pizza & Fast Food</span>
          <span className="category">Others</span>
        </div>
      </div>

     
      <div className="deals-cards">
        <div className="deal-card">
          <img src="/deals1.png" alt="Chef Burgers London" className="deal-image" />
          <div className="deal-overlay">
            <div className="deal-info">
              <span className="restaurant-label">Restaurant</span>
              <h3 className="restaurant-name">Chef Burgers London</h3>
              <div className="discount-tag">-40%</div>
            </div>
           
          </div>
        </div>
        <div className="deal-card">
          <img src="/deals2.png" alt="Grand Ai Cafe London" className="deal-image" />
          <div className="deal-overlay">
            <div className="deal-info">
              <span className="restaurant-label">Restaurant</span>
              <h3 className="restaurant-name">Grand Ai Cafe London</h3>
            </div>
            <div className="discount-tag">-20%</div>
          </div>
        </div>
        <div className="deal-card">
          <img src="/deals1.png" alt="Butterbrot Cafe London" className="deal-image" />
          <div className="deal-overlay">
            <div className="deal-info">
              <span className="restaurant-label">Restaurant</span>
              <h3 className="restaurant-name">Butterbrot Cafe London</h3>
            </div>
            <div className="discount-tag">-17%</div>
          </div>
        </div>
      </div>
    </div>

      <Menu/>
      
      <Info/>
      <Map/>
      <CustomerReviews/>
      </div>
  );
};

export default ProductPage;
