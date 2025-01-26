import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate(); // useHistory() for v5 
  const handleLogin = () => { 
    loginWithRedirect({
     redirectUri: window.location.origin + "/loggedin" // Explicit redirect URI after login 
     }); 
    }; 
  return <button onClick={handleLogin}>Log In</button>; };
  

export default LoginButton;
