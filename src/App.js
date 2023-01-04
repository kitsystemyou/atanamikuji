import logo from './images/omikuji.png';
import './App.css';
import { React } from "react";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Link to="/result">おみくじを引く</Link>
      </header>
    </div>
  );
}

export default App;
