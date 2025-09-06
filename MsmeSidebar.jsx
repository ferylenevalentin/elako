import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation for navigation
import './MsmeSidebar.css'; // Import the CSS file for styling
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MsmeSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar is hidden by default
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation(); // Get the current route

  // Detect screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true); // Always show sidebar in desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Burger Menu for Mobile */}
      {isMobileView && !isSidebarOpen && (
        <button className="burger-menu" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {isMobileView && isSidebarOpen && (
            <button className="back-arrow" onClick={toggleSidebar}>
              <ArrowBackIcon />
            </button>
          )}
          {!isMobileView && (
            <button className="desktop-toggle" onClick={toggleSidebar}>
              {isSidebarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}
            </button>
          )}
          <h2>Maria's MSME</h2>
          <p>MSME Business</p>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={location.pathname === '/dashboard' ? 'active' : ''}>
              <Link to="/dashboard">
                <DashboardIcon className="icon" /> Dashboard
              </Link>
            </li>
            <li className={location.pathname === '/manage-products' ? 'active' : ''}>
              <Link to="/manage-products">
                <InventoryIcon className="icon" /> Manage Products
              </Link>
            </li>
            <li className={location.pathname === '/analytics' ? 'active' : ''}>
              <Link to="/analytics">
                <AnalyticsIcon className="icon" /> Growth & Analytics
              </Link>
            </li>
            <li className={location.pathname === '/messages' ? 'active' : ''}>
              <Link to="/messages">
                <MailIcon className="icon" /> Messages
              </Link>
            </li>
            <li className={location.pathname === '/profile' ? 'active' : ''}>
              <Link to="/profile">
                <PersonIcon className="icon" /> Profile
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-button">
            <LogoutIcon className="icon" /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default MsmeSidebar;