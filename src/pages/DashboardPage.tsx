import React from 'react';

const DashboardPage: React.FC = () => {
  // fetch data from backend
  // display total km, visited places, etc.
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total gelaufene Kilometer: {/* Summe der Kilometer */}</p>
      <button>Besuchte Orte</button>
      <button>Highlights</button>
      <button>Neue Route erstellen</button>
    </div>
  );
};

export default DashboardPage;
