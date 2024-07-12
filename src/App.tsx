import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/dashboard" Component={DashboardPage} />
        <Route path="/map" Component={MapPage} />
      </Routes>
    </Router>
  );
}

export default App;




