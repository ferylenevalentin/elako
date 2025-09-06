import React from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './MsmeProfile.css'; // Import CSS for styling

const MsmeProfile = () => {
  return (
    <div className="profile-container">
      <MsmeSidebar /> {/* Sidebar displayed first */}
      <div className="profile-content">
        <header className="profile-header">
          <h1>Profile Settings</h1>
        </header>
        <section className="profile-details">
          <div className="personal-info">
            <h2>Personal Information</h2>
            <div className="info-card">
              <div className="profile-picture">
                <img src="profile-picture.jpg" alt="Profile" />
              </div>
              <div className="info-fields">
                <p><strong>Full Name:</strong> Maria's MSME</p>
                <p><strong>Email:</strong> asd@sa</p>
                <p><strong>Phone Number:</strong> +63 912 345 6789</p>
                <p><strong>Address:</strong> 123 Main Street, Makati City, Philippines</p>
                <p><strong>Bio:</strong> Passionate about creating quality handmade products and supporting local communities.</p>
              </div>
              <button className="edit-profile-button">Edit Profile</button>
            </div>
          </div>
          <div className="statistics">
            <h2>Statistics</h2>
            <div className="stats-card">
              <p><strong>Products Listed:</strong> 15</p>
              <p><strong>Total Sales:</strong> ₱45,230</p>
              <p><strong>Customer Reviews:</strong> 4.8/5</p>
            </div>
          </div>
        </section>
        <section className="account-settings">
          <h2>Account Settings</h2>
          <div className="settings-actions">
            <button>Change Password</button>
            <button>Notification Preferences</button>
            <button>Privacy Settings</button>
            <button className="delete-account-button">Delete Account</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MsmeProfile;