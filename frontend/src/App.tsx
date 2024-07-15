import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import MapPage from './pages/MapPage';
import Auth from "./components/Auth";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/dashboard" Component={DashboardPage} />
        <Route path="/map" Component={MapPage} />
        <Route path="/auth" Component={Auth} />
      </Routes>
    </Router>
  );
}

export default App;




