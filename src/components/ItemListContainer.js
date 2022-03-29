import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import ReactDOM from 'react-dom'
import React, { useState, useEffect} from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({saludo}) => {
    const [listaProductos, setListaProductos] =useState ([])
    const [cargando, setCargando] = useState (false)

    const productos = [
        {id:'01', name:'articulo1', description:"sarasa", img: 'https://picsum.photos/200', stock:"2"},
        {id:'02', name:'articulo2', description:"sarasa", img: 'https://picsum.photos/201', stock:"4"},
        {id:'03', name:'articulo3', description:"sarasa", img: 'https://picsum.photos/202', stock:"3"},
        {id:'04', name:'articulo4', description:"sarasa", img: 'https://picsum.photos/203', stock:"1"},
        {id:'05', name:'articulo5', description:"sarasa", img: 'https://picsum.photos/204', stock:"6"},
        {id:'06', name:'articulo6', description:"sarasa", img: 'https://picsum.photos/205', stock:"5"}
    ]

    const getProducts = new Promise ((resolve, reject) => {
        let condition = true
        if (condition) {
            setTimeout (() => {
                resolve (productos)
            },2000)
        } else {
            reject ('se pudrio todo')
        }
    })
    useEffect (() => {
        setCargando (true)
        getProducts
        .then ((res) => setListaProductos(res))
        .catch ((error) => console.log (error))
        .finally (()=> setCargando(false))
    }, [])

    return (
        <div>
            <h1>{saludo}</h1>
            {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
            
        </div>
    )
    }
    
export default ItemListContainer;