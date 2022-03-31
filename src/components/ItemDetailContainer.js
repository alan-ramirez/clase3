import React, { useEffect, useState } from 'react'
import { getProducts } from '../mocks/FakeAPI'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState ({})
const [cargandin, setCargandin] = useState (false)

    useEffect(()=>{
        setCargandin (true)
        getProducts
        .then ((res)=> setProductDetail(res.find((item) => item.id === '05')))
        .catch ((error) => console.log(error))
        .finally (() => setCargandin(false))
    }, [])
    console.log (productDetail)

  return (
    <div>
        {cargandin ? <p>Cargandin</p> : <ItemDetail productDetail={productDetail } /> }
    </div>
  )
}

export default ItemDetailContainer