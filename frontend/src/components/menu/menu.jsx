import React, { useEffect, useState } from "react";
import { fetchMenu } from "./fetchMenu";

import "./menu.css";


const Menu = () => {
  const [menuData, setMenuData] = useState({ burgers: [], fries: [], drinks: [] });
  const [basket, setBasket] = useState([]);
  const [cartLink, setCartLink] = useState("");

  useEffect(() => {
    const getMenuData = async () => {
      const data = await fetchMenu();
      if (data) setMenuData(data);
    };
    getMenuData();
  }, []);

  const addToBasket = (item) => {
    setBasket((prev) => [...prev, item]);
  };

  const generateCartLink = () => {
    const cartData = encodeURIComponent(JSON.stringify(basket));
    const link = `${window.location.origin}/cart?data=${cartData}`;
    setCartLink(link);
  };
  
  const navigateToCart = () => {
    const cartData = encodeURIComponent(JSON.stringify(basket));
    navigate(`/cart?data=${cartData}`);
  };

  const calculateSubtotal = () =>
    basket.reduce((total, item) => total + parseFloat(item.price.replace("$", "")), 0);


  return (
    <div className="menu-page">
    <div className="menu-container">
      {/* Burgers Section */}
      <h2>Burgers</h2>
      <div className="menu-section">
        {menuData.burgers.map((item) => (
          <div className="menu-itm" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button onClick={() => addToBasket(item)}>+</button>
          </div>
        ))}
      </div>

      
      <h2>Fries</h2>
      <div className="menu-section">
        {menuData.fries.map((item) => (
          <div className="menu-itm" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button onClick={() => addToBasket(item)}>+</button>
          </div>
        ))}
      </div>

      <h2>Cold Drinks</h2>
      <div className="menu-section">
        {menuData.drinks.map((item) => (
          <div className="menu-itm" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
            <button onClick={() => addToBasket(item)}>+</button>
          </div>
        ))}
      </div>
    </div>
   {/* Right My Basket Section */}
   <div className="basket-container">
        <div className="share-cart">
          <button onClick={generateCartLink}>Share</button>
          {cartLink && (
            <div>
              <input type="text" value={cartLink} readOnly />
              <button onClick={() => navigator.clipboard.writeText(cartLink)}>Copy Link</button>
            </div>
          )}
        </div>

        <div className="basket">
          <h3>My Basket</h3>
          {basket.map((item, index) => (
            <div className="basket-item" key={index}>
              <span>{item.title}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <hr />
          <div className="basket-summary">
            <div>Sub Total: ${calculateSubtotal().toFixed(2)}</div>
            <div>Discounts: -$0.00</div>
            <div>Delivery Fee: $5.00</div>
          </div>
          <h3>
            Total to pay: ${(calculateSubtotal() + 5).toFixed(2)}
          </h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;