import React from 'react'
import './App.css';
import pfp from './Assets/react-pic.png';
import anonymous from './Assets/anonymous.png';
import doctor from './Assets/doctor.png';
import US from './Assets/united-states.png';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='navbar'>
      <img src={logo} className="myLogo"/>
      </div>
      <header className="App-header">
        <h1>Website Name</h1>
        <div className = "tagline">What are we?</div>
        <img src={pfp} className="pfp_pic"/>
      </header>
      <div className="Purpose">
        <div class="box" id="medical-prof">
          <img src={doctor} className="doctor-icon"/>
          <h3>Access to Medical Professionals</h3>
        </div>
        <div class="box" id="anonymous">
          <img src={anonymous} className="anon-icon"/>
          <h3>Remain Anonymous</h3>
        </div>
        <div class="box" id="medical-prof">
        <img src={US} className="US-icon"/>
          <h3>United States Based</h3>
        </div>
      </div>
      <div className="About-Us">
        <h2> About Us</h2>
        <p>At (Your Website Name), we’re committed to helping women easily access nearby abortion resources. 
        Our platform connects women with safe, confidential healthcare providers, clinics, and support services,
        offering up-to-date information to help them make informed decisions. We believe every woman deserves the 
        right to choose, and our mission is to remove barriers to reproductive healthcare by providing trusted 
        resources and support.</p>


      </div>
    </div>
  )
}

export default Home
