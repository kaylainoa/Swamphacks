import React from 'react'
import './App.css';
import pfp from './Assets/react-pic.png';
import anonymous from './Assets/anonymous.png';
import doctor from './Assets/doctor.png';
import US from './Assets/united-states.png';
import blank from './Assets/fill-in-img.jpg';
import homelanding from './Assets/women.jpg';
import aboutusphoto from './Assets/women2.jpg';
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <div>

      <header className="App-header">
        <h1>My Body My Place</h1>
      </header>
      <div className="Purpose">
        <div class="box" id="medical-prof">
          <img src={doctor} className="doctor-icon"/>
          <h3>Access to Medical Professionals</h3>
          <p>Get contact information to reliable clinics</p>
        </div>
        <div class="box" id="anonymous">
          <img src={anonymous} className="anon-icon"/>
          <h3>Remain Anonymous</h3>
          <p>You don't have to identify yourself until you're 100% certain</p>
        </div>
        <div class="box" id="medical-prof">
        <img src={US} className="US-icon"/>
          <h3>United States Based</h3>
          <p>Helping you find the clinics you need around the United States</p>
        </div>
      </div>

      <div className="About-Us">
        <div className="column">
          <h2> About Us</h2>
          <p>At (Your Website Name), we’re committed to helping women easily access nearby abortion resources. 
          Our platform connects women with safe, confidential healthcare providers, clinics, and support services,
          offering up-to-date information to help them make informed decisions. We believe every woman deserves the 
          right to choose, and our mission is to remove barriers to reproductive healthcare by providing trusted 
          resources and support.</p>

        </div>
        <div className="column">
          <div className="about-image">
            <img src={aboutusphoto} className="Women2"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
