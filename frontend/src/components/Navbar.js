import React from 'react';
import { MdNotifications, MdAccountCircle } from 'react-icons/md';
import { useAuth } from '../contexts/AuthContext';

const Navbar = ({ title, subtitle }) => {
  const { user } = useAuth();

  return (
    <div className="navbar">
      <div className="title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="user-controls">
        <button className="icon-button">
          <MdNotifications />
          {/* <span className="badge">1</span> */}
        </button>
        <div className="user-profile">
          <MdAccountCircle style={{ fontSize: '2rem', color: '#6a5acd' }} />
          <span>{user ? user.name : 'Guest'}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;