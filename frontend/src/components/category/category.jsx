import React from "react";
import './category.css';

function Category() {
  return (
    <div className="categories-wrapper">
      <div className="categories-heading">
       <span className='heading'>Order.uk Popular Categories </span> <img src="/star-struck.png" alt="Icon" className="emoji" />
      
      </div>
      <div className="categories-container">
        <div className="category-card">
          <img src="/Rectangle1.png" alt="Burgers & Fast food" className="category-image" />
          <div className="category-name">Burgers & Fast food</div>
          <div className="restaurant-count">21 Restaurants</div>
        </div>

        <div className="category-card">
          <img src="/Rectangle2.png" alt="Salads" className="category-image" />
          <div className="category-name">Salads</div>
          <div className="restaurant-count">32 Restaurants</div>
        </div>

        <div className="category-card">
          <img src="/Rectangle3.png" alt="Pasta & Casuals" className="category-image" />
          <div className="category-name">Pasta & Casuals</div>
          <div className="restaurant-count">4 Restaurants</div>
        </div>

        <div className="category-card">
          <img src="/Rectangle4.png" alt="Pizza" className="category-image" />
          <div className="category-name">Pizza</div>
          <div className="restaurant-count">32 Restaurants</div>
        </div>

        <div className="category-card">
          <img src="/Rectangle5.png" alt="Breakfast" className="category-image" />
          <div className="category-name">Breakfast</div>
          <div className="restaurant-count">4 Restaurants</div>
        </div>

        <div className="category-card">
          <img src="/Rectangle6.png" alt="Soups" className="category-image" />
          <div className="category-name">Soups</div>
          <div className="restaurant-count">32 Restaurants</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
