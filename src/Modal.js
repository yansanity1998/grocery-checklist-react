import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, onAddProduct, currentProduct }) {
  const [productName, setProductName] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState('');

  useEffect(() => {
    if (currentProduct) {
      setProductName(currentProduct.name);
      setSelectedImage(currentProduct.image);
    } else {
      setProductName('');
      setSelectedImage('');
    }
  }, [currentProduct]);

  const handleAddProduct = () => {
    if (productName && selectedImage) {
      onAddProduct({ name: productName, image: selectedImage });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{currentProduct ? 'Edit Product' : 'Add Product'}</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <select value={selectedImage} onChange={(e) => setSelectedImage(e.target.value)}>
          <option value="">Select an image</option>
          <option value="image/apple.png">Apple</option>
          <option value="image/squash.png">Squash</option>
          <option value="image/watermelon.png">Watermelon</option>
        </select>
        <button onClick={handleAddProduct}>{currentProduct ? 'Update Product' : 'Add Product'}</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
