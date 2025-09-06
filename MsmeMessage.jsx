import React, { useState } from 'react';
import MsmeSidebar from './MsmeSidebar'; // Import the sidebar component
import './MsmeMessage.css'; // Import CSS for styling

const MsmeMessage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="message-container">
      <MsmeSidebar onSidebarToggle={handleSidebarToggle} /> {/* Sidebar displayed first */}
      <div className={`message-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <header className="message-header">
          <h1>Messages</h1>
          <input type="text" placeholder="Search conversations..." className="search-input" />
        </header>
        <div className="message-body">
          <aside className="conversation-list">
            <ul>
              <li className="conversation active">
                <h3>Maria's Bakery</h3>
                <p>Thank you for your order! Your buko pie will be ready tomorrow.</p>
                <span>2m ago</span>
              </li>
              <li className="conversation">
                <h3>Mountain Brew Coffee</h3>
                <p>We have new arabica beans available!</p>
                <span>1h ago</span>
              </li>
              <li className="conversation">
                <h3>Support Team</h3>
                <p>How can we help you today?</p>
                <span>1d ago</span>
              </li>
            </ul>
          </aside>
          <section className="chat-window">
            <div className="chat-messages">
              <div className="message received">
                <p>Hi! Thank you for your interest in our buko pie. How many would you like to order?</p>
                <span>10:32 AM</span>
              </div>
              <div className="message sent">
                <p>I'd like to order 2 buko pies. When can I pick them up?</p>
                <span>10:35 AM</span>
              </div>
              <div className="message received">
                <p>Perfect! Your order for 2 buko pies is confirmed. They will be ready tomorrow at 2 PM. Total is ₱500.</p>
                <span>10:37 AM</span>
              </div>
              <div className="message sent">
                <p>Great! I'll pay upon pickup. Thank you!</p>
                <span>10:40 AM</span>
              </div>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Type your message..." />
              <button className="send-button">Send</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MsmeMessage;