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
  const initial = 1;
  const [contar, setContar] = useState (initial);

  useEffect ( () => {
    console.log("Total: " + contar)
  }, [contar]);

  const stock = 5
  const sumar = () => {
    if (contar <= stock -1) {
      setContar (contar + 1)  
    }
    
  };

  const restar = () => {
    if (contar >= 1) {
      setContar (contar - 1)
    }
    
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
        <h4>Stock: {stock} </h4>
        <h4>Cantidad: {contar} </h4>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        

      </header>
    </div>
  );
}

export default App;
