import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../mocks/FakeAPI'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState ({})
const [cargandin, setCargandin] = useState (false)

const {itemId} = useParams ()

    useEffect(()=>{
        setCargandin (true)
        getProducts
        .then ((res)=>
          setProductDetail(res.find((item) => item.id === itemId )))


        .catch ((error) => console.log(error))
        .finally (() => setCargandin(false))
    }, [itemId])
    console.log (productDetail)

  return (
    <div>
        {cargandin ? <p>Cargando</p> : <ItemDetail productDetail={productDetail } /> }
    </div>
  )
}

export default ItemDetailContainer