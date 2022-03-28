import React, { useState, useEffect} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import ReactDOM from 'react-dom'

function ItemCount () {
    const [contar, setContar] = useState (0) ;
          
    const sumar = () => {
        setContar (contar + 1)
      };
    
    const restar = () => {
        if (contar >= 1) {
          setContar (contar - 1)
        }
        
      };
    return (
        

        useEffect ( () => {
          console.log("Total: " + contar)
        }, [contar])
    )
}
export default ItemCount;