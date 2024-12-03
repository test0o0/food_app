import React from 'react';
import Navbar from '../components/navbar/navbar';
import './HomePage.css'; 
import Category from '../components/category/category';
import Deals from '../components/Deals/deals';
import Twocards from '../components/Twocards/twocards';
import Popular from '../components/Popular/popular';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <img 
        src="/banners.png"
        alt="Banner" 
        className="banner" 
      />
      <Deals />
      <Category />
      <Popular />
      <img 
        src="/Ordering.png"
        alt="Banner" 
        className="banner" 
      />
      <Twocards />
      
    </div>
  );
};


export default HomePage;
