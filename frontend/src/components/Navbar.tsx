import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../auth';

const Navbar: React.FC = () => {
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
