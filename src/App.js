import logo from '../src/logo.svg';
import './App.css';
import Navbar1 from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import ItemList from './components/ItemListContainer';
import ItemListContainer from './components/ItemListContainer';
import React, { useState, useEffect} from 'react';

function App() {
  const [contar, setContar] = useState (0);

  useEffect ( () => {
    console.log("Total: " + contar)
  }, [contar]);

  const encenderApagar = () => {
    setContar (contar + 1)
  };

  return (
    <div className="App">
    <Navbar1 />
    <ItemListContainer />


      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4>Clicks: {contar} </h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>

      </header>
    </div>
  );
}

export default App;
