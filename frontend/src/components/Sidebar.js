import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MdDashboard,
  MdShoppingCart,
  MdStore,
  MdPeople,
  MdLocalShipping,
  MdSettings,
  MdPerson,
  MdLogout,
} from 'react-icons/md';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <div className="sidebar">
      <div className="logo">
        <MdStore /> OrderPro
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
              <MdDashboard /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orders" className={location.pathname === '/orders' ? 'active' : ''}>
              <MdShoppingCart /> Orders
            </Link>
          </li>
          <li>
            <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
              <MdStore /> Products
            </Link>
          </li>
          <li>
            <Link to="/customers" className={location.pathname === '/customers' ? 'active' : ''}>
              <MdPeople /> Customers
            </Link>
          </li>
          <li>
            <Link to="/deliveries" className={location.pathname === '/deliveries' ? 'active' : ''}>
              <MdLocalShipping /> Deliveries
            </Link>
          </li>
          <li>
            <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
              <MdSettings /> Settings
            </Link>
          </li>
        </ul>
      </nav>
      {user && (
        <div className="user-info">
          <div className="avatar">
            {user.name ? user.name.charAt(0).toUpperCase() : <MdPerson />}
          </div>
          <div className="details">
            <p>{user.name}</p>
            <p>{user.isAdmin ? 'admin' : 'user'}</p>
          </div>
          <div className="switch-role" style={{marginLeft: 'auto'}}>
            <button onClick={logout} title="Logout">
              <MdLogout />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;