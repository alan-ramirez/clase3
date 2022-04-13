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
import Cart from './components/Cart';
import {CartContext, CartProvider} from "./context/CartContext";

function App() {
  const saludo = "Bienvenido a la página";
 

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar1 />
          
          <Routes>
            <Route path='/' element= {<ItemListContainer saludo= {saludo}/> } />
            <Route path='/category/:categoryId' element= {<ItemListContainer saludo= {saludo}/> } />
            <Route path='/item/:itemId' element= {<ItemDetailContainer/> } />
            <Route path='/cart' element= {<Cart/> } />

          </Routes>


          <footer className="App-footer">
            <br></br>
            <h5> Texto del footer </h5>

          </footer>

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
