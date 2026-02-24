import React from 'react';
import './ProductCard.css';

function ProductCard({ title, price, image, description, category }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-content">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price}</div>
      </div>
    </div>
  );
}

export default ProductCard;
