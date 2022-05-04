import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/config'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState ({})
const [cargandin, setCargandin] = useState (false)

const {itemId} = useParams ()

    useEffect(()=>{
        setCargandin (true)

        const docRef = doc (db, "productos", itemId)
        getDoc(docRef)
          .then(doc => {
            const prod = {id: doc.id, ...doc.data ()}
            setProductDetail({id: doc.id, ...doc.data ()})
          })
          .finally (() =>{
            setCargandin(false)
          })
    }, [itemId])
    console.log (productDetail)

  return (
    <div>
        {cargandin ? <p>Cargando</p> : <ItemDetail productDetail={productDetail } /> }
    </div>
  )
}

export default ItemDetailContainer