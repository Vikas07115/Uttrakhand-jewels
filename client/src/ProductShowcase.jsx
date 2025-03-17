import React, { useState } from "react";
import './App.css';
import data from "../data.json"; 

function ProductShowcase({ handleAddToCart }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="product-showcase">
      <h2>Featured Products</h2>
      <div className="product-container">
        {data.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imagePath} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>{product.price}</strong></p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;
