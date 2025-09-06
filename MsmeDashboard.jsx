import React from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './MsmeDashboard.css'; // Import CSS for dashboard styling

const MsmeDashboard = () => {
  return (
    <div className="dashboard-container">
      <MsmeSidebar /> {/* Sidebar displayed first */}
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Welcome back, Maria's MSME!</h1>
          <button className="customize-button">Customize</button>
        </header>
        <section className="dashboard-stats">
          <div className="stat-card">
            <h2>Page Views</h2>
            <p>2,847</p>
            <span>+8% from last month</span>
          </div>
          <div className="stat-card">
            <h2>Rating</h2>
            <p>4.8</p>
            <span>0% from last month</span>
          </div>
        </section>
        <section className="dashboard-stats">
          <div className="stat-card">
            <h2>Top Products by Ratings</h2>
            <ul>
              <li>#1 Buko Pie <span>Rating: 4.9</span></li>
              <li>#2 Coffee Beans <span>Rating: 4.8</span></li>
              <li>#3 Handwoven Shirt <span>Rating: 4.7</span></li>
              <li>#4 Banana Chips <span>Rating: 4.6</span></li>
            </ul>
          </div>
        </section>
        <section className="dashboard-insights">
          <div className="insight-card">
            <h4>Peak Customer Engagement</h4>
            <p>Most customer interactions occur between 2-4 PM</p>
          </div>
          <div className="insight-card">
            <h4>Growth Opportunity</h4>
            <p>Consider adding more coffee varieties</p>
          </div>
        </section>
        <section className="quick-actions">
          <h3>Quick Actions</h3>
          <div className="actions">
            <button>Add Product</button>
            <button>View Messages</button>
            <button>Check Analytics</button>
            <button>Settings</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MsmeDashboard;