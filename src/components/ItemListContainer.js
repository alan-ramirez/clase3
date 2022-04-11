import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import ReactDOM from 'react-dom'
import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';
import { getProducts } from '../mocks/FakeAPI';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({saludo}) => {
    const [listaProductos, setListaProductos] =useState ([])
    const [cargando, setCargando] = useState (false)

    const {categoryId} = useParams ()

    useEffect (() => {
        setCargando (true)
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
    }, [categoryId])

    return (
        <div>
            <h1>{saludo}</h1>
            {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
            
        </div>
    )
    }

export default ItemListContainer;