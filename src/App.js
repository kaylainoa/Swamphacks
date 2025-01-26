import './App.css';
import Home from "./Home.js";
import LoginPage from "./LoginPage.js";
import Clinic from "./Clinic.js";
import CompletedLogin from "./completedLogin.js";
//import Chatbot from "./Chatbot.js";
//import ClinicFinder from ".//Components/ClinicFinder.js";
import Navbar from ".//Components/Navbar.js";
import Chatbot from ".//Chatbot.js";

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      
      <Router>
      <Navbar /> {}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/clinic" element={<Clinic/>}/>
          <Route path="/completedlogin" element={<CompletedLogin/>}/>


        </Routes>
        <Chatbot />
      </Router>
    </div>

  );
}

export default App;
 
