import React from 'react'
import './App.css';
import pfp from './Assets/react-pic.png';
import logo from './logo.svg';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <div className='navbar'>
    <img src={logo} className="myLogo"/>
    </div>
    <header className="App-header">
      <h1>App header 1</h1>
      <div className = "tagline">A swamphacks website tagline</div>
      <img src={pfp} className="pfp_pic"/>

    </header>
    </div>
  )
}

export default Home
