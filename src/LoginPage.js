
import React from 'react'
import LoginButton from './/Components/LoginButton';
import ClinicFinder from ".//Components/ClinicFinder.js";

const LoginPage = () => {
  return (
    <div>
      Login below to save your nearby locations:
      <LoginButton /> {}
      <ClinicFinder /> {}

    </div>
  )
}

export default LoginPage
