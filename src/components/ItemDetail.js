import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({productDetail}) => {
    const {id, name, description, img, stock, price} = productDetail


    const navigate = useNavigate ()
    
    const handleNavigate = () => {
      navigate (-1)
    }

    const[cantidad, setCantidad] = useState (1)
    
    const agregarAlCarrito = () => {
      const ItemtoAdd = {
        id,
        name,
        price,
        img,
        cantidad
      }
      console.log (ItemtoAdd)
    }

    return (
      <div>
          <h2>Detalle del producto {name} </h2>
          <img src={img} alt={name} ></img>
          <p> {description} </p>
          <p>${price} </p>
          <small>Stock disponible: {stock} </small>

          <ItemCount
            max={stock}
            cantidad={cantidad}
            setCantidad = {setCantidad}
            onAdd = {agregarAlCarrito}
          /> 

          <hr></hr>
          <button className='btn btn-outline-primary'onClick={handleNavigate} >Volver</button>
          
      </div>
    )
}

export default ItemDetail