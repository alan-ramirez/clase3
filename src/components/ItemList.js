import React from 'react'
import Item from './Item'

const ItemList = ({listaProductos}) => {
  return (
    <div className='d-flex'>
        {listaProductos.map((producto) => <Item producto= {producto} key= {producto.id} />)}
    </div>
  )
}

export default ItemList