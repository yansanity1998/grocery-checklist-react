import React from 'react';
import './products.css';

function ProductsPictures(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt="image"/>
      <h3>{props.productName}</h3>
      <button id='btn-1' onClick={props.onEdit}>Edit</button>
      <button id='btn-2' onClick={props.onRemove}>Remove</button>
    </div>
  );
}

export default ProductsPictures;
