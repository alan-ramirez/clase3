import React, { useContext } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../context/CartContext';

function Carrito() {

    const {cartQuantity} = useContext (CartContext)

    return (
      <LinkContainer to= {"/cart"} >
          <ReactBootStrap.Navbar.Brand >
            <BsFillCartFill className="cart-widget"/>
            <span> {cartQuantity()} </span>
          </ReactBootStrap.Navbar.Brand>
      </LinkContainer>

    );
  }
export default Carrito; 