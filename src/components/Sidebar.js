import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaFileInvoice, FaShoppingCart, FaCloudUploadAlt, FaCog} from 'react-icons/fa';
import '../styles/dashboard.css';

const navLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
  { to: '/purchase-orders', label: 'Purchase Orders', icon: <FaShoppingCart /> },
  { to: '/invoices', label: 'Invoices', icon: <FaFileInvoice /> },
  { to: '/file-upload', label: 'File Upload', icon: <FaCloudUploadAlt /> },
  { to: '/settings', label: 'Settings', icon: <FaCog /> },
];

function Sidebar({ collapsed, showSidebar, onClose, darkMode }) {
  return (
    <aside className={`dashboard-sidebar${collapsed ? ' collapsed' : ''}${showSidebar ? ' show' : ''}${darkMode ? ' dark' : ''}`}>
      <nav>
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={onClose}
          >
            <span className="icon">{link.icon}</span>
            <span className="label">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
