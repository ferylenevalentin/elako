import React, { useState } from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './MsmeAnalytics.css'; // Import CSS for styling
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const MsmeAnalytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="analytics-container">
      <MsmeSidebar onSidebarToggle={handleSidebarToggle} /> {/* Sidebar displayed first */}
      <div className={`analytics-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <header className="analytics-header">
          <h1>Growth & Analytics</h1>
          <p>Track your business performance and growth opportunities.</p>
        </header>
        <section className="analytics-stats">
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
          <div className="chart-container">
            <h3>Monthly Performance Trends</h3>
            <BarChart
              width={600}
              height={300}
              series={[
                {
                  data: [1200, 1350, 1500, 1650, 1750, 1847],
                  label: 'Profile Views',
                  color: '#01a477',
                },
                {
                  data: [320, 350, 380, 410, 430, 456],
                  label: 'Followers',
                  color: '#92e575',
                },
                {
                  data: [4.2, 4.3, 4.4, 4.6, 4.7, 4.8],
                  label: 'Avg Rating',
                  color: '#023c1a',
                },
              ]}
              xAxis={[
                {
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  scaleType: 'band',
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
          <div className="product-performance">
            <h3>Product Performance</h3>
            <LineChart
              width={600}
              height={300}
              series={[
                {
                  data: [28, 30, 32, 35, 33, 35],
                  label: 'Buko Pie',
                  color: '#01a477',
                },
                {
                  data: [20, 22, 24, 25, 26, 25],
                  label: 'Coffee Beans',
                  color: '#92e575',
                },
                {
                  data: [18, 19, 20, 20, 21, 20],
                  label: 'Banana Chips',
                  color: '#023c1a',
                },
                {
                  data: [34, 29, 24, 20, 20, 20],
                  label: 'Others',
                  color: '#313131',
                },
              ]}
              xAxis={[
                {
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  scaleType: 'point',
                },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MsmeAnalytics;