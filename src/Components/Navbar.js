import React from "react";
import { Link } from "react-router-dom";
import './/Navbar.css';


const Navbar = () => {
  return (

    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-text">Abortion Title</span>
      </div>

      <div className="navbar-right">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/clinic" className="navbar-link">Clinics</Link>
        {/*<Link to="/chatbot" className="navbar-link">Chatbot</Link>*/}
      </div>

    </div>
  )
};

export default Navbar;