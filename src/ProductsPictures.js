import React from 'react';
import './products.css';

function ProductsPictures({ image, productName, onEdit, onRemove }) {
  return (
    <div className="product-card">
      <img src={image} alt={productName} />
      <h3>{productName}</h3>
      <button id='btn-1' onClick={onEdit}>Edit</button>
      <button id='btn-2' onClick={onRemove}>Remove</button>
    </div>
  );
}

export default ProductsPictures;
