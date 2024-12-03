import React from "react";
import './popular.css';

function Popular() {
  return (
    <div className="popular-wrapper">
      <div className="popular-heading">
       <span className='heading'>Popular Restaurants</span> <img src="/star-struck.png" alt="Icon" className="emoji" />
      
      </div>
      <div className="popular-container">
        <div className="popular-card">
          <img src="/Rectangle1.png" alt="Burgers & Fast food" className="popular-image" />
          <div className="popular-name">Burgers & Fast food</div>
          <div className="restaurant-count">21 Restaurants</div>
        </div>

        <div className="popular-card">
          <img src="/Rectangle2.png" alt="Salads" className="popular-image" />
          <div className="popular-name">Salads</div>
          <div className="restaurant-count">32 Restaurants</div>
        </div>

        <div className="popular-card">
          <img src="/Rectangle3.png" alt="Pasta & Casuals" className="popular-image" />
          <div className="popular-name">Pasta & Casuals</div>
          <div className="restaurant-count">4 Restaurants</div>
        </div>

        <div className="popular-card">
          <img src="/Rectangle4.png" alt="Pizza" className="popular-image" />
          <div className="popular-name">Pizza</div>
          <div className="restaurant-count">32 Restaurants</div>
        </div>

        <div className="popular-card">
          <img src="/Rectangle5.png" alt="Breakfast" className="popular-image" />
          <div className="popular-name">Breakfast</div>
          <div className="restaurant-count">4 Restaurants</div>
        </div>

        <div className="popular-card">
          <img src="/Rectangle6.png" alt="Soups" className="popular-image" />
          <div className="popular-name">Soups</div>
          <div className="restaurant-count">32 Restaurants</div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
