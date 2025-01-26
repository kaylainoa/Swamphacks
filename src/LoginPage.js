import React from 'react';
import LoginButton from './Components/LoginButton';
import ClinicFinder from './Components/ClinicFinder.js';
import './LoginButton.css';  

const LoginPage = () => {
  return (
    <div>
      <div className="clinic_title">Login below to save your nearby locations:</div>

      {/* <h1>Login below to save your nearby locations:</h1> */}
      <LoginButton />
    </div>
  );
}

export default LoginPage;
