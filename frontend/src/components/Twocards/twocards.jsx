import React from "react";
import "./twocards.css"; 

const Twocards = () => {
  return (
    <div className="cards-container">
      {/* First Card */}
      <div className="card">
        <div className="card-tag">Earn more with lower fees</div>
        <img src="./twocards1.png" alt="Chef" className="card-image" />
        <div className="card-content">
          <h2>Sign up as a business</h2>
          <p>Partner with us</p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>

      {/* Second Card */}
      <div className="card">
        <div className="card-tag">Add exclusive perks</div>
        <img src="./twocards2.png" alt="Rider" className="card-image" />
        <div className="card-content">
          <h2>Sign up as a rider</h2>
          <p>Ride with us</p>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Twocards;
