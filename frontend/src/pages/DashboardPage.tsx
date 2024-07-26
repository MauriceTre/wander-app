import React from 'react';
import Dashboard from '../components/Dashboard'; // Die Dashboard-Komponente importieren
import '../styles/DashboardPage.css'; // Importieren Sie die Styles für diese Seite

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page-container">
      <Dashboard />
    </div>
  );
};

export default DashboardPage;

