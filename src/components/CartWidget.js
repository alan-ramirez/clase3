import React, { useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../context/CartContext';

function Carrito() {

    const {cart, cartQuantity} = useContext (CartContext)

    return (
      {/* Si el carrito está vacio, CartWidget no se muestra */}
      cart.length > 0 &&
      <LinkContainer to= {"/cart"} >
          <ReactBootStrap.Navbar.Brand >
            <BsFillCartFill className="cart-widget"/>
            <span> {cartQuantity()} </span>
            <h6>Carrito</h6>
          </ReactBootStrap.Navbar.Brand>
      </LinkContainer>

    );
  }
export default Carrito; 