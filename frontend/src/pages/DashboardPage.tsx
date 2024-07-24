import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/DashboardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
    </div>
  );
};

export default DashboardPage;
