import React from 'react';
import cart from '../cart.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';

function Cart() {
    return (
          <ReactBootStrap.Navbar.Brand href="#home">
            <img
              src={cart}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="cart"    
            />
          </ReactBootStrap.Navbar.Brand>

    );
  }
export default Cart;