import React from 'react';
import logo1 from '../logo1.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import Cart from './CartWidget';
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

function Navbar1() {
    return (
      <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Container>
          <LinkContainer to="/">
            <ReactBootStrap.Navbar.Brand>
              <img
                src={logo1}
                width="100"
                height="70"
                className="d-inline-block align-top"
                alt="logo"    
              />
            </ReactBootStrap.Navbar.Brand>
          </LinkContainer>

          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <LinkContainer to="/">
                <ReactBootStrap.Nav.Link>Inicio</ReactBootStrap.Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/nosotros">
                <ReactBootStrap.Nav.Link>Nosotros</ReactBootStrap.Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/productos">
                <ReactBootStrap.NavDropdown title="Productos" id="collasible-nav-dropdown">

                  <LinkContainer to="/category/guitarras" id="collasibleElement">
                    <ReactBootStrap.NavDropdown.Item>Guitarras</ReactBootStrap.NavDropdown.Item>
                  </LinkContainer>
                  
                  <LinkContainer to="/category/percusion" id="collasibleElement">
                    <ReactBootStrap.NavDropdown.Item>Percusión</ReactBootStrap.NavDropdown.Item>
                  </LinkContainer>
                  
                  <LinkContainer to="/category/teclados" id="collasibleElement">
                    <ReactBootStrap.NavDropdown.Item>Teclados</ReactBootStrap.NavDropdown.Item>
                  </LinkContainer>
                  
                  <ReactBootStrap.NavDropdown.Divider />

                  <LinkContainer to="/category/equipamiento" id="collasibleElement">
                    <ReactBootStrap.NavDropdown.Item>Equipamiento</ReactBootStrap.NavDropdown.Item>
                  </LinkContainer>
                  
                </ReactBootStrap.NavDropdown>
              </LinkContainer>
              

            </ReactBootStrap.Nav>

            <ReactBootStrap.Nav>

              <LinkContainer to="/login">
                <ReactBootStrap.Nav.Link href="#deets">Login</ReactBootStrap.Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/cart">
                <Cart />
              </LinkContainer>

              <LinkContainer to="/cart">
                <ReactBootStrap.Nav.Link eventKey={2}>
                    Carrito
                </ReactBootStrap.Nav.Link>
              </LinkContainer>

            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
export default Navbar1;
