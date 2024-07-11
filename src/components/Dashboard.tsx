import React, { useEffect, useState } from 'react';
import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [routes, setRoutes] = useState<any[]>([]);
  const [totalKm, setTotalKm] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        // Load user routes from the database here
        // Dummy data for example
        const userRoutes = [
          { name: 'Route 1', distance: 5 },
          { name: 'Route 2', distance: 10 }
        ];
        setRoutes(userRoutes);
        setTotalKm(userRoutes.reduce((sum, route) => sum + route.distance, 0));
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {user && (
        <div>
          <p>Welcome, {user.displayName || user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
      <h2>Your Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>{route.name} - {route.distance} km</li>
        ))}
      </ul>
      <h2>Total Distance: {totalKm} km</h2>
      <button onClick={() => navigate('/map')}>Create New Route</button>
    </div>
  );
};

export default Dashboard;

export {};
