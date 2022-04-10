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
import {BrowserRouter} from 'react-router-dom';

function App() {
  const saludo = "Bienvenido a la página";
  
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
