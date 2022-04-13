import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({productDetail}) => {
    const {id, name, description, img, stock, price} = productDetail

    const {addItem, isInCart} = useContext (CartContext)
    console.log (isInCart (id))

    const navigate = useNavigate ()
    
    const handleNavigate = () => {
      navigate (-1)
    }

    const[cantidad, setCantidad] = useState (1)
    
    const agregarAlCarrito = () => {
      const itemtoAdd = {
        id,
        name,
        price,
        img,
        cantidad
      }
      addItem (itemtoAdd)
    }

    return (
      <div>
          <h2>Detalle del producto {name} </h2>
          <img src={img} alt={name} ></img>
          <p> {description} </p>
          <p>${price} </p>
          <small>Stock disponible: {stock} </small>
          
          {
            !isInCart (id)
            ? <ItemCount
                max={stock}
                cantidad={cantidad}
                setCantidad = {setCantidad}
                onAdd = {agregarAlCarrito}
                /> 
            : <Link to="/cart" className='btn btn-success'>Terminar mi compra</Link>
          }

          <hr></hr>
          <button className='btn btn-outline-primary'onClick={handleNavigate} >Volver</button>
          
      </div>
    )
}

export default ItemDetail