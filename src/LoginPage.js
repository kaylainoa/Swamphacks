import React from 'react';
import LoginButton from './Components/LoginButton';
import './LoginButton.css';  // Import the CSS file

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-prompt">Login below to save your nearby locations:</div>
        <p>Let's get started today</p>
        {/* Button text changes via prop */}
        <LoginButton text="Click here to login" />
      </div>
    </div>
  );
}

export default LoginPage;