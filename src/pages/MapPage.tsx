import React from 'react';
import MapPage from '../components/MapPage';
import Navbar from '../components/Navbar';
import '../styles/MapPage.css';

const MapPageWrapper: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MapPage />
    </div>
  );
};

export default MapPageWrapper;

export {};
