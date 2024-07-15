import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/map">Map</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
export {};