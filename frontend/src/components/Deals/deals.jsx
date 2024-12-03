import React from "react";
import './deals.css';

function Deals() {
  return (
    <div className="deals-wrapper">
      {/* Header Section */}
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

      {/* Deals Cards Section */}
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
  );
}

export default Deals;
