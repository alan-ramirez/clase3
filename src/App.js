import logo from '../src/logo.svg';
import './App.css';
import Navbar1 from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import ItemList from './components/ItemListContainer';
import ItemListContainer from './components/ItemListContainer';
import React, { useState, useEffect} from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';

function App() {
  const saludo = "Bienvenido a la página"
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
      <ItemCount/>
      <ItemListContainer saludo= {saludo}/>
      <ItemDetailContainer/> 


      <header className="App-header">

        <h4> Texto de prueba </h4>
      </header>
    </div>
  );
}

export default App;
