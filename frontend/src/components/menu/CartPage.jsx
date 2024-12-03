import React from "react";
// import "./basket.css"; // Ensure you use appropriate styling

const CartPage = ({ cartData }) => {
  // If `cartData` is a URL query parameter, parse it
  const basketItems = JSON.parse(decodeURIComponent(cartData || "[]"));

  const calculateSubtotal = () =>
    basketItems.reduce((total, item) => total + parseFloat(item.price.replace("$", "")), 0);

  return (
    <div className="basket-container">
      <h3>My Basket</h3>
      {basketItems.map((item, index) => (
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
  );
};

export default CartPage;
