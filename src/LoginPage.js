import React from 'react';
import LoginButton from './Components/LoginButton';
import ClinicFinder from './Components/ClinicFinder.js';
import './LoginButton.css';  

const LoginPage = () => {
  return (
    <div>
      <div className="login_title">Login below to save your nearby locations:</div>

      <LoginButton />
    </div>
  );
}

export default LoginPage;
