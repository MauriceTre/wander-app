import React from 'react';

interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}</h2>
      <p>This is your personalized dashboard.</p>
    </div>
  );
};

export default Dashboard;

