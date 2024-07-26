import React from 'react';
import Register from '../components/Register'; // Die Registrierungs-Komponente importieren
import '../styles/Register.css'; // Importieren Sie die Styles für diese Seite

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page-container">
      <Register />
    </div>
  );
};

export default RegisterPage;
