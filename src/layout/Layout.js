import React, { useState, useEffect } from 'react';
import Header from '../components/NavBar';
import Sidebar from '../components/Sidebar';
// import './styles/dashboard.css';

function Layout({ children }) {
  const [sidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dashboard-dark') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('dashboard-dark', darkMode);
  }, [darkMode]);

  // Hide sidebar on mobile after navigation
  const handleSidebarClose = () => setShowSidebar(false);

  return (
    <div>
      <Header
        onSidebarToggle={() => setShowSidebar((v) => !v)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Sidebar
        collapsed={sidebarCollapsed}
        showSidebar={showSidebar}
        onClose={handleSidebarClose}
        darkMode={darkMode}
      />
      <main
        className={`dashboard-main${darkMode ? ' dark' : ''}${sidebarCollapsed ? ' collapsed' : ''}`}
        onClick={showSidebar ? handleSidebarClose : undefined}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
