import React, { useState } from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './ManageProducts.css'; // Import CSS for styling
import shakshoukaImg from '../assets/shakshouka.jpg';

const ManageProducts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="manage-products-container">
      <MsmeSidebar onSidebarToggle={handleSidebarToggle} /> {/* Sidebar displayed first */}
      <div className={`manage-products-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
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
            <option>Breakfast Items</option>
            <option>Beverages</option>
            <option>Desserts</option>
            <option>Snacks</option>
            <option>Meal Sets</option>
          </select>
        </section>
        <section className="product-grid">
          <div className="product-card">
            <img src={shakshoukaImg} alt="Shakshuka Breakfast" />
            <div className="product-info">
              <h3>Shakshuka Breakfast</h3>
              <p className="product-description">Traditional Middle Eastern dish with eggs poached in spiced tomato sauce</p>
              <p className="product-price">₱295</p>
              <div className="product-details">
                <span className="rating">4.9 (156)</span>
                <div className="stock-info">
                  <span className="stock-count">Stock: 24</span>
                  <span className="availability available">Available</span>
                </div>
              </div>
              <button className="edit-product-btn">Edit Product</button>
            </div>
          </div>
          <div className="product-card">
             <img src={shakshoukaImg} alt="Shakshuka Breakfast" />
            <div className="product-info">
              <h3>Artisan Bread</h3>
              <p className="product-description">Freshly baked artisan sourdough bread with crispy crust and soft interior</p>
              <p className="product-price">₱180</p>
              <div className="product-details">
                <span className="rating">4.7 (98)</span>
                <div className="stock-info">
                  <span className="stock-count">Stock: 15</span>
                  <span className="availability available">Available</span>
                </div>
              </div>
              <button className="edit-product-btn">Edit Product</button>
            </div>
          </div>
          <div className="product-card">
            <img src={shakshoukaImg} alt="Shakshuka Breakfast" />
            <div className="product-info">
              <h3>Premium Coffee Blend</h3>
              <p className="product-description">Rich and aromatic coffee blend sourced from premium beans</p>
              <p className="product-price">₱320</p>
              <div className="product-details">
                <span className="rating">4.8 (203)</span>
                <div className="stock-info">
                  <span className="stock-count">Stock: 8</span>
                  <span className="availability low-stock">Low Stock</span>
                </div>
              </div>
              <button className="edit-product-btn">Edit Product</button>
            </div>
          </div>
          <div className="product-card">
             <img src={shakshoukaImg} alt="Shakshuka Breakfast" />
            <div className="product-info">
              <h3>Traditional Buko Pie</h3>
              <p className="product-description">Classic Filipino dessert with fresh coconut filling in flaky pastry</p>
              <p className="product-price">₱250</p>
              <div className="product-details">
                <span className="rating">4.8 (124)</span>
                <div className="stock-info">
                  <span className="stock-count">Stock: 12</span>
                  <span className="availability available">Available</span>
                </div>
              </div>
              <button className="edit-product-btn">Edit Product</button>
            </div>
          </div>
          <div className="product-card">
            <img src={shakshoukaImg} alt="Shakshuka Breakfast" />
            <div className="product-info">
              <h3>Filipino Breakfast Set</h3>
              <p className="product-description">Complete breakfast with garlic rice, longganisa, and fried egg</p>
              <p className="product-price">₱385</p>
              <div className="product-details">
                <span className="rating">4.9 (89)</span>
                <div className="stock-info">
                  <span className="stock-count">Stock: 0</span>
                  <span className="availability out-of-stock">Out of Stock</span>
                </div>
              </div>
              <button className="edit-product-btn">Edit Product</button>
            </div>
          </div>
          <div className="product-card">
             <img src={shakshoukaImg} alt="Shakshuka Breakfast" />
            <div className="product-info">
              <h3>Homemade Banana Chips</h3>
              <p className="product-description">Crispy banana chips made from fresh local bananas, lightly salted</p>
              <p className="product-price">₱150</p>
              <div className="product-details">
                <span className="rating">4.7 (112)</span>
                <div className="stock-info">
                  <span className="stock-count">Stock: 35</span>
                  <span className="availability available">Available</span>
                </div>
              </div>
              <button className="edit-product-btn">Edit Product</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageProducts;