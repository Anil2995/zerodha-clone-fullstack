import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import { API_URL } from "../constants";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      setMessage("Please enter valid quantity and price");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await axios.post(`${API_URL}/newOrder`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      setMessage("Order placed successfully!");
      setTimeout(() => {
        generalContext.closeBuyWindow();
      }, 1000);
    } catch (error) {
      console.error("Error placing order:", error);
      setMessage("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="buy-window-header">
        <h4>{uid}</h4>
        <span className="badge bg-primary">BUY</span>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(parseInt(e.target.value) || 0)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              onChange={(e) => setStockPrice(parseFloat(e.target.value) || 0)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      {message && (
        <div className={`message ${message.includes("success") ? "success" : "error"}`}>
          {message}
        </div>
      )}

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice * 0.2).toFixed(2)}</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;