import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';

function ItemListContainer() {
    return (
        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Texto provisional
      </ReactBootStrap.Nav.Link>

    );
  }
export default ItemListContainer;