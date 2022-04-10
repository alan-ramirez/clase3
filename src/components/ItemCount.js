import React, { useState, useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import ReactDOM from 'react-dom'

function ItemCount () {
  const saludo = "Bienvenido a la página"
  const initial = 0;
  const [contar, setContar] = useState (initial);

  useEffect ( () => {
    console.log("Total: " + contar)
  }, [contar]);

  const stock = 5
  const onAdd = () => {
    if (contar <= stock -1) {
      setContar (contar + 1)  
    }
    
  };

  const onSubstract = () => {
    if (contar >= 1) {
      setContar (contar - 1)
    }
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Stock: {stock} </h4>
    <h4>Cantidad en Carrito: {contar} </h4>
    <button onClick={onAdd}>Agregar</button>
    <button onClick={onSubstract}>-</button>

      </header>
    </div>
  );
}

export default ItemCount;