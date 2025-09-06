import React, { useState } from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './MsmeDashboard.css'; // Import CSS for dashboard styling

const MsmeDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="dashboard-container">
      <MsmeSidebar onSidebarToggle={handleSidebarToggle} /> {/* Sidebar displayed first */}
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <header className="dashboard-header">
          <div className="header-content">
            <h1>Welcome back, Maria's MSME!</h1>
            <p className="header-subtitle">Here's what's happening with your business today</p>
          </div>
          <button className="customize-button">Customize Dashboard</button>
        </header>
        
        <section className="dashboard-overview">
          <div className="overview-stats">
            <div className="stat-card primary">
              <div className="stat-icon"></div>
              <div className="stat-content">
                <h3>Page Views</h3>
                <p className="stat-number">2,847</p>
                <span className="stat-change positive">+8% from last month</span>
              </div>
            </div>
            <div className="stat-card secondary">
              <div className="stat-icon"></div>
              <div className="stat-content">
                <h3>Average Rating</h3>
                <p className="stat-number">4.8</p>
                <span className="stat-change neutral">Based on 181 reviews</span>
              </div>
            </div>
            <div className="stat-card info">
              <div className="stat-icon"></div>
              <div className="stat-content">
                <h3>New Customers</h3>
                <p className="stat-number">124</p>
                <span className="stat-change positive">+15% this week</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-content-grid">
          <div className="content-card products-card">
            <h3>Top Products by Rating</h3>
            <div className="products-list">
              <div className="product-item">
                <span className="product-rank">#1</span>
                <span className="product-name">Buko Pie</span>
                <span className="product-rating">4.9</span>
              </div>
              <div className="product-item">
                <span className="product-rank">#2</span>
                <span className="product-name">Coffee Beans</span>
                <span className="product-rating">4.8</span>
              </div>
              <div className="product-item">
                <span className="product-rank">#3</span>
                <span className="product-name">Shakshuka Breakfast</span>
                <span className="product-rating">4.7</span>
              </div>
              <div className="product-item">
                <span className="product-rank">#4</span>
                <span className="product-name">Banana Chips</span>
                <span className="product-rating">4.6</span>
              </div>
            </div>
          </div>

          <div className="content-card insights-card">
            <h3>Business Insights</h3>
            <div className="insights-list">
              <div className="insight-item">
                <div className="insight-icon"></div>
                <div className="insight-content">
                  <h4>Peak Customer Engagement</h4>
                  <p>Most customer interactions occur between 2-4 PM</p>
                </div>
              </div>
              <div className="insight-item">
                <div className="insight-icon"></div>
                <div className="insight-content">
                  <h4>Growth Opportunity</h4>
                  <p>Consider adding more coffee varieties to boost sales</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            <button className="action-btn primary">
              <span className="action-icon">+</span>
              <span className="action-text">Add Product</span>
            </button>
            <button className="action-btn secondary">
              <span className="action-icon">@</span>
              <span className="action-text">View Messages</span>
            </button>
            <button className="action-btn success">
              <span className="action-icon">#</span>
              <span className="action-text">Check Analytics</span>
            </button>
            <button className="action-btn info">
              <span className="action-icon">*</span>
              <span className="action-text">Settings</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MsmeDashboard;