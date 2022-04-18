import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import ReactDOM from 'react-dom'
import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';
/* Si no uso FireStore, importo FakeAPI
import { getProducts } from '../mocks/FakeAPI';
*/
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';


const ItemListContainer = ({saludo}) => {
    const [listaProductos, setListaProductos] =useState ([])
    const [cargando, setCargando] = useState (false)

    const {categoryId} = useParams ()

    useEffect (() => {
        setCargando (true)

        // 1. Armo la referencia de forma sincrónica

        const productosRef = collection (db, "productos")
        const q = categoryId ? query (productosRef, where('category', '==', categoryId)) : productosRef

        // 2. Llamo de manera asincrónica a esa referencia

        getDocs (q)
            .then (resp => {
                const productos = resp.docs.map ((doc) => ({id: doc.id, ...doc.data()}))
                console.log(productos)
                setListaProductos (productos)
            })
            .finally (() =>{
                setCargando(false)
            })  

/* Si no uso Firestore, uso FakeAPI
        getProducts
        .then ((res) => {

            if (categoryId) {

                setListaProductos(res.filter ( (productos) => productos.category === categoryId) )
            } else {
                setListaProductos(res)
            }
            })

        .catch ((error) => console.log (error))
        .finally (()=> setCargando(false))

    */

    }, [categoryId])


    if (cargando) {
        return <h2> Cargando...</h2>
    }

    return (
        <div>
            <h1>{saludo}</h1>
            <ItemList listaProductos={listaProductos}/>
        </div>
    )
    }

export default ItemListContainer;