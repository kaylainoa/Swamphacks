

import logo from './logo.svg';
import './App.css';
import pfp from './Assets/react-pic.png';
import Home from "./Home.js";
import LoginPage from "./LoginPage.js";

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
      <Home/>
    </div>

  );
}

export default App;
 
