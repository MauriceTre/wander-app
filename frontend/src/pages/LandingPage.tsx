import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; // Importieren Sie die Styles für diese Seite

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to the Wander App</h1>
      <p>This is the landing page of the application.</p>
      <div className="button-group">
        <Link to="/register" className="button-link">Register</Link>
        <Link to="/login" className="button-link">Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
