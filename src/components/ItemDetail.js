import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ItemDetail = ({productDetail}) => {
    const {name, description, img, stock, price} = productDetail

    const navigate = useNavigate ()
    
    const handleNavigate = () => {
      navigate (-1)
    }

    return (
      <div>
          <h2>Detalle del producto {name} </h2>
          <img src={img} alt={name} ></img>
          <p> {description} </p>
          <p>${price} </p>
          <small>Stock disponible: {stock} </small>

          <hr></hr>
          <button className='btn btn-outline-primary'onClick={handleNavigate} >Volver</button>
      </div>
    )
}

export default ItemDetail