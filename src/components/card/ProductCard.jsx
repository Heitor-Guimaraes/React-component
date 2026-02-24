import React from 'react';
import './ProductCard.css';

export default function ProductCard({ title, price, image, description, category }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-content">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">${price}</div>
      </div>
    </div>
  );
}


