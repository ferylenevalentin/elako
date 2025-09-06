import React from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './MsmeAnalytics.css'; // Import CSS for styling

const MsmeAnalytics = () => {
  return (
    <div className="analytics-container">
      <MsmeSidebar /> {/* Sidebar displayed first */}
      <div className="analytics-content">
        <header className="analytics-header">
          <h1>Growth & Analytics</h1>
          <p>Track your business performance and growth opportunities.</p>
        </header>
        <section className="analytics-stats">
          <div className="stat-card">
            <h2>Monthly Revenue</h2>
            <p>₱32,000</p>
            <span>+28% Compared to last month</span>
          </div>
          <div className="stat-card">
            <h2>Profile Views</h2>
            <p>1,847</p>
            <span>+12% This week</span>
          </div>
          <div className="stat-card">
            <h2>Followers</h2>
            <p>456</p>
            <span>+5% New followers this month</span>
          </div>
          <div className="stat-card">
            <h2>Avg Rating</h2>
            <p>4.8</p>
            <span>+0.2 Based on 181 reviews</span>
          </div>
        </section>
        <section className="analytics-details">
          <div className="sales-trend">
            <h3>Sales & Orders Trend</h3>
            <ul>
              <li>Jan <span>₱12K sales</span> <span>45 orders</span></li>
              <li>Feb <span>₱15K sales</span> <span>52 orders</span></li>
              <li>Mar <span>₱18K sales</span> <span>61 orders</span></li>
              <li>Apr <span>₱22K sales</span> <span>78 orders</span></li>
              <li>May <span>₱28K sales</span> <span>89 orders</span></li>
              <li>Jun <span>₱32K sales</span> <span>95 orders</span></li>
            </ul>
          </div>
          <div className="product-performance">
            <h3>Product Performance</h3>
            <ul>
              <li>Buko Pie <span>35%</span></li>
              <li>Coffee Beans <span>25%</span></li>
              <li>Banana Chips <span>20%</span></li>
              <li>Others <span>20%</span></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MsmeAnalytics;