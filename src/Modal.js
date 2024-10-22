import React, { useEffect } from 'react';
import './Modal.css';

function Modal(props) {
  const [productName, setProductName] = React.useState('');
  const [selectedImage, setSelectedImage] = React.useState('');

  useEffect(() => {
    if (props.currentProduct) {
      setProductName(props.currentProduct.name);
      setSelectedImage(props.currentProduct.image);
    } else {
      setProductName('');
      setSelectedImage('');
    }
  }, [props.currentProduct]);

  const handleAddProduct = () => {
    if (productName && selectedImage) {
      props.onAddProduct({ name: productName, image: selectedImage });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!props.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{props.currentProduct ? 'Edit Product' : 'Add Product'}</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {selectedImage && <img src={selectedImage} alt="Preview" style={{ width: '100px', height: '100px' }} />}
        <button onClick={handleAddProduct}>{props.currentProduct ? 'Update Product' : 'Add Product'}</button>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
