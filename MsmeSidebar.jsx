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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MsmeSidebar = ({ onSidebarToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Start with sidebar open
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation(); // Get the current route

  // Detect screen size and update state
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); // Start collapsed on mobile
      } else {
        setIsSidebarOpen(true); // Start expanded on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Notify parent component when sidebar state changes
  useEffect(() => {
    if (onSidebarToggle) {
      onSidebarToggle(isSidebarOpen);
    }
  }, [isSidebarOpen, onSidebarToggle]);

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
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'} ${isMobileView ? 'mobile' : 'desktop'}`}>
        <div className="sidebar-header">
          {isMobileView && isSidebarOpen && (
            <button className="back-arrow" onClick={toggleSidebar}>
              <ChevronLeftIcon />
            </button>
          )}
          {!isMobileView && (
            <button className="desktop-toggle" onClick={toggleSidebar}>
              {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </button>
          )}
          {isSidebarOpen && (
            <div className="sidebar-title">
              <h2>Maria's MSME</h2>
              <p>MSME Business</p>
            </div>
          )}
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={location.pathname === '/dashboard' ? 'active' : ''}>
              <Link to="/dashboard" title="Dashboard">
                <DashboardIcon className="icon" />
                {isSidebarOpen && <span className="nav-text">Dashboard</span>}
              </Link>
            </li>
            <li className={location.pathname === '/manage-products' ? 'active' : ''}>
              <Link to="/manage-products" title="Manage Products">
                <InventoryIcon className="icon" />
                {isSidebarOpen && <span className="nav-text">Manage Products</span>}
              </Link>
            </li>
            <li className={location.pathname === '/analytics' ? 'active' : ''}>
              <Link to="/analytics" title="Growth & Analytics">
                <AnalyticsIcon className="icon" />
                {isSidebarOpen && <span className="nav-text">Growth & Analytics</span>}
              </Link>
            </li>
            <li className={location.pathname === '/messages' ? 'active' : ''}>
              <Link to="/messages" title="Messages">
                <MailIcon className="icon" />
                {isSidebarOpen && <span className="nav-text">Messages</span>}
              </Link>
            </li>
            <li className={location.pathname === '/profile' ? 'active' : ''}>
              <Link to="/profile" title="Profile">
                <PersonIcon className="icon" />
                {isSidebarOpen && <span className="nav-text">Profile</span>}
              </Link>
            </li>
          </ul>
        </nav>
        {isSidebarOpen && (
          <div className="sidebar-footer">
            <button className="logout-button">
              <LogoutIcon className="icon" /> Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MsmeSidebar;