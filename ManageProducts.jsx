import React from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './ManageProducts.css'; // Import CSS for styling

const ManageProducts = () => {
  return (
    <div className="manage-products-container">
      <MsmeSidebar /> {/* Sidebar displayed first */}
      <div className="manage-products-content">
        <header className="manage-products-header">
          <h1>Product Management</h1>
          <div className="manage-actions">
            <button className="add-product-button">+ Add Product</button>
            <button className="manage-hashtags-button">Manage Hashtags</button>
          </div>
        </header>
        <section className="filters">
          <input type="text" placeholder="Search products..." className="search-input" />
          <select className="filter-select">
            <option>All Status</option>
            <option>Available</option>
            <option>Out of Stock</option>
          </select>
          <select className="filter-select">
            <option>All Categories</option>
            <option>Food</option>
            <option>Clothing</option>
            <option>Accessories</option>
          </select>
        </section>
        <section className="product-grid">
          <div className="product-card">
            <img src="buko-pie.jpg" alt="Buko Pie" />
            <h3>Buko Pie</h3>
            <p>₱250</p>
            <span className="rating">4.8 (124)</span>
          </div>
          <div className="product-card">
            <img src="handwoven-shirt.jpg" alt="Handwoven Shirt" />
            <h3>Handwoven Shirt</h3>
            <p>₱850</p>
            <span className="rating">4.6 (87)</span>
          </div>
          <div className="product-card">
            <img src="coffee-beans.jpg" alt="Organic Coffee Beans" />
            <h3>Organic Coffee Beans</h3>
            <p>₱320</p>
            <span className="rating">4.9 (203)</span>
          </div>
          <div className="product-card">
            <img src="phone-case.jpg" alt="Bamboo Phone Case" />
            <h3>Bamboo Phone Case</h3>
            <p>₱180</p>
            <span className="rating">4.4 (58)</span>
          </div>
          <div className="product-card">
            <img src="banana-chips.jpg" alt="Banana Chips" />
            <h3>Banana Chips</h3>
            <p>₱150</p>
            <span className="rating">4.7 (112)</span>
          </div>
          <div className="product-card">
            <img src="embroidered-dress.jpg" alt="Embroidered Dress" />
            <h3>Embroidered Dress</h3>
            <p>₱1,200</p>
            <span className="rating">4.8 (77)</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageProducts;