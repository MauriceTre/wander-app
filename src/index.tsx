import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import der globalen CSS-Datei
import App from './App';
import reportWebVitals from './reportWebVitals'; // Import der reportWebVitals Funktion

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Aufruf der reportWebVitals Funktion

