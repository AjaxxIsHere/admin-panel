import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaBars, FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import '../styles/dashboard.css';

function Header({ onSidebarToggle, darkMode, setDarkMode }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className={`dashboard-header${darkMode ? ' dark' : ''}`}>  
      <div className="header-left">
        <button className="sidebar-toggle" onClick={onSidebarToggle} aria-label="Toggle sidebar">
          <FaBars />
        </button>
        <span className="brand">Intellident.ai</span>
      </div>
      <div className="header-center">
        <div className="global-search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <button className="icon-btn" aria-label="Notifications">
          <FaBell />
        </button>
        <div className="user-menu" onClick={() => setShowDropdown(v => !v)}>
          <FaUserCircle className="avatar" />
          {showDropdown && (
            <div className="dropdown">
              <a href="#profile">Profile</a>
              <a href="#settings">Settings</a>
              <a href="#logout">Logout</a>
            </div>
          )}
        </div>
        <button className="icon-btn" onClick={() => setDarkMode(m => !m)} aria-label="Toggle dark mode">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
