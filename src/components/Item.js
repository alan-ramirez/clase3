import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Item = ({producto}) => {
  return (
    <ReactBootStrap.Card style={{ width: '18rem' }}>
        <ReactBootStrap.Card.Img variant="top" src={producto.img} />
        <ReactBootStrap.Card.Body>
            <ReactBootStrap.Card.Title className="tituloCard">{producto.name}</ReactBootStrap.Card.Title>
            <ReactBootStrap.Card.Text className="textoCard">
                {producto.name}
            </ReactBootStrap.Card.Text>
            <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Subtitle className="mb-2 text-muted">Stock: {producto.stock}</ReactBootStrap.Card.Subtitle>
    </ReactBootStrap.Card>
  )
}

export default Item