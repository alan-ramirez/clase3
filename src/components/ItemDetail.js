import React from 'react'

const ItemDetail = ({productDetail}) => {
    const {name, description, img, stock, price} = productDetail
  return (
    <div>
        <h2>Detalle del producto {name} </h2>
        <img src={img} alt={name} ></img>
        <p> {description} </p>
        <p>${price} </p>
    </div>
  )
}

export default ItemDetail