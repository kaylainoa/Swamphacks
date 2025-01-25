import logo from './logo.svg';
import './App.css';
import pfp from 'Assets/react-pic.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App header 1</h1>
        <div className = "tagline">A swamphacks website tagline</div>
        <img src={pfp} className="Assets/react-pic"/>

      </header>
    </div>
  );
}

export default App;
