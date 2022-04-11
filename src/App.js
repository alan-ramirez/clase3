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
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const saludo = "Bienvenido a la página";

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar1 />
        <ItemCount/>
        
        <Routes>
          <Route path='/' element= {<ItemListContainer saludo= {saludo}/> } />
          <Route path='/category/:categoryId' element= {<ItemListContainer saludo= {saludo}/> } />
          <Route path='/item/:itemId' element= {<ItemDetailContainer/> } />


        </Routes>


        <footer className="App-footer">

          <h4> Texto de prueba </h4>

        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
