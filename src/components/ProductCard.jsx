import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p><em>{product.author}</em></p>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/shop/${product.id}`}>View Details</Link>
    </div>
  );
}