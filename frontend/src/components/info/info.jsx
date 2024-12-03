import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info-snippet">
      <div className="section delivery">
        <h3>Delivery information</h3>
        <p>Monday: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
        <p>Tuesday: 8:00 AM–3:00 AM</p>
        <p>Wednesday: 8:00 AM–3:00 AM</p>
        <p>Thursday: 8:00 AM–3:00 AM</p>
        <p>Friday: 8:00 AM–3:00 AM</p>
        <p>Saturday: 8:00 AM–3:00 AM</p>
        <p>Sunday: 8:00 AM–3:00 AM</p>
        <p>
          <strong>Estimated time until delivery:</strong> 20 min
        </p>
      </div>
      <div className="section contact">
        <h3>Contact information</h3>
        <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
        <p>
          <strong>Phone number:</strong> +93443-43
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="http://mcdonalds.uk/" target="_blank" rel="noopener noreferrer">
            http://mcdonalds.uk/
          </a>
        </p>
      </div>
      <div className="section operational">
        <h3>Operational Times</h3>
        <p>Monday: 8:00 AM–3:00 AM</p>
        <p>Tuesday: 8:00 AM–3:00 AM</p>
        <p>Wednesday: 8:00 AM–3:00 AM</p>
        <p>Thursday: 8:00 AM–3:00 AM</p>
        <p>Friday: 8:00 AM–3:00 AM</p>
        <p>Saturday: 8:00 AM–3:00 AM</p>
        <p>Sunday: 8:00 AM–3:00 AM</p>
      </div>
    </div>
  );
};

export default Info;
