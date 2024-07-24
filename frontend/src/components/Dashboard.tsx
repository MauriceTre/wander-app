import React from 'react';
import Navbar from './Navbar';
import { getCurrentUser } from '../auth';
import '../styles/DashboardPage.css';

const Dashboard: React.FC = () => {
  const user = getCurrentUser();

  return (
    <div className="dashboard">
      <Navbar />
      <div className="content">
        <h1>Welcome, {user ? user : 'Guest'}!</h1>
        <p>This is your dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
