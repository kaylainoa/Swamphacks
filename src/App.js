import './App.css';
import Home from "./Home.js";
import LoginPage from "./LoginPage.js";
import Clinic from "./Clinic.js";
import ClinicFinder from "../Components/ClinicFinder.js";

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
          <Route path="/clinic" element={<Clinic/>}/>
          <Route path="/clinicfinder" element={<ClinicFinder/>}/>


        </Routes>
      </Router>
    </div>

  );
}

export default App;
 
