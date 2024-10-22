import React, { useState } from "react";
import './style.css';
import Header from "./Header.js";
import Add from "./Add.js";
import Category from "./Category.js";
import ProductsPictures from "./ProductsPictures.js";
import Modal from "./Modal.js";

function App() {
  const [products, setProducts] = useState([
    { image: "image/apple.png", name: "Apple" },
    { image: "image/squash.png", name: "Squash" },
    { image: "image/watermelon.png", name: "Watermelon" }
  ]);
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const handleEditProduct = (index, updatedProduct) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const openEditModal = (index) => {
    setCurrentProductIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProductIndex(null);
  };

  return (
    <div className="Container">
      <Header name="Shopping List"/>
      <Add onOpenModal={() => {
        setCurrentProductIndex(null); 
        setModalOpen(true);
      }} />
      <Category />
      <div className='Images'>
        {products.map((product, index) => (
          <ProductsPictures 
            key={index} 
            image={product.image} 
            productName={product.name} 
            onEdit={() => openEditModal(index)}
            onRemove={() => handleRemoveProduct(index)}
          />
        ))}
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onAddProduct={(product) => {
          if (currentProductIndex !== null) {
            handleEditProduct(currentProductIndex, product);
          } else {
            handleAddProduct(product);
          }
          closeModal();
        }} 
        currentProduct={currentProductIndex !== null ? products[currentProductIndex] : null}
      />
    </div>
  );
}

export default App;
